import 'stop-runaway-react-effects/hijack'

import React from 'react'
import ReactDOM from 'react-dom'

import {App} from 'App'
import * as serviceWorker from 'serviceWorker'

// @ts-expect-error
ReactDOM.unstable_createRoot(document.getElementById(`root`)).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()