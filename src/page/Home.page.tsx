import {Box, TextField, Tooltip, Typography} from "@mui/material";
import {CSSTooltip, ReactTooltip} from "../component";

export const HomePage = () => {

    return <>
        <Box display={"flex"} flexDirection={"column"}
             justifyContent={"center"} alignItems={"center"}
             sx={{gap: 5}} height={"100vh"}>

            <Box display={"flex"} flexDirection={"column"} maxWidth={450}
                 justifyContent={"center"} alignItems={"center"}>
                <Typography variant={"body1"}>
                    For this exercise I have realize 3 different tooltip. The first one is using pure css, the second
                    one is using listener from react and the last one is import from the library MUI
                </Typography>
            </Box>

            <Box display={"flex"} flexDirection={"row"}
                 justifyContent={"center"} alignItems={"center"}
                 sx={{gap: 5}}>
                <CSSTooltip delay={3}
                            text={"this is the css tooltip made with the hover sudo class with a configurable delay"}>
                    <Typography>Hover me for 3 seconds to reveal the css tooltip</Typography>
                    
                </CSSTooltip>

                <CSSTooltip text={<Typography variant={"h3"}>this text is a react node</Typography>}>
                    <Typography>Hover me for 3 seconds to reveal the css tooltip</Typography>
                </CSSTooltip>

                <ReactTooltip
                    delay={0}
                    text={"this is the react tooltip made with listener on the div with a configurable delay"}>
                    <Typography>Hover me to reveal the react tooltip</Typography>
                </ReactTooltip>

                <Tooltip title={"this is the tooltip from mui"} arrow>
                    <Typography>Hover me to reveal the tooltip from MUI</Typography>
                </Tooltip>
            </Box>

        </Box>

    </>
}