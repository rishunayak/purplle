
import { Heading } from '@chakra-ui/react';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Components/Home';
import UserProfile from './Pages/UserProfile/UserProfile';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Footer from './Components/Footer';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
      {/*<Navbar1/>*/}
      <Products/>
      {/*<Home/>*/}
      {/*<UserProfile />*/}
    </div>
  );
}

export default App;
