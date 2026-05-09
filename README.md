# My Portfolio

A personal portfolio website built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

## Local development

### Requirements

- Node.js 18 or newer
- npm

### Install and run

```sh
npm install
npm run dev
```

The development server runs on port 8080.

### Build for production

```sh
npm run build
```

The production output is generated in the `dist` folder.

## Publish to GitHub Pages

GitHub Pages needs the app to be built with the correct base path. If this repository is published as a project page, update `vite.config.ts` so the `base` value matches your repository name:

```ts
export default defineConfig(({ mode }) => ({
    base: mode === "production" ? "/your-repo-name/" : "/",
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
        Boolean,
    ),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
```

After that, publish the site with GitHub Pages using one of the following approaches:

### Option 1: GitHub Actions

1. Push the repository to GitHub.
2. Add a workflow that installs dependencies, runs `npm run build`, and deploys the `dist` folder to GitHub Pages.
3. In your repository settings, open Pages and set the source to GitHub Actions.

### Option 2: Manual deploy

1. Build the project locally with `npm run build`.
2. Upload the contents of the `dist` folder to the branch or folder used by GitHub Pages.
3. In your repository settings, open Pages and point it to the published source.

## Suggested workflow

```sh
git clone <YOUR_GITHUB_REPO_URL>
cd <YOUR_REPO_NAME>
npm install
npm run dev
```

When the site is ready, run `npm run build` and deploy the generated `dist` folder to GitHub Pages.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
