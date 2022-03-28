import { DefaultButton } from '@fluentui/react'
import React from 'react'
import "./personList.css"

interface Props {
    name: String,
    email: String
}

export const PersonList: React.FC<Props> = ({ name, email }) => {
    return (
        <div className='person-list-main'>
            <img src={`https://ui-avatars.com/api/?name=${name}`} alt='Profile' style={{ borderRadius: "50%", width: "30px", height: "30px" }} />
            <div style={{ flex: 1 }}>
                <div>{name}</div>
                <div>{email}</div>
            </div>
            <DefaultButton text="Remove" allowDisabledFocus />
        </div>
    )
}