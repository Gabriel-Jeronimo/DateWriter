const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
const days = [
    "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
    "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth",
    "Twenty-First", "Twenty-Second", "Twenty-Third", "Twenty-Fourth", "Twenty-Fifth", "Twenty-Sixth", "Twenty-Seventh", "Twenty-Eighth", "Twenty-Ninth", "Thirtieth", "Thirty-First"
]



function generateRandomDate() {
    const from = new Date(1970, 1, 1)
    const to = new Date()
  
    const date = new Date(
        from.getTime() +
          Math.random() * (to.getTime() - from.getTime()),
      ).toISOString();
    
    return date.split("T")[0]
  }
  
  function dateToExtense(date) {
      const [year, month, day] = date.split("-");
  
      const monthExtense = months[Number(month) - 1];
      const dayExtense = days[Number(day) - 1];
    
      return `${monthExtense} ${dayExtense}, ${year}`;
  }
  




function init() {
    const randomDate = generateRandomDate();
  
    console.log(randomDate);
    console.log(dateToExtense(randomDate));
}