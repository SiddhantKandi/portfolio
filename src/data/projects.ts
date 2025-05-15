import { IProject } from "./types"
import SurveySphere from "@/assets/projectImages/SurveySphere.png"
import NeuroMed from "@/assets/projectImages/Neuromed.png"
import CarPricePredictor from "@/assets/projectImages/CarPricePredictor.jpeg"
import NextScape from "@/assets/projectImages/NextScape.png"

const projects: Array<IProject> = [
  {
    title: "SurveySphere",
    description: "Community driven, highly customizable,  tool to design and send surveys and analyze the responses. Frontend - React, Backend - Node.js, Database - MongoDB",
    thumbnail: SurveySphere,
    githubLink: "https://github.com/SiddhantKandi/SurveyTool-frontend"
  },
  {
    title: "Patient Management System",
    description: "Developed a comprehensive Patient Management System to efficiently handle patient records, appointment scheduling, and medical history tracking. Frontend - React, Backend - Nodejs, Database - PostGreSQL",
    thumbnail: NeuroMed,
    githubLink: "https://github.com/SiddhantKandi/Neuromed_frontend"
  },
  {
    title: "Car Price Predictor",
    description: "Developed a Car Price Predictor using Python and Tkinter for the user interface.Implemented a Decision Tree Regressor model to predict car prices based on input features.User inputs include car model, distance travelled, fuel type, and manufacturing date.Achieved a prediction accuracy of 97% through effective data preprocessing and model tuning.Enhanced skills in machine learning, GUI development, and regression analysis.",
    thumbnail: CarPricePredictor,
    githubLink: "https://github.com/SiddhantKandi/Car-Price-Predictor"
  },
  {
    title: "NexScape",
    description: "Built NextScape, a modern web application leveraging Next.js App Router for optimized performance and server-side rendering. Designed as a starter template for Next.js projects, it integrates Tailwind CSS for styling and supports dynamic routing",
    thumbnail: NextScape,
    githubLink: "https://github.com/SiddhantKandi/FullStack-nextjs-Project"
  },
]

export default projects