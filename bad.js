import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import { addHeading, addContent } from "./addContent.js";
import json from "./assets/data.json";

document.querySelector("#text").innerHTML = `
<h2>Bad Example</h2>
<h3>Lack of Server Monitoring or Auditing</h3>
<p>Since I'm using the free netlify account which doesn't offer Analytics, I've no information about the users who are accessing the site, where my traffic is coming from, is my site getting embedded in 3rd-party sites etc.</p>
<p>If I use Google Analytics, I could get a little bit more data, but adding another 3rd-party calls from my site will result in performance issues.</p>
<p>Since the server is hosted by a reputed firm, I'm hoping they are following secure practices, but I'll never know because the things are not transparent</p>
`;
