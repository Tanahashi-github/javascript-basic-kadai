const date = new Date();
const today = [
  date.getUTCFullYear(),
  date.getUTCMonth() + 1,
  date.getUTCDate(),
];

console.log(today[0] + '年' + today[1] + '月' + today[2] +'日');

