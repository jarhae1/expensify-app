// Get visible expenses
import moment from 'moment'

export default (expenses, { text, sortBy, startDate, endDate,sortToggle }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'): true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date' && !sortToggle) {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if(sortBy === 'date' && sortToggle){
        return b.createdAt < a.createdAt ? 1 : -1;
      } else if (sortBy === 'amount' && !sortToggle) {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy ==='amount' && sortToggle){
        return b.amount < a.amount ? 1 : -1;
      }
    });
  };
  