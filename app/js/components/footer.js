import React from 'react';

export default class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <p><small>&copy {currentYear}.</small> This is the amazing <b>footer</b>.</p>
      </div>
    )
  };
}
