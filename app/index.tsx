import {SafeAreaView, View} from "react-native";
import {TextCustom} from "@/shared/components/text-custom/TextCustom";

const ControlMedApp = ()=>{
    return(
        <SafeAreaView className="bg-primary">
            <View className="bg-primary px-10">
                <TextCustom variant="xl" textWeight={"bold"} textColor={"active"}>La salud empieza con un buen recordatorio</TextCustom>
                <TextCustom textColor={"active"}>Un buena forma de mantener tu salud</TextCustom>
            </View>
        </SafeAreaView>
    )
}

export default ControlMedApp;