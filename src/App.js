import './App.css';
import {Notes} from './components/Notes/Notes';
import Amplify, { Auth } from "aws-amplify"
import awsExports from "./aws-exports"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Forms/Login';
import { Loader } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute'

Amplify.configure(awsExports)

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    checkForAuthenticatedUser()
  }, [])
  async function checkForAuthenticatedUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user', user)
      setCurrentUser(user)
      setLoading(false)
    } catch {
      setCurrentUser(null)
      setLoading(false)
    }
  }


  return (

    <Router>
      <Switch>
        <ProtectedRoute exact path="/notes" > <Notes/></ProtectedRoute>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
