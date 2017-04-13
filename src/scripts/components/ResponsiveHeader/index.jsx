import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import NavbarHeader from './NavbarHeader';
import NavbarItems from './NavbarItems';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';

const navitems = [
    {link: 'about', title: '소개'},
    {link: 'centerphoto', title: '센터사진'},
    {link: 'http://cafe.naver.com/starkeypaju', title: '블로그'},
    {link: 'contract', title: '문의/위치'},
    {link: 'question', title: 'FAQ'}
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
    return(
      <Navbar>
          <NavbarHeader href="/" name="스타키보청기 파주점"/>
          <NavbarItems>
              {navitems.map(item => {
                  return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
              })}
              {/*}<NavbarDropdown name="Dropdown">
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
