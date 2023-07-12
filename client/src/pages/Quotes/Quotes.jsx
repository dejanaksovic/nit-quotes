import { useEffect, useState } from "react";
import './Quotes.css'
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { useGetQuotes } from "../../hooks/useGetQuotes";
import { useQuotes } from "../../hooks/useQuotes";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useTags } from "../../hooks/useTags";
import Chip from "../../components/Chip/Chip";
import { useGetTags } from "../../hooks/useGetTags";

const Quotes = () => {
   const { loading, error, getQuotes } = useGetQuotes()
   const { loading: tagLoading, error: tagError, getTags } = useGetTags()
   const { quotes } = useQuotes()
   const [ currPage, setCurrPage ] = useState(1)
   const [filter, setFilter] = useState(null)
   const {tag} = useTags()
   const maxPage = 5
   const pageSize = 3

   useEffect( () => {
      const searchParams = {page: currPage, pageSize, filter}
      getQuotes(searchParams)
      
   },[])

   useEffect( () => {
      getTags()
      console.log(tag);
   }, [] )

   return ( 
      <div className="bg-clr-neutral-300 quotes-wrapper">
         <div className="quotes-container">
         <div className="filter">
            <p className="ff-wix fs-header3">Filter by tag: </p>
            <select name="" onChange={ e => {setFilter(e.target.value)} } id="">
            {
               tag?.map( tag => <option value={tag} key={tag}>{tag}</option> )
            }
            </select>
         </div>
            {
            loading ? 
            <div className="Loading container"> loading.... </div> :
            quotes?.map( quote => {
               return (<QuoteCard key = {quote.id} quote = {quote}/>)
            } )
         }
         </div>
         <div className="pagination">
            <div className="pag-item">
               <FaAngleLeft className="fs-subtitle1"
               onClick={ () => {
                  setCurrPage(( prevPag ) => {
                     return prevPag - 1 ? prevPag-1 : prevPag
                  })
               } }/>
               </div>
            {
               [currPage-1 || null, currPage, quotes?.length >= pageSize ? currPage+1 : null ].map( pag => {
                  return  pag && <div className="pag-item clr-primary fs-subtitle1 fw-bold"
                  onClick = { e => {
                     setCurrPage(pag)
                  } }
                  >{pag}</div>
               } )
            }
            <div className="pag-item">
               <FaAngleRight className="fs-subtitle1"
               onClick={ () => {
                  setCurrPage( prevPage => {
                     return prevPage + 1 <= maxPage ? prevPage + 1 : prevPage
                  } )
         } }/>
            </div>
         </div>
      </div>
    );
}
 
export default Quotes;