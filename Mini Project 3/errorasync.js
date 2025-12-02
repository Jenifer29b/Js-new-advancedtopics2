class ApiError extends Error {
  constructor(message) {
    super(message), (this.name = "ApiError");
  }
}

function FetchWeather(city) {
  return new Promise((resolve, reject) => {
    let random = Math.random() * 2;
    let time = new Date().toLocaleTimeString();

    console.log(`City Data is Fetching ..... ${city}`);
    setTimeout(() => {
      if (random > 1.5) {
        resolve(`${city} is Too Sunny .. ${time}`);
      } else if (random < 1.49) {
        resolve(`${city} is Too Rainy.... ${time}`);
      } else {
        reject(new ApiError("Weather API Error"));
      }
    }, 1000);
  });
}

function FetchQuotes(quotes) {
  return new Promise((resolve, reject) => {
    console.log("Fetching Quotes....");
    let date = new Date().toLocaleDateString();
    setTimeout(() => {
      let random = Math.random() * 2;
      if (random > 1.5) {
        resolve(`Quotes : ${quotes} ${date} `);
      } else if (random < 1.49) {
        resolve(`Quotes : ${quotes} ${date}`);
      } else {
        reject(new Error("Fetch Quotes Error"));
      }
    }, 2000);
  });
}

async function runprocess() {
  try {
    let Weather = await FetchWeather("Chennai");
    console.log(Weather);
    let Quotes = await FetchQuotes("Keep Going..");
    console.log(Quotes);
  } catch (error) {
    if (error instanceof ApiError) {
      console.log("Name", error.name);
      console.log("Message", error.message);
    } else {
      console.log("Name", error.name);
      console.log("Message", error.message);
    }
  } finally {
      console.log("Consoled Everything")
  }
}
runprocess();
