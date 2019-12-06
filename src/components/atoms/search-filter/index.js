import React from 'react';

export default class Search extends React.Component {

  renderFilters(filters) {
    return filters.map(filter => <button>{filter}</button>);
  };

  render() {
    const { title, filters } = this.props;

    return(
      <div>
        <span>
          {title}
        </span>
        {filters && this.renderFilters(filters)}
      </div>
    );
  }
}
