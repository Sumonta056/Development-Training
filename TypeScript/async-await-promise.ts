// Function returning a Promise
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched with TypeScript!");
    }, 2000);
  });
}

async function getData(): Promise<void> {
  try {
    const data: string = await fetchData();
    console.log(data); // "Data fetched with TypeScript!" after 2 seconds
  } catch (error) {
    console.error(error);
  }
}

getData();
