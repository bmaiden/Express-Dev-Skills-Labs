const skills = [
  { id: 125223, skill: "HTML", done: true },
  { id: 127904, skill: "CSS", done: true },
  { id: 139608, skill: "JavaScript", done: false },
  { id: 139808, skill: "Express", done: true },
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings need to convert to a number as the array has numbers
  id = parseInt(id);
  // array.prototype.find iterator method used to find objects within an array
  return skills.find(skill => skill.id === id);
};
