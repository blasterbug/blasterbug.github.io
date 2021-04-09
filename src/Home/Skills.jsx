import React from 'react';

function Skills() {
  return (
    <div className="relative py-16 lg:px-8 bg-gray-50 overflow-hidden">
      <div id="skills" className="relative h-full text-lg max-w-prose mx-auto">
        <div className="mt-6 px-4 prose prose-blue prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-500 mx-auto">
          <h1 className="font-display">Skills</h1>
          <h2 className="font-display">Database</h2>
          <ul>
            <li>MongoDB, SQL, PL/SQL, noSQL</li>
            <li>JSON, XML, Xpath</li>
          </ul>
          <h2 className="font-display">Designing</h2>
          <ul>
            <li>UML, Design Patterns, Merise, Petri nets</li>
          </ul>

          <h2 className="font-display">Programming</h2>
          <ul>
            <li>JavaScript, Python, C, C++, Java, Bash, OCaml, ADA95</li>
            <li>Assembly language (MIPS, x86), Arduino, Processing</li>
          </ul>
          <h2 className="font-display">Specific skills</h2>
          <ul>
            <li>
              Distributed Systems development (RESTful and SOAP applications)
            </li>
            <li>Real Time Systems (programming with Trampoline RTOS)</li>
            <li>Network and UNIX systems administration</li>
            <li>Artificial Intelligence</li>
          </ul>
          <h2 className="font-display">Tools</h2>
          <ul>
            <li>git, npm, Docker, babel, eslint</li>
            <li>Doxygen, JUnit, Maven, Mailgun</li>
            <li>
              Google Cloud Platform (App Engine, Compute Engine, Kubernetes
              Engine)
            </li>
          </ul>
          <h2 className="font-display">UX/UI design</h2>
          <ul>
            <li>Sketch (basic usage)</li>
            <li>Figma</li>
          </ul>
          <h2 className="font-display">Web</h2>
          <ul>
            <li>HTML, (S)CSS, JavaScript</li>
            <li>Node.js, React.js (Redux, react-router)</li>
            <li>TailwindCSS</li>
            <li>Jekyll, Django</li>
          </ul>
          <h2 className="font-display">Mobile</h2>
          <ul>
            <li>React-native</li>
          </ul>
          <h2 className="font-display">Writing</h2>
          <ul>
            <li>LaTeX</li>
            <li>Markdown</li>
          </ul>

          <h2 className="font-display">Languages</h2>
          <ul>
            <li>
              <b>English</b> Bilingual, I live aboard, all work done in English
            </li>
            <li>
              <b>French</b> Mother tongue
            </li>
            <li>
              <b>Swedish</b> I can introduce myself, read simple texts and
              understand simple conversations. I am currently learning.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
