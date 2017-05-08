import {App} from './lib/app'

var app = new App((type) => document.createElement(type), document.body, '{{ cookiecutter.project_name }}');
