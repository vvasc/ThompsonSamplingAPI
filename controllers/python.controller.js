
module.exports.ths =  function (data) {
  var click = new Array();
  var n_click = new Array();
  data.forEach(d => {
    click.push(d.click);
    n_click.push(d.n_click);
  });
//  const { spawn } = require('child_process');
 // const child = spawn('python', ['Algorithm.py'], (error, stdout, stderr) => {
  //if (error) {
   // throw error;
 // }
  //console.log(stdout);
  //});
  //  var process = require("child_process").spawn('python',["./Algorithm.py", click, n_click]);

    //process.stdout.on('data', (data) => {
     //   console.log('teste');
      //  console.log(data.toString());
    //});
  // spawn_python.js
//var util = require("util");

//var spawn = require("child_process").spawn;
//var process = spawn('python',["Algorithm.py"]);

//util.log('readingin')


//process.stdout.on('data',function(chunk){
  //  console.log('teste');
   // var textChunk = chunk.toString('utf8');// buffer to string
   // util.log(textChunk);
//});

  //function callbackFunc(response) {
   // console.log(response);
  //}
  var spawn = require('child_process').spawn,
  py    = spawn('python', ['Algorithm.py']),
  data = [1,2,3,4,5,6,7,8,9],
  dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();
}