import Firebase from '../Components/Firebase'

const firebase = new Firebase()

describe('errors from doCreateUserWithEmailAndPassword', () => {
  it('should return an error due to wrong email', async () => {
    const result = firebase
      .doCreateUserWithEmailAndPassword('myEmail', '123456')
      .catch(e => e.message)

    await expect(result).resolves.toEqual(
      'The email address is badly formatted.'
    )
  })

  it('should return an error due to short password', async () => {
    const result = firebase
      .doCreateUserWithEmailAndPassword('myEmail@email.com', 'pass')
      .catch(e => e.message)

    await expect(result).resolves.toEqual(
      'Password should be at least 6 characters'
    )
  })

  it('should return an error due to user existing', async () => {
    const result = firebase
      .doCreateUserWithEmailAndPassword('myEmail@email.com', 'password123')
      .catch(e => e.message)

    await expect(result).resolves.toEqual(
      'The email address is already in use by another account.'
    )
  })
})

// not working
describe('sign in then sign out', () => {
  let user
  it('should return true', async () => {
    const result = firebase
      .doSignInWithEmailAndPassword('myEmail@email.com', 'password123')
      .doSignOut.catch(e => (user = e))
    expect(user).toEqual(true)
  })
})
