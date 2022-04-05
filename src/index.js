import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { BuilderComponent } from "@builder.io/react";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            render={({ location }) => <CatchallPage key={location.key} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
