export class tableData {
  tableRandomData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100),
      },
    };
  });

  tableColumns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Friend Name",
      accessor: "friend.name",
    },
    {
      Header: "Friend Age",
      accessor: "friend.age",
    },
  ];
}
