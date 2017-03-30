/* @flow */

import faker from 'faker'

class PostFactory {
  generateList(count : number, attrs : Object = {}) {
    let list : Array<Object> = []
    while(count) {
      list.push(this.generate(attrs));
      count--;
    }
    return list;
  }

  generate(attrs : Object) {
    return Object.assign({}, {
      text: faker.lorem.sentence()
    }, attrs);
  }
}

export default new PostFactory();
