import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {

    return (
        <Tabs>
            <Tabs.Screen name="(home)" 
                options={{ 
                    headerShown: false, 
                    title:"Início",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                    tabBarShowLabel:false,
                    tabBarLabelStyle: { fontSize: 12 },
                }} 
            />
            <Tabs.Screen name="(profile)"  
                options={{ 
                    headerShown: false, 
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),

                }} 
            />
        </Tabs>
    );
}