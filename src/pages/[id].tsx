import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import Layout from '@/layouts/BasicLayout'
import { todosState } from '@/states'

const TaskDetail: NextPage = () => {
  const { query } = useRouter()
  const [todos, setTodos] = useRecoilState(todosState)
  const [todo] = todos.filter((todo) => todo.id === query.id)
  const [comment, setComment] = useState('')

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newTodos = todos.map((item) =>
      item !== todo ? item : { ...todo, ...{ comments: comment } }
    )
    setTodos(newTodos);
    console.log(newTodos);
  }

  return (
    <Layout isBack>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="sr-only">Task Field</legend>
          <section className="my-10 mt-0">
            <label className="block mb-4 text-lg font-bold">Task</label>
            <div className="my-4">
              <input
                type="text"
                className="block py-4 px-6 w-full bg-white rounded-2xl outline-none ring-2 ring-transparent hover:ring-gray-300 focus:ring-gray-600"
                defaultValue={todo.name}
              />
            </div>
          </section>
          <section className="my-10">
            <label className="block mb-4 text-lg font-bold">Comments</label>
            <textarea
              onChange={handleChange}
              cols={30}
              rows={6}
              className="py-4 px-6 w-full bg-white rounded-2xl resize-y outline-none ring-2 ring-transparent hover:ring-gray-300 focus:ring-gray-600"
              value={todo.comments}
            ></textarea>
          </section>
          <section className="my-10 mb-0">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl focus:outline-none"
            >
              Save
            </button>
          </section>
        </fieldset>
      </form>
    </Layout>
  )
}

export default TaskDetail
