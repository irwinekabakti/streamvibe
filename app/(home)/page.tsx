"use client";

import React, { FC } from "react";
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Banner from "../_components/Home/Banner/Banner";
import Genre from "../_components/Genre/Genre";
import StreamDevices from "../_components/Home/StreamDevice/StreamDevice";
import CommonQuestions from "../_components/Home/CommonQuestion/CommonQuestion";
import Subscription from "../_components/Home/Subscription/Subscription";
import FreeTrial from "../_components/FreeTrial/FreeTrial";
import Layout from "../_components/(shared)/Layout";

const Home: FC = () => {
  return (
    <Layout>
      <GlobalStyles />
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
      <Subscription />
      <FreeTrial />
    </Layout>
  );
};

export default Home;
