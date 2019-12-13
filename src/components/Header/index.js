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

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <Link to="/students" >
          <img src={logo} alt="GymPoint" />
        </Link>

        <ToLink to="/students" >Aluno</ToLink>
        <ToLink to="/plans"  >Planos</ToLink>
        <ToLink to="/register">Matriculas</ToLink>
        <ToLink to="/help-order/list">Pedidos de Auxílios</ToLink>
      </nav>

      <aside>
        <strong>Administrador</strong>
        <button type="button" onClick={handleSignOut} >Sair</button>
      </aside>
    </Container>
  );
}
