import React from 'react';

import './pagination.scss';

const classBlock = 'pagination';

export default class Pagination extends React.Component {

  renderPaginationButton = () => {
    const { count, activePage, limit, changePage } = this.props;

    const pageCount = Math.ceil(count / limit);

    return [...Array(pageCount).keys()].map(page => {
        return (
          <button
            onClick={() => changePage(page + 1, limit)}
            key={page}
            className={
            activePage === page + 1
              ? `${classBlock}__button--active`
              : `${classBlock}__button`
          }>
            {page + 1}
          </button>
        );
    });

  };

  render() {
    const {
      count,
    } = this.props;

    return(
      <div
        className={classBlock}
      >
        {count && this.renderPaginationButton()}
      </div>
    );
  };
};
