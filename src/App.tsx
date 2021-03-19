import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage'
import AlbumPage from './components/AlbumPage/AlbumPage'
import DetailPhoto from './components/DetailPhoto/DetailPhoto'
import FavoritePage from './components/FavoritePage/FavoritePage'
import UserPage from './components/UserPage/UserPage'
import Page404 from './components/Page404/Page404'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/album/:id" children={<AlbumPage/>}/>
        <Route exact path="/photo/:id" children={<DetailPhoto/>}/>
        <Route exact path="/favorite" component={FavoritePage}/>
        <Route exact path="/user/:id" children={<UserPage/>}/>
        <Route exact path="/404" component={Page404}/>
        <Redirect path="*" to="/404"/>
      </Switch>
    </Router>
  );
}
export default App;