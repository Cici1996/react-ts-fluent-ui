import React, { useState } from 'react'
import "./sidebar.css"
import { Nav, INavStyles, INavLink, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { useNavigate } from 'react-router-dom';


const navStyles: Partial<INavStyles> = {
    root: {
        boxSizing: 'border-box',
        border: 'none',
        overflowY: 'auto',
    },
};

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Dasboard',
                url: '/',
                icon: 'CircleRing',
                key: "key1"
            },
            {
                name: 'Calendar',
                url: '/',
                icon: 'CircleRing',
                key: "key2"
            },
            {
                name: 'Client',
                url: '/',
                icon: 'CircleRing',
                key: "key3"
            },
            {
                name: 'Engagement',
                url: '/engagement',
                icon: 'CircleRing',
                key: "key4"
            },
            {
                name: 'Reporting',
                url: '/',
                icon: 'CircleRing',
                key: "key5"
            },
            {
                name: 'Reference',
                url: '#',
                links: [
                    {
                        name: 'Write Up',
                        url: '#',
                        key: 'key6',
                    },
                    {
                        name: 'Checklist',
                        url: '#',
                        key: 'key7',
                    },
                ],
            },
            {
                name: 'Administration',
                url: '#',
                links: [
                    {
                        name: 'User Management',
                        url: '#',
                        key: 'key8',
                    },
                    {
                        name: 'Role Management',
                        url: '#',
                        key: 'key9',
                    },
                    {
                        name: 'Tagging',
                        url: '#',
                        key: 'key10',
                    },
                    {
                        name: 'Configurations',
                        url: '#',
                        key: 'key11',
                    },
                    {
                        name: 'System Logs',
                        url: '#',
                        key: 'key12',
                    }
                ],
            }
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState<string>("key1");

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