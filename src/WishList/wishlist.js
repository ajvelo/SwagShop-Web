import React, { Component } from 'react';
import './wishlist.css';
import DataService from '../Services/data-service';
import NotificationService from '../Services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';

class Wishlist extends Component {

    constructor(props) {
        super(props);

        // Create array of objects
        this.state = {wishList:[
            {
                title: "Foo",
                price: 23.99,
                _id: "32432432432"
            },
            {
                title: "Bar",
                price: 10.00,
                _id: "2394873"
            },
            {
                title: "Baz",
                price: 3.99,
                _id: "40349380983"
            }
        ]}
        //Bind functions
        this.createWishList = this.createWishList.bind(this);
    }
    createWishList = () => {
        const list = this.state.wishList.map((product) => 
            <ProductCondensed product={product} key={product._id} >
            </ProductCondensed>
        );

        return list;
    }

    render() {
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Wishlist;