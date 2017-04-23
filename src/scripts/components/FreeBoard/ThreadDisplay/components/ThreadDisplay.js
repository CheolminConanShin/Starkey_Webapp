import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';

class ThreadDisplay extends Component {
  constructor(props) {
    super(props);

    this.databaseRef = this.props.database.ref().child('post');
    this.addPost = this.addPost.bind(this);
    this.updateLocalState = this.updateLocalState.bind(this);

    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    const {updateLocalState} = this;
    this.databaseRef.on('child_added', snapshot => {
      const response = snapshot.val();
      updateLocalState(snapshot.key, snapshot.val());
    });
  }

  addPost(postBody) {
    // const postToSave = {postBody};
    this.databaseRef.push().set(postBody);
  }

  updateLocalState(responseKey, responseValue) {
    const posts = this.state.posts;
    const singlePost = {
      key: responseKey,
      hiddenContent: responseValue.content,
      hiddenPassword: responseValue.password,
      content: responseValue.name + '님께서 문의하신 내용입니다. 비밀번호를 입력해주세요.'
    }
    // const brokenDownPost = response.postBody.newPostBody.split(/[\r\n]/g);
    posts.unshift(singlePost);
    this.setState({
      posts: posts,
    });
  }

  render() {
    return (
      <div>
        <PostEditor addPost={this.addPost}/>
        {
          this.state.posts.map((post) => {
            return(<Post key={post.key} singlePost={post}/>)
          })
        }
      </div>
    );
  }
}

ThreadDisplay.propTypes = {
  database: React.PropTypes.object.isRequired
}
export default ThreadDisplay;
