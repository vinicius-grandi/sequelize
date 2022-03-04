import express from 'express';
const port = (process.env.PORT || 3000);
import routes from './routes';
import db from './models';
const app = express();

app.use(express.json());
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`app listening to port ${port}`));
});
