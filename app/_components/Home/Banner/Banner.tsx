import { FC } from "react";
import { Icons } from "@/assets/icons";
import routeConstants from "@/constant/route-constant";
import { BaseLinkPrimary } from "@/styles/ui/Button";
import { Container, HeadingBanner, Paragraph } from "@/styles/global/default";
import { BannerWrapper } from "./style";
import Image from "next/image";

const Banner: FC = () => {
  return (
    <BannerWrapper>
      <div className="banner-img flex items-center justify-center">
        <Image
          className="banner-icon"
          src={Icons.Streamvibe}
          alt="banner-img"
          quality={100}
          width={100}
          height={100}
          rel="preload"
        />
      </div>
      <Container className="text-center">
        <div className="banner-content mx-auto">
          <HeadingBanner>The Best Streaming Experience</HeadingBanner>
          <Paragraph className="banner-text text-lg">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockblusters, classic movies, popular TV shows, and more.
            You can also create your own watchlists, so you can easily find the
            contnet you want to watch.
          </Paragraph>
          <BaseLinkPrimary href={routeConstants.SHOWS}>
            <span className="btn-icon">
              <Image src={Icons.Play} alt="icon-img" />
            </span>
            <span className="btn-text">Start Watching Now</span>
          </BaseLinkPrimary>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
