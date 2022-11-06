import React from 'react';

import { Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';
import MyList from '../pages/MyList';


const Paths = () => {
  return (
    <Switch>
        <Route 
            path='/:category/search/:keyword' 
            component={Catalog}
        />
        <Route 
            path='/:category/:id' 
            component={Detail}
        />
        <Route 
            path='/:category' 
            component={Catalog}
        />
        <Route 
            path='/'
            exact 
            component={Home}
        />
        <Route 
            path='/:saved/:id'
            component={MyList}
        />
    </Switch>
  );
}

export default Paths;