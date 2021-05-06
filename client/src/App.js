import './assets/styles/App.css';
import { Button } from "@chakra-ui/react"
import { Switch, Route } from 'react-router-dom'
import { Menu, Dashboard, Payment, Landing, Faq, Commands, Music, Support } from './pages';

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={Landing} />
      <Route path='/menu' exact={true} component={Menu} />
      <Route path='/payment' exact={true} component={Payment} />
      <Route path='/dashboard/:id' exact={true} component={Dashboard} />
      <Route path='/faq' exact={true} component={Faq} />
      <Route path='/commands' exact={true} component={Commands} />
      <Route path='/music' exact={true} component={Music} />
      <Route path='/support' exact={true} component={Support} />
    </Switch>
  );
}

export default App;
