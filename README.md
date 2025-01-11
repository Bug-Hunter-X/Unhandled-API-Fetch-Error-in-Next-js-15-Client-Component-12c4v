# Unhandled API Fetch Error in Next.js 15 Client Component

This repository demonstrates a common error in Next.js 15 applications involving client-side data fetching.  When an API request fails, the application crashes without proper error handling.

## The Problem

The `pages/about.js` component uses `fetch` to retrieve data from an API route.  If the API request fails (e.g., due to a network error or a 500 response from the server), the application crashes.  This is because the `await fetch` call throws an error, which isn't caught and handled gracefully.

## The Solution

The provided solution demonstrates using a `try...catch` block to handle potential errors during the API call.  If an error occurs, a user-friendly error message is displayed instead of the application crashing.