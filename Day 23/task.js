//callback:

function Playvedio(name, callback) {
  console.log("Song Starting...");

  setTimeout(() => {
    console.log("Getting starts..", name);
    callback(name);
  }, 2000);
}
Playvedio("Mp3 vedio", (name) => {
  console.log("Song Playing", name);
});

//Promise

function Playsong(name1) {
  return new Promise((resolve, reject) => {
    console.log("Song Fetching...");

    setTimeout(() => {
      if (!name1) {
        reject();
      } else {
        console.log("Song starts...");
        resolve(name1);
      }
    }, 2000);
  });
}

Playsong("")
  .then((name1) => console.log("Song Started...", name1))
  .catch(() => console.log("error occurred"));
