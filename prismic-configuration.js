import Prismic from "prismic-javascript";

const { API_ENDPOINT, ACCESS_TOKEN } = process.env;

export const apiEndpoint = API_ENDPOINT;
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

// export const linkResolver = (doc) => {
//   if (doc.type === "blog_post") {
//     return `/post/${doc.uid}`;
//   }
//   return "/";
// };

// // Additional helper function for Next/Link components
// export const hrefResolver = (docType) => {
//   if (docType === "blog_post") {
//     return "/post/[uid]";
//   }
//   return "/";
// };
