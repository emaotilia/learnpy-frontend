import LoadingButton from '@mui/lab/LoadingButton'

import { styled } from '@mui/material/styles'

import { Button } from "@mui/material"

import { EditorView } from "@codemirror/view"

export const MainContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    flex: "0 0 calc(50% - 7.5px)"
})

export const ButtonsContainer = styled('div')({
    flex: "0 0 40px",
    backgroundColor: "#15314B",
    display: "flex",
    justifyContent: "space-between"
})

export const SolutionButton = styled(Button)({
    backgroundColor: "#001528",
    textTransform: "none",
    height: "100%",
    color: "#fff",
    padding: "0 15px",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: 0,
    pointerEvents: "none"
})

export const ActionButtonsContainer = styled('div')({
})

export const RunCodeButton = styled(Button)({
    backgroundColor: "#0046c7",
    textTransform: "none",
    color: "#fff",
    width: "85px",
    height: "100%",
    border: 0,
    fontWeight: 400,
    fontSize: "14px",
    borderRadius: 0,
    "&:hover": {
        backgroundColor: "#02389c"
    }
})

export const SubmitCodeButton = styled(Button)({
    backgroundColor: "#008529",
    textTransform: "none",
    color: "#fff",
    width: "85px",
    height: "100%",
    border: 0,
    fontWeight: 400,
    fontSize: "14px",
    borderRadius: 0,
    "&:hover": {
        backgroundColor: "#006c21"
    }
})

export const LoadingRunButton = styled(LoadingButton)({
    backgroundColor: "#0046c7",
    textTransform: "none",
    borderRadius: 0,
    color: "#fff",
    height: "100%",
    fontSize: "14px",
    width: "85px",
    "&.Mui-disabled": {
        color: "#fff"
    },
    "& .MuiLoadingButton-loadingIndicator": {
        color: "#fff"
    }
})

export const LoadingSubmitButton = styled(LoadingButton)({
    backgroundColor: "#008529",
    textTransform: "none",
    borderRadius: 0,
    height: "100%",
    color: "#fff",
    fontSize: "14px",
    width: "85px",
    "&.Mui-disabled": {
        color: "#fff"
    },
    "& .MuiLoadingButton-loadingIndicator": {
        color: "#fff"
    }
})

export const CodeMirrorWrapper = styled('div')({
    flex: "1 1 auto",
    backgroundColor: "#001528",
    overflowY: "auto",
    color: "#fff",
    "&::-webkit-scrollbar": {
        width: "6px"
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#BBCCDD",
        borderRadius: "8px"
    }
})

export const editorViewTheme = EditorView.theme({
    "&": {
        color: "white",
        backgroundColor: "#001528",
        height: "100%"
    },
    ".cm-content": {
        caretColor: "#0e9"
    },
    "&.cm-focused .cm-cursor": {
        borderLeftColor: "#FFF"
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#49483E"
    },
    ".cm-activeLine": {
        backgroundColor: "#15314B"
    },
    ".cm-gutters": {
        backgroundColor: "#001528",
        color: "#FFF",
        border: "none"
    },
    ".cm-activeLineGutter": {
        backgroundColor: "#15314B"
    },
    "&.cm-scroller, ::-webkit-scrollbar": {
        width: "6px"
    },
    "&.cm-scroller, ::-webkit-scrollbar-thumb": {
        backgroundColor: "#BBCCDD",
        borderRadius: "8px"
    }
})