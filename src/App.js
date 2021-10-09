import './App.css';
import Notes from './components/Notes/Notes';
import Amplify, {Hub} from "aws-amplify"
import awsExports from "./aws-exports"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Forms/Login';
import { useEffect, useState } from 'react';


Amplify.configure(awsExports)

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Hub.listen("auth", (event) => {
      console.log("auth event", event)
      setCurrentUser(event.payload.data)
    });
  });

  return (
    <Router>
      {currentUser ?

        <Switch>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route exact path="/notes-test">
            <Notes />
          </Route>

        </Switch>

        :
        <Login />}
    </Router>

  );
}

export default App;
