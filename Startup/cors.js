const cors = require("cors");

module.exports = function(app) {
  app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));
};
