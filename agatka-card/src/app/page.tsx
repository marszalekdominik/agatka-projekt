import Image from "next/image";
import HeroBanner from "./components/HeroBaner";
import AboutMe from "./components/AboutMe";
import Colaboration from "./components/Colaboration";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutMe />
      <Colaboration />
    </>
  );
}
