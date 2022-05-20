import React ,{useState, Footer} from "react";

import { Link, useNavigate } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useNavigate();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>

                <div>
                    <h1>BitIntellegence</h1>
                    <p>  Provide a starting point for analysis and 
                        investigation of potentially criminal bitcoin wallets. </p>
                    <Link to="/graph">Get Started</Link>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2>Header</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">

                            <h3>Why Track Wallets?</h3>
                            <div>Suspicious activity has been an issue with cryptocurrency, 
                                and its only getting worse. To help find this suspicious activity,
                                we are providing a starting point for analysis and 
                                investigation of potentially criminal bitcoin wallets,
                                by automatically collecting and displaying information
                                 that may be useful in an investigation</div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>How The Graph Works</h3>
                          <div> The information displayed on the graph will include
                                the balance of the wallet as well as a directed graph 
                                of all other wallets which have transacted with the 
                                target along with the amount, direction, and time of all transactions.</div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Marking Suspicious Activity</h3>
                            <div>In the graph, you can flag the suspicious wallets
                                that the user wants to keep and eye on. You can flag
                                wallet with three different sevarity levels, green, 
                                yellow and red. </div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Footer?</h2>
        
                   

                </section>
            </main>

           
        </React.Fragment>
    )
}


export default Main;