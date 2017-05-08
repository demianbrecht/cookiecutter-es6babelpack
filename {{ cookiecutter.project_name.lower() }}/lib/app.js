export class App {
  constructor(createElement, root, name) {
    console.log('App::c\'tor');

    this.createElement = createElement;
    this.root = root;
    this.name = name;

    var el = createElement('span');
    el.innerHTML = `<b>hello, ${name}!</b>`;
    root.append(el);
  }
}
