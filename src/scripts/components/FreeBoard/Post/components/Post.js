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
  },
  replyButton: {
    float: "right",
    marginTop: "1em"
  }
}

export default class Post extends React.Component {
  constructor(props) {
      super(props)
      console.log(this.props.singlePost.key)
      this.database = this.props.database.ref().child('post').child(this.props.singlePost.key)
      this.state = {
        password: '',
        content: this.props.singlePost.content,
        showPasswordForm: true,
        admin: false
      }
      this.handleReply = this.handleReply.bind(this)
      this.replyFormChange = this.replyFormChange.bind(this)
      this.handlePostEditorPasswordChange = this.handlePostEditorPasswordChange.bind(this)
      this.checkButtonClick = this.checkButtonClick.bind(this)
  }

  checkButtonClick() {
    if(this.state.password == this.props.singlePost.hiddenPassword){
      this.setState({
        content: this.props.singlePost.hiddenContent,
        showPasswordForm: false,
        admin: false
      })
    } else if(this.state.password == 'gncs0191') {
      this.setState({
        content: this.props.singlePost.hiddenContent,
        showPasswordForm: false,
        admin: true
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

  handleReply() {
    const replyMessage = this.state.replyMessage
    this.database.child('replyMessage').set(replyMessage)
  }

  replyFormChange(ev) {
    this.setState({
      replyMessage: ev.target.value
    })
  }

  render() {
    return (
      <div className="panel panel-default" style={styles.postBody}>
        <div className="panel-body">
            <div style={styles.content} key={this.props.singlePost.key}>
              {this.state.content}
              {this.state.showPasswordForm ? <input className='well-sm' style={Object.assign({}, styles.inputForm, styles.passwordForm)} value={this.state.password} placeholder="비밀번호" onChange={this.handlePostEditorPasswordChange}></input> : null}
              {this.state.showPasswordForm ? <button style={styles.checkButton} onClick={this.checkButtonClick} className="btn btn-success">답변확인</button> : null}
              {this.state.showPasswordForm ? null : <div className='well'>{this.state.replyMessage ? this.state.replyMessage : '답변을 준비 중 입니다.'}</div>}
            </div>
            {this.state.admin ?
              <div>
                <textarea className="form-control" value={this.state.replyMessage} onChange={this.replyFormChange}/>
                <button className="btn btn-primary" style={styles.replyButton} onClick={this.handleReply}>답변하기</button>
              </div> :
              null
            }
        </div>
      </div>
    )
  }

  componentDidMount() {
    var me = this
    this.database.child('replyMessage').once('value', function(snapshot) {
      me.setState({
        replyMessage: snapshot.val()
      })
    })
  }
}
