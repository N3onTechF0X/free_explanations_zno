// ==UserScript==
// @name         Explanation view
// @description  Show explanations for tasks for free
// @version      1.0.0
// @author       N3onTechF0X
// @match        https://zno.osvita.ua/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zno.osvita.ua
// @run-at       document-start
// ==/UserScript==

const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
styleElement.textContent = `
.task-card.current > .explanation {
  display: block !important;
  filter: blur(4px);
  transition: filter 0.3s ease;
}
.task-card.current > .explanation:hover {
  filter: blur(0px);
}
.task-card.current > form > .two-buttons-container > .bw-left > .explan_open {
  display: none !important;
}
`;
