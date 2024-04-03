import { Button, Searchbar } from 'react-native-paper'
import { Text, View } from '../../components/Themed'
import { Alert, ScrollView, TouchableOpacity } from 'react-native'
import * as React from 'react';
import { SlidersHorizontal } from 'lucide-react-native';
import { DesapegoCard } from '../../components/desapegoCard';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <ScrollView className='flex-1 p-2'>
      <View className='flex-row items-center gap-2'>
        <Searchbar
          placeholder='Buscar produto'
          className=" w-2/3"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <Link href="/modal" asChild>
          <Button icon="filter" mode='contained' onPress={() => console.log('Pressed')}>
            Filtros
          </Button>
        </Link>
      </View>
      <View className='flex-row items-center justify-between my-4'>
        <TouchableOpacity>
          <Text className='font-bold'>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className='font-bold'>Fraldas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className='font-bold'>Roupas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className='font-bold'>Móveis</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className='font-bold'>Brinquedos</Text>
        </TouchableOpacity>
      </View>

      <View className='flex-row flex-wrap'>
        <DesapegoCard />
        <DesapegoCard />
        <DesapegoCard />
        <DesapegoCard />
        <DesapegoCard />
        <DesapegoCard />
        <DesapegoCard />
      </View>
      {/* <Button
        className='mt-20'
        mode='contained'
        onPress={() => Alert.alert('Paper button is working!')}
      >
        Paper button
      </Button> */}
    </ScrollView>
  )
}
