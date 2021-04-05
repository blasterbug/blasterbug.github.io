import React from 'react';

import Page from '../layouts/Page';
import Background from './Background';
import Intro from './Intro';
import Skills from './Skills';

function Home() {
  return (
    <Page>
      <main>
        <Intro />
        <Skills />
        <Background />
      </main>
    </Page>
  );
}

export default Home;
