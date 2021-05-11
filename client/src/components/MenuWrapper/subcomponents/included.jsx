import React from 'react'
import { Link } from 'react-router-dom'

export function Included({
    guilds
}){
    return (
        <div>
            {guilds.map((guild) => (
                <div className="card white-text grey darken-2" key={guild.id}>
                    <li className="card-title">{ guild.name }</li>
                    <div className="card-action">
                        <Link to={ `/dashboard/${guild.id}` }>Dashboard</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}