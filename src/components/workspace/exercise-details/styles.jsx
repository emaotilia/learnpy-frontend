import { styled } from '@mui/material/styles'

import { Button } from "@mui/material"

export const MainContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 calc(50% - 7.5px)'
})

export const ButtonsContainer = styled('div')({
    flex: '0 0 40px',
    backgroundColor: '#15314B'
})

export const DetailsButton = styled(Button)({
    backgroundColor: '#001528',
    textTransform: 'none',
    height: '100%',
    color: '#fff',
    padding: '0 15px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: 0,
    pointerEvents: 'none'
})

export const DetailsContainer = styled('div')({
    flex: '1 1 auto',
    backgroundColor: '#001528',
    overflowY: 'auto',
    padding: '20px',
    color: '#fff',
    '&::-webkit-scrollbar': {
        width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#BBCCDD',
        borderRadius: '8px'
    }
})

export const CategoryContainer = styled('div')({
    display: 'flex',
    gap: '5px',
    fontSize: '14px'
})

export const CategoryLeftText = styled('span')({
    fontWeight: '600'
})

export const CategoryRightText = styled('span')({
    fontWeight: '400'
})

export const TitleText = styled('h3')({
    margin: '15px 0',
    fontSize: '16px'
})

export const Text = styled('p')({
    color: 'hsla(0,0%,100%,.769)',
    lineHeight: '1.3'
})

export const NameTitleText = styled(TitleText)({
    fontSize: '20px'
})

export const NameText = styled(Text)({
})

export const InputTitleText = styled(TitleText)({
})

export const InputText = styled(Text)({
    backgroundColor: '#15314B',
    height: '48px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px'
})

export const OutputTitleText = styled(TitleText)({
})

export const OutputText = styled(Text)({
    backgroundColor: '#15314B',
    height: '48px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px'
})

export const HintsTitleText = styled(TitleText)({
})

export const HintsAccordionsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
})