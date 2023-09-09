import { Input, InnerContainer, Pre, Code, LineNumbers, LineNumber, Accordion, Text, AccordionSummary, CheckIcon, AccordionDetails, OutputContainer } from "./styles"
import { Cancel, ExpandMore } from "@mui/icons-material";

function Test(props) {
    const { index, passed, input, expectedOutput, actualOutput } = props;

    return (
        <Accordion>
            <AccordionSummary
                id={`accordion-${index}`}
                expandIcon={<ExpandMore />}
                aria-controls={`accordion-${index}`}
            >
                {
                    passed ? (
                        <>
                            <CheckIcon />
                            <Text>{`Testul ${index + 1} a trecut!`}</Text>
                        </>
                    ) : (
                        <>
                            <Cancel sx={{ color: "#f44336" }} />
                            <Text>{`Testul ${index + 1} a picat!`}</Text>
                        </>
                    )

                }
            </AccordionSummary>
            <AccordionDetails>
                <OutputContainer>
                    <Text>
                        Datele de iesire cerute:
                    </Text>
                    <InnerContainer>
                        <LineNumbers>
                            {
                                <LineNumber>
                                    1
                                </LineNumber>
                            }
                        </LineNumbers>
                        <Pre>
                            <Code>
                                {
                                    expectedOutput
                                }
                            </Code>
                        </Pre>
                    </InnerContainer>
                </OutputContainer>
                <OutputContainer>
                    <Text>
                        Datele de iesire primite:
                    </Text>
                    <InnerContainer>
                        <LineNumbers>
                            {
                                <LineNumber>
                                    1
                                </LineNumber>
                            }
                        </LineNumbers>
                        <Pre>
                            <Code>
                                {
                                    actualOutput
                                }
                            </Code>
                        </Pre>
                    </InnerContainer>
                </OutputContainer>
                <OutputContainer>
                    <Text>
                        Datele de intrare oferite:
                    </Text>
                    <InnerContainer>
                        <LineNumbers>
                            {
                                <LineNumber key={index}>
                                    1
                                </LineNumber>
                            }
                        </LineNumbers>
                        <Pre>
                            <Code>
                                {
                                    input
                                }
                            </Code>
                        </Pre>
                    </InnerContainer>
                </OutputContainer>
            </AccordionDetails>
        </Accordion>
    )
}

export default Test