import OpenAI from "openai";
import axios from "axios";

async function fetchOpenAI(userInput) {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_AI,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: userInput }],
    model: "gpt-4",
  });

  return chatCompletion;
}

const user =
  "Student's name is John Doe and his student ID is 218516113 and his SIN id is 123-456-789 and his passport number is M0969893";

async function fetchAnonymizeData(input, secret) {
  try {
    const response = await axios.post("http://127.0.0.1:5000/anonymize", {
      input,
      secret,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
const csvFileToArray = async (string) => {
  const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
  const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

  const array = csvRows.map((i) => {
    const values = i.split(",");
    const obj = csvHeader.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return obj;
  });

  return array;
};

async function dataEntities(template) {
  try {
    console.log(`The API is`);
    const response = await axios.post("http://127.0.0.1:5000/generate", {
      template,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { fetchAnonymizeData, fetchOpenAI, dataEntities };
