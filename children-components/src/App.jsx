import './App.css'
import { Wrapper } from './components/Wrapper/Wrapper'
import { WrapperHeader } from './components/Wrapper/Wrapper'
import { WrapperSubHeader } from './components/Wrapper/Wrapper'
import { Cards } from './components/Cards/Cards'
import { CardHeader } from './components/Cards/CardHeader/CardHeader'
import { CardBody } from './components/Cards/CardBody/CardBody'
import { CardFooter } from './components/Cards/CardFooter/CardFooter'

function App() {


  return (
    <>
      <Wrapper>
        <WrapperHeader title = 'Hello World!'/>
      </Wrapper>
      <Wrapper>
        <WrapperSubHeader subTitle = 'This is I, The Codemaster'/>
      </Wrapper>

      <Cards>
        <CardHeader title = 'Child Card-------------2U'/>
        <CardBody bodyText = 't: "Child Card" becomes tapped'/>
        <CardFooter footerText = 'Rarity: Common-----------------------1/2'/>
      </Cards>
    </>
  )
}

export default App
