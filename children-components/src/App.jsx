import './App.css'
import { Wrapper } from './components/Wrapper/Wrapper'
import { WrapperHeader } from './components/Wrapper/Wrapper'
import { WrapperSubHeader } from './components/Wrapper/Wrapper'

function App() {


  return (
    <>
      <Wrapper>
        <WrapperHeader title = 'Hello World!'/>
      </Wrapper>
      <Wrapper>
        <WrapperSubHeader subTitle = 'This is I, The Codemaster'/>
      </Wrapper>
    </>
  )
}

export default App
