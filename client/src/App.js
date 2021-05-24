import './assets/styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { Menu, Dashboard, Payment, Landing, Music, Support, Warnings } from './pages';
import { SetupCommands, AdminCommands, FunCommands, MusicCommands, EconomyCommands, InteractionCommands, SupportCommands } from './pages/commands';

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={Landing} />
      <Route path='/menu' exact={true} component={Menu} />
      <Route path='/payment' exact={true} component={Payment} />
      <Route path='/dashboard/:id' exact={true} component={Dashboard} />
      <Route path='/music' exact={true} component={Music} />
      <Route path='/support' exact={true} component={Support} />
      <Route path ='/warnings/:id' exact={true} component={Warnings} />

      <Route path='/commands/setup' exact={true} component={SetupCommands} />
      <Route path='/commands/admin' exact={true} component={AdminCommands} />
      <Route path='/commands/fun' exact={true} component={FunCommands} />
      <Route path='/commands/music' exact={true} component={MusicCommands} />
      <Route path='/commands/economy' exact={true} component={EconomyCommands} />
      <Route path='/commands/interaction' exact={true} component={InteractionCommands} />
      <Route path='/commands/support' exact={true} component={SupportCommands} />
    </Switch>
  );
}

export default App;
