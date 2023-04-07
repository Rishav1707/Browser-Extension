import React from "react";
import Auth from "./Auth";
import logo from "./logo-All-White.png";
import "./App.css";

function App() {
  return (
    <section className="ext">
      <img className="logo" src={logo} alt="open-sauced-logo" />
      <h2>
        <b>🍕Introducing Open Sauced</b>
      </h2>
      <p>
        This extension <b>validates</b> a GitHub user using OpenSauced{" "}
        <b>API</b>, to check if they have an account in OpenSauced or not.
      </p>
      <p>
        If the user is validated, it shows a <b>View on OpenSauced</b> button,
        otherwise it shows a <b>Join OpenSauced</b> button.
      </p>
      <p>
        Visit{" "}
        <a
          href="https://opensauced.pizza/"
          target="_blank"
          rel="noreferrer"
          title="Visit OpenSauced website"
        >
          <button className="butt">🍕OpenSauced</button>
        </a>{" "}
        for more information. Thank you🖤 for using OpenSauced Extension.
      </p>
      <Auth />
    </section>
  );
}

export default App;
