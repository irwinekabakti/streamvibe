"use client";

import { FC, useEffect, useState } from "react";
import { Icons } from "@/assets/icons";
import { HeadingTitleMd, Text } from "@/styles/global/default";
import { SeasonItemWrapper } from "./style";
import { selectShowEpisodes } from "@/store/selectors/showsSelectors";
import EpisodeList from "../EpisodeList/EpisodeList";
import { useAppSelector } from "@/store";
import Image from "next/image";

const SeasonItem: FC<any> = ({ seasonData }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const episodesData = useAppSelector(selectShowEpisodes);

  const handleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (seasonData?.number === 1) setIsCollapsed(false);
  }, []);

  return (
    <SeasonItemWrapper className="bg-black06">
      <div className="season-head flex items-center justify-between">
        <div className="season-head-title flex items-center flex-wrap">
          <HeadingTitleMd>Season {seasonData?.number}</HeadingTitleMd>
          <Text>{seasonData?.episodeOrder} Episodes</Text>
        </div>
        <button
          aria-label="btn"
          className="season-head-btn inline-flex items-center justify-center"
          onClick={handleAccordion}>
          <Image
            src={Icons.ArrowDownGrey}
            alt="icon-arrow-down"
            quality={100}
            rel="preload"
          />
        </button>
      </div>
      <div className={`season-body ${!isCollapsed ? "show" : ""}`}>
        {episodesData && (
          <EpisodeList
            seasonNo={seasonData?.number}
            episodesData={episodesData}
          />
        )}
      </div>
    </SeasonItemWrapper>
  );
};

export default SeasonItem;
