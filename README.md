# Create react app and tailwind

## Create a react app

Start by creating a new Create React App project if you don’t have one set up already. The most common approach is to use Create React App:

```
npx create-react-app my-project
cd my-project
```

## Add tailwind dependencies

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

## Instal and configure CRACO

Create React App doesn’t support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility build for now as we’ve shown above.

CRACO (Create React App Configuration Override)

```
npm install @craco/craco
```

Once is installed, replace the scripts from package.json for the new craco configuration

```diff
  {
    // ...
    "scripts": {
-        "start": "react-scripts start",
-        "build": "react-scripts build",
-        "test": "react-scripts test",
+        "start": "craco start",
+        "build": "craco build",
+        "test": "craco test",
        "eject": "react-scripts eject"
    },
  }
```

Now create a `craco.config.js` at the root of the project with this content

```js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

## Create your tailwind config file

```
npx tailwindcss-cli@latest init
```

## Configure Tailwind to remove unused styles in production

On the new `tailwind.config.js` edit the content as follow

```diff
  module.exports = {
-   purge: [],
+   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

## Include Tailwind in your CSS

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
