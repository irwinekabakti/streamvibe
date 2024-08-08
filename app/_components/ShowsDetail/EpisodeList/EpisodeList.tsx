import { FC } from "react";
import { EpisodeListWrapper } from "./style";
import EpisodeItem from "../EpisodeItem/EpisodeItem";

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

interface EpisodeListProps {
  seasonNo: number;
  episodesData: EpisodeData[];
}

const EpisodeList: FC<EpisodeListProps> = ({ episodesData, seasonNo }) => {
  const filteredEpisodes = episodesData?.filter(
    (episode: any) => episode?.season === seasonNo
  );
  return (
    <EpisodeListWrapper className="grid">
      {filteredEpisodes?.map((episode: any) => {
        return (
          <EpisodeItem
            key={episode?.id}
            // seasonNo={seasonNo}
            episodeData={episode}
          />
        );
      })}
    </EpisodeListWrapper>
  );
};

export default EpisodeList;

// EpisodeList.propTypes = {
//   episodesData: PropTypes.array.isRequired,
//   seasonNo: PropTypes.number.isRequired,
// };
