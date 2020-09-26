import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getUserBooks = async ({ userEmail }) => {
  const userData = new FormData()
  userData.append('userEmail', userEmail)

  try {
    const response = await axios({
      url: `${baseUrl}/user/books`,
      method: 'POST',
      data: userData
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const signUpUser = async userInfo => {
  const userData = new FormData()
  userData.append('email', userInfo.email)
  userData.append('password', userInfo.password)
  userData.append('name', userInfo.name)
  userData.append('photo', userInfo.photo)

  try {
    const response = await axios({
      url: `${baseUrl}/user/signup`,
      method: 'POST',
      data: userData
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const logInUser = async ({ email, password }) => {
  const userData = new FormData()
  userData.append('email', email)
  userData.append('password', password)

  try {
    const response = await axios({
      url: `${baseUrl}/user/login`,
      method: 'POST',
      data: userData
    })

    return response
  } catch (e) {
    console.error(e)
  }
}