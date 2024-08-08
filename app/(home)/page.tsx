"use client";

import React, { FC } from "react";
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Banner from "../_components/Home/Banner/Banner";
import Genre from "../_components/Genre/Genre";
import StreamDevices from "../_components/Home/StreamDevice/StreamDevice";

const Home: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Banner />
      <Genre />
      <StreamDevices />

      {/* <h1>Test</h1> */}
    </div>
  );
};

export default Home;
