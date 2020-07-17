import React, {useContext} from 'react';
import {StatusBar, FlatList, View, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useSafeArea} from 'react-native-safe-area-context';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import {RowItem, RowSeparator} from '../Components/RowItems';
import {ConversionContext} from '../util/ConversionContext';

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.blue,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ({navigation, route = {} }) => {
    const insets = useSafeArea();
    const params = route.params || {} ;

    const {setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency} = useContext(ConversionContext);

    return (
      <View style={{backgroundColor: colors.white}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <FlatList 
          data={currencies}
          renderItem={({item}) => {
            // const selected = params.activeCurrency === item;

            let selected = false;
            if(params.isBaseCurrency && item === baseCurrency) {
              selected = true;
            }

            else if(!params.isBaseCurrency && item === quoteCurrency) {
              selected = true;
            }

            return (
              <RowItem
                text={item}
                onPress={() => {
                  if(params.isBaseCurrency) {
                    setBaseCurrency(item);
                  } else {
                    setQuoteCurrency(item);
                  }
                  navigation.pop()
                }}
                rightIcon={selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
          )}
              />
)
        }}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <RowSeparator />}
          ListFooterComponent={() => <View style={{paddingBottom: insets.bottom}} />}
        />
      </View>
    );
}