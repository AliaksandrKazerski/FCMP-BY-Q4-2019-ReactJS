import React from 'react';

const classBlock = 'icon-button';

export default class IconButton extends React.Component {
  render() {
    const { onClick, logo } = this.props;

    return(
      <>
        <img
          src={logo} 
          className={classBlock}
          onClick={onClick}
        />
      </>
    );
  }
}
