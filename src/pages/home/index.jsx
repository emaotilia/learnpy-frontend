import { URL } from '../../constants/url-constants';

import {
    Title,
    Divider,
    SubTitle,
    LoginLink,
    RegisterLink,
    MainContainer,
    MaskContainer,
    ContentSection,
    LinksContainer
} from './styles';

function Home() {
    console.log('RENDER HOME PAGE');

    return (
        <MainContainer>
            <MaskContainer>
                <ContentSection>
                    <Title>
                        LearnPy
                    </Title>
                    <Divider />
                    <SubTitle>
                        Invata limbajul Python intr-o maniera simpla, rapida si usoara!
                    </SubTitle>
                    <LinksContainer>
                        <RegisterLink href={URL.register}>
                            Inregistrare
                        </RegisterLink>
                        <LoginLink href={URL.login}>
                            Autentificare
                        </LoginLink>
                    </LinksContainer>
                </ContentSection>
            </MaskContainer>
        </MainContainer>
    );
}

export default Home;