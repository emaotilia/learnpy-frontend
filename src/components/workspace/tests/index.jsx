import Test from "./test";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ButtonsContainer, TestsButton, LeftButtonsContainer, RightButtonsContainer, ToggleButton, MainContainer, TestsContainer } from "./styles";

function Tests() {
    console.log("RENDER TESTS COMPONENT");

    const [showTests, setShowTests] = useState(true);

    const { tests } = useSelector(state => state.workspace.exercise);

    const handleToggleTests = () => {
        setShowTests(current => !current);
    }

    return (
        <MainContainer>
            <ButtonsContainer>
                <LeftButtonsContainer>
                    <TestsButton>
                        Teste
                    </TestsButton>
                </LeftButtonsContainer>
                <RightButtonsContainer>
                    <ToggleButton onClick={handleToggleTests}>
                        {
                            showTests ? <Visibility /> : <VisibilityOff />
                        }
                    </ToggleButton>
                </RightButtonsContainer>
            </ButtonsContainer>
            <TestsContainer isBlured={!showTests}>
                {
                    tests && tests.map(({ input, output }, index) => (
                        <Test key={index} name={`Test nr. ${index + 1}`} input={input} output={output} />
                    ))
                }
            </TestsContainer>
        </MainContainer>
    )
}

export default Tests;