import React from 'react';
import ReactDOM from 'react-dom';

import AddCommentComponent from './AddCommentComponent';

class CommentComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="comment-container">
				{this.props.children}
			</div>
		);
	}

}

export default CommentComponent;