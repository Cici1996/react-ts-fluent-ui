import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';
import "./topbar.css"

const Topbar: React.FC = () => {
    return (
        <div className='suiteNav'>
            <div className="leftRegion">
                <Icon iconName='Waffle' className='icon-header' />
            </div>
            <div className="centerRegion">
                <span className="title">
                    SecuvityOne
                </span>
            </div>
            <div className="rightRegion">
                <Icon iconName='Mail' style={{ fontSize: "16px", color: "white", padding: "14px", cursor: "pointer" }} />
                <Icon iconName='Settings' style={{ fontSize: "16px", color: "white", padding: "14px", cursor: "pointer" }} />
                <Icon iconName='StatusCircleQuestionMark' style={{ fontSize: "20px", color: "white", padding: "14px", cursor: "pointer" }} />
                <img src='https://ui-avatars.com/api/?name=Akhmad+Zaki' alt='Profile' style={{ borderRadius: "50%", width: "28px", height: "28px", padding: "10px" }} />
            </div>
        </div>
    )
}

export default Topbar;
