import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";
import InvestmentOpportunities from "./pages/InvestmentOpportunities";
// ...existing code...

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/user-management" component={UserManagement} />
          <PrivateRoute
            path="/investment-opportunities"
            component={InvestmentOpportunities}
          />
          {/* ...existing routes... */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
