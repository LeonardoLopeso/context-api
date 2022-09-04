import { Link } from 'react-router-dom';
import { useContext } from 'react';

// import { ContextBasic } from '../contexts/ContextBasic';
import { ContextProfissional } from '../contexts/ContextProfissional';

export const ShowData = () => {
    const { state, dispatch } = useContext(ContextProfissional);

    return (
        <div>
            Tela ShowData de {state.user.name}
            <br />
            <Link to="/">Ir para SignUp</Link>
        </div>
    )
}