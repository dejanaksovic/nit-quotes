import { useNavigate } from 'react-router-dom';
import './SectionCard.css'

const SectionCard = ({imgId, title, content, searchParams}) => {
   const navigate = useNavigate()
   return ( 
      <div className="section-image-container"
      onClick = { () =>{
         navigate(`/quotes?${searchParams}`)
      }}>
         <div className="section-image" style={{
            backgroundImage: `url(https://source.unsplash.com/${imgId})`
         }}/>
         <div className="section-title">
            <h3 className="fs-header3 ff-wix fw-bold">{title}</h3>
         </div>
         <div className="ff-spline section-content">
            <p className="fs-subtitle1 ff-spline">{content}</p>
         </div>
      </div>
    );
}
 
export default SectionCard;