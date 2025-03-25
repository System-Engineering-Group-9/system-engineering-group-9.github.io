import React from 'react';
import styles from './TechCard.module.css';

export default function TechCard({ title, logo, children }) {
  return (
    <div className={styles.card}>
      <img src={logo} alt={`${title} logo`} className={styles.logo} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
