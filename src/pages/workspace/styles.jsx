import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    gap: "15px"
})

export const CircularProgressWrapper = styled('div')({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 64px)"
})

export const TopContainer = styled('div')({
    display: "flex",
    gap: "15px",
    height: "calc(55vh - (64px + 45px) / 2)"
})

export const BottomContainer = styled('div')({
    display: "flex",
    gap: "15px",
    height: "calc(45vh - (64px + 45px) / 2)"
})