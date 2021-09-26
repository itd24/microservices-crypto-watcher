import cron from "node-cron";
import fetcher from './services/fetcher.js';

fetcher.data().then(d => console.log(d));

cron.schedule('*/10 * * * * *', async () => {
   let data = await fetcher.data();
   console.log(data);
});