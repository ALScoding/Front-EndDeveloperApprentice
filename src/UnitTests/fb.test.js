import * as firebaseAdmin from 'firebase-admin'; 
import firebaseServiceAccountKey from './firebaseServiceAccountKey.json';
import firebaseAdmin from './firebase';
import { createCourse } from './';
import * as firebaseAdminVanilla from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(
      firebaseServiceAccountKey
    ),
    databaseURL: 'https://my-firebase-application.firebaseio.com',
  });
}
 // https://myflashcards-f48b9.firebaseio.com

export const createCourse = async ({
  uid,
  courseId,
  bundleId,
  amount,
  paymentType,
}) => {
  await firebaseAdmin
    .database()
    .ref(`users/${uid}/courses`)
    .push()
    .set({
      courseId: courseId,
      packageId: bundleId,
      invoice: {
        createdAt: firebaseAdmin.database.ServerValue.TIMESTAMP,
        amount,
        licensesCount: 1,
        currency: 'USD',
        paymentType,
      },
    });
 
  return true;
}
export default firebaseAdmin;

describe('createFreeCourse', () => {
  it('creates a course', async () => {
    const set = firebaseAdmin
      .database()
      .ref()
      .push().set;
 
    const result = createCourse(
      '1',
      'THE_ROAD_TO_GRAPHQL',
      'STUDENT',
      0,
      'FREE'
    );
 
    await expect(result).resolves.toEqual(true);
 
    expect(set).toHaveBeenCalledTimes(1);
 
    expect(set).toHaveBeenCalledWith({
      courseId: 'THE_ROAD_TO_GRAPHQL',
      packageId: 'STUDENT',
      invoice: {
        createdAt: 'TIMESTAMP',
        amount: 0,
        licensesCount: 1,
        currency: 'USD',
        paymentType: 'FREE',
      },
    });
  });
});

jest.mock('./firebase', () => {
  const set = jest.fn();
 
  return {
    database: jest.fn(() => ({
      ref: jest.fn(() => ({
        push: jest.fn(() => ({
          set,
        })),
      })),
    })),
  };
});
 
describe('createFreeCourse', () => {
  ...
});

export const createCourse = async ({
  uid,
  courseId,
  bundleId,
  amount,
  paymentType,
}) =>
  await firebaseAdmin
    .database()
    .ref(`users/${uid}/courses`)
    .push()
    .set({
      courseId: courseId,
      packageId: bundleId,
      invoice: {
        createdAt: firebaseAdminVanilla.database.ServerValue.TIMESTAMP,
        amount,
        licensesCount: 1,
        currency: 'USD',
        paymentType,
      },
    });


jest.mock('firebase-admin', () => {
  return {
    database: {
      ServerValue: {
        TIMESTAMP: 'TIMESTAMP',
      },
    },
  };
});
 
jest.mock('./firebase', () => {
  ...
});
 
describe('createFreeCourse', () => {
  ...
});