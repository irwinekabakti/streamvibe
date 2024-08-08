import { HIGH_RATED_SHOWS, NEW_SHOWS } from "@/constant/shows-constant";
import { createSelector } from "reselect";

export const selectAllShows = (state: any) => state?.shows?.shows || [];

/*
const sortShowsByType = (type: any) => {
  return createSelector([selectAllShows], (shows) => {
    if (type === HIGH_RATED_SHOWS) {
      return [...shows].sort((a, b) => b.rating.average - a.rating.average);
    } else if (type === NEW_SHOWS) {
      return [...shows].sort(
        (a, b) => new Date(b.premiered) - new Date(a.premiered)
        // (a, b) => {
        //   const bPremiered = new Date(b.premiered).getTime();
        //   const aPremiered = new Date(a.premiered).getTime();
        //   return bPremiered - aPremiered;
        // }
      );
    }

    return shows;
  });
};
*/

const sortShowsByType = (type: any) => {
  return createSelector([selectAllShows], (shows: any) => {
    if (type === HIGH_RATED_SHOWS) {
      return [...shows].sort(
        (a: any, b: any) => b.rating.average - a.rating.average
      );
    } else if (type === NEW_SHOWS) {
      return [...shows].sort((a: any, b: any) => {
        const bPremiered = new Date(b.premiered).getTime();
        const aPremiered = new Date(a.premiered).getTime();
        return bPremiered - aPremiered;
      });
    }

    return shows;
  });
};

export const selectSortedHighRatedShows = sortShowsByType(HIGH_RATED_SHOWS);
export const selectSortedNewShows = sortShowsByType(NEW_SHOWS);

// search results
export const selectSearchResults = (state: any) =>
  state?.shows?.searchResults || [];

// single show details
export const selectShowDetail = (state: any) => state.shows.singleShow;

export const selectShowMetadata = createSelector(
  [selectShowDetail],
  (showDetail) => {
    if (!showDetail) return null;
    return {
      name: showDetail.name,
      officialSite: showDetail.officialSite,
      premiered: showDetail.premiered,
      ended: showDetail.ended,
      genres: showDetail.genres,
      image: showDetail.image,
      rating: showDetail.rating,
      runtime: showDetail.runtime,
      status: showDetail.status,
      language: showDetail.language,
      url: showDetail.url,
    };
  }
);

export const selectShowDescription = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?.summary
);

export const selectShowsSeasons = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?._embedded?.seasons
);

export const selectShowCast = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?._embedded?.cast
);

export const selectShowEpisodes = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?._embedded?.episodes
);
