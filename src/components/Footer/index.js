import React from "react";


function Footer() {
    return (
        <footer className="container text-center py-3">
           <p>Links Social Media</p>
         <div className="socials">
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/tonymai6" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/github-logo.png')} alt="github link" />
          </a>
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://www.linkedin.com/in/tonymai6/" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/linkedin.png')} alt="linked in link" />
          </a>
         </div> 
          <h3 className="text-dark ">&copy; 2023 by Tony Mai </h3>
        </footer>
    );
}

export default Footer;