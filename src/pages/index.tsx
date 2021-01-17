import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/layouts/BasicLayout'

const Tasks: NextPage = () => {
  return (
    <Layout>
      <fieldset className="flex">
        <legend className="sr-only">New Task</legend>
        <label className="flex-1 mr-2">
          <input
            type="text"
            className="py-4 px-6 w-full bg-white rounded-2xl"
          />
        </label>
        <button
          type="button"
          className="py-4 px-6 bg-gray-900 text-white rounded-2xl"
        >
          Add
        </button>
      </fieldset>

      <section className="my-10">
        <h2 className="mb-4 text-lg font-bold">Todos</h2>
        <div role="list">
          <div role="listitem" className="my-4 relative">
            <Link href="/id">
              <a className="block py-4 px-6 w-full bg-white rounded-2xl">Task Name</a>
            </Link>
            <input type="checkbox" className="absolute top-0 right-0 top-1/2 right-4 transform-gpu -translate-y-1/2" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">Done</h2>
        <div role="list">
          <div role="listitem" className="my-4 relative">
            <Link href="/id">
              <a className="block py-4 px-6 w-full bg-white rounded-2xl">Task Name</a>
            </Link>
            <input type="checkbox" className="absolute top-0 right-0 top-1/2 right-4 transform-gpu -translate-y-1/2" />
          </div>
          <div role="listitem" className="my-4 relative">
            <Link href="/id">
              <a className="block py-4 px-6 w-full bg-white rounded-2xl">Task Name</a>
            </Link>
            <input type="checkbox" className="absolute top-0 right-0 top-1/2 right-4 transform-gpu -translate-y-1/2" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tasks
