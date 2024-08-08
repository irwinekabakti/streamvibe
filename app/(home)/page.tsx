import React, { FC } from "react";
import Image from "next/image";
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Banner from "../_components/Home/Banner/Banner";

const Home: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Banner />
      {/* <h1>Test</h1> */}
    </div>
  );
};

export default Home;
