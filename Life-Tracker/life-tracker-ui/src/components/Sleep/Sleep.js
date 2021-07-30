//import Activity from "../Activity/Activity"
//import NewActivityForm from "../NewActivityForm/NewActivityForm"
import "./Sleep.css"

export default function Sleep({ user, setUser}) {
  return (
    <div className="sleepPage">
      {user?.email ? (
              <h1> Sleep Feed </h1>
              ) : (
                <>
                  <h1 className="unauthenticatedTitle"> Log in to see this tracked activity.</h1>
                </>
       )}
    </div>
  )
}