import React from 'react'
import { NavHeader } from '../../components/index'

export function Commands(props){

    return (
        <div>
            <NavHeader />

            <div className="container">

                <div className="row valign-wrapper">
                    <div className="col s10 offset-s1">
                        <h1 className="center-align blue-text darken-3" id="mainHead"><strong>COMMANDS</strong></h1><br/>
                        <h4 className="center-align white-text" id="desc">
                        Take a look through our current <strong><span className="blue-text darken-3">commands</span></strong> to
                        see what you can do!
                        </h4>
                    </div>
                </div>

                <div className="row" id="commandsList">
                    <div className="col s12 transparent">
                        <div className="card transparent">
                            <div className="card-tabs transparent blue-text">
                            <ul className="tabs tabs-fixed-width transparent blue-text">
                                <li className="tab blue-text"><a href="#admin" className="blue-text">Admin</a></li>
                                <li className="tab blue-text"><a href="#reddit"className="blue-text">Reddit</a></li>
                                <li className="tab blue-text"><a href="#games"className="blue-text">Games</a></li>
                                <li className="tab blue-text"><a href="#music"className="blue-text">Music</a></li>
                                <li className="tab blue-text"><a href="#help"className="blue-text">Help</a></li>
                            </ul>
                            </div>

                            <div className="card-content transparent">
                            <div id="admin">
                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">kick<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">kick<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Kick a user from your channel
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!kick (target) + (reason [optional])
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">ban<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">ban<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Ban a user from your channel
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!ban (target) + (reason [optional])
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">mute<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">mute<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Mute a user from your channel for a select amount of time
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!mute (target) + (time)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">warn<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">warn<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Warns a user from your channel (no current database of warns, so this is considered a formality)
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!warn (target) + (reason [optional])
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">purge<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">purge<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Purges a select amount of messages from channel command is run in.
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!purge (amount)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>    

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">nuke<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">nuke<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Deletes a channel and replaces it
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!nuke
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">channelcreate<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">channelcreate<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Creates a channel in your server
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!channelcreate (channel type [voice/text]) + (channel name)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">channeldelete<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">channeldelete<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Deletes a channel from your server
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!channeldelete (#target channel)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">giverole<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">giverole<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Gives a role to a user
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!giverole (target) ([@role] OR [typerole])
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">removerole<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">removerole<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Removes role from user
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!removerole (target) + ([@role] OR [typerole])
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">createrole<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">createrole<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Creates a role in your server
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!createrole (color [type anything for default]) + (rolename)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">deleterole<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">deleterole<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Deletes a role from your server
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!deleterole (@targetrole)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">announce<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">announce<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Creates a styalized announcment in a specified channel
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!announce (#target channel) + (message)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">startgiveaway<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">startgiveaway<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Starts a giveaway on the last message it can find with a reaction to the message
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!startgiveaway (emoji to react with)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">endgiveaway<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">endgiveaway<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Will end the giveaway by selecting a random, non bot reaction (note: the most recent message must be the giveaway)
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!endgiveaway
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">ticket<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">ticket<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Allows user to create a ticket
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!ticket
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card grey darken-3 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">addlogchannel<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal grey darken-3">
                                            <span className="card-title white-text">addlogchannel<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Will create a channel called blue-logs where all logs will be sent (until database update)
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!addlogchannel
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="reddit">

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-orange darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">aww<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal  deep-orange darken-4">
                                            <span className="card-title white-text">aww<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends a meme from r/aww
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!aww
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-orange darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">wholesome<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal  deep-orange darken-4">
                                            <span className="card-title white-text">wholesome<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends a meme from r/wholesome
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!wholesome
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-orange darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">meme<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal  deep-orange darken-4">
                                            <span className="card-title white-text">meme<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends a meme from r/meme
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!meme
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-orange darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">hentai<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal  deep-orange darken-4">
                                            <span className="card-title white-text">hentai<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends an image from r/hentai
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!hentai (Only works in nsfw channels)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-orange darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">reddit<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal  deep-orange darken-4">
                                            <span className="card-title white-text">reddit<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends a meme from the subreddit of your choice
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!reddit (subreddit)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id="games">

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-purple darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">roll<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal deep-purple darken-4">
                                            <span className="card-title white-text">roll<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Rolls a dice
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!roll (ex. 2d20+4) or (d8) etc.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card  deep-purple darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">vote<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal deep-purple darken-4">
                                            <span className="card-title white-text">vote<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Upvote or downvote the most recent post!
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!vote
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id="music">

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">play<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">play<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Plays a song
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!play or b!p + (song)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">loop<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">loop<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Loops the current song
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!loop
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">skip<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">skip<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                            Skips current song
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!skip
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">pause<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">pause<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Pauses current song
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!pause
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">resume<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">resume<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Resumes song
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!resume
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">nowplaying<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">nowplaying<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Tells you what song is playing
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!nowplaying
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">shuffle<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">shuffle<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Shuffles queue
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!shuffle
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">stop<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">stop<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Disconnects the bot
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!stop
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">clear-queue<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">clear-queue<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Clears current queue
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!clear-queue
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card pink darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">filter<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal pink darken-4">
                                            <span className="card-title white-text">filter<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Filters music with a list of filters to choose from: (8D, gate, haas, phaser, treble, tremolo, 
                                                vibrato, reverse, karaoke, flanger, mcompand, pulsator, subboost, bassboost, vaporwave, nightcore, 
                                                normalizer, surrounding)
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!filter + (filter)
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id="help">

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card green darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">help<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal green darken-4">
                                            <span className="card-title white-text">help<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends list of help commands
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!help
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card green darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">developers<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal green darken-4">
                                            <span className="card-title white-text">developers<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends developer info
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!developers
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card green darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">invitebot<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal green darken-4">
                                            <span className="card-title white-text">invitebot<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends invite link for bot
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!invitebot
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="card">
                                    <div className="col s10 offset-s1">
                                        <div className="card green darken-4 hoverable">
                                            <div className="card-content left-align">
                                            <span className="card-title activator white-text">donate<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal green darken-4">
                                            <span className="card-title white-text">donate<i className="material-icons right">close</i></span>
                                            <p className="white-text">
                                                Sends links to help support production
                                                <blockquote>
                                                    Usage:
                                                </blockquote>
                                                b!donate
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}