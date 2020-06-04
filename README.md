### Run Client Side and Server Side with one command
npm run pkg:install
npm run db:seed
npm run dev:start

### Client Side
npm install
npm run

### Server Side
cd server
npm install
npm run server

### Seed Mongodb
cd server/data
mongoimport -d time -c Time --jsonArray -f data.json

### What it does?
This project takes the time of different countries from database and convert them to relevant timezone of user.