import { Stack } from "expo-router";

//custom 
import { COLORS } from "../../constants/theme";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: COLORS.red
                },
                headerTitleStyle: {
                    fontSize: 20,
                    color: COLORS.white,
                    fontFamily: "F1BoldMobile",
                },
            }}
        >
            <Stack.Screen name="index" options={{ title: "Racing" }} />
        </Stack>
    )
}