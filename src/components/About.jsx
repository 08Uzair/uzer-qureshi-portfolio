import Aos from 'aos'
import React, { useEffect } from 'react'
const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <section id="ABOUT" className="About">
                <div className="container1">
                    <div className="timeline">
                        <div className="timeline-container primary">
                            <div className="timeline-icon">
                                <i className='bx bxs-graduation'></i>
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title"><span className="badge">Education</span></h4>
                                <p> I am pursuing my higher education at Sinhgad Institutes, Pune , where I am currently in my
                                    second
                                    year of Civil
                                    Engineering. My academic pursuits have given me a solid foundation in problem-solving and
                                    analytical
                          thinking.</p>
                                <p className="timeline-subtitle">22 November 2022</p>
                            </div>
                        </div>
                        <div className="timeline-container danger">
                            <div className="timeline-icon">
                                <i className='bx bx-code' ></i>
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title"><span className="badge">Skills</span></h4>
                                <p> I am a proficient web developer with expertise in various programming languages, including HTML,
                                    CSS, JavaScript, C++,
                                    Python, and ReactJS. These languages have enabled me to create dynamic and visually appealing
                                    web
                                    applications.</p>
                                <p className="timeline-subtitle">After My CET Ended</p>
                            </div>
                        </div>
                        <div className="timeline-container success">
                            <div className="timeline-icon">
                                <i className='bx bx-happy-heart-eyes'></i>
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title"><span className="badge">Passion</span></h4>
                                <p>    Web development isn't just a job ; It's my passion. Now lets find your immense joy in creating
                                    user-friendly and
                                    innovative web solutions that make a positive impact.</p>
                                <p className="timeline-subtitle">Life</p>
                            </div>
                        </div>
                        <div className="timeline-container warning">
                            <div className="timeline-icon">
                                <i className='bx bxs-castle'></i>
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title"><span className="badge">Winnings</span></h4>
                                <p> I had Won the <a href='https://www.holopin.io/@08uzair#' className='hack'>HacktoberFest</a> in the Month of October of 2023.</p>
                                <p className="timeline-subtitle">November 2022</p>
                            </div>
                        </div>
                        <div className="timeline-container">
                            <div className="timeline-icon">
                                <i className='bx bx-smile'></i>
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title"><span className="badge">Greetings</span></h4>
                                <p>Thank you
                                    for
                                    visiting my portfolio, and I look forward to connecting with you for potential opportunities and
                                    collaborations.</p>
                                <p className="timeline-subtitle">Now</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <h1 className="txt1">About Me</h1>
              <div className="aboutContainer">
                  <div className="cir cir1"></div>
                  <div className="line" data-aos="fade-down"></div>
                  <div className="cir cir2"></div>
                  <div className="about">
                      <div className="edu box" data-aos="fade-right" data-aos-offset="500" data-aos-duration="500">
                          I am pursuing my higher education at Sinhgad Institutes, Pune , where I am currently in my
                          second
                          year of Civil
                          Engineering. My academic pursuits have given me a solid foundation in problem-solving and
                          analytical
                          thinking.
                      </div>
                      <div className="skills box " data-aos="fade-right" data-aos-offset="500" data-aos-duration="500">
                          I am a proficient web developer with expertise in various programming languages, including HTML,
                          CSS, JavaScript, C++,
                          Python, and ReactJS. These languages have enabled me to create dynamic and visually appealing
                          web
                          applications.
                      </div>
                      <div className="passion box " data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">
                          Web development isn't just a job ; It's my passion. Now lets find your immense joy in creating
                          user-friendly and
                          innovative web solutions that make a positive impact.
                      </div>
                      <div className="passion box " data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">
                          I had Won the HacktoberFest in the Month of October of 2023.
                      </div>
                      <div className=" box" data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">Thank you
                          for
                          visiting my portfolio, and I look forward to connecting with you for potential opportunities and
                          collaborations.</div>
                  </div>
              </div> */}



            </section>

        </>
    )
}

export default About
