import React, { Component } from 'react';
import './product.css';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../Services/notification-service';
import DataService from '../Services/data-service';

let dataService = new DataService();
let ns = new NotificationService();

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {onWishList: dataService.itemOnWishList()};

        //Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    onButtonClicked = () => {
        if (this.state.onWishList) {
            dataService.removeWishListItem(this.props.product);
        } else {
            dataService.addWishListItem(this.props.product);
        }
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({onWishList: dataService.itemOnWishList(this.props.product)});
    }

    render() {
        var btnClass;

        if (this.state.onWishList) {
            btnClass = "btn btn-danger";
        } else {
            btnClass = "btn btn-primary"
        }
        return(
        <div className="card product">
            <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
            <div className="card-block">
            <h4 className="card-title"> {this.props.product.title} </h4>
            <p className="card-text">Price: ${this.props.product.price}</p>
            <a href="#" onClick={() => this.onButtonClicked()} className={btnClass}>
            {this.state.onWishList ? "Remove From Wishlist" : "Add To Cart"}</a>
            </div>
        </div>
        );
    }
}

export default Product;