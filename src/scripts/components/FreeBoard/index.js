import React from 'react'
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import TitleHeader from '../TitleHeader'
import firebase from 'firebase/app';
import 'firebase/database';
global.jQuery = require('jquery');

export default class FreeBoard extends React.Component {
    constructor(props) {
        super(props);
        const config =
            {
                apiKey: "AIzaSyC_cBLBL8CIr4ZidW_L03_XXxMcnqbF-OU",
                databaseURL: "https://starkey-v2.firebaseio.com/"
            }

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }

    render() {
        return (
            <div>
                <TitleHeader text='무엇이든 물어보세요'/>
                <ThreadDisplay database={this.database}/>
            </div>
        );
    }
}
