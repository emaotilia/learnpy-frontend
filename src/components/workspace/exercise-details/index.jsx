import Hint from '../hint'

import { useSelector } from 'react-redux';

import {
    NameText,
    InputText,
    OutputText,
    DetailsButton,
    MainContainer,
    NameTitleText,
    InputTitleText,
    HintsTitleText,
    OutputTitleText,
    ButtonsContainer,
    DetailsContainer,
    CategoryLeftText,
    CategoryContainer,
    CategoryRightText,
    HintsAccordionsContainer,
} from './styles.jsx'

function ExerciseDetails() {
    console.log("RENDER EXERCISE DETAILS COMPONENT")

    const { name, description, category, input, output, hints } = useSelector(state => state.workspace.exercise);

    return (
        <MainContainer>
            <ButtonsContainer>
                <DetailsButton>
                    Detalii interogare
                </DetailsButton>
            </ButtonsContainer>
            <DetailsContainer>
                <CategoryContainer>
                    <CategoryLeftText>
                        Categorie:
                    </CategoryLeftText>
                    <CategoryRightText>
                        {category}
                    </CategoryRightText>
                </CategoryContainer>
                <NameTitleText>
                    {name}
                </NameTitleText>
                <NameText>
                    {description}
                </NameText>
                {
                    input ? (
                        <>
                            <InputTitleText>
                                Intrare
                            </InputTitleText>
                            <InputText>
                                {input}
                            </InputText>
                        </>
                    ) : null
                }
                {
                    output ? (
                        <>
                            <OutputTitleText>
                                Iesire
                            </OutputTitleText>
                            <OutputText>
                                {output}
                            </OutputText>
                        </>
                    ) : null
                }
                {
                    hints ? <>
                        <HintsTitleText>
                            Indicii
                        </HintsTitleText>
                        <HintsAccordionsContainer>
                            {
                                hints.map(({ id, text }, index) => (
                                    <Hint key={id} text={text} index={index} />
                                ))
                            }
                        </HintsAccordionsContainer>
                    </> : undefined
                }
            </DetailsContainer>
        </MainContainer>
    )
}

export default ExerciseDetails;