import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Order from './components/Order';
import Success from './components/Success';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/success" component={Success} />
      </Switch>
      </Router>
    </>
  );
}

export default App;