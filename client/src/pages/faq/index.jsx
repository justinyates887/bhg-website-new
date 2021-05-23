import { Container } from '@chakra-ui/layout'
import React from 'react'
import { NavHeader } from '../../components/index'

export function Faq(props){

    return (
        <div>
            <NavHeader />
            <Container>
                <div className="row valign-wrapper">
                    <div className="col s10 offset-s1">
                        <h1 className="center-align blue-text darken-3" id="mainHead"><strong>FREQUENTLY ASKED QUESTIONS</strong></h1><br/>
                        <h4 className="center-align white-text" id="desc">
                        The most <strong><span className="blue-text darken-3">Frequently Asked Questions</span></strong> can be found
                            <strong><span className="blue-text darken-3">below.</span></strong>
                        </h4>
                    </div>
                </div>

                <div className="row" id="cardOne">
                    <div className="col s8 offset-s2">
                        <div className="card  grey darken-3">
                            <div className="card-content center-align">
                            <span className="card-title activator white-text">Can I Customize the Bot?<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal grey darken-3">
                            <span className="card-title white-text">Can I Customize the Bot?<i className="material-icons right">close</i></span>
                            <p className="white-text">
                                At this point, no. Full customization will come in version 4.0.0 when we implement databases. 
                                <br/>
                                <strong>Why not now?</strong>
                                <br/>
                                Because databases are a pain in the ass to code and expensive to run. We want to lay groundwork 
                                and hopefully receive some support before we take on that challenge.
                                <br/>
                                By version 5.0.0 I hope to have added features to this website where you can have an easy interface to 
                                set customization options, but still keep in-server configuration fully available for all customizable commands.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="cardTwo">
                    <div className="col s8 offset-s2">
                        <div className="card grey darken-3">
                            <div className="card-content center-align">
                            <span className="card-title activator white-text">How Much Does This Bot Cost?<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal grey darken-3">
                            <span className="card-title white-text">How Much Does This Bot Cost?<i className="material-icons right">close</i></span>
                            <p className="white-text">
                                We hope to keep this bot <strong>FREE FOREVER</strong>.
                                <br/>
                                In order to do that we rely on charitable donations as well as partnerships with servers and advertisors. 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="cardTwo">
                    <div className="col s8 offset-s2">
                        <div className="card grey darken-3">
                            <div className="card-content center-align">
                            <span className="card-title activator white-text">Where Can I Find Support?<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal grey darken-3">
                            <span className="card-title white-text">Where Can I Find Support?<i className="material-icons right">close</i></span>
                            <p className="white-text">
                                The devs will respond to any question you have on the discord support server found <a href="https://discord.gg/FqbRWkgfcT">here</a>
                                <br/>
                                Please feel free to join and talk to the devs!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="cardTwo">
                    <div className="col s8 offset-s2">
                        <div className="card grey darken-3">
                            <div className="card-content center-align">
                            <span className="card-title activator white-text">How Do I Report a Bug?<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal grey darken-3">
                            <span className="card-title white-text">How Do I Report a Bug?<i className="material-icons right">close</i></span>
                            <p className="white-text">
                                Please report any bugs to the devs <a href="https://discord.gg/FqbRWkgfcT">here</a>
                                <br/>
                                You can also make suggestions or talk directly to the devs.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="cardTwo">
                    <div className="col s8 offset-s2">
                        <div className="card grey darken-3">
                            <div className="card-content center-align">
                            <span className="card-title activator white-text">Why Is The Bot Offline?<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal grey darken-3">
                            <span className="card-title white-text">Why Is The Bot Offline?<i className="material-icons right">close</i></span>
                            <p className="white-text">
                                The bot may go offline from time to time when she is getting an update or ran into a bug.
                                <br/>
                                <br/>
                                All bugs are handled ASAP by the devs, so the bot should be back up within a reasonable amount of time.
                                <br/>
                                <br/>
                                We are expeirencing a rapid amount of growth in a short time, so outages may be frequent but will lower in frequency with time.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col center-align offset-m5">
                        <a 
                        href="https://discord.com/api/oauth2/authorize?client_id=794674548875460649&permissions=8&scope=bot"
                        target="_blank"
                        rel="noreferrer"
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5">Invite Now!
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}