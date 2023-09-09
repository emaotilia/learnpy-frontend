import Tests from "../../components/workspace/tests";
import Output from "../../components/workspace/output";
import CodeEditor from "../../components/workspace/code-editor";
import ExerciseDetails from "../../components/workspace/exercise-details";

import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useGetExerciseById } from "../../features/workspace/hooks";

import {
    TopContainer,
    MainContainer,
    BottomContainer,
    CircularProgressWrapper
} from "./styles";

function Workspace() {
    console.log('RENDER WORKSPACE PAGE');

    const { id } = useParams();
    const { exercise } = useGetExerciseById(id);

    if (!exercise) {
        return (
            <CircularProgressWrapper>
                <CircularProgress size={100} />
            </CircularProgressWrapper>
        )
    }

    return (
        <MainContainer>
            <TopContainer>
                <ExerciseDetails />
                <CodeEditor />
            </TopContainer>
            <BottomContainer>
                <Tests />
                <Output />
            </BottomContainer>
        </MainContainer>
    )
}

export default Workspace;