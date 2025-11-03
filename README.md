# Quiz-APP-AI
<img width="1398" height="765" alt="Screenshot 2025-11-02 at 6 17 49 PM" src="https://github.com/user-attachments/assets/f7a931e4-5a22-493e-8e81-1a5facae3dd1" />

# 🧠 AI-Powered Quiz App (Spring Boot + Spring AI + React + OpenAI API)

An intelligent **Quiz Application** that generates quiz questions dynamically using **OpenAI’s GPT model** through **Spring AI**.  
The backend is powered by **Spring Boot**, and the frontend is built with **React (Yarn)** for a smooth, interactive user experience.  
Backend runs on **AWS EC2**, routed securely through **API Gateway**, with no database required.

---

## 🌍 Live Endpoints

### 🔹 API Gateway (Backend)
`https://gv3mpwjk6k.execute-api.us-east-1.amazonaws.com/production`

Test endpoint:  
[`/api/v1/questions/test`](https://gv3mpwjk6k.execute-api.us-east-1.amazonaws.com/production/api/v1/questions/test)

### 🔹 Frontend (React)
Example (Vercel/S3/Netlify):  
`https://ai-quiz-app.vercel.app`

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, Vite, TailwindCSS, Yarn |
| **Backend** | Spring Boot 3, Spring AI |
| **AI Service** | OpenAI GPT Model |
| **Deployment** | AWS EC2 (Backend), API Gateway, Vercel/S3 (Frontend) |
| **Language** | Java 17, JavaScript (ES6) |
| **Build Tools** | Maven (Backend), Yarn (Frontend) |
| **Security** | API Key via Environment Variable |
| **Logging** | CloudWatch Logs |

---

## ⚙️ Features

- 🤖 AI-generated quiz questions using OpenAI  
- 🧠 Topic-based and difficulty-based question generation  
- 🌐 React frontend consuming REST API  
- ☁️ Backend hosted on AWS EC2 + API Gateway  
- 🔑 Secure API key handling through environment variables  
- 🚀 Fast frontend bundling via Vite + Yarn  

---

## 🧰 Folder Structure
```
ai-quiz-app/
│
├── backend/
│ ├── src/main/java/com/aws/quizapp/...
│ ├── pom.xml
│ └── Backend-QuizApp-0.0.1-SNAPSHOT.jar
│
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
├── package.json
├── vite.config.js
└── yarn.lock
```
yaml
Copy code

---

## 🧩 Backend Setup (Spring Boot + Spring AI)

### 1. Clone Repository
```bash
git clone https://github.com/bipinstha07/ai-quiz-app.git
cd ai-quiz-app/backend
```
2. Set Environment Variable
```
bash
export API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
3. Run the App
```
bash
mvn clean package
java -jar target/Backend-QuizApp-0.0.1-SNAPSHOT.jar
Access locally:
http://localhost:9090/api/v1/questions/test

Example Endpoint
POST /api/v1/questions/generate
```
Request:

json
Copy code
{
  "topic": "space science",
  "difficulty": "medium",
  "count": 3
}
Response:
```
json
{
  "questions": [
    {
      "question": "Which planet has the largest number of moons?",
      "options": ["Jupiter", "Saturn", "Mars", "Neptune"],
      "answer": "Saturn"
    }
  ]
}
☁️ Backend Deployment (AWS EC2 + API Gateway)
Copy JAR to EC2:
```
bash
scp -i your-key.pem target/Backend-QuizApp-0.0.1-SNAPSHOT.jar ec2-user@<EC2-IP>:/home/ec2-user/
Run it in background:
```
bash
```
export API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
nohup java -jar -Dserver.port=9090 Backend-QuizApp-0.0.1-SNAPSHOT.jar > app.log 2>&1 &
API Gateway:
```
Route: /{proxy+}
```
Integration URI: http://ec2-34-198-191-236.compute-1.amazonaws.com:9090
```
Proxy Integration: ✅ Enabled

Stage: production

🎨 Frontend Setup (React + Yarn)
1. Move to frontend folder
bash
Copy code
cd ../frontend
2. Install dependencies


```
bash
yarn install
```
3. Configure environment
Create .env file in frontend/:

bash
```
VITE_API_BASE_URL=https://gv3mpwjk6k.execute-api.us-east-1.amazonaws.com/production
```
4. Run locally
```
bash
yarn dev
App runs on http://localhost:5173
```
🧠 Example React API Call
jsx
```
// src/api/quizService.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function generateQuiz(topic) {
  const response = await fetch(`${BASE_URL}/api/v1/questions/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic, difficulty: "medium", count: 5 }),
  });
  return response.json();
}
```
🚀 Frontend Deployment (Vercel or S3)
Option 1: Deploy to Vercel
```
bash
vercel --prod
```
Option 2: Deploy to AWS S3

```
bash
yarn build
aws s3 sync dist/ s3://your-s3-bucket-name --acl public-read
```
🧾 Environment Variables
Variable	Description	Example
API_KEY	OpenAI key for Spring AI backend	sk-xxxxxx
SERVER_PORT	Backend port	9090
VITE_API_BASE_URL	API Gateway URL for frontend	https://gv3mpwjk6k.execute-api.us-east-1.amazonaws.com/production

🚀 Future Enhancements
Add user authentication (Cognito or JWT)

Store quiz history in DynamoDB

Timer and scoring in frontend

Leaderboard UI

Multi-choice animations

👨‍💻 Author
Bipin Shrestha
🌐 Portfolio | 💻 GitHub | 🔗 LinkedIn

🪶 License
This project is licensed under the MIT License — feel free to modify and enhance.


---
