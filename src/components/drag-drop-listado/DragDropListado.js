// import maquinas from '../../constants/maquinas'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { multiDrag, selections } from '@formkit/drag-and-drop'

export default function DragDropListado ({ listado }) {
  const [todoList, todos] = useDragAndDrop(['B', 'C', 'D'], {
    group: 'A',
    plugins: [
      multiDrag({
        plugins: [
          selections({
            selectedClass: 'bg-primary'
          })
        ]
      })]
  })
  const [doneList, dones] = useDragAndDrop(['A'], {
    group: 'A',
    plugins: [
      multiDrag({
        plugins: [
          selections({
            selectedClass: 'bg-primary'
          })
        ]
      })]
  })

  return (
    <div>
      <ul ref={doneList} className='border file-list'>
        {dones.map((done) => (
          <li className="" key={done}>{done}</li>
        ))}
      </ul>
      <br />

      <ul ref={todoList} className='border file-list'>
        {todos.map((todo) => (
          <li className="" key={todo}>{todo}</li>
        ))}
      </ul>
    </div>

  )
}
