import React from 'react'
import { Link} from "react-router-dom";
import '../post.css'

const Footer = () => {
	return (
		<div>
			<div id="footer">
				<Link to='/logout'>Logout</Link>
			</div>
		</div>
	)
}

export default Footer
