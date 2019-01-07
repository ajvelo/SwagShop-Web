import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Product from '../Product/product';
import Wishlist from '../WishList/wishlist'

// Services
import HttpService from '../Services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {products: []};
    // Bind functions
    this.loadData = this.loadData.bind(this);
    this.loadData();
    this.productList = this.productList.bind(this);
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data.products})
    }, err => {
      console.log(err);
    }); 
  }

  productList = () => {
    const list = this.state.products.map((product) =>
    <div className="col-sm-4" key={product._id}>
      <Product price={product.price}  title={product.title}  imgUrl={product.imgUrl}/>
    </div>
  );
  return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Swag Shop</h2>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
          <div className="col-sm-8">
          <div className="row">
          {this.productList()}
          </div>
          </div>
          <div className="col-sm-4">
            <Wishlist></Wishlist>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
