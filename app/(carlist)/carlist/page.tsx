"use client";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import globalMeta from "@/globalmeta";
import CarsSearchedFor from "@/components/carlist/CarList";

export default function SearchedCarsList() {
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <CarsSearchedFor />
        <Footer />
      </div>
    </>
  );
}
