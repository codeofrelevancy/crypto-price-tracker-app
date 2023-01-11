import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            {/* TODO: header code */}

            {/* Main content - crypto cards */}
            <Ticker />

            {/* TODO: footer code */}
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
