import React, { useState } from "react";
import { Text, View } from "react-native";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasCheckBox
        categorySelected={category}
        setCategory={setCategory}
      />

      <View style={styles.form}></View>
    </Background>
  );
}
