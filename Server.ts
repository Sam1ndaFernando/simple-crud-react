import express from 'express';
import customerRoutes from "./routes/customer-routes";

const port: number = 3000;
const app = express();

app.use(express.json());
app.use('/customer',customerRoutes)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});


