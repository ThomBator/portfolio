import {
  GradientText,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';
import { HeroAvatar } from 'src/partials/HeroAvatar';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Thom Bator</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a junior software developer from Toronto, Canada. I graduated with
          my <GradientText>B.S. Computer Science </GradientText> from Western
          Governors University Fall 2022. Currently looking for roles in
          backend, front-end and full-stack development.
        </>
      }
      avatar={
        <img
          className="w-60 rounded-full border-double bg-slate-300  shadow-sm shadow-slate-500  "
          src="assets/images/Thom HeadshotSquare.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/thom-bator-1bab1910/">
            <HeroSocial
              src="assets/images/icons8-linkedin-94.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/thombator">
            <HeroSocial
              src="assets/images/icons8-github-94.png"
              alt="Github Icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
