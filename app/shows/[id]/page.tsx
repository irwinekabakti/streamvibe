"use client";
import { useParams } from "next/navigation";
import {
  selectShowDetail,
  selectShowMetadata,
} from "@/store/selectors/showsSelectors";
import { FC, useEffect } from "react";
import { fetchSingleShow } from "@/store/action/shows-slice";
import { scrollToTop } from "@/utils/scrollToTop";
import ErrorMessage from "@/app/_components/ErrorMessage/ErrorMessage";
import FreeTrial from "@/app/_components/FreeTrial/FreeTrial";
import ShowMainData from "@/app/_components/ShowsDetail/ShowMainData/ShowMainData";
import ShowMetaData from "@/app/_components/ShowsDetail/ShowMetadata/ShowMetadata";
import ShowsBanner from "@/app/_components/Shows/ShowsBanner/ShowsBanner";
import Spinner from "@/app/_components/(shared)/Spinner/Sprinner";
import { Container } from "@/styles/global/default";
import { ShowDetailContent } from "./style";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import Layout from "@/app/_components/(shared)/Layout";
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const page: FC = () => {
  // const params = useParams();
  // const showId = params.showId as string;

  const { id: showId } = useParams();

  const dispatch = useAppDispatch();
  const showDetailData = useAppSelector(selectShowDetail);
  const isLoading = useAppSelector(
    (state: RootState) => state.shows.isLoading.fetchSingleShow
  );
  const isError = useAppSelector(
    (state: RootState) => state.shows.isError.fetchSingleShow
  );
  const error = useAppSelector((state: RootState) => state.shows.error);
  const showMetaData = useAppSelector(selectShowMetadata);
  console.log(showMetaData);

  useEffect(() => scrollToTop(), []);

  useEffect(() => {
    dispatch(fetchSingleShow(showId));
  }, [dispatch, showId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Layout>
      <GlobalStyles />
      <div className="pg-show-detail">
        {showDetailData && <ShowsBanner showData={showDetailData} />}

        <Container>
          {showDetailData && (
            <ShowDetailContent>
              <ShowMainData />
              <ShowMetaData metaData={showMetaData} />
            </ShowDetailContent>
          )}
        </Container>
        <FreeTrial />
      </div>
    </Layout>
  );
};

export default page;
