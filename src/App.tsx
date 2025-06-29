import './App.css'
import { EditModeProvider } from './context/editComponentContext'
import { ShortCutProvider } from './context/shortCutProvider'
import { AppRoutes } from './routes'

function App() {
  return (
    <>
    <EditModeProvider>
      <ShortCutProvider />
      <AppRoutes />
    </EditModeProvider>
    </>
  )
}

export default App
