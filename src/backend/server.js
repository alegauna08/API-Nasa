const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PUERTO = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

function limpiarHtml(texto) {
  if (!texto) return "";
  return texto
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

app.get("/api/nasa", async (req, res) => {
  try {
    console.log("Consultando imagen del día en NASA Science...");

    const respuesta = await fetch(
      "https://science.nasa.gov/wp-json/wp/v2/apod-basic",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
        },
      }
    );

    if (!respuesta.ok) {
      return res.status(respuesta.status).json({
        error: `La API de la NASA respondió con código ${respuesta.status}`,
      });
    }

    const lista = await respuesta.json();
    const hoy = Array.isArray(lista) ? lista[0] : lista;

    if (!hoy) {
      return res.status(404).json({ error: "No se encontraron datos hoy." });
    }

    const datosDelDia = {
      title: hoy.title,
      date: hoy.date,
      explanation: limpiarHtml(hoy.explanation),
      url: hoy.hdurl || hoy.url,
      hdurl: hoy.hdurl,
      media_type: hoy.media_type,
      copyright: limpiarHtml(hoy.copyright),
    };

    res.json(datosDelDia);
  } catch (error) {
    console.error("Error al consultar la API de la NASA:", error.message);
    res.status(500).json({ error: "Error interno al conectar con la NASA" });
  }
});

app.listen(PUERTO, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PUERTO}`);
});
