import {FC, isValidElement} from "react";
import "./index.css"
import classNames from "classnames";
import {Typography} from "@mui/material";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

interface CSSTooltipProps {
    text?: string | ReactJSXElement
    delay?: number
    maxWidth?: number
}

export const CSSTooltip: FC<CSSTooltipProps> = ({children, text, delay, maxWidth}) => {
    return <>
        <div className={"tooltip"}>
            {children}

            {isValidElement(text) && <>
                <div style={{
                    transitionDelay: `${delay || 0}s`,
                    maxWidth
                }} className={classNames("tooltiptext")}>
                    {text}
                </div>
            </>}

            {!isValidElement(text) &&
                <Typography variant={"caption"}
                            style={{
                                transitionDelay: `${delay || 0}s`,
                                maxWidth
                            }}
                            className={classNames("tooltiptext")}>
                    {text}
                </Typography>}
        </div>

    </>

}