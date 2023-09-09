import Test from "./test";
import { ButtonsContainer, LeftButtonsContainer, MainContainer, OutputsContainer, OutputButton, StatusTitle, StatusTitleWrapper } from "./styles";
import { useSelector } from "react-redux";
import { selectStatusByFunctionality } from "../../../features/code/slice";
import { CODE_FUNCTIONALITY } from "../../../constants/functionality-constants";

function Output() {
    const result = useSelector((state) => state.code.result);
    const status = useSelector((state) => selectStatusByFunctionality(state, CODE_FUNCTIONALITY.submit));

    const isLoading = status === 'pending';

    return (
        <MainContainer>
            <ButtonsContainer>
                <LeftButtonsContainer>
                    <OutputButton>
                        Output
                    </OutputButton>
                </LeftButtonsContainer>
            </ButtonsContainer>
            <OutputsContainer status={status}>
                {
                    isLoading ? (
                        <StatusTitleWrapper>
                            <StatusTitle>
                                Se ruleaza testele...
                            </StatusTitle>
                        </StatusTitleWrapper>
                    ) : (
                        result.isCorrect === undefined ? (
                            <StatusTitleWrapper>
                                <StatusTitle>
                                    Ruleaza sau trimite codul atunci cand esti pregatit!
                                </StatusTitle>
                            </StatusTitleWrapper>
                        ) : (
                            <>
                                <StatusTitle>
                                    {
                                        result.isCorrect ?
                                            "Felicitari! Codul tau a trecut toate testele!"
                                            :
                                            " Din pacate codul tau a picat cel putin unul din teste!"
                                    }
                                </StatusTitle>
                                {
                                    result.tests.map(({ input, isCorrect, expectedOutput, actualOutput }, index) => (
                                        <Test key={index} index={index} passed={isCorrect} input={input} expectedOutput={expectedOutput} actualOutput={actualOutput} />
                                    ))
                                }
                            </>
                        )
                    )
                }
            </OutputsContainer>
        </MainContainer>
    )
}

export default Output;