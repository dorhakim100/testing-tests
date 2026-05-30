import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../Input'

test('clears the input after the user sends a value', async () => {
  const user = userEvent.setup()

  const defaultValue = 'Hello World'
  render(<Input />)

  expect(screen.getByPlaceholderText('Type something...')).toBeInTheDocument()

  await user.type(
    screen.getByPlaceholderText('Type something...'),
    defaultValue
  )

  expect(screen.getByDisplayValue(defaultValue)).toBeInTheDocument()

  await user.click(screen.getByText('Send'))

  expect(screen.getByPlaceholderText('Type something...')).toHaveValue('')
})
