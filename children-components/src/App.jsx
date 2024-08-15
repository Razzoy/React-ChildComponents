import './App.css'
import { Wrapper } from './components/Wrapper/Wrapper'
import { WrapperHeader } from './components/Wrapper/Wrapper'
import { WrapperSubHeader } from './components/Wrapper/Wrapper'
import { Cards } from './components/Cards/Cards'
import { CardHeader } from './components/Cards/CardHeader/CardHeader'
import { CardBody } from './components/Cards/CardBody/CardBody'
import { CardFooter } from './components/Cards/CardFooter/CardFooter'
import { CardImages } from './components/Cards/CardImages/CardImages'

const cardsArray = [
  {
    'Title': 'Child 1',
    'Image': 'image1.PNG',
    'TextContent': 't: "Child 1" becomes tapped',
    'FooterContent': 'Rarity: Common 1/2',
  },
  {
    'Title': 'Child 2',
    'Image': 'image1.PNG',
    'TextContent': 't: "Child 2" becomes tapped',
    'FooterContent': 'Rarity: Mythic 4/4',
  },
  {
    'Title': 'Child 3',
    'Image': 'image1.PNG',
    'TextContent': 't: "Child 3" becomes tapped',
    'FooterContent': 'Rarity: Uncommon 2/2',
  },
  {
    'Title': 'Child 4',
    'Image': 'image1.PNG',
    'TextContent': 't: "Child 4" becomes tapped',
    'FooterContent': 'Rarity: Rare 2/4',
  },
  {
    'Title': 'Child 5',
    'Image': 'image1.PNG',
    'TextContent': 't: "Child 5" becomes tapped',
    'FooterContent': 'Rarity: Common 1/1',
  }
]

function App() {


  return (
    <>
      <Wrapper>
        <WrapperHeader title='Hello World!' />
        <WrapperSubHeader subTitle='This is I, The Codemaster' />
      </Wrapper>
      <Wrapper>
        {cardsArray.map((item) => (
          <Cards key={item.Title}>
            <CardHeader title={item.Title}></CardHeader>
            <CardImages image={item.Image}></CardImages>
            <CardBody bodyText={item.TextContent}></CardBody>
            <CardFooter footerText={item.FooterContent}></CardFooter>
          </Cards>
        ))}
      </Wrapper>


    </>
  )
}

export default App
