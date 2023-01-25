

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const menuItems = [{ key: 1, label: "" }, { key: 2, label: "" }]



const NavHeader = () => {
    return (
        <Header className='header-custom'>
            <div className="logo"><a href="/">LOGO</a></div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={menuItems}
            />

        </Header>
    )
}

export default NavHeader