var obj = {
  name: "456",
  getName: function () {
    let printName = () => {
      console.log(this.name);
    };
    printName();
  },
};

obj.getName();
