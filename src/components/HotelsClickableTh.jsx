import React from 'react';
import PropTypes from 'prop-types';

const HotelsClickableTh = ({ label, sortKey, isSelected, onSort }) => (
  <th
    className="hotel-clikable-th"
    onClick={() => onSort(sortKey)}
  >{label}{isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};


export default HotelsClickableTh;
