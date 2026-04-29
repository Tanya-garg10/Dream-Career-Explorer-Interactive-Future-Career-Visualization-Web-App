const CAREERS = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    icon: "💻",
    color: "#6366f1",
    quote: "\"First, solve the problem. Then, write the code.\" — John Johnson",
    skills: ["Problem Solving", "Data Structures", "System Design", "Collaboration", "Continuous Learning"],
    milestones: [
      { year: "Year 1–2", title: "The Foundation", description: "Learn programming fundamentals, build small projects, and discover your passion for creating things with code.", icon: "📚" },
      { year: "Year 3", title: "First Internship", description: "Land your first tech internship. Ship real code, learn from senior engineers, and experience agile workflows.", icon: "🚀" },
      { year: "Year 4", title: "Graduate & First Job", description: "Join a team as a junior developer. Tackle bugs, write tests, and contribute to production systems.", icon: "🎓" },
      { year: "Year 5–7", title: "Mid-Level Engineer", description: "Own features end-to-end. Mentor newcomers, lead code reviews, and deepen your expertise in a domain.", icon: "⚡" },
      { year: "Year 8–10", title: "Senior Engineer", description: "Architect systems, influence technical direction, and solve the hardest problems on the team.", icon: "🏗️" },
      { year: "Year 10+", title: "Tech Lead / Architect", description: "Shape the engineering culture. Drive innovation, lead teams, or become a distinguished individual contributor.", icon: "👑" }
    ]
  },
  {
    id: "doctor",
    title: "Doctor",
    icon: "🩺",
    color: "#ec4899",
    quote: "\"The good physician treats the disease; the great physician treats the patient.\" — William Osler",
    skills: ["Empathy", "Critical Thinking", "Anatomy & Physiology", "Communication", "Resilience"],
    milestones: [
      { year: "Year 1–2", title: "Pre-Med Studies", description: "Dive into biology, chemistry, and physics. Volunteer at clinics and discover the human side of medicine.", icon: "🔬" },
      { year: "Year 3–4", title: "Medical School Prep", description: "Ace the MCAT, gain clinical exposure, and build a compelling application for medical school.", icon: "📖" },
      { year: "Year 5–8", title: "Medical School", description: "From lecture halls to hospital rotations — learn to diagnose, treat, and care for patients firsthand.", icon: "🏥" },
      { year: "Year 9–12", title: "Residency", description: "Specialize in your chosen field. Long hours, incredible learning, and the transformation into a real physician.", icon: "⚕️" },
      { year: "Year 12–14", title: "Fellowship", description: "Sub-specialize and become an expert. Conduct research and refine your clinical skills.", icon: "🎯" },
      { year: "Year 14+", title: "Attending Physician", description: "Practice independently, mentor residents, and make a lasting impact on patients' lives.", icon: "👑" }
    ]
  },
  {
    id: "designer",
    title: "UX/UI Designer",
    icon: "🎨",
    color: "#f59e0b",
    quote: "\"Design is not just what it looks like. Design is how it works.\" — Steve Jobs",
    skills: ["Visual Design", "User Research", "Prototyping", "Empathy", "Design Systems"],
    milestones: [
      { year: "Year 1", title: "Design Foundations", description: "Learn color theory, typography, and layout. Start with tools like Figma and build your first portfolio pieces.", icon: "🖌️" },
      { year: "Year 2", title: "UX Deep Dive", description: "Study user research, wireframing, and information architecture. Understand how people think and interact.", icon: "🧠" },
      { year: "Year 3", title: "First Design Role", description: "Join a team as a junior designer. Collaborate with developers, run usability tests, and ship real products.", icon: "🚀" },
      { year: "Year 4–5", title: "Product Designer", description: "Own the end-to-end design of features. Balance business goals, user needs, and technical constraints.", icon: "⚡" },
      { year: "Year 6–8", title: "Senior Designer", description: "Lead design initiatives, build design systems, and mentor junior designers on the team.", icon: "🏗️" },
      { year: "Year 8+", title: "Design Lead / Director", description: "Shape product vision, lead a design org, and influence how millions of people experience technology.", icon: "👑" }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "📊",
    color: "#10b981",
    quote: "\"Without data, you're just another person with an opinion.\" — W. Edwards Deming",
    skills: ["Statistics", "Python / R", "Machine Learning", "Data Visualization", "Storytelling with Data"],
    milestones: [
      { year: "Year 1–2", title: "Math & Stats Foundation", description: "Master statistics, linear algebra, and probability. Learn Python and start exploring datasets.", icon: "📐" },
      { year: "Year 3", title: "Machine Learning", description: "Build your first ML models. Understand regression, classification, and the art of feature engineering.", icon: "🤖" },
      { year: "Year 4", title: "First Data Role", description: "Join a company as a junior data analyst or scientist. Clean messy data and deliver actionable insights.", icon: "🚀" },
      { year: "Year 5–6", title: "Mid-Level Scientist", description: "Design experiments, build production ML pipelines, and present findings to stakeholders.", icon: "⚡" },
      { year: "Year 7–9", title: "Senior Data Scientist", description: "Lead complex projects, mentor others, and bridge the gap between data and business strategy.", icon: "🏗️" },
      { year: "Year 9+", title: "Principal / Head of Data", description: "Define the data strategy for the organization. Drive AI adoption and shape data-driven culture.", icon: "👑" }
    ]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    icon: "🚀",
    color: "#8b5cf6",
    quote: "\"The best way to predict the future is to create it.\" — Peter Drucker",
    skills: ["Leadership", "Risk Management", "Sales & Marketing", "Financial Literacy", "Adaptability"],
    milestones: [
      { year: "Year 1", title: "The Spark", description: "Identify a problem worth solving. Talk to potential customers, validate your idea, and start sketching solutions.", icon: "💡" },
      { year: "Year 2", title: "Build the MVP", description: "Create a minimum viable product. Launch fast, gather feedback, and iterate relentlessly.", icon: "🛠️" },
      { year: "Year 3", title: "First Customers", description: "Find product-market fit. Acquire your first paying customers and learn what truly matters to them.", icon: "🎯" },
      { year: "Year 4–5", title: "Scale Up", description: "Hire your first team, raise funding or bootstrap, and build systems that grow beyond just you.", icon: "📈" },
      { year: "Year 6–8", title: "Growth Phase", description: "Expand to new markets, refine your brand, and navigate the challenges of rapid growth.", icon: "⚡" },
      { year: "Year 8+", title: "Industry Leader", description: "Become a recognized name in your space. Mentor the next generation and create lasting impact.", icon: "👑" }
    ]
  },
  {
    id: "scientist",
    title: "Research Scientist",
    icon: "🔬",
    color: "#06b6d4",
    quote: "\"Somewhere, something incredible is waiting to be known.\" — Carl Sagan",
    skills: ["Scientific Method", "Lab Techniques", "Academic Writing", "Critical Analysis", "Patience"],
    milestones: [
      { year: "Year 1–3", title: "Undergraduate Research", description: "Study your core science discipline. Join a research lab and learn how discoveries are actually made.", icon: "📚" },
      { year: "Year 4", title: "Honors & Grad School Prep", description: "Complete a thesis project, publish your first paper, and apply to top graduate programs.", icon: "📝" },
      { year: "Year 5–9", title: "PhD Journey", description: "Push the boundaries of human knowledge. Design experiments, face setbacks, and defend your dissertation.", icon: "🧪" },
      { year: "Year 10–12", title: "Postdoctoral Research", description: "Deepen your expertise, build collaborations, and establish yourself in the scientific community.", icon: "🔭" },
      { year: "Year 12–15", title: "Assistant Professor / Researcher", description: "Lead your own lab, secure grants, and mentor the next generation of scientists.", icon: "🏗️" },
      { year: "Year 15+", title: "Tenured Professor / PI", description: "Shape your field's direction. Your discoveries influence textbooks and inspire future researchers.", icon: "👑" }
    ]
  }
];
