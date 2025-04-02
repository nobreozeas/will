import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function TabBar({ state, descriptors, navigation }) {

  const icon = {
    '(home)': (props) => <FontAwesome name="home" size={24} color={'#222'} {...props} />,
    '(profile)': (props) => <FontAwesome name="user" size={24} color={'#222'} {...props} />,
    '(explore)': (props) => <FontAwesome name="search" size={24} color={'#222'} {...props} />,
  }

  console.log(state.routes)

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
       
          >
            {icon[route.name]({ color: isFocused ? '#673ab7' : '#222' })}
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
            </Text>

          </TouchableOpacity>
        
          
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
    tabbar:{
        
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 80,
        paddingVertical:15,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabbarItem:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,

    },
});