import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routs.js";
import { AuthContextProvider } from "./context/AuthContext.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
