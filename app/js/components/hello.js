import React from 'react';

export default class Hello extends React.Component {
  render() {
    const names = ['John', 'Jill', 'Jane', 'Jack', 'Jimmy'];

    return (
      <div>
        <h3>Hello World Heading</h3>
        <p>This is a cool looking paragraph.</p>
        <ul>
          { names.map(name => <li className='names'>{name}</li>) }
        </ul>
      </div>
    );
  }
}
