import React, { useState } from 'react'
import "./sidebar.css"
import { Nav, INavStyles, INavLink, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { useNavigate } from 'react-router-dom';


const navStyles: Partial<INavStyles> = {
    root: {
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
    },
};

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Home',
                url: '/',
                icon: 'Home',
                key:"key1"
            },
            {
                name: 'Sample List',
                url: '/expenses',
                icon: 'Calendar',
                key:"key2"
            },
            // {
            //     name: 'Client',
            //     url: '/expenses',
            //     icon: 'UserFollowed',
            //     key:"key3"
            // },
            // {
            //     name: 'Engagement',
            //     url: '/expenses',
            //     icon: 'ReminderTime',
            //     key:"key4"
            // },
            // {
            //     name: 'Reporting',
            //     url: '/login',
            //     icon: 'ReportDocument',
            //     key:"key5"
            // },
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [selectedMenu,setSelectedMenu] = useState<string>("key1");

    const _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        ev?.preventDefault();
        navigate(item?.url ?? "/")
        setSelectedMenu(item?.key ?? "")
    }

    return (
        <div className='app-sidebar'>
            <Nav
                onLinkClick={_onLinkClick}
                selectedKey={selectedMenu}
                ariaLabel="Nav basic example"
                styles={navStyles}
                groups={navLinkGroups}
            />
        </div>
    )
}

export default Sidebar;