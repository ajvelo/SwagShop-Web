import React, { Component } from 'react';
import './wishlist.css';
import DataService from '../Services/data-service';
import NotificationService, { NOTIF_WISHLIST_CHANGED } from '../Services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';

let ns = new NotificationService();
class Wishlist extends Component {

    constructor(props) {
        super(props);

        // Create array of objects
        this.state = {wishList:[]};

        //Bind functions
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({wishList: newWishList});
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