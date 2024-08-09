"use client";
import { FC, useEffect } from "react";
import SearchBar from "../_components/Search/SearchBar/SearchBar";
import { scrollToTop } from "@/utils/scrollToTop";
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Layout from "../_components/(shared)/Layout";

const SearchScreen: FC = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <Layout>
      <GlobalStyles />
      <div className="pg-search top-spacing-fix">
        <SearchBar />
      </div>
    </Layout>
  );
};

export default SearchScreen;
