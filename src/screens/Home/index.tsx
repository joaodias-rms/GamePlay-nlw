import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";



import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20h40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Maneva",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/08 às 22h40",
      description: "Vamo que vamo",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => 
          <Appointment 
            data={item} 
            onPress={handleAppointmentDetails}
          />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
