import Hero from "@/pages/Home-page/Hero";
import CuratedEdits from "@/pages/Home-page/CuratedEdits";
import TrendingProducts from "@/pages/Home-page/TrendingProducts";
import BrandStory from "@/pages/Home-page/BrandStory";
import Newsletter from "@/pages/Home-page/Newsletter";



// import Footer from "@/components/footer";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <CuratedEdits />
      <TrendingProducts />
      <BrandStory />
      <Newsletter />
   
      {/* <Footer /> */}
    </>
  );
}
