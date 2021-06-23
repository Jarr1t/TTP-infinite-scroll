import './App.css';
import {useState, useEffect, useRef} from 'react'
import PostCard from './Components/PostCard'
import Loader from './Components/Loader'

function App() {
  const [data, setData] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const endPage = useRef()

  useEffect(() => {
    fetch("http://localhost:3006/data")
    .then(res => res.json())
    .then(data => {setData(data); setLoading(true)})
  },[])

  let postsLength = 6

  function addPosts(){
    if(postsLength <= data.length + 6){
      setPosts(p => data.slice(0, postsLength))
      postsLength += 6
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(loading){
      const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
          addPosts()
        }
      }, {threshold: 1})
      observer.observe(endPage.current)
    }
  },[loading])

  return (
    <div className="App">
      {posts.map(post => <PostCard post={post} />)}
      {loading ? <Loader endPage={endPage} /> : null}
    </div>
  );
}

export default App;
