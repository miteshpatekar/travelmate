
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
 // res.sendfile('views/index.html');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  console.log("hellooo "+name);
  res.render('partials/' + name);
};