import React from 'react';
import Radium from 'radium';

const defStyle = {
    menu: {
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: '1000',
        float: 'left',
        minWidth: '160px',
        margin: '0px',
        padding: '5px 0px',
        fontSize: '14px',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #ccc',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        boxShadow: '0 6px 12px #C9C9C9',
        boxSizing: 'border-box',

        '@media screen and (min-device-width: 767px) and (min-width: 767px)': {
            position: 'static',
            float: 'none',
            width: 'auto',
            marginTop: '0',
            backgroundColor: 'transparent',
            border: '0',
            boxShadow: 'none'
        }
    },
    link: {
        display: 'block',
        padding: '3px 20px',
        clear: 'both',
        fontWeight: 'normal',
        lineHeight: '1.42857143',
        color: '#333',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        boxSizing: 'border-box',

        ':hover': {
            color: '#262626',
            backgroundColor: '#f5f5f5'
        },

        ':focus': {
            color: '#262626',
            backgroundColor: '#f5f5f5'
        },

        '@@media screen and (min-device-width: 767px) and (min-width: 767px)': {
            backgroundColor: 'transparent',
            color: '#777',

            ':hover': {
                color: '#333',
                backgroundColor: 'transparent'
            }
        }
    }
}

@Radium
export default class DropdownMenu extends React.Component {
    displayName = 'Dropdown menu items'

    render() {
        const {open, active} = this.props;
        if (active) {
            defStyle.menu.display = open ? 'block' : 'none';
        } else {
            defStyle.menu.display = 'none';
        }
        const {menuItems, style, menuItemStyle} = this.props;
        return (
          <ul style={[defStyle.menu, style && style]}>
              {menuItems.map(item => {
                  return (
                    <li key={menuItems.indexOf(item)}>
                        <a key={item.name} style={[defStyle.link, menuItemStyle && menuItemStyle]}
                            href={item.href}>{item.name}
                        </a>
                    </li>
                  );
              })}
        </ul>
      );
    }
}

DropdownMenu.propTypes = {
    menuItems: React.PropTypes.array,
    style: React.PropTypes.object,
    menuItemStyle: React.PropTypes.object,
    open: React.PropTypes.bool
}
