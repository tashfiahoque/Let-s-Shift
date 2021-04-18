import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import OrderList from './Components/DashBoard/OrderList/OrderList';
import ManageServices from './Components/DashBoard/ManageServices/ManageServices';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import Dashboard from './Components/DashBoard/Dashboard/Dashboard';
import BookService from './Components/DashBoard/BookService/BookService';
import BookingList from './Components/DashBoard/BookingList/BookingList';
import Review from './Components/DashBoard/Review/Review';
import Login from './Components/Home/Login/Login';
import PrivateRoute from './Components/Home/Login/PrivateRoute';
import ScrollToTop from "react-scroll-to-top";

export const IdContext = createContext();
export const UserContext = createContext();

function App() {
  const defaultUser = {
    signed: false,
    name: '',
    email: '',
    photo: '',
    message: ''
  }
  const [user, setUser] = useState(defaultUser);
  const [selectedService, setSelectedService] = useState([]);
  return (
    <>
      <ScrollToTop smooth color="#FBC425" />
      <UserContext.Provider value={[user, setUser]}>
        <IdContext.Provider value={[selectedService, setSelectedService]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute path="/addServices">
                <Dashboard />
              </PrivateRoute>
              <Route path="/orderList">
                <OrderList />
              </Route>
              <Route path="/manageServices">
                <ManageServices />
              </Route>
              <Route path="/makeAdmin">
                <MakeAdmin />
              </Route>
              <PrivateRoute path="/selectService/:id">
                <BookService />
              </PrivateRoute>
              <Route path="/bookService">
                <BookService />
              </Route>
              <Route path="/bookingList">
                <BookingList />
              </Route>
              <Route path="/review">
                <Review />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </IdContext.Provider>
      </UserContext.Provider>
    </>

  );
}

export default App;
