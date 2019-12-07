import React from 'react';
import './search-filter.scss';
import SearchButton from '../search-button';

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

    this.setState({ activeFilter: value }, () => {getActiveFilter(this.state.activeFilter)});
  }

  renderFilters = (filters) => {
    const { activeFilter } = this.state;

    return filters.map(filter => {
      return <SearchButton
        onClick={this.changeActiveFilter}
        defaultValue={filter}
        active={filter === activeFilter}
      />
    });
  };

  render() {
    const { title, filters } = this.props;

    return(
      <div className={classBlock}>
        <span>
          {title}
        </span>
        {filters && this.renderFilters(filters)}
      </div>
    );
  }
}
