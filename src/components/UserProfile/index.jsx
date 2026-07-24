import './index.css'

const UserProfile=(props)=>{
    const {userDetails,onDeleteUser}=props;
    const {imageUrl,name,role ,id}=userDetails;
    const onDelete=()=>{
        onDeleteUser(id);
    };

    return (
    <li className='user-card'>
        <img src={imageUrl} alt={name} className="profile-img"/>
        <div className='user-info'>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
        <button className='delete-btn' onClick={onDelete}> ✕ </button>
    </li>
)
}
export default UserProfile