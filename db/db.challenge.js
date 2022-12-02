import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import Challenge from "../models/challenge.model.js";
const challenges = [
    {
      "challenge": "Workout",
      "description": "Start a workout routine - beginner to advanced",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "4 times per week"
    },
    {
      "challenge": "Drink water",
      "description": "Drink at least 8 glasses of water per day",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "Every day"
    },
    {
      "challenge": "Read books",
      "description": "Read one book per week",
      "duration_of_challenge": "6 weeks",
      "frequency_recommended": "20 minutes every day"
    },
    {
      "challenge": "Meditate",
      "description": "Sit to meditate - whatever technique",
      "duration_of_challenge": "2 weeks",
      "frequency_recommended": "25 minutes every day"
    },
    {
      "challenge": "Journal",
      "description": "Write your thoughts and feelings down",
      "duration_of_challenge": "3 weeks",
      "frequency_recommended": "10 minutes every day"
    },
    {
      "challenge": "Take a walk",
      "description": "Simply go for a walk to clear your head and move",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "30 minutes every other day"
    },
    {
      "challenge": "Hobby",
      "description": "Spend time doing something you like just for yourself",
      "duration_of_challenge": "2 weeks",
      "frequency_recommended": "30 minutes every other day"
    },
    {
      "challenge": "Learn a foreign language",
      "description": "Learn a language from scratch or practice a language you sort of know already",
      "duration_of_challenge": "6 weeks",
      "frequency_recommended": "10 minutes every day"
    },
    {
      "challenge": "Wake up early",
      "description": "Wake up early and enjoy the morning and more of the day",
      "duration_of_challenge": "2 weeks",
      "frequency_recommended": "Set the alarm for every other day"
    },
    {
      "challenge": "Go to bed early",
      "description": "Go to bed at a decent hour so you have a better chance at getting up early",
      "duration_of_challenge": "2 weeks",
      "frequency_recommended": "Set a strict bedtime every other night"
    },
    {
      "challenge": "Call friends and relatives",
      "description": "Stay in touch with the people that matter most to you",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "One video call per week"
    },
    {
      "challenge": "Drink less alcohol",
      "description": "Drink less so you have more energy and time",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "Drink 2 nights per week only - one light and one heavy"
    },
    {
      "challenge": "Quit smoking - part 1",
      "description": "Stop smoking so you live better and longer - slowly",
      "duration_of_challenge": "2 weeks",
      "frequency_recommended": "Smoke 2 cigarettes per day only"
    },
    {
      "challenge": "Quit smoking - part 2",
      "description": "Stop smoking so you live better and longer - slowly",
      "duration_of_challenge": "3 weeks",
      "frequency_recommended": "Smoke 1 cigarette per day only"
    },
    {
      "challenge": "Quit smoking - part 3",
      "description": "Stop smoking so you live better and longer - slowly",
      "duration_of_challenge": "3 weeks",
      "frequency_recommended": "Smoke 1 cigarette every other day"
    },
    {
      "challenge": "Quit smoking - part 4",
      "description": "Stop smoking so you live better and longer - slowly",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "Smoke 1 cigarette per week"
    },
    {
      "challenge": "Quit smoking - part 5",
      "description": "Stop smoking so you live better and longer - slowly",
      "duration_of_challenge": "8 weeks",
      "frequency_recommended": "Smoke 1 cigarette every other week"
    },
    {
      "challenge": "Eat more fruit",
      "description": "An apple a day, you know the rest",
      "duration_of_challenge": "3 weeks",
      "frequency_recommended": "Eat one serving of fresh fruit each day in the morning"
    },
    {
      "challenge": "Save money",
      "description": "Build up a little bit of savings so you can buy or do something you want",
      "duration_of_challenge": "8 weeks",
      "frequency_recommended": "Add one single dollar to a piggy bank every day"
    },
    {
      "challenge": "Practice yoga",
      "description": "Take up yoga - any style",
      "duration_of_challenge": "3 weeks",
      "frequency_recommended": "Practice yoga in a class or following a YouTube teacher every other day"
    },
    {
      "challenge": "Stop complaining",
      "description": "Simply stop complaining about anything at all ever",
      "duration_of_challenge": "1 week",
      "frequency_recommended": "Just don't do it - every hour of every day"
    },
    {
      "challenge": "Practice gratitude",
      "description": "Practice becoming a more grateful person by writing one thing down",
      "duration_of_challenge": "2 weeks",
      "frequency_recommended": "5 minutes every day"
    },
    {
      "challenge": "Cook at home",
      "description": "Eat more home-cooked meals instead of takeout",
      "duration_of_challenge": "3 weeks",
      "frequency_recommended": "Once a day, every other day"
    },
    {
      "challenge": "Shop less",
      "description": "Do you really need that or are you just addicted to shopping?",
      "duration_of_challenge": "4 weeks",
      "frequency_recommended": "Stop for 1 minute before shopping to think if it's an actual need"
    }
  ]
const sowDatabase = async() =>{
  const MONGO_URI = process.env.MONGO_URI
    try {
        const connection = await mongoose.connect(MONGO_URI)
        console.log(`Connected DB with ${connection.connections[0].name}`)
        Challenge.insertMany(challenges)
    } catch (error) {
        console.log(error)
    }
}
export default sowDatabase()