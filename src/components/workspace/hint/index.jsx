import { ExpandMore } from "@mui/icons-material";

import {
    AccordionDetails,
    AccordionSummary
} from "@mui/material";

import {
    HintText,
    HintAccordion,
    HintTitleText
} from "./styles";

function Hint(props) {
    const { text, index } = props;

    return (
        <HintAccordion>
            <AccordionSummary
                id={`accordion-${index}`}
                expandIcon={<ExpandMore />}
                aria-controls={`accordion-${index}`}
            >
                <HintTitleText>Indiciul {index + 1}</HintTitleText>
            </AccordionSummary>
            <AccordionDetails>
                <HintText>
                    {text}
                </HintText>
            </AccordionDetails>
        </HintAccordion>
    )
}

export default Hint;