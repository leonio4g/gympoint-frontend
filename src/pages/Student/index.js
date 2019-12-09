import React from 'react';

import { Container, Header, StudentTable, Content } from './styles';

export default function Student() {
  return (
    <Container>
      <Header>
        <p>Gerenciando Alunos</p>
        <button type="submit">Cadastrar</button>
        <input type="text" placeholder="Buscar Aluno"/>
      </Header>
      <Content>
      <StudentTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Idade</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fulano</td>
            <td>leonio@gmail.com</td>
            <td>22</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </StudentTable>

      </Content>
    </Container>
  );
}
