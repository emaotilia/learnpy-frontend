import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';

import { Tooltip } from "@mui/material";

export const MainContainer = styled("div")({
    display: "flex"
})

//(i)
export const CardLink = styled(Link)({
    background: "linear-gradient(to bottom right ,#02203c,#001528)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "220px",
    borderRadius: "4px",
    color: "#fff",
    textDecoration: "none",
});

export const InfoIconWrapper = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px",
});

export const IconContainer = styled("div")({
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

//icons
export const IconWrapper = styled("div")({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#15314b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
        fontSize: "64px",
        color: "#fff",
    },
});

//writing
export const Text = styled("p")({
    color: "#fff",
    margin: 0,
    fontSize: "17px",
});

export const TextWrapper = styled("div")({
    padding: "15px",
});

//???
export const IconTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ tooltip: className }} />
))({
    backgroundColor: '#fff',
    color: '#02203c',
    fontSize: '13px',
    boxShadow: '5px 5px 5px rgb(0 0 0 / 50%)',
    fontWeight: 700,
    padding: '5px 10px',
    '& .MuiTooltip-arrow': {
        color: '#fff'
    }
})