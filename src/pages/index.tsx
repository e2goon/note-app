import { useState, createRef, SyntheticEvent, ChangeEvent } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import Layout from '@/layouts/BasicLayout'
import Checkbox from '@/components/Checkbox'
import { todosState } from '@/states'

const Tasks: NextPage = () => {
  const textInput = createRef<HTMLInputElement>()
  const [input, setInput] = useState('')
  const [todos, setTodos] = useRecoilState(todosState)
  const handleChange = ({ target }) => setInput(target.value)
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (input.length <= 0) return;
    const todo = {
      id: 0,
      name: input,
      comments: '',
      checked: false,
    }
    setTodos([todo, ...todos])
    setInput('')
    textInput.current.focus()
  }
  const handleToggle = (todo) => (e: ChangeEvent<HTMLInputElement>) => {
    console.log(todo, e.target.checked)
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex">
          <legend className="sr-only">New Task</legend>
          <label className="flex-1 mr-2">
            <input
              ref={textInput}
              type="text"
              className="block py-4 px-6 w-full bg-white rounded-2xl outline-none ring-2 ring-transparent hover:ring-gray-300 focus:ring-gray-600"
              placeholder="Write a new task"
              value={input}
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            className="py-4 px-6 bg-gray-900 text-white rounded-2xl focus:outline-none"
            onClick={handleSubmit}
          >
            Add
          </button>
        </fieldset>
      </form>

      <section className="my-10">
        <h2 className="mb-4 text-lg font-bold">Todos</h2>
        <div role="list">
          {todos.map((todo, index) => (
            <div key={index} role="listitem" className="my-4 relative">
              <Link href={`/${todo.id}`}>
                <a className="block py-4 px-6 w-full bg-white rounded-2xl outline-none hover:underline focus:ring-2 focus:ring-gray-600">
                  {todo.name}
                </a>
              </Link>
              <Checkbox
                onChange={handleToggle(todo)}
                className="absolute top-1/2 right-4 transform-gpu -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">Done</h2>
        <div role="list">
          {todos
            .filter((todo) => todo.checked === true)
            .map((todo) => (
              <div role="listitem" className="my-4 relative">
                <Link href="/id">
                  <a className="block py-4 px-6 w-full bg-white rounded-2xl outline-none hover:underline focus:ring-2 focus:ring-gray-600">
                    {todo.name}
                  </a>
                </Link>
                <Checkbox className="absolute top-1/2 right-4 transform-gpu -translate-y-1/2" />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export default Tasks
