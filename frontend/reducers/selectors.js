
export function allTodos(state) {
  let keys = Object.keys(state.todos);
  let res = [];
  keys.forEach(
    (key) => (res.push(state.todos[key]))
  );
  return res;
}
