import { atom } from 'jotai'

export const emailAtom = atom('');
export const passwordAtom = atom('');

export const emailIsErrorAtom = atom(get => {
  const email = get(emailAtom);
  const validEmailRegex = new RegExp(/[\w+\-.]+@[a-z\d\-.]+\.[a-z]+/i);

    if (validEmailRegex.test(email)) {
      return false
    } else {
      return true
    }
});

export const passwordIsErrorAtom = atom(get => {
  const password = get(passwordAtom);
  const validPasswordRegex = new RegExp(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i
    );
    if (validPasswordRegex.test(password)) {
      return false
    } else {
      return true
    }
});

export const clickableAtom = atom(get => {
  const email = get(emailAtom); 
  const password = get(passwordAtom);
  const emailIsError = get(emailIsErrorAtom);
  const passwordIsError = get(passwordIsErrorAtom);

  if (
    email !== '' &&
    password !== '' &&
    !emailIsError &&
    !passwordIsError
  ) {
    return true
  } else {
    return false
  }
})
