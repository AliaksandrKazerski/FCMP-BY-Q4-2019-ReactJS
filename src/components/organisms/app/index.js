import React from 'react';

import Search from "../../atoms/search/index";
import SearchFilter from "../../atoms/search-filter/index";

export default class Index extends React.Component {
  render() {
    return(
      <>
        <Search/>
        <SearchFilter
          title={`search by`}
          filters={['title', 'gengery']}
        />
      </>
    );
  }
}
