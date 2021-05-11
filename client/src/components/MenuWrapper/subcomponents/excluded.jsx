import React from 'react'

export function FuckingHell({
    guilds
}){
    return (
        <div>
            {guilds.map((guild) => (
                <div className="card white-text grey darken-2" key={guild.id}>
                    <li className="card-title">{ guild.name }</li>
                    <div className="card-action">
                        <a href='https://discord.com/api/oauth2/authorize?client_id=794674548875460649&permissions=8&scope=bot'
                        >Invite
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}