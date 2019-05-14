import React, { PureComponent, Fragment } from 'react'
import { View, StyleSheet, Modal } from 'react-native'

import { Appbar, Modal as PaperModal, Portal, Text, Surface, Searchbar } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

interface HeaderSimpleProps {
  title?: string
  navigation: NavigationScreenProp<{}>
}
interface HeaderProps {
  onNotificationPress?: () => void
  navigation: NavigationScreenProp<{}>

}
interface State {
  query: string
  visible: boolean
}

export const HeaderSimple = ({ navigation, title }: HeaderSimpleProps) => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => navigation.goBack()} />
    <Appbar.Content title={title} />
  </Appbar.Header>
)

export default class Header extends PureComponent<HeaderProps, State> {
  state: State = {
    query: '',
    visible: false
  }

  showModal = () => this.setState({ visible: true })
  hideModal = () => this.setState({ visible: false })

  render () {
    const { visible, query } = this.state
    const { onNotificationPress, navigation } = this.props
    return (
      <Fragment>
        <Appbar.Header>
          <Appbar.Action icon='menu' onPress={navigation.openDrawer} />
          <Appbar.Content title='May' />
          <Appbar.Action icon='inbox' onPress={onNotificationPress} />
          <Appbar.Action icon='search' onPress={this.showModal} />
        </Appbar.Header>
        <Portal>
          <Modal animationType='slide' visible={visible} onDismiss={this.hideModal}>
            <Appbar.Header>
              <Appbar.Action icon='close' onPress={this.hideModal} />
              <Searchbar
                placeholder='Search'
                onChangeText={query => { this.setState({ query }) }}
                value={query}
                style={{ width: '85%' }}
              />
            </Appbar.Header>
            <View style={styles.container}>
              <Surface>
                <Text>Example Modal</Text>
              </Surface>
            </View>
          </Modal>
       </Portal>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  }
})
