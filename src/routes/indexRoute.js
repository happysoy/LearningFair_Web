const index = require("../controllers/indexController");
module.exports = function(app) {

    app.get('/', index.login);

    //app.post('/', index.login);
    
    app.post('/loginProcess', index.loginProcess);

    app.get('/main', index.main);

    app.get('/class/:idx', index.class);

    app.get('/hashtag', index.hashtag);

    app.get('/congratulate', index.congratulate);

    app.get('/awards',index.awards);
}