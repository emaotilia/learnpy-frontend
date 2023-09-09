import { Box } from './styles';

function DifficultyBox(props) {
    console.log('RENDER DIFFICULTY BOX COMPONENT');

    const { height, boxShadowColor, backgroundColor } = props;

    return (
        <Box height={height} boxShadowColor={boxShadowColor} backgroundColor={backgroundColor} />
    )
}

export default DifficultyBox;