import { element } from '@fm2/puffin'
import { Text } from '../../src/index'

function HomeRoute() {
	return element({
		components: {
			Text
		}
	})`
	<div>
		<Text>This demo shows the implemented Drac's components in PuffinJS</Text>
	</div>`
}

export default HomeRoute
