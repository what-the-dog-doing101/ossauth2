# OSS Auth Portal

A lightweight, Firebase-powered authentication template designed to secure static web pages.

## Project Files

* `Template (U NEED THISONLY).html` - The primary template containing your page structure and content hooks.
* `bare drop in (U CAN ALSO USE THIS FOR LEES CLUTER).JS` - An alternative drop-in script file containing configuration variables and status handlers for lightweight setups.

## How It Works

1. **Remote Loading**: The authentication script is dynamically pulled from its remote URL (`https://what-the-dog-doing101.github.io/ossauth2/ossauth2.js`). You do not need to store local script files, keeping your directory clean and error-free.
2. **Toggle Control**: You can turn access checks on or off globally using the `AUTH_ENABLED` configuration variable (`1` for active, `0` for disabled).
3. **Status Handlers**: Built-in state triggers (`AUTH_APPROVED`, `AUTH_PENDING`, `AUTH_NOT_APPROVED`, `AUTH_EXPIRED`, and `AUTH_DISABLED`) let you manage what happens based on the user's ticket status.
