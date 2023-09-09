import CodeMirror from '@uiw/react-codemirror'

import { useState } from "react";

import { SEVERITY } from '../../../constants/severity-constants';

import { useParams } from 'react-router-dom';

import { showToastr } from '../../../features/toastr/slice';

import { python } from '@codemirror/lang-python';
import { indentUnit } from '@codemirror/language';

import {
    runCode,
    submitCode
} from '../../../features/code/slice';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    useRunCodeHook,
    useSubmitCodeHook
} from '../../../features/code/hooks';

import {
    CODE_NOT_FOUND,
    EXERCISE_ID_NOT_FOUND
} from './constants';

import {
    MainContainer,
    RunCodeButton,
    SolutionButton,
    editorViewTheme,
    ButtonsContainer,
    LoadingRunButton,
    SubmitCodeButton,
    CodeMirrorWrapper,
    LoadingSubmitButton,
    ActionButtonsContainer
} from './styles';

function CodeEditor() {
    console.log("RENDER CODE EDITOR COMPONENT")

    const { id: exerciseId } = useParams();

    const [code, setCode] = useState("")

    const { id: userId } = useSelector(state => state.auth.user);

    const { isLoading: isLoadingRun, isSuccess } = useRunCodeHook();

    const { isLoading: isLoadingSubmit } = useSubmitCodeHook();

    const dispatch = useDispatch();

    const handleRunCode = () => {
        if (!code.length) {
            dispatch(showToastr({
                message: CODE_NOT_FOUND,
                severity: SEVERITY.error
            }))
            return;
        }

        if (!exerciseId) {
            dispatch(showToastr({
                message: EXERCISE_ID_NOT_FOUND,
                severity: SEVERITY.error
            }))
            return;
        }
        dispatch(runCode({ exerciseId, code }));
    }

    const handleSubmitCode = () => {
        if (!code.length) {
            dispatch(showToastr({
                message: CODE_NOT_FOUND,
                severity: SEVERITY.error
            }))
            return;
        }

        if (!exerciseId) {
            dispatch(showToastr({
                message: EXERCISE_ID_NOT_FOUND,
                severity: SEVERITY.error
            }))
            return;
        }
        dispatch(submitCode({ exerciseId, userId, code }));
    }

    return (
        <MainContainer>
            <ButtonsContainer>
                <SolutionButton>
                    Solutie
                </SolutionButton>
                <ActionButtonsContainer>
                    {
                        isLoadingRun ?
                            <LoadingRunButton
                                loading
                                loadingPosition='center'
                                variant='outlined'
                            />
                            :
                            <RunCodeButton onClick={handleRunCode}>
                                Ruleaza
                            </RunCodeButton>
                    }
                    {
                        isSuccess ? (
                            isLoadingSubmit ? (
                                <LoadingSubmitButton
                                    loading
                                    loadingPosition='center'
                                    variant='outlined'
                                />
                            ) : (
                                <SubmitCodeButton onClick={handleSubmitCode}>
                                    Trimite
                                </SubmitCodeButton>
                            )
                        ) :
                            undefined
                    }
                </ActionButtonsContainer>
            </ButtonsContainer>
            <CodeMirrorWrapper>
                <CodeMirror
                    value=""
                    theme={editorViewTheme}
                    extensions={[
                        python(),
                        indentUnit.of("    ")
                    ]}
                    onChange={(value, _viewUpdate) => { setCode(value); }}
                />
            </CodeMirrorWrapper>
        </MainContainer>
    )
}

export default CodeEditor;