import { Stack } from "expo-router";

//custom
import { COLORS } from "../constants/theme";

export default function RootLayout() {
    return <Stack
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: COLORS.red
            },
        }}
    />;
}