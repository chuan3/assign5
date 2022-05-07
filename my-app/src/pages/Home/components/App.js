import React from 'react';
import axios from 'axios';

class App extends React.Componet {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    const persons = this.state.persons;
    return (
      <div>
        <h3>Q: Who do you want to be when you grow up?</h3>
        <select>
          {persons.map((data) => {
            console.log(data);
            return <option value={data.id}>{data.name}</option>;
          })}
        </select>
      </div>
    );
  }
}
export default App;
