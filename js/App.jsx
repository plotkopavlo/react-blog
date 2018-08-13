import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import PostAritcle from './Components/PostAtricle';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/post/:id" component={PostAritcle} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
