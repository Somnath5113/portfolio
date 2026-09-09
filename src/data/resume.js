export const profile = {
  name: 'Somnath Mahata',
  role: 'ML Engineer · Computer Vision · Generative AI',
  institute: 'Dual Degree, IIT Kharagpur — Vision & Intelligent Systems',
  tagline:
    "I turn messy real-world signals — video, speech, text, pricing data — into systems that make decisions on their own. Lately that's meant multi-agent pipelines, RAG that doesn't hallucinate, and computer vision that runs at 30fps in production.",
  email: 'somnathmahata513@gmail.com',
  resumeUrl: '/resume.pdf',
}

export const bio = [
  "I'm a dual-degree student at IIT Kharagpur, splitting my time between an Electronics & Electrical Communication Engineering degree and a Master's in Vision and Intelligent Systems — which is a formal way of saying I've spent five years alternating between hardware fundamentals and teaching machines to see.",
  "Outside coursework, I've spent four internships shipping things that actually run in production: a pricing engine live at 250+ hotels, a traffic-camera pipeline that sees through fog, a chatbot reading medical call transcripts, and a robot arm learning to pick tomatoes. I like the version of AI that has to survive contact with real data.",
]

export const journey = [
  {
    year: '2027',
    title: 'Graduating with a dual degree',
    body: "I'm finishing a 5-year dual degree at IIT Kharagpur — a B.Tech in Electronics & Electrical Communication, capped with an M.Tech specializing in Vision and Intelligent Systems.",
  },
  {
    year: '2021',
    title: 'Left Kerala for engineering',
    body: 'Finished school at Jawahar Navodaya Vidyalaya, Kottayam, scoring 91.6% — the send-off into a decade of moving between campuses.',
  },
  {
    year: '2019',
    title: 'Where it started',
    body: 'Class X at Jawahar Navodaya Vidyalaya, Purulia, West Bengal, with 95% — a fully-funded rural school that first put me in front of a computer.',
  },
]

export const chapters = [
  {
    company: 'PRISM — OYO (USA/UK)',
    role: 'Data Science Intern',
    period: 'May – Oct 2026',
    hook: 'Revenue managers at 250+ UK hotels were pricing rooms on gut feel. I gave them a live dashboard instead.',
    story:
      "I shipped a real-time pricing app on FastAPI and Panel, live-A/B-testing price points against occupancy and competitor rates across 250+ properties. To keep humans in the loop, I built a LangGraph review dashboard that reads sentiment across 2,000+ US/UK listings, and a multi-agent debugger that resolves 4 out of 5 pricing escalations without a human touching them. When something breaks, cron jobs and SMTP alerts tell me before a guest notices — that's how the system stays up 99.9% of the time.",
    metrics: ['250+ hotels live', '80% auto-resolved escalations', '99.9% uptime'],
    tags: ['FastAPI', 'LangGraph', 'Docker', 'Kubernetes', 'OpenAI'],
  },
  {
    company: 'Brix AI Technology LLP',
    role: 'Gen AI & ML Development Intern',
    period: 'May 2025 – Jul 2026',
    hook: 'A US medical billing team was drowning in call transcripts. I built the pipeline that reads them for a living.',
    story:
      'I stood up a RAG-powered support chatbot on Llama and sentence-transformers, then turned to the harder problem: structuring real-time US healthcare call data into MongoDB and surfacing insights automatically, which sped up processing by 40%. On the side, I fine-tuned Wav2Vec2 to tell US and Indian speech patterns apart with 94.2% accuracy — a detail that mattered more than it sounds for accent-sensitive analytics.',
    metrics: ['40% faster processing', '94.2% accent-classification accuracy'],
    tags: ['LLaMA', 'RAG', 'MongoDB', 'Wav2Vec2', 'FastAPI'],
  },
  {
    company: 'Proficient Vision Solutions',
    role: 'Computer Vision Intern',
    period: 'Nov 2025 – Jan 2026',
    hook: 'Fog and rain were blinding a traffic camera network. I rebuilt the pipeline so it could see through both.',
    story:
      "I engineered a PyTorch/OpenCV video pipeline on AWS EC2 that strips fog and rain in real time — 95% of it, gone — while a custom NGINX RTMP setup replaced AWS MediaLive/MediaPackage entirely, cutting stream latency to 8 seconds and lifting image clarity by 40% PSNR at 30+ fps. YOLOv8 and PaddleOCR then read the cleaned footage, logging 10,000+ license plates automatically for the analytics team.",
    metrics: ['95% fog/rain removed', '10K+ plates logged', '8s stream latency'],
    tags: ['AWS EC2', 'YOLOv8', 'PaddleOCR', 'OpenCV', 'NGINX RTMP'],
  },
  {
    company: 'Centre for Robotics, IIT Kharagpur',
    role: 'Research Intern',
    period: 'May – Jul 2024',
    hook: 'Before a robot can pick a tomato, it has to actually see one — fast, and in 3D.',
    story:
      "I benchmarked YOLO against DETR on COCO (53.9% vs 42.0% mAP) to pick the right detector, then trained it on a custom tomato dataset until it hit 91.5% validation mAP at 45fps. To make it robot-ready, I ported inference to TensorRT/CUDA for up to 3.9x faster runs in C++, and fused PyRealSense depth data with inverse kinematics so a robotic arm could map fruit in 3D space and reach for it.",
    metrics: ['91.5% validation mAP', 'up to 3.9x faster inference'],
    tags: ['YOLO', 'DETR', 'TensorRT', 'CUDA', 'PyRealSense'],
  },
]

export const projects = [
  {
    title: 'A research assistant that checks its own work',
    subtitle: 'Autonomous Multi-Agent Research & Reasoning System',
    period: 'Jul – Nov 2025',
    problem:
      "Single-shot RAG answers sound confident and are often wrong — there's no one checking.",
    solution:
      'I built a LangGraph pipeline of four agents — planner, retriever, critic, synthesizer — that argue with each other before answering, using ReAct and Reflexion loops to catch their own mistakes. Retrieval blends FAISS dense search, BM25, and HyDE reranking, and every run is traced through LangSmith with Redis holding session memory.',
    impact:
      "The critic loop alone cut hallucinations by 41%. I closed the loop with RAGAS scoring (0.91 context recall) piped into Grafana, so I could see exactly which prompts needed work — median answer latency stayed under 2.1s.",
    tags: ['LangGraph', 'FAISS', 'BM25', 'FastAPI', 'Redis', 'RAGAS'],
  },
  {
    title: 'Teaching a model to describe what it sees — and read what it reads',
    subtitle: 'Attention-Based Image Captioning, CNN-RNN Pipeline',
    period: 'Jan 2025 – Apr 2026',
    problem:
      'One captioning model can\'t handle both a photo of a dog and a bar chart — they need fundamentally different "reading" skills.',
    solution:
      "I trained an EfficientNetV2 gate (98.7% accurate on 12K images) that routes each image to the right specialist: a Transformer decoder tuned for natural photos, or a second branch that runs EasyOCR (98.2% accurate) to pull text out of charts before captioning them through a VGG16 + BiTransformer decoder.",
    impact:
      'The natural-image branch beat a CNN-LSTM baseline by 8.2 BLEU-1 points. Label smoothing and gradient clipping cut hallucinated details by 34%, and the whole thing runs in production via FastAPI/TorchScript at 0.31s per image, with Grad-CAM to show its work.',
    tags: ['EfficientNetV2', 'Transformers', 'EasyOCR', 'VGG16', 'Grad-CAM'],
  },
]

export const skillsData = [
  {
    id: 'languages',
    title: 'Languages & Core',
    tagline: 'The foundations everything else is built on',
    icon: 'code',
    skills: [
      { name: 'Python', level: 95, context: 'Primary language across all 4 internships — FastAPI, PyTorch, data pipelines', category: 'primary' },
      { name: 'C++', level: 78, context: 'TensorRT inference optimization — up to 3.9× speedup on CUDA', category: 'systems' },
      { name: 'C', level: 70, context: 'Embedded systems coursework, memory-level robotics control', category: 'systems' },
      { name: 'SQL', level: 82, context: 'Complex analytical queries for OYO pricing engine across 250+ hotels', category: 'data' },
      { name: 'HTML/CSS/JS', level: 65, context: 'Panel dashboards, FastAPI frontends, this portfolio', category: 'web' },
    ],
  },
  {
    id: 'ml',
    title: 'ML & Deep Learning',
    tagline: 'Training models that survive contact with real data',
    icon: 'brain',
    skills: [
      { name: 'PyTorch', level: 92, context: 'Fog/rain removal pipeline at 30fps, image captioning transformers', category: 'framework' },
      { name: 'TensorFlow', level: 75, context: 'Keras prototyping, TFLite edge deployment experiments', category: 'framework' },
      { name: 'Scikit-learn', level: 85, context: 'Feature engineering, XGBoost ensembles for pricing prediction', category: 'classical' },
      { name: 'Transformers (HF)', level: 88, context: 'Fine-tuned Wav2Vec2 for accent classification — 94.2% accuracy', category: 'nlp' },
      { name: 'TensorRT / CUDA', level: 80, context: 'C++ inference — 3.9× faster YOLO on robotic arm pipeline', category: 'optimization' },
    ],
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    tagline: 'Making machines see through fog, rain, and darkness',
    icon: 'eye',
    skills: [
      { name: 'OpenCV', level: 90, context: 'Real-time video dehazing, RTMP stream processing at 30+ fps', category: 'core' },
      { name: 'YOLOv8', level: 88, context: '91.5% mAP on custom tomato dataset, 10K+ license plates logged', category: 'detection' },
      { name: 'DETR', level: 72, context: 'Benchmarked against YOLO on COCO — 42.0% vs 53.9% mAP analysis', category: 'detection' },
      { name: 'PaddleOCR', level: 78, context: 'Automated plate reading from cleaned fog-free traffic footage', category: 'ocr' },
      { name: 'Grad-CAM', level: 75, context: 'Explainability layer on image captioning — shows where the model looks', category: 'explainability' },
    ],
  },
  {
    id: 'agents',
    title: 'LLMs & Agents',
    tagline: 'Multi-agent pipelines that argue before they answer',
    icon: 'robot',
    skills: [
      { name: 'LangGraph', level: 90, context: '4-agent research system with ReAct + Reflexion — 41% fewer hallucinations', category: 'orchestration' },
      { name: 'LangChain', level: 85, context: 'RAG pipelines with FAISS dense search + BM25 hybrid retrieval', category: 'orchestration' },
      { name: 'RAG / FAISS', level: 88, context: '0.91 context recall on RAGAS, HyDE reranking, session memory with Redis', category: 'retrieval' },
      { name: 'LiteLLM', level: 75, context: 'Unified API gateway across OpenAI, Anthropic, and open-source models', category: 'inference' },
      { name: 'LLaMA', level: 80, context: 'Fine-tuned for medical call transcript processing at Brix AI', category: 'models' },
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    tagline: 'Pipelines that clean, store, and serve — reliably',
    icon: 'database',
    skills: [
      { name: 'MongoDB', level: 82, context: 'Structured real-time US healthcare call data, sped up processing 40%', category: 'storage' },
      { name: 'Redis', level: 78, context: 'Session memory for multi-agent research system, caching layer', category: 'cache' },
      { name: 'FastAPI', level: 92, context: 'Production APIs at OYO (pricing), Brix AI (chatbot), captioning service', category: 'api' },
      { name: 'Pandas / NumPy', level: 88, context: 'ETL pipelines, feature engineering, A/B test analysis', category: 'processing' },
      { name: 'RAGAS / LangSmith', level: 76, context: 'End-to-end LLM evaluation — traced every run through Grafana dashboards', category: 'evaluation' },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure & DevOps',
    tagline: 'Shipping it is half the job — keeping it up is the other half',
    icon: 'cloud',
    skills: [
      { name: 'Docker', level: 85, context: 'Containerized every production service — pricing engine, chatbot, CV pipeline', category: 'container' },
      { name: 'AWS EC2', level: 80, context: 'GPU instances for real-time video processing, auto-scaling configs', category: 'cloud' },
      { name: 'NGINX / RTMP', level: 82, context: 'Custom streaming server replacing AWS MediaLive — 8s latency', category: 'networking' },
      { name: 'Kubernetes', level: 70, context: 'Orchestration for OYO microservices deployment', category: 'orchestration' },
      { name: 'Git / Linux', level: 88, context: 'Daily driver — CI/CD workflows, shell scripting, server admin', category: 'core' },
    ],
  },
]

// Skill connections showing how skills chain across real projects
export const skillConnections = [
  {
    label: 'Traffic Vision Pipeline',
    path: ['PyTorch', 'OpenCV', 'YOLOv8', 'PaddleOCR', 'NGINX / RTMP', 'AWS EC2'],
    color: '#7c3aed',
  },
  {
    label: 'Multi-Agent Research System',
    path: ['LangGraph', 'RAG / FAISS', 'Redis', 'FastAPI', 'LangChain'],
    color: '#38bdf8',
  },
  {
    label: 'OYO Pricing Engine',
    path: ['Python', 'FastAPI', 'SQL', 'Docker', 'Kubernetes', 'LangGraph'],
    color: '#f472b6',
  },
  {
    label: 'Robotic Tomato Picking',
    path: ['YOLOv8', 'TensorRT / CUDA', 'C++', 'PyTorch', 'OpenCV'],
    color: '#34d399',
  },
]

export const beyondWork = [
  {
    title: 'Proctoring for Dakshana',
    detail:
      'Ran the NDST 2026 scholarship exam for 113 students at JNV Bankura on behalf of the Dakshana India Educational Trust — the same kind of program that helped launch my own path.',
  },
  {
    title: 'NSS Group Leader, two years running',
    detail:
      'Organized cleaning drives, teaching sessions, awareness campaigns and health camps for a village near campus — leadership that had nothing to do with a keyboard.',
  },
]
