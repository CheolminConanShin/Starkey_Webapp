import React from 'react';
import Radium from 'radium';

const styles = {
    branch: {
      fontSize: '1.5vw',
      color: '#E8B500'
    },
    sameRow: {
      display: 'inline-block'
    }
}

class NavbarHeader extends React.Component {
    displayName : 'Navigation bar header'

    getStyles() {
        return {
            header: {
                marginRight: '-15px',
                marginLeft: '-15px',
                boxSizing: 'border-box',

                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                    float: 'left',
                    marginRight: '0',
                    marginLeft: '0'
                }
            },
            brand: {
                float: 'left',
                height: '50px',
                padding: '15px',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                boxSizing: 'border-box',
                width: '50vw',
                display: 'table',

                fontSize: '30px',
                lineHeight: '30px',
                color: '#1900C1',

                ':hover': {
                    color: '#5e5e5e'
                },

                ':focus': {
                    color: '#5e5e5e'
                },

                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                    marginLeft: '-15px',
                    width: '30vw'
                }
            },
            navbarToggle: {
                position: 'relative',
                float: 'right',
                padding: '9px 10px',
                marginTop: '8px',
                marginRight: '15px',
                marginBottom: '8px',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '4px',
                borderColor: '#ddd',
                cursor: 'pointer',
                boxSizing: 'border-box',

                ':hover': {
                  backgroundColor: '#ddd'
                },

                ':focus': {
                  outline: '0',
                  backgroundColor: '#ddd'
                },
                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                  display: 'none'
                }
            },
            srOnly: {
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                borderWidth: '0',
                borderStyle: 'none',
                boxSizing: 'border-box'
              },
            iconBar: {
                display: 'block',
                width: '40px',
                height: '7px',
                borderRadius: '1px',
                backgroundColor: '#888',
                boxSizing: 'border-box'
            },
            burger: {
              marginTop: '4px'
            },
            pseudoBefore: {
                display: 'table',

                boxSizing: 'border-box'
            },
            pseudoAfter: {
                clear: 'both',
                display: 'table',

                boxSizing: 'border-box'
            }
        };
    }

    renderToggleButton() {
        const defStyle = this.getStyles();
        return (
          <button type="button" style={[defStyle.navbarToggle]} onClick= {this.props.navbarToggle}>
              <span style={[defStyle.srOnly]}>Toggle navigation</span>
              <span style={[defStyle.iconBar]}></span>
              <span style={[defStyle.iconBar, defStyle.burger]}></span>
              <span style={[defStyle.iconBar, defStyle.burger]}></span>
          </button>
        );
    }

    render() {
        const defStyle = this.getStyles();
        const {href, name, branch, headerStyle, brandStyle} = this.props;
        return (
            <div key="header" style={[defStyle.header, headerStyle && headerStyle]}>
                <span style={[defStyle.pseudoBefore]} />
                    {this.renderToggleButton()}
                    <a key="brand" style={[defStyle.brand, brandStyle && brandStyle]} href={href}>
                      <div style={styles.sameRow}>{name}</div>
                      <div style={Object.assign({}, styles.branch, styles.sameRow)}>{branch}</div>
                    </a>
                <span style={[defStyle.pseudoAfter]} />
            </div>
        );
    }
}

export default Radium(NavbarHeader)
