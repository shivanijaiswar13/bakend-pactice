const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function checkModels() {
  try {
    const response = await ai.models.list();
    console.log("--- Available Models ---");
    for await (const model of response) {
      console.log(model.name);
    }
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

checkModels();