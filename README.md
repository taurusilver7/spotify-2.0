# Spotify 2.0

A streaming and media service providing application powered by next js. v.12 for playlist creation and playback functionality.git

> Spotify API for fetching playlists from the genuine article and control music playback
> Persistant user login with nextauth and spotify authentication service. (including accessing & refreshing oAuth JWT tokens)
> tailwind css for a responsive UI styling.
> Next.js v.12.0.0 middleware to handle authenticated user access. (v.12 offers server rendered components)
> Learn Debounce to prevent from spamming the API.
> Recoil instead of Redux for state management. (when switching playlists and songs)

# Build

- Create a project with tailwindcss template command.
- Refactor the starter template in the index.js
- Create an app in the [spotify for dev](https://developer.spotify.com/dashboard/) to access spotify API for playlist and songs. Obtain the client ID and client secret.

* Sidebar

- add [heroicons](https://github.com/tailwindlabs/heroicons) dependency to the build.
- Add the required buttons and the styles accordingly.
- The special

- The background spotify application turning dormant can cause the building application pause functioning. Activating and refreshing the build will do.
- Essentially, the spotify API is a remote (start, stop, select song) player from an active device (phone, computer, app) for the original spotify app.

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
