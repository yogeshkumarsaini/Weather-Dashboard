# Weather Dashboard

A simple Weather Dashboard web app that fetches current weather details for a city (or postal code) using a weather API. This README explains how to set up, run, and improve the project, and points out issues found in the provided code with guidance on how to fix them.

Project overview
- Weather Dashboard is a minimal web app that allows a user to enter a city name (or postal code) and see current weather information such as temperature, humidity, wind speed, pressure, UV index, and more.
- The UI is built with plain HTML and CSS and uses client-side JavaScript to call a weather API.

Files
- index.html — Main HTML layout and input elements.
- style.css — Styling for the dashboard.
- script.js — JavaScript for fetching weather data and updating the UI.
- Note: A small unrelated PHP/Yii form snippet was included in the original paste; that belongs in a server-side project and is not required for the front-end dashboard.

Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari).
- An API key from your chosen weather provider (the provided code used WeatherAPI.com).
- A simple static web server is recommended for local development (optional but helpful).

Installation & running
1. Copy the project files to a folder.
2. Replace the API key placeholder in script.js with your actual key (or move the key to a secure backend for production).
3. Open index.html in your browser:
   - Easiest: double-click index.html.
   - Recommended: run a local static server (for example, `npx http-server` or `python -m http.server`) to avoid file-protocol restrictions.

Usage
- Enter a city name (for example, "Delhi") or postal code in the input and click "Search".
- The app should fetch current weather data and display it on the page.

Notes on fixes (high-level)
- API key string: Remove any extra trailing or leading spaces in the API key string.
- Input value vs function reference: Ensure the code reads the input value (a string) and passes that value to the weather API. Do not pass a function reference into the URL.
- getLocation behavior: If you intend to support postal-code lookups using an external service, make sure that function returns a usable location string for the weather API instead of only logging results.
- Avoid document.write / document.writeln: These methods overwrite the entire document. Use DOM updates (for example, innerHTML or textContent on target elements) to show results.
- Variable names: Use consistent variable names when referencing response fields (for example, use windDirection if that is the local variable name).
- Weather API parameters: Confirm the weather provider's required query parameters. Some APIs do not use a "units=metric" query parameter; instead they return both metric and imperial fields (e.g., temp_c and temp_f).
- Error handling: Add checks for response.ok and handle fetch errors with .catch to show friendly messages.
- Security: Client-side API keys are visible to users; for production move sensitive keys to a backend or proxy requests via a server-side endpoint.

Suggested improvements & next steps
- Replace document.write usage with targeted DOM updates inside a .details container to preserve page layout and allow incremental updates.
- Use encodeURIComponent when inserting user input into URLs to avoid special-character issues.
- Add a 5-day forecast view using the weather API's forecast endpoint to provide more useful information.
- Add history/autocomplete for recently searched cities and a loading indicator while requests are in progress.
- Improve UX for invalid input and API errors (clear messages, retry options).
- For production, proxy API requests through a server to keep the API key secret.

Contributing
- If you'd like me to produce an updated script.js that implements the suggested fixes and DOM updates, I can create that file and show the exact changes.
- If this project is on GitHub and you want a PR created, tell me the repository owner/name and I will prepare a branch and commit to open a PR (or provide a patch you can apply).

License
- This project has no license file included. Add a LICENSE if you plan to publish or share the project.
