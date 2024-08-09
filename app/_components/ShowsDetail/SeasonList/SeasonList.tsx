"use client";

import { useAppSelector } from "@/store";
import { selectShowsSeasons } from "@/store/selectors/showsSelectors";
import { HeadingTitleMd } from "@/styles/global/default";
import SeasonItem from "../SeasonItem/SeasonItem";
import { SeasonListWrapper } from "./style";

const SeasonList = () => {
  const seasonsData = useAppSelector(selectShowsSeasons);
  return (
    <SeasonListWrapper className="detail-block">
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {seasonsData?.map((season: any) => {
        return <SeasonItem key={season.id} seasonData={season} />;
      })}
    </SeasonListWrapper>
  );
};

export default SeasonList;
