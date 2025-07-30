import { element } from '@fm2/puffin'
import { Button } from '../../src/index'

function ButtonsRouter() {
	return element({
		components: {
			Button
		}
	})`
	<div>
		<Button>Button</Button>
		<Button>Another Button</Button>
		<Button class="disabled">Disabled</Button>
	</div>`
}

export default ButtonsRouter