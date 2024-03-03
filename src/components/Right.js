

export default function Right({ pasos }) {
  return (
    <div className="border">
      <p>Buenas tardes,</p>
      <p>Solicitamos los siguientes pasos:</p>
      <br />
      {
      pasos.map(paso => (<pre>{paso}</pre>))
      }
      <br />
      <p>Gracias!</p>
      <p>Un saludo.</p>

    </div>
  );
  }
  