import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const SkillsList = () => (
  <Section
    title={
      <div id="skills">
        <GradientText>Technical</GradientText> Skills
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div className="shrink-0">
          <img
            className="h-36 w-36 hover:translate-y-1"
            src="assets/images/chess-iso-color.png"
            alt="chess pawn"
            loading="lazy"
          />
        </div>

        <div className="shrink-0 space-y-4">
          {/* This should be its own component */}
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <div className="text-xl font-semibold">Languages:</div>
            <div className=" ml-3 flex flex-wrap gap-2">
              <Tags color={ColorTags.VIOLET}>Java</Tags>
              <Tags color={ColorTags.EMERALD}>Python</Tags>
              <Tags color={ColorTags.FUCHSIA}>TypeScript</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.RED}>C++</Tags>
              <Tags color={ColorTags.ORANGE}>SQL</Tags>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <div className="text-xl font-semibold">Frameworks:</div>
            <div className="ml-3 flex flex-wrap gap-2">
              <Tags color={ColorTags.VIOLET}>React</Tags>
              <Tags color={ColorTags.EMERALD}>Next.js</Tags>
              <Tags color={ColorTags.YELLOW}>Flask</Tags>
              <Tags color={ColorTags.RED}>Astro</Tags>
              <Tags color={ColorTags.PURPLE}>JavaFX</Tags>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <div className="text-xl font-semibold">Tools:</div>
            <div className=" ml-3 flex flex-wrap gap-2">
              <Tags color={ColorTags.VIOLET}>Git</Tags>
              <Tags color={ColorTags.EMERALD}>Bash</Tags>
              <Tags color={ColorTags.YELLOW}>Linux</Tags>
              <Tags color={ColorTags.RED}>VS Code</Tags>
              <Tags color={ColorTags.PURPLE}>Scrum & Agile</Tags>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { SkillsList };
