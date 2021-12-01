# Spotify 2.0

<img src="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white" height="40" />

A streaming and media service providing application powered by next js. v.12 for playlist creation and playback functionality.git

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
