import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import NavbarHeader from './NavbarHeader';
import NavbarItems from './NavbarItems';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';

const navitems = [
    {link: '/#/', title: '홈'},
    {link: '/#/product', title: '제품소개'},
    {link: '/#/about', title: '센터소개'},
    {link: '/board', title: '문의하기'},
    // {link: '/#/location', title: '연락처/위치'},
    {link: 'http://blog.naver.com/starkeypaju', title: '블로그보기'}
];

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
]

export default class ResponsiveHeader extends React.Component {
    render() {
        return (
            <Navbar>
                <NavbarHeader href="/" name="스타키보청기" branch="파주센터"/>
                <NavbarItems>
                    {navitems.map(item => {
                        return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title}/>;
                    })}
                    {/*<NavbarDropdown name="Dropdown">
                     <DropdownMenu menuItems={dropdownItems}/>
                     </NavbarDropdown>
                     <NavbarDropdown name="Dropdown">
                     <DropdownMenu menuItems={dropdownItems}/>
                     </NavbarDropdown>*/}
                </NavbarItems>
            </Navbar>
        )
    }
}
