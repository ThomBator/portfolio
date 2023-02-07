import { GradientText, Section } from 'astro-boilerplate-components';
import { HeroAvatar } from 'src/partials/HeroAvatar';
import { HeroSocial } from 'src/partials/HeroSocial';

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
          I'm a software developer from Toronto, Canada. I graduated with my{' '}
          <GradientText>B.S. Computer Science </GradientText> from Western
          Governors University in Fall 2022. Currently looking for roles in
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
          <a
            href="https://www.linkedin.com/in/thom-bator-1bab1910/"
            target="_blank"
          >
            <HeroSocial
              styling=""
              src="assets/images/icons8-linkedin-96.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/thombator" target="_blank">
            <HeroSocial
              styling="bg-white rounded-full"
              src="assets/images/icons8-github-96.png"
              alt="Github Icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
