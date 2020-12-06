import Firebase from '../Components/Firebase'

const firebase = new Firebase()

// call flashcards data (not working)
describe('create new flashcard then delete it', () => {
  let data = {
    id: 99,
    frontside: 'racecar',
    backside: 'racecar',
    answer: 'it goes vroom'
  }
  it('should create new card', async () => {
    const result = firebase.create(data).catch(e => e.message)
    await expect(result).resolves.toEqual('aaaaaaaaaaaaaa.')
  })

  it('should delete the created card', async () => {
    const result = firebase.deleteCard(data.id).catch(e => e.message)
    await expect(result).resolves.toEqual('aaaaaaaaaaaaaa.')
  })
})
