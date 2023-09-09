import { Name, InnerContainer, MainContainer, Pre, Code, LineNumbers } from "./styles"

function Test(props) {
    const { name, input } = props;

    return (
        <MainContainer>
            <Name>
                {name}
            </Name>
            <InnerContainer>
                <LineNumbers>
                    1
                </LineNumbers>
                <Pre>
                    <Code>
                        {input}
                    </Code>
                </Pre>
            </InnerContainer>
        </MainContainer>
    )
}

export default Test