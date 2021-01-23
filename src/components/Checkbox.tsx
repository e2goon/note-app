import { FC, SyntheticEvent } from 'react'
import cc from 'classcat'

type CheckboxType = {
  className?: string
  onChange?: (e: SyntheticEvent) => void
  checked?: boolean
  readonly?: boolean
}

const Checkbox: FC<CheckboxType> = ({ className, onChange, checked, readonly }) => {
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
    'checked:bg-gray-900',
  ]
  return (
    <input
      type="checkbox"
      className={cc([checkbox, className])}
      checked={checked}
      onChange={onChange}
      readOnly={readonly}
    />
  )
}

export default Checkbox
