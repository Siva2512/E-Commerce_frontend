import Hero from "@/pages/hero";
import Navbar from "../components/Navbar"; // 👈 Add this line
import CuratedStories from "@/pages/page2";
import Page3 from "@/pages/page3";
import OurStory from "@/pages/page4";
import Footer from "@/components/footer";
import Newsletter from "@/pages/page5";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CuratedStories />
      <Page3 />
      <OurStory />
      <Newsletter/>
      <Footer />
    </>
  );
}
