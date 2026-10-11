// 1 = authentication ON, 0 = authentication OFF
var AUTH_ENABLED = 1;
var AUTH_SCRIPT_URL = "https://what-the-dog-doing101.github.io/ossauth2/ossauth2.js";
var authFinished = false;

function AUTH_APPROVED(details) {
  authFinished = true;
  console.log("ACCESS APPROVED: Firebase ticket approved");
}

function AUTH_PENDING(details) {
  if (authFinished) return;
  console.log("AUTHENTICATION PENDING: Waiting for Firebase ticket approval...");
}

function AUTH_NOT_APPROVED(details) {
  if (authFinished) return;
  console.log("ACCESS NOT APPROVED: Authentication rejected or ticket unreadable.");
}

function AUTH_EXPIRED(details) {
  if (authFinished) return;
  console.log("TICKET EXPIRED: Your authentication ticket has expired.");
}

function AUTH_DISABLED(details) {
  authFinished = false;
  console.log("AUTHENTICATION OFF: Access has NOT been granted.");
}

// Conditional execution and script injection logic
if (Number(AUTH_ENABLED) === 0) {
  AUTH_DISABLED();
} else {
  var authScript = document.createElement("script");
  authScript.src = AUTH_SCRIPT_URL;
  authScript.type = "module";

  authScript.onerror = function () {
    console.error("SCRIPT LOAD ERROR: The OSS Auth JavaScript file could not be loaded.");
  };

  document.head.appendChild(authScript);
}
