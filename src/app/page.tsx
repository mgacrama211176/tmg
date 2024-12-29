import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main className="relative flex flex-col items-center justify-center px-5 w-full">
        <div className="relative flex items-center justify-center w-full h-[500px] md:h-[670px] mt-32 border-2 border-transparent rounded-lg bg-[#2d3259fb] shadow-lg">
          <div className="text-tertiary font-bold text-5xl md:text-[80px] leading-[1.1] lg:leading-[80px] ml-4 md:ml-36 relative mt-10 z-10 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="flex flex-col z-10">
                <h1 className="font-bold">Efficient</h1>
                <h1 className="font-bold ml-10 ">Ethical</h1>
                <h1 className="font-bold ml-20 ">Effective</h1>
              </div>
              <div className="absolute -left-8 -top-16 md:-top-20 -z-10">
                <Image
                  src="/check.svg"
                  alt="check"
                  width={300}
                  height={0}
                  className="w-[200px] md:w-[250px] lg:w-[300px]"
                />
              </div>
            </div>

            <div className="text-base font-normal mt-10">
              <p>Global staffing solutions for your business</p>
            </div>
            <div>
              <Link
                href="/"
                className="bg-secondary text-white px-10 py-4 rounded-lg mt-5 w-full lg:w-96 flex justify-center items-center hover:opacity-80 transition-all duration-300"
              >
                <span className="text-base font-normal">
                  GET VIRTUAL ASSISTANT
                </span>
              </Link>
            </div>
          </div>

          <div className=" z-0 right-[40px] top-[0%] min-w-[510px] xl:min-w-[650px] h-[650px] -translate-y-[10%] absolute md:relative">
            <div
              className="w-[80%] h-[90%] rounded-full blur-[130px]"
              style={{
                background:
                  "linear-gradient(133.13deg, #47BE26 30%, #1158DD 80%)",
                transform: "rotate(180deg)",
              }}
            />
            <div className="absolute -bottom-[75px] right-0">
              <div className="hidden md:block">
                <Image
                  src="/G-Agent.png"
                  alt="agent"
                  width={1200}
                  height={0}
                  className="hidden md:block min-w-[700px] overflow-hidden"
                />
              </div>
              <div>
                <div className="absolute -right-10 md:right-64 xl:right-20 bottom-0 -z-10">
                  <div className="relative">
                    <Image
                      src="/plane-path.svg"
                      alt="plane path"
                      width={900}
                      height={0}
                      className="min-w-[700px] opacity-80"
                    />

                    <Image
                      src="/plane.png"
                      alt="plane path"
                      width={40}
                      height={50}
                      className="absolute -right-12 bottom-[410px] w-[30px] xl:w-[40px] opacity-80 hidden xl:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
