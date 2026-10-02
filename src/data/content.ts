export const profile = {
  name: "Ashish Bisariya",
  role: "Data Scientist & Machine Learning Engineer",
  tagline: "I build data-driven solutions, machine learning models, and AI applications—from experimentation to production.",
  intro:
    "I work across data analysis, machine learning, deep learning, NLP, and computer vision. From building Siamese networks for kinship verification to deploying regression models and NLP classifiers, my focus is turning messy real-world problems into clear experiments and usable AI systems.",
  email: "ashishvisariya663@gmail.com",
  phone: "+91 8965853934",
  location: "Sheopur, Madhya Pradesh, India",
  github: "https://github.com/Ashishvisariya",
  linkedin: "https://www.linkedin.com/in/ashish-bisariya-7aa648361",
  resume: "/resume.pdf"
};

export const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["pipeline", "Pipeline"],
  ["journey", "Journey"],
  ["github", "GitHub"],
  ["contact", "Contact"]
] as const;

export const skills = [
  {
    title: "Programming & Data",
    icon: "code",
    items: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    title: "Machine Learning",
    icon: "brain",
    items: ["Scikit-learn", "Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation", "Hyperparameter Optimization"]
  },
  {
    title: "Deep Learning",
    icon: "network",
    items: ["PyTorch", "CNNs", "Siamese Networks", "Transfer Learning", "facenet-pytorch"]
  },
  {
    title: "NLP & Generative AI",
    icon: "message",
    items: ["NLP", "NLTK", "TF-IDF", "Tokenization", "Text Classification", "Hugging Face"]
  },
  {
    title: "Backend & Deployment",
    icon: "server",
    items: ["FastAPI", "REST APIs", "Docker", "Model serving", "Basic deployment concepts"]
  }
] as const;

export const projects = [
  {
    title: "Kinship Verification from Face Images",
    type: "Deep Learning / Computer Vision",
    description:
      "Built a Siamese network to predict whether two people in face photographs are blood relatives, using a VGGFace2-pretrained CNN backbone. Designed the full data pipeline from scratch—parsed family-relationship labels, generated cross-family negative pairs, and built a balanced 260K-pair training set. Used two-phase transfer learning (frozen warm-up, then full fine-tuning) and an embedding-caching technique that cut CPU training time from hours to minutes.",
    stack: ["Python", "PyTorch", "facenet-pytorch", "Pandas", "NumPy"],
    result: "98%+ accuracy · 0.99 AUC-ROC",
    github: "https://github.com/Ashishvisariya",
    demo: "#",
    image: "/images/project-cnn.svg"
  },
  {
    title: "House Price Prediction",
    type: "Machine Learning",
    description:
      "Developed a machine learning model to predict Bangalore house prices using regression techniques. Performed data preprocessing, missing value handling, outlier removal, and feature engineering. Compared Linear Regression, Ridge Regression, and Lasso Regression models, evaluated using R² score and cross-validation.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    result: "Best R² via cross-validation",
    github: "https://github.com/Ashishvisariya",
    demo: "#",
    image: "/images/project-ml.svg"
  },
  {
    title: "Spam Detection using NLP",
    type: "NLP / Text Classification",
    description:
      "Developed a spam classification model on an SMS dataset. Applied tokenization, stop-word removal, and TF-IDF vectorization. Trained and compared Naive Bayes and Logistic Regression classifiers, selecting the best-performing model using precision, recall, and F1 evaluation metrics.",
    stack: ["Python", "NLTK", "Scikit-learn"],
    result: "Best classifier selected via evaluation metrics",
    github: "https://github.com/Ashishvisariya",
    demo: "#",
    image: "/images/project-nlp.svg"
  }
];

export const pipeline = [
  ["01", "Data", "Collect, understand & validate"],
  ["02", "Exploration", "Find patterns & questions"],
  ["03", "Preprocessing", "Clean & transform"],
  ["04", "Feature Engineering", "Create useful signals"],
  ["05", "Model Development", "Train & iterate"],
  ["06", "Evaluation", "Measure & compare"],
  ["07", "FastAPI", "Expose predictions"],
  ["08", "Docker", "Package the service"],
  ["09", "Deployment", "Move toward production"]
] as const;

export const journey = [
  ["Education", "B.Tech in Electronics & Communication Engineering — IIIT Bhagalpur", "education"],
  ["Internship", "Add role, organization, dates & impact", "work"],
  ["Work Experience", "Add role, organization, dates & responsibilities", "work"],
  ["Certifications", "Add certification name & issuer", "cert"],
  ["Major Project", "Kinship Verification from Face Images — 98%+ accuracy Siamese network for blood-relation prediction", "project"]
] as const;
