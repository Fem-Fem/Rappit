import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import commentsContainer from '../containers/commentsContainer';


const Post = ({post: {id, title, content}, deletePost}) => {
	return (
		<div>
			<li>
				<Link to="/login">{title}</Link>
				<Route path="/{title}" component={commentsContainer}/>
				<button onClick={() => deletePost(id)}>Delete</button>
			</li>
		</div>
	)
}

export default Post