import type { BilingualText } from "./portfolioData";
export const projectDetails: Record<string, { heading: BilingualText; text: BilingualText }[]> = {
  "vr-simulator": [
    {
      "heading": {
        "en": "Objective",
        "de": "Ziel"
      },
      "text": {
        "en": "Build an immersive VR environment for studying pedestrian street-crossing behaviour.",
        "de": "Entwicklung einer immersiven VR-Umgebung zur Untersuchung von Straßenquerungen."
      }
    },
    {
      "heading": {
        "en": "Team contribution",
        "de": "Teambeitrag"
      },
      "text": {
        "en": "Member of a seven-person project team and co-author of the research paper.",
        "de": "Mitglied eines siebenköpfigen Projektteams und Mitautor des Forschungspapers."
      }
    },
    {
      "heading": {
        "en": "Approach",
        "de": "Vorgehen"
      },
      "text": {
        "en": "The team used Unity and Meta Quest 3 to create dynamic traffic, environmental audio and real-time feedback.",
        "de": "Das Team nutzte Unity und Meta Quest 3 für dynamischen Verkehr, Umgebungsgeräusche und unmittelbares Feedback."
      }
    },
    {
      "heading": {
        "en": "Result",
        "de": "Ergebnis"
      },
      "text": {
        "en": "An interactive prototype with three crossing scenarios and a jointly authored project paper.",
        "de": "Interaktiver Prototyp mit drei Querungsszenarien und gemeinsam verfasstem Projektpaper."
      }
    }
  ],
  "thermal-optimization": [
    {
      "heading": {
        "en": "Objective",
        "de": "Ziel"
      },
      "text": {
        "en": "Improve heat dissipation in a motor-controller PCB using ANSYS Icepak.",
        "de": "Verbesserung der Wärmeabfuhr einer Motorsteuerungsplatine mit ANSYS Icepak."
      }
    },
    {
      "heading": {
        "en": "Team contribution",
        "de": "Teambeitrag"
      },
      "text": {
        "en": "Worked in a four-person bachelor’s project team on thermal analysis and cooling-design comparison.",
        "de": "Mitarbeit in einem vierköpfigen Bachelorprojekt zur thermischen Analyse und zum Vergleich von Kühlkonzepten."
      }
    },
    {
      "heading": {
        "en": "Approach",
        "de": "Vorgehen"
      },
      "text": {
        "en": "Compared four cooling configurations. Varied heat-sink fin count, fin thickness and base height, then assessed forced airflow.",
        "de": "Vergleich von vier Kühlkonfigurationen. Variation von Rippenzahl, Rippendicke und Bodenhöhe sowie Untersuchung erzwungener Luftströmung."
      }
    },
    {
      "heading": {
        "en": "Result",
        "de": "Ergebnis"
      },
      "text": {
        "en": "Simulated maximum temperature fell from 154 °C to 54 °C with the optimised heat sink and fan: a reduction of 100 °C.",
        "de": "Die simulierte Maximaltemperatur sank mit optimiertem Kühlkörper und Lüfter von 154 °C auf 54 °C: eine Reduktion um 100 °C."
      }
    }
  ],
  "gear-demonstrator": [
    {
      "heading": {
        "en": "Objective",
        "de": "Ziel"
      },
      "text": {
        "en": "Develop a parametric involute gear demonstrator to explore profile shift.",
        "de": "Entwicklung eines parametrischen Evolventenzahnrad-Demonstrators zur Untersuchung der Profilverschiebung."
      }
    },
    {
      "heading": {
        "en": "Team contribution",
        "de": "Teambeitrag"
      },
      "text": {
        "en": "Member of the three-person project group, contributing to gear modelling and technical documentation.",
        "de": "Mitglied der dreiköpfigen Projektgruppe mit Beiträgen zur Zahnradmodellierung und technischen Dokumentation."
      }
    },
    {
      "heading": {
        "en": "Approach",
        "de": "Vorgehen"
      },
      "text": {
        "en": "Used Lua and IceSL for adjustable gear geometry. Linked the model to STL export, slicing, G-code preparation and assembly.",
        "de": "Lua und IceSL für veränderliche Zahnradgeometrie. Verbindung von Modell, STL-Export, Slicing, G-Code-Vorbereitung und Montage."
      }
    },
    {
      "heading": {
        "en": "Result",
        "de": "Ergebnis"
      },
      "text": {
        "en": "A gear demonstrator, an 18-page technical report and a 14-page illustrated user guide.",
        "de": "Zahnrad-Demonstrator, 18-seitiger technischer Bericht und 14-seitiges illustriertes Handbuch."
      }
    }
  ]
};
