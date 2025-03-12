import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
              Showcase Video
          </Link>
        </div>
      </div>
    </header>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      name: 'Ryan Li',
      role: 'team leader',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jack Mok',
      role: 'UI/UX Designer',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jack Pan',
      role: 'AI engineer',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Prantanil',
      role: 'Network engineer',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className={styles.teamSection}>
      <h2>Meet the Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img src={member.imageUrl} alt={`${member.name}'s photo`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.centeredText}>
          <div className={styles.imageRow}>
            <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/University_College_London_logo.svg/2560px-University_College_London_logo.svg.png' alt='UCL Logo'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' alt='IBM Logo'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlVVpa5-2EwHsEzP0EWxIKkMt1hz26mE-rg&s' alt='Another Logo'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/IBM_granite_2_cubes_logo.svg/1200px-IBM_granite_2_cubes_logo.svg.png' alt='IBM Granite Logo'></img>
          </div>
          <br></br>
          <h2>Abstract</h2>
          <p>
            Education should be an engaging and inclusive experience for all students, yet those who are unable to attend school due to hospitalization or other circumstances often face isolation and disengagement. Traditional teaching methods, heavily reliant on textbooks and exercises, can make remote learning feel uninspiring and detached from the classroom environment. Additionally, teachers face increasing workloads, making it challenging to provide personalized support for absent students.
          </p>
          <p>
            To address these challenges, we have developed an innovative game-based learning platform that seamlessly integrates remote students into classroom activities. Our solution not only enhances engagement but also reduces the burden on educators by making lessons more dynamic and interactive. Research highlights the effectiveness of game-based learning in boosting motivation and retention, particularly for students with special educational needs (SEN).
          </p>
          <p>
            At its core, our system combines an engaging board game with an advanced AI-powered quiz engine, ensuring that learning remains fun and effective. Hospitalized children can join their peers via video call, actively participating in lessons as if they were physically present. By bridging the gap between remote and in-person learners, our platform fosters a more inclusive and collaborative educational experience, setting a new standard for accessible and engaging learning.
          </p>
        </div>
        <TeamSection />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}