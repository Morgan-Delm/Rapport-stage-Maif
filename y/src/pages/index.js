import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
              <div className={styles.buttons}>
                  <Link
                      className="button button--secondary button--lg"
                      to="/docs/Experiences/stage-appli-sourcing">
                      Commencer la lecture
                  </Link>
              </div>
          </div>
      </header>
  );
}

export default function Home() {
    return (
        <Layout
            description="Ceci est le rapport de Stage Maif 2025 de Delmas Morgan">
            <HomepageHeader/>
        </Layout>
    );
}
