import * as C from './styles';

type Props = {
    title: string,
    subtitle: string
}

export const SectionTitle = ({title, subtitle}: Props) => {
    return(
        <C.TitleBox>
            <C.Title>{title}</C.Title>
            <C.SubTitle>{subtitle}</C.SubTitle>
        </C.TitleBox>
    );
}