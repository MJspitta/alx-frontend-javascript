import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userP = signUpUser(firstName, lastName);
  const photoP = uploadPhoto(fileName);

  return Promise.allSettled([userP, photoP])
    .then((result) => {
      const arr = [];
      for (const res of result) {
        arr.push({ status: res.status, value: res.value || res.reason });
      }
      return arr;
    });
}
