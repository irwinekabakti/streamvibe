import { FC } from "react";
// import PropTypes from "prop-types";
// image detail belum ada width height
import Link from "next/link";
import { EpisodeItemWrapper } from "./style";
import { Images } from "@/assets/images";
import Image from "next/image";

// interface EpisodeData {
//   id: number;
//   url: string;
//   name: string;
//   season: number;
//   number: number;
//   type: string;
//   airdate: string;
//   airtime: string;
//   airstamp: string;
//   runtime: number;
//   summary: string;
//   error: null;
//   genre: any;
//   schedule: any;
//   rating: any;
//   network: any;
//   Channel: any;
//   dvdCountry: any;
//   externals: any;
//   image: any;
//   updated: number | any;
//   _link: any;
//   _embeded: any;
// }

// interface EpisodeItemProps {
//   episodeData: EpisodeData;
// }

interface EpisodeData {
  id: number;
  url: string;
  name: string;
  number: number;
  season: number;
  type: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

interface EpisodeItemProps {
  episodeData: EpisodeData;
}

const EpisodeItem: FC<EpisodeItemProps> = ({ episodeData }) => {
  console.log(episodeData, "<== episode data");
  return (
    <EpisodeItemWrapper>
      <div className="episode-num text-gray60 text-xl flex items-start font-bold">
        {episodeData?.number < 10
          ? "0" + episodeData?.number
          : episodeData?.number}
      </div>
      <div className="episode-full grid">
        <Link href={episodeData?.url} target="_blank" className="episode-img">
          <Image
            src={episodeData?.image?.medium}
            alt="image-detail"
            className="object-fit-cover"
            quality={100}
            width={100}
            height={100}
            rel="preload"
          />
        </Link>
        <div className="episode-body">
          <div className="episode-head">
            <h4 className="text-xl episode-title">{episodeData?.name}</h4>
            <p
              className="episode-summary text-gray60"
              dangerouslySetInnerHTML={{
                __html: episodeData?.summary,
              }}></p>
          </div>
        </div>
      </div>
    </EpisodeItemWrapper>
  );
};

export default EpisodeItem;
