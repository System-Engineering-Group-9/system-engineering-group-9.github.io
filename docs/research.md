# Research

Our project aims to create an augmented reality (AR) board game using IBM GenAI technology to support students with Special Educational Needs and Disabilities (SEND). The goal is to provide an innovative and engaging learning experience that differs from traditional educational methods. By integrating AR and AI technologies, we seek to enhance accessibility, interactivity, and personalized learning for students with diverse needs.

## Research Areas

To develop our solution, we conducted extensive research in four key technological domains:

- **IBM Granite Models**: Investigating the capabilities of IBM's Granite models to determine their suitability for AI-driven interactions and content generation.
- **Unity Game Development**: Exploring Unity's capabilities for AR game development, particularly focusing on the latest features and improvements in Unity 6.
- **YOLO Object Recognition**: Researching YOLO (You Only Look Once) for real-time object detection to facilitate interactive and adaptive gameplay.
- **DreamShaper Image Generation**: Assessing the potential of DreamShaper for generating dynamic game assets and visual elements to enhance the AR experience.

---

# Section 1 - Related Project Review

To inform our project development, we reviewed existing AR educational tools and AI-assisted learning platforms, as well as notable games that emphasize personalization and interactivity. Our findings highlight how these elements enhance engagement and accessibility for SEND students.

## Section 1.1 - Osmo

Osmo is an AR learning system that uses physical objects alongside digital interactions to create an immersive learning experience. By integrating physical play with digital feedback, Osmo provides an interactive way for students to engage with educational content. This hybrid approach inspired our AR board game, particularly in how we integrate real-world components into the digital experience to enhance accessibility and engagement for SEND students.

## Section 1.2 - Pokémon GO

Pokémon GO is an AR-based mobile game that encourages players to explore their environment while capturing virtual creatures. The game's success in using AR to create a deeply engaging and interactive experience provided valuable insights for our project. We aim to incorporate similar real-world interactions and engagement in our board game, allowing players to connect with their environment while participating in educational activities.

## Section 1.3 - Risk

Risk is a classic strategy board game known for its engaging gameplay that involves decision-making, risk management, and territorial control. We researched Risk to inspire ideas for strategic elements and game mechanics, particularly focusing on how we could adapt these concepts into an AR-based, AI-driven environment that offers dynamic, interactive learning experiences for SEND students.

---

# Section 2 - Technology Review

Based on our research, we evaluated multiple tools and frameworks to determine the most suitable technologies for our project. The criteria for selection included performance, scalability, ease of integration, and compatibility with AR and AI functionalities.

## Section 2.1 - Augmented Reality (AR)

For our AR development, we are using **Unity AR Foundation**, a powerful and flexible framework designed for building cross-platform AR applications. Unity AR Foundation supports a wide range of AR devices and integrates seamlessly with other Unity tools, making it a popular choice for AR development.

**Comparison with Vuforia**

While Unity AR Foundation is a solid choice, it's essential to compare it with **Vuforia**, another widely used AR framework. Vuforia is known for its advanced features in image recognition and object tracking, as well as its robust support for both AR and VR. However, it tends to require more complex setups and additional development effort to integrate with game engines or other platforms.

One significant advantage of Unity AR Foundation over Vuforia is its seamless integration with the Unity engine. Unity AR Foundation operates natively within Unity, offering a unified development process for both AR and non-AR elements, whereas Vuforia may require extra work to integrate and optimize. Additionally, Unity AR Foundation offers extensive support for cross-platform development, allowing our AR experience to be easily deployed on multiple platforms without requiring significant rework.

In contrast, Vuforia’s features come with additional licensing costs and often result in larger file sizes, which could be a limitation for projects aimed at accessibility and ease of use. Unity AR Foundation provides more flexibility and streamlined processes for handling 3D content, making it the preferred choice for developing our AR board game.

## Section 2.2 - AI Model

For the AI component, we are utilizing the **IBM 4-bit quantized Granite 8B model**, a lightweight version of IBM’s Granite language model. This model was selected due to its optimized performance, allowing for powerful AI-driven interactions while maintaining low resource consumption.

**Offline Capability**

One of the primary reasons for selecting IBM’s Granite 8B model is its ability to work offline, offering more flexibility in various usage scenarios. The ability to run the model locally on devices eliminates the need for constant internet connectivity, which is essential for maintaining a seamless user experience. This is particularly important in educational settings where connectivity may be inconsistent or unreliable.

**Comparison with Other AI Models**

While other AI frameworks, such as **GPT-3** and **TensorFlow**, provide powerful generative capabilities, they often require significant computational resources and internet connectivity to function effectively.

For example, **GPT-3** typically requires cloud processing to operate, making it less suitable for offline or low-resource environments. In contrast, **IBM’s Granite 8B model**, with its quantization, provides a more lightweight alternative, ensuring that AI functionalities are accessible on a wide range of devices while offering low-latency responses.

The lightweight nature of IBM Granite 8B, coupled with its offline capabilities, provides a distinct advantage over other models, which are either too resource-heavy or reliant on cloud-based infrastructure. This makes it the ideal choice for our project, where offline functionality and performance efficiency are paramount.

---

# Section 3 - Technical Decisions

After extensive research, we finalized the following technological stack for our AR board game:

| Type               | Decision                                      |
|--------------------|----------------------------------------------|
| **Game**          | Unity 6 engine                               |
| **AR generation** | Unity AR Foundation 6.1.0                   |
| **AI Model**      | 4-bit quantized version of Granite-3.0-8B instruct model |
| **Object recognition** | OpenCV YOLO                        |
| **Image generation** | DreamShaper-8                        |
| **Teacher Dashboard** | React website                      |

These technologies were selected based on their ability to support real-time AR interactions, AI-driven adaptability, and user-friendly interfaces for both students and educators. The combination of these tools ensures a robust, scalable, and effective learning platform tailored to SEND students' needs.

