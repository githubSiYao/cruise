import React from 'react'
import { StaticRouter } from 'react-router-dom'
import TestRender from 'react-test-renderer'
import HeaderComponent from '../index'

describe('<HeaderComponent />', () => {
  it('HeaderComponent Snapshot', () => {
    const testRender = TestRender.create(
      <StaticRouter>
        <HeaderComponent />
      </StaticRouter>
    )
    expect(testRender.toJSON()).toMatchSnapshot()
  })
})