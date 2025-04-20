const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const CategoriesRouter = require("./routes/categories");
const morgan = require("morgan");

dotenv.config(); // load file .env

// Middleware
app.use(express.json()); // ini built-in middleware
// app.use((req, res, next) => {
//   // middleware untuk menampilkan request method dan url
//   req.requestTime = new Date().toISOString(); // ambil waktu request
//   next(); // lanjutkan ke middleware berikutnya
// });

app.use(morgan("dev"));
app.use(cors());

// Routing
app.use("/api/v1/categories", CategoriesRouter); // gunakan router categories pada endpoint /api/v1/categories

// Server
const port = process.env.PORT; // ambil port dari environment variable atau gunakan port 3000 jika tidak ada
app.listen(port, () => {
  // jalankan server pada port 3000
  console.log(`Server is running at http://localhost:${port}`); // tampilkan pesan jika server berhasil dijalankan
}); // jalankan server pada port 3000
