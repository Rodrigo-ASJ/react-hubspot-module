import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from "react-router-dom";

const targetModulesData = document.querySelectorAll(
  '.cms-react-boilerplate > script[type="application/json"]',
);

targetModulesData.forEach(({ dataset, textContent }) => {

  const root = document.getElementById(`App--${dataset.moduleInstance}`);

  return ReactDOM.render(
    <ErrorBoundary>
      <BrowserRouter>
        <App
          portalId={dataset.portalId}
          moduleData={JSON.parse(textContent)}
          moduleInstance={dataset.moduleInstance}
        />      
      </BrowserRouter>
    </ErrorBoundary>,
    root,
  );
});
