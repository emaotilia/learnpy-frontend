import { Info } from "@mui/icons-material";

import {
    Text,
    CardLink,
    IconTooltip,
    IconWrapper,
    TextWrapper,
    IconContainer,
    MainContainer,
    InfoIconWrapper
} from "./styles";

function Card(props) {
    const { name, icon, href, tooltipTitle } = props;

    return (
        <MainContainer>
            <CardLink to={href}>
                <InfoIconWrapper>
                    <IconTooltip
                        arrow
                        title={tooltipTitle}
                    >
                        <Info />
                    </IconTooltip>
                </InfoIconWrapper>
                <IconContainer>
                    <IconWrapper>
                        {icon}
                    </IconWrapper>
                </IconContainer>
                <TextWrapper>
                    <Text>
                        {name}
                    </Text>
                </TextWrapper>
            </CardLink>
        </MainContainer >
    )
}

export default Card;