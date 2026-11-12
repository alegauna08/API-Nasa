import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

export default function EstadoCarga({ cargando, error, onReintentar }) {
  if (cargando) {
    return (
      <View style={styles.caja}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.texto}>Cargando imagen...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.cajaError}>
        <Text style={styles.textoError}>{error}</Text>
        <Pressable style={styles.boton} onPress={onReintentar}>
          <Text style={styles.textoBoton}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  caja: { alignItems: "center", marginTop: 40 },
  texto: { color: "#ffffff", marginTop: 10 },
  cajaError: { backgroundColor: "#2a1b1b", padding: 15, borderRadius: 8, alignItems: "center" },
  textoError: { color: "#ff8b8b", marginBottom: 10, textAlign: "center" },
  boton: { backgroundColor: "#303746", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 5 },
  textoBoton: { color: "#ffffff", fontWeight: "bold" },
});
