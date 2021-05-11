import React from 'react'
import { NavHeader } from '../../components/index'

export function Support(props){

    return (
        <div>
            <NavHeader />

            <div className="container">

                <div className="row valign-wrapper">
                    <div className="col-4">
                        <h1 className="center-align blue-text darken-3" id="mainHead"><strong>NEED HELP?</strong></h1><br/>
                        <h4 className="center-align white-text" id="desc">
                        Join our <strong><span className="blue-text darken-3">support server</span></strong> to talk to the devs, make suggestions, and be
                            <strong><span className="blue-text darken-3">informed</span></strong> about all of the updates.
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col center-align offset-m5">
                        <a 
                        href="https://discord.gg/FqbRWkgfcT"
                        target="_blank"
                        rel="noreferrer"
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5">Join The Server!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}