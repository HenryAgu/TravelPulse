import Hero from "./components/Hero";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${urbanist.className}`}>
      <Hero />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        quis fuga ducimus officiis, delectus tempore nemo suscipit veritatis
        ullam sit! Autem, doloremque facere sequi in deserunt dolor nam alias
        quam?
      </p>
    </main>
  );
}
