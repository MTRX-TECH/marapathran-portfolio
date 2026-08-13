export interface Project {
  id: string;
  number: string;
  title: string;
  status: string;
  statusType: "completed" | "building" | "vision";
  description: string;
  context?: string;
  concept?: string;
  technologies?: string[];
  features?: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "campus-os",
    number: "01",
    title: "CampusOS",
    status: "Active Development",
    statusType: "building",
    description: "CampusOS is a large-scale AI-powered college management ecosystem designed to bring academic management, student services, faculty operations, learning management, analytics, and intelligent assistance into a unified platform.",
    context: "To create a complete digital operating system for educational institutions rather than another basic college ERP.",
    concept: "The project is designed as a modern alternative to fragmented college management systems, with a focus on scalability, security, automation, and an AI-first user experience.",
    technologies: [
      "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", 
      "MongoDB", "Redis", "REST APIs", "WebSockets", "OAuth 2.0 / OpenID Connect", 
      "JWT", "Docker", "Kubernetes", "Object Storage", "Elasticsearch"
    ],
    features: [
      "Student Information System", "College ERP", "Learning Management System", 
      "Faculty Management", "Attendance Management", "Academic Management", 
      "Examination Management", "Assignment & Assessment Management", 
      "Student Performance Tracking", "Notifications", "Dashboards & Analytics", 
      "AI Assistant", "Administrative Management", "Role-based access control"
    ]
  },
  {
    id: "mtrx-flow",
    number: "02",
    title: "MTRX FLOW",
    status: "Active MVP Development",
    statusType: "building",
    description: "MTRX FLOW is a project and work management platform being developed under MTRX TECH. It is designed to provide the core capabilities expected from modern enterprise project-management platforms while creating a foundation for features beyond conventional tools.",
    context: "To build an enterprise-grade work operating platform under MTRX TECH that can eventually go beyond traditional project-management software.",
    concept: "The MVP is designed around a modular monolith architecture, allowing rapid development while maintaining clear domain boundaries and providing a path toward future service separation.",
    technologies: [
      "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Object storage", 
      "Search infrastructure", "REST APIs", "Docker"
    ],
    features: [
      "Organizations", "Workspaces", "Projects", "Scrum projects", "Kanban projects", 
      "Issues", "Epics", "Stories", "Tasks", "Bugs", "Sub-tasks", "Backlogs", "Sprints", 
      "Boards", "Custom workflows", "Roadmaps", "Releases", "Dashboards", "Reports", 
      "Global search", "Notifications", "Automation", "Time tracking", "Permissions"
    ]
  },
  {
    id: "mtrx-bus-tracker",
    number: "03",
    title: "MTRX Bus Tracker",
    status: "Developed MVP",
    statusType: "completed",
    description: "MTRX Bus Tracker is a lightweight live bus-tracking platform designed for colleges and transport operators.",
    context: "To provide an affordable alternative to hardware-based fleet tracking systems, particularly for colleges and small-to-medium transport operations.",
    concept: "Instead of requiring dedicated GPS tracking hardware inside every vehicle, the system uses the driver's smartphone as the GPS source.",
    technologies: [
      "HTML", "CSS", "JavaScript", "Google Apps Script", "Google Sheets", 
      "Mobile GPS", "QR codes", "Web-based map integration"
    ],
    features: [
      "Driver authentication", "QR-based trip activation", "Live GPS tracking", 
      "Bus management", "Driver management", "Route management", "Trip tracking", 
      "Student live tracking", "Administrative dashboard", "Multi-bus support", 
      "Transport monitoring"
    ]
  },
  {
    id: "talent-track",
    number: "04",
    title: "TalentTrack",
    status: "Developed",
    statusType: "completed",
    description: "TalentTrack is a student-focused platform designed to track milestones, achievements, activities, and development throughout a student's academic journey.",
    context: "To create a digital student-development platform that can help students understand and demonstrate their growth throughout college.",
    concept: "TalentTrack creates a centralized digital profile where students can organize and track their academic and extracurricular development.",
    features: [
      "Student profile", "Milestone tracking", "Achievement management", 
      "Activity tracking", "Academic development", "Progress visualization", 
      "Student dashboard", "Authentication", "Structured student records"
    ]
  },
  {
    id: "secure-online-transaction",
    number: "05",
    title: "Secure Online Transaction System",
    status: "Academic System Design",
    statusType: "completed",
    description: "This project focuses on designing a secure online transaction platform capable of handling payments for products and services while maintaining transaction history and administrative control.",
    context: "To design a secure and structured platform for online payments and transaction management.",
    concept: "The project included software-engineering documentation such as Software Requirements Specification, Use-case modelling, UML diagrams, System architecture, and Transaction workflows.",
    features: [
      "User registration", "Authentication", "Product/service payments", 
      "Transaction processing", "Transaction history", "Payment status tracking", 
      "Secure payment gateway integration", "Transaction monitoring", 
      "User account management", "Transaction dispute management"
    ]
  },
  {
    id: "bus-health-monitoring",
    number: "06",
    title: "Bus Health Monitoring System",
    status: "Prototype / Concept",
    statusType: "building",
    description: "An intelligent vehicle-monitoring concept designed to detect abnormal road conditions and vehicle vibrations while collecting operational data for predictive maintenance.",
    context: "To develop an intelligent transport-health platform capable of identifying vehicle and road-condition anomalies before they become major operational problems.",
    concept: "The system aims to move vehicle maintenance from a purely schedule-based approach toward a data-driven predictive model using sensor data and machine learning.",
    technologies: [
      "ESP32", "Vibration sensors", "Motion sensors", "GPS modules", "Machine Learning"
    ],
    features: [
      "Vibration monitoring", "Vehicle movement monitoring", "Speed monitoring", 
      "GPS tracking", "Road-condition detection", "Pothole detection", 
      "Rough-road detection", "Vehicle health monitoring", "Predictive maintenance"
    ]
  },

  {
    id: "adri",
    number: "08",
    title: "ADRI",
    status: "Future / Research Project",
    statusType: "vision",
    description: "Autonomous Disaster Response Intelligence (ADRI) is a planned MTRX TECH platform focused on intelligent disaster-response operations.",
    context: "To develop an autonomous technology platform capable of assisting disaster-response teams with rapid situational awareness, communication, monitoring, and coordination.",
    concept: "The concept combines autonomous systems, drones, sensors, AI-based decision-making, and temporary communication networks to support emergency-response operations.",
    technologies: [
      "Artificial Intelligence", "Autonomous drones", "ESP32-based systems", 
      "Sensors", "Temporary wireless communication", "Real-time data collection", 
      "Disaster mapping", "Edge computing"
    ]
  },
  {
    id: "mtrx-tech-ecosystem",
    number: "09",
    title: "MTRX TECH Ecosystem",
    status: "Long-Term Product Vision",
    statusType: "vision",
    description: "Beyond individual applications, MTRX TECH is being developed around the vision of creating a connected ecosystem of specialized technology platforms.",
    context: "Next-Generation Industry Software Platform",
    features: [
      "CampusOS — Education", "CityOS — Smart Cities", "HospitalOS — Healthcare", 
      "TransportOS — Transportation", "RetailOS — Retail", "EventOS — Events", 
      "SocietyOS — Communities", "FactoryOS — Manufacturing", "HRMS Pro", 
      "BuildOS", "AgricultureOS", "BusinessOS"
    ]
  }
];
