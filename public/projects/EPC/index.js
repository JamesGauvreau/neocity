// const root = document.getElementById("root");
const suite = document.getElementById("suite");

const h1 = document.createElement("h1");

h1.innerHTML = "MONA LISA";

const img = document.createElement("img");

img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUVFBoUExkTEhgZGR8eHSMAAACHhona2tvFxcbNzc6xsLIQDxe/v8CpqasAAATq6uv///+goKL5+fnU1NUMCxSWlphhYGOAf4JRUVQAAAmMi42Pj5FYV1pDQ0bw8PAEAQ25ubpoaGsiISc1NDjh4eJwcHI7Oz4SERwyceKhAAAA/UlEQVR4AdXSV4LDIAwEUMCRCa6TuNvp9f43XKTt0QkyX3h4boB5s1gXIyMeWD1vkyQx3DubrIxRglK/Dlkeeyp86dNKgRqbbdM6k6+ADht6mXex7gXQAD9oQB3CyMBNDeZUATsFLDsG7b7e9rMC7Xg4jPIKSuGPiwL84lwAnZCRBrSOFYOcgL0GVmoGxxEgDaYzDnRkIG/QQGoGx4vHUCnQXm+4TwzojNujVWCSWkCHQFYBKlGQFVDjXhkNpGbwBNpcgfYKkGMQFgQyClCHhkwEaAI6Dewx8/eJ9yMURRhbY6b7y4HJ21bOWp7nbS7HM3dc/MR+XbqYn+KN8gGDfhY9jMMHpgAAAABJRU5ErkJggg==';

const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting.";

const p2 = document.createElement("h1");
p2.innerText = "A second line.";

const p3 = document.createElement("h2");
p3.innerText = "#3";

root.appendChild(h1);
root.appendChild(img);
root.appendChild(p);
// root.appendChild(p2);

// suite.appendChild(p3);
