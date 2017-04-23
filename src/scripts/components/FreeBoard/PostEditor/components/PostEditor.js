import React, { Component } from 'react';

var styles = {
  postEditor: {
    margin: "1em 10%"
  },
  inputForm: {
    height: '34px',
    float: 'left',
    width: '20vw',
    marginTop: '1em',
    color: 'black'
  },
  passwordForm: {
    marginTop: '1em',
    marginLeft: '1em'
  },
  postEditorButton: {
    float: "right",
    marginTop: "1em"
  }
}

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      name: '',
      password: ''
    };

    this.handlePostEditorNameChange = this.handlePostEditorNameChange.bind(this)
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this)
    this.handlePostEditorPasswordChange = this.handlePostEditorPasswordChange.bind(this)
    this.createPost = this.createPost.bind(this);
  }

  handlePostEditorInputChange(ev) {
    this.setState({
      content: ev.target.value
    })
  }

  handlePostEditorNameChange(ev) {
    this.setState({
      name: ev.target.value
    })
  }

  handlePostEditorPasswordChange(ev) {
    this.setState({
      password: ev.target.value
    })
  }

  createPost() {
    this.props.addPost(this.state);
    this.setState({
      content: '',
      name: '',
      passowrd: ''
    });
  }

  render() {
    return (
      <div className="panel panel-default" style={styles.postEditor}>
        <div className="panel-body">
          <textarea className="form-control" value={this.state.content} onChange={this.handlePostEditorInputChange} />
          <input style={Object.assign({}, styles.inputForm)} className='well-sm' placeholder='고객성함' value={this.state.name} onChange={this.handlePostEditorNameChange}/>
          <input style={Object.assign({}, styles.inputForm, styles.passwordForm)} className='well-sm' placeholder='비밀번호' value={this.state.password} onChange={this.handlePostEditorPasswordChange}/>
          <button className="btn btn-primary" style={styles.postEditorButton} onClick={this.createPost}>질문하기</button>
        </div>
      </div>
    )
  }
}

PostEditor.propTypes = {
  addPost: React.PropTypes.any.isRequired
}

export default PostEditor;
