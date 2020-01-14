import $http from '../libs/ajax';

export const getTableUsers = params => {
  /* return $http.get('api/users', params)
   .then(data => Promise.resolve(data)) */
  // Simulation data
  const data = [];
  // Create 1000 users
  for (let i = 1; i < 1000; i++) {
    data.push({
      id: i,
      name: 'user' + i,
      sex: Math.random().toString().substr(2, 1) % 2 === 0 ? 'male' : 'female',
      age: 2 + Math.random().toString().substr(2, 1),
      remark: 'I have got ' + Math.random().toString().substr(2, 4) + ' coins'
    });
  }
  return Promise.resolve(data);
};

// todo Form Users of ajax
export const getTableNone = params => (
  $http.get('api/pageWhichIsNo', params)
    .then(data => Promise.resolve(data))
);

export default {
  getTableUsers,
  getTableNone,
};

