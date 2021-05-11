import React from 'react'
import { NavHeader } from '../../components/index'

export function Landing(props){

    const login = () => window.location.href = 'http://localhost:8080/api/auth/discord'

    return (
        <div>
            <NavHeader />
            
            <div className="container">

                <div className="row valign-wrapper">
                    <div className="col s10 offset-s1">
                        <h1 className="center-align blue-text darken-3" id="mainHead"><strong>THE BLUE HAIRED GIRL</strong></h1><br/>
                        <h4 className="center-align white-text" id="desc">
                            A Discord bot aimed at reducing bot clutter in servers by offering <strong><span className="blue-text darken-3">more</span></strong> for
                            <strong><span className="blue-text darken-3">free</span></strong>
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col s10 offset-m5">
                        <a 
                        href="https://discord.com/api/oauth2/authorize?client_id=794674548875460649&permissions=8&scope=bot"
                        target="_blank" 
                        rel="noreferrer"
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5 pulse">Invite Now!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}