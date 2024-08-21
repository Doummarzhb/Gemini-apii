import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCfm_7MsRjkwqMpk4jIKw3mm5j7b8y3WZY";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    
    // استخدم await هنا للتأكد من أنك تحصل على النص بشكل صحيح
    const textResponse = await result.response.text();
    console.log(textResponse);
    return textResponse;
  }
  
  export default run;
  