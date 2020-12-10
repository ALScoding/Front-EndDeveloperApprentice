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
      .doCreateUserWithEmailAndPassword('slacker@gmail.com', 'pass')
      .catch(e => e.message)

    await expect(result).resolves.toEqual(
      'Password should be at least 6 characters'
    )
  })

  it('should return an error due to user existing', async () => {
    const result = firebase
      .doCreateUserWithEmailAndPassword('slacker@gmail.com', 'blahblah')
      .catch(e => e.message)

    await expect(result).resolves.toEqual(
      'The email address is already in use by another account.'
    )
  })
})

// now working
describe('sign in then sign out', () => {
  it('should sign in with email and password', async () => {
    const result = await firebase
      .doSignInWithEmailAndPassword('slacker@gmail.com', 'blahblah')
      .then(e => e)
    expect(result.user.uid).toBeTruthy()
  })

  it('should sign out', async () => {
    const result = await firebase.doSignOut().then(e => e)
    expect(result).toBeFalsy()
  })
})
