const express = require('express');
// using require cause node js only has support for commonjs modules, not es2015 modules
// import will be used for the front end (react etc)

const app = express();

// route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});
            //thiskeyboardiswierd
app.listen(5000);
