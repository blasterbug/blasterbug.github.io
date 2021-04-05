import React from 'react';

function Skills() {
  return (
    <div class="relative py-16 lg:px-8 bg-gray-50 overflow-hidden">
      <div id="skills" className="relative h-full text-lg max-w-prose mx-auto">
        <div className="mt-6 px-4 prose prose-blue prose-lg text-gray-500 mx-auto">
          <h2>Skills</h2>
          <ul>
            <h3>Database</h3>
            <li>MongoDB, SQL, PL/SQL, noSQL</li>
            <li>JSON, XML, Xpath</li>

            <h3>Designing</h3>
            <li>UML, Design Patterns, Merise, Petri nets</li>

            <h3>Programming</h3>
            <li>JavaScript, Python, C, C++, Java, Bash, OCaml, ADA95</li>
            <li>Assembly language (MIPS, x86), Arduino, Processing</li>

            <h3>Specific skills</h3>
            <li>
              Distributed Systems development (RESTful and SOAP applications)
            </li>
            <li>Real Time Systems (programming with Trampoline RTOS)</li>
            <li>Network and UNIX systems administration</li>
            <li>Artificial Intelligence</li>

            <h3>Tools</h3>
            <li>git, npm, Docker, babel, eslint</li>
            <li>Doxygen, JUnit, Maven, Mailgun</li>
            <li>
              Google Cloud Platform (App Engine, Compute Engine, Kubernetes
              Engine)
            </li>

            <h3>UX/UI design</h3>
            <li>Sketch (basic usage)</li>
            <li>Figma</li>

            <h3>Web</h3>
            <li>HTML, (S)CSS, JavaScript</li>
            <li>Node.js, React.js (Redux, react-router)</li>
            <li>TailwindCSS</li>
            <li>Jekyll, Django</li>

            <h3>Mobile</h3>
            <li>React-native</li>

            <h3>Writing</h3>
            <li>LaTeX, Markdown</li>

            <h3>Languages</h3>
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
