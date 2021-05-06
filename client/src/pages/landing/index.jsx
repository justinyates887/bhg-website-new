import React from 'react'
import { Button } from '@chakra-ui/react'
import { getUserDetails } from '../../utils/api'

export function Landing({
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

    const login = () => window.location.href = 'http://localhost:8080/api/auth/discord'

    return !loading && (
        <div>
            <nav>
                <div className="nav-wrapper blue accent-3">
                    <a href="assets/images/BHG.png" className="brand-logo circle responsive-img"><img src="assets/images/BHG.png" alt="brand-logo" width="60" height="60" /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/commands">Commands</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/music">Music</a></li>
                        <Button
                            onClick={login}
                            variantcolor="blue"
                        >Login</Button>
                    </ul>
                </div>
            </nav>

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
                        className="waves-effect blue darken-3 btn-large center-align z-depth-5 pulse">Invite Now!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}