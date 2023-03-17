import {
  ColorTags,
  GradientText,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import { Project } from './Project';

const ProjectList = () => (
  <Section
    title={
      <div id="projects">
        Featured <GradientText>Projects</GradientText>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="GoGros"
        description={
          'GoGros is a grocery list app built using React(Vite), Express.js and Supabase for the PostgreSQL databse. TypeScript and automated tests with react-testing-library and Vitest (Vite Jest equivalent) ensure project maintanability and scalability. Chakra-UI provides a robust component ecosystem to create production quality UI.'
        }
        link="https://github.com/ThomBator/grocery-fullstack/blob/main/README.md"
        link2="https://grocery-frontend-seven.vercel.app/"
        img={{
          src: 'assets/images/bag-iso-color.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>TypesScript</Tags>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.ROSE}>Express.js</Tags>
            <Tags color={ColorTags.INDIGO}>PostgreSQL</Tags>
            <Tags color={ColorTags.ORANGE}>Chakra-UI</Tags>
          </>
        }
      />

      <Project
        name="MoneyCalcs"
        description={
          'MoneyCalcs features two financial calculator apps that empower users to make better decisions about loans and investing. Flask-based server side rendering allows for exceptional site performance. Semantic HTML and image alt text optimizes site accessibility and improves SEO. Extensive testing to ensure form input did not lead to errors such as divide by 0 and null errors. Matplotlib used to generate custom graphs to help users visualize outcomes.'
        }
        link="https://github.com/ThomBator/financial-calculators"
        link2="https://tbator1.pythonanywhere.com/"
        img={{
          src: 'assets/images/dollar-iso-color.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.ROSE}>Flask</Tags>
            <Tags color={ColorTags.LIME}>JavaScript</Tags>
            <Tags color={ColorTags.INDIGO}>Matplotlib</Tags>
            <Tags color={ColorTags.ORANGE}>Bootstrap</Tags>
          </>
        }
      />
      <Project
        name="Appointment Scheduler"
        description="This appointment scheduler desktop app allows admins to schedule appointments between sales reps and customers. For querying database, prepared statements are used to enhance security and protect against SQL injection. 
        JavaFX allowed for rapid GUI implementation to create a production quality desktop application.
        JavaFX event handling API easily controls data flow and business logic.
        ZonedDateTime and LocalDateTime APIs ensure appointment times remain consistent across time zones.  
        "
        link="https://gitfront.io/r/user-2508107/xufoiuce7WEn/Appointment-Scheduler-with-JavaFX/"
        link2={null}
        img={{
          src: 'assets/images/computer-iso-color.png',
          alt: 'Desktop computer',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Java</Tags>
            <Tags color={ColorTags.EMERALD}>JavaFX</Tags>
            <Tags color={ColorTags.YELLOW}>JDBC</Tags>
            <Tags color={ColorTags.ROSE}>MySQL</Tags>
          </>
        }
      />
      <Project
        name="Machine Learning Notebook"
        description="Uses machine learning and analytics to assess the viability of using Logistic Regression to detect fraudulent transactions.
        Showcases cleaning data, analyzing data, tuning models and data visualization skills. 
        Project identified significant flaws in the dataset, which provides valuable insight on how to clean and collect future data. 
        "
        link="https://github.com/ThomBator/online-fraud-detection"
        link2="https://colab.research.google.com/github/ThomBator/online-fraud-detection/blob/main/online-fraud-detection.ipynb"
        img={{ src: 'assets/images/card-iso-color.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>Matplotlib</Tags>
            <Tags color={ColorTags.ROSE}>Scikit-Learn</Tags>
            <Tags color={ColorTags.AMBER}>Pandas</Tags>
            <Tags color={ColorTags.EMERALD}>Google Colab</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
