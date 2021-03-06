import React from 'react';
import Radium from 'radium';

class NavItem extends React.Component {
    displayName: 'Navigation bar item'

    getStyles() {
        return {
            base: {
                fontFamily: 'NanumBarunGothicUltraLight',
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',
                marginTop: '10px',

                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                    float: 'left',
                    marginTop: '0px'
                }
            },
            link: {
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '15px',
                paddingRight: '15px',
                lineHeight: '20px',
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: 'white',

                ':hover': {
                    color: 'gray',
                    backgroundColor: 'transparent'
                },

                ':focus': {
                    color: 'gray',
                    backgroundColor: 'transparent'
                },

                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                    paddingTop: '15px',
                    paddingBottom: '15px'
                }
            }
        };
    }

    render() {
        const defStyle = this.getStyles();
        const {style, link, title, itemStyle} = this.props;
        return (
            <li ref="list" style={[defStyle.base, style && style]}>
                <a ref="link" href={link} style={[defStyle.link, itemStyle && itemStyle]}>{title}</a>
            </li>
        );
    }
}

export default Radium(NavItem)
