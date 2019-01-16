import React from 'react'
import commentsContainer from '../../containers/commentsContainer';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Link} from "react-router-dom";
import '../../post.css'

const Post = ({post: {id, title, content, user_id}, deletePost, fetchPost}) => {
	return (
		<div>
		<li>
		<Router>
			<Switch>
				<div id="post">
					<Link to={`/${id}`} onClick={() => fetchPost(id)}>{title}</Link> - {content}
					<Route path={`/${id}`} component={commentsContainer}/>
				</div>
			</Switch>
		</Router>
				<button onClick={() => deletePost(id)}>Delete</button>
			</li>
		</div>
	)
}

export default Post