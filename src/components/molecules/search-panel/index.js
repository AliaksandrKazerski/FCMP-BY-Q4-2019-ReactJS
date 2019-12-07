import React from 'react';

import Search from '../../atoms/search/index';
import SearchFilter from '../../atoms/search-filter/index';
import SearchButton from '../../atoms/search-button/index';
import ResultCount from '../../atoms/results-count';

import './search-panel.scss';

const classBlock = 'search-panel';

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
    const { resultsCount } = this.props;

    const { search, searchBy, sortBy } = this.state;

    return(
      <div className={classBlock}>
        <Search
          getValue={this.changeSearch}
          searchValue={search}
        />
        <SearchFilter
          getActiveFilter={this.changeSearchBy}
          activeFilter={searchBy}
          title={'search by'}
          filters={['title', 'gengery']}
        />
        <SearchButton
          onClick={this.prepareSearchParams}
          defaultValue={'search'}
        />
        <ResultCount
          resultValue={resultsCount}
        />
        <SearchFilter
          getActiveFilter={this.changeSortBy}
          activeFilter={sortBy}
          title={'sort by'}
          filters={['release date', 'rating']}
        />
      </div>
    );
  }
}