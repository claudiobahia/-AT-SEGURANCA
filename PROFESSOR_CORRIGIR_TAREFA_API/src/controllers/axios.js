const axios = require("axios");

const fetchData = async () => {
  const result = await axios(
    'http://localhost:3000/aluno/atividade',
  );
  // return the result
  return result.data.user;
};

module.exports= fetchData;