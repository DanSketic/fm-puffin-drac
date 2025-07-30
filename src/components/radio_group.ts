import { element, style, render } from '@fm2/puffin'

function Option({
	translated = false,
	content,
	name,
	checked = false,
	hiddenRadio = false,
	styled = true,
	key = ''
}: {
	translated?: boolean,
	content: string | HTMLElement | (() => HTMLElement),
	name: string | number,
	checked?: boolean,
	hiddenRadio?: boolean,
	styled?: boolean,
	key?: string
}) {
	function selected(this: HTMLElement) {
		const event = new CustomEvent('radioSelected', {
			detail: {
				target: this.parentElement,
				content,
				key
			}
		})
		const parent1 = this.parentElement
		const parent2 = parent1 && parent1.parentElement
		const parent3 = parent2 && parent2.parentElement
		if (parent3) {
			parent3.dispatchEvent(event)
		}
	}

	function mounted(this: HTMLElement) {
		if (checked) {
			this.children[0].children[0].setAttribute('checked', '')
		}
		this.setAttribute('hidden-radio', hiddenRadio.toString())
		this.setAttribute('styled', styled.toString())
	}
	const isLabel = typeof content === 'string'
	return element`
		<label mounted="${mounted}" key="${key}">
			<div class="wrapper">
				<input :click="${selected}" type="radio" name="${name}"></input>
				<div class="circle"></div>
				<p lang-string="${translated && isLabel ? content : ''}">${translated && isLabel ? '' : content}</p> 
			</div>
		</label>
    `

}

const RadioGroupWrapper = style`
	&{
		--radioAccentColor:#0180F4;
		--radioCircleBackground:#EFEFEF;
		--radioBackgroundHovering:#EFEFEF;
		--radioCircleBorder:#CFCFCF;
		--radioCircleBorderHovering:#53A1EA;
		--textColor:black;
		font-size: 13px;
	}
	& .wrapper{
		display:flex;
		width:auto;
		align-items:center;
	}
	&[styled="true"]{
		--font:Montserrat, sans-serif;
		font-family:var(--puffinFont,var(--font));
		padding:2px 5px;
		margin:3px;
		display:inline-block;
		right:0;
		color:var(--puffinTextColor,var(--textColor));
	}
	&[direction="horizontally"] {
		display:flex;
	}
	& label[styled="true"] input:checked ~ .circle{
		border: 5px solid var(--puffinAccent,var(--radioAccentColor));
		transition:0.2s;
	}
	& label[styled="true"] {
		transition:0.05s;
		display:flex;
		padding:5px;
		padding-right:15px;
		align-items: center; 
		white-space:pre-wrap;
		border-radius:10px;
		right:0;
	}
	& label[styled="true"]:hover{
		transition:0.05s;
		background: var(--puffinRadioBackgroundHovering,var(--radioBackgroundHovering));
	}
	& label p{
		margin:0;
		white-space:nowrap;
	}
	& label[styled="true"] p{
		color:var(--puffinTextColor,var(--textColor));
		font-family:var(--puffinFont,var(--font));
	}
	& label[styled="true"] input{
		display:none;
	}
	& label[hidden-radio="true"] .circle, label[hidden-radio="true"] input{
		display:none;
	}
	& label[styled="true"] .circle{
		transition:0.2s;
		box-sizing:border-box;
		height:21px;
		width:21px;
		background: var(--puffinRadioCircleBackground,var(--radioCircleBackground));
		border-radius:50px;
		border:2px solid var(--puffinRadioCircleBorder,var(--radioCircleBorder));
		margin-right:10px;
	}
	& label[styled="true"]:active .circle{
		transition:0.2s;
		box-shadow:0px 0px 0px 2px var(--puffinRadioCircleBorderHovering,var(--radioCircleBorderHovering));        
	}
`
function mounted(this: HTMLElement) {
	const target = this
	if (target.getAttribute('direction') == null) target.setAttribute('direction', 'vertically')
	if (target.getAttribute('styled') == null) target.setAttribute('styled', 'true')
}
type RadioOption =
	| string
	| {
		label?: string;
		component?: () => HTMLElement;
		checked?: boolean;
		hiddenRadio?: boolean;
		styled?: boolean;
		key?: string;
	}
	| (() => HTMLElement);

function RadioGroup({
	translated,
	options,
}: {
	translated?: boolean;
	options: RadioOption[];
}) {
	const name = Math.random();

	return element`
	<div mounted="${mounted}" class="${RadioGroupWrapper}">
		${options.map(option => {
		if (typeof option === 'string') return Option({
			content: option,
			name,
			translated
		})
		if (typeof option === 'object') return Option({
			content: option.label ?? (option.component ? option.component() : ''),
			name,
			checked: option.checked,
			hiddenRadio: option.hiddenRadio,
			styled: option.styled,
			key: option.key,
			translated
		})
		if (typeof option === 'function') return Option({
			content: option(),
			name,
			translated
		})
	})}
	</div>`
}

export default RadioGroup