import {
  Bot,
  Calendar,
  FileText,
  Globe,
  Layout,
  MessageSquare,
  Monitor,
  Phone,
  Shield,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const teamsHeroData = {
  title1: "Microsoft 365",
  title2: "Teams",
  description1:
    "Microsoft Teams is a leading communication and collaboration platform that integrates effortlessly with Microsoft 365. Serving as a central hub for teamwork, it allows users to chat, hold video meetings, share files, and collaborate on projects in real-time.",
  bgImage: "/images/cloud/microsoft-solutions/teams/teams.png",
  actionButtons: [],
};

export const teamsOverview = {
  label: "Microsoft Teams",
  title: "What is Microsoft Teams?",
  description:
    "Microsoft Teams is a leading communication and collaboration platform that integrates effortlessly with Microsoft 365. Serving as a central hub for teamwork, it allows users to chat, hold video meetings, share files, and collaborate on projects in real-time. Since its launch in 2017, the platform has become indispensable for remote and hybrid work settings, providing a flexible solution for both small groups and large organisations.",
  description2:
    "A key feature of this platform is its ability to support instant messaging and video conferencing, making it easy for users to stay connected regardless of their location. It also enables seamless file sharing and collaboration, allowing multiple team members to work on documents simultaneously within the same interface. This platform's integration with Microsoft Office apps, such as Word, Excel, and PowerPoint, further boosts productivity by streamlining workflows.",
  description3:
    "Customisation options include creating channels for specific projects or departments, making it easier to organise discussions and resources. Additionally, the platform supports integration with a wide range of third-party apps, expanding its functionality to meet the diverse needs of various organisations. Overall, Microsoft Teams is a powerful tool that enhances communication, collaboration, and productivity across different industries and work environments.",
};

export const teamsFeatures = [
  {
    category: "Team Chat and Messaging",
    icon: MessageSquare,
    items: [
      {
        title: "Persistent Chat",
        desc: "Teams allows for continuous, threaded conversations within channels and direct messages, making it easy to keep track of discussions over time.",
      },
      {
        title: "Rich Text Formatting",
        desc: "Users can format messages with bold, italics, bullet points, and more, making it easier to communicate clearly.",
      },
      {
        title: "@Mentions",
        desc: "You can tag individuals or entire teams to draw their attention to specific messages or updates.",
      },
    ],
  },
  {
    category: "Video and Audio Meetings",
    icon: Video,
    items: [
      {
        title: "High-Quality Video Calls",
        desc: "Teams supports HD video conferencing, allowing users to conduct virtual meetings with clear video and audio.",
      },
      {
        title: "Meeting Scheduling",
        desc: "Integrated with Outlook, users can schedule meetings directly within Teams or Outlook, ensuring that all participants receive calendar invites.",
      },
      {
        title: "Meeting Recordings",
        desc: "Teams allows users to record meetings, which can then be automatically saved to OneDrive or SharePoint for later reference.",
      },
    ],
  },
  {
    category: "Screen Sharing",
    icon: Monitor,
    items: [
      {
        title: "Real-Time Sharing",
        desc: "During meetings, participants can share their screens to collaborate on documents, presentations, or applications in real time.",
      },
      {
        title: "Whiteboard",
        desc: "Teams includes a digital whiteboard feature, allowing participants to brainstorm and visualise ideas together during meetings.",
      },
    ],
  },
  {
    category: "File Sharing and Collaboration",
    icon: FileText,
    items: [
      {
        title: "Integrated with SharePoint",
        desc: "Files shared in Teams channels are stored in SharePoint, making them easily accessible and securely stored.",
      },
      {
        title: "Real-Time Co-Authoring",
        desc: "Users can collaborate on documents (Word, Excel, PowerPoint) directly within Teams, with changes being synchronised in real-time.",
      },
      {
        title: "File Tabs",
        desc: "Each channel can have dedicated file tabs for easy access to important documents and resources.",
      },
    ],
  },
  {
    category: "Customisable Teams and Channels",
    icon: Layout,
    items: [
      {
        title: "Team Structure",
        desc: "Users can create teams for different projects, departments, or groups, and organise conversations into channels based on topics or workstreams.",
      },
      {
        title: "Private Channels",
        desc: "Teams supports the creation of private channels, which are only accessible to selected members within a team, for more confidential discussions.",
      },
    ],
  },
  {
    category: "App Integration and Bots",
    icon: Bot,
    items: [
      {
        title: "App Store",
        desc: "Teams integrates with a wide range of third-party apps and services, such as Trello, Asana, GitHub, and more, allowing users to extend the platform's functionality.",
      },
      {
        title: "Custom Bots",
        desc: "Organisations can create custom bots that interact with users, provide information, or automate tasks directly within Teams.",
      },
    ],
  },
  {
    category: "Teams Calling",
    icon: Phone,
    items: [
      {
        title: "VoIP and PSTN Calling",
        desc: "Teams supports voice over IP (VoIP) calls and can integrate with the public switched telephone network (PSTN) for traditional phone services, allowing users to make and receive calls from anywhere.",
      },
      {
        title: "Call Transfer and Voicemail",
        desc: "Teams includes features like call transfer, call forwarding, and voicemail, making it a comprehensive solution for business communications.",
      },
    ],
  },
  {
    category: "Task Management",
    icon: Calendar,
    items: [
      {
        title: "Microsoft Planner Integration",
        desc: "Teams integrates with Microsoft Planner, allowing users to create, assign, and track tasks within the platform.",
      },
      {
        title: "To-Do Lists",
        desc: "Users can manage personal tasks and to-do lists directly within Teams, helping them stay organised and on track.",
      },
    ],
  },
  {
    category: "Meeting Rooms and Devices",
    icon: Globe,
    items: [
      {
        title: "Teams Rooms",
        desc: "Microsoft Teams supports specialised hardware for meeting rooms, such as cameras, microphones, and screens, optimising the meeting experience in physical spaces.",
      },
      {
        title: "Device Integration",
        desc: "Teams works seamlessly across various devices, including desktop computers, smartphones, and tablets, ensuring accessibility and consistency.",
      },
    ],
  },
  {
    category: "Security and Compliance",
    icon: Shield,
    items: [
      {
        title: "End-to-End Encryption",
        desc: "Teams offers end-to-end encryption for meetings and chats, ensuring that communications are secure.",
      },
      {
        title: "Data Loss Prevention (DLP)",
        desc: "Integrated with Microsoft 365's DLP policies, Teams helps prevent sensitive information from being shared inappropriately within chats or files.",
      },
      {
        title: "Compliance Recording",
        desc: "Teams supports compliance recording, ensuring that all communications are logged and stored in accordance with legal and regulatory requirements.",
      },
    ],
  },
  {
    category: "Live Events and Webinars",
    icon: Zap,
    items: [
      {
        title: "Large-Scale Webinars",
        desc: "Teams allows organisations to host live events and webinars for up to 10,000 participants (or more with advanced licensing), making it a powerful tool for large-scale presentations and public events.",
      },
      {
        title: "Interactive Features",
        desc: "Webinars in Teams can include Q&A, polls, and attendee engagement tools, enhancing the experience for both presenters and participants.",
      },
    ],
  },
  {
    category: "Breakout Rooms",
    icon: Users,
    items: [
      {
        title: "Small Group Discussions",
        desc: "Breakout rooms allow meeting organisers to split participants into smaller groups for focused discussions, which can then rejoin the main meeting.",
      },
    ],
  },
  {
    category: "Notifications and Alerts",
    icon: Zap,
    items: [
      {
        title: "Custom Notifications",
        desc: "Users can customise their notification settings to stay informed about important updates without being overwhelmed by alerts.",
      },
      {
        title: "Priority Notifications",
        desc: "Teams offers the ability to mark messages as urgent, ensuring that recipients are notified repeatedly until they respond.",
      },
    ],
  },
  {
    category: "Activity and Collaboration Insights",
    icon: Layout,
    items: [
      {
        title: "Analytics and Reporting",
        desc: "Teams provides insights into collaboration patterns, meeting effectiveness, and user activity, helping organisations optimise their communication strategies.",
      },
    ],
  },
];

export const teamsKeyFeatures = [
  {
    title: "Chat & Messaging",
    desc: "Persistent, threaded conversations with rich formatting, @mentions, and file sharing within channels and direct messages.",
    icon: MessageSquare,
  },
  {
    title: "Video & Audio Meetings",
    desc: "HD video conferencing, meeting scheduling with Outlook integration, and automatic meeting recordings saved to OneDrive.",
    icon: Video,
  },
  {
    title: "Screen Sharing",
    desc: "Real-time screen sharing and digital whiteboard for collaborative brainstorming during meetings.",
    icon: Monitor,
  },
  {
    title: "File Collaboration",
    desc: "SharePoint-integrated file storage with real-time co-authoring on Word, Excel, and PowerPoint documents.",
    icon: FileText,
  },
  {
    title: "Teams Calling",
    desc: "VoIP and PSTN calling with call transfer, forwarding, and voicemail for comprehensive business communications.",
    icon: Phone,
  },
  {
    title: "Security & Compliance",
    desc: "End-to-end encryption, Data Loss Prevention (DLP), and compliance recording for secure communications.",
    icon: Shield,
  },
];

export const teamsBenefits = [
  {
    title: "Centralised Team Communication",
    desc: "Teams provides a single hub for chat, video meetings, file sharing, and project collaboration — eliminating the need for multiple disjointed tools.",
  },
  {
    title: "Seamless Microsoft 365 Integration",
    desc: "Deep integration with Word, Excel, PowerPoint, Outlook, SharePoint, and OneDrive ensures a connected and streamlined workflow.",
  },
  {
    title: "Support for Remote & Hybrid Work",
    desc: "Enable your team to collaborate from anywhere with secure chat, video conferencing, and file access across all devices.",
  },
  {
    title: "Customisable Channels & Teams",
    desc: "Organise discussions by project, department, or topic with public and private channels, keeping conversations focused and manageable.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "End-to-end encryption, DLP policies, compliance recording, and advanced admin controls protect your organisation's communications.",
  },
  {
    title: "Extensible with Apps & Bots",
    desc: "Integrate third-party apps like Trello, Asana, and GitHub, or create custom bots to automate tasks and extend functionality.",
  },
];

export const teamsFAQs = [
  {
    question: "What is Microsoft Teams?",
    answer:
      "Microsoft Teams is a communication and collaboration platform within Microsoft 365 that provides chat, video meetings, file sharing, and app integration — serving as a central hub for teamwork.",
  },
  {
    question: "Is Microsoft Teams free?",
    answer:
      "Microsoft Teams offers a free tier with basic features. However, the full feature set — including advanced security, compliance, and admin controls — requires a Microsoft 365 Business or Enterprise subscription.",
  },
  {
    question: "Can I use Teams for phone calls?",
    answer:
      "Yes. Teams supports VoIP calling and can integrate with PSTN for traditional phone services. Users can make and receive calls, transfer calls, and use voicemail directly within Teams.",
  },
  {
    question: "How many people can join a Teams meeting?",
    answer:
      "Teams supports meetings with up to 300 participants for standard plans, and up to 10,000 participants for live events and webinars with advanced licensing.",
  },
  {
    question: "Is Teams secure for business use?",
    answer:
      "Yes. Teams includes end-to-end encryption, Data Loss Prevention (DLP), compliance recording, and integration with Microsoft 365 security policies to protect communications and data.",
  },
];

export const teamsUsefulLinks = [
  {
    title: "Microsoft Teams Overview",
    description:
      "Learn about Microsoft Teams — the central hub for teamwork that combines chat, video meetings, file sharing, and app integration.",
    href: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
  },
  {
    title: "Teams Tips & Tricks",
    description:
      "Microsoft's adoption guide with tips, tricks, and training resources to help you get the most out of Microsoft Teams.",
    href: "https://adoption.microsoft.com/en-us/microsoft-teams/",
  },
  {
    title: "Teams Pricing & Plans",
    description:
      "Compare Microsoft Teams plans and pricing — find the right option for your organisation's collaboration needs.",
    href: "https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-options",
  },
  {
    title: "Teams Documentation",
    description:
      "Technical documentation for Microsoft Teams — including admin guides, deployment, and best practices.",
    href: "https://learn.microsoft.com/en-us/microsoftteams/",
  },
];

