'use strict'
import utils from '../utils'
import { name } from '../../../config'
import Vue from 'Vue'

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows the proper application title', function () {
    return this.app.client.getTitle()
    .then(title => {
      expect(title).to.equal('Change of Scenery')
    })
  })
})
