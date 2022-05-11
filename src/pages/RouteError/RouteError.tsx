import * as C from './styles';
import errorImage from '../../assets/images/404.png'
import { useNavigate } from 'react-router-dom';

export const RouteError = () => {
    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate('/')
    }

    return(
        <C.Container>
            <img src={errorImage} alt="" />
            <div className='title'>OPS, Parece que você está perdido!</div>
            <div onClick={handleBackHome} className='back-button'>VOLTAR</div>
        </C.Container>
    );
}