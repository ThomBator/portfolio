import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon="" name="Junior Software Developer" />
      </a>
      <NavMenu>
        <NavMenuItem href="#about">About</NavMenuItem>
        <NavMenuItem href="#skills">Skills</NavMenuItem>
        <NavMenuItem href="#projects">Projects</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
