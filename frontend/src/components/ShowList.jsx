import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icecreams: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/icecreams/')
      .then(res => {
        this.setState({
          icexreams: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowIceCreamList');
      })
  };


  render() {
    const iceCreams = this.state.icecreams;
    console.log("PrintIceCream: " + iceCreams);
    let IceCreamList;

    if(!iceCreams) {
      IceCreamList = "this iceCream is out of order!";
    } else {
      IceCreamList = iceCreams.map((iceCream, k) =>
        <Card iceCream={iceCream} key={k} />
      );
    }

    return (
      <div className="ShowIceCreamList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">IceCreams List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-list" className="btn btn-outline-warning float-right">
                + Add New IceCream
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {IceCreamList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowList;