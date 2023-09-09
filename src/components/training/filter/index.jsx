import DifficultyBox from '../../shared/difficulty-box';

import { setDifficulties } from '../../../features/training/slice';

import { DIFFICULTY_COLORS } from '../../../constants/color-constants';

import { toggleDifficultyFromArray } from '../../../utils/array-utils';

import {
    Circle,
    CircleOutlined
} from '@mui/icons-material';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    Container,
    FilterName,
    CircleCheckbox
} from './styles';

function Filter(props) {
    const { difficulty } = props;

    const dispatch = useDispatch();

    const { difficulties } = useSelector((state) => state.training);

    const backgroundColor = DIFFICULTY_COLORS[difficulty].background
    const boxShadowColor = DIFFICULTY_COLORS[difficulty].boxShadow

    const handleCheck = () => {
        if (difficulties.length !== 1 || !difficulties.includes(difficulty)) {
            dispatch(setDifficulties(toggleDifficultyFromArray([...difficulties], difficulty)))
        }
    }

    return (
        <Container>
            <CircleCheckbox
                fillColor={backgroundColor}
                checked={difficulties.includes(difficulty)}
                onChange={handleCheck}
                icon={<CircleOutlined />}
                checkedIcon={<Circle />}
            />
            <FilterName>
                {difficulty}
            </FilterName>
            <DifficultyBox height="50px" backgroundColor={backgroundColor} boxShadowColor={boxShadowColor} />
        </Container>
    )
}

export default Filter;