import { Image, StyleSheet, Text, View } from "react-native";

export default function TarjetaNasa({ datos }) {
  if (!datos) return null;

  return (
    <View style={styles.tarjeta}>
      {datos.url && datos.media_type === "image" && (
        <Image
          source={{ uri: datos.hdurl || datos.url }}
          style={styles.imagen}
          resizeMode="cover"
        />
      )}

      <Text style={styles.fecha}>{datos.date}</Text>
      <Text style={styles.titulo}>{datos.title}</Text>
      <Text style={styles.descripcion}>
        {datos.explanation || "Sin descripción disponible."}
      </Text>

      {(datos.copyright || datos.credit) && (
        <Text style={styles.creditos}>
          Créditos: {datos.copyright || datos.credit}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#1b202b",
    borderRadius: 10,
    padding: 15,
  },
  imagen: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginBottom: 12,
  },
  fecha: {
    color: "#aeb8ca",
    fontSize: 12,
    marginBottom: 5,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descripcion: {
    color: "#e4e8f0",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  creditos: {
    color: "#aeb8ca",
    fontSize: 12,
    fontStyle: "italic",
  },
});