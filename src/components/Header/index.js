import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo-gympoint.svg';
import { useRouteMatch } from 'react-router-dom';
import { Container, ToLink } from './styles';

export default function Header() {

  const dispatch = useDispatch();
  const { path } = useRouteMatch();


  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <Link to="/students" >
        <img src={logo} alt="GymPoint"/>
        </Link>

        <ToLink to="/students" active={path.indexOf('student') > 0} >Aluno</ToLink>
        <ToLink to="/plans"  active={path.indexOf('plans') > 0} >Planos</ToLink>
        <ToLink to="/register/list"  active={path.indexOf('register') > 0}>Matriculas</ToLink>
        <ToLink to="/help-order/list"  active={path.indexOf('help') > 0}>Pedidos de Auxílios</ToLink>
      </nav>

      <aside>
        <strong>Administrador</strong>
        <button type="button" onClick={handleSignOut} >Sair</button>
      </aside>
    </Container>
  );
}
