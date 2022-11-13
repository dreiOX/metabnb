import React from 'react';
import {
  HeroSection,
  PartnerSection,
  InspirationSection,
  DiscoverSection,
} from '../../components/layout/Home';
import { PageWrapper } from '../../components/modules/wrapper';

function HomeView() {
  return (
    <PageWrapper>
      <section>
        <HeroSection />
      </section>
      <section>
        <PartnerSection />
      </section>
      <section>
        <InspirationSection />
      </section>
      <section>
        <DiscoverSection />
      </section>
    </PageWrapper>
  );
}

export default HomeView;
