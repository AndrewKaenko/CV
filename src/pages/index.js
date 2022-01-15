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