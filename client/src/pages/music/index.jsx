import React from 'react'
import { NavHeader } from '../../components/index'

export function Music(props){

    return (
        <div>
            <NavHeader />

            <div className="container">

                <div className="row valign-wrapper">
                    <div className="col s10 offset-s1">
                        <h1 className="center-align blue-text darken-3" id="mainHead"><strong>MORE MUSIC</strong></h1><br/>
                        <h4 className="center-align white-text" id="desc">
                        Sometimes big servers need more <strong><span className="blue-text darken-3">music</span></strong> in their lives.
                            Our secondary <strong><span className="blue-text darken-3">music only</span></strong> bot can satisfy all of your music needs.
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col center-align offset-m5">
                        <a 
                        href="https://discord.com/oauth2/authorize?client_id=799358906479411281&scope=bot"
                        target="_blank"
                        rel="noreferrer"
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5">Invite Now!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}