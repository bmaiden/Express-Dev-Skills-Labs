const skills = [
  { id: 125223, skill: "HTML", done: true },
  { id: 127904, skill: "CSS", done: true },
  { id: 139608, skill: "JavaScript", done: false },
  { id: 139808, skill: "Express", done: true },
];

module.exports = {
  getAll,
};

function getAll() {
  return skills;
}
