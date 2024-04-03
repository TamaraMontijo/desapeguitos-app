import { Image, Text } from 'react-native'
import { Button, Card } from 'react-native-paper'

export function DesapegoCard() {
  return (
    <Card mode='elevated' className='w-[47%] m-1'>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content className='flex-row justify-between py-2 px-2'>
        <Text className='text-green'>0.5 km</Text>
        <Text className='text-blue'>1 ano +</Text>
      </Card.Content>
      <Card.Content className='p-2 pt-4'>
        <Text className='text-pretty'>Descrição do produto com caracteres máximo e reticên...</Text>
      </Card.Content>
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  )
}
