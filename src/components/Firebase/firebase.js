import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyBt2mJFv2pJ8JPqguq2pGONysqQb0xSev0',
  authDomain: 'myflashcards-f48b9.firebaseapp.com',
  databaseURL: 'https://myflashcards-f48b9.firebaseio.com',
  projectId: 'myflashcards-f48b9',
  storageBucket: 'myflashcards-f48b9.appspot.com',
  messagingSenderId: '346796309304',
  appId: '1:346796309304:web:877cae1a557e48a4819fcd',
  measurementId: 'G-GDGGKL3954'
}

class Firebase {
  constructor () {
    app.initializeApp(config)

    this.auth = app.auth()
    this.db = app.database()
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  // call flashcards data
  callData = async () =>
    await this.db
      .ref('cards')
      .once('value')
      .then(snapshot => {
        return snapshot.val().filter(card => card != null)
      })

  updateCard = async (id, value) =>
    await this.db
      .ref('/cards/' + id)
      .set(value)
      .then(res => res)

  deleteCard = async id => await this.db.ref('/cards/' + id).remove()

  deleteAll = async id => await this.db.ref('/cards').remove()

  async create (flashcard) {
    await this.db
      .ref('cards')
      .once('value')
      .then(snapshot => {
        let items = snapshot.val()
        let count = 0

        for (var property in items) {
          if (Object.prototype.hasOwnProperty.call(items, property)) {
            count++
          }
        }

        flashcard.id = count
        this.db.ref('/cards/' + flashcard.id).set(flashcard)
      })

    return this.db.ref('/cards/' + flashcard.id).push()
  }

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`)

  users = () => this.db.ref('users')
}

export default Firebase
