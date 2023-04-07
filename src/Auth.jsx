import { useState, useEffect } from "react";
import axios from "axios";

const API_SESSION_URL = "https://api.opensauced.pizza/v1/auth/session";

function Auth() {
  const [username, setusername] = useState("");
  const [authToken, setAuthToken] = useState(""); // Define a state for auth token

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API_SESSION_URL, {
          headers: {
            Authorization: `Bearer ${authToken}`, // Use authToken instead of hard-coded token
          },
        });
        setusername(response.data.user_name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [authToken]); // Add authToken to the dependency array of useEffect

  const handleAuth = () => {
    setAuthToken(document.querySelector(".text").value); // Update authToken state with user input

    // Retrieve data from extension input
    const data = document.querySelector(".text").value;

    // Send data back to the extension's background script
    chrome.runtime.sendMessage({ data: data }, function (response) {
      console.log("Data sent to background script:", response);
    });
  };

  return (
    <div className="wrapper">
      <label>Auth Token:</label>
      <section>
        <input type="text" className="text" aria-label="token-value"></input>
      </section>
      <div className="auth-butt-wrapper">
        <button type="submit" className="authorize-button" onClick={handleAuth}>
          Authorize
        </button>
      </div>
      {username !== "" && (
        <p className="login">
          You are an <b>authorized</b> user of OpenSauced.
          <p>
            Logged-in as <b>{username}</b>
          </p>
        </p>
      )}
    </div>
  );
}

export default Auth;
