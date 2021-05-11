import React from 'react'
import { Link } from 'react-router-dom'

export function MenuComponent({
    guilds,
}){
    return (
        <div>
            <h1>Menu Component</h1>
            {guilds.map((guild) => (
                <div className="row" key={guild.id}>
                    <div className="col s12 m6">
                        <div className="card white-text grey darken-2">
                            <li className="card-title">{ guild.name }</li>
                            <div className="card-action">
                                <Link to={ `/dashboard/${guild.id}` }>Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}