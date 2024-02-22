const express = require('express');
const app = express();
const port_1 = 200;
// const port_2 = 100;

// define express apps that run on port_1 and port_2
let app1, app2
app1 = express();
// app2 = express();

app1.get('/', (req, res)=>{
  res.json({"app_1":"1"});
})

// app2.get('/', (req, res)=>{
//   res.json({"app_2" : "2"});
// })

if (require.main === module) {
  // add the listen for the express app
  app1.listen(port_1, ()=> {
    console.log(`App1 is runnig on port ${port_1}`)
  })
  // app2.listen(port_2, ()=>{
  //   console.log(`App1 is running on port ${port_2}`)
  // })
}

module.exports = {
  app1,
  app2
};
