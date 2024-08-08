"use client";
import { FC } from "react";
import { selectShowDescription } from "@/store/selectors/showsSelectors";
import { Paragraph } from "@/styles/global/default";
import { ShowMainDataWrapper } from "./style";
import { useSelector } from "react-redux";
import SeasonList from "../SeasonList/SeasonList";
import ShowCast from "../ShowCast/ShowCast";

const ShowMainData: FC = () => {
  const descriptionData = useSelector(selectShowDescription);
  return (
    <ShowMainDataWrapper>
      <SeasonList />
      <div className="detail-block show-description">
        <h4 className="detail-block-title">Description</h4>
        <Paragraph
          className="text-white"
          dangerouslySetInnerHTML={{
            __html: descriptionData,
          }}></Paragraph>
      </div>
      <ShowCast />
    </ShowMainDataWrapper>
  );
};

export default ShowMainData;
