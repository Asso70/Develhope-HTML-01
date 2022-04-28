const promise: Promise<number> = new Promise<number>(function (resolve): void {
  return resolve(2);
});

promise.then(function(resolve: number): void {
  console.log(resolve);
});