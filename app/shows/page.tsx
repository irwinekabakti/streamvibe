"use client";

import { FC, useEffect } from "react";
import ErrorMessage from "../_components/ErrorMessage/ErrorMessage";
import FreeTrial from "../_components/FreeTrial/FreeTrial";
import ShowsBanner from "../_components/Shows/ShowsBanner/ShowsBanner";
import ShowsList from "../_components/Shows/ShowsList/ShowsList";
import ShowsSlider from "../_components/Shows/ShowsSlider/ShowsSlider";
import Spinner from "../_components/(shared)/Spinner/Sprinner";
import { fetchAllShows } from "@/store/action/shows-slice";
import {
  selectAllShows,
  selectSortedHighRatedShows,
  selectSortedNewShows,
} from "@/store/selectors/showsSelectors";
import { scrollToTop } from "@/utils/scrollToTop";
import { HIGH_RATED_SHOWS, NEW_SHOWS } from "@/constant/shows-constant";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import Layout from "../_components/(shared)/Layout";

const page: FC = () => {
  const isLoading = useAppSelector(
    (state: RootState) => state.shows.isLoading.fetchAllShows
  );
  const isError = useAppSelector(
    (state: RootState) => state.shows.isError.fetchAllShows
  );
  const error = useAppSelector((state: RootState) => state.shows.error);
  const dispatch = useAppDispatch();
  const allShowsData = useAppSelector(selectAllShows);
  const highRatedShowsData = useAppSelector(selectSortedHighRatedShows);
  const latestPremieredShowsData = useAppSelector(selectSortedNewShows);

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  useEffect(() => scrollToTop(), []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Layout>
      <GlobalStyles />
      <div className="pg-shows">
        {highRatedShowsData?.length > 0 && (
          <ShowsBanner
            showData={highRatedShowsData[Math.floor(Math.random() * 10)]}
          />
        )}

        {highRatedShowsData?.length > 0 && (
          <ShowsSlider
            sliderType={HIGH_RATED_SHOWS}
            sliderTitle={"All Time Popular Shows"}
            showsData={highRatedShowsData}
          />
        )}

        {latestPremieredShowsData?.length > 0 && (
          <ShowsSlider
            sliderType={NEW_SHOWS}
            sliderTitle={"New Shows to Watch"}
            showsData={latestPremieredShowsData}
          />
        )}

        {allShowsData?.length > 0 && (
          <ShowsList showsData={allShowsData} showsTitle={"All Shows"} />
        )}

        <FreeTrial />
      </div>
    </Layout>
  );
};

export default page;
