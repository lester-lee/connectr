User = function(attr){
    this.attr = attr || {};
    this.attr['skills'] = [];
    this.attr['interests'] = [];
};

User.prototype.getName = function () {
  return this.attr.name;
};

User.prototype.addSkill = function (skill) {
  this.attr.skills.push(skill);
};

User.prototype.addInterest = function (interest) {
  this.attr.skills.push(interest);
};
