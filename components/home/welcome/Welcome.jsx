import React, { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const mentorsSpecialties = ['Tech Career', 'Finance', 'Entrepreneurship', 'Public Speaking', 'Polyglot'];

const Welcome = () => {
  const router = useRouter();
  const [activeSpecialty, setActiveSpecialty] = useState('Tech Career');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Luiz</Text>
        <Text style={styles.welcomeMessage}>Find your perfect mentor!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={mentorsSpecialties}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeSpecialty, item)}
              onPress={() => {
                setActiveSpecialty(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text styl={styles.tabText(activeSpecialty, item)} >{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome