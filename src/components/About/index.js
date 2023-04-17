import React from "react";


function About() {
 return (
    <section className="my-3" id="portfolio">
      
     <div className="col-12 mb-2 bg-dark text-light p-3">
        <h2 className="text-dark bg-primary p-2 display-inline-block mb-3 mt-2">Portfolio</h2>
        <p>Insert description of your portfolio here.</p>
        <a href={require('../../components/Portfolio/index')} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Portfolio</a>
    </div>

      <div className="flex-row justify-space-between">
      <a  href={require('../../assets/images/resume.png')} target="_blank" rel="noopener noreferrer" >
                <h5 id="resume" className="text-dark bg-primary p-2 display-inline-block">Resume<img src={require('../../assets/exit-top-right.png')} alt="Link to resume"/> </h5>
            </a>
          <div className="col-12 mb-2 bg-dark text-light p-3">
            <div className="flex-row">
                <div className="col-3 about">
                    <img className="avatar" src={require('../../assets/images/totoro.jpg')} alt="Tony Mai"/>
                </div>
                <div className="col-9 about">
                    <p className="about">As a web developer, I have been trained in full-stack web technologies such as JavaScript, React, Node.js, Express.js, MongoDB, and MySQL at Washington University. My passion for web development drives me to continuously learn and grow in this field, and I thrive on collaborating with others to create impactful and in-demand web applications.
                        One of my strengths is my curiosity and eagerness to learn, which has allowed me to build a solid foundation in computer science fundamentals. My skills in modern web technologies make me a valuable addition to any development team, and I'm committed to contributing to the ever-evolving web development industry. With my expertise and passion, I'm excited to create innovative solutions and be part of a team that drives change through technology..
                        Please contact me via the provided information to set up an interview.
                    </p>
                </div>
            </div>
          </div>
          
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="br bg-primary portfolio-item-title text-dark p-2">Front-End</h3>
                <ul>
                    <li>HTML5 – CSS – Bootstrap</li>
                    <li>JavaScript – React – Node.js</li>
                    <li>jQuery – AJAX – JSON</li>
                    <li>Git – Version Control – Command Line</li>
                    <li>Responsive Web Design – Mobile First Design</li>
                    <li>Basics of Object-Oriented Programming</li>
                </ul>
                <p>As someone who enjoys working with front-end development, I take great pleasure in creating responsive web applications and fine-tuning them to ensure they meet my high standards. I use my expertise in UI/UX and Bootstrap to design visually appealing websites while finding innovative solutions to any design challenges.</p>            </div> 
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="br bg-primary portfolio-item-title text-dark p-2">Back-End</h3>
                <ul>
                    <li>MongoDB – Mongoose</li>
                    <li>Apollo Server - Node</li>
                    <li>MySQL2 – NoSql</li>
                    <li>Sequelized – RESTFUL APIs</li>
                    <li>I write thorough unit tests to ensure proper application functoinality and accurate database structure by testing components and verifying intergrity</li>
                </ul>
                
                <p> I am highly enthusiastic about working with servers, databases, and APIs, and find it extremely gratifying. I possess a strong command of the tools mentioned above, which enable me to create efficient and industry-standard databases. Additionally, I am a quick learner and can adapt to new backend tools to meet the specific requirements of any job.</p>
            </div>      
            
            <h2 className="text-dark bg-primary p-2 display-inline-block mb-3 mt-2">Contact Me</h2>
          <div className="col-12 mb-2 bg-dark text-light p-3">
           
                <div className="col-9 about">
                    <ul>
                        <li>Email: <img src={require('../../assets/exit-top-right.png')} alt="Link to open default email program"/> <a className="style-none" href="mailto:hikegami.6@gmail.com">tonay6@gmail.com</a></li>
                        <li>Cellphone - Text/Call: (314)398-2985</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
 );
}

export default About;