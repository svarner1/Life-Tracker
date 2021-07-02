import Post from "../Activity/Activity"
import NewActivityForm from "../NewPostForm/NewPostForm"
import "./Home.css"

export default function Home({ user, isFetching, activityItems, addActivity, error }) {
  return (
    <div className="Home">
      <h1 className="intro">Actvity Feed</h1>

      <NewActivityForm user={user} addPost={addActivity} />

      <div className="feed">
        {error ? <h2 className="error">{error}</h2> : null}
        {isFetching ? <h2>Loading...</h2> : null}
        {activityItems?.map((activityItem) => (
          <Post post={activityItem} key={activityItem.id} user={user} />
        ))}
      </div>
    </div>
  )
}