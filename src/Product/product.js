import React, { Component } from 'react';
import './product.css';
import DataService from '../Services/data-service';

let dataService = new DataService();
class Product extends Component {

    constructor(props) {
        super(props);

        //Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    onButtonClicked = () => {
        dataService.addWishListItem(this.props.product);
    }

    render() {
        return(
        <div className="card product">
            <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
            <div className="card-block">
            <h4 className="card-title"> {this.props.product.title} </h4>
            <p className="card-text">Price: ${this.props.product.price}</p>
            <a href="#" onClick={() => this.onButtonClicked()} className="btn btn-primary">Add to Wishlist</a>
            </div>
        </div>
        );
    }
}

export default Product;