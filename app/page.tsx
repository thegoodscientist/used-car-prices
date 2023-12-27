import Image from "next/image";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import globalMeta from "@/globalmeta";
import CarouselComponent from "@/components/(index)/_Carousel";

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
      <section className="container">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Search
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              (You will be navigated to the next page)
            </p>
          </a>
        </div>
      </section>
      <Footer />
      {/* </main> */}
    </>
  );
}
