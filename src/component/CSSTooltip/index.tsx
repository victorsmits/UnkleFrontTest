import {cloneElement, FC, isValidElement} from "react";
import "./index.css"
import classNames from "classnames";
import {Typography} from "@mui/material";

interface CSSTooltipProps {
    text: string | JSX.Element
    delay?: number
    maxWidth?: number
}

export const CSSTooltip: FC<CSSTooltipProps> = ({children, text, delay, maxWidth}) => {
    return <>
        <div className={"tooltip"}>
            {isValidElement(children) && cloneElement(children, {className: "focus"})}

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