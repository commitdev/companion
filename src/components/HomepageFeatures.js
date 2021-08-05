import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Journey',
    description: (
      <>
        A predetermined paths to help you navigate your career.
      </>
    ),
  },
  {
    title: 'Step',
    description: (
      <>
        A single action on your way to successful career. Journeys are made up of N steps.
      </>
    ),
  },
  {
    title: 'Junction',
    description: (
      <>
        A decision point on your Journey.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
