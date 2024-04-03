import { Link } from 'expo-router'
import { Plus } from 'lucide-react-native'
import Colors from '../constants/Colors'
import { View } from 'react-native'

export default function CreateAddButton() {
  return (
    <View className='bg-purple-500 rounded-full p-4'>
      <Plus color={Colors.light.background} />
    </View>
  )
}
