const controller = require("../controllers/currency.controller");
const { isAdmin, verifyToken } = require("../middlewares/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get('/api/curr/allCurr',[verifyToken],controller.getAllCurrencies);
  //app.get('/api/curr/allCurr',controller.getAllCurrencies);
  
  app.get('/api/curr/allCurrEdit',[verifyToken,isAdmin],controller.getAllCurrencies);

  app.post('/api/curr/addCurr',[verifyToken,isAdmin],controller.addNewCurrency);

  app.put('/api/curr/currForEdit/:_id',[verifyToken,isAdmin],controller.editCurrency);

}