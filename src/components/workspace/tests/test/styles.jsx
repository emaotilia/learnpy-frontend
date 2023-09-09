import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "5px"
});

export const Name = styled("h2")({
    color: "#e9e9e9",
    margin: "0",
    fontSize: "16px",
    fontWeight: 600,
});

export const InnerContainer = styled("div")({
    width: "100%",
    display: "flex",
    fontSize: "14px",
});

export const LineNumbers = styled("div")({
    backgroundColor: "#12416D",
    padding: "8px 8px 8px 16px",
})

export const Pre = styled("pre")({
    margin: "0",
    padding: "8px",
    backgroundColor: "#15314b",
    width: "100%",
})

export const Code = styled("code")({
})