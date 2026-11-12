import { useState, useEffect } from "react";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:3001";

export function useNasaImage() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function solicitarImagen() {
    const res = await fetch(`${BACKEND_URL}/api/nasa`, {
      headers: { "ngrok-skip-browser-warning": "true" },
    });

    if (!res.ok) {
      throw new Error("Error al conectar con el servidor");
    }

    return res.json();
  }

  useEffect(() => {
    let cancelado = false;

    solicitarImagen()
      .then((json) => {
        if (!cancelado) setDatos(json);
      })
      .catch(() => {
        if (!cancelado) setError("No se pudo cargar la imagen. Revisa la conexión.");
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => {
      cancelado = true;
    };
  }, []);

  async function reintentar() {
    setCargando(true);
    setError("");

    try {
      setDatos(await solicitarImagen());
    } catch {
      setError("No se pudo cargar la imagen. Revisa la conexión.");
    } finally {
      setCargando(false);
    }
  }

  return { datos, cargando, error, reintentar };
}
