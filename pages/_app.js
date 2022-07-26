import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Head from "next/head";
import Header from "../components/header/Header";
import Loader from "../components/loader/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let load = new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    load.then((res) => setLoading(true));
  }, []);
  return (
    <>
      <Head>
        <meta http-equiv="content-language" content="en-us" />
        <meta name="keywords" content="amazing beer , tasty beer" />
        <title>Happy 🍻 Day</title>
      </Head>
      {!loading ? (
        <Loader />
      ) : (
        <div className="container bg-dark mx-auto w-full">
          <Header />
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}

export default MyApp;
