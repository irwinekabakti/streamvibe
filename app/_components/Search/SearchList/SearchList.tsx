"use client";

import { FC } from "react";
import ShowsList from "../../Shows/ShowsList/ShowsList";
import { SearchBarWrapper } from "../SearchBar/style";

interface Show {
  id: number;
  name: string;
  [key: string]: any;
}

interface SearchResult {
  show: Show;
}

interface SearchListProps {
  searchResultsData: SearchResult[];
}

const SearchList: FC<SearchListProps> = ({ searchResultsData }) => {
  const showsData = searchResultsData.map(
    (singleResult: any) => singleResult.show
  );
  return (
    <SearchBarWrapper>
      <ShowsList showsData={showsData} showsTitle={"Search Results"} />
    </SearchBarWrapper>
  );
};

export default SearchList;
