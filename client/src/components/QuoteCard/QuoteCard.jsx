import './QuoteCard.css'
import { getDateRepresantableFormat } from "../../utils/dateUtil";
import { FaAngleDown, FaAngleUp } from "../../../node_modules/react-icons/fa6"
import { getGradeInPercent } from "../../utils/mathUtil";
import Chip from '../Chip/Chip';

const QuoteCard = ({quote}) => {

   return (  
      <div className="quote-container bg-clr-neutral-300">
         <div className="action clr-primary fw-bold fs-body">
            <div className="icon-container">
               <FaAngleUp/>
            </div>
            <div className="grade">
               <p className="fs-body ff-wix"
                  style={{
                     color:`hsl(${getGradeInPercent(quote.upvotesCount, quote.downvotesCount)*1.2}, 100%, 40%)`
                  }}
               >{getGradeInPercent(quote.upvotesCount, quote.downvotesCount)}%</p>
            </div>
            <div className="icon-container">
               <FaAngleDown/>
            </div>
         </div>
         <div className="general-info">
            <div className="date">
            <p className="fs-subtitle2 clr-primary ff-spline">{getDateRepresantableFormat(quote.createdAt)}</p>
         </div>
         <div className="content">
            <p className="fs-body fw-bold clr-primary">{quote.content}</p>
         </div>
         <div className="autor">
            <p className="fs-subtitle1 clr-primary-muted align-right"> -{quote.author}</p>
         </div>
         <div className="tags"> 
            {
            quote?.tags?.map( tag => <Chip key={tag} delAction={() => {console.log('a');}}>
            {tag}
         </Chip> )
            }
         </div>
         </div>
      </div>
   );
}
 
export default QuoteCard;