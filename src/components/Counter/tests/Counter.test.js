import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

test('user clicks increment button and count increases', async () => {
  const user = userEvent.setup()

  render(<Counter />)

  expect(screen.getByText('0')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: '+' }))

  expect(screen.getByText('1')).toBeInTheDocument()
})

test('user clicks decrement button and count decreases', async () => {
  const user = userEvent.setup()

  render(<Counter />)

  expect(screen.getByText('0')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: '-' }))

  expect(screen.getByText('-1')).toBeInTheDocument()
})
