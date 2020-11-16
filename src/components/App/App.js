import React from 'react';
import HeroeNew from '../../pages/HeroeNew';
import Heroes from '../../pages/Heroes';
import Layout from '../Layout/Layout';
import { Router } from '@reach/router';


const App = () => {
  return (
    <Layout>
      {/* <Switch>
            <Route exact path="/" component={Heroes} />
            <Route exact path="/heroe/new" component={HeroeNew} />
            <Route exact path="/heroe/:heroeId/edit" component={HeroeEdit} />
            <Route exact path="/heroe/:heroeId/detail" component={HeroeDetail} />
            <Route component={NotFound} />
          </Switch> */}
      <Router>
        <Heroes path='/' />
        <HeroeNew path='/heroe/new' />
      </Router>
    </Layout>
  );
}

export default App;
