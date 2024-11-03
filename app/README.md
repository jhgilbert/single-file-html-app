# Starter React app that builds as a single HTML file

An app written with React, TypeScript, and Vite that builds as a single `index.html` file.

A one-file bundle doesn't make sense for most production applications, but it's handy for creating internal tools and prototypes that are easy to share, with no env setup required.

## UX components and styles

The project has ready-to-use UI components such as buttons and tabs, thanks to [Material UI](https://mui.com/material-ui). It also includes [Emotion](https://emotion.sh/docs/introduction) for styling your own components.

## Data storage and access

The app can access and use any data you provide in JSON format. The app can't write persistent data, though you could use something like `localStorage` for that if you needed to.

The app's "database" is [a `.ts` file](src/db.ts) that you can update with your own data (or replace programmatically) before building the app. Any data you store in that file will be available in [the `App` component](src/App.tsx) as `dbData`.

## Limitations

The app uses [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) (thanks, Richard Tallent!), so any limitations documented in the plugin's README apply to this app as well.

## Setup and usage instructions

### 1. Clone the repository

```shell
git clone git@github.com:jhgilbert/single-file-react-app.git
cd single-file-react-app
```

### 2. Install dependencies

```shell
npm install
```

### 3. Run the development version

```shell
npm run dev
```

You should see output that looks something like this:

```shell
 VITE v5.4.10  ready in 92 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

In your browser, visit the provided address (`http://localhost:5173` in the above example), and you should see a demo page.

### 4. Make and preview changes

Try changing some of the verbiage in `src/App.tsx`. The app should immediately reload, and you should see the changes in your browser.

### 5. Build and start the "production" version of the app

Run `npm run prod` to build the `dist/index.html` file as it will work in production. `dist/index.html` contains all of the code necessary to run your app, and opens in your browser automatically once the build is finished.

To just build the file without launching it, you can use `npm run build` instead.

### 6. Share the app

Once you've verified in staging that the file is working as expected, it's ready to be shared. **Make sure to share `dist/index.html`, not the root `index.html`.** The latter file is compiled to `dist/index.html` in the build process.
