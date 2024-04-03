import { ScrollView } from 'react-native'
import { Text, View } from '../../components/Themed'
import { DesapegoCard } from '../../components/desapegoCard'

export default function myAds() {
  return (
    <ScrollView>
      <View className='flex-row flex-wrap'>
        <DesapegoCard></DesapegoCard>
        <DesapegoCard></DesapegoCard>
        <DesapegoCard></DesapegoCard>
      </View>
    </ScrollView>
  )
}
