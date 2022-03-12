import axios from 'axios'
import apiUrl from '../apiConfig'

export const createSuggestion = (title, description, user) => {
  return axios.post(
    `${apiUrl}/suggestions/`,
    { suggestion: { title, description } },
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
export const indexSuggestions = (user) => {
  return axios.get(
    `${apiUrl}/suggestions/`,
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
export const indexUsersSuggestions = (user) => {
  return axios.get(
    `${apiUrl}/suggestions/owner/`,
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const showSuggestion = (id, user) => {
  return axios.get(`${apiUrl}/suggestions/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteSuggestion = (id, user) => {
  return axios.delete(`${apiUrl}/suggestions/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateSuggestion = (id, title, description, user) => {
  return axios.patch(
    `${apiUrl}/suggestions/${id}`,
    { suggestion: { title, description } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}