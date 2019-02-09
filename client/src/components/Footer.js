import React from 'react'
import { Link} from "react-router-dom";
import '../footer.css'

const Footer = () => {
	return (
		<div>
			<div id="footer">
				<Link to='/logout'>
					<button id="logout">Logout!</button>
				</Link>
			</div>
		</div>
	)
}

export default Footer
