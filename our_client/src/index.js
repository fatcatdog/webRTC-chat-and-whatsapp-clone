import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { useRoutes } from "hookrouter";
import routes from "./router";
import NotFoundPage from './components/NotFoundPage';


function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
