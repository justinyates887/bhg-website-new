import './assets/styles/App.css';
import { Button } from "@chakra-ui/react"
import { Switch, Route } from 'react-router-dom'
import { Dashboard, Payment } from './pages';

function App() {
  return (
    <Switch>
      <Route path='/dashboard' exact={true} component={Dashboard} />
      <Route path='/payment' exact={true} component={Payment} />
    </Switch>
  );
}

export default App;
