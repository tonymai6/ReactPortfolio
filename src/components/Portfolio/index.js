import React from "react";

function Portfolio() {
 const projects = [
     {
        name: 'Weather API',
        description: 'A Weather Dashboard that allows users to search for a city and view the current weather and 5-day forecast. The application uses the OpenWeather API to retrieve weather data for cities. The application uses localStorage to store any persistent data.',
        github: 'https://github.com/tonymai6/Weather-API',
        livelink: 'https://tonymai6.github.io/Weather-API/',
        image: '1',
        uses: 'HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather API'
     },
     {
        name: 'Work Day Scheduler',
        description: 'A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
        github: 'https://github.com/tonymai6/Work-Day-Scheduler',
        livelink: 'https://tonymai6.github.io/Work-Day-Scheduler/',
        image: '2',
        uses: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js'
     },
     {
        name: 'Password Generator',
        description: "A password generator that allows users to create a random password based on criteria they've selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.",
        github: 'https://github.com/tonymai6/Challenge-3',
        livelink: 'https://tonymai6.github.io/Challenge-3/',
        image: '3',
        uses: 'HTML, CSS, JavaScript'
     },
 ];

 return (
     <div>
    {projects.map((project) => {
        return(
                <div className="br col-12 mb-2 bg-dark text-light p-3">
                  <div className="flex-row">
                    <div className="left col-8">
                        <h3 className="portfolio-item-title text-light ">{project.name}</h3>
                        <h5 className="portfolio-languages pt-3">
                            Built With: {project.uses}
                        </h5>
                        <p>{project.description}</p>
                        <div className="br bg-primary width-min p-1">
                        <a href={project.livelink}  rel="noreferrer noopener" target="_blank" title="Open Live App on Hosted with Heroku">
                            <img className="icon" src={require('../../assets/open-in-browser.png')} alt="hosted app / youtube link"/>
                        </a>
                        <a href={project.github} rel="noreferrer noopener" target="_blank" title="Open GitHub Repo">
                            <img className="icon" src={require('../../assets/github.png')} alt="github link"/>
                        </a>
                        </div>
                    </div>
                    <div className="right">
                        <img className="image" src={require(`../../assets/images/${project.image}.png`)} alt={project.name} key={project.name}/>
                    </div>
                  </div>
                </div>
        );
    })
    
    }
 </div>);
}

export default Portfolio;