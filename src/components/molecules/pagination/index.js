import React from 'react';

import './pagination.scss';

const classBlock = 'pagination';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paginationPosition: 0,
      paginationSize: 6,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activePage !== this.props.activePage) {
      this.setState({paginationPosition: this.props.activePage - 4});
    }
  }

  leftArrowOnClick = () => {
    const { paginationPosition } = this.state;
    if (paginationPosition > -1) {
      this.setState({ paginationPosition: paginationPosition - 1 });
    }
  };

  rightArrowOnClick = () => {
    const { paginationPosition, paginationSize } = this.state;
    const { count, limit } = this.props;

    if (paginationPosition + paginationSize < Math.ceil(count / limit)) {
      this.setState({ paginationPosition: paginationPosition + 1 });
    }
  };

  leftDoubleArrowOnClick = () => {
    this.setState({ paginationPosition: -1 });
  };

  rightDoubleArrowOnClick = () => {
    const { count, limit } = this.props;
    const { paginationSize } = this.state;
    this.setState({ paginationPosition: Math.ceil(count / limit) - paginationSize });
  };

  renderPaginationButton = () => {
    const { count, activePage, limit, changePage } = this.props;
    const { paginationPosition, paginationSize} = this.state;

    const pageCount = Math.ceil(count / limit);

    return (
      <>
        <button
          onClick={this.leftDoubleArrowOnClick}
          className={`${classBlock}__button`}
        >
          {'<<'}
        </button>
        <button
          onClick={this.leftArrowOnClick}
          className={`${classBlock}__button`}
        >
          {'<'}
        </button>
        {[...Array(pageCount).keys()].map((page, pos) => {
          if (paginationPosition + paginationSize > pos && pos > paginationPosition) {
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
            )
          }
        })}
        <button
          onClick={this.rightArrowOnClick}
          className={`${classBlock}__button`}
        >
          {'>'}
        </button>
        <button
          onClick={this.rightDoubleArrowOnClick}
          className={`${classBlock}__button`}
        >
          {'>>'}
        </button>
      </>
    )
  };

  render() {
    const {
      count,
    } = this.props;

    return(
      <div
        className={classBlock}
      >
        {count > 0 && this.renderPaginationButton()}
      </div>
    );
  };
};
