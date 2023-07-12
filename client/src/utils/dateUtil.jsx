export const getDateRepresantableFormat = (date) => {
   const newDate = new Date(date)

   return `${newDate.getDay()}. ${newDate.getMonth()}. ${newDate.getFullYear()}.`
}