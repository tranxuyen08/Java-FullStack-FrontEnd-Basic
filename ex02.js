const color =  (...args) =>({
  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
});
function myColor() {
  console.log(color('error').red);
  console.log(color('hi').green);
  console.log(color('warning').yellow);
  console.log(color('infor').blue);
  console.log(prompt('Enter your age'))
  console.log(confirm('Are you sure your age'))
  alert("amazing good job main")
}