const person = {
    name: "Kim Tae-yeon",
    age: 18,
    group: "SNSD"
  };
  
  function introduce(person) {
    return (
      person.name + "Kim Tae-yeon" + person.group + " SNSD " + person.age + " 18 "
    );
  }
  
  console.log(introduce(person));
  