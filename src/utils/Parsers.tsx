/* 
Parse UTC to IST time
*/

export const parseDate = (date: Date) => {
  if (!date) {
    return "NULL";
  }
  var utcDate = date;
  var localdate = new Date(utcDate);
  return localdate.toString();
};
