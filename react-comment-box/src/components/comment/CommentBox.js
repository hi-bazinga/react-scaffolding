import React from 'react';
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import CommentForm from './CommentForm.js';
import CommentItem from './CommentItem.js';

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    }
  }

  onCommentSubmit(comment) {
    let commentList = this.state.commentList;
    commentList.push(comment);
    this.setState({commentList: commentList});
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={4}>
            <h4>{this.state.commentList.length} comments in total</h4>
          </Col>
        </Row>

        <div>
          {this.state.commentList.map((comment, i) => {
            return (
              <CommentItem key={i} comment={comment}/>
            )
          })}
          <CommentForm onCommentSubmit={this.onCommentSubmit.bind(this)}/>
        </div>
      </div>
    )
  }

}

export default CommentBox;