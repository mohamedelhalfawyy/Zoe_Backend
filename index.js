const express = require('express');
const app = express();

require('./Startup/logging')();
require("./startup/cors")(app);
require('./Startup/routes')(app);
require('./Startup/db')();
require('./Startup/config')();
require('./Startup/validation')();

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`I am listening on port ${port}...`));