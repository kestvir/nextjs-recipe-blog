import Prismic from "prismic-javascript";

const { NEXT_PUBLIC_API_ENDPOINT, ACCESS_TOKEN } = process.env;

export const apiEndpoint = NEXT_PUBLIC_API_ENDPOINT;
export const accessToken = ACCESS_TOKEN;

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};


