import { navigate } from 'svelte-routing';
import { post } from '../utils/axios'
import setUpUser from './setUpUser';
import globalStore from '../stores/globalStore';

async function loginUser({ email, password }) {
  const displayMsg = 'Invalid email or password.';
  const response = await post('/auth/local', {
    identifier: email,
    password,
  }, displayMsg)

  if (response.data) {
    setUpUser(response.data)
    navigate('/products')
    globalStore.setAlert({
      show: true,
      message: 'Welcome back!',
      type: 'success',
    })
  } else {
    globalStore.setAlert({
      show: true,
      message: response.error.displayMsg,
      type: 'danger',
    })
  }
}

export default loginUser