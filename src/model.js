import image from './assets/image.jpg'

export const model = [
  {type: 'title', value: 'Website builder', options: {
    tag: 'h2',
    styles: `background: linear-gardient(to right, #ff0099, #493240);color: #fff;text-align: center; padding: 1.5rem`
  }},
  {type: 'text', value: 'lorem'},
  {type: 'columns', value: [
    '11111',
    '22222',
    '33333'
  ]},
  {type: 'image', value: image},
]
