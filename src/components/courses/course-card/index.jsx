import DifficultyBox from '../../shared/difficulty-box';

import { Tooltip } from '@mui/material';

import { URL } from '../../../constants/url-constants';
import { DIFFICULTY } from '../../../constants/difficulty-constants';
import { DIFFICULTY_COLORS } from '../../../constants/color-constants';

import {
    Spacer,
    Container,
    CourseLink,
    ProfessorAvatar
} from './styles';

function CourseCard(props) {
    const { id, name, uploadedBy } = props;

    const backgroundColor = DIFFICULTY_COLORS[DIFFICULTY.random].background;
    const boxShadowColor = DIFFICULTY_COLORS[DIFFICULTY.random].boxShadow;

    const initials = uploadedBy.split(' ').map(name => name[0]).join('');

    return (
        <Container>
            <CourseLink to={`${URL.course}${id}`}>
                {name}
            </CourseLink>
            <Spacer />
            <Tooltip title={uploadedBy} arrow placement="top">
                <ProfessorAvatar>{initials}</ProfessorAvatar>
            </Tooltip>
            <DifficultyBox backgroundColor={backgroundColor} boxShadowColor={boxShadowColor} />
        </Container>
    )
}

export default CourseCard;