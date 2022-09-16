import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

// const [results, setResults] = useState();

// useEffect(() => {
//   fetch(`http://localhost:4000/studentprofile/12`)
//     .then((response) => response.json())
//     .then((res) => {
//       setResults(res);
//       console.log(res);
//     });
// }, [])


class CreateList extends Component {
    constructor() {
        super();
        this.state = {
            flavor: '',
            description: '',
            customer_rating: '',
            price: '',
        };
    }

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
            .post('http://localhost:8080/api/', data)
            .then(res => {
                this.setState({
                    flavor: '',
                    description: '',
                    customer_rating: '',
                    price: '',
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateList!");
            })
    };

    render() {
        return (
            <div className="CreateList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show IceCream List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add IceCream</h1>
                            <p className="lead text-center">
                                Create new IceCream
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='flavor of the IceCream'
                                        flavor='flavor'
                                        className='form-control'
                                        value={this.state.flavor}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='type of the IceCream'
                                        flavor='description'
                                        className='form-control'
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='number'
                                        placeholder="customer's rating"
                                        flavor='customer_rating'
                                        className='form-control'
                                        value={this.state.customer_rating}
                                        onChange={this.onChange}
                                    />
                                </div>

                                {/* <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    flavor='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='type'
                    flavor='flavor'
                    className='form-control'
                    value={this.state.flavor}
                    onChange={this.onChange}
                  />
                </div> */}

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateList;