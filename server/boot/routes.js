// var request = require('request');
//
// var options = {
//   contentType: 'application/json',
//   url: 'https://orangopag.herokuapp.com/index.php/api/Transacoes'
// };
//
// module.exports = function(app) {
//   app.post('/api/makePayment', function(req, res) {
//     request.post(options, function(err, response, body) {
//       if (response.status === 200) {
//         console.error(err);
//         res.send({ ok: true });
//       }
//     });
//   });
// }
