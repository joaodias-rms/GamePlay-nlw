import React from 'react';
import { View } from 'react-native';
import {Profile} from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd';
import { styles } from './styles';
import {CategorySelect} from '../../components/CategorySelect';

export function Home() {
  return (
    <View>
      <View style={styles.header}>
      <Profile/>
      <ButtonAdd/>
      </View>
    <View>
      <CategorySelect/>
    </View>
    </View>
  )
}
