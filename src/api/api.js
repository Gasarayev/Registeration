// const BASE_URL = "http://morooq.az/webservice/";

// export const fetchApi = async (endpoint, method = "POST", body = null) => {
//   const response = await fetch(`${BASE_URL}${endpoint}`, {
//     method,
//     mode: 'no-cors',
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: body ? JSON.stringify(body) : null,
//   });

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   return response.json();
// };