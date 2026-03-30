export const siteContent = {
  identity: {
    name: "CHEA SENGHUY",
    strapline: "Agentic AI | Software Engineer",
    intro:
      "Research focus: Agentic AI systems for clinical question answering.",
    status:
      "Current work spans LangChain orchestration, compact long conversation flow, routing pipelines, retrieval, and evidence-grounded multimodal reasoning.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/senghuyjr11",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=GnNYyy4AAAAJ&hl=en&oi=ao",
      },
    ],
  },
  about: [
    "I build AI systems and software applications, with experience ranging from research prototypes to production-ready code. My work spans multimodal learning, Agentic AI and Java Spring Boot/Mobile development.",
  ],
  skillGroups: [
    {
      title: "AGENTIC AI",
      items: [
        "Multi-Agent Orchestration",
        "Routing Pipeline Design",
        "Compact Long Conversation Flow",
        "Memory-Aware / LangChain",
        "RAG / Cosine Similarity Embedding"
      ],
    },
    {
      title: "MULTIMODAL AI",
      items: [
        "Vision-Language Models",
        "Qwen-VL / Clinical VQA",
        "LLM Fine-tuning (QLoRA, DoRA)",
        "Vision Transformers",
        "PyTorch",
      ],
    },
    {
      title: "COMPUTER VISION",
      items: [
        "Transfer Learning",
        "BiSeNet Segmentation",
        "Data Augmentation",
        "Hierarchical Classification",
        "Image Preprocessing",
      ],
    },
    {
      title: "DEVELOPMENT",
      items: [
        "Android (Java/Kotlin)",
        "Spring Boot / JPA / Hibernate",
        "REST API / System Architecture",
        "SQL / MyBatis / ORM",
        "Linux Operating System",
      ],
    },
  ],
  projects: [
    {
      title: "Agentic Multimodal AI for Clinical Visual Question Answering with Reasoned and Evidence-Grounded Responses",
      period: "[2024-Present]",
      description:
        "First-author journal work centered on Agentic AI for clinical VQA. Designed a multi-agent pipeline with routing, multimodal reasoning, conversation memory, and evidence-grounded retrieval over medical literature for pathology and radiology images.",
      tags: [
        "LangChain",
        "Qwen3-VL",
        "DoRA",
        "Multi-Agent",
        "RAG",
        "Conversation Memory",
        "Vision Transformer",
      ],
    },
    {
      title: "Seasonal Skin Tone Classification",
      period: "[2025]",
      description:
        "First-author journal submission using ConvNeXt-Large, BiSeNet preprocessing, StyleGAN3 augmentation, and hierarchical classification for seasonal skin tone analysis.",
      tags: [
        "ConvNeXt",
        "StyleGAN3",
        "BiSeNet",
        "PyTorch",
        "Hierarchical Classification",
      ],
    },
    {
      title: "Chest X-ray Diagnosis with Vision-Language AI",
      period: "[KICS 2025]",
      description:
        "First-author conference paper on chest X-ray diagnosis using Vision-Language AI for clinically relevant image understanding.",
      tags: ["Vision-Language AI", "Chest X-ray", "Medical AI"],
    },
    {
      title:
        "Agentic Multimodal AI for Clinical Question Answering: From Images and Text to Reasoned Answer",
      period: "[KOSOMBE 2025]",
      description:
        "First-author conference paper presented at KOSOMBE 2025 on agentic multimodal clinical question answering from images and text to reasoned answers.",
      tags: [
        "Agentic AI",
        "Multimodal QA",
        "Clinical AI",
        "Reasoned Answering",
      ],
    },
  ],
  experience: [
    {
      role: "AI Researcher",
      period: "2024.09 - Present",
      organization: "Smart Computing Laboratory (SCLAB), Inje University",
      summary:
        "Agentic AI research for clinical question answering, covering LangChain orchestration, routing pipelines, conversation memory, RAG, multimodal reasoning, and LLM fine-tuning.",
    },
    {
      role: "Software Engineer (R&D)",
      period: "2022.03 - 2023.08",
      organization: "KOSIGN Cambodia Investment Co., Ltd.",
      summary: [
        "Android work included Java MVC and Kotlin MVVM development, QR payment flows, Retrofit API integration, map/location features, Google ML Kit scanning, and AppIron and mVaccine security integration.",
        "Backend work included leading the migration from MyBatis to Spring Boot + JPA(Hibernate), driving new feature updates, preparing pre-deploy environments, and improving API maintainability through ORM-based layered architecture.",
      ],
    },
    {
      role: "System Infrastructure Engineer (Intern)",
      period: "2019.04 - 2020.01",
      organization: "Redbridge Financial Advisor",
      summary:
        "Server infrastructure, network system management, monitoring, incident response, and internal IT maintenance.",
    },
  ],
  contact: {
    prompt: "CONNECT",
    Email: "senghuy001@gmail.com",
    Location: "Gimhae-si, South Korea",
    note: "",
  },
};
