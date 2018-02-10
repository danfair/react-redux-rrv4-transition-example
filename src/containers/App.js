import React from 'react';
import { Route, Link } from 'react-router-dom'

import Users from './Users'
import User from './User'
import Stars from './Stars'
import Repos from './Repos'
import PageShell from './PageShell';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>
    <main>
      <Route exact path="/" component={PageShell(Users)} />
      <Route exact path="/users/:id" component={PageShell(User)} />
      <Route path="/users/:id/stars" component={PageShell(Stars)} />
      <Route path="/users/:id/repos" component={PageShell(Repos)} />
    </main>
  </div>
)

export default App;