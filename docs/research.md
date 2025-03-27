---
id: research
title: Research
description: Research areas and technological review for our project Classroom Explorers, focusing on AI, AR, and game development.
sidebar_position: 3
---

## Overview
Our research focuses on identifying and evaluating the appropriate tools required to implement our system, as well as establishing best practices for their operation.

1. **Related project review**, We examined a variety of successful educational, board, and augmented‑reality (AR) games to understand the factors contributing to their effectiveness and popularity. By analyzing their core mechanics, user engagement strategies, and pedagogical approaches, we aim to incorporate their strongest features into our own design.

2. **Technology review**, we compared various technology stacks, including game engines, AI models, object recognition models, and image generation models. Our analysis focused on evaluating their performance, compatibility, and ease of integration to determine the most suitable options for our development process.

3. **Background research**, we explored how gamified learning benefits students by reviewing academic research on game design and reward systems. This helped us design our game logic and mechanics, ensuring they effectively enhance engagement and learning outcomes.


---

## Section 1 - Related Project Review

### Section 1.1 - Buzz
<img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Buzz-logo.png" alt="buzz Logo" width="200" />

One of our project requirements is to implement a “Buzz” game mode. To ensure alignment with our supervisor’s specifications, we analyzed the PlayStation 2 version of Buzz as a benchmark. In Buzz, players participate in a virtual game‑show environment using handheld remotes equipped with four colored answer buttons and a central red “Buzz” button. Questions are presented in two primary formats:
1. **Speed‑based response**: Players attempt to answer as quickly as possible; faster correct responses yield higher point values.
2. **Buzz‑in format**: A question is displayed and players press the “Buzz” button when they recognize the correct answer.

From this review, we concluded that our implementation should feature multiple‑choice quizzes with four answer options to mirror the original design. Furthermore, we will include a dedicated Buzz mode that prioritizes response speed, thereby preserving the competitive, time‑sensitive gameplay characteristic of the original Buzz experience.


### Section 1.2 - Pokémon GO
<img src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=s0" alt="Pokémon GO Logo" width="200" />

Pokémon GO is an AR‑based mobile game that blends digital gameplay with real‑world exploration, encouraging players to move through their environment to discover virtual creatures. Its success stems from location‑based mechanics and AR overlays that create immersive, contextually relevant interactions.

From this review, we recognized the value of integrating real‑world engagement into our board game by designing activities that prompt players to observe and interact with their surroundings. Additionally, we plan to incorporate optional AR features—such as real‑time, subject‑related 3D meshes generated and overlaid into the environment—to enhance educational content and sustain player motivation through exploratory, interactive gameplay.


### Section 1.3 - Mario Party
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Mario_Party_Logo_%28MPSuperstars%29.png" alt="mario logo" width="200"/>

Mario Party served as the primary inspiration for our board game design due to its widespread popularity among children and its turn‑based, dice‑rolling mechanics, which align closely with our project requirements. In our adaptation, the game board features specialized tiles that trigger unique outcomes when landed on. 
Rather than traditional mini‑games awarding points by placement, we implemented quiz tiles that present educational questions to players. Performance on these quizzes yields in‑game bonuses that can be strategically applied during subsequent turns, thereby integrating learning objectives directly into core gameplay.


---

## Section 2 - Technology Review

Based on our research, we evaluated multiple tools and frameworks to determine the most suitable technologies for our project. The criteria for selection included performance, scalability, ease of integration, and compatibility with AR and AI functionalities.

### Section 2.1 - Unity Version 6


### Section 2.2 - IBM Granite Model

### Section 2.3 - YOLO Object Recognition

### Section 2.4 - DreamShaper Image Generation


---

## Section 3 - Background Research
To create a well-designed game, we conducted comprehensive research into several key areas to understand the non-technical background. Our focus encompassed the integration of games into learning, addressing the needs of students with Special Educational Needs and Disabilities (SEND), and understanding game design principles, particularly reward systems that enhance student engagement.

<details>
<summary>**Integrating Games into Learning**</summary>

Educational games have been shown to significantly enhance student engagement and learning outcomes. Research indicates that gamification can increase motivation, promote active learning, and improve retention rates among students. For instance, a study from the University of Warwick found that incorporating games into teaching improved student exam performance, with the median student achieving a 69% grade—just shy of a first-class mark—compared to 60% in traditional teaching methods[1]. Further research indicates that gamification can increase motivation, promote active learning, and improve retention rates among students[2]. By incorporating game elements such as challenges, feedback, and rewards, educational content becomes more interactive and appealing, leading to a more profound learning experience.
</details>

<details>
<summary>**Addressing the Needs of Students with SEND**</summary>

Students with SEND often face unique challenges in traditional educational settings, including difficulties with concentration, social interaction, and sensory processing. Gamification has been identified as a beneficial tool for supporting these students[2]. Games often provide structured environments with clear rules and immediate feedback, which can help students with SEND, particularly those with autism, to focus and engage more effectively[3]. For instance, visual schedules and predictable patterns in games can reduce anxiety and improve task completion rates among autistic learners.
</details>

<details>
<summary>**Designing Reward Systems in Games**</summary>

An effective reward system is crucial for maintaining player engagement and motivation in educational games. A study published in the International Journal of Human-Computer Studies examined how the placement of rewards within an application affects the frequency of its use[4]. The findings suggest that users are more likely to engage with an application when rewards are presented early in the interaction. This occurs due to temporal discounting, where rewards lose value the longer they are delayed. Therefore, implementing rewards as close as possible to the start of an interaction can enhance their effectiveness in motivating users.​

When designing incentive systems, it's important to balance external rewards (like points and badges) with internal motivation (personal enjoyment). Relying too much on external rewards can reduce a person's natural interest in an activity—a phenomenon known as the overjustification effect. This occurs when external incentives overshadow the inherent enjoyment of an activity, leading individuals to attribute their participation to the reward rather than personal interest[5]. Therefore, effective reward systems should not only offer external incentives but also enhance the intrinsic satisfaction derived from the learning experience.​

Additionally, research involving primary school children interacting with digital game-based learning environments indicates that while students may report excitement about game incentives[6], their visual attention to these elements during gameplay is minimal. This suggests that while reward systems are important, their design should not overshadow the educational content but rather complement it to maintain a balanced and effective learning experience.
</details>

In summary, our background research underscores the importance of thoughtfully integrating game elements into educational contexts, particularly for students with SEND. By designing reward systems that consider the timing and nature of incentives, we aim to create an engaging and supportive learning environment that caters to the diverse needs of all students.

---

## Section 4 - Technical Decisions

After extensive research, we finalized the following technological stack for our AR board game:

| Type               | Decision                                      |
|--------------------|----------------------------------------------|
| **Game**          | Unity 6 engine                               |
| **AR generation** | Unity AR Foundation 6.1.0                   |
| **AI Model**      | 4-bit quantized version of Granite-3.0-8B instruct model |
| **Object recognition** | OpenCV YOLO11x|
| **Image generation** | DreamShaper-8                        |
| **Teacher Dashboard** | React+Vite website                      |

These technologies were selected based on their ability to support real-time AR interactions, AI-driven adaptability, and user-friendly interfaces for both students and educators. The combination of these tools ensures a robust, scalable, and effective learning platform tailored to SEND students' needs.

---

## Section 5 - References
[1] Ross, J. et al. (2024) Using games in teaching ‘boosts grades and student satisfaction’, Times Higher Education (THE). Available at: https://www.timeshighereducation.com/news/using-games-teaching-boosts-grades-and-student-satisfaction#:~:text=The%20study%20found%20that%20the,cent%20in%20the%20control%20group. (Accessed: 27 March 2025). 

[2] Lisa-Maria Putz. (2020) Can gamification help to improve education? findings from a longitudinal study, Computers in Human Behavior. Available at: https://www.sciencedirect.com/science/article/abs/pii/S074756322030145X (Accessed: 27 March 2025). 

[3] Hickman, C. (2023) How gamification can support autistic learners, Organization for Autism Research. Available at: https://researchautism.org/blog/how-gamification-can-support-autistic-learners/ (Accessed: 27 March 2025). 

[4] Atherton, G. and Cross, L. (2021) The use of analog and digital games for autism interventions, Frontiers in psychology. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC8384560/ (Accessed: 27 March 2025). 

[5] Garaialde, D. (2021) Designing gamified rewards to encourage repeated app selection: Effect of reward placement , Designing gamified rewards to encourage repeated app selection: Effect of reward placement. Available at: https://discovery.ucl.ac.uk/id/eprint/10131140/1/1-s2.0-S1071581921000793-main.pdf (Accessed: 27 March 2025). 

[6] Kendra Cherry, Mse. (2023) Why does the overjustification effect reduce intrinsic motivation?, Verywell Mind. Available at: https://www.verywellmind.com/what-is-the-overjustification-effect-2795386 (Accessed: 27 March 2025). 

[7] Li, Y., Chen, D. and Deng, X. (2024) The impact of digital educational games on student’s motivation for learning: The mediating effect of learning engagement and the moderating effect of the digital environment, PloS one. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC10783726/ (Accessed: 27 March 2025).  

