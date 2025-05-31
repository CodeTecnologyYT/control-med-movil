import {Tabs} from 'expo-router';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {TabsCustom} from "@/shared/components";

const TabsLayout = () => {
    return (
        <Tabs
            tabBar={TabsCustom}
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "transparent" },
            }}>
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="alarm/index"
                options={{
                    title: 'Alarm',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="setting/index"
                options={{
                    title: 'Configuracion',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;