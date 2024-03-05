import { Slot } from 'expo-router'

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins"
import { fonts } from '@/theme/fonts'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    })

    if (!fontsLoaded) {
        return 
    }


    return fontsLoaded ? <Slot /> : null
}