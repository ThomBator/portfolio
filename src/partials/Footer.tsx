import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
    <span className="mr-4">
      {' '}
      <a target="_blank" href="https://icons8.com/icon/LoL4bFzqmAa0/github">
        GitHub
      </a>{' '}
      icon by{' '}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </span>

    <span>
      <a target="_blank" href="https://icons8.com/icon/MR3dZdlA53te/linkedin">
        LinkedIn
      </a>{' '}
      icon by{' '}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </span>
  </Section>
);

export { Footer };
