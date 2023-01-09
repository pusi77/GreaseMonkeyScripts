// ==UserScript==
// @name        Glassfrog Projects sort by timestamp
// @namespace   https://github.com/pusi77
// @match       https://app.glassfrog.com/organizations/*/orgnav/roles/*/projects*
// @grant       none
// @version     1.0
// @author      pusi77
// @description Sorts projects from Projects page based on the "createdAt" timestamp
// ==/UserScript==
const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener('load', async function() {
  await delay(5000); // wait for other Javascript to do his magic, value obtained from empirical testing (it's a lot, i know)
  console.log("Sorting...")


  var projectsTab = document.getElementById("projects-tab")
  Array.from(projectsTab.getElementsByTagName("li"))
    .sort((a, b) => {
                      var first = a.querySelectorAll("*[class^=\"itemDetailRow--\"]")[0].children[4]
                      var second = b.querySelectorAll("*[class^=\"itemDetailRow--\"]")[0].children[4]
                      var firstDate = first[Object.keys(first)[1]].children.props.createdAt
                      var secondDate = second[Object.keys(second)[1]].children.props.createdAt

                      return -firstDate.localeCompare(secondDate)
                    })
    .forEach(li => projectsTab.getElementsByTagName("li")[0].parentElement.appendChild(li));
  console.log("Sorting completed!")
}, false);
