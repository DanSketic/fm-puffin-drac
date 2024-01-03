import { element } from '@fm2/puffin'
import { TextArea } from '../../src/index'

function TextAreaRoute(){
	return element({
		components:{
			TextArea
		}
	})`
	<div>
		<TextArea>Hello World</TextArea>
	</div>`
	}

export default TextAreaRoute
