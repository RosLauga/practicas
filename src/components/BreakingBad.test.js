import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render , screen} from '@testing-library/react'
import BreakingBad from './BreakingBad'

test('prueba', () => {

  const component =  render(<BreakingBad/>)

  console.log(component)
})

