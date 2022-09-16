import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iceCream: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8080/api/icecreams/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          iceCream: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8080/api/icecreams/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const iceCream = this.state.icecreams;
    let IceCreamItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ iceCream.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Description</td>
            <td>{ iceCream.description }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Customer Rating</td>
            <td>{ iceCream.customer_rating }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show IceCream List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">IceCream Detail</h1>
              <p className="lead text-center">
                  View IceCream Description
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { IceCreamItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,iceCream._id)}>Delete IceCream</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-iceCream/${iceCream._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Detail
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showDetail;