
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Animated Background */}
      <div className="floating-background">
        <div className="floating-shape shape-one"></div>
        <div className="floating-shape shape-two"></div>
        <div className="floating-shape shape-three"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          PC<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="hire-btn">Hire Me ↗</a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="intro">B.Sc. IT Graduate | Full Stack Developer</p>

          <h1>
            Pratibha
            <span> Chauhan.</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="description">
            I build modern, responsive and user-friendly
            web applications using React.js, Node.js,
            Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="tech-list">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            className="profile-photo"
            src="/pratibha-photo.jpg"
            alt="Pratibha Chauhan"
          />
        </div>

      </section>

      {/* About Section */}
      <section className="about" id="about">
        <p className="intro">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <p>
          I am an IT graduate and aspiring Full Stack Developer
          passionate about building modern and user-friendly
          web applications. I enjoy solving coding problems,
          learning new technologies and turning ideas into
          practical digital solutions.
        </p>
      </section>
{/* Skills Section */}
<section className="skills" id="skills">
  <p className="intro">WHAT I WORK WITH</p>
  <h2>My Skills</h2>

  <div className="skills-container">

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
      />
      <span>HTML</span>
    </div>

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
      />
      <span>CSS</span>
    </div>

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
      <span>JavaScript</span>
    </div>

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
      />
      <span>React.js</span>
    </div>

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
      />
      <span>Node.js</span>
    </div>

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        alt="Express"
        className="express-logo"
      />
      <span>Express.js</span>
    </div>

    <div className="skill-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
      />
      <span>MongoDB</span>
    </div>

    <div className="skill-card">
      <div className="sql-icon">SQL</div>
      <span>SQL</span>
    </div>

  </div>
</section>
    
{/* Projects Section */}
<section className="projects" id="projects">
  <p className="intro">MY RECENT WORK</p>
  <h2>Featured Projects</h2>

  <div className="project-card">

{/* Project Visual */}
<div className="project-preview">
  <img
    src="/student-management-preview.png"
    alt="Student Management System preview"
    className="project-preview-image"
  />
</div>
    {/* Project Details */}
    <div className="project-details">
      <span className="project-number">01 / FEATURED PROJECT</span>

      <h3>Student Management System</h3>

      <p>
        A full-stack web application to manage student
        records with authentication, search, pagination
        and CRUD operations.
      </p>

      <div className="project-tech">
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
      </div>

      <a
        href="https://github.com/pratibha-077/student-management-system"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub ↗
      </a>
    </div>

  </div>
</section>

      {/* Services Section */}
      <section className="services" id="services">
        <p className="intro">WHAT I OFFER</p>
        <h2>My Services</h2>

        <div className="services-container">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Modern and responsive websites for businesses.</p>
          </div>

          <div className="service-card">
            <h3>Web Applications</h3>
            <p>Functional applications with frontend and backend.</p>
          </div>

          <div className="service-card">
            <h3>Cafe Websites</h3>
            <p>Digital menus, cafe details and attractive designs.</p>
          </div>

          <div className="service-card">
            <h3>Business Websites</h3>
            <p>Professional websites to showcase your business.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <p className="intro">LET'S WORK TOGETHER</p>
        <h2>Have a Project in Mind?</h2>
        <p>Let's discuss your website or application idea.</p>

        <a
  href="mailto:reyaachauhan@gmail.com"
  className="primary-btn"
>
  Contact Me ↗
</a>
      </section>

    </div>
  );
}

export default App;
