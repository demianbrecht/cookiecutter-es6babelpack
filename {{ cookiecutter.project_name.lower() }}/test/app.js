import {App} from 'lib/app'
import * as assert from 'assert'
import * as sinon from 'sinon'

class MockElement {
  set innerHTML(val) {}
  get innerHTML() {
    return 'test';
  }
}

class MockRoot {
  constructor() {
    console.log('MockRoot::c\'tor');
    this.elements = [];
  }

  append(el) {
    this.elements.push(el);
  }
}

const appName = 'test app';

describe('App', () => {
  var app = new App((type) => new MockElement(), new MockRoot(), appName);

  it('should be typeof App', () => {
    assert.ok(app instanceof App);
  });

  it('should have the correct number of elements', () => {
    assert.equal(app.root.elements.length, 1);
  });

  it('should have the correct app name', () => {
    assert.equal(app.name, appName);
  });
});
