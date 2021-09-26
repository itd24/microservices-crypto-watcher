import cron from "node-cron";

cron.schedule('*/1 * * * * *', () => {
   console.log("cron running...");
});