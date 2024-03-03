export default function Right ({ pasos }) {
  return (
    <div className="border">
      <p>Buenas tardes,</p>
      <p>Solicitamos los siguientes pasos:</p>
      <br />
      {
      pasos.map(paso => (<pre key=''>{paso}</pre>)) // FIXME: Pendiente enviar array de objetos con ID
      }
      <br />
      <p>Gracias!</p>
      <p>Un saludo.</p>

    </div>
  )
}
