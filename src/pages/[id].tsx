import { NextPage } from 'next'
import Layout from '@/layouts/BasicLayout'
import Checkbox from '@/components/Checkbox'

const TaskDetail: NextPage = () => {
  return (
    <Layout isBack>
      <fieldset>
        <legend className="sr-only">Task Field</legend>
        <section className="my-10 mt-0">
          <label className="block mb-4 text-lg font-bold">Task</label>
          <div className="my-4 relative">
            <input
              type="text"
              className="block py-4 px-6 w-full bg-white rounded-2xl outline-none ring-2 ring-transparent hover:ring-gray-300 focus:ring-gray-600"
              defaultValue={'Hello Alex~!?'}
            />
            <Checkbox className="absolute top-1/2 right-4 transform-gpu -translate-y-1/2" />
          </div>
        </section>
        <section className="my-10">
          <label className="block mb-4 text-lg font-bold">Comments</label>
          <textarea
            cols={30}
            rows={6}
            className="py-4 px-6 w-full bg-white rounded-2xl resize-y outline-none ring-2 ring-transparent hover:ring-gray-300 focus:ring-gray-600"
          ></textarea>
        </section>
        <section className="my-10 mb-0">
          <button
            type="button"
            className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl"
          >
            Save
          </button>
        </section>
      </fieldset>
    </Layout>
  )
}

export default TaskDetail
