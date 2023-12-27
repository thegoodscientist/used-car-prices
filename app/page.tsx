import Image from "next/image";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import globalMeta from "@/globalmeta";
import CarouselComponent from "@/components/(index)/_Carousel";
import CarQueryForm from "@/components/(index)/_Form";

export default function Home() {
  const imagesInSlider = [
    { img: "/images/aleksandr-popov-Xbh_OGLRfUM-unsplash.jpg" },
    { img: "/images/alex-suprun-A53o1drQS2k-unsplash.jpg" },
    { img: "/images/nabeel-syed-Jk3-Uhdwjcs-unsplash.jpg" },
  ];
  return (
    <>
      <Head>
        <title>Used Car Price Prediction</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={globalMeta.siteName} />
        <meta property="og:type" content={globalMeta.ogType} />
        <meta property="og:description" content={globalMeta.description} />
        <meta property="og:image" content={globalMeta.siteLogo} />
        <meta property="og:url" content={globalMeta.siteUrl} />
      </Head>
      <CarouselComponent data={imagesInSlider} />
      <CarQueryForm />
      <Footer />
      {/* </main> */}
    </>
  );
}
