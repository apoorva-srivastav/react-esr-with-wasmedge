import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './domains/Home/Home';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import { Footer } from './components/Footer/Footer.jsx';
import Cart from './domains/Cart/Cart';
import { CartProvider } from './context/DataContext';
import { ProductDetails } from './domains/Products/ProductDetails';

function App(props) {
  return (
      <div className="App">
        <CartProvider>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home {...props}/>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id">
              <ProductDetails/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        </CartProvider>
        <Footer/>
      </div>
  );
}

export default App;

// export const Appp = <Router>
// <div className="App">
//   <Navbar />
//   <div className="content">
//     <Switch>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/create">
//         <Create />
//       </Route>
//       <Route path="/blogs/:id">
//         <BlogDetails />
//       </Route>
//       <Route path="*">
//         <NotFound />
//       </Route>
//     </Switch>
//   </div>
// </div>
// </Router>
