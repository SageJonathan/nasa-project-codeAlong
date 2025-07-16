const http = require("http");
const mongoose = require('mongoose');
const app = require("./app");

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL= 'mongodb+srv://dev:rkDxUkce5rUDejLC@cluster0.ndzj9q2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const server = http.createServer(app);

mongoose.connection.once('open', () =>{
  console.log('MongoDB Connection Ready')
});

mongoose.connection.on('error', (error) =>{
  console.error(error)
});

async function startServer (){
  await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

server.listen(PORT, () => {
  console.log(`Lisening on PORT: ${PORT} `);
});
}

startServer();

