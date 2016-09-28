import React from 'react';
import {
  Panel,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import RichTextEditor from 'react-rte';
import './comment.css';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {name: 'React'},
      value: RichTextEditor.createEmptyValue(),
      submitDisabled: true
    }
  }

  onChange(value) {
    this.setState({
      value: value,
      submitDisabled: !value._editorState.getCurrentContent().hasText()
    });
  }

  submitComment() {
    console.log(this.state.value.toString('html'));
    let comment = {
      author: this.state.user.name,
      content: this.state.value.toString('html'),
      createdTime: Date.now()
    };
    this.setState({
      value: RichTextEditor.createEmptyValue(),
      submitDisabled: true
    });
    this.props.onCommentSubmit(comment);
  }
  
  render() {
    return (
      <div className="commentItem commentForm">
        <Row>
          <Col sm={1}>
            <div>
              <a href="home">
                <img
                  className="headImg" 
                  width="48px" 
                  height="48px"
                  src="https://facebook.github.io/react/img/logo.svg" 
                />
              </a>
            </div>
          </Col>
          <Col sm={8}>
            <Panel header={<h4>{this.state.user.name}</h4>}>
              <RichTextEditor 
                className="commentRte"
                blockStyleFn="commentRteContent"
                placeholder="Leave a comment"
                value={this.state.value}
                onChange={this.onChange.bind(this)} 
              />
              <Button
                className="submitBtn"
                onClick={this.submitComment.bind(this)}
                disabled={this.state.submitDisabled} bsStyle="success">
                <strong>Comment on this article</strong>
              </Button>
            </Panel>
          </Col>
        </Row>
      </div>
    )
  }


}

CommentForm.propTypes = {
  onCommentSubmit: React.PropTypes.func.isRequired
}

export default CommentForm;