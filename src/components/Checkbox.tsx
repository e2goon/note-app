import { FC } from 'react'
import cc from 'classcat'

const Checkbox: FC<{ className?: string }> = ({ className }) => {
  const checkbox = [
    'appearance-none',
    'w-6',
    'h-6',
    'bg-gray-200',
    'rounded-lg',
    'cursor-pointer',
    'ring-offset-2',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-gray-600',
    'hover:bg-gray-300',
    'checked:bg-gray-900',
  ]
  return <input type="checkbox" className={cc([checkbox, className])} />
}

export default Checkbox
