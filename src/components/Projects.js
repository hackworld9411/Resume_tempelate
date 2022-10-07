// Import Assets
import MyExchange from '../assets/MyExchange.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Hackworld Exchange</h3>
                    <img src={MyExchange} alt="My Exchange page" />
                    <p>
                    I have built a sample project of crypto currency exchange using javascript, html, css,
                    reactjs, nodejs, etherjs and solidity to create a new erc-20 token called HW. This Project 
                    is a sample of crypto currency exchange.
                    </p>

                    <a href="https://snowy-art-0483.on.fleek.co" target="_blank" rel="noreferrer" className="button">Site</a>
                    <a href="https://github.com/hackworld9411/blockchain-developer-hackworld/" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Smart Home Security</h3>
                    
                    <p>
                    This Project deals with the implementation of a security for our valuable things.
                    This Project consists of a raspberrypi and a ip camera to capture the images of a
                    intruder whose causing the situation.
                    </p>

                   
                </div>

                
            </div>
        </section>
    );
}

export default Projects;