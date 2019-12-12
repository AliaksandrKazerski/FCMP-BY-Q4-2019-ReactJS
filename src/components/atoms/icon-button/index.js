import React from 'react';

const classBlock = 'icon-button';

export default class IconButton extends React.PureComponent {
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
