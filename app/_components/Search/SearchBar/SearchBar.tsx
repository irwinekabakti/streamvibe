"use client";

import { useRef, useState, FormEvent, ChangeEvent } from "react";
import { Images } from "@/assets/images";
import { SearchBarWrapper } from "./style";
import { Icons } from "@/assets/icons";
import {
  fetchSearchResults,
  resetSearchResults,
} from "@/store/action/shows-slice";
import { selectSearchResults } from "@/store/selectors/showsSelectors";
import Image from "next/image";
import SearchList from "../SearchList/SearchList";
import { useAppDispatch, useAppSelector } from "@/store";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");
  const [hasValidQuery, setHasValidQuery] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchResultsData = useAppSelector(selectSearchResults);

  const isValidSearchQuery = (query: string) => {
    const regex = /^[\w\s\-',.?!&]+$/i;
    return regex.test(query);
  };

  const handleQuerySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidSearchQuery(query)) {
      dispatch(resetSearchResults());
      setHasValidQuery(true);
      setSearchError("");
      dispatch(fetchSearchResults(query));
    } else if (query.trim().length === 0) {
      setSearchError("Please enter shows name.");
      setHasValidQuery(false);
    } else {
      setSearchError("Please enter valid show title or name.");
      setHasValidQuery(false);
    }
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <SearchBarWrapper>
      <div className="searchbar-top flex items-center justify-center">
        <Image
          src={Images.HomeBanner}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          rel="preload"
          className="obj-fit-cover searchbar-banner"
        />
        <form onSubmit={handleQuerySubmit}>
          <div className="search-box flex">
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for TV shows ..."
                className="text-lg font-semibold"
                onChange={handleQueryChange}
                ref={inputRef}
              />
            </div>
            <button
              type="submit"
              aria-label="btn"
              className="search-icon bg-transparent">
              <Image src={Icons.Search} alt="icon-search" />
            </button>
            <span className="search-error-text">{searchError}</span>
          </div>
        </form>
      </div>
      <div className="searchbar-bottom">
        {hasValidQuery &&
          (searchResultsData && searchResultsData.length > 0 ? (
            <SearchList searchResultsData={searchResultsData} />
          ) : (
            <div className="text-center">No results found.</div>
          ))}
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
