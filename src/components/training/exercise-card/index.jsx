import DifficultyBox from '../../shared/difficulty-box';

import { DIFFICULTY_COLORS } from '../../../constants/color-constants';

import {
    Spacer,
    Container,
    QueryLink,
    CircleIcon,
    CircleRoundedIcon,
} from './styles';

function ExerciseCard(props) {
    const { id, name, isSolved, difficulty } = props;

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
            <QueryLink to={`/app/exercitii/${id}`}>
                {name}
            </QueryLink>
            <Spacer />
            <DifficultyBox backgroundColor={backgroundColor} boxShadowColor={boxShadowColor} />
        </Container>
    )
}

export default ExerciseCard;