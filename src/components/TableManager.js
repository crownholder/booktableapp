import React, { Component } from 'react';

class TableManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
    };
  }

  componentDidMount() {
    fetch('https://littlelemon1.s3.us-east-2.amazonaws.com/tables.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tables: data });
      })
      .catch((error) => {
        console.error('Error loading table data: ', error);
      });
  }


  render() {
    const { tables } = this.state;

    return (
      <div>
        <h1>Tables</h1>
        <ul>
          {tables.map((table) => (
            <li key={table.id}>
              Table {table.number} - Capacity: {table.capacity}{' '}
              {table.isReserved ? '(Reserved)' : '(Not Reserved)'}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TableManager;