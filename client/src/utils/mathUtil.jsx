export const getGradeInPercent = (upvotes, downvotes) => {
   return Math.floor(upvotes/(upvotes+downvotes)*100)
}