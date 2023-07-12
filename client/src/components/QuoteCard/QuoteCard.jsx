import { getDateRepresantableFormat } from "../../utils/dateUtil";
import { FaArrowDown, FaArrowUp } from "../../../node_modules/react-icons/fa6"
import './QuoteCard.css'

const QuoteCard = () => {
   const quote = {
    id: "5697623d-c4f8-4631-a797-098bcd3751b8",
    content: `In three words I can sum up everything I've learned about life: it goes on.`,
    author: "Robert Frost",
    tags: ["life"],
    userId: "49d73d43-e1bc-46b4-88a6-d802d1cc9fe9",
    upvotesCount: 6,
    downvotesCount: 5,
    createdAt: "2020-07-12T11:25:35.090Z",
    upvotedBy: ["49d73d43-e1bc-46b4-88a6-d802d1cc9fe9"],
    downvotedBy: []
   }

   return (  
      <div className="quote-container bg-clr-neutral-300">
         <div className="date">
            <p className="fs-subtitle2 clr-primary ff-spline">{getDateRepresantableFormat(quote.createdAt)}</p>
         </div>
         <div className="content">
            <p className="fs-body fw-bold clr-primary">{quote.content}</p>
         </div>
         <div className="autor">
            <p className="fs-subtitle1 clr-primary-muted">{quote.author}</p>
         </div>
         <div className="author"></div>
         <div className="action clr-primary fw-bold fs-body">
            <div className="icon-container">
               <FaArrowUp/>
               </div>
            <div className="icon-container">
               <FaArrowDown/>
            </div>
         </div>
      </div>
   );
}
 
export default QuoteCard;