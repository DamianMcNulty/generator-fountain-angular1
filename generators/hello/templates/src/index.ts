/// <reference path="../typings/tsd.d.ts" />

<% if (modules !== 'inject') { -%>
import * as angular from 'angular';

import {hello} from './app/hello.component';

<% if (modules === 'webpack') { -%>
import './index.<%- css %>';

<% } -%>
export const app: string = 'app';

angular
  .module(app, [])
  .component('app', hello);
<% } else { -%>
angular
  .module('app', []);
<% } -%>