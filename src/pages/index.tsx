import {
  useState,
  createRef,
  useCallback,
  memo,
  SyntheticEvent,
  FormEvent,
  FC,
} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import Layout from '@/layouts/BasicLayout'
import Checkbox from '@/components/Checkbox'
import { todosState } from '@/states'
import { uuid } from '@/utils'

const Tasks: NextPage = () => {
  const textInput = createRef<HTMLInputElement>()
  const [input, setInput] = useState('')
  const [todos, setTodos] = useRecoilState(todosState)

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value),
    [input]
  )

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault()

      if (input.length <= 0) return

      const todo = {
        id: uuid(),
        name: input,
        checked: false,
      }
      setTodos([todo, ...todos])
      setInput('')
      textInput.current.focus()
    },
    [input, todos]
  )

  const handleToggle = useCallback(
    (todo) => () => {
      const newTodos = todos.map((item) => {
        return item !== todo ? item : { ...item, ...{ checked: !item.checked } }
      })
      setTodos(newTodos)
    },
    [todos]
  )

  const CreateTodo: FC<{
    onSubmit: (e: SyntheticEvent) => void
    onChange: (e: FormEvent<HTMLInputElement>) => void
  }> = memo(function CreateTodo({ onSubmit, onChange }) {
    return (
      <form onSubmit={onSubmit} className="my-10">
        <fieldset className="flex">
          <legend className="sr-only">New Task</legend>
          <label className="flex-1 mr-2">
            <input
              ref={textInput}
              type="text"
              className="block py-4 px-6 w-full bg-white rounded-2xl outline-none ring-2 ring-transparent hover:ring-gray-300 focus:ring-gray-600"
              placeholder="Write a new task"
              value={input}
              onChange={onChange}
              autoFocus={true}
            />
          </label>
          <button
            type="button"
            className="py-4 px-6 bg-gray-900 text-white rounded-2xl focus:outline-none"
            onClick={onSubmit}
          >
            Add
          </button>
        </fieldset>
      </form>
    )
  })

  const TodoList: FC<{
    title: string
    todos
    isChecked?: boolean
    onToggle: (todo: any) => () => void
  }> = memo(function TodoList({ title, todos, isChecked = false, onToggle }) {
    const filteredTodos = todos.filter((todo) => todo.checked === isChecked)
    return (
      <section>
        <h2 className="mb-4 text-lg font-bold">{title}</h2>
        <div role="list">
          {filteredTodos.map((todo, index) => (
            <div key={index} role="listitem" className="my-4 relative">
              <Link href={`/${todo.id}`}>
                <a className="block py-4 px-6 pr-12 w-full bg-white rounded-2xl outline-none truncate hover:underline focus:ring-2 focus:ring-gray-600">
                  {todo.name}
                </a>
              </Link>
              <Checkbox
                onChange={onToggle(todo)}
                checked={todo.checked}
                className="absolute top-1/2 right-4 transform-gpu -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </section>
    )
  })

  return (
    <Layout>
      <CreateTodo onChange={handleChange} onSubmit={handleSubmit} />

      <TodoList title="Todos" todos={todos} onToggle={handleToggle} />
      <TodoList title="Done" todos={todos} onToggle={handleToggle} isChecked />
    </Layout>
  )
}

export default Tasks
