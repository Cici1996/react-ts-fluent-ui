import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { IButtonProps } from '@fluentui/react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

interface Props {
    onClickNew(): void
}

const SampleListCommand: React.FC<Props> = ({ onClickNew }) => {
    const _items: ICommandBarItemProps[] = [
        {
            key: 'newItem',
            text: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
            iconProps: { iconName: 'Add' },
            onClick: () => onClickNew(),
        },
        {
            key: 'editItem',
            text: 'Edit',
            iconProps: { iconName: 'PageEdit' },
            onClick: () => console.log('Edit'),
        },
        {
            key: 'deleteItem',
            text: 'Delete',
            iconProps: { iconName: 'Delete' },
            onClick: () => console.log('Delete'),
        },
        {
            key: 'archiveItem',
            text: 'Archive',
            iconProps: { iconName: 'Archive' },
            onClick: () => console.log('Archive'),
        }
    ];
    return (
        <CommandBar
            items={_items}
            overflowButtonProps={overflowProps}
            ariaLabel="Inbox actions"
            primaryGroupAriaLabel="Email actions"
            farItemsGroupAriaLabel="More actions"
        />
    );
};

export default SampleListCommand;
