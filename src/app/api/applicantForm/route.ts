import { NextResponse } from "next/server";

const MONDAY_API_ENDPOINT = "https://api.monday.com/v2";
const BOARD_ID = "1888540409";
const GROUP_ID = "topics"; // "New Applicants" group

async function getApplicants() {
  const query = `
    query {
      boards(ids: ${BOARD_ID}) {
        items_page(limit: 1) {
          items {
            id
            name
            group {
              title
            }
            column_values {
              id
              type
              text
              value
            }
          }
        }
      }
    }
  `;

  const response = await fetch(MONDAY_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${process.env.MONDAY_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  return response.json();
}

async function createApplicant(formData: any) {
  console.log(formData);
  const query = `
    mutation ($itemName: String!, $columnValues: JSON!) {
      create_item (
        board_id: ${BOARD_ID},
        group_id: "${GROUP_ID}",
        item_name: $itemName,
        column_values: $columnValues
      ) {
        id
      }
    }
  `;

  const columnValues = {
    status: { index: 5 }, // "Default status
    short_text6: formData.address,
    short_text: formData.fullName,
    short_text60: formData.email,
    phone: { phone: formData.phone, countryShortName: "PH" },
    CV: formData.CV,
    // Add other fields as needed
  };

  const response = await fetch(MONDAY_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${process.env.MONDAY_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        itemName: "Incoming form answer",
        columnValues: JSON.stringify(columnValues),
      },
    }),
  });

  return response.json();
}

export async function GET() {
  try {
    const applicants = await getApplicants();
    console.log("Applicants Data:", JSON.stringify(applicants, null, 2));

    return NextResponse.json(applicants);
  } catch (error) {
    console.error("Monday.com API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch applicants data" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const result = await createApplicant(formData);

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    return NextResponse.json({
      message: "Application submitted successfully",
      id: result.data.create_item.id,
    });
  } catch (error) {
    console.error("Monday.com API Error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
