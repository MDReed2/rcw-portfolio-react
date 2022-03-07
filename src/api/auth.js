import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up/',
    data: {
      credentials: {
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation
      }
    }
  })
}

export const signIn = (credentials) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-in/',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios.delete(apiUrl + '/sign-out/', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const changePassword = (oldPassword, newPassword, user) => {
  return axios.patch(
    apiUrl + '/change-password/',
    {
      passwords: {
        old: oldPassword,
        new: newPassword
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}