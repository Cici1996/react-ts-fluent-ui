import React from 'react'

interface Props {
    title: String,
    children?: JSX.Element|JSX.Element[]
}

const Content: React.FC<Props> = ({ title, children }) => {
    return (
        <div style={{ paddingLeft: "10px",height:"100%" }}>
            <div className="title-module">{title}</div>
            {children}
        </div>
    )
}

export default Content