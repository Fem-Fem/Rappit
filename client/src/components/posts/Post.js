import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import commentsContainer from '../../containers/commentsContainer';


const Post = ({post: {id, title, content, user_id}, deletePost}) => {
	return (
		<div>
		<li>
		<Router>
			<div>
			<Link to={`/${id}`}>{title}</Link>
			<Route path={`/${id}`} component={commentsContainer}/>
			</div>
		</Router>
				<button onClick={() => deletePost(id)}>Delete</button>
			</li>
		</div>
	)
}

export default Post