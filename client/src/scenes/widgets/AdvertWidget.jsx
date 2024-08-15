import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.main;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img 
                width="100%"
                height="auto"
                alt="advert"
                src="http://localhost:1234/assets/info4.jpeg"
                style={{ borderRadius: "0.75" }}
            />
            <FlexBetween>
                <Typography color={main}>GodessCosmetics</Typography>
                <Typography color={medium}>godessgosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to stunning and immaculate beauty
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;