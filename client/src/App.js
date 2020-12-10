import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import OneProd from './components/OneProd';
import EditForm from './components/EditForm';

function App() {

  return (
    <div className="container">
      <Router>
        <Form path="/"/>
        <OneProd path="/:_id" />
        <EditForm path="/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
