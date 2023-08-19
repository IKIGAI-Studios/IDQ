import Express from "express";

const app = Express();
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
