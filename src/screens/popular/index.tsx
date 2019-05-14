import React, { PureComponent } from 'react'
import { View, FlatList } from 'react-native'

import { Text } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

import Header from '../../blocks/header'

interface Props {
  navigation: NavigationScreenProp<{}>
}

export default class Screen extends PureComponent<Props> {
  render () {
    const { navigation } = this.props
    return (
      <View>
        {/* <Header navigation={navigation} /> */}
        <Text>popular</Text>
      </View>
    )
  }
}
