import Post from "./components/Post"
import PageCard from "./components/PageCard"
import UseFetch from "./Hoocs/UseFetch"
import { useEffect, useState } from "react"
import { pageNumberContext } from "./Context/PageNumberContext"

function App() {

  const [posts, isPending, error] = UseFetch('https://jsonplaceholder.typicode.com/posts')
  const [mainPage, setMainPage] = useState(1)
  const [showPosts, setShowPosts] = useState([])
  const [pagesCount, setPagesCount] = useState([])

  useEffect(() => {
    if (posts) {
      setShowPosts([])

      for (let i = ((mainPage * 5) - 5); i < (mainPage * 5); i++) {
        setShowPosts(prevPosts => {
          return [...prevPosts, posts[i]]
        })
      }

      const pages = Array.from(Array(posts.length / 5), (x, index) => index + 1)
      setPagesCount(pages)
    }
  }, [posts , mainPage])

  return (
    <>
      <div className="container">
        <div className="w-full h-fit bg-slate-500 my-10 rounded-md overflow-hidden divide-y-2">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {showPosts && showPosts.map(post => <Post {...post} key={post.id} />)}
        </div>
        <div className="flex gap-2 justify-center">
          <pageNumberContext.Provider value={setMainPage}>
            {
              pagesCount.map(number => <PageCard number={number} key={number} />)
            }
          </pageNumberContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App
