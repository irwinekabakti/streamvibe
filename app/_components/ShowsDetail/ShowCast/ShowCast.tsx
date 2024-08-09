"use client";

import { FC } from "react";
import Image from "next/image";
import { selectShowCast } from "@/store/selectors/showsSelectors";
import { ShowCastWrapper } from "./style";
import { useAppSelector } from "@/store";
import CustomNextArrow from "../../(shared)/Slider/CustomNextArrow";
import CustomPrevArrow from "../../(shared)/Slider/CustomPrevArrow";
import { SliderWrapper } from "../../(shared)/Slider/style";
import Slider from "react-slick";

const ShowCast: FC = () => {
  const castData = useAppSelector(selectShowCast);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autplaySpeed: 6000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <ShowCastWrapper className="detail-block show-cast">
      <h4 className="detail-block-title">Cast</h4>
      <SliderWrapper>
        {castData && (
          <Slider {...settings}>
            {castData?.map((cast: any) => {
              return (
                <div className="show-cast-item" key={cast?.person?.id}>
                  <div className="item-content">
                    <Image
                      src={cast?.person?.image?.medium}
                      alt="cast-image"
                      width={100}
                      height={100}
                      quality={100}
                      rel="preload"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </SliderWrapper>
    </ShowCastWrapper>
  );
};

export default ShowCast;
