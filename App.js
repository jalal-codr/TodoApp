import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry,  Layout, } from '@ui-kitten/components';
import Navigation from './Components/Navigation/Navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Navigation/>
      </ApplicationProvider>
    </>
  );
}


