import { styled } from '@mui/material/styles';

export const Box = styled('div')(({ height, boxShadowColor, backgroundColor }) => ({
    boxShadow: `8px 0 0 0 ${boxShadowColor}`,
    backgroundColor: backgroundColor,
    width: '30px',
    height: `${height ? height : '100%'}`,
    borderRadius: '0 5px 5px 0',
    flex: '0 0 auto',
}))