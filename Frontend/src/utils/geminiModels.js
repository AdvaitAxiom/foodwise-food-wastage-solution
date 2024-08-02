import { GoogleGenerativeAI } from "@google/generative-ai"
import { mealModelSystemInstructions, recipeModelSystemInstruction } from "./geminiInstructions";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const recipeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: recipeModelSystemInstruction,
});

const mealModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: mealModelSystemInstructions,
});

export {
    recipeModel,
    mealModel
}