import ExerciseCard from '../exercise-card';

import {
    Title,
    Section,
    Container
} from './styles';

function ExercisesSection(props) {
    const { title, exercises } = props;

    return (
        <Section>
            <Title>
                {title}
            </Title>
            <Container>
                {
                    exercises.map(({ id, name, isSolved, difficulty }, index) =>
                        <ExerciseCard id={id} key={index} name={name} difficulty={difficulty} isSolved={isSolved} />
                    )
                }
            </Container>
        </Section>
    )
}

export default ExercisesSection;