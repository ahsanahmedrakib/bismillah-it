import {
  AlertTriangle,
  CheckCircle,
  Globe,
  Lock,
  Monitor,
  Shield,
  Smartphone,
  UserCheck,
  Users,
} from "lucide-react";

export const conditionalAccessHeroData = {
  title1: "Microsoft 365",
  title2: "Conditional Access",
  description1:
    "Conditional Access in Microsoft 365 is a critical security feature that enables organisations to control access to resources based on specific conditions. It evaluates various factors such as user identity, location, device compliance, application being accessed, and risk level before granting access.",
  bgImage:
    "/images/cloud/microsoft-solutions/conditional-access/conditional-access.png",
  actionButtons: [],
};

export const conditionalAccessOverview = {
  label: "Microsoft 365 Conditional Access",
  title: "What is Conditional Access?",
  description:
    "Conditional Access in Microsoft 365 is a critical security feature that enables organisations to control access to resources based on specific conditions. It evaluates various factors such as user identity, location, device compliance, application being accessed, and risk level before granting access.",
  description2:
    "By applying Conditional Access policies, organisations can enforce multi-factor authentication (MFA), block access from untrusted locations, restrict access to compliant devices, and tailor access requirements to different user roles. This helps protect against unauthorised access, reduces the risk of data breaches, and ensures that only the right users have the right level of access to corporate resources.",
  description3:
    "Conditional Access is part of Microsoft Entra ID (formerly Azure AD) and requires an Azure AD Premium license, which is also bundled in the Enterprise Mobility and Security Suite.",
};

export const conditionalAccessKeyFeatures = [
  {
    title: "Identity-Based Controls",
    desc: "Control access based on user identity, group membership, and role. Include or exclude specific users from policies as needed.",
    icon: Users,
  },
  {
    title: "Location-Based Restrictions",
    desc: "Block or allow access based on IP addresses and geographic locations — restrict Office 365 to your company offices.",
    icon: Globe,
  },
  {
    title: "Device Compliance",
    desc: "Require devices to be Intune-compliant or Hybrid Azure AD joined before granting access to corporate resources.",
    icon: Monitor,
  },
  {
    title: "Application-Level Control",
    desc: "Apply policies to specific cloud apps — control access to Exchange Online, SharePoint, Teams, or all Microsoft 365 apps.",
    icon: Lock,
  },
  {
    title: "Client App Restrictions",
    desc: "Control which applications users can connect from — allow browsers but disable mobile and desktop Outlook apps.",
    icon: Smartphone,
  },
  {
    title: "Sign-In Risk Detection",
    desc: "Block sign-ins if Azure detects unusual behaviour — such as simultaneous logins from different countries within minutes.",
    icon: AlertTriangle,
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Enforce MFA via phone call, text message, or mobile app — adding an extra layer of security to the login process.",
    icon: Shield,
  },
  {
    title: "Device Filtering",
    desc: "Filter devices by ownership (personal vs company) and compliance status to apply granular access controls.",
    icon: CheckCircle,
  },
  {
    title: "Session Management",
    desc: "Control persistent browser sessions and sign-in frequency — ensure sessions are logged out on non-managed PCs.",
    icon: UserCheck,
  },
];

export const conditionalAccessProblem = {
  title: "Why is Conditional Access Needed?",
  description:
    "Microsoft 365 offers fantastic benefits over traditional on-premise infrastructure — no costly infrastructure required, 100 GB mailbox, online meetings, document collaboration, 99.9% uptime, flexibility, and anytime/anywhere access to emails, documents, contacts, and calendars on any device.",
  concerns: [
    "Office 365 can be accessed from anywhere — not just in the office, anywhere there is internet access.",
    "Office 365 can be accessed from any device — not just corporate owned devices, any device (Personal Windows/Mac laptop, tablet, phone, any device with a browser or Outlook client installed).",
    "Office 365 can be accessed by just a username and password.",
  ],
  dataLossIssues: [
    "Emails can be cached offline and copied elsewhere on a home PC with Outlook.",
    "Mail can be downloaded to mobile devices and copied to other locations.",
    "OneDrive for Business can be synced offline to a home PC and all data copied elsewhere/shared.",
    "SharePoint Online can be synced offline to a home PC and all data copied elsewhere/shared.",
    "Multi-factor is not turned on by default for Office 365 — To login only a username and password is required.",
  ],
  solution:
    "Microsoft introduced Conditional Access to resolve this problem. Conditional Access allows administrators to control what Office 365 apps users can gain access to based on if they pass/fail certain conditions.",
};

export const conditionalAccessPolicyConditions = [
  {
    title: "Users/Groups",
    desc: "What users do you want to control — Users can be included/excluded from the policy if required. You will always get the person who is too important for this policy and wants to access everything from their personal iPad. It also allows you to test policies before rolling out to the wider business avoiding locking everyone out!",
  },
  {
    title: "Cloud Apps",
    desc: "What apps do you want to control? Conditional Access does not need to apply to all of Office 365, you can be more granular and just control access to specific apps — E.g. Exchange Online.",
  },
  {
    title: "Client App",
    desc: "Control what app/software the user is connecting from to the data — E.g. allow browsers but disable mobile and desktop Outlook apps.",
  },
  {
    title: "Device Platform",
    desc: "Control what devices users can connect from — E.g. allow Windows and iOS but block Android phones.",
  },
  {
    title: "Location",
    desc: "Control what IPs can connect to Office 365 — E.g. could limit this to the office external IP.",
  },
  {
    title: "Sign-In Risk",
    desc: "Control sign-ins if Office 365/Azure thinks the sign-in is not coming from the genuine user — E.g. if someone signs in from London then New York 30 mins later.",
  },
];

export const conditionalAccessGrantControls = [
  {
    title: "Require Multi-Factor Authentication",
    desc: "User is allowed in but will need to complete additional security to log in, e.g. phone call, text message, or mobile app.",
  },
  {
    title: "Require Device to be Marked as Compliant",
    desc: "Device must be Intune compliant — the device must match the Intune compliance policies to be able to connect.",
  },
  {
    title: "Require Domain Joined (Hybrid Azure AD)",
    desc: "Devices must be Hybrid Azure AD joined — Mobile Devices Azure AD registered and domain joined machines are set to automatically register in their Azure AD.",
  },
  {
    title: "Require Approved App",
    desc: "Access is only granted if a connection attempt was made by an approved client app. These apps support Mobile Application Management (MAM) policies, so administrators can wrap security around these apps.",
  },
];

export const conditionalAccessPolicies = [
  {
    id: "CA01",
    title: "Enforce Multi-Factor Authentication for Users",
    description:
      "Ensure users are only able to access the Microsoft 365 system if they have multi-factor authentication setup for their account.",
    steps: [
      "Sign in to the Entra ID Portal: Go to https://entra.microsoft.com/ and sign in with an account that has administrative privileges.",
      'Navigate to Protection: In the left-hand menu, click on "Protection".',
      'Conditional Access: Under the protection menu, select "Conditional Access".',
      'New Policy: Select "New Policy from Template".',
      'Secure Foundation: Select "Secure Foundation" from the top menu.',
      'Require multifactor authentication for all users: Select "Require multifactor authentication for all users" from the items below.',
      'Adjust Policy state and save: Set policy name as per your requirements (e.g. "CA01 – Require multifactor Authentication for all users"). Set policy state to off, on, or report only. Save the policy once you are happy with the settings.',
    ],
  },
  {
    id: "CA02",
    title: "Restrict Access to Specific Countries",
    description:
      "Ensure users are only able to access the Microsoft 365 system from their country, and block access to all other countries.",
    steps: [
      "Sign in to the Entra ID Portal: Go to https://entra.microsoft.com/ and sign in with an account that has administrative privileges.",
      'Navigate to Protection: In the left-hand menu, click on "Protection".',
      'Conditional Access: Under the protection menu, select "Conditional Access".',
      'Named Locations: Once in the conditional access main menu, select "Named Locations".',
      'Navigate to Countries location: In the top menu, click on "Countries location".',
      'Country Selection: Enter the name "Approved Countries". In the right hand menu, select the countries where your offices are located.',
      'Save Selection: Save your selection by selecting "create".',
      'Create policy: Select "New Policy" from the top menu.',
      'Name Policy: Set name of policy (e.g. "CA02 – Block Access from Other Countries").',
      'Users to affect: In the "Users" menu, set the include sub menu to "all users".',
      'Exclude admin account: To ensure you are never locked out of your Microsoft 365 tenant, select the sub menu "exclude" then select your administrator account.',
      'Client Apps: Select Client apps. Set configure to yes. De-select "Exchange ActiveSync Clients" & "Other Clients".',
      'Set Filter for devices: Select the "Filter for devices" menu. Select yes on the "Configure" menu. Select "exclude filtered devices from policy". Set property to "IsCompliant", Operator to "equals", Value to "True". Then select Done.',
      'Block Access: Select "Grant" menu item. Select "block access". Set "Enable policy" to "on".',
    ],
  },
  {
    id: "CA03",
    title: "Restrict Access to Types of Devices",
    description:
      "Ensure users are only able to access the Microsoft 365 system from specific device types, and block access from un-approved device types.",
    steps: [
      'Select "Policies" from the Conditional Access Control Panel.',
      'Select "New Policy" from top menu.',
      'Name policy "CA03 – Block un-approved Device types".',
      'Select "Users" Menu and then select "All users".',
      'Select "Target Resources" then select "All Cloud Apps".',
      'Select "Conditions" and then "Device Platforms".',
      'Set Configure to "yes" and then tick "Windows Phone" & "Linux".',
      'Select "done".',
      'Select "Grant" from left hand menu and then set to "Block Access", click "select" from the bottom.',
      'Set policy to "on".',
      'Select "Create".',
    ],
  },
  {
    id: "CA04",
    title: "Disable Persistent Browser Sessions",
    description:
      "Ensure when users close a browser on a non-managed PC, the session will be logged out from Microsoft 365.",
    steps: [
      'Select "New Policy".',
      'Name the policy "CA04 – Disable Persistent Browser sessions".',
      'Select "users" from right hand menu and then select "all users".',
      'Select "Target Resources" then select "All Cloud Apps".',
      'Select "Conditions" from left hand menu.',
      'Select "Client Apps" from middle menu.',
      'Set configure to "yes" and then tick "Browser", then select "done".',
      'Select "Session" from right hand side menu, then tick "Persistent Browser Session". Then set the drop down menu to "Never Persistent".',
      'Click "Select".',
      'Set Policy to "On" and then click "Create".',
    ],
  },
  {
    id: "CA05",
    title: "Enforce App Protection Policies",
    description:
      "Ensure that client devices are using an App Protection Policy when accessing your corporate data.",
    steps: [
      'Select "New Policy".',
      'Name the policy "CA05 – Require App Protection Policy".',
      'Select "users" from right hand menu and then select "all users".',
      'Select "Target Resources" then click "Select Apps".',
      'Click "Select" from the menu items.',
      'On the right hand menu tick "Office 365" then "select".',
      'Select "Conditions" from right hand side menu, then select "Device Platform". Then set the right hand side menu configure option to "yes".',
      'Tick "Android" and "IOS" from the options. Then click "Done".',
      'Select "Client Apps" from the middle menu.',
      'Set Configure on right hand side menu to "yes", then click "browser" and "Mobile Apps and Desktop Clients". Select "done".',
      'Select "Grant Access" from left hand menu, then select "Require App protection Policy" from right hand side. Then click "Select".',
      'Set policy to "on" and then click "Create".',
    ],
  },
  {
    id: "CA06",
    title: "Block Legacy Authentication",
    description:
      "Block older protocols from being able to access your Microsoft 365 tenant.",
    steps: [
      'Select "New Policy from Template".',
      'Select "Block Legacy Authentication".',
      'Name the policy "CA06 – Block Legacy Authentication".',
      'Set Policy state to "on".',
      "Click on Create.",
    ],
  },
  {
    id: "CA07",
    title: "Require MFA for Entra Join",
    description:
      "Enforce multi-factor authentication when users are joining a device to Entra ID.",
    steps: [
      'Select "New Policy".',
      'Name the policy "CA07 – Require MFA to Join to Entra".',
      'Select "users" from right hand menu and then select "all users".',
      'Select "Target Resources" then click the drop down menu. Select the "user actions" option, then tick "register or join devices".',
      'Select "Grant" from the left hand menu, then select "grant access" from right hand menu.',
      'Tick "require multifactor authentication" then "select".',
      'Set policy to "on" and then click "create".',
    ],
  },
  {
    id: "CA08",
    title: "Block Personal Computers",
    description:
      "Block access to the Microsoft 365 system from personal computers.",
    steps: [
      'Select "New Policy".',
      'Name the policy "CA08 – Block Personal Devices".',
      'Select "users" from right hand menu and then select "all users".',
      'Select the "Exclude" menu, select "users and groups", enter your admin account.',
      'Select "Target Resources" and select "all cloud apps".',
      'Select "Conditions" menu, then select "device platforms". Select "Yes" under the configure option on the right hand side. Then tick "Windows" and "macOS". Select "done".',
      'Select "Client apps", set configure to "yes", tick "browser", "mobile apps and desktop clients", "exchange Active Sync clients" and "other clients".',
      'Select "Filter for devices". Set to "yes" under configure. Set the expressions to: device ownership – equals – personal OR deviceownership – not equals – company. Select "done".',
      'Select "Grant", select "Block Access" on right hand side. Click "select".',
      'Set Enable policy to "report only".',
      "Review and enable once settings are confirmed.",
    ],
  },
  {
    id: "CA09",
    title: "Lock Down Access to Company Offices",
    description:
      "Restrict access so that users can only connect to Office 365 if they are coming from the corporate IP range (external).",
    steps: [
      "Navigate to Azure Active Directory in the Azure Portal.",
      "Under the Manage section, click on Security, then select Conditional Access.",
      "Click the + New Policy button at the top of the page.",
      'Give the policy a meaningful name, such as "Restrict Access to Company Offices".',
      "Under Assignments, click on Users and groups. Choose all users or specific security groups.",
      "Under Assignments, select Cloud apps or actions. Choose all Microsoft 365 apps or All cloud apps.",
      "Under Assignments, click on Conditions, then select Locations.",
      "Set Configure to Yes. Click on Include, then choose Any location. Click on Exclude, then select your corporate IP range.",
      "Under Access controls, click Grant. Select Grant access, and enable Require multi-factor authentication if necessary.",
      "Set the Enable policy switch to On.",
      "Review your settings, then click Create to apply the policy.",
    ],
  },
];

export const conditionalAccessGotchas = {
  title: "Gotchas",
  description:
    "As with most Microsoft solutions, Conditional Access is not without its flaws.",
  issues: [
    {
      title: "Client App Compatibility",
      desc: "Not all client apps support Conditional Access — the Client App needs to support Modern Authentication. e.g. Outlook 2016 or Outlook 2013 (with a reg key change). Outlook 2010 will not work with Conditional Access and the user will be allowed to connect in.",
    },
    {
      title: "Legacy App Pressure",
      desc: "Upgrade to Outlook 2016 if your business is still using this. Any 3rd party apps (e.g. Outlook Plugins) that don't support above Outlook 2010, put pressure on the vendor to fix this. Don't let your Office 365 migration be hindered by a non-future-proof app.",
    },
  ],
};

export const conditionalAccessBenefits = [
  {
    title: "Protect Against Unauthorised Access",
    desc: "Conditional Access ensures that only verified users and compliant devices can access corporate resources, significantly reducing the risk of data breaches.",
  },
  {
    title: "Enforce Multi-Factor Authentication",
    desc: "Require additional verification beyond just a username and password, adding a critical layer of security to the login process.",
  },
  {
    title: "Control Access by Location",
    desc: "Restrict Office 365 access to specific geographic locations or corporate IP ranges, preventing access from untrusted networks.",
  },
  {
    title: "Device-Level Security",
    desc: "Ensure only Intune-compliant and company-owned devices can access corporate data, blocking personal and unmanaged devices.",
  },
  {
    title: "Granular Application Control",
    desc: "Apply security policies to specific apps rather than all of Office 365, allowing tailored access controls for different business needs.",
  },
  {
    title: "Zero Trust Security Model",
    desc: "Implement a comprehensive Zero Trust approach by combining identity, location, device, and risk signals to make access decisions.",
  },
];

export const conditionalAccessFAQs = [
  {
    question: "What is Conditional Access in Microsoft 365?",
    answer:
      "Conditional Access is a security feature in Microsoft Entra ID that controls access to resources based on specific conditions such as user identity, location, device compliance, and risk level. It allows organisations to enforce policies like MFA, device compliance, and location-based restrictions.",
  },
  {
    question: "Do I need a special license for Conditional Access?",
    answer:
      "Yes. Conditional Access requires an Azure AD Premium license (P1 or P2), which is also included in the Enterprise Mobility and Security Suite (EMS) or Microsoft 365 E3/E5 licenses.",
  },
  {
    question: "Can I exclude specific users from a Conditional Access policy?",
    answer:
      "Yes. Each policy allows you to include or exclude specific users or groups. It's recommended to always exclude your admin account from block policies to avoid being locked out.",
  },
  {
    question:
      "What happens if a user doesn't meet the Conditional Access requirements?",
    answer:
      "If a user doesn't meet the conditions defined in the policy, access will be blocked. The user will see an error message indicating they don't meet the requirements to access the resource.",
  },
  {
    question: "Can I test a Conditional Access policy before enforcing it?",
    answer:
      'Yes. You can set a policy to "Report-only" mode, which allows you to see the impact of the policy without actually enforcing it. This helps you test and verify before going live.',
  },
];

export const conditionalAccessUsefulLinks = [
  {
    title: "Conditional Access Overview",
    description:
      "Learn about Microsoft Entra Conditional Access — the if-then statement engine that controls access to resources based on conditions.",
    href: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
  },
  {
    title: "Plan a Conditional Access Deployment",
    description:
      "Microsoft's guide for planning and deploying Conditional Access policies in your organisation effectively.",
    href: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access",
  },
  {
    title: "Common Conditional Access Policies",
    description:
      "Explore common Conditional Access policy examples including requiring MFA, blocking legacy authentication, and more.",
    href: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-common-conditional-access-policy-examples",
  },
  {
    title: "Conditional Access Documentation",
    description:
      "Full Microsoft documentation for Conditional Access — including how-to guides, troubleshooting, and deployment best practices.",
    href: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/",
  },
];

