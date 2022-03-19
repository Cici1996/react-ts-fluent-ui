import { DefaultButton } from '@fluentui/react'
import React from 'react'

interface Props {
    name: String,
    email: String
}

const PersonList: React.FC<Props> = ({ name, email }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            borderBottom: "1px solid #e3e3e3",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "10px"
        }}>
            <img src={`https://ui-avatars.com/api/?name=${name}`} alt='Profile' style={{ borderRadius: "50%", width: "30px", height: "30px" }} />
            <div style={{ flex: 1 }}>
                <div>{name}</div>
                <div>{email}</div>
            </div>
            <DefaultButton text="Remove" allowDisabledFocus />
        </div>
    )
}

export default PersonList