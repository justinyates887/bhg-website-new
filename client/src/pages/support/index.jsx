import React from 'react'
import { getUserDetails } from '../../utils/api'

export function Support({
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
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5">Join The Server!
                        </a>
                    </div>
                </div>



            </div>
        </div>
    )
}