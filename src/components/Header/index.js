import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo-gympoint.svg';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Header() {

  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <img src={logo} alt="GymPoint"/>

        <Link to="/students/list" >Aluno</Link>
        <Link to="/plans/list" >Planos</Link>
        <Link to="/register/list">Matriculas</Link>
        <Link to="/help-order/list">Pedidos de Auxílios</Link>
      </nav>

      <aside>
        <strong>Administrador</strong>
        <button type="button" onClick={handleSignOut} >Sair</button>
      </aside>
    </Container>
  );
}
