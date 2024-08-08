const baseEndpoint = process.env.NEXT_PUBLIC_BASE_API;

const urlConstants = {
  apiBaseUrl: baseEndpoint,
  fetchShowsUrl: `${baseEndpoint}/shows`,
  seasonsCastEpisodesEmbed: `?embed[]=episodes&embed[]=cast&embed[]=seasons`,
  searchShowsUrl: `${baseEndpoint}/search/shows?q=`,
};

export default urlConstants;
