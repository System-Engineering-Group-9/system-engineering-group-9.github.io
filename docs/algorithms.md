---
id: algorithms
title: Algorithms for Classroom Explorers
description: Algorithms and data structures used in our project Classroom Explorers, focusing on AI, AR, and game development.
sidebar_position: 4
---

## Overview

The Generator module integrates advanced artificial intelligence technologies to achieve efficient and accurate question
generation and object detection. Specifically, it employs a quantized IBM Granite-3.0-8b-instruct model for generating
meaningful questions and YOLO (You Only Look Once) for robust real-time object detection. Below are detailed
step-by-step breakdowns, including principles behind each algorithm.

---

## Question Generation Algorithm (IBM Granite-3.0-8b-instruct)

### Model Principle

IBM Granite-3.0-8b-instruct is a quantized instruction-tuned large language model (LLM). It works based
on [transformer architecture](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf),
utilizing attention mechanisms to understand context and generate human-like textual responses.
The [quantization](https://arxiv.org/pdf/2106.08295) reduces numerical precision, significantly optimizing computational
efficiency and reducing memory usage without substantially compromising output quality.

### Step 1: Input Preparation

The system prepares structured prompts for generating context-relevant questions.

```python
def get_prompt(number: int, subject: Subject, ageGroup: str, item: str = None) -> str:
    base_prompt = (
        f"Generate {number} multiple choice quiz questions "
        f"with 4 choices based on {subject.value}, suitable for children at {ageGroup} years old. "
        f"Ensure there is only 1 correct answer and include the correct answer. "
        f"Do not include any quotation marks in the output. "
        f"Output each question in the following format:\n"
        f"Question:\n"
        f"ChoiceA:\n"
        f"ChoiceB:\n"
        f"ChoiceC:\n"
        f"ChoiceD:\n"
        f"Answer:\n"
        f"Here is an example of output:\n"
        f"Question:What is the only planet that hosts life that we know of?\n"
        f"ChoiceA:Earth\n"
        f"ChoiceB:Mars\n"
        f"ChoiceC:Jupiter\n"
        f"ChoiceD:Venus\n"
        f"Answer:A"
    )

    if item:
        base_prompt = base_prompt.replace(
            f"Generate {number} multiple choice quiz questions", f"Generate {number} multiple choice quiz questions around {item}"
        )

    return base_prompt
```

### Step 2: Model Initialization

The quantized IBM Granite model is initialized for inference.

```python
self.llm = Llama.from_pretrained(
    repo_id="QuantFactory/granite-3.0-8b-instruct-GGUF",
    filename="granite-3.0-8b-instruct-GGUF",
)
```

### Step 3: Inference

Model processes the prompts to generate questions:

```python
response = self.llm.create_chat_completion(
    messages=[{"role": "user", "content": prompt}],
    max_tokens=number * 200 + 200,
    temperature=0.85,
)
```

### Step 3: Post-processing

Generated text is parsed and structured into quiz format.

```python
output = response['choices'][0]['message']['content']
questions = []
# Extract and structure the questions here
```

### Advantages

- High computational efficiency due to quantization.
- Context-aware, accurate, and engaging question generation.

---

## Object Detection Algorithm (YOLO)

### Model Principle

[YOLO (You Only Look Once)](https://docs.ultralytics.com/) is a single-stage deep neural network algorithm that performs
object detection in real-time. It divides an image into grids, predicting bounding boxes and class probabilities
directly in a single pass, thus achieving high-speed detection with good accuracy.

### Step 1: Initialization and Loading YOLO

The YOLO model is initialized by loading pre-trained weights:

```python
self.model = YOLO(path + "/models/detection/yolo11x.pt")
```

### Step 2: Image Pre-processing

Images are pre-processed and resized to match YOLO’s expected input.

```python
results = self.model(image)
```

### Step 3: YOLO Model Inference

Objects in the image are detected with bounding boxes, labels, and confidence scores:

```python
detection_results = []
for result in results:
    boxes = result.boxes
    for box in boxes:
        label = result.names[int(box.cls)]
        score = box.conf
        detection_results.append({"label": label, "score": score.item()})
```

### Step 4: Post-processing

Apply Non-Maximum Suppression (NMS) to refine detections by removing duplicate boxes and annotating results clearly.

### Advantages

- Efficient and accurate real-time detection.
- Highly reliable for dynamic and interactive environments.

---

## Background Image Generation Algorithm (DreamShaper)

### Model Principle

DreamShaper is a diffusion-based text-to-image generation model that produces high-quality visuals by iteratively
refining an initially random noise distribution guided by text prompts.

### Step-by-Step Breakdown

**1. Model Initialization**

```python
pipe = AutoPipelineForText2Image.from_pretrained('lykon/dreamshaper-8', torch_dtype=torch.float16, variant="fp16")
pipe.scheduler = DEISMultistepScheduler.from_config(pipe.scheduler.config)
self.pipe = pipe.to(self.device)
```

**2. Prompt Generation**

```python
def get_background_prompt(subject: Subject, ageGroup: str) -> str:
    return f"A colorful and engaging scene illustrating {subject.value}, suitable for children at {ageGroup} years old."
```

**3. Image Generation**

```python
def generate_background_image(self, subject: Subject, ageGroup: str):
    return self.pipe(
        get_background_prompt(subject, ageGroup),
        generator=self.generator,
        num_inference_steps=20
    ).images[0]
```

---

## Integrated Workflow

The integration of IBM Granite-3.0-8b-instruct for generating quiz questions and YOLO for object detection creates an
interactive workflow. YOLO identifies relevant visual elements, providing contextual input for the IBM Granite model,
enhancing the relevance and engagement of generated questions.

### Application Flow

1. Capture visual data from the environment.
2. Perform object detection with YOLO.
3. Use detected objects as context for generating questions with IBM Granite-3.0-8b-instruct.
4. Output contextually relevant quiz questions.

---

## Conclusion

The Generator efficiently integrates advanced object detection with quantized language modeling, creating an interactive
and high-performance educational experience ideal for dynamic and engaging learning environments.

