import { navigate } from 'svelte-routing';
import { post } from '../utils/axios'
import setUpUser from './setUpUser';
import globalStore from '../stores/globalStore';

async function registerUser({ username, password, email }) {
  const displayMsg = 'Something bad happend registering user, please try again.';
  const response = await post('/auth/local/register', {
    username,
    password,
    email,
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

export default registerUser