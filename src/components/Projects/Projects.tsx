export default function Projects() {
  return (
    <section id="work" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Selected Work</h2>

      <article aria-labelledby="magic-money-tree-heading">
        <h3 id="magic-money-tree-heading">Magic Money Tree</h3>
        <p>A cryptocurrency portfolio manager</p>
        <h4>Technologies</h4>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        <a href="https://github.com/CodeKrakken/magic-money-tree">
          GitHub repository
        </a>
        <a href="https://magic-money-tree.herokuapp.com">
          Heroku deployment
        </a>
      </article>

      <article aria-labelledby="octopus-heading">
        <h3 id="octopus-heading">Octopus</h3>
        <p>A generative browser based MIDI arranger</p>
        <h4>Technologies</h4>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        <a href="https://github.com/CodeKrakken/octopus">
          GitHub repository
        </a>
        <a href="https://octopus-music.netlify.app">
          Netlify deployment
        </a>
      </article>

      <article aria-labelledby="scrynth-heading">
        <h3 id="scrynth-heading">Scrynth</h3>
        <p>A browser based synthesiser</p>
        <h4>Technologies</h4>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        <a href="https://github.com/CodeKrakken/typescrynth">
          GitHub repository
        </a>
        <a href="https://scrynth.netlify.app">
          Netlify deployment
        </a>
      </article>
    </section>
  );
}
