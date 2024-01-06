### 💅🏻 Drac

Drac is the Design system used in [Filing-Manager](https://github.com/DanSketic/Filing-Manager-App). 
This package is a set of [PuffinJS](https://github.com/DanSketic/fm-puffin) components.

## 🌱 Components
* Button
* Card
* Radio Group
* Navigation Bar
* Text
* H1...H6 titles
* Input
* TextArea

## 🍜 Usage

Installation:
```sh
npm install @fm2/puffin-drac
```

Example:
```javascript 
import { element } from '@fm2/puffin'
import { Button } from '@fm2/puffin-drac'

const helloButton = () => {
	return element({
		components: {
			Button
		}
	})`
		<Button>Hello World</Button>
	`
}
```

## ⚠ Warning
I do not consider myself an UI designer.

## 🤔 Testing
Clone the repository:
```shell
git clone https://github.com/DanSketic/fm-puffin-drac.git
```

Install dependencies:
```shell
pnpm install
```

Test it:
```shell 
pnpm test
```
