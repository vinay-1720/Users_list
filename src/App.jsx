import UserProfile from "./components/UserProfile/index.jsx"
import "./App.css"
import { Component } from "react"

const initialuserDetailsList=[
  {
  id:1,
  imageUrl:"https://randomuser.me/api/portraits/men/1.jpg",
  name:"Rahul",
  role:"Software Developer"
},
{
  id:2,
  imageUrl:"https://randomuser.me/api/portraits/men/3.jpg",
  name:"Vinay",
  role:"Software Developer"
},
{
  id:3,
  imageUrl:"https://randomuser.me/api/portraits/men/2.jpg",
  name:"Santhosh",
  role:"AI Developer"
},
{
  id:4,
  imageUrl:"https://randomuser.me/api/portraits/men/4.jpg",
  name:"Sathwik",
  role:"Java Developer"
},
{
  id:5,
  imageUrl:"https://randomuser.me/api/portraits/men/5.jpg",
  name:"Koushik",
  role:"Java Developer"
},
{
  id:6,
  imageUrl:"https://randomuser.me/api/portraits/men/6.jpg",
  name:"Arjun",
  role:"Python Developer"
}
]


class App extends Component{
  state={
    searchInput:"",
    userDetailsList:initialuserDetailsList
  };

  onChangeSearchInput=(event)=>{
    this.setState({
      searchInput:event.target.value
    })
  }

  onDeleteUser=(id)=>{
    const {userDetailsList}=this.state
    const filteredUsersData=userDetailsList.filter((each)=>
    each.id!==id
  );
  this.setState({
    userDetailsList:filteredUsersData
  })
  }

  render(){
    const {searchInput,userDetailsList}=this.state
    const searchresults=userDetailsList.filter((eachuser)=>
      eachuser.name.includes(searchInput)
    );
    return (

      <div className="app-container">
      <h1 className="title">Users List</h1>


        <input 
        type="search" 
        className="search-input"
        placeholder="Search"
        onChange={this.onChangeSearchInput}
        value={searchInput}
        />

        <ul className="user-list">
          {searchresults.map((eachItem)=>(
            <UserProfile 
            key={eachItem.id}
            userDetails={eachItem}
            onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}



export default App;