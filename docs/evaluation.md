---
id: evaluation
title: Evaluation
description: Evaluation for our project Classroom Explorers, focusing on the evaluation process and technologies used.
sidebar_position: 9
---

# Evaluation

## Section 1 - Requirement and Contributions

### Section 1.1 - Final MosCow Requirements (Functional)

| Requirement Description                                                                                                                                                             | Priority | State | Contributors              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------|---------------------------|
| The application should run natively in Unity, and be cross-platform for mobiles, tablets, and laptops.                                                                              | MUST     | DONE  | Ryan, Jack Mok, Prantanil |
| Make use of various AI models all offline and embedded for use on devices.                                                                                                          | MUST     | DONE  | Jack Pan                  |
| Using YOLO for Object Detection.                                                                                                                                                    | MUST     | DONE  | Jack Pan                  |
| The board game can host up to 6 players.                                                                                                                                            | MUST     | DONE  | Jack Mok                  |
| Buzz question mode.                                                                                                                                                                 | MUST     | DONE  | Ryan                      |
| The board needs to be AR placed on a table.                                                                                                                                         | MUST     | DONE  | Ryan                      |
| Topic is presented to Granite to generate the questions on the topic, with a level of user indicated (age group).                                                                   | MUST     | DONE  | Jack Pan                  |
| Allow questions upload.                                                                                                                                                             | MUST     | DONE  | Jack Mok, Jack Pan        |
| At least 6 tile types for the board game.                                                                                                                                           | MUST     | DONE  | Ryan                      |
| Teacher Dashboard Website for game setup.                                                                                                                                           | MUST     | DONE  | Jack Mok, Jack Pan        |
| A Q&A sequence in-game to prompt players to answer questions.                                                                                                                       | MUST     | DONE  | Ryan                      |
| GenAI should be used to set the background image of the board.                                                                                                                      | SHOULD   | DONE  | Jack Pan                  |
| CO-OP Mode for players to work together instead of compete.                                                                                                                         | SHOULD   | DONE  | Ryan                      |
| Combat System which uses dice rolls.                                                                                                                                                | SHOULD   | DONE  | Ryan                      |
| Customizable avatar with different colors and cosmetics.                                                                                                                            | SHOULD   | DONE  | Jack Mok                  |
| Game board is generated at runtime, customizable with JSON.                                                                                                                         | SHOULD   | DONE  | Ryan, Jack Pan            |
| Allow remote play online.                                                                                                                                                           | SHOULD   | NO    | -                         |
| Objects (such as toys and small figures) are to be image recognized using offline AI with Granite. They would then be the avatars of the player in their virtual round of the game. | COULD   | NO    | -                         |
| Generate 3D meshes for the background.                                                                                                                                              | COULD    | NO    | -                         |
| Geography (linking questions to Google Earth opening), science (including scientific animations), and maths (with explainers in the center of the board).                           | WON’T DO | -     |

### Section 1.2 - Final MosCow Requirements (Non-Functional)

| Requirement Description                                                           | Priority | State | Contributors                        |
|-----------------------------------------------------------------------------------|----------|-------|-------------------------------------|
| Minimize errors and bugs within the game.                                         | MUST     | DONE  | Ryan, Jack Mok                      |
| Using lightweight local GenAI model to support devices with low specs.            | MUST     | DONE  | Jack Pan                            |
| Documents and codebase are organized and easy to understand.                      | MUST     | DONE  | Ryan, Jack Mok, Jack Pan            |
| Ensure application can be run on different devices and environments.              | MUST     | DONE  | Ryan, Jack Mok, Jack Pan, Prantanil |
| Design a simple and easy to understand user interface.                            | MUST     | DONE  | Jack Mok                            |
| Carry out user testing to ensure the playability and user experience of the game. | MUST     | DONE  | Ryan, Jack Pan, Jack Mok, Prantanil |

### Section 1.3 - Individual Contribution Table for System Artefacts

| Work Packages            | Ryan Li | Jack Mok | Jack Pan | Prantanil |
|--------------------------|---------|----------|----------|-----------|
| Research and Experiments | 50%     | 0%       | 50%      | 0%        |
| UI Design                | 19%     | 76%      | 0%       | 5%        |
| Coding                   | 56%     | 14%      | 17%      | 8%        |
| Testing                  | 30%     | 0%       | 60%      | 0%        |
| **Overall Contribution** | **45%** | **19%**  | **24%**  | **12%**   |

### Section 1.4 - Individual Contribution Table For Website

| Work Packages               | Ryan Li | Jack Mok | Jack Pan | Prantanil |
|-----------------------------|---------|----------|----------|-----------|
| Website Template and Setup  | 0%      | 50%      | 50%      | 0%        |
| Home                        | 30%     | 70%      | 0%       | 0%        |
| Video                       | 40%     | 20%      | 10%      | 30%       |
| Requirement                 | 15%     | 85%      | 0%       | 0%        |
| Research                    | 33%     | 34%      | 33%      | 0%        |
| UI Design                   | 0%      | 100%     | 0%       | 0%        |
| System Design               | 10%     | 70%      | 0%       | 20%       |
| Implementation              | 5%      | 0%       | 0%       | 95%       |
| Testing                     | 25%     | 10%      | 65%      | 0%        |
| Evaluation and Future Work  | 20%     | 80%      | 0%       | 0%        |
| User and Deployment Manuals | 40%     | 40%      | 20%      | 0%        |
| Legal issues                | 0%      | 100%     | 0%       | 0%        |
| Blog and Monthly Video      | 0%      | 100%     | 0%       | 0%        |
| **Overall Contribution**    | **25%** | **40%**  | **15%**  | **20%**   |

*Each task is not weighted equally, the contributions do not add up proportionally to overall contribution.
## Section 2 - Critical Evaluation

### Section 2.1 - User Interface

Throughout development, we have consistently refined the user interface based on regular testing and feedback from both teachers and students. Given that our target audience includes students with SEND (Special Educational Needs and Disabilities), we prioritized simplicity and accessibility. The interface centers on straightforward button-based interactions to ensure ease of use and inclusivity, aligning with the needs of our users.

Overall, we would rate ourselves very good in this category.

### Section 2.2 - Functionality

Classroom Explorers is composed of two core components: the Teacher Dashboard and the Student Game App.

The Teacher Dashboard is a web-based interface that allows teachers to easily set up and manage the game. The choice of a web platform minimizes system requirements and ensures a straightforward user experience.

The Student Game App is divided into three key modules: Quiz, Board, and Combat. Each module has distinct features but works cohesively to deliver the intended gameplay and learning experience.

Overall, we would rate ourselves very good in this category.

### Section 2.3 - Stability

To ensure the stability and reliability of the game, we integrated continuous testing and feedback loops into our development cycle. Regular user testing and iterative improvements have strengthened the game engine and enhanced its suitability for our target users. Additionally, unit testing was performed on the backend server to validate system accuracy and maintain overall stability.

Overall, we would rate ourselves good in this category.

### Section 2.4 - Efficiency

Efficiency is a critical focus of our project, as we aim to help teachers streamline lesson preparation and enhance student learning through engaging gameplay. Our research into student motivation and interactive learning informed the design of incentive mechanisms within the game.

From a technical perspective, we optimized performance by integrating a lightweight, locally quantized Granite GenAI model to generate questions swiftly and efficiently. Moreover, by leveraging the Unity engine, we benefited from its high-performance capabilities and resource-efficient rendering.

Overall, we would rate ourselves very good in this category.

### Section 2.5 - Compatibility

We conducted extensive testing on various devices, including Android tablets and smartphones, ensuring the game performs well even on lower-spec hardware commonly found in school environments. To further enhance compatibility and reduce technical barriers, we developed the Teacher Dashboard as a web application, eliminating the need for specialized software or powerful devices.

Overall, we would rate ourselves good in this category.

### Section 2.6 - Maintainability

Our codebase follows the Model-View-Controller (MVC) design pattern, resulting in a modular and well-organized structure where each class is responsible for a specific feature or action. This approach makes the system easier to understand and maintain.

For the Teacher Dashboard backend, we have thoroughly documented API setups and calls, ensuring clarity and ease of use for future developers, as well as facilitating smooth future expansion.

Overall, we would rate ourselves very good in this category.

### Section 2.7 - Project Management

Our project was effectively managed through regular team meetings during lab sessions, complemented by the use of project management tools such as Jira for task tracking and GitHub for version control. A detailed Gantt chart guided our timeline and milestones. We maintained open and frequent communication with our partners and clients at NAS and IBM, ensuring that our deliverables remained aligned with their expectations and that development stayed on track.

Overall, we would rate ourselves good in this category.

---

## Section 3 - Known Issues
#### Teacher Dashboard and backend server
1. **Object Recognition**: The object recognition model we are using, YOLO, is not perfect and may sometimes fail to
   detect objects accurately. This can lead to incorrect or missing avatars in the game.
2. **Memory management**: Due to the number of AI model loaded, memory management can be an issue, especially on
   lower-end devices. This can lead to performance issues and crashes.

#### Unity Game
1. **Avatar sprite generation(mobile)**: Our Avatar sprite generation has a bug on the mobile version, which the camera cannot track the avatar in the AR plane which lead to a failure in generating the avatar, but it works on pc version.

---

## Section 4 - Future Work/Plan

In this project, our team tried our best to complete as many features as possible, but due to the project’s timeframe, some features remain unfinished. These are the features we would like to implement in the future:

1. **Online Multiplayer (Networking)**: Due to our project planning, we did not have enough time to complete the online multiplayer feature. Developing an online multiplayer game would require a completely different process, and we would need to overhaul our codebase entirely. Given more time, we would rework the code and implement a fully functional online multiplayer version.

2. **3D Mesh Generation using AI**: This would allow the application to automatically generate rich and diverse 3D models, providing a more immersive environment and reducing the need for manual asset creation.

3. **User Interface Enhancements**: We plan to create a more user-friendly interface, with a refined and polished game start scene that includes additional customizable features. Currently, the interface is simple with minimal design elements. Our goal is to elevate the user experience with a more visually appealing and intuitive design.

4. **Teacher Dashboard Expansion**: The teacher dashboard currently has basic functionality for game setup. Future iterations will include more interactive features that enable real-time interaction between the teacher and students throughout the game, creating a more dynamic and engaging classroom experience.

5. **Accessibility Improvements**: A more sophisticated user profile system would allow users to save their preferences and settings, improving usability, especially for individuals with specific accessibility needs. We also plan to include customizable accessibility options, such as color blindness support and other tailored settings, ensuring that the application is inclusive and provides a comfortable experience for a wider range of users.


