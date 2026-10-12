import { useState } from "react";
import "./App.css";

const timeline = [
  {
    year: "Pre-colonial Philippines",
    title: "Different roles within communities",
    text: "Gender roles varied across communities and social groups. Women could participate in trade, property ownership, community life, and spiritual practices. Female spiritual leaders such as babaylan held important roles in many communities."
  },
  {
    year: "Spanish Colonial Period",
    title: "Changing expectations",
    text: "Spanish colonial institutions and Catholic traditions influenced family life, education, morality, and expectations for women and men. Ideas about femininity and masculinity became intertwined with colonial social structures."
  },
  {
    year: "American Period",
    title: "Education and public participation",
    text: "The expansion of formal public education created new opportunities for Filipino women and men. Women's participation in education and professions gradually became more visible."
  },
  {
    year: "Post-war Philippines",
    title: "Family and work",
    text: "Traditional expectations remained influential, including the idea of men as providers and women as primary caregivers. At the same time, more women entered professional and public life."
  },
  {
    year: "Contemporary Philippines",
    title: "Roles continue to change",
    text: "Filipino society continues to experience changing expectations around family responsibilities, education, employment, leadership, media representation, and gender identity."
  }
];

const facts = [
  {
    icon: "🏠",
    title: "Family",
    text: "Gender expectations can influence household responsibilities, parenting, decision-making, and ideas about who should provide income or care."
  },
  {
    icon: "🎓",
    title: "Education",
    text: "Education has expanded opportunities for people of different genders, while social expectations can still influence fields of study and career choices."
  },
  {
    icon: "💼",
    title: "Work",
    text: "Gender can shape occupational patterns, workplace expectations, leadership opportunities, and the distribution of paid and unpaid work."
  },
  {
    icon: "📱",
    title: "Media",
    text: "Television, advertising, film, and social media can reinforce traditional stereotypes while also creating space for different representations."
  }
];

const sources = [
  {
    name: "Philippine Statistics Authority",
    description: "Official Philippine statistics and gender indicators.",
    url: "https://psa.gov.ph/gender-statistics"
  },
  {
    name: "Philippine Commission on Women",
    description: "Government resources on gender equality and women's empowerment.",
    url: "https://pcw.gov.ph/"
  },
  {
    name: "Philippine Commission on Women — Gender Equality and Women's Empowerment Plan",
    description: "Information about Philippine gender and development frameworks.",
    url: "https://pcw.gov.ph/gewe-plan/"
  },
  {
    name: "UN Women",
    description: "International research and resources on gender equality.",
    url: "https://www.unwomen.org/"
  }
];

function App() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            <span className="brand-icon">◈</span>
            <span>
              <strong>GENDER</strong>
              <small>PHILIPPINES</small>
            </span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("history")}>History</button>
            <button onClick={() => scrollToSection("roles")}>Roles</button>
            <button onClick={() => scrollToSection("society")}>Society</button>
            <button onClick={() => scrollToSection("diversity")}>Diversity</button>
            <button onClick={() => scrollToSection("group")}>Group</button>
            <button onClick={() => scrollToSection("sources")}>Sources</button>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <main>

        <section id="home" className="hero section">

          <div className="hero-background">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>
          </div>

          <div className="hero-content">

            <div className="eyebrow">
              BSIT 3D • GROUP 4
            </div>

            <h1>
              Gender Roles
              <span>in the Philippines</span>
            </h1>

            <p className="hero-text">
              Exploring how expectations about gender have developed through
              Philippine history and how they continue to shape family,
              education, work, media, and society today.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("history")}
              >
                Explore the History →
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("roles")}
              >
                Explore Gender Roles
              </button>
            </div>

            <div className="hero-stats">

              <div>
                <strong>5</strong>
                <span>Historical periods</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Social areas</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Human experiences</span>
              </div>

            </div>

          </div>

        </section>


        {/* INTRODUCTION */}
        <section className="section light-section">

          <div className="section-heading">
            <span>01 — UNDERSTANDING</span>
            <h2>What are gender roles?</h2>
          </div>

          <div className="intro-grid">

            <div className="large-card">
              <div className="card-number">01</div>

              <h3>Gender is more than biology</h3>

              <p>
                Gender roles are social expectations about how people are
                expected to behave, communicate, work, dress, and participate
                in family and community life based on perceived gender.
              </p>

              <p>
                These expectations are influenced by culture, history,
                family traditions, religion, education, economics, media,
                and other social institutions.
              </p>
            </div>

            <div className="definition-card">
              <span className="quote-mark">“</span>

              <p>
                Gender roles can change over time. What a society considers
                appropriate for men or women in one period may be different
                in another.
              </p>

              <span className="quote-source">
                A historical and social perspective
              </span>
            </div>

          </div>

        </section>


        {/* HISTORY */}
        <section id="history" className="section dark-section">

          <div className="section-heading light-heading">
            <span>02 — HISTORY</span>
            <h2>Gender through Philippine history</h2>

            <p>
              Philippine gender roles have never been completely static.
              They have been influenced by indigenous traditions, colonial
              institutions, economic changes, education, religion, and
              contemporary culture.
            </p>
          </div>


          <div className="timeline">

            <div className="timeline-navigation">

              {timeline.map((item, index) => (
                <button
                  key={item.year}
                  className={
                    activeTimeline === index
                      ? "timeline-button active"
                      : "timeline-button"
                  }
                  onClick={() => setActiveTimeline(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.year}
                </button>
              ))}

            </div>


            <div className="timeline-content">

              <div className="timeline-year">
                {timeline[activeTimeline].year}
              </div>

              <h3>{timeline[activeTimeline].title}</h3>

              <p>{timeline[activeTimeline].text}</p>

              <div className="timeline-line"></div>

              <div className="timeline-controls">

                <button
                  disabled={activeTimeline === 0}
                  onClick={() =>
                    setActiveTimeline((value) => value - 1)
                  }
                >
                  ← Previous
                </button>

                <span>
                  {activeTimeline + 1} / {timeline.length}
                </span>

                <button
                  disabled={activeTimeline === timeline.length - 1}
                  onClick={() =>
                    setActiveTimeline((value) => value + 1)
                  }
                >
                  Next →
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* ROLES */}
        <section id="roles" className="section">

          <div className="section-heading">
            <span>03 — EXPECTATIONS</span>
            <h2>Traditional & contemporary roles</h2>

            <p>
              Gender expectations can affect people differently. The following
              examples describe common social expectations, not rules that
              apply to every Filipino family or individual.
            </p>
          </div>


          <div className="roles-grid">

            <article className="role-card male-card">

              <div className="role-icon">♂</div>

              <h3>Men & masculinity</h3>

              <p>
                Traditional expectations have often associated men with
                providing income, making major household decisions, displaying
                strength, and protecting the family.
              </p>

              <div className="role-list">
                <span>Provider expectations</span>
                <span>Leadership expectations</span>
                <span>Emotional restraint</span>
                <span>Physical strength</span>
              </div>

            </article>


            <article className="role-card female-card">

              <div className="role-icon">♀</div>

              <h3>Women & femininity</h3>

              <p>
                Traditional expectations have often associated women with
                caregiving, household management, nurturing, and maintaining
                family relationships.
              </p>

              <div className="role-list">
                <span>Caregiving</span>
                <span>Household responsibilities</span>
                <span>Family relationships</span>
                <span>Changing professional roles</span>
              </div>

            </article>

          </div>


          <div className="change-banner">

            <div>
              <span>THE IMPORTANT PART</span>
              <h3>Roles are not fixed.</h3>
            </div>

            <p>
              Filipino men and women increasingly participate in roles that
              were once strongly associated with the other gender. Fathers can
              be primary caregivers, mothers can be primary earners, and
              people can pursue education and careers according to their
              interests and abilities.
            </p>

          </div>

        </section>


        {/* SOCIETY */}
        <section id="society" className="section soft-section">

          <div className="section-heading">
            <span>04 — SOCIETY</span>
            <h2>Where gender roles appear</h2>

            <p>
              Gender expectations can appear in everyday decisions and
              institutions throughout Philippine society.
            </p>
          </div>


          <div className="facts-grid">

            {facts.map((fact, index) => (
              <article className="fact-card" key={fact.title}>

                <div className="fact-number">
                  0{index + 1}
                </div>

                <div className="fact-icon">
                  {fact.icon}
                </div>

                <h3>{fact.title}</h3>

                <p>{fact.text}</p>

              </article>
            ))}

          </div>


          <div className="comparison">

            <div className="comparison-title">
              <span>THEN</span>
              <span>→</span>
              <span>NOW</span>
            </div>

            <div className="comparison-row">

              <div>
                <strong>Family</strong>
                <p>
                  Traditional expectations often separated provider and
                  caregiver roles.
                </p>
              </div>

              <div className="arrow">→</div>

              <div>
                <strong>Family</strong>
                <p>
                  Families may divide income, childcare, and household work
                  in different ways.
                </p>
              </div>

            </div>

            <div className="comparison-row">

              <div>
                <strong>Work</strong>
                <p>
                  Certain occupations were strongly associated with one
                  gender.
                </p>
              </div>

              <div className="arrow">→</div>

              <div>
                <strong>Work</strong>
                <p>
                  Women and men increasingly participate across many
                  professional fields.
                </p>
              </div>

            </div>

            <div className="comparison-row">

              <div>
                <strong>Education</strong>
                <p>
                  Educational opportunities were shaped by historical social
                  structures.
                </p>
              </div>

              <div className="arrow">→</div>

              <div>
                <strong>Education</strong>
                <p>
                  Education is now a major pathway for people of different
                  genders to pursue professional goals.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* DIVERSITY */}
        <section id="diversity" className="section dark-section">

          <div className="section-heading light-heading">
            <span>05 — DIVERSITY</span>
            <h2>Gender diversity in contemporary society</h2>

            <p>
              Conversations about gender in the Philippines also include
              gender identity, expression, and experiences that do not always
              fit traditional expectations.
            </p>
          </div>


          <div className="diversity-grid">

            <div className="diversity-main">

              <span className="big-symbol">✦</span>

              <h3>
                Understanding people beyond stereotypes
              </h3>

              <p>
                Gender identity refers to a person's internal understanding
                of their gender. Gender expression describes how a person may
                communicate gender through appearance, behavior, or other
                forms of expression.
              </p>

              <p>
                Contemporary Philippine society includes diverse experiences
                and perspectives. Understanding these differences can help
                explain why a single set of gender expectations cannot
                describe every Filipino.
              </p>

            </div>


            <div className="diversity-items">

              <div>
                <span>01</span>
                <h4>Identity</h4>
                <p>
                  People can experience and understand their gender in
                  different ways.
                </p>
              </div>

              <div>
                <span>02</span>
                <h4>Expression</h4>
                <p>
                  Appearance and behavior do not always follow traditional
                  gender expectations.
                </p>
              </div>

              <div>
                <span>03</span>
                <h4>Respect</h4>
                <p>
                  Learning about different experiences encourages respectful
                  communication and understanding.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* STATISTICS */}
        <section className="section">

          <div className="section-heading">
            <span>06 — DATA</span>
            <h2>Gender and work in the Philippines</h2>

            <p>
              Statistics provide another way to understand how gender appears
              in Philippine society.
            </p>
          </div>


          <div className="data-card">

            <div className="data-header">
              <div>
                <span>PSA • AUGUST 2024</span>
                <h3>Employment in establishments with 10 or more workers</h3>
              </div>
            </div>

            <div className="data-bars">

              <div className="data-item">

                <div className="data-label">
                  <span>Male workers</span>
                  <strong>57.2%</strong>
                </div>

                <div className="bar">
                  <div
                    className="bar-fill male-fill"
                    style={{ width: "57.2%" }}
                  ></div>
                </div>

              </div>


              <div className="data-item">

                <div className="data-label">
                  <span>Female workers</span>
                  <strong>42.8%</strong>
                </div>

                <div className="bar">
                  <div
                    className="bar-fill female-fill"
                    style={{ width: "42.8%" }}
                  ></div>
                </div>

              </div>

            </div>

            <p className="data-note">
              The Philippine Statistics Authority reported that in August
              2024, male workers comprised 57.2% of employed persons in
              establishments covered by the survey, while female workers
              accounted for 42.8%. This statistic describes that specific
              population and should not be interpreted as representing every
              Filipino worker.
            </p>

          </div>

        </section>


        {/* MULTIMEDIA */}
        <section className="section media-section">

          <div className="section-heading">
            <span>07 — MULTIMEDIA</span>
            <h2>Explore gender and society</h2>

            <p>
              These external resources can be explored for additional
              information about gender and development in the Philippines.
            </p>
          </div>


          <div className="media-grid">

            <a
              className="media-card"
              href="https://pcw.gov.ph/"
              target="_blank"
              rel="noreferrer"
            >
              <span>◉</span>
              <div>
                <small>GOVERNMENT RESOURCE</small>
                <h3>Philippine Commission on Women</h3>
                <p>
                  Explore official resources about gender equality and
                  women's empowerment.
                </p>
              </div>
              <b>↗</b>
            </a>


            <a
              className="media-card"
              href="https://psa.gov.ph/gender-statistics"
              target="_blank"
              rel="noreferrer"
            >
              <span>◌</span>
              <div>
                <small>STATISTICS</small>
                <h3>PSA Gender Statistics</h3>
                <p>
                  Explore official Philippine statistics about women and men.
                </p>
              </div>
              <b>↗</b>
            </a>


            <a
              className="media-card"
              href="https://www.unwomen.org/"
              target="_blank"
              rel="noreferrer"
            >
              <span>◇</span>
              <div>
                <small>GLOBAL RESOURCE</small>
                <h3>UN Women</h3>
                <p>
                  Explore international research and resources concerning
                  gender equality.
                </p>
              </div>
              <b>↗</b>
            </a>

          </div>

        </section>


        {/* GROUP */}
        <section id="group" className="section group-section">

          <div className="section-heading">
            <span>08 — OUR GROUP</span>
            <h2>BSIT 3D • Group 4</h2>

            <p>
              Gender Roles Website — created as an educational project about
              historical and contemporary gender roles in Philippine society.
            </p>
          </div>


                <div className="members-grid">

        <div className="member-card leader-card">

          <div className="member-avatar">
            YC
          </div>

          <div>
            <span>GROUP LEADER</span>
            <h3>Yves Ralph Colinares</h3>
          </div>

        </div>


        <div className="member-card">

          <div className="member-avatar">
            RA
          </div>

          <div>
            <h3>Ronnie Amistoso</h3>
            <span>GROUP MEMBER</span>
          </div>

        </div>


        <div className="member-card">

          <div className="member-avatar">
            JR
          </div>

          <div>
            <h3>John Mark Reyes</h3>
            <span>GROUP MEMBER</span>
          </div>

        </div>


        <div className="member-card">

          <div className="member-avatar">
            MA
          </div>

          <div>
            <h3>Marx Adrian Eneria</h3>
            <span>GROUP MEMBER</span>
          </div>

        </div>


        <div className="member-card">

          <div className="member-avatar">
            RM
          </div>

          <div>
            <h3>Red Mainke</h3>
            <span>GROUP MEMBER</span>
          </div>

        </div>


        <div className="member-card">

          <div className="member-avatar">
            JD
          </div>

          <div>
            <h3>Janecamae De Guzman</h3>
            <span>GROUP MEMBER</span>
          </div>

        </div>


        <div className="member-card">

          <div className="member-avatar">
            JM
          </div>

          <div>
            <h3>Jay Anthony Malanog</h3>
            <span>GROUP MEMBER</span>
          </div>

        </div>

      </div>

        </section>


        {/* SOURCES */}
        <section id="sources" className="section sources-section">

          <div className="section-heading">
            <span>09 — REFERENCES</span>
            <h2>Sources & further reading</h2>

            <p>
              The following organizations provide information and data used
              to support the website's discussion.
            </p>
          </div>


          <div className="sources-list">

            {sources.map((source, index) => (
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="source-item"
                key={source.name}
              >

                <span className="source-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{source.name}</h3>
                  <p>{source.description}</p>
                </div>

                <span className="source-arrow">↗</span>

              </a>
            ))}

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-main">

          <div>
            <div className="footer-logo">
              ◈ GENDER PHILIPPINES
            </div>

            <p>
              An educational website exploring gender roles in Philippine
              society.
            </p>
          </div>


          <div className="footer-info">

            <span>BSIT 3D</span>
            <span>GROUP 4</span>
            <span>2026</span>

          </div>

        </div>


        <div className="footer-bottom">
          <span>GENDER ROLES WEBSITE</span>
          <span>PHILIPPINES</span>
        </div>

      </footer>


      {/* BACK TO TOP */}
      <button
        className="top-button"
        onClick={() => scrollToSection("home")}
        aria-label="Back to top"
      >
        ↑
      </button>

    </div>
  );
}

export default App;
