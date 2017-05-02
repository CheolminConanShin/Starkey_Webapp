import React from 'react';
import Radium from 'radium';

const defStyle = {
    navbar: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: '0px',
        position: 'absolute',
        width: '100%',
        display: 'block',
        boxSizing: 'border-box',
    },
    container: {
        marginRight: 'auto',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        width: '90%'
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

class Navbar extends React.Component {
    displayName: 'Navigation bar'

    constructor(props) {
        super(props)
        this.setState({
            collapseIn: false
        })

        this.renderChildren = this.renderChildren.bind(this)
        this.navbarToggle = this.navbarToggle.bind(this)
    }

    renderChildren() {
        const {children} = this.props;
        return React.Children.map(children, (child) => {
            return React.cloneElement(child,
                {
                    navbarToggle: this.navbarToggle,
                    collapseIn: this.state.collapseIn
                }
            );
        });
    }

    navbarToggle() {
        this.setState({collapseIn: !this.state.collapseIn});
    }

    render() {
        const {navStyle, contStyle} = this.props;
        return (
            <nav ref="navbar" style={Object.assign({}, defStyle.navbar, navStyle)}>
                <span style={[defStyle.pseudoBefore]}/>
                <div ref="container" style={[defStyle.container, contStyle && contStyle]}>
                    <span style={[defStyle.pseudoBefore]}/>
                    {this.renderChildren()}
                    <span style={[defStyle.pseudoAfter]}/>
                </div>
                <span style={[defStyle.pseudoAfter]}/>
            </nav>
        );
    }
}
export default Radium(Navbar)
