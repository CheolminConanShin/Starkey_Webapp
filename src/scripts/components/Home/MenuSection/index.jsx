import React from 'react'
import ResponsiveHeader from '../../ResponsiveHeader'

const styles = {
    container: {
        width: '100%',
        backgroundImage: 'url("./image/NewMenuSection/header-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '420px',
        padding: '0vw 6vw'
    },
    title: {
        display: 'inline-block',
        fontSize: '42px',
        marginTop: '2vw',

    },
    titleBrand: {
        fontFamily: 'NanumBarunGothic',
        color: '#fdd189',
        marginLeft: '6.2vw',
        marginTop: '13vw'
    },
    titleBranch: {
        fontFamily: 'NanumBarunGothicBold',
        color: '#095985',
        marginLeft: '30px',
        marginTop: '13vw'
    },
    description: {
        fontFamily: 'NanumBarunGothicUltraLight',
        fontSize: '16px',
        color: '#e8f7fe',
        marginTop: '15px',
        marginLeft: '6.2vw'
    }
}

export default class MenuSection extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={Object.assign({}, styles.title, styles.titleBrand)}>스타키 보청기</div>
                <div style={Object.assign({}, styles.title, styles.titleBranch)}>파주센터</div>
                <div style={styles.description}>
                    최선과 정직 이 2가지의 마음으로<br/>
                    고객을 내 가족처럼 생각하고 모시겠습니다.
                </div>
            </div>
        )
    }
}