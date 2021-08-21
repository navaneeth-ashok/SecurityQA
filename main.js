import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import { addHeading, addContent } from "./addContent.js";
import json from "./assets/data.json";

document.querySelector(
  "#nav"
).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.html">Security & QA</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="qa.html">Quality Assurance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="security.html">Security</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="badexample.html">Bad Example</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
// document.querySelector('#app').innerHTML = `<p class="text-danger">Dont mind me, I'm here for testing Bootstrap</p>`;

const head = document.getElementById("heading");
const content = document.getElementById("content");

let currentURL = window.location.href;
if (currentURL.includes("qa")) {
  addHeading(head, json.qaPage.headline);
  addContent(head, json.qaPage.text);
} else if (currentURL.includes("security")) {
  addHeading(head, json.securityPage.headline);
  addContent(head, json.securityPage.text);
} else if (currentURL.includes("example")) {
  addHeading(head, json.badExmplePage.headline);
  addContent(head, json.badExmplePage.text);
} else {
  addHeading(head, json.landingPage.headline);
  addContent(head, json.landingPage.text);
}
