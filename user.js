User = function(name, password){
    this.attr = {
      name: name,
      password: password,

    };
};

User.prototype.getName = function () {
  return this.attr.name;
};

var user1 = new User(name, pass);
console.log(user1.getName());
