import React, { Component } from 'react'
import {
    IContextualMenuItem,
    ContextualMenuItemType,
    IContextualMenuProps,
    DefaultButton
} from 'office-ui-fabric-react'

interface Props {}
interface State {}
const menuItems: IContextualMenuItem[] = [
    {
        key: 'newItem',
        text: 'New',
        onClick: () => console.log('New clicked')
    },
    {
        key: 'divider_1',
        itemType: ContextualMenuItemType.Divider
    },
    {
        key: 'rename',
        text: 'Rename',
        onClick: () => console.log('Rename clicked')
    },
    {
        key: 'edit',
        text: 'Edit',
        onClick: () => console.log('Edit clicked')
    },
    {
        key: 'properties',
        text: 'Properties',
        onClick: () => console.log('Properties clicked')
    },
    {
        key: 'linkNoTarget',
        text: 'Link same window',
        href: 'http://bing.com'
    },
    {
        key: 'linkWithTarget',
        text: 'Link new window',
        href: 'http://bing.com',
        target: '_blank'
    },
    {
        key: 'linkWithOnClick',
        name: 'Link click',
        href: 'http://bing.com',
        target: '_blank'
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
        onClick: () => console.error('Disabled item should not be clickable.')
    }
]

const menuProps: IContextualMenuProps = {
    shouldFocusOnMount: true,
    items: menuItems
}
export default class AboutUs extends Component<Props, State> {
    state = {}

    render() {
        return <DefaultButton menuProps={menuProps} />
    }
}
