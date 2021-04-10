import React from 'react';

import Background from './Background';
import Intro from './Intro';
import Page from '../layouts/Page';
import PageHeader from './PageHeader';
import Skills from './Skills';

function Home() {
  return (
    <Page>
      <main>
        <PageHeader />
        <Intro />
        <Skills />
        <Background />
      </main>
    </Page>
  );
}

export default Home;
