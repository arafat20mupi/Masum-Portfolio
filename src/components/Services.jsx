import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Graphic Design",
      desc: "Transform your ideas into stunning visuals that captivate and communicate your brand’s essence. Our designs don’t just look great—they drive engagement and leave lasting impressions.",
      icon: "fas fa-palette",
    },
    {
      name: "UI/UX Design",
      desc: "Create seamless, intuitive digital experiences that delight users and enhance functionality. Our UI/UX solutions are crafted to ensure your products are not only beautiful but user-friendly and efficient.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Branding & Identity Design:",
      desc: "Build a memorable and cohesive brand identity that stands out. We specialize in designing logos and brand elements that truly reflect your company’s values and mission, making your business unforgettable.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "App Design & Develop",
      desc: "From concept to launch, we design and develop intuitive, high-performance apps that provide smooth user experiences. Whether mobile or web, we deliver apps that elevate your business.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Content Creation",
      desc: "Engage your audience with compelling content that resonates. From blog posts to social media campaigns, we create content that connects, educates, and drives conversions, tailored to your brand voice.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Digital Marketing & SEO",
      desc: "Boost your online presence with our expert digital marketing and SEO strategies. We optimize your website, enhance visibility, and drive growth, ensuring your business ranks higher and attracts the right audience.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
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
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
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

export default Services;
