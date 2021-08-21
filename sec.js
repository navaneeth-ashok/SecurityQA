import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import { addHeading, addContent } from "./addContent.js";
import json from "./assets/data.json";

document.querySelector("#text").innerHTML = `
<h2>Security Process for developing and deploying this site</h2>
<h3>Secuirty Headers</h3>
<table class='table hover'>
    <thead>
        <tr>
            <th>Header</th>
            <th>Value</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Content-Security-Policy</td>
            <td>default-src 'self'</td>
            <td>To prevent XSS and Data Injection</td>
        </tr>
        <tr>
            <td>X-Frame-Options</td>
            <td>DENY</td>
            <td>To avoid click-jacking attacks</td>
        </tr>
        <tr>
            <td>X-Content-Type-Options</td>
            <td>nosniff</td>
            <td>To prevent modification of MIME-Types in Content-Type headers</td>
        </tr>
        <tr>
            <td>Referrer-Policy</td>
            <td>same-origin</td>
            <td>To unwanted info to be sent along with requests</td>
        </tr>
    </tbody>
</table>
<h3>Encryption of Data in Transit</h3>
<p>By using the default domain address as provided by Netlify in my production server, all the data is transferred over HTTPS with a TLS certificate provided by DigiCert.</p>
<h3>Any security features that are a result of not doing things?</h3>
<p>By avoiding forms and fields from which data is sent to a backend server, I don't have to worry about sanitizing the input, which should be implemented for preventing SQL injection</p>
<h3>Principles Used</h3>
<ul>
    <li>DRY : addContent.js takes in data from data.json and creates the page, avoiding extra time and effort to create the page individually</li>
    <li>Seperation : the JS files are there to provide the content, and html is just for rendering them.</li>
</ul>
`;
