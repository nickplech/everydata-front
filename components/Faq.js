import React from 'react'
import Accordian from './Accordian'
const leads = [
  'Axiom',
  'Acuity',
  'Equifax',
  'Whois',
  'Yelp Index',
  'Yellow & White Pages',
  'Google Maps',
  'Info B2B',
  'US SIC Code',
  'Real Estate Title',
  'Internet Co-Registration',
  'Telecom Phone Carriers',
]
const data = [
  {
    title: 'Where do your leads come from?',
    content: `Our data comes from a variety of sources, including:  Axiom,
  Acuity,
  Equifax,
  Whois,
  Yelp Index,
  Yellow & White Pages,
  Google Maps,
  Info B2B,
  US SIC Code,
  Real Estate Title,
  Internet Co-Registration,
  Telecom Phone Carriers`,
  },
  {
    title: 'Frequently Asked Question',
    content: `fill this in`,
  },
  {
    title: 'Frequently Asked Question',
    content: `fill this in`,
  },

  {
    title: 'Frequently Asked Question',
    content: `fill this in`,
  },
  {
    title: 'Frequently Asked Question',
    content: `fill this in`,
  },
  {
    title: 'Frequently Asked Question',
    content: `fill this in`,
  },
]

const Faq = () => <Accordian data={data} />

export default Faq
