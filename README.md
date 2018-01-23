# styled-components-native-to-plain-codemod 🛠

It's a simple codemod to rename all imports and requires from `'styled-components/native'` to `'styled-components'` for
React Native apps.

## Why?
New version (v3) of the styled-components is changed its API so now you can import React Native components directly from 
`styled-components` not from `styled-components/native`. This codemod will do everything for you, 
so you don't spent time doing that manually

## Input/Output
```javascript
// in
import /* ... */ from 'styled-components/native';
require('styled-components/native');

// out
import /* ... */ from 'styled-components';
require('styled-components');
```

## Usage
1. Install jscodeshift`npm i -g jscodeshift`
2. Download `sc-native-to-plain.js` from this repo or install it like 
`npm i styled-components-native-to-plain-codemod` and take it from `node_modules/styled-components-native-to-plain-codemod/sc-native-to-plain.js`
3. In root of the project with sources under `/src` for example call will be
`jscodemode -t <path-to-codemod>/sc-native-to-plain.js ./src`
4. PROFIT!

## IT DOESN'T WORK!!!
If you use regular codestyle such as Prettier or Standard and not crazy one, this will do the trick :)
Take a look at the code (it's pretty straightforward), and add PR for your crazy one to match it as well :D
