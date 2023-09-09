import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const Accordion = styled(MuiAccordion)({
    background: '#15314B',
    '&.Mui-expanded': {
        margin: '0'
    },
    '& .MuiTypography-root': {
        color: '#fff',
        fontWeight: '500',
        fontSize: '16px'
    },
    '& .MuiAccordionSummary-expandIconWrapper svg': {
        color: '#fff'
    }
});

export const AccordionSummary = styled(MuiAccordionSummary)({
    '& .MuiAccordionSummary-content': {
        gap: '5px',
    }
})

export const AccordionDetails = styled(MuiAccordionDetails)({
    display: "flex",
    flexDirection: "column",
    gap: "25px",
})

export const CheckIcon = styled(Check)({
    color: "#4caf50"
})

export const Text = styled("p")({
    margin: "0",
    color: "#fff",
})

export const OutputContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "5px"
})

export const InnerContainer = styled("div")({
    color: "#fff",
    width: "100%",
    display: "flex",
    fontSize: "14px",
    boxShadow: "2px 2px 3px 1px rgba(0, 0, 0, 0.4), 0 0 3px 1px rgba(0, 0, 0, 0.3);"
});

export const LineNumbers = styled("div")({
    backgroundColor: "#12416D",
    padding: "8px 8px 8px 16px",
})

export const LineNumber = styled("div")({
    fontFamily: "monospace",
})

export const Pre = styled("pre")({
    margin: "0",
    padding: "8px",
    backgroundColor: "#15314b",
    width: "100%",
})

export const Code = styled("code")({
})

export const Input = styled("div")({

})