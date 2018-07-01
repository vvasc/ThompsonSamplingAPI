module.exports.ths =  function (data) {
  var click = new Array();
  var n_click = new Array();
  console.log(data);
  data.forEach(d => {
    click.push(d.click);
    n_click.push(d.n_click);
  });
}