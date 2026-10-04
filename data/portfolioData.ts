export type Language = 'en' | 'de';

export interface BilingualText {
  en: string;
  de: string;
}

export interface NavItem {
  id: string;
  label: BilingualText;
  href: string;
}

export interface QuickFact {
  key: BilingualText;
  value: BilingualText;
  isEmail?: boolean;
}

export interface StatItem {
  value: string;
  title: BilingualText;
  description: BilingualText;
}

export interface ProjectEvidence {
  label: BilingualText;
  tags: (string | BilingualText)[];
}

export interface TemperatureBar {
  label: BilingualText;
  value: number; // in °C
  displayValue: string;
  percentage: number;
  color: string;
}

export interface ProjectItem {
  id: string;
  tagline: BilingualText;
  title: BilingualText;
  when: BilingualText;
  mediaType: 'duo' | 'single-chart' | 'duo-code';
  images: {
    src: string;
    alt: BilingualText;
    containBg?: boolean;
  }[];
  points: BilingualText[];
  evidence: ProjectEvidence;
  temperatureChart?: TemperatureBar[];
}

export interface SkillCategory {
  number: string;
  title: BilingualText;
  description: BilingualText;
  skills: (string | BilingualText)[];
}

export interface ExperienceItem {
  title: BilingualText;
  when: BilingualText;
  organization: string;
  points?: BilingualText[];
  description?: BilingualText;
}

export interface EducationItem {
  title: BilingualText;
  when: BilingualText;
  organization: BilingualText;
  coursework?: BilingualText;
  isCertification?: boolean;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
}

export interface PortfolioContent {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    brandName: string;
    tagline: BilingualText;
    links: NavItem[];
  };
  hero: {
    kicker: BilingualText;
    greeting: BilingualText;
    name: string;
    subtitle: BilingualText;
    lead: BilingualText;
    ctaPrimary: BilingualText;
    ctaSecondary: BilingualText;
    quickFacts: QuickFact[];
    techPills: string[];
    portrait: {
      src: string;
      alt: string;
      badgeTitle: string;
      badgeSubtitle: string;
    };
  };
  stats: StatItem[];
  projects: {
    eyebrow: BilingualText;
    heading: BilingualText;
    intro: BilingualText;
    items: ProjectItem[];
  };
  skills: {
    eyebrow: BilingualText;
    heading: BilingualText;
    intro: BilingualText;
    categories: SkillCategory[];
  };
  experience: {
    eyebrow: BilingualText;
    heading: BilingualText;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: BilingualText;
    heading: BilingualText;
    items: EducationItem[];
  };
  contact: {
    eyebrow: BilingualText;
    heading: BilingualText;
    intro: BilingualText;
    info: ContactInfo;
    form: {
      nameLabel: BilingualText;
      emailLabel: BilingualText;
      subjectLabel: BilingualText;
      messageLabel: BilingualText;
      submitBtn: BilingualText;
      defaultNote: BilingualText;
      errorNote: BilingualText;
      successNote: BilingualText;
    };
  };
  footer: {
    copyright: string;
    affiliations: BilingualText;
  };
}

export const portfolioData: PortfolioContent = {
  metadata: {
    title: "Sajin Saji | Mechatronics Engineer – Automation, Testing & Robotics",
    description: "Portfolio of Sajin Saji – M.Eng. Mechatronics & Cyber-Physical Systems student (TH Deggendorf): automation, commissioning, testing, robotics and prototyping."
  },
  navigation: {
    brandName: "Sajin Saji",
    tagline: {
      en: "Mechatronics · Automation",
      de: "Mechatronik · Automatisierung"
    },
    links: [
      { id: "about", label: { en: "Profile", de: "Profil" }, href: "#about" },
      { id: "projects", label: { en: "Projects", de: "Projekte" }, href: "#projects" },
      { id: "skills", label: { en: "Skills", de: "Kenntnisse" }, href: "#skills" },
      { id: "experience", label: { en: "Experience", de: "Erfahrung" }, href: "#experience" },
      { id: "education", label: { en: "Education", de: "Ausbildung" }, href: "#education" },
      { id: "contact", label: { en: "Contact", de: "Kontakt" }, href: "#contact" }
    ]
  },
  hero: {
    kicker: {
      en: "Seeking a master’s thesis for 2026/2027 · open to working student roles & internships",
      de: "Masterarbeit für 2026/2027 gesucht · offen für Werkstudentenstellen & Praktika"
    },
    greeting: {
      en: "Hi, I am",
      de: "Hallo, ich bin"
    },
    name: "Sajin Saji",
    subtitle: {
      en: "Automation · Testing · Robotics · Prototyping",
      de: "Automatisierung · Test · Robotik · Prototyping"
    },
    lead: {
      en: "Mechatronics Master's student with 14 months of industry experience commissioning and testing automation systems. I plan test series, build prototypes, write software and document my work so others can repeat it.",
      de: "Masterstudent der Mechatronik mit 14 Monaten Industrieerfahrung in der Inbetriebnahme und im Test von Automatisierungssystemen. Ich plane Versuchsreihen, baue Prototypen, schreibe Software und dokumentiere so, dass andere es nachvollziehen können."
    },
    ctaPrimary: {
      en: "View projects",
      de: "Projekte ansehen"
    },
    ctaSecondary: {
      en: "Contact me",
      de: "Kontakt"
    },
    quickFacts: [
      {
        key: { en: "Location", de: "Standort" },
        value: { en: "Regensburg · open to relocation", de: "Regensburg · umzugsbereit" }
      },
      {
        key: { en: "Availability", de: "Verfügbarkeit" },
        value: { en: "Up to 20 h/week · seeking thesis 2026/2027", de: "Bis 20 Std./Woche · Masterarbeit 2026/2027" }
      },
      {
        key: { en: "Email", de: "Email" },
        value: { en: "sajinsaji222@gmail.com", de: "sajinsaji222@gmail.com" },
        isEmail: true
      }
    ],
    techPills: ["C#", "Python", "C++", "Unity", "SolidWorks", "MATLAB/Simulink", "Ansys", "Git"],
    portrait: {
      src: "/images/portrait.jpg",
      alt: "Portrait of Sajin Saji",
      badgeTitle: "M.Eng.",
      badgeSubtitle: "TH Deggendorf"
    }
  },
  stats: [
    {
      value: "14",
      title: { en: "Months in industry", de: "Monate Industrie" },
      description: {
        en: "Commissioning, testing and support of automation systems",
        de: "Inbetriebnahme, Test und Support von Automatisierungssystemen"
      }
    },
    {
      value: "−65 %",
      title: { en: "Temperature cut", de: "Temperatur gesenkt" },
      description: {
        en: "Thesis result from four planned test configurations",
        de: "Ergebnis der Bachelorarbeit aus vier geplanten Versuchen"
      }
    },
    {
      value: "7",
      title: { en: "Team members", de: "Teammitglieder" },
      description: {
        en: "VR simulator built together, with a co-authored paper",
        de: "VR-Simulator im Team entwickelt, mit gemeinsamem Paper"
      }
    },
    {
      value: "2",
      title: { en: "Countries", de: "Länder" },
      description: {
        en: "Engineering experience in India and Germany",
        de: "Ingenieurerfahrung in Indien und Deutschland"
      }
    }
  ],
  projects: {
    eyebrow: {
      en: "Featured projects",
      de: "Ausgewählte Projekte"
    },
    heading: {
      en: "Selected engineering projects",
      de: "Ausgewählte Ingenieurprojekte"
    },
    intro: {
      en: "Three projects across simulation, experiments and prototyping, each with the evidence behind it.",
      de: "Drei Projekte aus Simulation, Versuchen und Prototyping – jeweils mit den Nachweisen dahinter."
    },
    items: [
      {
        id: "vr-simulator",
        tagline: { en: "Simulation & software", de: "Simulation & Software" },
        title: { en: "Immersive VR Pedestrian Simulator", de: "Immersiver VR-Fußgängersimulator" },
        when: {
          en: "03/2025 – 06/2025 · Master's project · team of 7",
          de: "03/2025 – 06/2025 · Masterprojekt · Team aus 7"
        },
        mediaType: "duo",
        images: [
          {
            src: "/images/vr-pedestrian-city.jpg",
            alt: {
              en: "Unity city scene of the VR pedestrian simulator",
              de: "Unity-Stadtszene des VR-Fußgängersimulators"
            }
          },
          {
            src: "/images/vr-pedestrian-raycast.jpg",
            alt: {
              en: "Vehicle with raycast detection zone in Unity",
              de: "Fahrzeug mit Raycast-Erfassungszone in Unity"
            }
          }
        ],
        points: [
          {
            en: "Unity simulator for Meta Quest 3 with three street-crossing levels, from single-lane roads to multi-lane traffic.",
            de: "Unity-Simulator für Meta Quest 3 mit drei Schwierigkeitsstufen – von einspurigen Straßen bis zu mehrspurigem Verkehr."
          },
          {
            en: "Object-oriented C# components: vehicle controllers, raycast speed measurement, trigger-zone events and collision logic.",
            de: "Objektorientierte C#-Komponenten: Fahrzeugsteuerung, Geschwindigkeitsmessung per Raycast, Trigger-Zonen und Kollisionslogik."
          },
          {
            en: "Pedestrian agents with NavMesh pathfinding, user test scenarios and a co-authored research paper.",
            de: "Fußgänger-Agenten mit NavMesh-Pfadplanung, Nutzertests und ein mitverfasstes Forschungspaper."
          }
        ],
        evidence: {
          label: { en: "Evidence", de: "Nachweis" },
          tags: [
            "C#",
            "Unity",
            "OOP",
            "Git",
            { en: "User testing", de: "Nutzertests" },
            { en: "Research paper", de: "Paper" }
          ]
        }
      },
      {
        id: "thermal-optimization",
        tagline: { en: "Experiments & data", de: "Versuche & Daten" },
        title: { en: "Thermal Optimisation of a Motor-Controller PCB", de: "Thermische Optimierung einer Motorsteuerungsplatine" },
        when: {
          en: "07/2021 – 06/2022 · Bachelor's thesis · team of 4",
          de: "07/2021 – 06/2022 · Bachelorarbeit · Team aus 4"
        },
        mediaType: "single-chart",
        images: [
          {
            src: "/images/thermal-ansys-icepak.jpg",
            alt: {
              en: "Ansys Icepak temperature plot of the optimised motor-controller board",
              de: "Ansys Icepak Temperatur-Plot der optimierten Motorsteuerungsplatine"
            },
            containBg: true
          }
        ],
        temperatureChart: [
          {
            label: { en: "Bare board", de: "Ohne Kühlung" },
            value: 154,
            displayValue: "154 °C",
            percentage: 96.25,
            color: "#ff7a59"
          },
          {
            label: { en: "Standard heat sink", de: "Standard-Kühlkörper" },
            value: 127,
            displayValue: "127 °C",
            percentage: 79.4,
            color: "#ff9a7a"
          },
          {
            label: { en: "Optimised heat sink", de: "Optimierter Kühlkörper" },
            value: 109,
            displayValue: "109 °C",
            percentage: 68.1,
            color: "#ffb79f"
          },
          {
            label: { en: "Optimised + fan", de: "Optimiert + Lüfter" },
            value: 54,
            displayValue: "54 °C",
            percentage: 33.75,
            color: "#38bdf8"
          }
        ],
        points: [
          {
            en: "Planned four test configurations and varied one parameter at a time.",
            de: "Vier Versuchskonfigurationen geplant und jeweils einen Parameter variiert."
          },
          {
            en: "Optimised fin count, fin thickness and base height of the heat sink.",
            de: "Rippenzahl, Rippendicke und Bodenhöhe des Kühlkörpers optimiert."
          },
          {
            en: "Result: 65 % lower component temperature (154 °C → 54 °C).",
            de: "Ergebnis: 65 % niedrigere Bauteiltemperatur (154 °C → 54 °C)."
          }
        ],
        evidence: {
          label: { en: "Evidence", de: "Nachweis" },
          tags: [
            "Ansys Icepak",
            { en: "Test planning", de: "Versuchsplanung" },
            { en: "Data evaluation", de: "Auswertung" }
          ]
        }
      },
      {
        id: "gear-demonstrator",
        tagline: { en: "Prototyping & code", de: "Prototyping & Code" },
        title: { en: "Parametric Gear Demonstrator", de: "Parametrischer Zahnrad-Demonstrator" },
        when: {
          en: "03/2024 – 06/2024 · Additive Manufacturing · team of 3",
          de: "03/2024 – 06/2024 · Additive Fertigung · Team aus 3"
        },
        mediaType: "duo-code",
        images: [
          {
            src: "/images/gear-demonstrator.jpg",
            alt: {
              en: "Assembled 3D-printed gear demonstrator",
              de: "Montierter 3D-gedruckter Zahnrad-Demonstrator"
            }
          },
          {
            src: "/images/lua-code-iceSL.jpg",
            alt: {
              en: "Excerpt of the Lua source code",
              de: "Auszug aus dem Lua-Quellcode"
            }
          }
        ],
        points: [
          {
            en: "Fully parametric Lua program (IceSL): profile shift and pressure angle update the geometry live.",
            de: "Vollständig parametrisches Lua-Programm (IceSL): Profilverschiebung und Eingriffswinkel ändern die Geometrie live."
          },
          {
            en: "3D-printed and assembled gears, shaft pins and stand at the correct centre distance.",
            de: "Zahnräder, Wellenstifte und Ständer im korrekten Achsabstand 3D-gedruckt und montiert."
          },
          {
            en: "14-page user guide with 22 figures so anyone can repeat the build.",
            de: "14-seitiges Handbuch mit 22 Abbildungen – jeder kann den Aufbau nachbauen."
          }
        ],
        evidence: {
          label: { en: "Evidence", de: "Nachweis" },
          tags: [
            "Lua",
            "IceSL",
            { en: "3D printing", de: "3D-Druck" },
            { en: "Documentation", de: "Dokumentation" }
          ]
        }
      }
    ]
  },
  skills: {
    eyebrow: {
      en: "Core skills",
      de: "Kernkompetenzen"
    },
    heading: {
      en: "Technical expertise",
      de: "Technische Kompetenzen"
    },
    intro: {
      en: "A focused stack across automation, software, testing and manufacturing.",
      de: "Ein fokussiertes Profil aus Automatisierung, Software, Test und Fertigung."
    },
    categories: [
      {
            "number": "01",
            "title": {
                  "en": "Programming",
                  "de": "Programmierung"
            },
            "description": {
                  "en": "Languages used across coursework, engineering projects and embedded-system work.",
                  "de": "Programmiersprachen aus Studium, Ingenieurprojekten und Embedded-Systemen."
            },
            "skills": [
                  "Python",
                  "C++",
                  "C#",
                  "MATLAB",
                  "Lua",
                  {
                        "en": "C (coursework)",
                        "de": "C (Studium)"
                  }
            ]
      },
      {
            "number": "02",
            "title": {
                  "en": "Simulation",
                  "de": "Simulation"
            },
            "description": {
                  "en": "Virtual environments, system modelling and engineering analysis.",
                  "de": "Virtuelle Umgebungen, Systemmodellierung und technische Analyse."
            },
            "skills": [
                  "Unity",
                  "VR / Meta Quest 3",
                  "MATLAB / Simulink",
                  {
                        "en": "System modelling",
                        "de": "Systemmodellierung"
                  },
                  {
                        "en": "Thermal simulation",
                        "de": "Thermische Simulation"
                  },
                  "ANSYS Icepak"
            ]
      },
      {
            "number": "03",
            "title": {
                  "en": "Automation",
                  "de": "Automatisierung"
            },
            "description": {
                  "en": "Integration and testing of mechanical, electronic and control components.",
                  "de": "Integration und Prüfung mechanischer, elektronischer und steuerungstechnischer Komponenten."
            },
            "skills": [
                  {
                        "en": "Control systems",
                        "de": "Steuerungstechnik"
                  },
                  {
                        "en": "Sensor integration",
                        "de": "Sensorintegration"
                  },
                  {
                        "en": "System integration",
                        "de": "Systemintegration"
                  },
                  {
                        "en": "Commissioning",
                        "de": "Inbetriebnahme"
                  },
                  {
                        "en": "Troubleshooting",
                        "de": "Fehlersuche"
                  }
            ]
      },
      {
            "number": "04",
            "title": {
                  "en": "Engineering tools",
                  "de": "Engineering-Tools"
            },
            "description": {
                  "en": "Design, development and documentation tools used in engineering work.",
                  "de": "Werkzeuge für Konstruktion, Entwicklung und technische Dokumentation."
            },
            "skills": [
                  "Git / GitHub",
                  "Ubuntu / Windows",
                  "SolidWorks",
                  "AutoCAD",
                  "IceSL",
                  {
                        "en": "Technical documentation",
                        "de": "Technische Dokumentation"
                  }
            ]
      },
      {
            "number": "05",
            "title": {
                  "en": "Testing & prototyping",
                  "de": "Test & Prototyping"
            },
            "description": {
                  "en": "Verification, functional testing and parameter-driven physical prototypes.",
                  "de": "Verifikation, Funktionstests und parametrisch entwickelte Prototypen."
            },
            "skills": [
                  {
                        "en": "Verification & validation",
                        "de": "Verifikation & Validierung"
                  },
                  {
                        "en": "System testing",
                        "de": "Systemtests"
                  },
                  {
                        "en": "Circuit prototyping",
                        "de": "Schaltungsprototypen"
                  },
                  {
                        "en": "Parametric gear modelling",
                        "de": "Parametrische Zahnradmodellierung"
                  },
                  {
                        "en": "Additive manufacturing",
                        "de": "Additive Fertigung"
                  },
                  {
                        "en": "STL / G-code preparation",
                        "de": "STL- / G-Code-Vorbereitung"
                  }
            ]
      }
]
  },
  experience: {
    eyebrow: {
      en: "Experience",
      de: "Berufserfahrung"
    },
    heading: {
      en: "Industry experience behind the profile",
      de: "Industrieerfahrung hinter dem Profil"
    },
    items: [
      {
        title: { en: "Junior Automation Engineer", de: "Junior Automation Engineer" },
        when: { en: "07/2022 – 09/2023", de: "07/2022 – 09/2023" },
        organization: "Logix Space Technologies Pvt Ltd · Pandalam, India",
        points: [
          {
            en: "Commissioned automation systems with sensors, actuators and control software, from assembly to stable operation.",
            de: "Automatisierungssysteme mit Sensorik, Aktorik und Steuerungssoftware vom Aufbau bis zum stabilen Betrieb in Betrieb genommen."
          },
          {
            en: "Implemented control solutions to given specifications, improving performance and reliability.",
            de: "Steuerungslösungen nach Vorgaben umgesetzt – mit höherer Leistung und Zuverlässigkeit."
          },
          {
            en: "Tested, validated and supported systems; traced each fault to its root cause.",
            de: "Systeme getestet, validiert und betreut; jeden Fehler bis zur Ursache verfolgt."
          }
        ]
      },
      {
        title: { en: "Intern – Embedded Systems & Robotics", de: "Praktikant – Embedded Systems & Robotik" },
        when: { en: "07/2019 – 08/2019", de: "07/2019 – 08/2019" },
        organization: "inFOX · Kochi, India",
        description: {
          en: "Programmed and tested robotics prototypes, building circuits and debugging hardware and software.",
          de: "Robotik-Prototypen programmiert und getestet, Schaltungen aufgebaut sowie Hard- und Software debuggt."
        }
      }
    ]
  },
  education: {
    eyebrow: {
      en: "Education",
      de: "Ausbildung"
    },
    heading: {
      en: "Mechanical Foundation, Mechatronics Depth",
      de: "Maschinenbau als Basis, Mechatronik in der Tiefe"
    },
    items: [
      {
        title: {
          en: "M.Eng. Mechatronics & Cyber-Physical Systems",
          de: "M.Eng. Mechatronik & Cyber-Physische Systeme"
        },
        when: { en: "10/2023 – present", de: "10/2023 – heute" },
        organization: {
          en: "Technische Hochschule Deggendorf, Germany",
          de: "Technische Hochschule Deggendorf, Deutschland"
        },
        coursework: {
          en: "Additive Manufacturing, Advanced Robotics, Autonomous Systems, Cyber-Physical Systems, Human-Machine Interaction.",
          de: "Additive Fertigung, Advanced Robotics, Autonomous Systems, Cyber-Physical Systems, Human-Machine Interaction."
        }
      },
      {
        title: {
          en: "B.Tech. Mechanical Engineering",
          de: "B.Tech. Maschinenbau"
        },
        when: { en: "06/2018 – 06/2022", de: "06/2018 – 06/2022" },
        organization: {
          en: "APJ Abdul Kalam Technological University, India · Grade 2.4",
          de: "APJ Abdul Kalam Technological University, Indien · Note 2,4"
        },
        coursework: {
          en: "CAD/CAE, Material Science, Fluid & Thermal Engineering, Programming (C).",
          de: "CAD/CAE, Werkstoffkunde, Strömungs- und Thermodynamik, Programmierung (C)."
        }
      },
      {
        title: {
          en: "Certifications",
          de: "Zertifikate"
        },
        when: { en: "", de: "" },
        organization: {
          en: "Tele-Robotics – Virtual University of Bavaria (vhb), 2025 · Non-Destructive Testing (NDT), 2021 · Artificial Intelligence Internship – Goldmine, 2021",
          de: "Tele-Robotik – Virtuelle Hochschule Bayern (vhb), 2025 · Zerstörungsfreie Prüfung (NDT), 2021 · Praktikum Künstliche Intelligenz – Goldmine, 2021"
        },
        isCertification: true
      }
    ]
  },
  contact: {
    eyebrow: {
      en: "Contact",
      de: "Kontakt"
    },
    heading: {
      en: "Let's talk about your next project",
      de: "Lassen Sie uns über Ihr nächstes Projekt sprechen"
    },
    intro: {
      en: "I'm looking for a working student position, an internship or a Master's thesis in automation, testing, robotics or manufacturing, and I'm open to relocating.",
      de: "Ich suche eine Werkstudentenstelle, ein Praktikum oder eine Masterarbeit in Automatisierung, Test, Robotik oder Fertigung – und bin umzugsbereit."
    },
    info: {
      email: "sajinsaji222@gmail.com",
      linkedin: "https://linkedin.com/in/sajin-saji-4762561b5",
      linkedinDisplay: "sajin-saji-4762561b5",
      github: "https://github.com/sajin-saji",
      githubDisplay: "github.com/sajin-saji"
    },
    form: {
      nameLabel: { en: "Your name", de: "Ihr Name" },
      emailLabel: { en: "Your email", de: "Ihre E-Mail" },
      subjectLabel: { en: "Subject", de: "Betreff" },
      messageLabel: { en: "Message", de: "Nachricht" },
      submitBtn: { en: "Send message", de: "Nachricht senden" },
      defaultNote: {
        en: "Opens your email app with the message ready to send.",
        de: "Öffnet Ihr E-Mail-Programm mit der fertigen Nachricht."
      },
      errorNote: {
        en: "Please fill in your name, email and message.",
        de: "Bitte Name, E-Mail und Nachricht ausfüllen."
      },
      successNote: {
        en: "Your email app should open now. If not, write directly to sajinsaji222@gmail.com",
        de: "Ihr E-Mail-Programm wurde geöffnet. Falls nicht: sajinsaji222@gmail.com"
      }
    }
  },
  footer: {
    copyright: "© 2026 Sajin Saji",
    affiliations: {
      en: "Mechatronics & Cyber-Physical Systems, TH Deggendorf",
      de: "Mechatronik & Cyber-Physische Systeme, TH Deggendorf"
    }
  }
};
