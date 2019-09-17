import app from './api';
import { API_PORT } from './constants'

app.listen(API_PORT, () => {
    console.log(`Server runnign on Port ${API_PORT}`);
});