
import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 64px)",
    padding: "0 25px"
})

export const Wrapper = styled('div')({
    display: "flex",
    padding: "30px 0",
    width: "100%"
})

export const ChartsContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    gap: "30px"
})

export const ChartsInnerContainer = styled('div')({
    display: "flex",
    height: "50%"
})
