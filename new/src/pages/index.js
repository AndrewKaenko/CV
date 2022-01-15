import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// data
const skillItems = [
  {
    nameSkillItem: "React",
  },
  {
    nameSkillItem: "Redux",
  },
  {
    nameSkillItem: "TypeScript",
  },
  {
    nameSkillItem: "styled-components",
  },
  {
    nameSkillItem: "AntDesign",
  },
  {
    nameSkillItem: "FireBase",
  },
  {
    nameSkillItem: "Storybook",
  },
  {
    nameSkillItem: "JavaScript",
  },
  {
    nameSkillItem: "HTML",
  },
  {
    nameSkillItem: "CSS",
  },
  {
    nameSkillItem: "Adobe Photoshop",
  },
];

const education = [
  {
    nameOfEducation: "Frontend development",
    educationalInstitution: "Academy STEP",
    duration: "2019 - 2020",
  },
  {
    nameOfEducation: "College",
    educationalInstitution: "Mining College of Kryvyi Rih Technical University",
    duration: "2014 - 2018",
  },
  {
    nameOfEducation: "School",
    educationalInstitution: "Secondary school №121 of Kryvyi Rih",
    duration: "2005 - 2014",
  },
];

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section class="section-head">
        <div class="profile-main">
          <StaticImage
            class="profile-img"
            src="../images/profile.png"
            alt="Profile image"
          />
          <div>
            <h1>ANDREW KAENKO</h1>
            <h3 class="section-title">Junior Developer</h3>
          </div>
        </div>
        <div class="text-desc">
          <p>
            Way back in my youth I have been persistent and responsible. I
            concern each task deeply and not afraid of going to unknown. I have
            promised to myself I would pave the way for success reaching my
            goals and helping other people.
          </p>
        </div>
        <div class="link-connect">
          <div class="item-link-connect">
            <a href="https://github.com/AndrewKaenko">
              <StaticImage
                placeholder="blur"
                src="../images/github.png"
                alt="Link To GitHub"
              />
              AndrewKaenko
            </a>
          </div>
          <div class="item-link-connect">
            <a href="mailto:kaenkoa@gmail.com">
              <StaticImage
                placeholder="blur"
                src="../images/mail.png"
                alt="Link To Gmail"
              />
              kaenkoa@gmail.com
            </a>
          </div>
          <div class="item-link-connect">
            <a href="https://www.linkedin.com/in/andrew-kaenko-9693301a2/">
              <StaticImage
                placeholder="blur"
                src="../images/linkedin.png"
                alt="Link To LinkedIn"
              />
              Andrew Kaenko
            </a>
          </div>
        </div>
      </section>
      <div class="wrap-section-content">
        <section class="section-left">
          {/* <!--Skills--> */}
          <h3 class="subsection-title">skills</h3>
          <p class="heading-text">Front-End</p>
          <div class="item-subsection">
            {skillItems.map((item) => {
              return <span>{item.nameSkillItem}</span>;
            })}
          </div>
          {/* <!--Education--> */}
          <h3 class="subsection-title">Education</h3>
          {education.map((item) => {
            return (
              <>
                <h5 className="heading-text">{item.nameOfEducation}</h5>
                <p className="item-subsection">{item.educationalInstitution}</p>
                <p className="item-subsection item-sub-border">
                  {item.duration}
                </p>
              </>
            );
          })}
        </section>
        <section class="section-right">
          <h3 class="subsection-title">Expirience</h3>
          <div>
            <h5 class="heading-text mt25">Software engineer • atTech</h5>
            <span class="job-duration">nov 2012 — dec 2021</span>
            <p class="item-subsection-right">
              Worked on{" "}
              <a
                href="https://attech-org.github.io/photomagi/"
                class="watch-link"
              >
                service for watching movies and TV series.
              </a>{" "}
              Used React/Redux with TypeScript and styled-components. Connected
              with Storybook, and covered half of aplication components with
              tests.
            </p>
            <div class="wrap-project-images item-sub-border">
              <StaticImage
                src="../images/imagePhotomagi/2.png"
                alt="Form sign in"
                class="project-image"
              />
              <StaticImage
                src="../images/imagePhotomagi/3.png"
                alt="Movie page"
                class="project-image"
              />
              <StaticImage
                src="../images/imagePhotomagi/4.png"
                alt="Storybook"
                class="project-image"
              />
            </div>
          </div>

          <div>
            <h5 class="heading-text mt25">
              Trainee software engineer • atTech
            </h5>
            <span class="job-duration">sep 2021 — nov 2021</span>
            <p class="item-subsection-right">
              Together with the team, implemented service for{" "}
              <a href="https://attech-org.github.io/air/#/" class="watch-link">
                flight tickets search.
              </a>{" "}
              Tech stack: react, styled-components.
            </p>
            <div class="wrap-project-images item-sub-border">
              <StaticImage
                src="../images/imageAir/1.png"
                alt="Search tickets"
                class="project-image"
              />
              <StaticImage
                src="../images/imageAir/2.png"
                alt="Search results"
                class="project-image"
              />
              <StaticImage
                src="../images/imageAir/3.png"
                alt="Tour page"
                class="project-image"
              />
            </div>
          </div>

          <div>
            <h5 class="heading-text mt25">Engineer • IVP</h5>
            <span class="job-duration">aug 2018 — sep 2021</span>
            <p class="item-subsection-right">
              Engineer of Automated Control Systems for Technological Processes
              at industrial objects.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

// <main style={pageStyles}>
//   <title>Home Page</title>
//   <h1 style={headingStyles}>
//     Congratulations
//     <br />
//     <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
//     <span role="img" aria-label="Party popper emojis">
//       🎉🎉🎉
//     </span>
//   </h1>
//   <p style={paragraphStyles}>
//     Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
//     update in real-time.{" "}
//     <span role="img" aria-label="Sunglasses smiley emoji">
//       😎
//     </span>
//   </p>
//   <ul style={listStyles}>
//     <li style={docLinkStyle}>
//       <a
//         style={linkStyle}
//         href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//       >
//         {docLink.text}
//       </a>
//     </li>
//     {links.map((link) => (
//       <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
//         <span>
//           <a
//             style={linkStyle}
//             href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//           >
//             {link.text}
//           </a>
//           {link.badge && (
//             <span style={badgeStyle} aria-label="New Badge">
//               NEW!
//             </span>
//           )}
//           <p style={descriptionStyle}>{link.description}</p>
//         </span>
//       </li>
//     ))}
//   </ul>
//   <img
//     alt="Gatsby G Logo"
//     src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
//   />
// </main>
