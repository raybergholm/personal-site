import request from "superagent";

import { AWS_REGION, REST_API_NAME, REST_API_STAGE } from "./config/configs";

const DATA_API_URL = `https://${REST_API_NAME}.execute-api.${AWS_REGION}.amazonaws.com/${REST_API_STAGE}/`;

const listProjects = async ({ authToken }) => {
  const API_PATH = "public/portfolio/projects";
  const requestUrl = `${DATA_API_URL}/${API_PATH}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken);
};

const getProject = async ({ id, authToken }) => {
  const API_PATH = "public/portfolio/projects";
  const requestUrl = `${DATA_API_URL}/${API_PATH}/${id}`;

  return await request
    .get(requestUrl)
    .set("Authorization", authToken);
};

const dataApi = ({ authToken }) => ({
  listProjects: async () => await listProjects({ authToken }),
  getProject: async ({ id }) => await getProject({ id, authToken })
});

export default dataApi;