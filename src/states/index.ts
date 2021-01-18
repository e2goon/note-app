import { atom } from 'recoil'

const todosState = atom({
  key: 'todosState',
  default: [{
    id: 0,
    name: 'Task Name - 1',
    comments: '',
    checked: false,
  }],
})

export { todosState }
