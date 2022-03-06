import {FC, useState} from "react";
import "./index.css"
import classNames from "classnames";
import {Typography} from "@mui/material";

interface ReactTooltipProps {
    text: string
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
            {children}
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