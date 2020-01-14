export default [
  {
    tableName: 'Users',
    name: 'User Info',
    headers: [
      {
        tableKey: 'id',
        name: 'ID',
        type: 'display',
        width: 50,
      },
      {
        tableKey: 'name',
        name: 'Name',
        type: 'text',
        width: 80,
        validators: [
          'required',
        ],
      },
      {
        tableKey: 'sex',
        name: 'gender',
        type: 'text',
        width: 50,
      },
      {
        tableKey: 'age',
        name: 'age',
        type: 'text',
        width: 50,
        validators: [
          'required',
        ],
      },
      {
        tableKey: 'remark',
        name: 'Remark',
        type: 'text',
        width: 150,
        validators: [
          'required',
        ],
      },
    ],
  },
  {
    tableName: 'None',
    name: 'Abnormal simulation',
    headers: [
      {
        tableKey: 'id',
        name: 'id',
        type: 'display',
        width: 50,
      },
      {
        tableKey: 'name',
        name: 'Name',
        type: 'text',
        width: 80,
        validators: [
          'required',
        ],
      },
      {
        tableKey: 'comment',
        name: 'comment',
        type: 'text',
        width: 200,
        validators: [
          '',
        ],
      },
      {
        tableKey: 'status',
        name: 'status',
        type: 'text',
        width: 50,
        validators: [
          'required',
        ],
      },
    ],
  }];
