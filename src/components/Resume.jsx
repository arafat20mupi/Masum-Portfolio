import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2022- 2025",
      title: "Computer Science",
      place: "Northern University Bangladesh",
      desc: "Focusing on innovative solutions and technology-driven projects, with a specialization in advanced problem-solving techniques. Dedicated to leveraging technical expertise to design and implement transformative digital experiences and drive meaningful advancements in the tech industry.",
    },
    {
      yearRange: "2019 - 2020",
      title: "Professional Graphic Design",
      place: "Creative IT Institute",
      desc: "Completed a Professional Graphic Design course, honing skills in visual communication, design principles, and creative software. Passionate about delivering impactful designs that enhance user experience and brand identity in the digital world",
    },
    {
      yearRange: "2017 - 2021",
      title: "Diploma In Engineering",
      place: "Munshiganj Polytechnic Institute",
      desc: "Studied computer technology with an emphasis on practical, hands-on skills in the field. Developed a strong foundation in systems and infrastructure, alongside a passion for applying technology to solve complex, real-world challenges in both technical and design contexts.",
    },
    {
      yearRange: "2015- 2016",
      title: "Science",
      place: "Araihazar Pilot Hight School",
      desc: "Completed secondary education in Science, developing a strong foundation in analytical thinking and problem-solving skills. Focused on building a solid academic base for future studies in technology and design.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2024 - Present",
      title: "CEO",
      place: "Wizardd IT",
      desc: "Leading a dynamic agency offering comprehensive solutions, including app and web development, UI/UX design, and digital experiences. Fostering innovation and collaboration with cross-functional teams to deliver impactful, user-focused solutions across platforms.",
    },
    {
      yearRange: "2023 - 2024",
      title: "UI/UX & Graphic Designer",
      place: "Sinso Technology",
      desc: "Developed complete branding strategies, including logo design, color palettes, and visual identity. Worked with teams to deliver cohesive, market-driven designs, enhancing product visibility and user engagement across platforms.",
    },
    {
      yearRange: "2022 - 2023",
      title: "Graphic Designer",
      place: "Red Bubble",
      desc: "Designed custom branding and digital interfaces, ensuring high-quality, tailored solutions that met client needs. Delivered impactful designs that strengthened brand identities and provided meaningful digital experiences for various clients.",
    },
    {
      yearRange: "2020 - 2023",
      title: "Freelance Designer",
      place: "Various Clients",
      desc: "Offered custom design solutions, including branding and digital interfaces, delivering high-quality, tailored results that met clients’ unique needs. Focused on creating impactful and effective designs to enhance brand visibility and user experience.",
    },
  ];

  const skills = [
    {
      name: "UI/UX Design (Web & Mobile)",
      percent: 95,
    },
    {
      name: "UI/UX Design (Web & Mobile)",
      percent: 90,
    },
    {
      name: "Web & App Development",
      percent: 80,
    },
    {
      name: "SEO & Digital Marketing",
      percent: 90,
    },

  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>

                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>

                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0  " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;