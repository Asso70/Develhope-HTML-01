function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const players = ["Tina", "Jorge", "Julien"];

function getResults() {
  players.forEach((ele) => {
    (async () => {
      try {
        const resolve = await(luckyDraw(ele));
        console.log(resolve);
      }
      catch(err) {
        console.log(err);
      }
    })();
  });
}

getResults();