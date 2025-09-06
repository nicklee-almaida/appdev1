import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Logo */}
      <header className="header">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <h1>About Me</h1>
      </header>
      {/* About Section */}
      <section className="about">
        <h2>Name: Nicklee Almaida</h2>
        <h3>Course/Year: BS Information Technology, 3rd Year</h3>
        <p>
          <strong>Fun Fact:</strong> I can play chess without thinking — it's instinctive for me!
        </p>
      </section>

      <hr />

      {/* React Goals */}
      <section className="goals">
        <h2>Why I Want to Learn React</h2>
        <p>
          I want to learn React because it is one of the most popular tools for building modern,
          interactive, and efficient web applications. By mastering React, I can create projects
          that are dynamic, reusable, and user-friendly.
        </p>

        <p>Learning React will help me:</p>
        <ul>
          <li>Develop skills in modern front-end development</li>
          <li>Build responsive and interactive user interfaces</li>
          <li>Prepare for future opportunities in web development</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
