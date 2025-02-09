import React from 'react';


//Redux
import { Provider } from 'react-redux';
import store from './store';

//Router

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// Componentes
import Header from './components/Header';
import NuevoProducto from './components/NuevoProducto';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path = "/" component = {Productos}/>
            <Route exact path = "/productos/nuevo" component = {NuevoProducto}/>
            <Route exact path = "/productos/editar/:id"  component = {EditarProducto}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
