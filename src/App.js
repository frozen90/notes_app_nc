import './App.css';
import {Notes} from './components/Notes/Notes';
import Amplify from "aws-amplify"
import awsExports from "./aws-exports"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Forms/Login';
import { ProtectedRoute } from './components/ProtectedRoute'
import ShareNote from './components/Notes/components/ShareNotes/ShareNote';

Amplify.configure(awsExports)

function App() {

  return (

    <Router>
      <Switch>
        <ProtectedRoute exact path="/notes" component={Notes} /> 
        <Route exact path="/login" component={Login}/>
        <Route path="/shared-notes/:link" component={ShareNote}/>
        <Route path="/" component={Login}/>
      </Switch>
    </Router>

  );
}

export default App;
