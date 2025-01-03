// ==UserScript==
// @name        ExamTopics Less Marketing
// @namespace   https://github.com/pusi77
// @match       https://www.examtopics.com/exams/*/*/view/
// @grant       none
// @version     1.0.0
// @author      pusi77
// @description I don't care if somone bought a subscription, I just want to see the answers
// ==/UserScript==

window.addEventListener('load', async function () {
    console.log("Removing subscription notification...")

    let bottomMarketing = document.querySelector('.bottomMarketing');
    if (bottomMarketing) {
        bottomMarketing.remove();
    }
    console.log("Removed subscription notification")

}, false);

