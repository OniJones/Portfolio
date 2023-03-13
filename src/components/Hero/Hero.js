import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Software & <br />
        Web Developer <br />
        Bobby Reed
      </SectionTitle>
      <SectionText>
        an avid learner looking to create websites, video games and software that are easily managed and impress users
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/reed-bobby-t/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;