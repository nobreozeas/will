import { Tabs } from "expo-router";

import { TabBar } from "../../components/TabComponent";

export default function TabsLayout() {

    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen name="(home)" 
                options={{ 
                    
                    title:"Início",
                   
                }} 
            />
            <Tabs.Screen name="(profile)"  
                options={{ 
                   
                    
                    title:"Perfil",

                }} 
            />
            <Tabs.Screen name="(explore)"  
                options={{ 
                   
                    tabBarShowLabel: false,
                   
                    title:"Explorar",

                }} 
            />
        </Tabs>
    );
}