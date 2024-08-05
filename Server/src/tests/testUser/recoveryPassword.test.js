import supertest from 'supertest'
import { server } from '../../../server.js'
import { envs } from '../../config/enviroments/enviroments.js'

const api = supertest(server)

describe('POST /users/recovery-password', () => {
  
  it('should change the password when send correct data', async () => {

    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userexample',
        NewPassword: 'Newpassword24'
    })

    expect(response.status).toBe(200)
    expect(response.body.Success).toBe(true)
    expect(response.body.Message).toBe("Password updated!")
  })

  it('should change the password when send correct data but send the same password', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userexample',
        NewPassword: 'Newpassword24'
      })

    expect(response.status).toBe(200)
    expect(response.body.Success).toBe(true)
    expect(response.body.Message).toBe("Password has not changed.")
  })

  it('should return an error when the username is empty', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: '',
        NewPassword: 'NewPassword'
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Username must be at least 3 characters long')
  })

  it('should return an error when the new password is empty', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userexample',
        NewPassword: ''
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('NewPassword must be at least 8 characters long')
  })

  it('should return an error when the username and new password are empty', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: '',
        NewPassword: ''
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe("Username must be at least 3 characters long, NewPassword must be at least 8 characters long")
  })

  it.skip('should return an error when the new password does not meet the requirements', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userexample',
        NewPassword: 'short'
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Password does not meet requirements')
  })

  it('should return an error when the username does not exist', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'unknowUser',
        NewPassword: 'newPassword'
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe("Player 'unknowUser' not found.")
  })

  it('should return an error when username is a number', async () => {
    const response = await api
        .post('/users/recovery-password')
        .send({ Username: 12345, NewPassword: 'validPassword123' })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Username must be a string')
})

  it('should return an error when new password is a number', async () => {
      const response = await api
          .post('/users/recovery-password')
          .send({ Username: 'validUsername', NewPassword: 12345678 })

      expect(response.status).toBe(500)
      expect(response.body.error).toBe('NewPassword must be a string')
  })

  it('should return an error when username is undefined', async () => {
      const response = await api
          .post('/users/recovery-password')
          .send({ NewPassword: 'validPassword123' })

      expect(response.status).toBe(500)
      expect(response.body.error).toBe('Username is required')
  })

  it('should return an error when new password is undefined', async () => {
      const response = await api
          .post('/users/recovery-password')
          .send({ Username: 'validUsername' })

      expect(response.status).toBe(500)
      expect(response.body.error).toBe('NewPassword is required')
  })
})
