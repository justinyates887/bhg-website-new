import React from 'react'
import { Included } from "./subcomponents/included"
import { FuckingHell } from './subcomponents/excluded'

export function MenuComponent({
    guilds,
}){
    return (
        <React.Fragment>
            <div>
                <Included guilds={guilds.included} />
            </div>
            <div>
                <FuckingHell guilds={guilds.excluded} />
            </div>
        </React.Fragment>
    )
}