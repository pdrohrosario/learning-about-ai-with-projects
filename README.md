# 🚀 Learning AI Engineering: A Backend Perspective

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![AI Engineering](https://img.shields.io/badge/AI_Engineering-000000?style=for-the-badge&logo=openai&logoColor=white)

## 📌 About This Repository
This repository is a collection of hands-on projects and exercises designed to explore AI programming concepts from a **Backend Architect's perspective**. 

Instead of focusing on traditional Data Science (pure math, model training from scratch, or Python notebooks), these projects are built around **integrating non-deterministic AI models into highly scalable, deterministic backend systems**. The goal is to treat Large Language Models (LLMs) as critical infrastructure components—just like a database or a message broker.

---

## 📂 Practical Projects & Exercises

Each directory contains a specific tool or experiment related to natural language processing and AI workflows:

* **[Token Counter](./token-counter):** A Node.js CLI tool built to count tokens and analyze the financial/latency impact of different data structures (JSON vs. Java Records vs. CSV) when communicating with LLMs. Essential for managing API limits and understanding AI economy.
* **[Semantic Chunker](./chunker):** A robust utility and API implementing a smart text-splitting algorithm. It acts as the ETL pipeline step for RAG (Retrieval-Augmented Generation), using backtracking logic to ensure sentences and words are never broken in half before vectorization.

---

## 🧠 The Curriculum Roadmap

This repository follows a strict curriculum focused on what Big Tech companies demand from Backend Developers in 2026.

### 🟢 Module 1: LLM Architecture Fundamentals (The AI "Kernel")
*Demystifying the "black box" by treating it as a software component.*
* **The Transformer Dismantled:** Self-Attention as a dynamic dependency graph.
* **Tokenization vs. Encoding:** Why `String.length()` is misleading and how byte-pair encoding impacts API cost.
* **Embeddings (Vectors):** "Semantic Hashing" and translating text into `float[]` arrays.
* **Production Glossary:** `Temperature`, `Top-P`, and Inference Latency (TTFT) vs. Throughput.

### 🟡 Module 2: Context Engineering & RAG (The "Semantic JOIN")
*Solving the state management problem in stateless models.*
* **The Context Window Bottleneck:** Managing the LLM's "Memory Buffer" and implementing smart data chunking strategies.
* **RAG Architecture:** The pipeline: `User Query -> Vector DB -> Semantic Search -> Context Injection -> LLM`.
* **The 2026 Stack:** Java (`Spring AI` + `pgvector`) and Node (`LangChain.js` + `NestJS`).
* **Streaming (SSE):** Using Server-Sent Events to stream tokens to the frontend, mitigating perceived latency.

### 🔴 Module 3: Agents & Tool Use (Backend as an API for AI)
*Giving "arms and legs" to the AI's brain.*
* **Function Calling (The Protocol):** Exposing backend Services as "tools" for the AI to execute.
* **Structured Outputs Strict Mode:** Forcing the AI to respect strict API contracts (Zod/Jackson) without hallucinating text.
* **The Smart Router:** Replacing complex `if/else` chains with semantic decisions made by the LLM.
* **ReAct & Messaging:** Using Apache Kafka to manage long-running agentic tasks and avoid agent "Stack Overflow".

### 🟣 Module 4: LLMOps & Production (Observability & Security)
*Deploying to production without breaking the system.*
* **Security:** Defending against Prompt Injection and PII leaks.
* **Distributed Tracing:** Monitoring the AI's "chain of thought" using OpenTelemetry.
* **Cost Management:** Implementing Semantic Caching with Redis.
* **Evals (LLM-as-a-Judge):** Automating prompt testing and accuracy validation in CI/CD pipelines.

---

## 🛠️ Tech Stack Focus
* **Languages:** TypeScript, Java
* **Frameworks:** NestJS, Spring Boot
* **AI Tooling:** Tiktoken, LangChain.js / Spring AI
* **Infrastructure:** Docker, PostgreSQL (pgvector), Redis (Semantic Caching), Kafka

---
*These are educational exercises created as part of an intensive mentoring program focused on Advanced AI Architecture for Backend Developers.*