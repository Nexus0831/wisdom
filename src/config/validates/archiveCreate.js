const validate = (values) => {
  const errors = {};

  // メールアドレス
  if (!values.title) {
    errors.title = 'タイトルは必須入力です';
  }
  // パスワード
  if (!values.markdown) {
    errors.markdown = 'アーカイブの内容は必須入力です';
  }

  return errors;
};

export default validate;
