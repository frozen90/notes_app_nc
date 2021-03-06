import './App.css';
import MainPage from './components/MainPage';
import Amplify from "aws-amplify"
import awsExports from "./aws-exports"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import LoginPage from './components/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute'
import ShareNote from './components/Notes/components/ShareNotes/ShareNote';

Amplify.configure(awsExports)

function App() {

  return (

    <Router>
      <Switch>
        <ProtectedRoute exact path="/dashboard" component={MainPage} /> 
        <Route exact path="/login" component={LoginPage}/>
        <Route path="/shared-notes/:link" component={ShareNote}/>
        <Route path="/" component={LoginPage}/>
      </Switch>
    </Router>

  );
}

export default App;
