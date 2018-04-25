import request from "superagent";

const DATA_API_URL = "https://";

export const getProjectList = async ({authToken}) => {
  const API_PATH = "public/portfolio/projects";
  const requestUrl = `${DATA_API_URL}/${API_PATH}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken)
    .then((response) => response.body)
    .catch((error) => error);
};

export const getProject = async ({id, authToken}) => {
  const API_PATH = "public/portfolio/projects";
  const requestUrl = `${DATA_API_URL}/${API_PATH}/${id}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken)
    .then((response) => response.body)
    .catch((error) => error);
};

export const searchBlogPosts = async ({query, authToken}) => {
  const API_PATH = "public/blog/search";
  const requestUrl = `${DATA_API_URL}/${API_PATH}`;

  return await request
    .get(requestUrl)
    .query(query)
    .set("Authorization", authToken)
    .then((response) => response.body)
    .catch((error) => error);
};

export const getBlogPostList = async ({authToken}) => {
  const API_PATH = "public/blog/posts";
  const requestUrl = `${DATA_API_URL}/${API_PATH}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken)
    .then((response) => response.body)
    .catch((error) => error);
};

export const getBlogPost = async ({id, authToken}) => {
  const API_PATH = "public/blog/posts";
  const requestUrl = `${DATA_API_URL}/${API_PATH}/${id}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken)
    .then((response) => response.body)
    .catch((error) => error);
};