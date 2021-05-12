import React from 'react'

export function NavHeader({
    props
}){
    return(
        <nav>
        <div className="nav-wrapper blue accent-3">
        <a href="../assets/images/BHG.png" className="brand-logo circle responsive-img"><img src="../assets/images/BHG.png" alt="brand-logo" width="60" height="60"/></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/commands">Commands</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="http://localhost:8080/auth/discord">Login</a></li>
        </ul>
        </div>
    </nav>
    )
}