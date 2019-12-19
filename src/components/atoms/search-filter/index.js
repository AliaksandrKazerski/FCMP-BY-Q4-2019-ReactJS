import React from 'react';

import SearchButton from '../search-button';

import { getTextToUpperCase, getTextToLowerCase } from '../../../utils/transform-text';

import './search-filter.scss';

const classBlock = 'search-filter';

const getAdditionalClass = (pos, filters) => {
  if (pos === 0) {
    return 'left';
  }
  if (pos === filters.length -1) {
    return 'right';
  }
};

const transformFilter = (filter) => {
  if (filter === 'release_date') {
    filter = 'release date';
  }
  if (filter === 'vote_average') {
    filter = 'rating';
  }
  return filter;
};

export default class SearchFilter extends React.Component {

  changeActiveFilter = (e) => {
    const { value } = e.target;
    const { getActiveFilter } = this.props;

    getActiveFilter(getTextToLowerCase(value));
  };

  renderFilters = (filters) => {
    const { activeFilter } = this.props;

    return filters.map((filter, pos, filters) => {
      const additionalClass = getAdditionalClass(pos, filters);
      return <SearchButton
        key={filter.id}
        additionalClass={additionalClass}
        onClick={this.changeActiveFilter}
        defaultValue={getTextToUpperCase(filter.name)}
        active={filter.name === transformFilter(activeFilter)}
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
