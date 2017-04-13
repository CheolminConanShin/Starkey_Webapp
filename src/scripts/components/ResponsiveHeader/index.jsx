import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import NavbarHeader from './NavbarHeader';
import NavbarItems from './NavbarItems';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';

const navitems = [
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
];

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
];

export default class ResponsiveHeader extends React.Component {
  render() {
    return(
      <Navbar>
          <NavbarHeader href="http://www.google.com" name="Starkey"/>
          <NavbarItems>
              {navitems.map(item => {
                  return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
              })}
              <NavbarDropdown name="Dropdown">
                  <DropdownMenu menuItems={dropdownItems}/>
              </NavbarDropdown>
              <NavbarDropdown name="Dropdown">
                  <DropdownMenu menuItems={dropdownItems}/>
              </NavbarDropdown>
          </NavbarItems>
      </Navbar>
    )
  }
}
