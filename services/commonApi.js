import axios from "axios";

const commonApi = async (method, url, reqbody) => {
  let configObj = {
    data: reqbody,
    url: url,
    method: method,
  };
  return await axios(configObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export default commonApi
