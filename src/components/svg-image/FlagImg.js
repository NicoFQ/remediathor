// import img from './../../img/AR.svg'

export default function FlagImg ({ pais = 'AR', height = 50 }) {
  const nombreImg = `flags/${pais}.png`
  return (
    <img src={nombreImg} alt={pais} height={height}/>
  )
}
