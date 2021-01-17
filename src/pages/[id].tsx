import { NextPage } from 'next'
import Layout from '@/layouts/BasicLayout'

const TaskDetail: NextPage = () => {
  return (
    <Layout>
      <fieldset>
        <legend>Task</legend>
        <div>
          <label htmlFor="">Task</label>
          <textarea name="" id="" cols={30} rows={10} className="py-4 px-6 w-full bg-white rounded-2xl"></textarea>
          <input type="checkbox" />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea name="" id="" cols={30} rows={10}></textarea>
        </div>
        <div>
          <button>Save</button>
        </div>
      </fieldset>
    </Layout>
  )
}

export default TaskDetail
