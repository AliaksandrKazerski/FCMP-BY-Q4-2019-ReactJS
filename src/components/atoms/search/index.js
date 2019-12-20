import React from 'react';
import './search.scss';

const classBlock = 'search';
const DEFAULT_PLACEHOLDER = 'Search';

export default class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.defaultValue
    }
  }

  onChange = (e) => {
    const  { value }  = e.target;
    const { getValue } = this.props;

    this.setState({ inputValue: value }, () => {getValue(this.state.inputValue)});
  };

  render() {
    const { searchValue } = this.props;

    return(
      <>
        <input
          type={'search'}
          className={classBlock}
          onChange={this.onChange}
          value={searchValue}
          placeholder={DEFAULT_PLACEHOLDER}
        >
        </input>
      </>
    );
  }
}
