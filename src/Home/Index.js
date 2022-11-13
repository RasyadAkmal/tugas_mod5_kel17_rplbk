import "./Index.css";
import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log(res.data);
      this.setState({ persons });
      console.log(this.state.persons);
    });
  }
  
deleteHandlerUser = (props) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/` + props)
      .then((res) => {
        let arr = this.state.persons;
        var idx = props - 1;
        arr.splice(idx, 1);
        this.setState([...arr]);
      });
  };

  render() {
    return (
      <div>
        <div className="title-container">
          <h1>Tugas Modul 5</h1>
          <h4>Kelompok 17</h4>
        </div>
        {this.state.persons.map((person) => {
          return (
            <div className="post-card" key={person.id}>
              <h2 className="post-title">{person.name}</h2>
              <p className="post-body">Email : {person.email}</p>
              <div className="button">
                <button
                  className="delete-btn"
                  onClick={() => this.deleteHandlerUser(person.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
