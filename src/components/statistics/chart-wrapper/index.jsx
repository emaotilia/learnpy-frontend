import {
    Title,
    MainContainer
} from './styles';

function ChartWrapper(props) {
    const { title, children } = props;

    return (
        <MainContainer>
            <Title>
                {title}
            </Title>
            {children}
        </MainContainer>
    )
}

export default ChartWrapper;