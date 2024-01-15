<template>
  <div class="home">
    <div
      class="z-50 h-[5vh] bg-opacity-20 bg-gradient sticky top-0 flex justify-end"
    >
      <div id="nav" class="flex items-end gap-[3rem]">
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#aboutme"
          style="color: #ff6e6c"
          >About me</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#skills"
          style="color: #ff6e6c"
          >Skills</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#mywork"
          style="color: #ff6e6c"
          >My work</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#experience"
          style="color: #ff6e6c"
          >Experience</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#contact"
          style="color: #ff6e6c"
          >Contact</a
        >
      </div>
    </div>

    <main>
      <section id="aboutme" class="flex flex-col gap-[3rem]">
        <div id="aboutme-wrapper" class="flex gap-[2rem]">
          <div class="relative w-[100%]">
            <h1 class="heading text-7xl mt-[2rem]">About me</h1>
            <h2 class="text-5xl mt-[2rem]">
              I'm <b>Marijana</b>. A developer, an optimist and a
              troubleshooter.
            </h2>
            <p class="mt-[4rem] text-xl">
              I enjoy the thrill of solving problems through logical thinking,
              and I have a passion for creating things.
            </p>
            <p class="mt-[1rem] text-xl">
              I'm driven by the belief that there's nothing beyond my
              capability; it's just a matter of acquiring the necessary skills.
              This conviction keeps me motivated to consistently expand my
              knowledge.
            </p>

            <button
              id="read-more"
              class="rounded-xl p-2 mt-[6rem] inline-block cursor-pointer transition-transform hover:scale-105 duration-300"
              @click="aboutMePersonal = !aboutMePersonal"
              v-if="!aboutMePersonal"
            >
              Read more
            </button>

            <p v-if="aboutMePersonal" class="mt-[1rem] text-xl">
              Enthusiastic and knowledgeable individual with a strong passion
              for frontend development. Recently completed an intensive coding
              bootcamp, gaining a comprehensive understanding of HTML, CSS, and
              JavaScript. <br />Possessing a solid foundation in web development
              and a keen interest in staying updated on the latest industry
              trends. Eager to apply my theoretical knowledge and hands-on
              projects to contribute effectively to creating visually appealing
              and user-friendly websites. <br />Familiar with React and Vue.js
              and dedicated to continuous learning and growth in the field.
              Excited about the opportunity to embark on a challenging role,
              where I can leverage my skills to make a positive impact within a
              dynamic organization.
            </p>
          </div>

          <div id="photo-wrapper" class="w-[60%]">
            <img
              id="photo-maja"
              class="w-[100%] block mx-auto mt-[2rem]"
              src="../assets/images/16783.png"
              alt="photo marijana"
            />
          </div>
        </div>

        <div class="flex justify-around">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
            <a
              class="pl-4 transition-transform hover:scale-110 duration-300"
              target="_blank"
              href="https://github.com/marijana29"
              >Github</a
            >
          </div>

          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"
              />
            </svg>
            <a
              class="pl-4 transition-transform hover:scale-110 duration-300"
              target="_blank"
              href="https://www.linkedin.com/in/marijana-milanov/"
              >LinkedIn</a
            >
          </div>

          <div class="flex gap-2 items-center">
            <img
              class="icon w-[40px]"
              src="../assets/svg/codewars.svg"
              alt=""
            />
            <a
              class="pl-4 transition-transform hover:scale-110 duration-300"
              target="_blank"
              href="https://www.codewars.com/users/marijana29"
              >Codewars</a
            >
          </div>
        </div>
      </section>

      <section id="skills" class="relative">
        <h1 id="skills-header" class="heading text-7xl mt-[2rem]">Skills</h1>
        <div id="skills-wrapper" class="flex justify-around gap-16 mt-[2rem]">
          <div
            id="technical-wrapper"
            class="bg-gradient w-[50%] p-4 text-center"
          >
            <h1 class="text-4xl">Technical</h1>

            <div class="flex">
              <div class="w-[50%]">
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/html5.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">HTML</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/css3.svg"
                    alt="css icon"
                  />
                  <p class="text-2xl">CSS</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/tailwind.svg"
                    alt="tailwind icon"
                  />
                  <p class="text-2xl">Tailwind</p>
                </div>
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/bootstrap.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">Bootstrap</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/javascript.svg"
                    alt="js icon"
                  />
                  <p class="text-2xl">JavaScript</p>
                </div>
                <div class="flex gap-2 items-center p-4">
                  <img class="w-10" src="../assets/svg/ts.svg" alt="js icon" />
                  <p class="text-2xl">TypeScript</p>
                </div>
              </div>

              <div class="w-[50%]">
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/nodejs.svg"
                    alt="nodejs icon"
                  />
                  <p class="text-2xl">Node</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10 h-10"
                    src="../assets/svg/pinia.svg"
                    alt="pinia icon"
                  />
                  <p class="text-2xl">Pinia</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/vue.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">Vue</p>
                </div>
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/react.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">React</p>
                </div>
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/git.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">Git</p>
                </div>
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/figma.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">Figma</p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="other-wrapper"
            class="bg-gradient w-[50%] p-4 text-2xl flex flex-col justify-between space-x-16"
          >
            <h1 class="text-4xl text-center">Other</h1>

            <p>Scrum</p>
            <p>Problem solving</p>
            <p>Patience</p>
            <p>Time management</p>
            <p>Team leading</p>
            <p>Creativity</p>
          </div>
          <div
            id="other-wrapper"
            class="bg-gradient w-[50%] p-4 text-2xl flex flex-col justify-between space-x-16"
          >
            <h1 class="text-4xl text-center">Languages</h1>

            <p>French - C2</p>
            <p>English - C2</p>
            <p>Spanish - B2</p>
            <p>German - B2</p>
          </div>
        </div>
      </section>

      <section class="relative" id="mywork">
        <h1 class="heading text-7xl mt-[2rem]">My work</h1>

        <div id="mywork-wrapper" class="flex gap-[2rem] mt-[2rem]">
          <div class="project-card-wrapper w-[50%] flex flex-col gap-[2rem]">
            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">My personal website</p>

              <img
                class=""
                src="../assets/images/cv-website1.png"
                alt="website photo"
              />

              <p>
                This website represents my cv and its purpose is to give the
                visiter a quick description about me and what I do.
              </p>

              <div class="flex justify-around">
                <div class="">JavaScript</div>
                <div class="">Vue</div>
                <div class="">Tailwind</div>
              </div>

              <div class="flex gap-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
                <a
                  class="pl-4 transition-transform hover:scale-110 duration-300"
                  target="_blank"
                  href="https://github.com/marijana29"
                  >Github</a
                >
              </div>
            </div>

            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">Face Recognition App</p>

              <div class="relative" id="globe-container">
                <img
                  class="w-[100%]"
                  src="../assets/images/face-app-gif.gif"
                  alt="face-app-gif"
                />

                <div class="overlay"></div>
              </div>

              <p>
                This is a sample face recognition app that I made using React
                and Clarifai API.
              </p>

              <div class="flex justify-around">
                <div class="">JavaScript</div>
                <div class="">React</div>
                <div class="">Node.js</div>
                <div class="">Knex</div>
              </div>
            </div>
          </div>

          <div class="project-card-wrapper w-[50%] flex flex-col gap-[2rem]">
            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">Accessible Travel App</p>
              <div class="flex justify-center">
                <div class="w-[100%] flex gap-4 justify-around">
                  <img
                    class="w-[30%]"
                    src="../assets/images/travel-app-gif.gif"
                    alt=""
                  />
                </div>
              </div>
              <p>
                The final project I worked on at Coding-Bootcamps-Europe. KAMP
                is an accessible travel app that currently focuses on travelling
                in a few German regions. It works with the api and pinia to
                store selected locations in the localstorage. Currently suitable
                only for mobile view.
              </p>
              <div class="flex justify-around">
                <div class="">JavaScript</div>
                <div class="">Vue</div>
                <div class="">Node.js</div>
                <div class="">Pinia</div>
              </div>
              <div class="flex justify-around">
                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    class="bi bi-globe2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                    />
                  </svg>
                  <a
                    class="pl-4 transition-transform hover:scale-110 duration-300"
                    target="_blank"
                    href="https://cbekamp.netlify.app/"
                    >Website</a
                  >
                </div>

                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    />
                  </svg>
                  <a
                    class="pl-4 transition-transform hover:scale-110 duration-300"
                    target="_blank"
                    href="https://github.com/coding-bootcamps-eu/final-project-2023-09-kamp"
                    >Github</a
                  >
                </div>
              </div>
            </div>
            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">Coding Bootcamp tasks</p>

              <div class="flex w-[100%] gap-4 p-4 justify-around">
                <img
                  class="w-[50%]"
                  src="../assets/images/shopping-layout.png"
                  alt="shopping layout"
                />
              </div>

              <p>
                Within this repository, you will find several projects completed
                during the coding bootcamp. These include a functional to-do app
                interfacing with a local backend, the redesign of a shopping
                layout, a LinkedIn-style application, and various other
                accomplished tasks.
              </p>

              <div class="flex justify-around flex-wrap">
                <div class="">CSS</div>
                <div class="">JavaScript</div>
                <div class="">Vue</div>
                <div class="">Node</div>
              </div>

              <div class="flex gap-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
                <a
                  class="pl-4 transition-transform hover:scale-110 duration-300"
                  target="_blank"
                  href="https://github.com/marijana29/vue.js_tasks"
                  >Github</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h1 class="heading text-7xl mt-[2rem]">Experience</h1>

        <div class="flex flex-col gap-4 mt-[2rem]">
          <div
            v-on:click="codingIsOpen = !codingIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex py-4 justify-between bg-gradient"
          >
            <div class="flex w-full px-8 text-xl">
              <span class="w-[40%]">Coding Bootcamp</span>

              <span class="w-[40%]">@ Coding Bootcamps Europe, remote</span>
              <span class="w-[20%] text-right">2023 - 2024</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="codingIsOpen ? '-' : '+'"
            ></div>
          </div>
          <div v-if="codingIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <p>During this course I learned the basics of web-development.</p>
              <ul>
                <li class="list-disc">HTML</li>
                <li class="list-disc">CSS</li>
                <li class="list-disc">Responsive design</li>

                <li class="list-disc">JavaScript</li>
                <li class="list-disc">Vue</li>

                <li class="list-disc">Pinia</li>

                <li class="list-disc">Node</li>
                <li class="list-disc">Git</li>
              </ul>
            </div>

            <div class="w-[20%] justify-center my-auto">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  class="bi bi-globe2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                  />
                </svg>
                <a
                  class="pl-4 transition-transform hover:scale-110 duration-300"
                  target="_blank"
                  href="https://www.coding-bootcamps.eu/webentwickler-werden-bildungsgutschein/?utm_source=google&utm_medium=cpc&utm_campaign=17147411238&utm_term=online%20coding%20bootcamp&matchtype=p&device=c&gad_source=1&gclid=CjwKCAiA-P-rBhBEEiwAQEXhHzhOcFneeL2PLi0wO9wjSqBL1V6K-omSe5awQUTd7UqO48xUuj9szRoCcpcQAvD_BwE"
                  >Website</a
                >
              </div>
            </div>
          </div>

          <div
            v-on:click="jaggaerIsOpen = !jaggaerIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]"
                >Technical support specialist/Frontend integration</span
              >

              <span class="w-[40%]">@ Jaggaer</span>
              <span class="w-[20%] text-right">2020 - 2023</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="jaggaerIsOpen ? '-' : '+'"
            ></div>
          </div>

          <div v-if="jaggaerIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <ul>
                <li class="list-disc">
                  Facilitated seamless integration of frontend elements into the
                  company's technical ecosystem.
                </li>
                <li class="list-disc">
                  Collaborated with cross-functional teams to solve
                  frontend-related issues, ensuring optimal user experiences.
                </li>
                <li class="list-disc">
                  Proactively gathered feedback from end-users, implementing
                  improvements.
                </li>
                <li class="list-disc">
                  Demonstrated comprehensive understanding of frontend
                  technologies like HTML, CSS, and JavaScript.
                </li>
              </ul>
            </div>

            <div class="w-[20%] justify-center my-auto">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  class="bi bi-globe2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                  />
                </svg>
                <a
                  class="pl-4 transition-transform hover:scale-110 duration-300"
                  target="_blank"
                  href="https://www.jaggaer.com/"
                  >Website</a
                >
              </div>
            </div>
          </div>
          <div
            v-on:click="vulkanIsOpen = !vulkanIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]">Junior Editor and translator</span>

              <span class="w-[40%]">@ Vulkan Publishing</span>
              <span class="w-[20%] text-right">2018 - 2020</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="vulkanIsOpen ? '-' : '+'"
            ></div>
          </div>

          <div v-if="vulkanIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <ul>
                <li class="list-disc">
                  Crafted and refined content in multiple languages, employing
                  meticulous editing and proofreading for technical accuracy.
                </li>
                <li class="list-disc">
                  Translated and localized diverse documents, utilizing IT tools
                  to enhance efficiency, global outreach, and customer
                  engagement.
                </li>
              </ul>
            </div>

            <div class="w-[20%] justify-center my-auto">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  class="bi bi-globe2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                  />
                </svg>
                <a
                  class="pl-4 transition-transform hover:scale-110 duration-300"
                  target="_blank"
                  href="https://www.vulkani.rs/"
                  >Website</a
                >
              </div>
            </div>
          </div>

          <div
            v-on:click="ncrIsOpen = !ncrIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]">Technical Support Analyst</span>
              <span class="w-[40%]">@ NCR Corporation</span>
              <span class="w-[20%] text-right">2016 - 2017</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="ncrIsOpen ? '-' : '+'"
            ></div>
          </div>
          <div v-if="ncrIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <ul>
                <li class="list-disc">
                  Expertly diagnosed and concluded technical issues with ATMs
                  remotely.
                </li>
                <li class="list-disc">
                  Provided comprehensive technical guidance to on-site
                  technicians and bank staff.
                </li>
                <li class="list-disc">
                  Conducted remote training sessions to enhance the skill set of
                  field personnel.
                </li>
                <li class="list-disc">
                  Maintained detailed documentation for troubleshooting and
                  issue resolution.
                </li>
              </ul>
            </div>
            <div class="w-[20%] justify-center my-auto">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  class="bi bi-globe2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                  />
                </svg>
                <a
                  class="pl-4 transition-transform hover:scale-110 duration-300"
                  target="_blank"
                  href="https://www.ncr.com/"
                  >Website</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1 id="skills" class="heading text-7xl mt-[2rem]">Contact me</h1>
        <div class="flex flex-col justify-around mt-[2rem]">
          <p class="text-xl mt-[2rem]">
            If you are interested in working or connecting with me, please do
            not hesitate to contact me.
          </p>
          <div class="flex justify-around my-[2rem]">
            <div class="flex gap-2 items-center mt-[2rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>
              <a
                class="pl-4 transition-transform hover:scale-110 duration-300"
                href="mailto:marijana.kalicanin29@gmail.com"
                >E-mail</a
              >
            </div>
            <div class="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"
                />
              </svg>
              <a
                class="pl-4 transition-transform hover:scale-110 duration-300"
                target="_blank"
                href="https://www.linkedin.com/in/marijana-milanov/"
                >LinkedIn</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      aboutMePersonal: false,
      codingIsOpen: false,
      jaggaerIsOpen: false,
      vulkanIsOpen: false,
      ncrIsOpen: false,
    };
  },
  computed: {},
  methods: {
    unfoldAllExperiences() {
      this.codingIsOpen = false;
      this.jaggaerIsOpen = false;
      this.vulkanIsOpen = false;
      this.ncrIsOpen = false;
    },
  },
};
</script>

<style>
#nav {
  color: #1f2b6a;
}

#read-more {
  background-color: #ff9142;
  box-shadow: 0px 5px 5px rgb(96, 96, 96);
}

.orange {
  color: #001060;
}

.occupation span {
  font-size: 1.5rem;
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
#globe-container {
  width: 100%;
}

.bg-gradient {
  background-color: #fef6e4;
}

.icon {
  fill: white;
  stroke: white;
  color: currentColor;
  background-color: white;
  border-radius: 8px;
}

.project-card * {
  padding: 0.5rem 0 0 0;
}

.overlay {
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0);
  z-index: 100;
}

.globe {
  z-index: 1;
}

.home {
  animation: fadeIn 1s ease-in;
  margin: 0 4rem 0 4rem;
}

#vector1 {
  z-index: -1;
  scale: 0.5;
}
#vector2 {
  z-index: -1;
  scale: 0.4;
}
#vector3 {
  z-index: -1;
}

section {
  margin-bottom: 8rem;
}

@media screen and (max-width: 1100px) {
  #aboutme-wrapper,
  #skills-wrapper,
  #mywork-wrapper {
    display: flex;
    flex-direction: column;
  }
  #photo-wrapper,
  #technical-wrapper,
  #other-wrapper,
  .project-card-wrapper {
    width: 100%;
  }
}
</style>
