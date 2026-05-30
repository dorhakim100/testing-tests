import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../Input'

test('clears the input after the user sends a value', async () => {
  const user = userEvent.setup()

  render(<Input />)

  expect(screen.getByPlaceholderText('Type something...')).toBeInTheDocument()

  await user.type(
    screen.getByPlaceholderText('Type something...'),
    'Hello World'
  )

  expect(screen.getByDisplayValue('Hello World')).toBeInTheDocument()

  await user.click(screen.getByText('Send'))

  expect(screen.getByPlaceholderText('Type something...')).toHaveValue('')
})
