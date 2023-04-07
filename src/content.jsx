import axios from "axios";
import "./App.css";

const HOSTNAME = "https://api.opensauced.pizza/v1/users/";
const USERNAME = document.location.pathname.split("/")[1];
const URL = `${HOSTNAME}${USERNAME}`;
const appDiv = document.createElement("div");
appDiv.className = "App";
const vCardContainer = document.querySelector(".user-profile-bio");
vCardContainer.parentNode.insertBefore(appDiv, vCardContainer.nextSibling);

async function fetchData() {
  try {
    const response = await axios.get(URL);
    const responseStatus = response.status;
    if (responseStatus === HTTP_OK) {
      const viewButton = document.createElement("button");
      viewButton.type = "button";
      viewButton.innerHTML = "🍕View on OpenSauced";
      viewButton.addEventListener("click", () => {
        window.open(
          `https://insights.opensauced.pizza/user/${USERNAME}`,
          "_blank",
          "noreferrer"
        );
      });
      appDiv.appendChild(viewButton);
    }
  } catch (error) {
    const joinButton = document.createElement("button");
    joinButton.type = "button";
    joinButton.innerHTML = "🍕Join OpenSauced";
    joinButton.addEventListener("click", () => {
      window.open(
        "https://insights.opensauced.pizza/start",
        "_blank",
        "noreferrer"
      );
    });
    appDiv.appendChild(joinButton);
  }
}

const HTTP_OK = 200;
fetchData();
