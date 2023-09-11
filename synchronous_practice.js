function fetchDataSync() {
    // Start measuring time
    console.time("Synchronous Approach");
  
    const Api1 = fetchFromApi1();
    const Api2 = fetchFromApi2();
    const Api3 = fetchFromApi3();
  
    console.log("Data from API 1:", Api1);
    console.log("Data from API 2:", Api2);
    console.log("Data from API 3:", Api3);
  
    // Stop measuring time
    console.timeEnd("Synchronous Approach");
  }
  
  function fetchFromApi1() {
    console.log("Fetching data from API-1 10 seconds required");
    const result = fetchDataFromApi(10);
    return result;
  }
  
  function fetchFromApi2() {
    // Simulate API call taking 5 seconds
    console.log("Fetching data from API-2 5 seconds required");
    const result = fetchDataFromApi(5);
    return result;
  }
  
  function fetchFromApi3() {
    console.log("Fetching data from API-3 7seconds required");
    const result = fetchDataFromApi(7);
    return result;
  }
  
  function fetchDataFromApi(seconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data fetched in ${seconds} seconds`);
      }, seconds * 1000);
    });
  }
  // function fetchDataFromApi(seconds) {
  //   const delay = seconds * 1000; 
   //   const start = Date.now(); // Get the current timestamp
  //   while (Date.now() - start < delay) {
  //   }
    //   return `Data fetched in ${seconds} seconds`;
  // }


  fetchDataSync();