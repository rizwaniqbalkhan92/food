function generateUniqueId() {
    // Get the current date and time
    const date = new Date();
  
    // Extract components of the date and time
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const milliseconds = ('00' + date.getMilliseconds()).slice(-3);
  
    // Generate a random number to ensure uniqueness
    const randomNum = Math.floor(Math.random() * 1000);
  
    // Combine all parts into a single unique ID string
    const uniqueId = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${randomNum}`;
  
    return uniqueId;
  }

  export default generateUniqueId