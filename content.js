// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  content.js  —  KSV University Discord Server Website
//  ✏️  EDIT THIS FILE ONLY when content changes.
//  🚫  Never touch index.html for content updates.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SITE = {

  // ── META ──────────────────────────────────────────────────
  university: "KSV University – Kadi",
  college: "Narsinhbhai Patel College of Computer Studies & Management",
  collegeShort: "NPCCSM",
  version: "2.2",
  lastUpdated: "25/04/2026",

  // ── CHANGELOG (for What's New popup) ────────────────────
  changelog: {
    currentVersion: "2.2.0",
    releaseDate: "25/04/2026",
    updates: [
      { type: "new",      text: "Result Bot launched — check marks via Exam No instantly" },
      { type: "new",      text: "Result Bot full documentation page added to website" },
      { type: "improved", text: "Bot Ecosystem updated with live Result Bot status" },
      { type: "improved", text: "Roadmap updated — Exam No Bot is next in queue" }
    ]
  },
  builtBy: "RenGoku (Vadalia Vraj Kaushikbhai)",
  github: "github.com/vadaliavraj0214-creator/Attendance-Bot",
  discordInvite: "https://discord.gg/srTDAf2Qzh",

  // ── SERVER OVERVIEW ───────────────────────────────────────
  overview: {
    serverName: "KSV University – Kadi",
    purpose: "A centralized communication platform for students, faculty, and staff of KSV University – Kadi. Improves communication, academic coordination, and resource sharing.",
    purposes: [
      "Sharing academic announcements",
      "Discussing study topics and coursework",
      "Providing exam and academic information",
      "Connecting students with faculty members",
      "Sharing study resources and important updates"
    ],
    whoCanJoin: "Open to everyone via invite link. Access to channels is controlled through roles — students can only access channels related to their department, academic year, and division.",
    expectedMembers: "500 – 700 (current) · Growing as the university community expands"
  },

  // ── RULES ─────────────────────────────────────────────────
  rules: [
    {
      num: "1",
      title: "Respect & Professional Behaviour",
      desc: "Everyone deserves respect — students, faculty, and staff. Harassment, toxic language, or discrimination is not allowed."
    },
    {
      num: "2",
      title: "No Spam / Self Promotion",
      desc: "Unnecessary messages, advertisements, or repeated content without permission are prohibited."
    },
    {
      num: "3",
      title: "Use Proper Channels",
      desc: "Post messages in the correct category. Announcement channels are read-only for students."
    },
    {
      num: "4",
      title: "Academic Environment Only",
      desc: "This server is for university communication and studies. NSFW — adult, sexual, or inappropriate content — is strictly forbidden."
    },
    {
      num: "5",
      title: "Follow Faculty & Admin Decisions",
      desc: "Moderators and faculty instructions must be respected at all times."
    },
    {
      num: "6",
      title: "Privacy & Safety",
      desc: "Do not share personal numbers, private screenshots, or sensitive information."
    }
  ],

  // ── ROLES ─────────────────────────────────────────────────
  roles: [
    {
      category: "Administrative",
      icon: "🛡️",
      list: [
        { name: "Owner", desc: "Full control of the server including permissions, roles, channels, and security." },
        { name: "Server Manager", desc: "Assists the owner in managing server structure, channels, and moderation." }
      ]
    },
    {
      category: "Academic Authority",
      icon: "🎓",
      list: [
        { name: "BCA – HOD", desc: "Head of Department responsible for department-level communication." },
        { name: "BCA – Faculty", desc: "Faculty members who provide announcements, academic information, and student guidance." }
      ]
    },
    {
      category: "Staff",
      icon: "🏢",
      list: [
        { name: "Lab Operator", desc: "Responsible for lab-related communication and support." },
        { name: "Clerk Office", desc: "Administrative communication and documentation support." },
        { name: "KSV Security", desc: "Security monitoring and server protection." }
      ]
    },
    {
      category: "Department",
      icon: "📚",
      list: [
        { name: "BCA", desc: "Bachelor of Computer Applications" },
        { name: "BBA", desc: "Bachelor of Business Administration" },
        { name: "B.Com", desc: "Bachelor of Commerce" }
      ]
    },
    {
      category: "Academic Year",
      icon: "📅",
      list: [
        { name: "FYBCA", desc: "First Year BCA" },
        { name: "SYBCA", desc: "Second Year BCA" },
        { name: "TYBCA", desc: "Third Year BCA" }
      ]
    },
    {
      category: "Division",
      icon: "🔷",
      list: [
        { name: "FYBCA – A / B / C / D", desc: "First Year divisions" },
        { name: "SYBCA – A / B / C / D", desc: "Second Year divisions" },
        { name: "TYBCA – A / B / C / D", desc: "Third Year divisions" }
      ]
    },
    {
      category: "Student",
      icon: "👤",
      list: [
        { name: "Boy / Male", desc: "Student gender identification role" },
        { name: "Girl / Female", desc: "Student gender identification role" },
        { name: "CR / LR", desc: "Class Representative or Lab Representative — manages attendance and info" }
      ]
    },
    {
      category: "System",
      icon: "⚙️",
      list: [
        { name: "Bots", desc: "Used for automation and moderation." },
        { name: "@everyone", desc: "Default role assigned to all members." }
      ]
    }
  ],

  // ── CHANNELS ──────────────────────────────────────────────
  channels: [
    {
      category: "Welcome & Information",
      icon: "👋",
      list: ["Welcome", "Permanent Link", "Server Guidelines", "Moderator Only"]
    },
    {
      category: "General",
      icon: "💬",
      list: ["Announcement", "General Chat", "General VC"]
    },
    {
      category: "BCA Department",
      icon: "🖥️",
      list: ["BCA General Chat", "BCA General Information", "BCA Exam Information", "BCA Ask Faculty", "BCA General VC"]
    },
    {
      category: "FYBCA",
      icon: "1️⃣",
      list: ["FYBCA General Chat", "FYBCA General Information", "FYBCA Exam Information", "FYBCA Ask Faculty", "FYBCA Study Resources", "FYBCA General VC"],
      note: "Each division (A/B/C/D) has: General Chat · General Information · Exam Information · Ask Faculty · Study Resources · General VC"
    },
    {
      category: "SYBCA",
      icon: "2️⃣",
      list: ["SYBCA General Chat", "SYBCA General Information", "SYBCA Exam Information", "SYBCA Ask Faculty", "SYBCA Study Resources", "SYBCA General VC"],
      note: "Divisions: SYBCA – A · B · C · D"
    },
    {
      category: "TYBCA",
      icon: "3️⃣",
      list: ["TYBCA General Chat", "TYBCA General Information", "TYBCA Exam Information", "TYBCA Ask Faculty", "TYBCA Study Resources", "TYBCA General VC"]
    },
    {
      category: "Faculty & Staff Zones",
      icon: "🏫",
      list: ["Faculty Announcement", "Faculty Chat", "Faculty Resources", "Faculty VC", "Cross Department Chat", "Clerk General Chat", "Clerk Documents", "Clerk General VC", "Lab General Chat", "Lab General VC"]
    }
  ],

  // ── SECURITY ──────────────────────────────────────────────
  security: [
    "Two-Factor Authentication (2FA) required for moderation actions",
    "Strict role hierarchy to prevent permission misuse",
    "Administrative permissions limited to trusted members",
    "Security monitoring through bots"
  ],

  // ── WORKFLOW ──────────────────────────────────────────────
  workflow: [
    "Student joins server",
    "Selects role",
    "Reads server guidelines",
    "Gains access to department channels",
    "Accesses class and division channels",
    "Participates in discussions and receives announcements"
  ],

  // ── BOTS ──────────────────────────────────────────────────
  serverBots: [
    { name: "KSV University Security Bot", purpose: "Server security and monitoring", type: "security" },
    { name: "Dyno", purpose: "Moderation and automation", type: "utility" },
    { name: "Que", purpose: "Queue and utility functions", type: "utility" }
  ],

  // ── BOT ECOSYSTEM (NPCCSM) ────────────────────────────────
  // Order: Live → Testing/In-Progress → Upcoming/Planning
  botEcosystem: [

    // ── LIVE ─────────────────────────────────────────────────
    {
      id: "attendance",
      name: "Attendance Bot",
      icon: "📋",
      status: "live",
      statusLabel: "Live & Deployed",
      tagline: "Automated attendance tracking via Google Sheets",
      desc: "Tracks lecture-wise attendance for 60+ students. CR/LR marks attendance via commands. Students check their own % via DM. Auto-calculates percentages and flags defaulters.",
      tech: ["Python", "discord.py", "gspread", "Railway.app"],
      commands: [
        { cmd: "!upload", desc: "Connect Google Sheet", access: "CR/LR" },
        { cmd: "!date", desc: "Set attendance date", access: "CR/LR" },
        { cmd: "!lecture", desc: "Set total lectures today", access: "CR/LR" },
        { cmd: "!set", desc: "Mark attendance for a student", access: "CR/LR" },
        { cmd: "!holiday", desc: "Mark a holiday", access: "CR/LR" },
        { cmd: "!reset", desc: "Fix a wrong entry", access: "CR/LR" },
        { cmd: "!report", desc: "Attendance % report (Students → DM)", access: "Everyone" },
        { cmd: "!low", desc: "List students below 70%", access: "CR/LR + Faculty" },
        { cmd: "!high", desc: "List students at 95%+", access: "CR/LR + Faculty" },
        { cmd: "!check", desc: "Who attended on a date", access: "CR/LR + Faculty" },
        { cmd: "!help", desc: "Show all commands", access: "Everyone" }
      ],
      sheetFormat: [
        { row: "Row 1", label: "Headers", desc: "Sr.No, Ro.No, ID No, Name, Dates — set manually by CR/LR" },
        { row: "Row 2", label: "Date Numbers", desc: "1, 2, 3... (bot fills automatically)" },
        { row: "Row 3", label: "Day + Lectures", desc: "Mon(3), Tue(2)... (bot fills automatically)" },
        { row: "Row 4+", label: "Attendance Data", desc: "Lectures attended per day — e.g. 3 = all attended, 0 = absent" }
      ]
    },
    {
      id: "notes",
      name: "Notes Bot",
      icon: "📚",
      status: "live",
      statusLabel: "Live & Deployed",
      tagline: "Subject-wise study notes delivered to your DM",
      desc: "Access subject-wise PDF notes directly in Discord. Role-gated — only accessible after joining the server and receiving your year role (FYBCA/SYBCA/TYBCA). Use !notes → select subject → PDF DM'd instantly.",
      tech: ["Python", "discord.py", "Google Drive", "Railway.app"],
      commands: [
        { cmd: "!notes", desc: "Get subject-wise PDF notes in DM", access: "Everyone (role-gated)" }
      ]
    },

    // ── IN PROGRESS ───────────────────────────────────────────
    {
      id: "result",
      name: "Result Bot",
      icon: "📊",
      status: "live",
      statusLabel: "Live & Deployed",
      tagline: "Check internal & external marks via Exam Number",
      desc: "Students enter their Exam No via a modal popup and get their marks sent ephemerally — only visible to them. Bot automatically reads from Google Drive folder structure. No manual linking needed. Supports Internal (1-5) and External tabs.",
      tech: ["Python", "discord.py", "gspread", "Slash Commands", "Railway.app"],
      commands: [
        { cmd: "/result", desc: "Select year/sem tab → enter Exam No → marks sent privately (ephemeral)", access: "Everyone" }
      ]
    },

    // ── UPCOMING ──────────────────────────────────────────────
    {
      id: "examno",
      name: "Exam No Bot",
      icon: "🪪",
      status: "next",
      statusLabel: "Up Next",
      tagline: "Get your Exam Number via Enrollment Number",
      desc: "Born from a real frustration — missed an exam because college gave no notification. Enter Enrollment No → Get Exam No + Subject codes instantly. No more clerk drama.",
      tech: ["Python", "discord.py", "gspread"],
      commands: []
    },
    {
      id: "timetable",
      name: "Exam Timetable Bot",
      icon: "📅",
      status: "planning",
      statusLabel: "Planning",
      tagline: "Query exam schedule anytime, no WhatsApp needed",
      desc: "Search exam schedule by date or subject. No more hunting for screenshots in WhatsApp groups.",
      tech: ["Python", "discord.py"],
      commands: []
    },
    {
      id: "reminder",
      name: "Reminder Bot",
      icon: "🔔",
      status: "planning",
      statusLabel: "Planning",
      tagline: "Never miss a deadline again",
      desc: "Schedule custom reminders for assignments, submissions, and exam dates — right inside Discord.",
      tech: ["Python", "discord.py"],
      commands: []
    }
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      category: "Discord Server",
      icon: "🎮",
      items: [
        { q: "How do I join the server?", a: "Use this link: discord.gg/srTDAf2Qzh. After joining, select your department, year, and division role from the role selection channel." },
        { q: "What roles will I get?", a: "Upon joining, you receive @everyone by default. Then select your department (BCA/BBA/B.Com), year (FY/SY/TY), division (A/B/C/D), and gender role. The CR/LR role is assigned by faculty." },
        { q: "Some channels are not visible to me — why?", a: "Channels are role-based. If you haven't selected your division role, those division channels won't appear. Visit the role selection channel and pick your roles." },
        { q: "I can't send messages in announcement channels — why?", a: "Announcement channels are read-only for students. Only faculty and CR/LR can post there. You can use general chat channels for discussions." },
        { q: "Who moderates the server?", a: "The Owner and Server Manager handle the overall server structure. Faculty moderate their respective department channels. For any issues, contact the Server Manager directly." },
        { q: "Someone broke a rule — where do I report it?", a: "DM the Server Manager or a Faculty member directly on Discord. Include evidence (screenshot) when reporting." }
      ]
    },
    {
      category: "Attendance Bot",
      icon: "📋",
      items: [
        { q: "How do I check my attendance?", a: "Use the !report command with your roll number — the bot will DM you a full attendance breakdown. Example: !report 05" },
        { q: "The !report command isn't working — what should I do?", a: "First check if the bot is online (green dot in the sidebar). If offline, inform your CR/LR. If online, make sure you're using the correct roll number." },
        { q: "My attendance looks incorrect — who do I contact?", a: "Inform your CR or LR. They have the !reset command to fix any entry. Take a screenshot and show it to them." },
        { q: "I'm below 70% attendance — what happens?", a: "CR/LR and Faculty can see a defaulters list via the !low command. University policy requires a minimum of 75% attendance. Improve your attendance as soon as possible." },
        { q: "What is the attendance sheet format?", a: "Row 1 contains headers (Sr.No, Ro.No, ID No, Name, Dates). Row 2 has date numbers, Row 3 has day + lectures (Mon(3), etc.), and Row 4 onwards holds attendance counts — 3 means 3 lectures attended, 0 means absent." },
        { q: "What command is used to mark a holiday?", a: "Only CR/LR can use the !holiday command. It marks that day as a holiday and does not affect the attendance count." }
      ]
    },
    {
      category: "Result Bot",
      icon: "📊",
      items: [
        { q: "How do I check my marks using the Result Bot?", a: "Use the /result command in your division channel. The bot shows tab buttons (Internal-1 to Internal-5, External) — select your tab, then enter your Exam Number in the modal popup. Your marks are shown only to you (ephemeral — no one else sees it)." },
        { q: "Where can I find my Exam Number?", a: "Use the /examno command once the Exam No Bot launches (next in development queue). For now, use /result and enter the Exam Number from your hall ticket or ask your CR/LR." },
        { q: "What is the difference between the Result Bot and Attendance Bot?", a: "The Attendance Bot uses prefix commands (!report, !low, etc.) and pulls live data from Google Sheets. The Result Bot uses slash commands (/result) and fetches data from the marks sheet." },
        { q: "My result isn't showing — the bot sent nothing?", a: "Make sure you're entering the correct Exam Number. The bot reads directly from the Google Drive folder — no manual setup is needed by CR/LR. If the issue persists, the sheet for that particular tab (Internal-1, External, etc.) may not have been uploaded yet by the faculty. Contact your CR/LR or faculty to confirm." }
      ]
    },
    {
      category: "Website & Technical",
      icon: "🌐",
      items: [
        { q: "Who built and maintains this website?", a: "The website was built by RenGoku (Vadalia Vraj Kaushikbhai) — a BCA student at NPCCSM. UI/UX design and architecture are handled by Niora Digital Solutions." },
        { q: "Can I install this website as an app on my phone?", a: "Yes! PWA support is available. In Chrome, use the 'Add to Home Screen' option. On iOS, open Safari → Share → Add to Home Screen. You'll get an app icon with offline support." },
        { q: "I found a bug or have a suggestion — where do I send it?", a: "Go to the Help & Feedback section and fill out the form. After OTP email verification, the form will be submitted. You can also contact us directly via WhatsApp or Instagram." },
        { q: "Where can I find the bot source code?", a: "github.com/vadaliavraj0214-creator/Attendance-Bot — the Attendance Bot is open source. Other bots will gradually be added to GitHub as well." },
        { q: "How often is the site updated?", a: "Whenever a new bot is launched, a feature is added, or content changes. The version and date are visible in the hero section (v2.2 · 25/04/2026). Result Bot just went live!" }
      ]
    },
    {
      category: "General",
      icon: "💡",
      items: [
        { q: "We already have a WhatsApp group — why Discord?", a: "Discord has role-based channels so you only see relevant information. Bots automate tasks like attendance and results. Search actually works. Files stay organised. WhatsApp mixes everything into one chaotic feed." },
        { q: "Can I talk to faculty directly?", a: "Yes — every department has an 'Ask Faculty' channel where faculty answer questions. You can also DM them directly if they're on the server." },
        { q: "When will new features arrive?", a: "Check the Roadmap — Exam No Bot is next in queue, followed by Exam Timetable Bot and Reminder Bot. Hit the What's New button for the latest updates." }
      ]
    }
  ]

};
