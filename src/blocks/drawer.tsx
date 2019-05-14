import React from 'react'
import { View, ImageSourcePropType, StyleSheet } from 'react-native'

import { NavigationScreenProp } from 'react-navigation'
import { Avatar, Drawer, Divider, Colors, Text, Headline, Subheading } from 'react-native-paper'

interface Props {
  image?: ImageSourcePropType
  navigation: NavigationScreenProp<{}>
}

function navigate (routeName: string, navigation: NavigationScreenProp<{}>) {
  navigation.closeDrawer()
  navigation.navigate(routeName)
}

export default ({ image, navigation }: Props) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Avatar.Icon size={75} icon='person' color='white' />
      <Headline style={styles.username}>Medet</Headline>
    </View>
    <Divider />
    <Drawer.Item label='Home' icon='home' theme={{ colors: { primary: Colors.white } }} />
    <Drawer.Item label='Activity' icon='inbox' onPress={() => navigate('Activities', navigation)} />
    <Drawer.Item label='Messages' icon='mail' onPress={() => navigate('Messages', navigation)} />
    <Divider />
    <Drawer.Item label='Create' icon='add-box' />
    <Divider />
    <Drawer.Item label='Settings' icon='settings' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444'
  },
  username: {
    marginLeft: 10
  },
  avatarContainer: {
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  info: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
