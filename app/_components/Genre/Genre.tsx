import { FC } from "react";
import { Container } from "@/styles/global/default";
import SectionTitle from "../SectionTitle/SectionTitle";
import { GenreWrapper } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GENRES } from "@/constant/mock-data";
import GenreItem from "./GenreItem";
import { SliderWrapper } from "../(shared)/Slider/style";
import CustomNextArrow from "../(shared)/Slider/CustomNextArrow";
import CustomPrevArrow from "../(shared)/Slider/CustomPrevArrow";

const Genre: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <GenreWrapper>
      <SectionTitle
        title={"Explore our wide variety of categories"}
        text={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
        }
      />
      <Container>
        <SliderWrapper>
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}>
            {GENRES?.map((genre: any) => (
              <GenreItem data={genre} key={genre.id} />
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </GenreWrapper>
  );
};

export default Genre;
