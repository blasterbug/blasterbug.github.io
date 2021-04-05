import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import './app.css';

const FourOFour = lazy(() => import('./FourOFour'));
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <Router>
      <Suspense fallback="">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/404">
            <FourOFour />
          </Route>
          <Route>
            <FourOFour />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
