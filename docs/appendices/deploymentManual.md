---
id: deploymentManual
title: Deployment Manual
sidebar_position: 2
---

Class Explorer is a three-part application designed to enhance interactive learning and classroom engagement. It is
composed of the following components:

1. **Unity Game**
2. **React Teacher Dashboard**
3. **FastAPI Model Backend**

---

## 1. Unity Game

The Unity game component of Class Explorer provides an immersive, interactive learning environment. Students can engage
with educational content through gamified elements, making it fun and motivating to explore various topics.

- **Deployment**: The game can be downloaded directly over the network and installed on student devices.
- **Getting Started**:
  1. Download the Unity game client.
  2. Install and run the client on a compatible device (PC, Mac, or mobile).

---

## 2. React Teacher Dashboard

The React-based teacher dashboard serves as the control center for the game. It provides tools for managing game content
and game settings.

- **Repository**: [teacher-ui on GitHub](https://github.com/jackmok33/teacher-ui)
- **Features**:
  - Configure or customize game scenarios
  - Manage Game settings
  - Generate and upload quiz questions
  - Object detection for quiz generation
- **Getting Started**:
  1. Clone the [teacher-ui](https://github.com/jackmok33/teacher-ui) repository.
  2. Install dependencies by running `npm install`.
  3. Start the development server with `npm run dev` to launch the dashboard locally.
  4. Access the dashboard through your browser to log in and manage classrooms.

---

## 3. FastAPI Model Backend

The FastAPI Model Backend will handle data processing, storage, and AI model integrations for the Class Explorer system.

- **Repository**:
  - [Educational Question Generator on GitHub](https://github.com/System-Engineering-Group-9/EducationalQuestionGenerator)
- **Features**:
  - AI model integration for question generation
  - Data processing and storage
  - API endpoints for game interactions
- **Getting Started**:
    1. Option 1 (**Local Deployment**):
        1. Make sure you have a Nvidia GPU with CUDA support for AI model acceleration and python 3.8 or later.
        2. Clone
           the [Educational Question Generator](https://github.com/System-Engineering-Group-9/EducationalQuestionGenerator)
        3. Install torch, torchvision for your CUDA
           version [Click here for more information to install right torch](https://pytorch.org/).
        4. Install
           llama-cpp-python [Click here for more information to install llama-cpp-python](https://github.com/abetlen/llama-cpp-python)
        5. Install dependencies by running `pip install -r requirements.txt`.
        6. Run the desktop application for generating questions by running `python ./main.py`.
        7. Start the FastAPI server by running `uvicorn app.main:app --reload` to launch the backend server.
    2. Option 2 (**Docker Deployment**):
        1. Build the Docker image by running `docker build -t educational-quiz-generator .`.
        2. Run the Docker container by running `docker run --gpus all -p 8000:8000 educational-quiz-generator`.
        3. This will start the FastAPI server inside a Docker container, and you can access the API
           at http://127.0.0.1:8000.
- **Troubleshooting**:
  - If your server is not using GPU, make sure you have installed the right version of CUDA and torch. And also make
    sure you install with CUDA support (set the `GGML_CUDA=on` environment variable before installing).
  - Check NVIDIA drivers are up to date
  - For MacOS users, verify Metal support requirements
