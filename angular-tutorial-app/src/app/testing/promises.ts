export const promisesTest = function(){

  const simple = (result) => new Promise((resolve)  => resolve(result));

  const randomReject = (result) => new Promise((resolve: any, reject)  => Math.random() > 0.5 ? resolve(result
    ) : reject());


  const wait = (ms) => new Promise((resolve)  => setTimeout(() => {
    resolve(ms);
  }, ms));

  const waitAndLog = (ms, message = "test message") => new Promise((resolve)  => setTimeout(() => {
    console.log(message);
    resolve(ms);
  }, ms));

    console.log('start');
    const waitAndReject = (ms) => new Promise((_, reject)  => setTimeout(reject , ms));

    // REJCET TEST
    // wait(1000).then((res) => {
    //   console.log('works', res);
    //   throw 'error';
    //   return waitAndReject(1000);
    // }).then((res) => console.log('works2', res))
    // .catch(() => console.log('was rejectedd'));

    // CHAINING TEST
    waitAndLog(100, 'first promise').then(() => waitAndLog(100, 'second promise')).then(() => console.log('end of chain'));

    setTimeout(() => console.log('set timeout log'), 0);

    simple('ok').then(res => console.log('simple promise result: ', res));

    randomReject('ok').then(res => console.log('resolved :)')).catch(() => console.log('error'));
    randomReject('ok').then(res => console.log('resolved :)')).catch(() => console.log('error'));

    console.log('end');
}

