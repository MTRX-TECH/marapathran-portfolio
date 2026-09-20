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
  image: string;
  architecture?: string;
  repoStatus?: string;
  directoryStructure?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "campus-os",
    number: "01",
    title: "CampusOS",
    status: "Active Development",
    statusType: "building",
    image: "/images/projects/campus-os.png",
    repoStatus: "Private Enterprise Repository — MTRX TECH",
    architecture: "Next.js App Router, Prisma ORM, PostgreSQL, Redis, and embedded AI Copilot service.",
    description: "CampusOS is an all-in-one college operating system I'm building under MTRX TECH. Instead of making students and staff juggle five different clunky portals, it unites academics, attendance, examinations, analytics, and an AI assistant in one clean, responsive workspace.",
    context: "To replace outdated, fragmented college ERPs with a modern digital operating system that actually feels great to use.",
    concept: "Designed as a multi-tenant platform where colleges get their own fast, secure portal with automated workflows, real-time analytics, and role-based permissions.",
    technologies: [
      "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "Node.js", "PostgreSQL", 
      "Redis", "WebSockets", "AI Copilot Engine", "JWT / NextAuth", "Docker", "SaaS Multi-Tenancy"
    ],
    features: [
      "Student Information System (SIS)", "Unified College ERP", "Learning Management System (LMS)", 
      "Faculty & Staff Administration", "Biometric & Digital Attendance", "Academic Curriculum Management", 
      "Examination & Hall Ticket Engine", "Assignment & Grading Pipelines", 
      "Student Performance Analytics", "Campus Broadcast Notifications", "Multi-Tenant SaaS Telemetry", 
      "AI College Assistant Copilot", "Audit Logging & Security Controls", "Role-Based Access Control (RBAC)"
    ],
    highlights: [
      "Multi-tenant architecture allowing colleges to onboard with isolated database scopes and custom subdomains.",
      "Live telemetry dashboards tracking enrollment, attendance percentages, and examination schedules in real time.",
      "Embedded AI assistant module designed to answer student queries and automate administrative workflows.",
      "Granular role-based permissions across Super Admins, College Heads, Faculty, Students, and Parents."
    ],
    directoryStructure: `MTRX CampusOS/
├── prisma/
│   └── schema.prisma          # PostgreSQL relational multi-tenant models
├── src/
│   ├── app/
│   │   ├── admin/             # SaaS Super Admin governance console
│   │   │   ├── academics/     # Department and syllabus schemas
│   │   │   ├── attendance/    # Telemetry and attendance monitoring
│   │   │   ├── examinations/  # Exam scheduling and grading engines
│   │   │   ├── institutions/  # Multi-tenant institution onboarding
│   │   │   └── workflows/     # Institutional approvals
│   │   ├── api/               # Next.js Serverless Route Handlers
│   │   └── dashboard/         # Campus operations workspace
│   ├── components/            # Reusable UI & Modal components
│   └── lib/                   # Database client & auth utilities
└── tailwind.config.js`
  },
  {
    id: "mtrx-flow",
    number: "02",
    title: "MTRX FLOW",
    status: "Active MVP Development",
    statusType: "building",
    image: "/images/projects/mtrx-flow.png",
    repoStatus: "Core Intellectual Property — MTRX TECH",
    architecture: "Modular Monolith built for sub-50ms query latency, real-time WebSocket state synchronisation, and customizable workflow state machines.",
    description: "MTRX FLOW is a fast, developer-first project and work management tool I'm building to replace Jira. It strips away the lag and clutter, giving teams responsive Kanban and Scrum boards, clear sprint roadmaps, and custom workflows that just work.",
    context: "To build a work management platform under MTRX TECH that gives software teams the power of enterprise trackers without the complexity and sluggishness.",
    concept: "Built around a modular architecture with real-time WebSocket state updates, so moving cards, updating sprint points, and tracking velocity happens with zero delay.",
    technologies: [
      "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", 
      "Socket.IO", "Docker", "Tailwind CSS", "Zustand", "REST APIs"
    ],
    features: [
      "Multi-Organization Workspaces", "Interactive Scrum & Kanban Boards", "Sprint Planning & Backlog Grooming", 
      "Hierarchical Issues (Epics, Stories, Bugs, Sub-tasks)", "Burndown & Velocity Analytics", "Custom Workflow State Machines", 
      "Milestone & Release Trackers", "Global Instant Search", "Granular RBAC Permissions", 
      "Automated Sprint Roll-forward", "Developer-Centric Shortcuts", "Real-Time Collaboration"
    ],
    highlights: [
      "Drag-and-drop Kanban and Scrum boards with real-time card state synchronization across team members.",
      "Sprint planning tools with automated burndown charts, velocity tracking, and backlog prioritization.",
      "Strict custom workflow state machines to keep issues moving predictably from backlog to production.",
      "Hierarchy mapping connecting broad strategic Epics down to granular user stories and bug fixes."
    ],
    directoryStructure: `MTRX Flow/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Issue, Sprint, Workspace controllers
│   │   ├── models/            # Workflows, Epics, Tasks, Boards
│   │   ├── services/          # Velocity algorithms & state transitions
│   │   └── sockets/           # Real-time card drag & drop synchronizer
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── board/         # Drag-and-drop Kanban & Scrum grids
│   │   │   ├── backlog/       # Issue hierarchy prioritization list
│   │   │   └── analytics/     # Burndown & Velocity Chart modules
│   │   └── stores/            # Zustand local state management
└── docker-compose.yml`
  },
  {
    id: "mtrx-bus-tracker",
    number: "03",
    title: "MTRX Bus Tracker",
    status: "Developed MVP",
    statusType: "completed",
    image: "/images/projects/bus-tracker.png",
    repoStatus: "Proprietary Platform — MTRX TECH",
    architecture: "Event-driven WebSocket architecture with MongoDB GeoJSON 2dsphere spatial indexing, Driver HTML5 Geolocation PWA, and Screen Wake Lock API.",
    description: "MTRX Bus Tracker is a live transit tracking system built specifically for college campuses and bus operators. Instead of forcing institutions to buy and maintain expensive dedicated GPS boxes for every bus, drivers simply run a lightweight web app on their phone that streams live location data to a campus map with sub-second accuracy.",
    context: "To give colleges and schools an affordable, hardware-free way to track their transit fleets and keep students informed.",
    concept: "The driver's smartphone acts as the GPS transmitter using HTML5 Geolocation and the Screen Wake Lock API, transmitting coordinates via WebSockets to calculate live ETAs and map positions.",
    technologies: [
      "Node.js", "Express", "TypeScript", "MongoDB (2dsphere)", "Socket.IO", 
      "HTML5 Geolocation API", "Leaflet / OSM", "Screen Wake Lock API", "PWA", "Tailwind CSS"
    ],
    features: [
      "Driver Authentication & Shift Logbook", "QR Code Trip Activation", "Real-Time GPS Telemetry Streaming", 
      "Sub-Second Live Map Visualization", "Dynamic Route & Geofence Verification", "Automated ETA & Speed Calculation", 
      "Student & Parent Zero-Login Public Portal", "Emergency SOS Broadcasting", "Multi-Bus Fleet Dashboard", 
      "Offline Telemetry Queue Buffer (IndexedDB)", "Schedule Adherence Reporting", "Admin Fleet Governance"
    ],
    highlights: [
      "Zero hardware costs: transforms any basic smartphone into a high-accuracy vehicle tracking beacon.",
      "Integrated Screen Wake Lock API to prevent the driver's phone from sleeping during active trips.",
      "Offline IndexedDB coordinate buffer that stores GPS pings during cellular dropouts and resyncs automatically.",
      "Public, login-free student and parent map showing live bus routes, speed, and real-time arrival estimates."
    ],
    directoryStructure: `bus tracker/
├── backend/
│   └── src/
│       ├── controllers/       # bus.controller.ts, trip.controller.ts, route.controller.ts
│       ├── models/            # Bus.ts, Trip.ts, Route.ts, GPSLog.ts (2dsphere)
│       ├── services/          # etaService.ts, watchdogService.ts
│       ├── socket/            # Real-time GPS coordinate broadcaster
│       └── server.ts          # Express HTTP & Socket.IO server
├── shared/                    # Shared TypeScript interfaces, types & schemas
└── APP_PROCESS.md             # Complete architectural process specifications`
  },
  {
    id: "talent-track",
    number: "04",
    title: "TalentTrack",
    status: "Developed System",
    statusType: "completed",
    image: "/images/projects/talent-track.png",
    repoStatus: "Production-Grade System — MTRX TECH",
    architecture: "Multi-tenant Student Lifecycle & Placement Intelligence Platform built with React, Vite, Express, MongoDB, and custom Placement Readiness Score (PRS) algorithms.",
    description: "TalentTrack is a student achievement and campus placement platform. It helps colleges move beyond static resumes by tracking verified projects, hackathons, and certifications, calculating an automated Placement Readiness Score (PRS) and matching students directly with eligible hiring drives.",
    context: "To give students a verified digital portfolio of their growth and give placement cells clear data on student career readiness.",
    concept: "Combines a student achievement log with automated skill scoring, faculty mentor verification, and campus drive eligibility filtering.",
    technologies: [
      "React 19", "Vite", "Tailwind CSS", "Chart.js", "Lucide React", 
      "Node.js", "Express", "MongoDB", "JWT Authentication", "REST APIs"
    ],
    features: [
      "7-Tier Role Portal (Super Admin, Admin, HOD, Mentor, Faculty, Student, Parent)", 
      "Automated Placement Readiness Score (PRS)", "Interactive Circular Ring Competency Visualizer", 
      "Verified Milestone & Achievement Records", "Campus Recruitment Drive Matching Engine", 
      "Student Academic CGPA & Honors Tracking", "Direct Interview Criteria Verification", 
      "Faculty Mentor Activity Feed", "Resume & Profile Export", "Comprehensive Campus Diagnostics"
    ],
    highlights: [
      "Dynamic Placement Readiness Score (PRS) measuring DSA, full-stack development, and project milestones.",
      "Dedicated role portals tailored for students, faculty mentors, department heads, and campus administrators.",
      "Automated recruitment drive matcher that shows CTC, requirements, and eligibility based on student scores.",
      "Clean dark-mode interface with interactive competency meters and verified achievement timelines."
    ],
    directoryStructure: `talent track/
├── client/
│   ├── src/
│   │   ├── components/        # Sidebar.jsx, Topbar.jsx, DiagnosticsModal.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx      # 7-Tier role selection portal
│   │   │   ├── StudentDashboard.jsx # PRS gauges, milestones, drives
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── FacultyDashboard.jsx
│   │   │   └── HODDashboard.jsx
│   │   └── services/          # api.js API client & token storage
│   └── vite.config.js
└── server/
    ├── models/                # User, Student, Milestone, PlacementDrive
    ├── routes/                # Auth, Milestones, Placements, Analytics
    └── server.js`
  },
  {
    id: "canteen-pay",
    number: "05",
    title: "CanteenPay",
    status: "Developed System",
    statusType: "completed",
    image: "/images/projects/canteen-pay.png",
    repoStatus: "Production-Grade System — MTRX TECH",
    architecture: "Offline-First LAN Client-Server Architecture powered by Node.js, Express, SQLite (better-sqlite3), Socket.IO, Barcode Scanner, and ESC/POS Thermal Printing.",
    description: "CanteenPay is an offline-first college canteen billing and digital wallet system. Built to eliminate long queues and cash hassles, it lets cashiers scan student ID barcodes, instantly debit prepaid wallets, print thermal receipts, and view daily sales analytics — all running locally over LAN without needing an active internet connection.",
    context: "To replace slow cash counting, lost paper receipts, and unrecorded credit dues with an autonomous, high-speed campus payment setup.",
    concept: "Designed offline-first with SQLite and local WebSockets, guaranteeing that billing and receipts keep working at top speed even if the campus internet goes down.",
    technologies: [
      "Node.js", "Express", "SQLite (better-sqlite3)", "Socket.IO", "Chart.js", 
      "Hardware Barcode Scanner (HID)", "ESC/POS Thermal Printer", "HTML5 / CSS3 / ESM", "LAN Server"
    ],
    features: [
      "Student Digital Wallets & Instant Debits", "High-Speed POS Counter Billing", 
      "Hardware Barcode ID Card Scanning", "ESC/POS Thermal Receipt Printing (80mm)", 
      "Real-Time Socket.IO Synchronisation", "Daily Revenue & Transaction Dashboards", 
      "Menu & Category Stock Management", "Top-Selling Item Velocity Analytics", 
      "Student Defaulter & Credit Tracking", "Zero-Internet Offline LAN Resilience", 
      "Automated Database Backups", "Role-Based Staff & Cashier Accounts"
    ],
    highlights: [
      "100% offline functionality ensures zero downtime during campus internet outages.",
      "Instant barcode scanner integration loads student wallet balances and finishes checkout in seconds.",
      "ESC/POS thermal printer support configured for standard 80mm receipts.",
      "Live manager dashboard tracking daily revenue, counter wallet recharges, and top-selling food items."
    ],
    directoryStructure: `canteen payment/
├── backend/
│   ├── config/env.js          # Port, JWT secret, database paths, watermark
│   ├── database/
│   │   ├── connection.js      # SQLite connection & WAL mode
│   │   └── init.js            # Table schema (students, menu, wallet, bills)
│   ├── routes/                # Auth, billing, students, reports, menu
│   ├── services/              # backup.service.js, printer.service.js
│   └── socket/                # Real-time LAN broadcast handler
├── frontend/
│   ├── css/styles.css         # Modern dark/light responsive CSS design system
│   ├── js/pages/
│   │   ├── billing.js         # POS scanner, cart, and discount controller
│   │   ├── dashboard.js       # Live revenue charts, transaction tables
│   │   └── students.js        # Wallet recharge and balance administration
│   └── index.html             # Single-page shell with login & app views
└── server.js                  # Entry server with Helmet, CORS, Compression`
  },
  {
    id: "bus-health-monitoring",
    number: "06",
    title: "Bus Health Monitoring System",
    status: "Prototype / Concept",
    statusType: "building",
    image: "/images/projects/bus-health.png",
    repoStatus: "R&D Prototype — MTRX TECH",
    architecture: "Edge IoT telemetry pipeline integrating ESP32 microcontrollers, MPU-6050 6-DOF IMUs, Fast Fourier Transform (FFT) vibration analysis, and anomaly mapping.",
    description: "An IoT vehicle diagnostic prototype that uses ESP32 microcontrollers and motion sensors to monitor vehicle health and detect road hazards. It analyzes real-time vibration frequencies to spot mechanical issues and geotags potholes onto a live map for predictive maintenance.",
    context: "To catch vehicle mechanical stress and roadway damage early, before they cause expensive breakdowns or accidents.",
    concept: "Sensors mounted on the vehicle sample 3-axis acceleration and gyroscope data at 100Hz, using Fast Fourier Transform (FFT) to distinguish normal road noise from mechanical faults.",
    technologies: [
      "ESP32 Microcontroller", "MPU-6050 Accelerometer/Gyro", "FFT Vibration Algorithms", 
      "GPS Modules", "4G LTE Telemetry", "Edge Computing", "Time-Series Database", "Python / ML"
    ],
    features: [
      "3-Axis High-Frequency Vibration Analysis (FFT)", "Axle Mechanical Stress Detection", 
      "Real-Time Gyroscope Roll/Pitch/Yaw Waveforms", "Automated Pothole & Rough Road Detection", 
      "GPS Road Anomaly Coordinate Mapping", "Comprehensive Vehicle Health Index (VHI)", 
      "Engine Temperature & Battery Telemetry", "Automated Maintenance Predictive Alerts", 
      "Historical Wear & Tear Diagnostics", "Fleet Maintenance Scheduling Engine"
    ],
    highlights: [
      "100Hz high-frequency sampling captures axle and transmission vibrations in real time.",
      "Fast Fourier Transform (FFT) analysis detects frequency spikes characteristic of mechanical wear.",
      "Automatically geotags severe potholes and rough road patches with GPS coordinates.",
      "Unified Vehicle Health Index gives fleet managers a clear 0-100% operational condition score."
    ],
    directoryStructure: `bus-health-monitoring/
├── firmware/
│   └── esp32_imu_firmware.ino # ESP32 100Hz I2C IMU sampling & LTE transmission
├── analysis/
│   ├── fft_processor.py       # Fast Fourier Transform vibration spectrum calculator
│   └── pothole_detector.py    # Acceleration threshold and peak classification
├── server/
│   ├── models/                # Vehicle, TelemetryLog, RoadAnomaly, HealthIndex
│   └── routes/                # InfluxDB / Time-series telemetry ingest endpoint
└── dashboard/
    └── src/                   # Real-time vibration waves, gauges & anomaly map`
  },
  {
    id: "adri",
    number: "08",
    title: "ADRI",
    status: "Future / Research Project",
    statusType: "vision",
    image: "/images/projects/adri.png",
    repoStatus: "Vision & Advanced Research — MTRX TECH",
    architecture: "Autonomous drone squadron coordination combined with ad-hoc wireless mesh communication networks, infrared computer vision, and tactical GIS command dashboards.",
    description: "Autonomous Disaster Response Intelligence (ADRI) is an emergency response concept I designed to help rescue teams during natural disasters. It pairs autonomous drone scouting with thermal imaging and ad-hoc wireless mesh networks to locate survivors and map hazard zones when normal communication lines are down.",
    context: "To give first responders immediate situational awareness and reliable communications in areas where roads, power, and cell towers are destroyed.",
    concept: "Uses autonomous drone patrols with infrared cameras to spot human heat signatures, paired with self-healing LoRa mesh radios to keep rescue teams connected without cell towers.",
    technologies: [
      "Autonomous Drone Swarms", "Computer Vision / Thermal Infrared", "ESP32 Wireless Mesh (LoRa)", 
      "Edge AI Localization", "Tactical GIS Mapping", "WebSockets / WebRTC", "Python", "Rust"
    ],
    features: [
      "Autonomous Drone Squadron Deployment Grid", "3D Terrain Infrared Thermal Heatmap", 
      "Emergency Ad-Hoc Wireless Mesh Node Status", "AI Survivor Localization Radar", 
      "Environmental Hazard Telemetry (Radiation, Air Quality, Flood)", "Tactical Mission Waypoint Routing", 
      "Rapid Offline Network Formation", "Search-and-Rescue Prioritization Queue", 
      "Satellite Uplink Synchronization", "First-Responder Mobile Field Relays"
    ],
    highlights: [
      "Autonomous drone fleet deployment coordinates aerial scouting across large disaster areas.",
      "Infrared thermal heatmaps differentiate human survivors from floodwaters and structural debris.",
      "Ad-hoc wireless mesh radios keep rescue workers connected even with zero cellular coverage.",
      "Tactical command dashboard brings together survivor coordinates, drone battery levels, and hazard telemetry."
    ],
    directoryStructure: `adri-system/
├── edge_drone/
│   ├── flight_controller/     # Autonomous waypoint navigation & squadron logic
│   └── vision_model/          # Thermal infrared human signature detection model
├── mesh_network/
│   └── lora_mesh_protocol.cpp # Self-healing ad-hoc node routing for field radios
├── command_center/
│   ├── src/
│   │   ├── components/        # RadarView, ThermalHeatmap, MeshTopologyMap
│   │   └── services/          # Drone telemetry and survivor alert pipeline
└── docs/                      # Tactical mission protocols & defense architecture`
  },
  {
    id: "mtrx-tech-ecosystem",
    number: "09",
    title: "MTRX TECH Ecosystem",
    status: "Long-Term Product Vision",
    statusType: "vision",
    image: "/images/projects/mtrx-ecosystem.png",
    repoStatus: "Master Vision & Architecture — MTRX TECH",
    architecture: "Interconnected multi-platform system architecture governed by the centralized MTRX Core Kernel, sharing distributed authentication, event buses, and domain-specific operating suites.",
    description: "My long-term roadmap for MTRX TECH. Instead of building isolated, one-off apps, the vision is to create a family of focused, modern operating platforms for essential industries — education (CampusOS), transit (TransportOS), healthcare (HospitalOS), and smart facilities — all sharing a secure, unified core.",
    context: "To build clean, reliable enterprise software for foundational industries that are still stuck using outdated, clunky legacy systems.",
    concept: "A central MTRX Kernel provides shared authentication, real-time event buses, and data storage, allowing specialized platforms to communicate effortlessly.",
    technologies: [
      "Distributed Cloud Architecture", "Event-Driven Microservices", "Centralized Identity & Auth (OAuth2 / OIDC)", 
      "Edge Computing", "GraphQL Federation", "Redis Enterprise Bus", "PostgreSQL Clusters", "Kubernetes"
    ],
    features: [
      "CampusOS — Intelligent Education & University Management", 
      "CityOS — Smart Urban Infrastructure & Governance", 
      "HospitalOS — Healthcare Operations & Clinical Systems", 
      "TransportOS — Connected Transit & Fleet Logistics", 
      "RetailOS — Next-Gen Point-of-Sale & Omnichannel Commerce", 
      "FactoryOS — Smart Manufacturing & Industry 4.0", 
      "BuildOS — Construction & Building Information Modeling (BIM)", 
      "AgricultureOS — Precision AgTech & Smart Farming Telemetry", 
      "SocietyOS — Community & Residential Management", 
      "EventOS — Dynamic Exhibition & Event Ecosystems"
    ],
    highlights: [
      "Core MTRX Kernel provides centralized authentication, event pub-sub, and security governance.",
      "Industry-specific platforms share data smoothly without brittle third-party integrations.",
      "Single sign-on and unified permissions across every connected operational tool.",
      "Built from the ground up for high throughput, zero unnecessary bloat, and enterprise reliability."
    ],
    directoryStructure: `mtrx-tech-ecosystem/
├── core-kernel/
│   ├── identity-auth/         # Universal OAuth2, OIDC & RBAC authority
│   ├── event-bus/             # High-throughput Kafka / Redis pub-sub highways
│   └── telemetry-lake/        # Cross-platform telemetry and analytics store
├── platforms/
│   ├── campus-os/             # Higher education and campus administration
│   ├── transport-os/          # Real-time transit and fleet intelligence
│   ├── city-os/               # Urban municipal telemetry & smart grid
│   ├── hospital-os/           # Clinical workflows & patient EHR pipelines
│   └── factory-os/            # Industrial IoT & automated assembly telemetry
└── governance/                # Enterprise compliance, audit, and security policies`
  }
];
