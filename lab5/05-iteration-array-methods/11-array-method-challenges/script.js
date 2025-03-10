const people = [
    {
      firstName: 'Sven',
      lastName: 'Aset',
      email: 'Sven@gmail.com',
      phone: '454-856-12345',
      age: 120,
    },
    {
      firstName: 'Grim',
      lastName: 'Lindel',
      email: 'Grim@gmail.com',
      phone: '245-784-7756',
      age: 1000,
    },
    {
      firstName: 'Redhood',
      lastName: 'Lindel',
      email: 'Redhood@gmail.com',
      phone: '457-245-8994',
      age: 19-20,
    },
    {
      firstName: 'Mary',
      lastName: 'Sue',
      email: 'Leaf@gmail.com',
      phone: '666-666-6666',
      age: 10000,
    },
    {
      firstName: 'Alice',
      lastName: 'Lindel',
      email: 'Thecrawlingone@gmail.com',
      phone: '666-666-6767',
      age: 10000,
    },
  ];
  
  const youngPeople = people
    .filter(person => person.age <= 11000)
    .map(person => ({
      name: `${person.firstName} ${person.lastName}`,
      email: person.email,
    }));
  
  console.log(youngPeople);
  