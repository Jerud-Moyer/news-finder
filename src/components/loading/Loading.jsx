import React from 'react';
import styles from './Loading.css';

const Loading = () => (
  <img
    className={styles.Loading}
    src="https://media1.giphy.com/media/QNFk30fVrNtJWzs7o2/giphy.gif"
    alt="spinning globe"
  />
);

export default Loading;
