import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  text,
  onChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="text">Text</label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      onChange={onChange}
    />
    <button type="submit">Search</button>
  </form>
);

Controls.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
