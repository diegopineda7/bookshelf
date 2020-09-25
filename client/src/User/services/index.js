import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getUserBooks = async userInfo => {
  const userData = new FormData()
  userData.append('userEmail', userInfo.userEmail)

  try {
    const response = await axios({
      url: `${baseUrl}/user/books`,
      method: 'GET',
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
  userData.append('password', userInfo.pasword)
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