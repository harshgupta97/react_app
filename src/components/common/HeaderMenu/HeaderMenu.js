import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import AppNavButton from '../NavButton';

class HeaderMenu extends Component {
    render() {
        const { route, title } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <AppNavButton href={''} title={'Profile'} />
                </Menu.Item>
                <Menu.Item>
                    <AppNavButton href={''} title={'Preference'} />
                </Menu.Item>
                <Menu.Item>
                    <AppNavButton href={''} title={'Logout'} />
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                {route === '' || route === 'settings' ?
                    (
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>Menu</Button>
                        </Dropdown>
                    ) :
                    <AppNavButton href={`${route}/create`} title={`New ${title}`} style="btn btn-sm btn-outline-secondary" />
                }
            </div>
        )
    }
}


export default HeaderMenu;