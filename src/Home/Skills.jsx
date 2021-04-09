import React from 'react';
import {
  BeakerIcon,
  ChatIcon,
  DatabaseIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  PencilIcon,
  SparklesIcon,
  TemplateIcon,
  TerminalIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';

function Skills() {
  return (
    <div className="relative py-16 lg:px-8 bg-gray-50 overflow-hidden">
      <div id="skills" className="relative h-full text-lg max-w-prose mx-auto">
        <div className="mt-6 px-4 prose prose-blue prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-500 mx-auto">
          <h1 className="font-display">Skills</h1>
          <h2 className="font-display inline-flex">
            <DatabaseIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Database</span>
          </h2>
          <ul>
            <li>
              <b>noSQL</b> MongoDB
            </li>
            <li>
              <b>SQL</b> PostgreSQL, PL/SQL
            </li>
            <li>JSON, XML, Xpath</li>
          </ul>
          <h2 className="font-display inline-flex">
            <ViewGridIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Designing</span>
          </h2>
          <ul>
            <li>UML, Design Patterns, Merise, Petri nets</li>
          </ul>

          <h2 className="font-display inline-flex">
            <TerminalIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Programming</span>
          </h2>
          <ul>
            <li>JavaScript, Python, C, C++, Java, Bash, OCaml, ADA95</li>
            <li>Assembly language (MIPS, x86), Arduino, Processing</li>
          </ul>
          <h2 className="font-display inline-flex">
            <SparklesIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Specific skills</span>
          </h2>
          <ul>
            <li>
              Distributed Systems development (RESTful and SOAP applications)
            </li>
            <li>Real Time Systems (programming with Trampoline RTOS)</li>
            <li>Network and UNIX systems administration</li>
            <li>Artificial Intelligence</li>
          </ul>
          <h2 className="font-display inline-flex">
            <BeakerIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Tools</span>
          </h2>
          <ul>
            <li>git, npm, Docker, babel, eslint</li>
            <li>Doxygen, JUnit, Maven, Mailgun</li>
            <li>
              Google Cloud Platform (App Engine, Compute Engine, Kubernetes
              Engine)
            </li>
          </ul>
          <h2 className="font-display inline-flex">
            <TemplateIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>UX/UI design</span>
          </h2>
          <ul>
            <li>Sketch (basic usage)</li>
            <li>Figma</li>
          </ul>
          <h2 className="font-display inline-flex">
            <DesktopComputerIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Web</span>
          </h2>
          <ul>
            <li>HTML, (S)CSS, JavaScript</li>
            <li>Node.js, React.js (Redux, react-router)</li>
            <li>TailwindCSS</li>
            <li>Jekyll, Django</li>
          </ul>
          <h2 className="font-display inline-flex">
            <DeviceMobileIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Mobile</span>
          </h2>
          <ul>
            <li>React-native</li>
          </ul>
          <h2 className="font-display inline-flex">
            <PencilIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Writing</span>
          </h2>
          <ul>
            <li>LaTeX</li>
            <li>Markdown</li>
          </ul>

          <h2 className="font-display inline-flex">
            <ChatIcon className="h-6 w-6 lg:h-10 lg:w-10 mr-4 text-gray-300" />
            <span>Languages</span>
          </h2>
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
