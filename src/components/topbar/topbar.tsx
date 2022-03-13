import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';
import "./topbar.css"

const Topbar: React.FC = () => {
    return (
        <div className='suiteNav'>
            <div className="leftRegion">
                <Icon iconName='Video360Generic' style={{ fontSize: "23px", color: "white", padding: "20px" }} />
            </div>
            <div className="centerRegion">
                <span className="title">
                    Super-nova
                </span>
            </div>
            <div className="rightRegion">
                <Icon iconName='Settings' style={{ fontSize: "16px", color: "white", padding: "10px" }} />
                <Icon iconName='StatusCircleQuestionMark' style={{ fontSize: "20px", color: "white", padding: "10px" }} />
            </div>
        </div>
    )
}

export default Topbar;
