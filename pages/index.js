import React from "react";
import Link from "next/link";
import Head from "next/head";

import "../styles/main.css";

const logo = `
<svg width="30px" height="18px" viewBox="0 0 30 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#000000">
            <path d="M7,0 L23,0 C24.1045695,-2.02906125e-16 25,0.8954305 25,2 C25,3.1045695 24.1045695,4 23,4 L7,4 C5.8954305,4 5,3.1045695 5,2 C5,0.8954305 5.8954305,2.02906125e-16 7,0 Z M12,7 L28,7 C29.1045695,7 30,7.8954305 30,9 C30,10.1045695 29.1045695,11 28,11 L12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 Z M2,14 L18,14 C19.1045695,14 20,14.8954305 20,16 C20,17.1045695 19.1045695,18 18,18 L2,18 C0.8954305,18 1.3527075e-16,17.1045695 0,16 C-1.3527075e-16,14.8954305 0.8954305,14 2,14 Z"></path>
        </g>
    </g>
</svg>
`;

const Home = () => (
  <div>
    <Head>
      <title>Level Technologies</title>
    </Head>

    <div className="p-8 max-w-xl mx-auto text-2xl text-gray-700 antialiased">
      <div className="pb-16">
        <div dangerouslySetInnerHTML={{ __html: logo }} />
      </div>

      <p className="pb-8">
        Level Technologies is a small software company creating tools for the
        web. Level was founded by{" "}
        <a
          href="https://www.derrickreimer.com"
          className="border-b-4 border-gray-300 font-bold text-gray-900"
        >
          Derrick Reimer
        </a>{" "}
        in 2018.
      </p>

      <p className="pb-8">
        We are currently building{" "}
        <a
          href="https://statickit.com"
          className="border-b-4 border-gray-300 font-bold text-gray-900"
        >
          StaticKit
        </a>
        , a collection of dynamic components for static sites.
      </p>
    </div>
  </div>
);

export default Home;
