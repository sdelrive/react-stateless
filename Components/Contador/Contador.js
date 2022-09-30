import React, { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
  }

  aumentar() {
    this.setState({
      valor: this.state.valor + 1,
    });
  }

  disminuir() {
    this.setState({
      valor: this.state.valor - 1,
    });
  }

  render() {
    return (
      <div>
        <h2> {this.state.valor} </h2>
        <button onClick={() => this.aumentar()}>Aumentar</button>
        <button onClick={() => this.disminuir()}>Disminuir</button>
      </div>
    );
  }
}

export default Contador;
