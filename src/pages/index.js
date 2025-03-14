import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from '../css/index.module.css';
import TeamSection from "../components/HomepageFeatures/TeamSection";

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
        <div className= {styles.centeredText}>
          <h2>Demo video</h2>
          <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Bo3ZEbmgZ4A" // change the link to demo video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
        </div>
        <br></br>
        <div className={styles.centeredText}>
          <h2>Project Timeline</h2>
          <p>We have managed our development process using a Gantt chart</p>
          <img alt={"development process"}
               src='https://students.cs.ucl.ac.uk/2023/group23/assets/images/gantt-17c3ac48eeab5938faa87ad0df3922d0.png'/>
        </div>
        <br/>
        <div className={styles.centeredText}>
          <h2>Exposures</h2>
          <h3>NAS school visit & Bett Conference</h3>
          <div className={styles.imageGrid}>
            <img src='/photos/nasQuiz.JPG' alt='Exposure'></img>
            <img src='/photos/nas.JPG' alt='Exposure'></img>
            <img src='/photos/UCL Group photo 2.png' alt='Exposure'></img>
            <img src='/photos/bett.png' alt='Exposure'></img>
          </div>
        </div>
        <br></br>

      </main>
    </Layout>
  );
}
