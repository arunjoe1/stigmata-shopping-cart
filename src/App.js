import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';

import store from './store';
import { Provider } from "react-redux";



class App extends React.Component {
 
  
  render() {

    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">Stigmata Shopping Cart</a>
          </header>

          <main>
            <div className="content">
              <div className="main">
                <Filter

                />
                <Products/>
              </div>
              <div className="sidebar">
                <Cart/>
              </div>

            </div>
          </main>
          <footer>
            All rights Reserved.
        </footer>


        </div>
      </Provider>
    );

  }

}

export default App;
