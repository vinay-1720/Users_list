import UserProfile from "./components/UserProfile/index.jsx"
import "./App.css"

const userDetailsList=[
  {
  id:1,
  imageUrl:"https://picsum.photos/200",
  name:"Rahul",
  role:"Software Developer"
},
{
  id:2,
  imageUrl:"https://picsum.photos/200",
  name:"Vinay",
  role:"Software Developer"
},
{
  id:3,
  imageUrl:"https://picsum.photos/200",
  name:"Santhosh",
  role:"AI Developer"
},
{
  id:4,
  imageUrl:"https://picsum.photos/200",
  name:"Sathwik",
  role:"Java Developer"
}
]

const App=()=>(
  <div className="app-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem)=>(
        <UserProfile key={eachItem.id} userDetails={eachItem}/>
      ))}
    </ul>
  </div>
)
export default App