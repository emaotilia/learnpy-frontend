import DifficultyBox from '../../shared/difficulty-box';

import { URL } from '../../../constants/url-constants';
import { DIFFICULTY_COLORS } from '../../../constants/color-constants';

import {
    Spacer,
    Container,
    QueryLink,
    CircleIcon,
    CircleRoundedIcon,
} from './styles';

function ExerciseCard(props) {
    const { id, name, difficulty, isSolved} = props;

    const backgroundColor = DIFFICULTY_COLORS[difficulty].background
    const boxShadowColor = DIFFICULTY_COLORS[difficulty].boxShadow

    return (
        <Container>
            {
                isSolved ?
                    <CircleRoundedIcon color={backgroundColor} />
                    :
                    <CircleIcon />
            }
            <QueryLink to={`${URL.exercitiu}${id}`}>
                {name}
            </QueryLink>
            <Spacer />
            <DifficultyBox backgroundColor={backgroundColor} boxShadowColor={boxShadowColor} />
        </Container>
    )
}

export default ExerciseCard;