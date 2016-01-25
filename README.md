# Kynplex Component Skeleton

A completely testable and linted skeleton for building React components for Kynplex, Inc.


## Dependencies

* Of course [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom). You need to have these modules installed.

## Running

```
npm run dev
```

Go to localhost:9000 in your browser

## Usage (ES6)

Simply rename the project to be the component you are building. The name of any project should be kynplex-componentname, so for example if you are building a search bar, you should follow the naming convention kynplex-search-bar, and consequently change the package.json scripts to match the name of the project.

You need to rename the main file you will use in the src/ directory to match the name of the component you use. For example, SearchBar.jsx and inside of the prepublish scripts, your scripts need to look as follows depending on your project name.

```js
"scripts": {
  "dev": "webpack --watch --inline",
  "prepublish": "babel ./src --out-dir ./lib --source-maps --presets es2015,react --plugins babel-plugin-add-module-exports && browserify ./lib/SearchBar.js -o ./build/kynplex-search-bar.js --transform browserify-global-shim --standalone ListFilter && uglifyjs ./build/kynplex-search-bar.js --compress --mangle --output ./build/kynplex-search-bar.min.js --source-map ./build/kynplex-search-bar.min.js.map",
  "test": "karma start",
  "test:ci": "watch 'npm run test' src/"
},
```



## Testing

```
npm run test
```
