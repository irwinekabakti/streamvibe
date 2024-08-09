"use client";

import { FC } from "react";
import Image from "next/image";
import { Icons } from "@/assets/icons";
import { ShowMetaDataWrapper } from "./style";
import { selectShowMetadata } from "@/store/selectors/showsSelectors";
import { Paragraph } from "@/styles/global/default";
import { useAppSelector } from "@/store";

const ShowMetaData: FC<any> = () => {
  const metaData = useAppSelector(selectShowMetadata);
  console.log(metaData);

  return (
    <ShowMetaDataWrapper>
      <div className="detail-block">
        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <Image src={Icons.CalendarGrey} alt="icon-calendar" />
            </span>
            <span className="title-text">Released Date</span>
          </Paragraph>
          <div className="block-item-body">
            <div className="block-item-pill text-md">{metaData?.premiered}</div>
          </div>
        </div>

        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <Image src={Icons.LanguageGrey} alt="icon-language" />
            </span>
            <span className="title-text">Available Laguage</span>
          </Paragraph>
          <div className="block-item-body">
            <div className="block-item-pill text-md">{metaData?.language}</div>
          </div>
        </div>

        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <Image src={Icons.StarGrey} alt="icon-star" />
            </span>
            <span className="title-text">Ratings</span>
          </Paragraph>
          <div className="block-item-body">
            <div className="block-item-pill text-md">
              {metaData?.rating?.average || 0} / 10
            </div>
          </div>
        </div>

        <div className="detail-block-item">
          <Paragraph className="block-item-title flex items-center justify-start">
            <span className="title-icon">
              <Image src={Icons.GridGrey} alt="icon-grid-grey" />
            </span>
            <span className="title-text">Genres</span>
          </Paragraph>
          <div className="block-item-body flex items-center flex-wrap">
            {metaData?.genres?.map((genre: any, index: any) => (
              <div className="block-item-pill text-md" key={index}>
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShowMetaDataWrapper>
  );
};

export default ShowMetaData;
