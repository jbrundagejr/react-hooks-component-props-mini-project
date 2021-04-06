import Article from "./Article"
import blogData from "../data/blog"

function ArticleList() {
   const Articles = blogData.posts.map(post => {
       return (
        <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        />
       )
   })
  
    return(
        <main>
            {Articles}
        </main>
    )
}

export default ArticleList