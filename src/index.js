import Express from "express";
import { router as pages } from '../routes/pages.js'
import { router as session } from '../routes/session.js'
 
const app = Express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

app.use('/pages', pages); 
app.use('/session', session);
app.set('view engine', 'ejs');