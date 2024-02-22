import React from "react"
import App from "./App"
import { createRoot } from 'react-dom/client'
import { applyMiddleware } from "redux"
import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import reducer from "./reducers"

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunk
  ))
)

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)