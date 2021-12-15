# Spotify 2.0

<img src="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white" height="40" />

A streaming and media service providing application powered by next js. v.12 for playlist creation and playback functionality.git.

Spotify API for fetching playlists from the genuine article and control music playback.<br />

> Persistant user login with nextauth and spotify authentication service. (including accessing & refreshing oAuth JWT tokens)<br /> > <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" height="20" /> for a responsive UI styling.<br />
> Next-JS v.12.0.0 middleware to handle authenticated user access. (v.12 offers server rendered components)<br />
> Learn Debounce to prevent from spamming the API.<br />
> Recoil instead of Redux for state management. (when switching playlists and songs)<br />

## Build

- Create a project with tailwindcss template command.
- Refactor the starter template in the index.js
- Create an app in the [spotify for dev](https://developer.spotify.com/dashboard/) to access spotify API for playlist and songs. Obtain the client ID and client secret.

- The background spotify application turning dormant can cause the building application pause functioning. Activating and refreshing the build will do.
- Essentially, the spotify API is a remote (start, stop, select song) player from an active device (phone, computer, app) for the original spotify app.

#### Sidebar

- add [heroicons](https://github.com/tailwindlabs/heroicons) dependency to the build.
- Add the required buttons and the styles accordingly.
- The special effect for spotify is to make the whole screen (the parent div in index.js) set and overflow hidden while the containers within the parent element has the overflow-scroll.
- To use spotify proccess, login proccess to communicate with spotify API and login with right credentials is needed. The API provides an access token to access to all the required features.
- The obtained access token expires after every hour, but a refresh token can help obtain the access token repeatedly (for persistance).

#### Authentication

- To add nextAuth to a project, create a file `[...nextauth]` in `pages/api/auth` location. The file contains the dynamic route handler for NextAuth.js which also contain global nextauth configuration.
- add the latest beta next-auth dependency and handle the authentication in [...nexthauth].
- Add auth_url as a base directory (localhost:3000) on local machine. Change the domain to the vercel deployed url as the base directory once deployed.
  -A public client_id(exposed to client, browser & server) and client_secret are added from spotify API.
- A _/JWT/_ secret (random bunch of strings) for encrypting the JWT token.
- Restart the server to actually load in the env variables.
- An authentication token to get access to the services in spotify API is added to the provider in _/authentication/_.
- A lib directory (helpul file or utility file) for holding required info (login_url) is created.
- [Spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node) package for interacting with the API.
- The permissions required for accessing the API features are created as _/params/_ and the spotify API for a specific accound is requested.
- The _/LOGIN_/URL\_/ will literally pop-in the spotify login page. If already logged in, it redirects back.
- Add in the aditional information for custom login page. [refresh token](https://next-auth.js.org/tutorials/refresh-token-rotation) for initial sign-in callback.
- If the initial sign-in is valid, program the callback to return the token, access_token, refresh_token, username.
- And important special variable to validate the expiration of access token: _/accessTokenExpires/_
- Condition for access token expiration. Create a function for timing the access and refresh tokens right.
- Create a session object for the user to tap into as a part of client session.
- Create a server side rendering function.
- Customize the login page and map over the providers for the login button and with signIn function and callback parameters.
- Add the [redirect url](http://localhost:3000/api/auth/callback/spotify) in the spotify API. Add the redirect url from the deployed site to the API.
- The spotify API redirects the admin to the terms and conditions to the scopes[functions or permissions] and redirects to the home page.

#### Middleware

- The upgrade in v.12 made the integration of middleware super simple. Every request from the user to the site, the middleware checks the response and parse for specific parameters given.
- The access token check is parsed into the middleware during login. If absent, the middleware redirects the user to login page.
- The middleware function is created in _/middleware.js/_ in api directory.
- The token with the jwt_secret is obtained from the request. If the pathname includes the token or the url string \*//api/auth/\_, the middleware forwards the user to page.
- If no token is available and the pathname doesn't include _/login/_, the middleware redirect the user to login page.

#### Center

- The Sidebar is styled with overflow-y-scroll, to make the sidebar scroll.
- The center takes up much space on the screen. The [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide) dependency clears off the scrollbar at the sidebar. Add the dependency in _/tailwind.config.js/_
- Add the property _/scrollbar-hide/_ in Sidebar to only hide it, but not the functionality.
- Create an array for color codings used inthe center styling.
- Create a piece of state for tracking the color combination and UseEffect to render the color at every reload.
- Use a random library to randomly set the color in styling. it's a heavy library and only use the components required in moderation.
- Use the shuffle method from lodash to randomly select the color to style the center. Update the UseEffect to update the color on every playlist selection.

#### Custom Hook

- useSpotify to hold all the playlist logic and the speed of the application in the _/hooks/_ directory.
- A useEffect to run on mount and depedency `session`. The page is redirected to the signIn page forcefully based on the token error in the session.
- Set the access token for the api to use throughout the build. The spotify app is initialized only once and used throughout the session. The session and the spotifyApi are added as dependencies to the useEffect to mount the build.
- The method _/getPlaylists/_ and _/setPlaylists/_ to parse in options to the sidebar.
- The induvidual playlist can't be added as piece of states, since the states can't be lifted higher than the component. Recoil is the global state management for the ind,. playlist.

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
