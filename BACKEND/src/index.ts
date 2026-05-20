import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes.js";
import speakerRoutes from "./routes/speakerRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/events", eventRoutes);
app.use("/speakers", speakerRoutes);
app.use("/categories", categoryRoutes);

// jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di port http://localhost:${port}`);
});

