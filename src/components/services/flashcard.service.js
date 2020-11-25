import Firebase from '../Firebase/firebase'
import { withFirebase } from '../Firebase/context'
const db = Firebase.db //.ref('/cards')

class FlashcardDataService {
  getAll () {
    return db
  }

  create (flashcard) {
    db.once('value', snapshot => {
      let items = snapshot.val()
      let count = 0

      for (var property in items) {
        if (Object.prototype.hasOwnProperty.call(items, property)) {
          count++
        }
      }
      flashcard.id = count
      db.push(flashcard)
    })
    return db.push()
  }

  update (id, value) {
    return db.child(this.getchildID(id)).update(value)
  }

  delete (id) {
    return db.child(this.getchildID(id)).remove()
  }

  getchildID (id) {
    let childID
    db.orderByChild('id')
      .equalTo(id)
      .once('value', snapshot => {
        childID = Object.keys(snapshot.val())[0]
      })
    return childID
  }

  deleteAll () {
    return db.remove()
  }
}

export default new FlashcardDataService()
