import * as URLS from "../Urls/userOperationUrls";
import * as actions from "../Others/Actions";
const authenticate = async (user, type) => {
  let url;
  switch (type) {
    case actions.LOGIN:
      url = URLS.LOGIN_URL;
      break;
    case actions.SIGNUP:
      url = URLS.SIGN_UP_URL;
      break;
    default:
      return "Invalid second argument";
  }
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .catch((error) => {
      return error;
    });

  if (response.res_code) {
    return response.res_code === "green" ? response.data : response.message;
  } else {
    return response;
  }
};

const logout = async () => {};

const addToHistory = async (...params) => {
  const [userData, title, link] = params;
  const response = await fetch(URLS.ADD_TO_HISTORY, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userData, title, link }),
  }).then((resp) => resp.json());

  return response;
};

const getHistory = async (userEmail) => {
  const response = await fetch(
    URLS.GET_HISTORY + "/" + userEmail
  ).then((resp) => resp.json());
  return response;
};

const removeFromHistory = async (userId) => {};

export { authenticate, logout, addToHistory, getHistory, removeFromHistory };
