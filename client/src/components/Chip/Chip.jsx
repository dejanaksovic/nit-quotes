import './Chip.css'

const Chip = ({children, className}) => {
   return ( 
      <div className={`chip-container ${className}`}>
         <div className="chip-content">
            <p className='ff-spline fs-subtitle2'>{children}</p>
         </div>
      </div>
    );
}
 
export default Chip;