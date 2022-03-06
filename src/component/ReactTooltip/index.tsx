import {cloneElement, FC, isValidElement, useState} from "react";
import "./index.css"
import classNames from "classnames";
import {Typography} from "@mui/material";

interface ReactTooltipProps {
    text: string | JSX.Element
    delay?: number
    maxWidth?: number
}

export const ReactTooltip: FC<ReactTooltipProps> = ({children, text, delay, maxWidth}) => {

    const [open, setOpen] = useState<boolean>(false)

    const onMouseLeave = () => {
        if (open) setOpen(false)
    }

    const onMouseEnter = () => {
        setOpen(true)
    }

    return <>
        <div className={"tooltip"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {isValidElement(children) && cloneElement(children, {onFocus: onMouseEnter, onBlur: onMouseLeave})}
            <Typography variant={"caption"}
                        style={{
                            transitionDelay: `${delay || 0}s`,
                            maxWidth: maxWidth || "100vw"
                        }}
                        className={classNames("tooltiptext", {animation: open})}>
                {text}
            </Typography>
        </div>

    </>

}