import axios from 'axios'
import apiUrl from '../apiConfig'

export const createJob = (title, company, description, budget, date, user) => {
  return axios.post(
    `${apiUrl}/jobs/`,
    { job: { title, company, description, budget, date } },
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
export const indexJobs = (user) => {
  return axios.get(
    `${apiUrl}/jobs/`,
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
export const indexUsersJobs = (user) => {
  return axios.get(
    `${apiUrl}/jobs/owner/`,
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const showJob = (id, user) => {
  return axios.get(`${apiUrl}/jobs/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteJob = (id, user) => {
  return axios.delete(`${apiUrl}/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateJob = (id, title, company, description, budget, date, user) => {
  return axios.patch(
    `${apiUrl}/jobs/${id}`,
    { job: { title, company, description, budget, date } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}