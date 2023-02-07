import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <div></div>
      <NavMenu>
        <NavMenuItem href="#about">About</NavMenuItem>
        <NavMenuItem href="#skills">Skills</NavMenuItem>
        <NavMenuItem href="#projects">Projects</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
