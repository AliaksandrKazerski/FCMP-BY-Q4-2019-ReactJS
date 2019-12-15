import React from 'react';

import Search from '../../atoms/search/index';
import SearchFilter from '../../atoms/search-filter/index';
import SearchButton from '../../atoms/search-button/index';
import IconButton from '../../atoms/icon-button';

import { getTextToUpperCase } from '../../../utils/transform-text';

import Logo from '../../../../img/netflix2.png';

import './search-panel.scss';

const classBlock = 'search-panel';
const searchByFilter = [{id: '1', name: 'title'}, {id: '2', name: 'genres'}];
const searchSortFilter = [{id: '1', name: 'release date'}, {id: '2', name: 'rating'}];

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      searchBy: 'title',
      sortBy: 'release date',
    }
  }

  prepareSearchParams = () => {
    const { getSearchParams } = this.props;
    getSearchParams(this.state);
  }

  changeSearch = (value) => {
    this.setState({ search: value });
  }

  changeSearchBy = (filter) => {
    this.setState({ searchBy: filter });
  }

  changeSortBy = (filter) => {
    this.setState({ sortBy: filter });
  }

  render() {
    const { search, searchBy, sortBy } = this.state;

    return(
      <div className={classBlock}>
        <IconButton
          logo={Logo}
        />
        <h1 className={`${classBlock}__title`}>
          {getTextToUpperCase('find your movie')}
        </h1>
        <div className={`${classBlock}__search-block`}>
          <Search
            getValue={this.changeSearch}
            searchValue={search}
          />
          <SearchButton
            active
            onClick={this.prepareSearchParams}
            defaultValue={'search'}
          />
        </div>
        <div className={`${classBlock}__first-filter`}>
          <SearchFilter
            getActiveFilter={this.changeSearchBy}
            activeFilter={searchBy}
            title={'search by'}
            filters={searchByFilter}
          />
        </div>
        <div className={`${classBlock}__second-filter`}>
          <SearchFilter
            getActiveFilter={this.changeSortBy}
            activeFilter={sortBy}
            title={'sort by'}
            filters={searchSortFilter}
          />
        </div>
      </div>
    );
  }
}
