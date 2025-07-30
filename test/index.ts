import { element, render, routerBox, routerLink } from '@fm2/puffin'

import { NavBar } from '../src/index'
import HomeRoute from './routes/home'
import RadioGroupRoute from './routes/radio_groups'
import ButtonsRoute from './routes/buttons'
import TextRoute from './routes/text'
import CardRoute from './routes/card'
import InputRoute from './routes/input'
import TextAreaRoute from './routes/textarea'

// Puffin `element` visszatérési típusa lehet JSX.Element-szerű, de általában any-t ad vissza,
// ha van típusdef a @fm2/puffin-hoz, akkor azt lehet használni, itt maradunk simán const-nál.

const App = element({
	components: {
		NavBar,
		routerBox,
		routerLink,
		RadioGroupRoute,
		ButtonsRoute,
		TextRoute,
		CardRoute,
		HomeRoute,
		InputRoute,
		TextAreaRoute
	}
})`
  <div>
    <NavBar>
      <routerLink group="home" to="/home">Home</routerLink>
      <routerLink group="home" to="/radio_group">Radio group</routerLink>
      <routerLink group="home" to="/button">Button</routerLink>
      <routerLink group="home" to="/titlestext">Text</routerLink>
      <routerLink group="home" to="/card">Card</routerLink>
      <routerLink group="home" to="/input">Input</routerLink>
      <routerLink group="home" to="/textarea">TextArea</routerLink>
    </NavBar>
    <routerBox group="home" default="/home">
      <div from="/home">
        <HomeRoute/>
      </div>
      <div from="/radio_group">
        <RadioGroupRoute/>
      </div>
      <div from="/button">
        <ButtonsRoute/>
      </div>
      <div from="/titlestext">
        <TextRoute/>
      </div>
      <div from="/card">
        <CardRoute/>
      </div>
      <div from="/input">
        <InputRoute/>
      </div>
      <div from="/textarea">
        <TextAreaRoute/>
      </div>
    </routerBox>
  </div>
`

// Ellenőrizzük, hogy létezik-e az elem mielőtt rendereljük (TS miatt)
const root = document.getElementById("app")
if (root) {
	render(App, root)
} else {
	console.warn("Nincs <div id=\"app\"> az oldalon.")
}
