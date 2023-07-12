import './UserCard.css'

const UserCard = ({name, imgId, text}) => {
   return ( 
      <div className='user-container'>
         <div className="user-image bg-clr-neutral-300" style = {{
            backgroundImage: `url(https://source.unsplash.com/${imgId})`,
         }}></div>
         <div className="user-text">
            <p className='fs-subtitle1 ff-spline fw-bold'>{text}</p>
         </div>
         <div className="user-name fs-subtitle2 ff-spline">{name}</div>
      </div>
    );
}
 
export default UserCard;