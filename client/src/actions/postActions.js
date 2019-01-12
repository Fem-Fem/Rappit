const baseUrl = 'http://localhost:3000'


export const fetchPosts = () => {
	fetch(`${baseUrl}/posts`)
	.then(response => response.json())
	.then(posts =>dispatch({
		type: 'GET_POSTS',
	}))
	.catch(err => err)
}

class App extends Component {
  componentDidMount() {
    window.fetch('api/drinks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
}