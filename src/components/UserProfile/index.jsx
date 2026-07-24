import './index.css'

const UserProfile=(props)=>{
    const {userDetails}=props;
    const {imageUrl,name,role}=userDetails;


    return (
    <li className='user-card'>
        <img src={imageUrl} alt={name} className="profile-img"/>
        <div className='user-info'>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    </li>
)
}
export default UserProfile