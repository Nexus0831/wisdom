const validate = (values) => {
  const errors = {};

  // メールアドレス
  if (!values.email) {
    errors.email = 'メールアドレスは必須入力です';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'メールアドレスが正しい形式ではありません';
  } else if (!/^[0-9a-zA-Z-@._]+$/i.test(values.email)) {
    errors.email = 'メールアドレスは半角で入力して下さい';
  }

  // パスワード
  if (!values.password) {
    errors.password = 'パスワードは必須入力です';
  } else if (values.password.length > 20) {
    errors.password = 'パスワードは20文字以内で入力して下さい';
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = 'パスワードには必ず大文字を入力してください';
  }

  return errors;
};

export default validate;
