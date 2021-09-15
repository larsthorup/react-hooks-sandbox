# react-hooks-sandbox

[![Build Status](https://travis-ci.org/larsthorup/react-hooks-sandbox.png)](https://travis-ci.org/larsthorup/react-hooks-sandbox) [![Coverage Status](https://coveralls.io/repos/larsthorup/react-hooks-sandbox/badge.png?branch=master)](https://coveralls.io/r/larsthorup/react-hooks-sandbox?branch=master) [![Dependency Status](https://david-dm.org/larsthorup/react-hooks-sandbox.png)](https://david-dm.org/larsthorup/react-hooks-sandbox#info=dependencies) [![devDependency Status](https://david-dm.org/larsthorup/react-hooks-sandbox/dev-status.png)](https://david-dm.org/larsthorup/react-hooks-sandbox#info=devDependencies)


    npm start
    npm test
    npm run build

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Noteworthy features

* [Simplified Redux toolkit without Immer](src/lib/redux-slice.js)
* [useSelector and useDispatch](src/view/Home.js)
* [useReducer for local state](src/view/LoginForm.js)
* [redux-history to sync history with state](src/lib/redux-history.js)
  * [useRoutes](src/view/App.js)
  * [useNavigate](src/view/Profile.js)

## ToDo

* lib/redux.test.js
* Backend routing to support deep links
