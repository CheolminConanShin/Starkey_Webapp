import React from 'react';

var styles = {
  postBody: {
    margin: "1em 10%"
  },
  content: {
    lineHeight: '34px',
    color: 'black'
  },
  checkButton: {
    float: 'right'
  },
  inputForm: {
    height: '34px',
    width: '20vw',
    color: 'black'
  },
  passwordForm: {
    marginLeft: '1em'
  }
}

export default class Post extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        password: '',
        content: this.props.singlePost.content,
        show: true
      }
      this.handlePostEditorPasswordChange = this.handlePostEditorPasswordChange.bind(this)
      this.checkButtonClick = this.checkButtonClick.bind(this)
  }

  checkButtonClick() {
    if(this.state.password == this.props.singlePost.hiddenPassword){
      this.setState({
        content: this.props.singlePost.hiddenContent,
        show: false
      })
    } else if(this.state.password == 'wjdvlfghk') {
      this.setState({
        content: this.props.singlePost.hiddenContent,
        show: false
      })
    } else {
      alert("비밀번호가 틀렸습니다")
    }
    this.setState({
      password: ''
    })
  }

  handlePostEditorPasswordChange(ev) {
    this.setState({
      password: ev.target.value
    })
  }

  render() {
    return (
      <div className="panel panel-default" style={styles.postBody}>
        <div className="panel-body">
            <div style={styles.content} key={this.props.singlePost.key}>
              {this.state.content}
              {this.state.show ? <input className='well-sm' style={Object.assign({}, styles.inputForm, styles.passwordForm)} value={this.state.password} placeholder="비밀번호" onChange={this.handlePostEditorPasswordChange}></input> : null}
              {this.state.show ? <button style={styles.checkButton} onClick={this.checkButtonClick} className="btn btn-success">답변확인</button> : null}
            </div>
        </div>
      </div>
    )
  }
}
