import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flavor: '',
        description: '',
        customer_rating: '',
        price: '',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8080/api/iceCreams/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, IceCream: res.data})
        this.setState({
          flavor: res.data.flavor,
          description: res.data.description,
          customer_rating: res.data.customer_rating,
          price: res.data.price
        })
      })
      .catch(err => {
        console.log("Error from UpdateInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.flavor]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      flavor: this.state.flavor,
      description: this.state.description,
      customer_rating: this.state.customer_rating,
      price: this.state.price,
    };

    axios
      .put('http://localhost:8080/api/show-list/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-list/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in Update IceCream Information!");
      })
  };


  render() {
    return (
      <div className="UpdateInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show IceCream List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit IceCream</h1>
              <p className="lead text-center">
                  Update IceCream's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="flavor">flavor</label>
              <input
                type='text'
                placeholder='Flavor of the IceCream'
                flavor='flavor'
                className='form-control'
                value={this.state.flavor}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this IceCream'
                flavor='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="customer_rating">Rating this IceCream</label>
              <input
                type='number'
                placeholder='customer_rating'
                flavor='customer_rating'
                className='form-control'
                value={this.state.customer_rating}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="price">Price of this IceCream</label>
              <input
                type='number'
                placeholder='price'
                flavor='price'
                className='form-control'
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update IceCream List</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateInfo;