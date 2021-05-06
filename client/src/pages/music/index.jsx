import React from 'react'
import { getUserDetails } from '../../utils/api'

export function Music({
    history,
}){
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect( () => {
        getUserDetails()
        .then(( {data} ) => {
            setUser(data)
            setLoading(false)
        }).catch((err) => {
            history.push('/')
            setLoading(false)
        })
    }, [])

    return !loading && (
        <div>
            <nav>
                <div className="nav-wrapper blue accent-3">
                <a href="../assets/images/BHG.png" className="brand-logo circle responsive-img"><img src="../assets/images/BHG.png" alt="brand-logo" wdith="60" height="60"/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/commands">Commands</a></li>
                    <li><a href="/support">Support</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/music">Music</a></li>
                    <li><a href="/auth/discord">Login</a></li>
                </ul>
                </div>
            </nav>

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
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5">Invite Now!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}