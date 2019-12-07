import React from 'react';
import './search.scss';

const classBlock = 'search';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.defaultValue
    }
  }
  

  onChange = (e) => {
    const  { value }  = e.target
    const { getValue } = this.props;

    this.setState({ inputValue: value }, () => {getValue(this.state.inputValue)});
  }

  render() {
    const { defaultValue } = this.props;
    return(
      <>
        <input
          type={'search'} 
          className={classBlock}
          onChange={this.onChange}
          value={defaultValue}
        >
        </input>
      </>
    );
  }
}
