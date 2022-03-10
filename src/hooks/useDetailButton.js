import { useTaskContext } from '.'

export const useDetailButton = () => {
  const { setCurrentDay, modalIsOpen, openModalForm } = useTaskContext()

  const handleDetailButtonClick = (event) => {
    if (modalIsOpen()) return
    event.preventDefault()
    setCurrentDay(event.target.value)
    openModalForm(true)
  }

  return { handleDetailButtonClick }
}
