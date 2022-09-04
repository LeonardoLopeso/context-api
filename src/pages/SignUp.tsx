import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import { ContextBasic } from '../contexts/ContextBasic';
import { ContextProfissional } from '../contexts/ContextProfissional';

export const SignUp = () => {
    const { state, dispatch } = useContext(ContextProfissional);

    const handleChangeName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Pedro'
            }
        })
    }

    return (
        <div>
            Tela SignUp de {state.user.name} que tem {state.user.age} anos.
            <button onClick={handleChangeName}>Trocar nome para Pedro</button>
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    )
}