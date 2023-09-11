async function fetchDataAsync() {
  // Start measuring time
  console.time("Asynchronous Approach");

  const [Api1, Api2, Api3] = await Promise.all([
    fetchFromApi1(),
    fetchFromApi2(),
    fetchFromApi3()
  ]);

  console.log("Data from API 2:", Api2);
  console.log("Data from API 3:", Api3);
  console.log("Data from API 1:", Api1);

  // Stop measuring time
  console.timeEnd("Asynchronous Approach");
}

async function fetchFromApi1() {
  console.log("Fetching data from API-1 10 seconds required");
  const result = await fetchDataFromApi(10);
  return result;
}

async function fetchFromApi2() {
  console.log("Fetching data from API-2 5 seconds required");
  const result = await fetchDataFromApi(5);
  return result;
}

async function fetchFromApi3() {
  console.log("Fetching data from API-3 7 seconds required");
  const result = await fetchDataFromApi(7);
  return result;
}
function fetchDataFromApi(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data fetched in ${seconds} seconds`);
    }, seconds * 1000);
  });
}

fetchDataAsync();
