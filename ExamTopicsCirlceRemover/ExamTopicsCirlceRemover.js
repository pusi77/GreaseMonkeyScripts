// ==UserScript==
// @name        ExamTopics Circle Remover
// @namespace   https://github.com/pusi77
// @match       https://www.examtopics.com/exams/*/*/view/
// @grant       none
// @version     1.0.1
// @author      pusi77
// @description Removes all "correct answers" (which are never correct) green circle from the page
// ==/UserScript==

window.addEventListener('load', async function() {
    console.log("Removing correct (wrong) answers circle...")
    let listItems = document.querySelectorAll('li');

    listItems.forEach(function(li) {
        li.classList.remove('correct-hidden');
        li.classList.remove('correct-choice');
    });
  console.log("Removed correct (wrong) answers circle")

  }, false);

