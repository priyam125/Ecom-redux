import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop/ShopPage';
import SignIn from './pages/sign-in';
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/Firebase.util';
import Header from './pages/Header';
import { useEffect, useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    auth.onAuthStateChanged( user => {
      setCurrentUser(user)

      console.log(user);
    })
  },[])

  


  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path = '/' component={Homepage} />
        <Route exact path = '/shop' component={ShopPage} />
        <Route exact path = '/sign-in' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
