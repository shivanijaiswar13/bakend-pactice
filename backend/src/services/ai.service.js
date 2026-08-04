const { GoogleGenAI } = require("@google/genai");
const {z} = require("zod");
const {zodToJsonSchema} = require("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
});

async function invokeGeminiAi() {
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: "Hello gemini ! Explain what is Interview ? "
    })
    console.log(response.text)
    
}

const interviewReportSchema =z.object({
    technicalQuestions: z.array(z.object({
        question: z.string().description("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    }))
})
async function generateInterviewReport({resume,selfDescription,jobDescription}) {
    
}

module.exports = invokeGeminiAi