import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state.place);
  // }
  <form className="search-form" onSubmit={(e) => { props.onSubmit(e); }}>
    <input
      className="place-input"
      size="30"
      type="text"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
