import React, { PureComponent } from 'react'
import { View, FlatList } from 'react-native'

import { Text } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

import { HeaderSimple } from '../../blocks/header'

interface Props {
  navigation: NavigationScreenProp<{}>
}

export default class Screen extends PureComponent<Props> {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderSimple title='Activities' navigation={navigation}/>
  })

  render () {
    return (
      <View>
        <Text>activities</Text>
      </View>
    )
  }
}
