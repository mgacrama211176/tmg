import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main className="relative px-5 w-full">
        <Hero />
        <Steps />
      </main>
    </div>
  );
}
