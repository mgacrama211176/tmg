"use client";
import React, { useState, useRef } from "react";
import axios from "axios";

type Props = {};

interface FileUpload {
  title: string;
  description: string;
  hint: string;
  name: string;
  type: string;
  size: number;
  lastModified: number;
  webkitRelativePath: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
  bytes: () => Promise<Uint8Array>;
  slice: () => Blob;
  stream: () => ReadableStream;
  text: () => Promise<string>;
}

const ApplicantForm = (props: Props) => {
  const [isSent, setIsSent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileUploads, setFileUploads] = useState<FileUpload[]>([
    {
      title: "Submit your CV or Resume in a PDF Format*",
      description: "",
      hint: "",
      name: "",
      type: "pdf",
      size: 10000000, //Maximum file size is 10MB
      lastModified: Date.now(),
      webkitRelativePath: "",
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      bytes: () => Promise.resolve(new Uint8Array(0)),
      slice: () => new Blob(),
      stream: () => new ReadableStream(),
      text: () => Promise.resolve(""),
    },
    {
      title: "DISC Assessment Result*",
      description:
        "Please upload the screenshot of your Tony Robbins DISC assessment test result. (https://www.tonyrobbins.com/disc)",
      hint: "",
      name: "",
      type: "pdf",
      size: 10000000, //Maximum file size is 10MB
      lastModified: Date.now(),
      webkitRelativePath: "",
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      bytes: () => Promise.resolve(new Uint8Array(0)),
      slice: () => new Blob(),
      stream: () => new ReadableStream(),
      text: () => Promise.resolve(""),
    },
    {
      title: "Create a 1-minute video*",
      description:
        "Share your professional background, strengths, weaknesses, your motivation for applying to the position, and what you aim to contribute to the role. ",
      hint: "Speak directly to the camera with a white background and submit your video in MP4 format.",
      name: "",
      type: "mp4",
      size: 10000000, //Maximum file size is 10MB
      lastModified: Date.now(),
      webkitRelativePath: "",
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      bytes: () => Promise.resolve(new Uint8Array(0)),
      slice: () => new Blob(),
      stream: () => new ReadableStream(),
      text: () => Promise.resolve(""),
    },
    {
      title: "System Requirements*",
      description:
        "Please submit screenshots displaying the specifications of your primary and backup computers, as well as screenshots of the details of your primary and backup internet connections.",
      hint: "",
      name: "",
      type: "png, jpg, jpeg",
      size: 10000000, //Maximum file size is 10MB
      lastModified: Date.now(),
      webkitRelativePath: "",
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      bytes: () => Promise.resolve(new Uint8Array(0)),
      slice: () => new Blob(),
      stream: () => new ReadableStream(),
      text: () => Promise.resolve(""),
    },
  ]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSent(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    await axios
      .post("/api/applicantForm", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsSent(false);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    //Sanitize to the 0 to +63
    if (e.target.name === "phone") {
      if (e.target.value.startsWith("0")) {
        e.target.value = e.target.value.replace(/^0/, "+63");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="w-full text-center mb-10">
        <h1 className="text-8xl font-black text-tertiary">JOIN OUR</h1>
        <h1 className="text-5xl font-black text-secondary  ">
          TASK MASTERS TEAM
        </h1>
        <h1 className="text-8xl font-black text-tertiary">TODAY</h1>
      </div>

      {/* Form */}
      <div className="w-full">
        <form
          className="flex flex-col gap-4 flex-wrap items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className=" flex flex-wrap gap-4 items-center justify-center">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name (First, Middle Name, last Name)*"
              className="p-2 border border-gray-300 rounded-md w-96"
              onChange={(e) => handleOnChange(e)}
            />
            <input
              name="address"
              type="text"
              placeholder="Complete Address*"
              className="p-2 border border-gray-300 rounded-md w-96"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <input
              name="email"
              type="email"
              placeholder="Email Address*"
              className="p-2 border border-gray-300 rounded-md w-96"
              onChange={(e) => handleOnChange(e)}
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number*"
              className="p-2 border border-gray-300 rounded-md w-96"
              onChange={(e) => handleOnChange(e)}
              maxLength={13}
              //Sanitize to +63
            />
          </div>
          <div className="flex flex-row flex-wrap gap-4 items-end justify-center w-[800px]">
            {fileUploads.map((file, index) => (
              <div className="flex flex-col w-[390px] h-full" key={index}>
                <div className="flex flex-col gap-2 pb-2">
                  <h3 className=" text-tertiary font-bold text-sm">
                    {file.title}
                  </h3>
                  <p className=" text-tertiary text-xs">{file.description}</p>
                  <p className=" text-tertiary text-xs">{file.hint}</p>
                </div>
                <div
                  className="flex flex-col items-center justify-center border bg-[#ffffff3e] border-gray-300 rounded-md p-4 border-dashed cursor-pointer h-[144px] text-tertiary"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {selectedFile ? (
                    <h4>{selectedFile.name}</h4>
                  ) : (
                    <h4>Click to upload files, or drag & drop files here </h4>
                  )}

                  <input
                    type="file"
                    name={file.name}
                    className="hidden"
                    onChange={(e) => handleFileChange(e)}
                    ref={fileInputRef}
                  />
                </div>
              </div>
            ))}
          </div>
          <input
            type="submit"
            value={isSent ? "Sending..." : "Submit"}
            className="bg-secondary text-white p-2 rounded-md w-32 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;
