import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// ...existing code...

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    {/* ...existing routes... */}
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
