import * as React from 'react';
import { CommandBar, ICommandBarItemProps, ICommandBarStyles } from '@fluentui/react/lib/CommandBar';
import { IButtonProps } from '@fluentui/react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

interface Props {
    onClickNew(): void
    onClickRestore(): void
}

const styles: Partial<ICommandBarStyles> = {
    root: {
        paddingLeft: 0
    },
};

const SampleListCommand: React.FC<Props> = ({ onClickNew,onClickRestore }) => {
    const _items: ICommandBarItemProps[] = [
        {
            key: 'newItem',
            text: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
            iconProps: { iconName: 'CircleRing' },
            onClick: () => onClickNew(),
        },
        {
            key: 'Restore',
            text: 'Restore',
            iconProps: { iconName: 'CircleRing' },
            onClick: () => onClickRestore(),
        },
        {
            key: 'archiveItem',
            text: 'Archive',
            iconProps: { iconName: 'CircleRing' },
            onClick: () => console.log('Archive'),
        },
        {
            key: 'Refresh',
            text: 'Refresh',
            iconProps: { iconName: 'CircleRing' },
            onClick: () => console.log('Refresh'),
        }
    ];

    const overflowItems: ICommandBarItemProps[] = [
        { key: 'Refresh', text: 'Refresh', onClick: () => console.log('Refresh'), iconProps: { iconName: 'CircleRing' } }
    ];

    return (
        <CommandBar
            styles={styles}
            items={_items}
            overflowButtonProps={overflowProps}
            overflowItems={overflowItems}
            farItemsGroupAriaLabel="More actions"
        />
    );
};

export default SampleListCommand;
