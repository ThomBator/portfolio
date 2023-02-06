import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

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
        name="MoneyCalcs"
        description={
          'MoneyCalcs features two financial calculator apps that empower users to make better decisions about loans and investing. Flask-based server side rendering allows for exceptional site performance. Lighthouse scores: performance 97, accessibility 100, best practices 92, seo 90. Extensive testing to ensure form input did not lead to errors such as divide by 0 and null errors. Matplotlib used to generate custom graphs to help users visualize outcomes.'
        }
        link="https://tbator1.pythonanywhere.com/"
        img={{
          src: 'assets/images/dollar-iso-color.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.ROSE}>Flask</Tags>
            <Tags color={ColorTags.LIME}>JavaScript</Tags>
            <Tags color={ColorTags.SKY}>Matplotlib</Tags>
          </>
        }
      />
      <Project
        name="Appointment Scheduler"
        description="DAO module prepared statements ensure secure database queries and protect against SQL injection. 
        JavaFX allowed for rapid GUI implementation to create a production quality desktop application.
        JavaFX event handling API easily controls data flow and business logic.
        ZonedDateTime and LocalDateTime APIs ensure appointment times remain consistent across time zones.  
        "
        link="https://gitfront.io/r/user-2508107/xufoiuce7WEn/Appointment-Scheduler-with-JavaFX/"
        img={{
          src: 'assets/images/computer-iso-color.png',
          alt: 'Project Fire',
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
        link="https://colab.research.google.com/github/ThomBator/online-fraud-detection/blob/main/online-fraud-detection.ipynb"
        img={{ src: 'assets/images/card-iso-color.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>Matplotlib</Tags>
            <Tags color={ColorTags.ROSE}>Scikit-Learn</Tags>
            <Tags color={ColorTags.ROSE}>Pandas</Tags>
            <Tags color={ColorTags.ROSE}>Google Colab</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
