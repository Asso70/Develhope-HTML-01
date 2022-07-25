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

const players = ["Joe", "Caroline", "Sabrina"];

function play(i) {
  if(i === players.length) return;
  luckyDraw(players[i]).then((value) => {
    console.log(value);
    play(i + 1);
    })
  .catch((err) => {
    console.log(err);
    play(i + 1);
  });
}

play(0);