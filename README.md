# Create project from scratch

```
$ npm init -y 

$ npx create-expo-app@latest platilla-react-native --template blank

$ cd plantilla-react-native
```

# To add WEB to the black template

```
$ npx expo install react-dom react-native-web @expo/metro-runtime

```

# How to add Safe Area Context

```
$ npm install react-native-safe-area-context@4.10.5

```

# Install SVGs

```
$ npm install react-native-svg@15.2.0
```

## To convert to React-Native svg's
https://react-svgr.com/


# To ESLINT

```
$ npx expo lint

```

# To PRETTIER

```
$ npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier 

```

# Add to .eslintrc.js
```
// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
```

# Install NativeWind Tailwind CSS

```
$ npm install nativewind@2
$ npm install --save-dev --save-exact tailwindcss@3.3.2
```

## inicializar tailwind
$ npx tailwindcss init

## Add routes to tailwind

- tailwind.config.js
```
content: [
    "./App.{js, jsx, ts, tsx}",
    "./components/**/*.{js, jsx, ts, tsx}",
    "./app/**/*.{js, jsx, ts, tsx}"
  ],
```
- babel.config.js
```
return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
    
  };
```

# For Routing 

```
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

```

# Create app folder and inside of the folder _layout.js and index.js files

# Change routing in package.json

before was
"main": "expo/AppEntry.js",

with routing 

  "main": "expo-router/entry",


add schemas to app.json 

    "userInterfaceStyle": "light",

    "scheme": "plantillaReact",

    "splash": {

# To use ICONS

https://icons.expo.fyi/Index

npm install @expo/vector-icons

