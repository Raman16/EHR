import axios from "axios";

export const request = axios.create({
 baseURL: "https://company1.medrixo.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// export const request_doctors = axios.create({
//   baseURL: "http://medrixo.dev/api/calendar/",
//   headers: {
//     "Content-Type": "application/json"
//   }
// });
  

// Add a response interceptor
request.interceptors.response.use(
  function(response) {
    console.log("From request interceprior success");
    return response;
  },
  function(error) {
    console.log("From request interceprior error");

    if (!error.response) {
      console.log("Network error. Please check your network connection");
    }

    return Promise.reject(error);
  }
);
