import {Drawer} from 'expo-router/drawer';
import {Ionicons} from "@expo/vector-icons";
import {DrawerCustom} from "@/shared/components";
import {Colors} from "@/shared/constants/colors";

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={DrawerCustom}
            screenOptions={{
                drawerActiveTintColor: Colors.primary,
                headerShown: false,
                drawerStyle: {
                    backgroundColor: Colors.background,
                }
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Inicio',
                    title: 'Inicio',
                    drawerIcon:props => ( <Ionicons name="home-sharp" size={16} color={Colors.primary}/>)
                }}
            />
        </Drawer>
    );
}
export default DrawerLayout;