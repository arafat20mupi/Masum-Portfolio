
const WorkingProcess = ({ classicHeader, darkTheme }) => {
    const services = [
        {
          name: "Define the Purpose and Audience",
          desc: "Understand the goals of the website or app and the target audience. This helps in shaping the features, design, and user experience.",
          icon: "fas fa-bullseye", // Represents defining goals and audience
        },
        {
          name: "Conceptualization",
          desc: "Brainstorm the features, layout, and user flow of the website or app. Initial wireframes and design ideas are created during this phase.",
          icon: "fas fa-lightbulb", // Represents brainstorming and ideas
        },
        {
          name: "UI/UX Design",
          desc: "Design the interface for the website or app, ensuring a user-friendly experience. This step focuses on design aesthetics and user flow.",
          icon: "fas fa-pencil-ruler", // Represents design and user interface tools
        },
        {
          name: "Website/App Development",
          desc: "Convert the designs into a fully functional website or app, using the appropriate technology to ensure smooth performance, scalability, and security.",
          icon: "fas fa-code", // Represents coding and development
        },
        {
          name: "Testing and Quality Assurance",
          desc: "Test the website or app across various devices, browsers, and environments. Identify bugs, usability issues, and ensure it meets high-quality standards.",
          icon: "fas fa-check-circle", // Represents testing and quality assurance
        },
        {
          name: "Project Handover",
          desc: "Deliver the final design, website, or app with essential files, assets, and documentation. Provide support for installation, updates, and optimization to ensure long-term success.",
          icon: "fas fa-handshake", // Represents handover and collaboration
        },
      ];
      
      return (
        <section
          id="WorkingProcess"
          className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
        >
          <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
            {/* Heading */}
            <div className="position-relative d-flex text-center mb-5">
              <h2
                className={
                  "text-24  text-uppercase fw-600 w-100 mb-0 " +
                  (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
                }
              >
                Working
              </h2>
              <p
                className={
                  "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                  (darkTheme ? "text-white" : "text-dark")
                }
              >
                Process
                <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
              </p>
            </div>
            {/* Heading end*/}
            {/* content start */}
            <div className="row">
              <div className="col-lg-11 mx-auto">
                <div className="row">
                  {services.length > 0 &&
                    services.map((service, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="featured-box style-3 mb-5">
                          <div
                            className={
                              "featured-box-icon text-primary  shadow-sm rounded " +
                              (darkTheme ? "bg-dark-1" : "bg-white")
                            }
                          >
                            <i className={service.icon} />
                          </div>
                          <h3 className={darkTheme ? "text-white" : ""}>
                            {service.name}
                          </h3>
                          <p
                            className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                          >
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* content end */}
          </div>
        </section>
      );
};

export default WorkingProcess;