
/*
 * GET home page.
 */

exports.index = function(req, res){
    var viewModel = controller.doStuff();



  res.render('index', {data: { title: 'Express'} });
};