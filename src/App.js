import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routs.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import DefaultLayout from "./layouts/Default";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <DefaultLayout>
            <Routes />
          </DefaultLayout>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
