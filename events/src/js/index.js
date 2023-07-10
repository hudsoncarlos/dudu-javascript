// TODO: Create default structure to documents .js to every projects.

const log = document.querySelector("#event-log-contents");
const reload = document.querySelector("#reload");

log.textContent +=
  "Below, logs will be displayed in the order in which the events load, readystate e DOMContentLoaded, are executed. \n\n";

log.textContent += `Time elapsed: ${getTIMESTAMP()} \n\n`;

reload.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload(true);
  }, 2000);
});

window.addEventListener("load", (event) => {
  log.textContent += `Triggered event LOAD -> 1 - Load process in ${getTIMESTAMP()} \n`;
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `Triggered event readystatechange -> 2 - readystate: ${document.readyState} process in ${getTIMESTAMP()} \n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `Triggered event DOMContentLoaded -> 3 - DOMContentLoaded process in ${getTIMESTAMP()} \n`;
});

function getTIMESTAMP() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).substring(0);
  var day = ("0" + date.getDate()).substring(0);
  var hour = ("0" + date.getHours()).substring(1);
  var minutes = ("0" + date.getMinutes()).substring(1);
  var seconds = ("0" + date.getSeconds()).substring(1);
  var millis = ("0" + date.getMilliseconds()).substring(1);

  return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds + ":" + millis;
}