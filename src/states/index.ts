import { atom, RecoilState } from 'recoil'

type TodoType = {
  id: string
  name: string
  checked: boolean
  comments?: string
}

const todosState: RecoilState<TodoType[]> = atom({
  key: 'todosState',
  default: [],
})

export { todosState }
