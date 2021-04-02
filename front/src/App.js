import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Footer from './components/Footer/Footer';
import BooksList from './components/Books/BooksList';
import Shipment from './components/Shipment/Shipment';
import ConfirmationPage from './components/Confirmation/ConfirmationPage';

const App = () => {
  return (
    <>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={BooksList}></Route>
          <Route path='/basket' component={Basket}></Route>
          <Route path='/shipment' component={Shipment}></Route>
          <Route path='/confirmation' component={ConfirmationPage}></Route>
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App;
