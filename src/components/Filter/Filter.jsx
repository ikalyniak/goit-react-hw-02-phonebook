import React from 'react';
// import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input name="filter" type="text" value={value} onChange={onChange} />
    </label>
  );
}

// Filter.prototype = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
