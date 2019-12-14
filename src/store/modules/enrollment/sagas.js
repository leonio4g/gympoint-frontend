import { takeLatest, call, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

export function* enrollmentUpdate({ payload }) {

  try {

    const {id} = payload.data;

    yield call(api.put, `enrollments/${id}`);

    toast.success('Plano Editado com Sucesso');

    history.push('/plans');
  } catch (err) {
    toast.error('Falha ao Editar Plano, Verifique os dados');
  }
}
export default all([
  takeLatest('@enrollment/ENROLLMENT_UPDATE_REQUEST', enrollmentUpdate),

]);
