---
id: testing
title: Testing for Classroom Explorers
description: Testing for our project Classroom Explorers, focusing on the testing process and technologies used.
sidebar_position: 8
---
# Testing

## Overview
We have undertaken a comprehensive testing approach to ensure our project meets the majority of the requirements while gathering sufficient user feedback to improve our product. Continuous testing was conducted throughout the project, allowing us to make iterative changes to the game. This ensured that we addressed all user needs, considering both design aspects and hardware compatibility across various use cases.

Below are the key testing methods we employed:

**Unit Testing**
- Implemented unit testing for Educational Question Generator API.

**Performance Testing**
- Evaluated performance for the Educational Question Generator API.

**Compatibility Testing**
- Tested the game on various devices with different hardware specifications to ensure broad accessibility.

**User Acceptance Testing**
- Conducted real-world testing with various user groups, including:
  - Helen Allison School (NAS) visit
  - AI for Good showcase to clients
  - School outreach visits

## Section 1 - Unit Testing

We employed a combination of unit and integration testing to validate the core functionality of our Educational Question Generator API. Given the nature of our system, which is primarily backend-focused and does not rely on Android-specific components, we used standard Python testing libraries. The key tools leveraged were `pytest`, Starlette's `TestClient`, and `coverage.py`.

The tests aim to ensure that each API endpoint behaves correctly under various scenarios. We simulate user interactions with our HTTP endpoints and assert that the expected business logic is applied consistently.

**Purpose of API Testing**

API tests are a critical part of our backend validation. These tests ensure the correctness, robustness, and reliability of the API endpoints, which are responsible for generating educational quiz questions based on user-provided parameters such as subject, age group, and topic.

API tests offer confidence that:
- Valid requests return the appropriate HTTP 200 status and structured responses.
- The question generation logic returns meaningful and parameter-compliant questions.
- The system handles edge cases and invalid input gracefully by returning proper error codes like 400 or 404.

**Testing Frameworks**

Our API tests are written using `pytest` for test orchestration and Starlette's `TestClient` for simulating HTTP requests. We use pytest fixtures to set up a shared client across test modules, simplifying the codebase and ensuring consistency in test environments.

The following tools were used:
- **pytest**: Main testing framework for writing and running test cases.
- **TestClient**: Simulates HTTP requests against the FastAPI application.
- **coverage.py**: Measures code coverage across the API test suite.

A simplified version of the `conftest.py` fixture is shown below:

```python
# conftest.py
import pytest
from starlette.testclient import TestClient
from app.main import app

@pytest.fixture(scope='module')
def client():
    with TestClient(app) as c:
        yield c
```

**Example Test**

The following test ensures that the `/ai/generate/` endpoint returns a valid question based on user input:

**api/test_generate_questions.py**

```python
def test_generate_questions(client):
    params = {
        "number": 1,
        "subject": "History",
        "ageGroup": "10-12",
        "item": "French Revolution"
    }
    response = client.get("/ai/generate/", params=params)
    assert response.status_code == 200
    
    data = response.json()
    assert data.get("message") == "success"
    assert "questions" in data.get("data")
    assert len(data["data"]["questions"]) == 1
```

### Testing Approach

- **Unit Testing**: Focused on the correctness of individual API endpoints, ensuring proper request handling and response formats.
- **Integration Testing**: Verifies how the API integrates with internal components, such as the question generation logic and any external services.
- **Negative Testing**: Tests the system's resilience by providing malformed or incomplete input to validate proper error responses.

### Code Coverage
Our team prioritizes maintaining a high level of test coverage. Using coverage.py, we achieved over 90% code coverage across the backend. To ensure this standard is met, we run:
```
coverage run --source=app -m pytest
coverage report --show-missing
coverage html --title "${@-coverage}"
```
Maintaining this threshold helps ensure that core functionality, including edge cases, is thoroughly validated and production-ready.