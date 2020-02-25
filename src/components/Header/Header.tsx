import * as React from 'react'
import { Stack } from 'office-ui-fabric-react'

interface IHeaderProps {
    label: string
}

const Header: React.FC<IHeaderProps> = ({ label, children }) => (
    <div
        style={{
            display: 'inline-flex',
            width: '100%',
            height: '150px',
            backgroundColor: 'red'
        }}
    >
        <div style={{ flex: 1, backgroundColor: 'green' }}>Logo</div>
        <div style={{ flex: 2, backgroundColor: 'yellow' }}>Message</div>
        <div style={{ flex: 1, backgroundColor: 'red' }}>Info</div>
    </div>
)

export default Header
