const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
console.log("Key initialized", process.env.OPEN_API_KEY);
console.log(configuration);
const openai = new OpenAIApi(configuration);

// POST request endpoint
app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;
  console.log("PROMPT:", prompt);
  try {
    if (prompt == null) {
      throw new Error("Uh oh, no prompt was provided");
    }
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const response2 = response.data.choices[0].message.content;
    console.log(response2);
    const completion = response.data.choices[0].text;
    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message);
  }
});

console.log("Key initialized", process.env.OPEN_API_KEY);
app.listen(port, () => console.log(`Server is running on port ${port}!!`));
