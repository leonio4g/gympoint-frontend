import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import { MdDelete, MdCreate } from 'react-icons/md';
import history from '~/services/history';
import { useDispatch } from 'react-redux';
import { PlanData } from '~/store/modules/students/actions';
import { formatPrice } from '~/util/format';
import { Container, Header, PlanTable, Content } from './styles';

export default function Student() {

  const dispatch = useDispatch();
  const [plans, setPlans ]= useState([]);


  useEffect(() => {
    async function listPlans(){
      const response = await api.get('plans');
      const data = response.data.map(plan => ({
        ...plan,
        priceFormatted: formatPrice(plan.price),
      }))
      setPlans(data);
    }
    listPlans();
  },[setPlans]);

  function handleRegister(){
    history.push('/plans/create')
  }

  function handleEdit(plan){
    dispatch(PlanData(plan));
    history.push('/plans/edit');
  }

  async function handleDelete(plan){

    const confirm = window.confirm(`Cofirma que Quer deletar ${plan.title}`);//eslint-disable-line
    if(confirm){
    await api.delete(`plans/${plan.id}`);

    setPlans(
      plans.filter(e => {
        return e.id !== plan.id;
      })
    )

    }
  }

  return (
    <Container>
      <Header>
        <p>Gerenciando Planos</p>
        <div>
        <button type="submit" onClick={handleRegister} >Cadastrar</button>
        </div>
      </Header>
      <Content>
      <PlanTable>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Duração</th>
            <th>Valor Mensal</th>
            <th></th>
          </tr>
        </thead>

        <tbody >
              {plans.map(plan =>(
               <tr  key={plan.id} >
               <td>{plan.title}</td>
               <td>{plan.duration}</td>
               <td>{plan.priceFormatted}</td>
               <td id="actions" >
               <button id="edit" onClick={() => handleEdit(plan)} >
                 <MdCreate size={20} color="#4d85ee" />
               </button>
               <button id="delete" onClick={() => handleDelete(plan)} >
               <MdDelete size={20} color="#de3b3b" />
               </button>
               </td>
               </tr>

))}
      </tbody>

      </PlanTable>
      </Content>

    </Container>
  );
}
