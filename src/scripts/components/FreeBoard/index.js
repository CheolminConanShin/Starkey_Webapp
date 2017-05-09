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
                apiKey: "AIzaSyCiSpMJKJGFvk5ftgLyP8_dUwF8qU7y6g4",
                databaseURL: "https://starkey-web.firebaseio.com/"
            }

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }

    render() {
        return (
            <div>
                <TitleHeader text='문의하기'/>
                <ThreadDisplay database={this.database}/>
            </div>
        );
    }
}
