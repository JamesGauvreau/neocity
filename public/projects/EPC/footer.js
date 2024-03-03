const legalFoosterJS = document.getElementById("legalFooterJS");
const footerElement = document.createElement("footer");
const currentDate = document.write(new Date().getFullYear());
footerElement.innerHTML = `
        Copyright © 2024 Emergency Power Corp 
        &emsp;|&emsp;
        All Rights Reserved 
        &emsp;|&emsp;
        <a href="contactus.html">Contact Us</a>
        </p>`;

legalFooterJS.append(footerElement);


// <script>document.write(new Date().getFullYear())</script>
