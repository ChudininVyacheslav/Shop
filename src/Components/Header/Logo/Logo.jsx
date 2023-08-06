import React from 'react';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <span className={styles.logo}><Link className={styles.logo__link} to={'/'}>House Staff</Link></span>
  )
}

export default Logo