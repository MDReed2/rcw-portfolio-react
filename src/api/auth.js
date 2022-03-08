import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (firstname,lastname, email, password, passwordConfirmation) => {
  return axios.post(apiUrl + '/sign-up/', {
    credentials: {
      firstname,
      lastname,
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  })
}

export const signIn = (email, password) => {
  return axios.post(apiUrl + '/sign-in/', {
    credentials: {
      email,
      password
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