import React, { useEffect } from "react";
import App from "next/app";
import Router from "next/router";
import "../styles/main.css";

import { loadFathom, trackPageView } from "../components/analytics";

Router.events.on("routeChangeComplete", url => {
  trackPageView();
  return true;
});

Router.events.on("routeChangeError", (err, url) => {
  console.error("Route change error", err, url);
});

function Layout({ children }) {
  useEffect(() => {
    loadFathom();
  });

  return <div className="antialiased">{children}</div>;
}

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }
}

export default MyApp;
