import React from 'react';

import SearchButton from '../search-button';

import { getTextToUpperCase, getTextToLowerCase } from '../../../utils/transform-text';

import './search-filter.scss';

const classBlock = 'search-filter';

export default class SearchFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: this.props.activeFilter
    }
  }

  changeActiveFilter = (e) => {
    const { value } = e.target
    const { getActiveFilter } = this.props;

    this.setState({ activeFilter: getTextToLowerCase(value) }, () => {getActiveFilter(this.state.activeFilter)});
  }

  renderFilters = (filters) => {
    const { activeFilter } = this.state;

    return filters.map(filter => {
      return <SearchButton
        onClick={this.changeActiveFilter}
        defaultValue={getTextToUpperCase(filter)}
        active={filter === activeFilter}
      />
    });
  };

  render() {
    const { title, filters } = this.props;

    return(
      <div className={classBlock}>
        <span className={`${classBlock}__title`}>
          {getTextToUpperCase(title)}
        </span>
        <div className={`${classBlock}__filters`}>
        {filters && this.renderFilters(filters)}
        </div>
      </div>
    );
  }
}
