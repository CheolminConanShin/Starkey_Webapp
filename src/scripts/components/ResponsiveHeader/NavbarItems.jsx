import React from 'react';
import Radium from 'radium';

class NavbarItems extends React.Component {
    displayName: 'Navigation list of items'

    getStyles() {
        let styles = {
            base: {
                listStyle: 'outside none none',
                paddingLeft: '0',
                boxSizing: 'border-box',
                fontSize: '23px',
                float: 'left',
                marginLeft: '77%',
                backgroundColor: 'black',
                position: 'absolute',
                zIndex: '1',

                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                    fontSize: '17px',
                    float: 'right',
                    marginLeft: '0px',
                    marginTop: '32px',
                    backgroundColor: 'rgba(0,0,0,0)',
                    position: 'relative'
                }
            },
            collapse: {
                paddingRight: '15px',
                paddingLeft: '15px',
                overflowX: 'visible',
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                borderColor: '#E7E7E7',
                boxShadow: '0px 1px 0px rgba(255, 255, 255, .1) inset',
                marginRight: '-15px',
                marginLeft: '-15px',
                maxHeight: '340px',
                boxSizing: 'border-box',
                display: 'none',

                '@media screen and (min-device-width: 768px) and (min-width: 768px)': {
                    marginRight: '0px',
                    marginLeft: '0px',
                    paddingRight: '0px',
                    paddingLeft: '0px',
                    height: 'auto',
                    paddingBottom: '0px',
                    display: 'block',
                    overflow: 'visible',
                    width: 'auto',
                    borderTopWidth: '0px',
                    borderTopStyle: 'none',
                    boxShadow: 'none',
                    overflowY: 'visible'
                }
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
        if (this.props.collapseIn) {
            styles.collapse.display = 'block';
            styles.collapse.overflowY = 'auto';
        }
        return styles;
    }

    onClickHandler(activeIndex) {
        this.setState({
            activeIndex: activeIndex
        });
    }

    renderChildren() {
        const {children} = this.props;
        const {activeIndex} = this.state;
        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child,
                {
                    index: index,
                    activeIndex: activeIndex,
                    parentCallBack: this.onClickHandler
                }
            );
        });
    }

    render() {
        const defStyle = this.getStyles();
        const {style} = this.props;
        return (
            <div ref="collapse" style={[defStyle.collapse]}>
                <span style={[defStyle.pseudoBefore]}/>
                <ul ref="navitems" style={[defStyle.base, style && style]}>
                    <span style={[defStyle.pseudoBefore]}/>
                    {this.renderChildren()}
                    <span style={[defStyle.pseudoAfter]}/>
                </ul>
                <span style={[defStyle.pseudoAfter]}/>
            </div>
        );
    }
}

export default Radium(NavbarItems)
