exports.getAboutMe = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "My Name is Ali",
  });
};

exports.getSkills = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      Skill: ["Python", "Node.js", "Mysql", "MongoDB"],
    },
  });
};

exports.getHobbies = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      Hobbies: ["Playing Football", "Video Editing"],
    },
  });
};

exports.getAcademicBg = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      University: "United College of Engineer and Research",
      Passing_Year: 2024,
    },
  });
};
