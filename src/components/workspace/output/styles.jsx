
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

export const MainContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    width: 'calc(50% - 7.5px)',
})

export const ButtonsContainer = styled('div')({
    flex: "0 0 40px",
    backgroundColor: "#15314B",
    display: "flex",
    justifyContent: "space-between"
})

export const OutputsContainer = styled('div')(({ status }) => ({
    border: `${(status) === "passed" ? "4px solid #4CAF50" : (status) === "failed" ? "4px solid rgba(255,0,0,.705)" : "2px solid transparent"}`,
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    backgroundColor: "#001528",
    overflowY: "auto",
    padding: "15px",
    color: "#fff",
    gap: "15px",
    "&::-webkit-scrollbar": {
        width: "6px"
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#BBCCDD",
        borderRadius: "8px"
    }
}))

export const LeftButtonsContainer = styled('div')({
    display: "flex"
})

export const LeftButton = styled(Button)({
    textTransform: "none",
    height: "100%",
    color: "#fff",
    padding: "0 15px",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: 0,
    "&:hover": {
        backgroundColor: "#626ee3",
    }
})

export const OutputButton = styled(LeftButton)({
    backgroundColor: "#001528",
})

export const StatusTitleWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
})

export const StatusTitle = styled('h2')({
    fontSize: "18px",
    fontWeight: 600,
    margin: 0,
    padding: "10px",
    color: "#fff",
    textAlign: "center"
})
