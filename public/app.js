(function () {
  'use strict';
  var app = angular.module('app', []);

  app.constant('API_URL', 'http://localhost:3000');

  app.controller('MainCtrl', function MainCtrl(RandomUserFactory, UserFactory) {
    'use strict';
    var vm = this;
    vm.getRandomUser = getRandomUser;
    vm.login = login;

    function getRandomUser() {
      RandomUserFactory.getUser().then(function success(response) {
        vm.randomUser = response.data;
      }, handleError);
    }

    function login(username, password) {
      UserFactory.login(username, password).then(function success(response) {
        vm.user = response.data;
      }, handleError);
    }

    function handleError(response) {
      alert('Error: ' + response.data);
    }
  });

  app.factory('RandomUserFactory', function RandomUserFactory($http, API_URL) {
    'use strict';
    return {
      getUser: getUser
    };

    function getUser() {
      return $http.get(API_URL + '/random-user');
    }
  });

  app.factory('UserFactory', function UserFactory($http, API_URL) {
    'use strict';
    return {
      login: login
    };

    function login(username, password) {
      return $http.post(API_URL + '/login', {
        username: username,
        password: password
      });
    }
  });
})();
