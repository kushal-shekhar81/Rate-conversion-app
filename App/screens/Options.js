import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import colors from '../constants/colors';
import {RowItem, RowSeparator} from '../Components/RowItems';

const openURL = (url) =>    {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry! Something went wrong','Please try again later.')
    });
}

export default () => {
    return (
      <SafeAreaView style={{flex: 1,paddingTop: 30}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <ScrollView>
          
          <RowItem
            text="Themes"
            onPress={() => alert('todo!')}
            rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
          />

          <RowSeparator />

          <RowItem
            text="React Native by Basics"
            onPress={() => openURL('https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          />

          <RowSeparator />

          <RowItem
            text="React Native by Example"
            onPress={() => openURL('https://reactnativebyexample.com')}
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          />

        </ScrollView>
      </SafeAreaView>
    );
}