import React from 'react'
import Accordian from './Accordian'

const data = [
  {
    title: 'Frequently Asked Question',
    content: `height: 'auto'`,
  },
  {
    title: 'Frequently Asked Question',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
  {
    title: 'Frequently Asked Question',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
  {
    title: 'Can I pay monthly?',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
  {
    title: 'Frequently Asked Question',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
  {
    title: 'Frequently Asked Question',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
  {
    title: 'Frequently Asked Question',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
]

const Faq = () => <Accordian data={data} />

export default Faq
