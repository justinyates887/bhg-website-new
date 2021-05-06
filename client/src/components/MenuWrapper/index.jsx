import React from 'react'
import { Link } from 'react-router-dom'

export function MenuComponent({
    guilds,
}){
    return (
        <div>
            <h1>Menu Component</h1>
            {guilds.map((guild) => {
                <div>
                    <li>{ guild.name }</li>
                    <Link to={ `/dashboard/${guild.id}` }></Link>
                </div>
            })}
        </div>
    )
}