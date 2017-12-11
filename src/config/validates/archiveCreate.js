const validate = (values) => {
  const errors = {};

  // 列数
  // if (!values.column) {
  //   errors.column = '列数は必須入力です';
  // } else if (!/^[0-9]*$/i.test(values.column)) {
  //   errors.column = '列数は半角数字のみで入力してください';
  // }
  //
  // // 行数
  // if (!values.row) {
  //   errors.row = '行数は必須入力です';
  // } else if (!/^[0-9]*$/i.test(values.row)) {
  //   errors.row = '行数は半角数字のみで入力してください';
  // }

  return errors;
};

export default validate;
