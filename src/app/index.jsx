import { ScrollView, StyleSheet, Text } from "react-native";
import { useNasaImage } from "../hooks/useImagen";
import TarjetaNasa from "../components/tarjeta";
import EstadoCarga from "../components/estadoCarga";

export default function Index() {
  const { datos, cargando, error, reintentar } = useNasaImage();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Imagen Astronómica del Día</Text>

      <EstadoCarga
        cargando={cargando}
        error={error}
        onReintentar={reintentar}
      />

      {!cargando && !error && datos && <TarjetaNasa datos={datos} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#10131a",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
});
