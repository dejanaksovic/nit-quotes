import './Footer.css'

import { FaInstagram, FaTwitch, FaTwitter } from '../../../node_modules/react-icons/fa6'

const Footer = ({className}) => {
   return ( 
      <div className={`footer-container ${className}`}>
         <div className="socials clr-primary fs-header1">
            <FaTwitter/>
            <FaInstagram/>
            <FaTwitch/>
         </div>
         <div className="copyright">
            <p className='fs-subtitle2 ff-spline'>C Aksović Dejan, 2023</p>
         </div>
      </div>
    );
}
 
export default Footer;