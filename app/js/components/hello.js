import React from 'react';

export default class Hello extends React.Component {
  render() {
    const names = [
      'John',
      'Jill',
      'Jane',
      'Jack',
      'Jimmy',
      'Jax'
    ];

    return (
      <div>
        <h3>Hello {this.props.name}</h3>
        <p>This is a cool looking paragraph.</p>
        <ul>
          {
            names.map(name =>
              <li className='names' key={names.length++}>{name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
