import { useState } from 'react'
import Left from './components/Left'
import Right from './components/Right'
import pasoProcessor from './utils/pasosProcessor'
// import ruta from './constants/rutas'
// import rutaProcessor from './utils/rutasProcessor'
import ListadoLoader from './components/listado-loader/ListadoLoader'
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

export default function Remediathor () {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [pasos, setPasos] = useState(new Map())
  const [listDatsalDatent, setListDatsalDatent] = useState(null)
  const [activeTab, setActiveTab] = useState('1')
  // const [peticiones, setPeticiones] = useState([])

  // const pet = {
  //   id: '',
  //   name: '',
  //   pasos: [
  //     {
  //       tipo: 'FICHERO|AJF',
  //       accion: 'COPIAR|RENOMBRAR|BORRAR|COMPRIMIR|DESCOMPRIMIR --- CARGAR|HOLDEAR|DESHOLDEAR|BORRAR'
  //     }
  //   ]
  // }

  const onSavePaso = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries())
    // const pasoNuevo = pasoProcessor.process(formJson)
    // setPasos(() => [...pasos, pasoNuevo])
    const pasoObj = pasos.get(form.id)
    setPasos(new Map(pasos.set(form.id, Object.assign(pasoObj, formJson))))
    console.log(pasos)
    setTextAreaValue(pasoProcessor.merge(pasos))
  }

  const onKeyDownAtajos = (e) => {
    console.log(e)
  }

  return (
    <>
      <nav className='container d-flex flex-row justify-content-around align-items-center'>
        <h1><b>{'{R}'}</b></h1>
        <ListadoLoader id='DATENT_DATSAL' name={'Daent/Datsal'} setListado={setListDatsalDatent} listados={listDatsalDatent} />
        <ListadoLoader id='HISTO' name={'Histo'} setListado={setListDatsalDatent} listados={listDatsalDatent} />
        <ListadoLoader id='HISTO_IFRS9' name={'Histo IFRS9'} setListado={setListDatsalDatent} listados={listDatsalDatent} />
      </nav>
      <div className='ms-3 me-3'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={() => setActiveTab('1')}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '2' ? 'active' : ''}
              onClick={() => setActiveTab('2')}
            >
              +
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <div>
              </div>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <div>
              </div>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      <div className='container mt-2' onKeyUp={onKeyDownAtajos} tabIndex={0}>
        <div className='row'>
          <Left onSavePaso={onSavePaso} pasos={pasos} setPasos={setPasos} listDatsalDatent={listDatsalDatent} />
          <Right pasos={pasos} textAreaValue={textAreaValue} setTextAreaValue={setTextAreaValue}/>
        </div>
      </div>
    </>
  )
}
