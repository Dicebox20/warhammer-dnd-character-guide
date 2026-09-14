window.CHARACTER_GUIDE = {
  "meta": {
    "title": "Warhammer D&D Character Creation & Advancement",
    "subtitle": "A calm, clickable player's guide for building and advancing a character",
    "version": "0.8.1",
    "rulesBaseline": "Foundry VTT v14 · D&D5e 5.3.3 · D&D 2024 baseline",
    "counts": {
      "species": 8,
      "speciesTraits": 37,
      "classes": 6,
      "subclasses": 20,
      "backgrounds": 16,
      "talents": 14,
      "features": 265
    }
  },
  "species": [
    {
      "id": "0c9ccc32e8a3e974",
      "name": "Ork",
      "kind": "Item",
      "campaignId": "species.ork",
      "status": "locked",
      "slug": "ork",
      "image": "images/species/species-ork.png",
      "identifier": "ork",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "77e5015d50aadec6",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.024",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Medium; Speed 30 ft.\n\nUses 2024 Orc chassis.",
          "speciesId": "species.ork"
        },
        {
          "id": "74b7dcd3de13fb92",
          "name": "Waaagh! Rush",
          "kind": "Item",
          "campaignId": "speciestrait.025",
          "status": "locked",
          "slug": "waaagh-rush",
          "description": "You can take the Dash action as a Bonus Action. When you do, you gain Temporary Hit Points equal to your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus, regaining uses on a Short or Long Rest.\n\nDirect 2024 Orc Adrenaline Rush translation.",
          "speciesId": "species.ork"
        },
        {
          "id": "7a5d5fea2dd194ba",
          "name": "Darkvision",
          "kind": "Item",
          "campaignId": "speciestrait.026",
          "status": "locked",
          "slug": "darkvision",
          "description": "You have Darkvision with a range of 120 feet.\n\nDirect 2024 Orc translation.",
          "speciesId": "species.ork"
        },
        {
          "id": "7c34ea140efcf796",
          "name": "Relentless Endurance",
          "kind": "Item",
          "campaignId": "speciestrait.027",
          "status": "locked",
          "slug": "relentless-endurance",
          "description": "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once used, you regain it after a Long Rest.\n\nDirect 2024 Orc translation.",
          "speciesId": "species.ork"
        }
      ]
    },
    {
      "id": "2a9808f78ed47c41",
      "name": "T'au",
      "kind": "Item",
      "campaignId": "species.tau",
      "status": "locked",
      "slug": "t-au",
      "image": "images/species/species-tau.png",
      "identifier": "tau",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "e1f729ab7a2022ec",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.033",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Medium; Speed 30 ft.\n\nBaseline humanoid chassis.",
          "speciesId": "species.tau"
        },
        {
          "id": "e7c8ab46347dda3b",
          "name": "Analytical Senses",
          "kind": "Item",
          "campaignId": "speciestrait.034",
          "status": "locked",
          "slug": "analytical-senses",
          "description": "Gain proficiency in Investigation.\n\nRepresents broad sensory/analytical aptitude without a blanket combat bonus.",
          "speciesId": "species.tau"
        },
        {
          "id": "fcb37abe29ae07eb",
          "name": "Keen Scent",
          "kind": "Item",
          "campaignId": "speciestrait.035",
          "status": "locked",
          "slug": "keen-scent",
          "description": "You have Advantage on Wisdom (Perception) checks that rely primarily on smell.\n\nLore-derived short-range olfactory strength.",
          "speciesId": "species.tau"
        },
        {
          "id": "3553883a35c7b532",
          "name": "Coordinated Training",
          "kind": "Item",
          "campaignId": "speciestrait.036",
          "status": "locked",
          "slug": "coordinated-training",
          "description": "You can take the Help action as a Bonus Action. You can do so a number of times equal to your Proficiency Bonus, regaining all expended uses when you finish a Long Rest.\n\nGreater-Good/teamwork identity in normal D&D action economy.",
          "speciesId": "species.tau"
        },
        {
          "id": "b209d333de4bc31e",
          "name": "Technical Familiarity",
          "kind": "Item",
          "campaignId": "speciestrait.037",
          "status": "locked",
          "slug": "technical-familiarity",
          "description": "Gain proficiency with one set of Artisan's Tools or one vehicle proficiency appropriate to your upbringing.\n\nBroad enough for multiple T'au castes; background remains the larger career package.",
          "speciesId": "species.tau"
        }
      ]
    },
    {
      "id": "3967ee22304135c5",
      "name": "Aeldari",
      "kind": "Item",
      "campaignId": "species.aeldari",
      "status": "locked",
      "slug": "aeldari",
      "image": "images/species/species-aeldari.png",
      "identifier": "aeldari",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "e251193931d64a45",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.014",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Medium; Speed 35 ft.\n\nHeightened speed is the main physical expression of Aeldari reflexes.",
          "speciesId": "species.aeldari"
        },
        {
          "id": "b32308874b9ccb7a",
          "name": "Darkvision",
          "kind": "Item",
          "campaignId": "speciestrait.015",
          "status": "locked",
          "slug": "darkvision",
          "description": "You have Darkvision with a range of 60 feet.\n\nLore-inspired low-light vision kept at standard D&D range.",
          "speciesId": "species.aeldari"
        },
        {
          "id": "073f91e64c5f72b7",
          "name": "Keen Senses",
          "kind": "Item",
          "campaignId": "speciestrait.016",
          "status": "locked",
          "slug": "keen-senses",
          "description": "Gain proficiency in Perception.\n\nElf-style translation.",
          "speciesId": "species.aeldari"
        },
        {
          "id": "e25a27a755d25d95",
          "name": "Trance",
          "kind": "Item",
          "campaignId": "speciestrait.017",
          "status": "locked",
          "slug": "trance",
          "description": "You don't need to sleep and can complete a Long Rest in 4 hours if you spend those hours in a meditative trance.\n\nElf-style translation.",
          "speciesId": "species.aeldari"
        },
        {
          "id": "2a544472e52b1623",
          "name": "Psychic Sensitivity",
          "kind": "Item",
          "campaignId": "speciestrait.018",
          "status": "locked",
          "slug": "psychic-sensitivity",
          "description": "You know the Minor Manipulation cantrip. Choose Intelligence, Wisdom, or Charisma as its ability when you select this species. This innate power does not make you a Psyker class character.\n\nRepresents the species' low-level psychic nature without making species a mini-class.",
          "speciesId": "species.aeldari"
        }
      ]
    },
    {
      "id": "5c72fe95def82e14",
      "name": "Human",
      "kind": "Item",
      "campaignId": "species.human",
      "status": "locked",
      "slug": "human",
      "image": "images/species/species-human.png",
      "identifier": "human",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "07206ea2a9ffa732",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.001",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Small or Medium (chosen at character creation); Speed 30 ft.\n\nDirect 2024 Human chassis profile.",
          "speciesId": "species.human"
        },
        {
          "id": "c4867985e94b5126",
          "name": "Resourceful",
          "kind": "Item",
          "campaignId": "speciestrait.002",
          "status": "locked",
          "slug": "resourceful",
          "description": "Gain Heroic Inspiration whenever you finish a Long Rest.\n\nDirect 2024 Human translation.",
          "speciesId": "species.human"
        },
        {
          "id": "d161a8bb7acb27e3",
          "name": "Skillful",
          "kind": "Item",
          "campaignId": "speciestrait.003",
          "status": "locked",
          "slug": "skillful",
          "description": "Gain proficiency in one skill of your choice.\n\nDirect 2024 Human translation.",
          "speciesId": "species.human"
        },
        {
          "id": "e66456b7a5417951",
          "name": "Versatile",
          "kind": "Item",
          "campaignId": "speciestrait.004",
          "status": "locked",
          "slug": "versatile",
          "description": "Gain one Origin feat of your choice.\n\nDirect 2024 Human translation.",
          "speciesId": "species.human"
        }
      ]
    },
    {
      "id": "5de64bb89eb684a0",
      "name": "Ratling",
      "kind": "Item",
      "campaignId": "species.ratling",
      "status": "locked",
      "slug": "ratling",
      "image": "images/species/species-ratling.png",
      "identifier": "ratling",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "1aee1092a304d2ab",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.009",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Small; Speed 30 ft.\n\nHalfling-scale chassis.",
          "speciesId": "species.ratling"
        },
        {
          "id": "1a256ff3a3efea73",
          "name": "Ratling Luck",
          "kind": "Item",
          "campaignId": "speciestrait.010",
          "status": "locked",
          "slug": "ratling-luck",
          "description": "When you roll a 1 on the d20 of a D20 Test, you can reroll the die and must use the new roll.\n\nDirect Halfling Luck translation.",
          "speciesId": "species.ratling"
        },
        {
          "id": "8a778bf173e0fa10",
          "name": "Ratling Nimbleness",
          "kind": "Item",
          "campaignId": "speciestrait.011",
          "status": "locked",
          "slug": "ratling-nimbleness",
          "description": "You can move through the space of a creature that is a size larger than you, though you can't stop there.\n\nDirect Halfling Nimbleness translation.",
          "speciesId": "species.ratling"
        },
        {
          "id": "3edfdee8f495a672",
          "name": "Naturally Stealthy",
          "kind": "Item",
          "campaignId": "speciestrait.012",
          "status": "locked",
          "slug": "naturally-stealthy",
          "description": "You can take the Hide action when obscured only by a creature at least one size larger than you.\n\nDirect Halfling translation.",
          "speciesId": "species.ratling"
        },
        {
          "id": "f7942ed103e495c0",
          "name": "Marksman's Eye",
          "kind": "Item",
          "campaignId": "speciestrait.013",
          "status": "locked",
          "slug": "marksman-s-eye",
          "description": "Gain proficiency in Perception.\n\nMarksman identity without granting free attack bonuses.",
          "speciesId": "species.ratling"
        }
      ]
    },
    {
      "id": "a9b41f388706e628",
      "name": "Drukhari",
      "kind": "Item",
      "campaignId": "species.drukhari",
      "status": "locked",
      "slug": "drukhari",
      "image": "images/species/species-drukhari.png",
      "identifier": "drukhari",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "2da70244b18fafcf",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.019",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Medium; Speed 35 ft.\n\nAeldari-derived physiology.",
          "speciesId": "species.drukhari"
        },
        {
          "id": "555fc90d330e5e1b",
          "name": "Superior Darkvision",
          "kind": "Item",
          "campaignId": "speciestrait.020",
          "status": "locked",
          "slug": "superior-darkvision",
          "description": "You have Darkvision with a range of 120 feet.\n\nRepresents adaptation to Commorragh's darkness.",
          "speciesId": "species.drukhari"
        },
        {
          "id": "904f29b9617baaa8",
          "name": "Keen Senses",
          "kind": "Item",
          "campaignId": "speciestrait.021",
          "status": "locked",
          "slug": "keen-senses",
          "description": "Gain proficiency in Perception.\n\nAeldari sensory acuity.",
          "speciesId": "species.drukhari"
        },
        {
          "id": "092815f4a884e7ca",
          "name": "Trance",
          "kind": "Item",
          "campaignId": "speciestrait.022",
          "status": "locked",
          "slug": "trance",
          "description": "You don't need to sleep and can complete a Long Rest in 4 hours if you spend those hours in a meditative trance.\n\nRetains shared Aeldari physiology.",
          "speciesId": "species.drukhari"
        },
        {
          "id": "7cf21ec1ef6f52b5",
          "name": "Predatory Agility",
          "kind": "Item",
          "campaignId": "speciestrait.023",
          "status": "locked",
          "slug": "predatory-agility",
          "description": "You can take the Disengage action as a Bonus Action. You can do so a number of times equal to your Proficiency Bonus, regaining all expended uses when you finish a Long Rest.\n\nReplaces innate psychic trait with a physical/reflex identity.",
          "speciesId": "species.drukhari"
        }
      ]
    },
    {
      "id": "d96ce899f5fac3d8",
      "name": "Ogryn",
      "kind": "Item",
      "campaignId": "species.ogryn",
      "status": "locked",
      "slug": "ogryn",
      "image": "images/species/species-ogryn.png",
      "identifier": "ogryn",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "2531e2bd627d3b20",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.005",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Medium; Speed 30 ft. Ogryns may be 8–10 ft tall but remain Medium for D&D grid/rules purposes.\n\nAvoids Large-PC reach/grid complications.",
          "speciesId": "species.ogryn"
        },
        {
          "id": "8861d4f846fbd654",
          "name": "Powerful Build",
          "kind": "Item",
          "campaignId": "speciestrait.006",
          "status": "locked",
          "slug": "powerful-build",
          "description": "You have Advantage on ability checks you make to end the Grappled condition. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.\n\n2024 Goliath-style translation.",
          "speciesId": "species.ogryn"
        },
        {
          "id": "b4c170eb41ecb8a8",
          "name": "Ogryn Toughness",
          "kind": "Item",
          "campaignId": "speciestrait.007",
          "status": "locked",
          "slug": "ogryn-toughness",
          "description": "Your Hit Point maximum increases by 1, and it increases by 1 whenever you gain a character level.\n\nDwarven Toughness-style durability.",
          "speciesId": "species.ogryn"
        },
        {
          "id": "50f96417eac6dd4e",
          "name": "Heavy Hands",
          "kind": "Item",
          "campaignId": "speciestrait.008",
          "status": "locked",
          "slug": "heavy-hands",
          "description": "Your damaging Unarmed Strike can deal 1d6 + your Strength modifier Bludgeoning damage. When you successfully Shove a creature, you can push it up to 10 feet instead of 5 feet if it is no more than one size larger than you.\n\nKeeps Ogryn physical identity without a separate Strength subsystem.",
          "speciesId": "species.ogryn"
        }
      ]
    },
    {
      "id": "fe37cb63acded8fc",
      "name": "Kroot",
      "kind": "Item",
      "campaignId": "species.kroot",
      "status": "locked",
      "slug": "kroot",
      "image": "images/species/species-kroot.png",
      "identifier": "kroot",
      "size": "med",
      "speed": 30,
      "description": "Playable core species.\n\nSpecies traits are granted through the native D&D5e Advancement workflow.",
      "compatibleClasses": [
        "Soldier",
        "Operative",
        "Psyker",
        "Tech-Adept",
        "Zealot",
        "Space Marine"
      ],
      "traits": [
        {
          "id": "5e8cc9c6462a6dff",
          "name": "Creature Profile",
          "kind": "Item",
          "campaignId": "speciestrait.028",
          "status": "locked",
          "slug": "creature-profile",
          "description": "Humanoid; Medium; Speed 35 ft.\n\nFast, wiry hunter chassis.",
          "speciesId": "species.kroot"
        },
        {
          "id": "137c279c8e7c54d8",
          "name": "Hunter's Senses",
          "kind": "Item",
          "campaignId": "speciestrait.029",
          "status": "locked",
          "slug": "hunter-s-senses",
          "description": "Gain proficiency in Survival.\n\nCore Kroot hunter identity.",
          "speciesId": "species.kroot"
        },
        {
          "id": "2a18a61946d92b45",
          "name": "Natural Hunter",
          "kind": "Item",
          "campaignId": "speciestrait.030",
          "status": "locked",
          "slug": "natural-hunter",
          "description": "Your damaging Unarmed Strike can deal 1d6 + your Strength modifier Piercing or Slashing damage (chosen each time) using beak, claws, or spurs.\n\nNatural weapon without custom attack engine.",
          "speciesId": "species.kroot"
        },
        {
          "id": "35924b9d6f30801a",
          "name": "Genetic Shaping",
          "kind": "Item",
          "campaignId": "speciestrait.031",
          "status": "locked",
          "slug": "genetic-shaping",
          "description": "Choose one adaptation at character creation: Stalker (Stealth proficiency), Tracker (Perception proficiency), or Brute (Powerful Build). This choice is normally permanent; changing it requires a story/downtime effect rather than daily food tracking.\n\nRepresents Kroot shaping without a per-rest genetic minigame.",
          "speciesId": "species.kroot"
        },
        {
          "id": "201e8f7fb8ae0461",
          "name": "Mimicry",
          "kind": "Item",
          "campaignId": "speciestrait.032",
          "status": "locked",
          "slug": "mimicry",
          "description": "After hearing a voice or non-language sound for at least 1 minute, you have Advantage on checks made to imitate that voice or sound.\n\nLore-inspired vocal mimicry; low mechanical weight.",
          "speciesId": "species.kroot"
        }
      ]
    }
  ],
  "classes": [
    {
      "id": "3202627272455094",
      "name": "Space Marine",
      "kind": "Item",
      "campaignId": "class.space_marine",
      "status": "locked",
      "slug": "space-marine",
      "image": "images/classes/class-space-marine.png",
      "identifier": "space-marine",
      "hitDie": "d12",
      "spellcasting": {
        "ability": "",
        "progression": "none",
        "preparation": "none"
      },
      "text": "Human-only normal level-1 Barbarian-based class; Integrated Power Armor AC = 10 + DEX + CON; Transhuman Frame counts as one size larger for carrying/push/drag/lift; Combat State supports defined eligible ranged weapons; Power Armor Upgrade capacity increases at levels 3/7/13/17.\n\nD&D5e chassis: Barbarian.\n\nPrimary ability: Strength.\n\nSubclass cadence: 3/6/10/14.\n\nRecommended pre-background array: STR 15, DEX 13, CON 15, INT 10, WIS 10, CHA 8.",
      "summary": "Human-only normal level-1 Barbarian-based class; Integrated Power Armor AC = 10 + DEX + CON; Transhuman Frame counts as one size larger for carrying/push/drag/lift; Combat State supports defined eligible ranged weapons; Power Armor Upgrade capacity increases at levels 3/7/13/17.",
      "chassis": "Barbarian",
      "primaryAbility": [
        "str"
      ],
      "subclassCadence": "3/6/10/14",
      "recommendedArray": "STR 15, DEX 13, CON 15, INT 10, WIS 10, CHA 8",
      "levels": [
        {
          "level": 1,
          "names": [
            "Hit Points",
            "Core Proficiencies",
            "Combat State",
            "Integrated Power Armor",
            "Weapon Mastery (2)",
            "Transhuman Frame"
          ],
          "features": [
            {
              "id": "911d478d396e9d12",
              "name": "Combat State",
              "level": 1,
              "status": "needs_review",
              "description": "Architecture locked; exact formula/eligibility/balance remains delegated or Needs Review.",
              "campaignId": "progression.class.space_marine.1.combat_state",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "fb2a40e79fb62214",
              "name": "Integrated Power Armor",
              "level": 1,
              "status": "locked",
              "description": "Intrinsic armor defense: AC = 10 + DEX modifier + CON modifier; does not stack with worn armor; no attunement; worn Integrated Power Armor does not count against carrying capacity.",
              "campaignId": "progression.class.space_marine.1.integrated_power_armor",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "991e32261317026a",
              "name": "Weapon Mastery (2)",
              "level": 1,
              "status": "locked",
              "description": "Two mastered weapon choices at class entry.",
              "campaignId": "progression.class.space_marine.1.weapon_mastery",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "601f5b074c3bf2f0",
              "name": "Transhuman Frame",
              "level": 1,
              "status": "locked",
              "description": "Counts as one size larger for carrying capacity and push/drag/lift. Space Marine remains Medium.",
              "campaignId": "progression.class.space_marine.1.transhuman_frame",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 1,
              "type": "HitPoints",
              "title": "Hit Points",
              "names": [
                "Hit Points"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "Trait",
              "title": "Core Proficiencies",
              "names": [
                "Core Proficiencies"
              ],
              "features": [],
              "choices": 2,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Combat State",
              "names": [
                "Combat State"
              ],
              "features": [
                {
                  "id": "911d478d396e9d12",
                  "name": "Combat State",
                  "level": 1,
                  "status": "needs_review",
                  "description": "Architecture locked; exact formula/eligibility/balance remains delegated or Needs Review.",
                  "campaignId": "progression.class.space_marine.1.combat_state",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Integrated Power Armor",
              "names": [
                "Integrated Power Armor"
              ],
              "features": [
                {
                  "id": "fb2a40e79fb62214",
                  "name": "Integrated Power Armor",
                  "level": 1,
                  "status": "locked",
                  "description": "Intrinsic armor defense: AC = 10 + DEX modifier + CON modifier; does not stack with worn armor; no attunement; worn Integrated Power Armor does not count against carrying capacity.",
                  "campaignId": "progression.class.space_marine.1.integrated_power_armor",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Weapon Mastery (2)",
              "names": [
                "Weapon Mastery (2)"
              ],
              "features": [
                {
                  "id": "991e32261317026a",
                  "name": "Weapon Mastery (2)",
                  "level": 1,
                  "status": "locked",
                  "description": "Two mastered weapon choices at class entry.",
                  "campaignId": "progression.class.space_marine.1.weapon_mastery",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Transhuman Frame",
              "names": [
                "Transhuman Frame"
              ],
              "features": [
                {
                  "id": "601f5b074c3bf2f0",
                  "name": "Transhuman Frame",
                  "level": 1,
                  "status": "locked",
                  "description": "Counts as one size larger for carrying capacity and push/drag/lift. Space Marine remains Medium.",
                  "campaignId": "progression.class.space_marine.1.transhuman_frame",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 2,
          "names": [
            "Aggressive Assault",
            "Threat Awareness"
          ],
          "features": [
            {
              "id": "6444f707d725849a",
              "name": "Aggressive Assault",
              "level": 2,
              "status": "needs_review",
              "description": "Architecture locked; exact formula/eligibility/balance remains delegated or Needs Review.",
              "campaignId": "progression.class.space_marine.2.aggressive_assault",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "529cc56c5dcd7e3d",
              "name": "Threat Awareness",
              "level": 2,
              "status": "needs_review",
              "description": "Danger Sense is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.2.threat_awareness",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Aggressive Assault",
              "names": [
                "Aggressive Assault"
              ],
              "features": [
                {
                  "id": "6444f707d725849a",
                  "name": "Aggressive Assault",
                  "level": 2,
                  "status": "needs_review",
                  "description": "Architecture locked; exact formula/eligibility/balance remains delegated or Needs Review.",
                  "campaignId": "progression.class.space_marine.2.aggressive_assault",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Threat Awareness",
              "names": [
                "Threat Awareness"
              ],
              "features": [
                {
                  "id": "529cc56c5dcd7e3d",
                  "name": "Threat Awareness",
                  "level": 2,
                  "status": "needs_review",
                  "description": "Danger Sense is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.2.threat_awareness",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 3,
          "names": [
            "Space Marine Subclass",
            "Transhuman Training",
            "Power Armor Upgrade I",
            "Power Armor Upgrades"
          ],
          "features": [
            {
              "id": "4769c718ffc4f6e8",
              "name": "Transhuman Training",
              "level": 3,
              "status": "needs_review",
              "description": "Primal Knowledge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.3.transhuman_training",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "e115c66c6f3d16d7",
              "name": "Power Armor Upgrade I",
              "level": 3,
              "status": "locked",
              "description": "Maximum active Power Armor Upgrades becomes 1. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
              "campaignId": "progression.class.space_marine.3.power_armor_upgrade_i",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "Subclass",
              "title": "Space Marine Subclass",
              "names": [
                "Space Marine Subclass"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Transhuman Training",
              "names": [
                "Transhuman Training"
              ],
              "features": [
                {
                  "id": "4769c718ffc4f6e8",
                  "name": "Transhuman Training",
                  "level": 3,
                  "status": "needs_review",
                  "description": "Primal Knowledge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.3.transhuman_training",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Power Armor Upgrade I",
              "names": [
                "Power Armor Upgrade I"
              ],
              "features": [
                {
                  "id": "e115c66c6f3d16d7",
                  "name": "Power Armor Upgrade I",
                  "level": 3,
                  "status": "locked",
                  "description": "Maximum active Power Armor Upgrades becomes 1. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
                  "campaignId": "progression.class.space_marine.3.power_armor_upgrade_i",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ScaleValue",
              "title": "Power Armor Upgrades",
              "names": [
                "Power Armor Upgrades"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [
            "Talent / Ability Score Improvement",
            "Weapon Mastery (3)"
          ],
          "features": [
            {
              "id": "170ec04b883dd8b2",
              "name": "Weapon Mastery (3)",
              "level": 4,
              "status": "locked",
              "description": "Increase mastered weapon choices to 3.",
              "campaignId": "progression.class.space_marine.4.weapon_mastery_3",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 4,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            },
            {
              "level": 4,
              "type": "ItemGrant",
              "title": "Weapon Mastery (3)",
              "names": [
                "Weapon Mastery (3)"
              ],
              "features": [
                {
                  "id": "170ec04b883dd8b2",
                  "name": "Weapon Mastery (3)",
                  "level": 4,
                  "status": "locked",
                  "description": "Increase mastered weapon choices to 3.",
                  "campaignId": "progression.class.space_marine.4.weapon_mastery_3",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 5,
          "names": [
            "Enhanced Mobility",
            "Extra Attack"
          ],
          "features": [
            {
              "id": "2d34a82ca53f4f7a",
              "name": "Enhanced Mobility",
              "level": 5,
              "status": "needs_review",
              "description": "Fast Movement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.5.enhanced_mobility",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "f3b2243d9fe1dfb3",
              "name": "Extra Attack",
              "level": 5,
              "status": "needs_review",
              "description": "Extra Attack is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.5.extra_attack",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Enhanced Mobility",
              "names": [
                "Enhanced Mobility"
              ],
              "features": [
                {
                  "id": "2d34a82ca53f4f7a",
                  "name": "Enhanced Mobility",
                  "level": 5,
                  "status": "needs_review",
                  "description": "Fast Movement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.5.enhanced_mobility",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Extra Attack",
              "names": [
                "Extra Attack"
              ],
              "features": [
                {
                  "id": "f3b2243d9fe1dfb3",
                  "name": "Extra Attack",
                  "level": 5,
                  "status": "needs_review",
                  "description": "Extra Attack is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.5.extra_attack",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 6,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [
            "Combat Reflexes",
            "Shock Advance",
            "Power Armor Upgrade II"
          ],
          "features": [
            {
              "id": "8a15ec21ae95e81d",
              "name": "Combat Reflexes",
              "level": 7,
              "status": "needs_review",
              "description": "Feral Instinct is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.7.combat_reflexes",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "6588c249c457425e",
              "name": "Shock Advance",
              "level": 7,
              "status": "needs_review",
              "description": "Instinctive Pounce is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.7.shock_advance",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "38f9e0ee56a1e754",
              "name": "Power Armor Upgrade II",
              "level": 7,
              "status": "locked",
              "description": "Maximum active Power Armor Upgrades becomes 2. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
              "campaignId": "progression.class.space_marine.7.power_armor_upgrade_ii",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Combat Reflexes",
              "names": [
                "Combat Reflexes"
              ],
              "features": [
                {
                  "id": "8a15ec21ae95e81d",
                  "name": "Combat Reflexes",
                  "level": 7,
                  "status": "needs_review",
                  "description": "Feral Instinct is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.7.combat_reflexes",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Shock Advance",
              "names": [
                "Shock Advance"
              ],
              "features": [
                {
                  "id": "6588c249c457425e",
                  "name": "Shock Advance",
                  "level": 7,
                  "status": "needs_review",
                  "description": "Instinctive Pounce is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.7.shock_advance",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Power Armor Upgrade II",
              "names": [
                "Power Armor Upgrade II"
              ],
              "features": [
                {
                  "id": "38f9e0ee56a1e754",
                  "name": "Power Armor Upgrade II",
                  "level": 7,
                  "status": "locked",
                  "description": "Maximum active Power Armor Upgrades becomes 2. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
                  "campaignId": "progression.class.space_marine.7.power_armor_upgrade_ii",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 8,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 9,
          "names": [
            "Combat State Damage +3",
            "Devastating Strike I"
          ],
          "features": [
            {
              "id": "8056d5b4af08f66d",
              "name": "Combat State Damage +3",
              "level": 9,
              "status": "needs_review",
              "description": "Rage Damage +3 is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.9.combat_state_damage_+3",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "00eab088902b0818",
              "name": "Devastating Strike I",
              "level": 9,
              "status": "needs_review",
              "description": "When you use Aggressive Assault, forgo its Advantage on one eligible STR-based melee or Astartes ranged attack on your turn. On hit deal +1d10 weapon damage and choose Forceful (push 15 ft, then you may move half Speed toward target without OA) or Hamstring (Speed -15 until start next turn). Eligible ranged attacks may be at any range, but Aggressive Assault itself only grants/forgoes Advantage for eligible ranged attacks within 30 ft.",
              "campaignId": "progression.class.space_marine.9.devastating_assault_i",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Combat State Damage +3",
              "names": [
                "Combat State Damage +3"
              ],
              "features": [
                {
                  "id": "8056d5b4af08f66d",
                  "name": "Combat State Damage +3",
                  "level": 9,
                  "status": "needs_review",
                  "description": "Rage Damage +3 is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.9.combat_state_damage_+3",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Devastating Strike I",
              "names": [
                "Devastating Strike I"
              ],
              "features": [
                {
                  "id": "00eab088902b0818",
                  "name": "Devastating Strike I",
                  "level": 9,
                  "status": "needs_review",
                  "description": "When you use Aggressive Assault, forgo its Advantage on one eligible STR-based melee or Astartes ranged attack on your turn. On hit deal +1d10 weapon damage and choose Forceful (push 15 ft, then you may move half Speed toward target without OA) or Hamstring (Speed -15 until start next turn). Eligible ranged attacks may be at any range, but Aggressive Assault itself only grants/forgoes Advantage for eligible ranged attacks within 30 ft.",
                  "campaignId": "progression.class.space_marine.9.devastating_assault_i",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [
            "Subclass Feature",
            "Weapon Mastery (4)"
          ],
          "features": [
            {
              "id": "4ff98927a58260a2",
              "name": "Weapon Mastery (4)",
              "level": 10,
              "status": "locked",
              "description": "Increase mastered weapon choices to 4.",
              "campaignId": "progression.class.space_marine.10.weapon_mastery_4",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Weapon Mastery (4)",
              "names": [
                "Weapon Mastery (4)"
              ],
              "features": [
                {
                  "id": "4ff98927a58260a2",
                  "name": "Weapon Mastery (4)",
                  "level": 10,
                  "status": "locked",
                  "description": "Increase mastered weapon choices to 4.",
                  "campaignId": "progression.class.space_marine.10.weapon_mastery_4",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [
            "Relentless Physiology"
          ],
          "features": [
            {
              "id": "eb98c4a1cfe80557",
              "name": "Relentless Physiology",
              "level": 11,
              "status": "needs_review",
              "description": "Relentless Rage is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.11.relentless_physiology",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "Relentless Physiology",
              "names": [
                "Relentless Physiology"
              ],
              "features": [
                {
                  "id": "eb98c4a1cfe80557",
                  "name": "Relentless Physiology",
                  "level": 11,
                  "status": "needs_review",
                  "description": "Relentless Rage is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.11.relentless_physiology",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 12,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 12,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 13,
          "names": [
            "Devastating Strike II",
            "Power Armor Upgrade III"
          ],
          "features": [
            {
              "id": "36c768f3194fd2c2",
              "name": "Devastating Strike II",
              "level": 13,
              "status": "needs_review",
              "description": "Gain Staggering (target has Disadvantage on next save and cannot make Opportunity Attacks until start next turn) and Sundering (next attack by another creature before your next turn gains +5) options. Damage remains +1d10.",
              "campaignId": "progression.class.space_marine.13.devastating_assault_ii",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "f7b952547af83e2f",
              "name": "Power Armor Upgrade III",
              "level": 13,
              "status": "locked",
              "description": "Maximum active Power Armor Upgrades becomes 3. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
              "campaignId": "progression.class.space_marine.13.power_armor_upgrade_iii",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Devastating Strike II",
              "names": [
                "Devastating Strike II"
              ],
              "features": [
                {
                  "id": "36c768f3194fd2c2",
                  "name": "Devastating Strike II",
                  "level": 13,
                  "status": "needs_review",
                  "description": "Gain Staggering (target has Disadvantage on next save and cannot make Opportunity Attacks until start next turn) and Sundering (next attack by another creature before your next turn gains +5) options. Damage remains +1d10.",
                  "campaignId": "progression.class.space_marine.13.devastating_assault_ii",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Power Armor Upgrade III",
              "names": [
                "Power Armor Upgrade III"
              ],
              "features": [
                {
                  "id": "f7b952547af83e2f",
                  "name": "Power Armor Upgrade III",
                  "level": 13,
                  "status": "locked",
                  "description": "Maximum active Power Armor Upgrades becomes 3. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
                  "campaignId": "progression.class.space_marine.13.power_armor_upgrade_iii",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 14,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [
            "Persistent Combat State"
          ],
          "features": [
            {
              "id": "6ad1982596930e1c",
              "name": "Persistent Combat State",
              "level": 15,
              "status": "needs_review",
              "description": "Persistent Rage is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.15.persistent_combat_state",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Persistent Combat State",
              "names": [
                "Persistent Combat State"
              ],
              "features": [
                {
                  "id": "6ad1982596930e1c",
                  "name": "Persistent Combat State",
                  "level": 15,
                  "status": "needs_review",
                  "description": "Persistent Rage is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.15.persistent_combat_state",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [
            "Combat State Damage +4",
            "Talent / Ability Score Improvement"
          ],
          "features": [
            {
              "id": "816c1a3231bd0ef4",
              "name": "Combat State Damage +4",
              "level": 16,
              "status": "needs_review",
              "description": "Rage Damage +4 is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.16.combat_state_damage_+4",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 16,
              "type": "ItemGrant",
              "title": "Combat State Damage +4",
              "names": [
                "Combat State Damage +4"
              ],
              "features": [
                {
                  "id": "816c1a3231bd0ef4",
                  "name": "Combat State Damage +4",
                  "level": 16,
                  "status": "needs_review",
                  "description": "Rage Damage +4 is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.16.combat_state_damage_+4",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 16,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 17,
          "names": [
            "Devastating Strike III",
            "Power Armor Upgrade IV"
          ],
          "features": [
            {
              "id": "f594e32b34952f1b",
              "name": "Devastating Strike III",
              "level": 17,
              "status": "needs_review",
              "description": "Extra damage becomes +2d10 and you may apply two different Devastating Strike effects on the same qualifying hit.",
              "campaignId": "progression.class.space_marine.17.devastating_assault_iii",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            },
            {
              "id": "6ddb4a0120a9b8cf",
              "name": "Power Armor Upgrade IV",
              "level": 17,
              "status": "locked",
              "description": "Maximum active Power Armor Upgrades becomes 4. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
              "campaignId": "progression.class.space_marine.17.power_armor_upgrade_iv",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Devastating Strike III",
              "names": [
                "Devastating Strike III"
              ],
              "features": [
                {
                  "id": "f594e32b34952f1b",
                  "name": "Devastating Strike III",
                  "level": 17,
                  "status": "needs_review",
                  "description": "Extra damage becomes +2d10 and you may apply two different Devastating Strike effects on the same qualifying hit.",
                  "campaignId": "progression.class.space_marine.17.devastating_assault_iii",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Power Armor Upgrade IV",
              "names": [
                "Power Armor Upgrade IV"
              ],
              "features": [
                {
                  "id": "6ddb4a0120a9b8cf",
                  "name": "Power Armor Upgrade IV",
                  "level": 17,
                  "status": "locked",
                  "description": "Maximum active Power Armor Upgrades becomes 4. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
                  "campaignId": "progression.class.space_marine.17.power_armor_upgrade_iv",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [
            "Transhuman Might"
          ],
          "features": [
            {
              "id": "b331625e9ce50605",
              "name": "Transhuman Might",
              "level": 18,
              "status": "needs_review",
              "description": "Indomitable Might is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.18.transhuman_might",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Transhuman Might",
              "names": [
                "Transhuman Might"
              ],
              "features": [
                {
                  "id": "b331625e9ce50605",
                  "name": "Transhuman Might",
                  "level": 18,
                  "status": "needs_review",
                  "description": "Indomitable Might is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.18.transhuman_might",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [
            "Epic Boon — choose a native or Warhammer alias"
          ],
          "features": [],
          "entries": [
            {
              "level": 19,
              "type": "ItemChoice",
              "title": "Epic Boon — choose a native or Warhammer alias",
              "names": [
                "Epic Boon — choose a native or Warhammer alias"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            }
          ]
        },
        {
          "level": 20,
          "names": [
            "Gene-Forged Paragon"
          ],
          "features": [
            {
              "id": "e0dca5957a243437",
              "name": "Gene-Forged Paragon",
              "level": 20,
              "status": "needs_review",
              "description": "Primal Champion is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.space_marine.20.gene_forged_paragon",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Gene-Forged Paragon",
              "names": [
                "Gene-Forged Paragon"
              ],
              "features": [
                {
                  "id": "e0dca5957a243437",
                  "name": "Gene-Forged Paragon",
                  "level": 20,
                  "status": "needs_review",
                  "description": "Primal Champion is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.space_marine.20.gene_forged_paragon",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "subclassIds": [
        "subclass.space_marine.assault",
        "subclass.space_marine.bulwark",
        "subclass.space_marine.commander",
        "subclass.space_marine.heavy"
      ],
      "advancementCount": 38
    },
    {
      "id": "3643a30c4f5f22bf",
      "name": "Operative",
      "kind": "Item",
      "campaignId": "class.operative",
      "status": "locked",
      "slug": "operative",
      "image": "images/classes/class-operative.png",
      "identifier": "operative",
      "hitDie": "d8",
      "spellcasting": {
        "ability": "",
        "progression": "none",
        "preparation": "none"
      },
      "text": "Precision damage, skills, infiltration, sabotage.\n\nD&D5e chassis: Rogue.\n\nPrimary ability: Dexterity.\n\nSubclass cadence: 3/9/13/17.\n\nRecommended pre-background array: STR 8, DEX 15, CON 13, INT 14, WIS 12, CHA 10.",
      "summary": "Precision damage, skills, infiltration, sabotage.",
      "chassis": "Rogue",
      "primaryAbility": [
        "dex"
      ],
      "subclassCadence": "3/9/13/17",
      "recommendedArray": "STR 8, DEX 15, CON 13, INT 14, WIS 12, CHA 10",
      "levels": [
        {
          "level": 1,
          "names": [
            "Hit Points",
            "Core Proficiencies",
            "Expertise",
            "Sneak Attack",
            "Underworld Cant",
            "Weapon Mastery"
          ],
          "features": [
            {
              "id": "15c5317121365b16",
              "name": "Expertise",
              "level": 1,
              "status": "needs_review",
              "description": "Expertise is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.1.expertise",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            },
            {
              "id": "ca75e62ff0721024",
              "name": "Sneak Attack",
              "level": 1,
              "status": "needs_review",
              "description": "Normal 2024 Rogue Sneak Attack qualification and 1d6→10d6 scaling. Do not add a separate qualification subsystem.",
              "campaignId": "progression.class.operative.1.sneak_attack",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            },
            {
              "id": "e30ee2e8d0e8da5a",
              "name": "Underworld Cant",
              "level": 1,
              "status": "needs_review",
              "description": "Thieves' Cant is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.1.underworld_cant",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            },
            {
              "id": "666b50ba4c88afc1",
              "name": "Weapon Mastery",
              "level": 1,
              "status": "needs_review",
              "description": "Weapon Mastery is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.1.weapon_mastery",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 1,
              "type": "HitPoints",
              "title": "Hit Points",
              "names": [
                "Hit Points"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "Trait",
              "title": "Core Proficiencies",
              "names": [
                "Core Proficiencies"
              ],
              "features": [],
              "choices": 4,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Expertise",
              "names": [
                "Expertise"
              ],
              "features": [
                {
                  "id": "15c5317121365b16",
                  "name": "Expertise",
                  "level": 1,
                  "status": "needs_review",
                  "description": "Expertise is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.1.expertise",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Sneak Attack",
              "names": [
                "Sneak Attack"
              ],
              "features": [
                {
                  "id": "ca75e62ff0721024",
                  "name": "Sneak Attack",
                  "level": 1,
                  "status": "needs_review",
                  "description": "Normal 2024 Rogue Sneak Attack qualification and 1d6→10d6 scaling. Do not add a separate qualification subsystem.",
                  "campaignId": "progression.class.operative.1.sneak_attack",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Underworld Cant",
              "names": [
                "Underworld Cant"
              ],
              "features": [
                {
                  "id": "e30ee2e8d0e8da5a",
                  "name": "Underworld Cant",
                  "level": 1,
                  "status": "needs_review",
                  "description": "Thieves' Cant is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.1.underworld_cant",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Weapon Mastery",
              "names": [
                "Weapon Mastery"
              ],
              "features": [
                {
                  "id": "666b50ba4c88afc1",
                  "name": "Weapon Mastery",
                  "level": 1,
                  "status": "needs_review",
                  "description": "Weapon Mastery is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.1.weapon_mastery",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ScaleValue",
              "title": "Sneak Attack",
              "names": [
                "Sneak Attack"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 2,
          "names": [
            "Evasive Movement"
          ],
          "features": [
            {
              "id": "9e42a73a136a1eb4",
              "name": "Evasive Movement",
              "level": 2,
              "status": "needs_review",
              "description": "Cunning Action is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.2.evasive_movement",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Evasive Movement",
              "names": [
                "Evasive Movement"
              ],
              "features": [
                {
                  "id": "9e42a73a136a1eb4",
                  "name": "Evasive Movement",
                  "level": 2,
                  "status": "needs_review",
                  "description": "Cunning Action is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.2.evasive_movement",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 3,
          "names": [
            "Operative Specialization",
            "Target Acquisition"
          ],
          "features": [
            {
              "id": "83e6a8d68d3ca23e",
              "name": "Operative Specialization",
              "level": 3,
              "status": "needs_review",
              "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.3.operative_specialization",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            },
            {
              "id": "69e105dd00d5f7de",
              "name": "Target Acquisition",
              "level": 3,
              "status": "locked",
              "description": "Player-facing Target Acquisition; mechanically native 2024 Steady Aim.",
              "campaignId": "progression.class.operative.3.target_acquisition",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Operative Specialization",
              "names": [
                "Operative Specialization"
              ],
              "features": [
                {
                  "id": "83e6a8d68d3ca23e",
                  "name": "Operative Specialization",
                  "level": 3,
                  "status": "needs_review",
                  "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.3.operative_specialization",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Target Acquisition",
              "names": [
                "Target Acquisition"
              ],
              "features": [
                {
                  "id": "69e105dd00d5f7de",
                  "name": "Target Acquisition",
                  "level": 3,
                  "status": "locked",
                  "description": "Player-facing Target Acquisition; mechanically native 2024 Steady Aim.",
                  "campaignId": "progression.class.operative.3.target_acquisition",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 4,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 5,
          "names": [
            "Evasive Reflexes",
            "Exploit Weakness"
          ],
          "features": [
            {
              "id": "3940bcdde599d37b",
              "name": "Evasive Reflexes",
              "level": 5,
              "status": "needs_review",
              "description": "Uncanny Dodge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.5.evasive_reflexes",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            },
            {
              "id": "21656e0035591dc9",
              "name": "Exploit Weakness",
              "level": 5,
              "status": "needs_review",
              "description": "Sneak Attack qualification/Exploit option minutiae remain Needs Review.",
              "campaignId": "progression.class.operative.5.exploit_weakness",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Evasive Reflexes",
              "names": [
                "Evasive Reflexes"
              ],
              "features": [
                {
                  "id": "3940bcdde599d37b",
                  "name": "Evasive Reflexes",
                  "level": 5,
                  "status": "needs_review",
                  "description": "Uncanny Dodge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.5.evasive_reflexes",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Exploit Weakness",
              "names": [
                "Exploit Weakness"
              ],
              "features": [
                {
                  "id": "21656e0035591dc9",
                  "name": "Exploit Weakness",
                  "level": 5,
                  "status": "needs_review",
                  "description": "Sneak Attack qualification/Exploit option minutiae remain Needs Review.",
                  "campaignId": "progression.class.operative.5.exploit_weakness",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [
            "Expertise II"
          ],
          "features": [
            {
              "id": "5c9d8d144f20ac75",
              "name": "Expertise II",
              "level": 6,
              "status": "needs_review",
              "description": "Expertise (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.6.expertise_ii",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Expertise II",
              "names": [
                "Expertise II"
              ],
              "features": [
                {
                  "id": "5c9d8d144f20ac75",
                  "name": "Expertise II",
                  "level": 6,
                  "status": "needs_review",
                  "description": "Expertise (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.6.expertise_ii",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [
            "Evasion",
            "Professional Expertise"
          ],
          "features": [
            {
              "id": "4c3d4c810522a1ad",
              "name": "Evasion",
              "level": 7,
              "status": "needs_review",
              "description": "Evasion is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.7.evasion",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            },
            {
              "id": "8448fcc34ad7651a",
              "name": "Professional Expertise",
              "level": 7,
              "status": "needs_review",
              "description": "Reliable Talent is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.7.professional_expertise",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Evasion",
              "names": [
                "Evasion"
              ],
              "features": [
                {
                  "id": "4c3d4c810522a1ad",
                  "name": "Evasion",
                  "level": 7,
                  "status": "needs_review",
                  "description": "Evasion is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.7.evasion",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Professional Expertise",
              "names": [
                "Professional Expertise"
              ],
              "features": [
                {
                  "id": "8448fcc34ad7651a",
                  "name": "Professional Expertise",
                  "level": 7,
                  "status": "needs_review",
                  "description": "Reliable Talent is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.7.professional_expertise",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 8,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 9,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 9,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 10,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 11,
          "names": [
            "Improved Exploit Weakness"
          ],
          "features": [
            {
              "id": "db19f318dbd31a42",
              "name": "Improved Exploit Weakness",
              "level": 11,
              "status": "needs_review",
              "description": "Improved Cunning Strike is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.11.improved_exploit_weakness",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "Improved Exploit Weakness",
              "names": [
                "Improved Exploit Weakness"
              ],
              "features": [
                {
                  "id": "db19f318dbd31a42",
                  "name": "Improved Exploit Weakness",
                  "level": 11,
                  "status": "needs_review",
                  "description": "Improved Cunning Strike is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.11.improved_exploit_weakness",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 12,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 12,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 13,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 13,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [
            "Advanced Exploits"
          ],
          "features": [
            {
              "id": "791ed3e5c6d2d11a",
              "name": "Advanced Exploits",
              "level": 14,
              "status": "needs_review",
              "description": "Devious Strikes is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.14.advanced_exploits",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Advanced Exploits",
              "names": [
                "Advanced Exploits"
              ],
              "features": [
                {
                  "id": "791ed3e5c6d2d11a",
                  "name": "Advanced Exploits",
                  "level": 14,
                  "status": "needs_review",
                  "description": "Devious Strikes is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.14.advanced_exploits",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [
            "Mental Conditioning"
          ],
          "features": [
            {
              "id": "cd686097442b74fd",
              "name": "Mental Conditioning",
              "level": 15,
              "status": "needs_review",
              "description": "Slippery Mind is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.15.mental_conditioning",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Mental Conditioning",
              "names": [
                "Mental Conditioning"
              ],
              "features": [
                {
                  "id": "cd686097442b74fd",
                  "name": "Mental Conditioning",
                  "level": 15,
                  "status": "needs_review",
                  "description": "Slippery Mind is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.15.mental_conditioning",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 16,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 17,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 17,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [
            "Combat Elusiveness"
          ],
          "features": [
            {
              "id": "e5dafb02391bfae6",
              "name": "Combat Elusiveness",
              "level": 18,
              "status": "needs_review",
              "description": "Elusive is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.18.combat_elusiveness",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Combat Elusiveness",
              "names": [
                "Combat Elusiveness"
              ],
              "features": [
                {
                  "id": "e5dafb02391bfae6",
                  "name": "Combat Elusiveness",
                  "level": 18,
                  "status": "needs_review",
                  "description": "Elusive is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.18.combat_elusiveness",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [
            "Epic Boon — choose a native or Warhammer alias"
          ],
          "features": [],
          "entries": [
            {
              "level": 19,
              "type": "ItemChoice",
              "title": "Epic Boon — choose a native or Warhammer alias",
              "names": [
                "Epic Boon — choose a native or Warhammer alias"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            }
          ]
        },
        {
          "level": 20,
          "names": [
            "Perfect Execution"
          ],
          "features": [
            {
              "id": "05472dc674a8d6fa",
              "name": "Perfect Execution",
              "level": 20,
              "status": "needs_review",
              "description": "Stroke of Luck is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.operative.20.perfect_execution",
              "ownerClassId": "class.operative",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Perfect Execution",
              "names": [
                "Perfect Execution"
              ],
              "features": [
                {
                  "id": "05472dc674a8d6fa",
                  "name": "Perfect Execution",
                  "level": 20,
                  "status": "needs_review",
                  "description": "Stroke of Luck is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.operative.20.perfect_execution",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "subclassIds": [
        "subclass.operative.assassin",
        "subclass.operative.blade_master",
        "subclass.operative.infiltrator"
      ],
      "advancementCount": 29
    },
    {
      "id": "787f91672c252e07",
      "name": "Tech-Adept",
      "kind": "Item",
      "campaignId": "class.tech_adept",
      "status": "locked",
      "slug": "tech-adept",
      "image": "images/classes/class-tech-adept.png",
      "identifier": "tech-adept",
      "hitDie": "d8",
      "spellcasting": {
        "ability": "int",
        "progression": "full",
        "preparation": "prepared"
      },
      "text": "Artificer-based d8 prepared full caster. Tech Upgrades are infusion-style enhancements with no rarity; active capacity 1/2/3/4. No base Extra Attack.\n\nD&D5e chassis: Revised Artificer with full-caster spell-slot progression.\n\nPrimary ability: Intelligence.\n\nSubclass cadence: 3/5/9/15.\n\nRecommended pre-background array: STR 10, DEX 12, CON 13, INT 15, WIS 14, CHA 8.",
      "summary": "Artificer-based d8 prepared full caster.",
      "chassis": "Revised Artificer with full-caster spell-slot progression",
      "primaryAbility": [
        "int"
      ],
      "subclassCadence": "3/5/9/15",
      "recommendedArray": "STR 10, DEX 12, CON 13, INT 15, WIS 14, CHA 8",
      "levels": [
        {
          "level": 1,
          "names": [
            "Hit Points",
            "Core Proficiencies",
            "Tech Abilities",
            "Technical Aptitude"
          ],
          "features": [
            {
              "id": "da0fa9b49aafe56b",
              "name": "Tech Abilities",
              "level": 1,
              "status": "locked",
              "description": "INT prepared technological abilities; standard full-caster slots through 9th level. Prepare after Long Rest; subclass-exclusive Tech Abilities are always prepared.",
              "campaignId": "progression.class.tech_adept.1.tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "51908f124a8c8645",
              "name": "Technical Aptitude",
              "level": 1,
              "status": "locked",
              "description": "Gain Tech/Tinker’s Tools proficiency (or another Artisan Tool if already proficient) and use Tech/Tinker’s Tools or a suitable technological device as the focus for Tech Abilities.",
              "campaignId": "progression.class.tech_adept.1.technical_aptitude",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 1,
              "type": "HitPoints",
              "title": "Hit Points",
              "names": [
                "Hit Points"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "Trait",
              "title": "Core Proficiencies",
              "names": [
                "Core Proficiencies"
              ],
              "features": [],
              "choices": 2,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Tech Abilities",
              "names": [
                "Tech Abilities"
              ],
              "features": [
                {
                  "id": "da0fa9b49aafe56b",
                  "name": "Tech Abilities",
                  "level": 1,
                  "status": "locked",
                  "description": "INT prepared technological abilities; standard full-caster slots through 9th level. Prepare after Long Rest; subclass-exclusive Tech Abilities are always prepared.",
                  "campaignId": "progression.class.tech_adept.1.tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Technical Aptitude",
              "names": [
                "Technical Aptitude"
              ],
              "features": [
                {
                  "id": "51908f124a8c8645",
                  "name": "Technical Aptitude",
                  "level": 1,
                  "status": "locked",
                  "description": "Gain Tech/Tinker’s Tools proficiency (or another Artisan Tool if already proficient) and use Tech/Tinker’s Tools or a suitable technological device as the focus for Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.1.technical_aptitude",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 2,
          "names": [
            "Tech Upgrades"
          ],
          "features": [
            {
              "id": "9788f288e103a228",
              "name": "Tech Upgrades",
              "level": 2,
              "status": "locked",
              "description": "Learn 4 Tech Upgrades and maintain 1 active. They are class-granted enhancements applied to compatible existing equipment; they have no rarity and never create/replicate inventory equipment. Reassign active upgrades after a Long Rest.",
              "campaignId": "progression.class.tech_adept.2.tech_upgrades",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Tech Upgrades",
              "names": [
                "Tech Upgrades"
              ],
              "features": [
                {
                  "id": "9788f288e103a228",
                  "name": "Tech Upgrades",
                  "level": 2,
                  "status": "locked",
                  "description": "Learn 4 Tech Upgrades and maintain 1 active. They are class-granted enhancements applied to compatible existing equipment; they have no rarity and never create/replicate inventory equipment. Reassign active upgrades after a Long Rest.",
                  "campaignId": "progression.class.tech_adept.2.tech_upgrades",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ScaleValue",
              "title": "Tech Upgrades",
              "names": [
                "Tech Upgrades"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 3,
          "names": [
            "Tech-Adept Specialization",
            "2nd-level Tech Abilities"
          ],
          "features": [
            {
              "id": "8d03f4659a9b18a6",
              "name": "2nd-level Tech Abilities",
              "level": 3,
              "status": "locked",
              "description": "Unlock level-2 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.3.2nd_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "Subclass",
              "title": "Tech-Adept Specialization",
              "names": [
                "Tech-Adept Specialization"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "2nd-level Tech Abilities",
              "names": [
                "2nd-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "8d03f4659a9b18a6",
                  "name": "2nd-level Tech Abilities",
                  "level": 3,
                  "status": "locked",
                  "description": "Unlock level-2 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.3.2nd_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 4,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 5,
          "names": [
            "3rd-level Tech Abilities",
            "Subclass Feature"
          ],
          "features": [
            {
              "id": "792729df48cacf49",
              "name": "3rd-level Tech Abilities",
              "level": 5,
              "status": "locked",
              "description": "Unlock level-3 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.5.3rd_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "3rd-level Tech Abilities",
              "names": [
                "3rd-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "792729df48cacf49",
                  "name": "3rd-level Tech Abilities",
                  "level": 5,
                  "status": "locked",
                  "description": "Unlock level-3 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.5.3rd_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 5,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [
            "Technical Expertise",
            "Tech Upgrades II"
          ],
          "features": [
            {
              "id": "459083b3771844d6",
              "name": "Technical Expertise",
              "level": 6,
              "status": "locked",
              "description": "Double PB for ability checks made with tools in which you are proficient.",
              "campaignId": "progression.class.tech_adept.6.technical_expertise",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "de4e624f67195b95",
              "name": "Tech Upgrades II",
              "level": 6,
              "status": "locked",
              "description": "Tech Upgrades known increases to 6; active capacity increases to 2.",
              "campaignId": "progression.class.tech_adept.6.tech_upgrades_ii",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Technical Expertise",
              "names": [
                "Technical Expertise"
              ],
              "features": [
                {
                  "id": "459083b3771844d6",
                  "name": "Technical Expertise",
                  "level": 6,
                  "status": "locked",
                  "description": "Double PB for ability checks made with tools in which you are proficient.",
                  "campaignId": "progression.class.tech_adept.6.technical_expertise",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Tech Upgrades II",
              "names": [
                "Tech Upgrades II"
              ],
              "features": [
                {
                  "id": "de4e624f67195b95",
                  "name": "Tech Upgrades II",
                  "level": 6,
                  "status": "locked",
                  "description": "Tech Upgrades known increases to 6; active capacity increases to 2.",
                  "campaignId": "progression.class.tech_adept.6.tech_upgrades_ii",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [
            "Tactical Calculation",
            "4th-level Tech Abilities"
          ],
          "features": [
            {
              "id": "3452ac84126e8fa3",
              "name": "Tactical Calculation",
              "level": 7,
              "status": "locked",
              "description": "When you or a creature you can see within 30 ft makes an ability check or saving throw, use your Reaction to add your INT modifier to the roll after seeing the d20 but before the outcome is resolved. Uses = INT modifier (minimum 1) per Long Rest.",
              "campaignId": "progression.class.tech_adept.7.tactical_calculation",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "2ebab3c8b88d0690",
              "name": "4th-level Tech Abilities",
              "level": 7,
              "status": "locked",
              "description": "Unlock level-4 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.7.4th_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Tactical Calculation",
              "names": [
                "Tactical Calculation"
              ],
              "features": [
                {
                  "id": "3452ac84126e8fa3",
                  "name": "Tactical Calculation",
                  "level": 7,
                  "status": "locked",
                  "description": "When you or a creature you can see within 30 ft makes an ability check or saving throw, use your Reaction to add your INT modifier to the roll after seeing the d20 but before the outcome is resolved. Uses = INT modifier (minimum 1) per Long Rest.",
                  "campaignId": "progression.class.tech_adept.7.tactical_calculation",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "4th-level Tech Abilities",
              "names": [
                "4th-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "2ebab3c8b88d0690",
                  "name": "4th-level Tech Abilities",
                  "level": 7,
                  "status": "locked",
                  "description": "Unlock level-4 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.7.4th_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 8,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 9,
          "names": [
            "5th-level Tech Abilities",
            "Subclass Feature"
          ],
          "features": [
            {
              "id": "7c38d1e9ac87b43f",
              "name": "5th-level Tech Abilities",
              "level": 9,
              "status": "locked",
              "description": "Unlock level-5 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.9.5th_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "5th-level Tech Abilities",
              "names": [
                "5th-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "7c38d1e9ac87b43f",
                  "name": "5th-level Tech Abilities",
                  "level": 9,
                  "status": "locked",
                  "description": "Unlock level-5 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.9.5th_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 9,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [
            "Expanded Attunement I",
            "Tech Upgrades III"
          ],
          "features": [
            {
              "id": "f1f4369c826af4ec",
              "name": "Expanded Attunement I",
              "level": 10,
              "status": "locked",
              "description": "Maximum attuned items becomes 4.",
              "campaignId": "progression.class.tech_adept.10.expanded_attunement_i",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "5f91506fa7c6957d",
              "name": "Tech Upgrades III",
              "level": 10,
              "status": "locked",
              "description": "Tech Upgrades known increases to 8; active capacity increases to 3.",
              "campaignId": "progression.class.tech_adept.10.tech_upgrades_iii",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Expanded Attunement I",
              "names": [
                "Expanded Attunement I"
              ],
              "features": [
                {
                  "id": "f1f4369c826af4ec",
                  "name": "Expanded Attunement I",
                  "level": 10,
                  "status": "locked",
                  "description": "Maximum attuned items becomes 4.",
                  "campaignId": "progression.class.tech_adept.10.expanded_attunement_i",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Tech Upgrades III",
              "names": [
                "Tech Upgrades III"
              ],
              "features": [
                {
                  "id": "5f91506fa7c6957d",
                  "name": "Tech Upgrades III",
                  "level": 10,
                  "status": "locked",
                  "description": "Tech Upgrades known increases to 8; active capacity increases to 3.",
                  "campaignId": "progression.class.tech_adept.10.tech_upgrades_iii",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [
            "Stored Protocol",
            "6th-level Tech Abilities"
          ],
          "features": [
            {
              "id": "73bb08dae311c38d",
              "name": "Stored Protocol",
              "level": 11,
              "status": "locked",
              "description": "After a Long Rest, store one prepared 1st-level Tech Ability with an Action or Bonus Action casting time in a Tiny object/device. A creature holding it may activate the stored ability using its normal activation; the device uses your Tech Ability attack/DC and has PB uses, restored when you reconfigure it after a Long Rest. Only one Stored Protocol device may exist at a time.",
              "campaignId": "progression.class.tech_adept.11.stored_protocol",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "fe0f64cf38636649",
              "name": "6th-level Tech Abilities",
              "level": 11,
              "status": "locked",
              "description": "Unlock level-6 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.11.6th_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "Stored Protocol",
              "names": [
                "Stored Protocol"
              ],
              "features": [
                {
                  "id": "73bb08dae311c38d",
                  "name": "Stored Protocol",
                  "level": 11,
                  "status": "locked",
                  "description": "After a Long Rest, store one prepared 1st-level Tech Ability with an Action or Bonus Action casting time in a Tiny object/device. A creature holding it may activate the stored ability using its normal activation; the device uses your Tech Ability attack/DC and has PB uses, restored when you reconfigure it after a Long Rest. Only one Stored Protocol device may exist at a time.",
                  "campaignId": "progression.class.tech_adept.11.stored_protocol",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "6th-level Tech Abilities",
              "names": [
                "6th-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "fe0f64cf38636649",
                  "name": "6th-level Tech Abilities",
                  "level": 11,
                  "status": "locked",
                  "description": "Unlock level-6 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.11.6th_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 12,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 12,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 13,
          "names": [
            "7th-level Tech Abilities"
          ],
          "features": [
            {
              "id": "e2483251daa8a944",
              "name": "7th-level Tech Abilities",
              "level": 13,
              "status": "locked",
              "description": "Unlock level-7 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.13.7th_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "7th-level Tech Abilities",
              "names": [
                "7th-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "e2483251daa8a944",
                  "name": "7th-level Tech Abilities",
                  "level": 13,
                  "status": "locked",
                  "description": "Unlock level-7 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.13.7th_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [
            "Expanded Attunement II",
            "Tech Upgrades IV"
          ],
          "features": [
            {
              "id": "6714878d98fe972a",
              "name": "Expanded Attunement II",
              "level": 14,
              "status": "locked",
              "description": "Maximum attuned items becomes 5.",
              "campaignId": "progression.class.tech_adept.14.expanded_attunement_ii",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "54d32589ef474d19",
              "name": "Tech Upgrades IV",
              "level": 14,
              "status": "locked",
              "description": "Tech Upgrades known increases to 10; active capacity increases to 4.",
              "campaignId": "progression.class.tech_adept.14.tech_upgrades_iv",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Expanded Attunement II",
              "names": [
                "Expanded Attunement II"
              ],
              "features": [
                {
                  "id": "6714878d98fe972a",
                  "name": "Expanded Attunement II",
                  "level": 14,
                  "status": "locked",
                  "description": "Maximum attuned items becomes 5.",
                  "campaignId": "progression.class.tech_adept.14.expanded_attunement_ii",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Tech Upgrades IV",
              "names": [
                "Tech Upgrades IV"
              ],
              "features": [
                {
                  "id": "54d32589ef474d19",
                  "name": "Tech Upgrades IV",
                  "level": 14,
                  "status": "locked",
                  "description": "Tech Upgrades known increases to 10; active capacity increases to 4.",
                  "campaignId": "progression.class.tech_adept.14.tech_upgrades_iv",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [
            "8th-level Tech Abilities",
            "Subclass Feature"
          ],
          "features": [
            {
              "id": "b07b4ab171d3ee2e",
              "name": "8th-level Tech Abilities",
              "level": 15,
              "status": "locked",
              "description": "Unlock level-8 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.15.8th_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "8th-level Tech Abilities",
              "names": [
                "8th-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "b07b4ab171d3ee2e",
                  "name": "8th-level Tech Abilities",
                  "level": 15,
                  "status": "locked",
                  "description": "Unlock level-8 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.15.8th_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 15,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 16,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 17,
          "names": [
            "9th-level Tech Abilities"
          ],
          "features": [
            {
              "id": "d9c94faf7758c2f3",
              "name": "9th-level Tech Abilities",
              "level": 17,
              "status": "locked",
              "description": "Unlock level-9 Tech Abilities.",
              "campaignId": "progression.class.tech_adept.17.9th_level_tech_abilities",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "9th-level Tech Abilities",
              "names": [
                "9th-level Tech Abilities"
              ],
              "features": [
                {
                  "id": "d9c94faf7758c2f3",
                  "name": "9th-level Tech Abilities",
                  "level": 17,
                  "status": "locked",
                  "description": "Unlock level-9 Tech Abilities.",
                  "campaignId": "progression.class.tech_adept.17.9th_level_tech_abilities",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [
            "Expanded Attunement III",
            "Tech Upgrades V"
          ],
          "features": [
            {
              "id": "dcc0eff6a910eb4c",
              "name": "Expanded Attunement III",
              "level": 18,
              "status": "locked",
              "description": "Maximum attuned items becomes 6.",
              "campaignId": "progression.class.tech_adept.18.expanded_attunement_iii",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            },
            {
              "id": "6c9f62175232012e",
              "name": "Tech Upgrades V",
              "level": 18,
              "status": "locked",
              "description": "Tech Upgrades known increases to 12; active capacity remains 4.",
              "campaignId": "progression.class.tech_adept.18.tech_upgrades_v",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Expanded Attunement III",
              "names": [
                "Expanded Attunement III"
              ],
              "features": [
                {
                  "id": "dcc0eff6a910eb4c",
                  "name": "Expanded Attunement III",
                  "level": 18,
                  "status": "locked",
                  "description": "Maximum attuned items becomes 6.",
                  "campaignId": "progression.class.tech_adept.18.expanded_attunement_iii",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Tech Upgrades V",
              "names": [
                "Tech Upgrades V"
              ],
              "features": [
                {
                  "id": "6c9f62175232012e",
                  "name": "Tech Upgrades V",
                  "level": 18,
                  "status": "locked",
                  "description": "Tech Upgrades known increases to 12; active capacity remains 4.",
                  "campaignId": "progression.class.tech_adept.18.tech_upgrades_v",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [
            "Epic Boon — choose a native or Warhammer alias"
          ],
          "features": [],
          "entries": [
            {
              "level": 19,
              "type": "ItemChoice",
              "title": "Epic Boon — choose a native or Warhammer alias",
              "names": [
                "Epic Boon — choose a native or Warhammer alias"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            }
          ]
        },
        {
          "level": 20,
          "names": [
            "Apex Technologist"
          ],
          "features": [
            {
              "id": "28edbbbc5b40ab1e",
              "name": "Apex Technologist",
              "level": 20,
              "status": "locked",
              "description": "Once per Long Rest, cast one prepared 6th-level Tech Ability without expending a spell slot. In addition, when Initiative is rolled and you have no Tactical Calculation uses remaining, regain one use.",
              "campaignId": "progression.class.tech_adept.20.apex_technologist",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Apex Technologist",
              "names": [
                "Apex Technologist"
              ],
              "features": [
                {
                  "id": "28edbbbc5b40ab1e",
                  "name": "Apex Technologist",
                  "level": 20,
                  "status": "locked",
                  "description": "Once per Long Rest, cast one prepared 6th-level Tech Ability without expending a spell slot. In addition, when Initiative is rolled and you have no Tactical Calculation uses remaining, regain one use.",
                  "campaignId": "progression.class.tech_adept.20.apex_technologist",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "subclassIds": [
        "subclass.tech_adept.chirurgeon",
        "subclass.tech_adept.energy_savant",
        "subclass.tech_adept.mechanist"
      ],
      "advancementCount": 34
    },
    {
      "id": "908fed682f09b4d3",
      "name": "Zealot",
      "kind": "Item",
      "campaignId": "class.zealot",
      "status": "locked",
      "slug": "zealot",
      "image": "images/classes/class-zealot.png",
      "identifier": "zealot",
      "hitDie": "d10",
      "spellcasting": {
        "ability": "cha",
        "progression": "full",
        "preparation": "prepared"
      },
      "text": "Paladin-based d10 martial full caster with prepared Invocations, Extra Attack, small Fervor pool, subclass-only auras, and no Lay on Hands or universal Aura of Protection.\n\nD&D5e chassis: Paladin-based martial full caster.\n\nPrimary ability: Strength and Charisma (campaign recommendation: Strength primary).\n\nSubclass cadence: 3/7/15/20.\n\nRecommended pre-background array: STR 15, DEX 10, CON 13, INT 8, WIS 12, CHA 14.",
      "summary": "Paladin-based d10 martial full caster with prepared Invocations, Extra Attack, small Fervor pool, subclass-only auras, and no Lay on Hands or universal Aura of Protection.",
      "chassis": "Paladin-based martial full caster",
      "primaryAbility": [
        "str"
      ],
      "subclassCadence": "3/7/15/20",
      "recommendedArray": "STR 15, DEX 10, CON 13, INT 8, WIS 12, CHA 14",
      "levels": [
        {
          "level": 1,
          "names": [
            "Hit Points",
            "Core Proficiencies",
            "Invocations",
            "Sense the Unclean"
          ],
          "features": [
            {
              "id": "09b18684d5692da2",
              "name": "Invocations",
              "level": 1,
              "status": "locked",
              "description": "CHA prepared full caster through 9th level. Know 3 Invocation cantrips at L1, 4 at L4, 5 at L10. Prepare leveled Invocations after Long Rest equal to CHA modifier + half Zealot level rounded down (minimum 1). Subclass Invocations are always prepared and do not count.",
              "campaignId": "progression.class.zealot.1.invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            },
            {
              "id": "9e0cc5133b892f3a",
              "name": "Sense the Unclean",
              "level": 1,
              "status": "locked",
              "description": "As an Action, sense explicitly tagged Daemonic, Warp-corrupted, possessed, strongly sanctified/profane, or equivalent supernatural presences within 60 ft until end of your next turn; total cover blocks exact location. Uses = CHA modifier (minimum 1) per Long Rest. This does not define D&D creature types; taxonomy is maintained separately.",
              "campaignId": "progression.class.zealot.1.sense_the_unclean",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 1,
              "type": "HitPoints",
              "title": "Hit Points",
              "names": [
                "Hit Points"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "Trait",
              "title": "Core Proficiencies",
              "names": [
                "Core Proficiencies"
              ],
              "features": [],
              "choices": 2,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Invocations",
              "names": [
                "Invocations"
              ],
              "features": [
                {
                  "id": "09b18684d5692da2",
                  "name": "Invocations",
                  "level": 1,
                  "status": "locked",
                  "description": "CHA prepared full caster through 9th level. Know 3 Invocation cantrips at L1, 4 at L4, 5 at L10. Prepare leveled Invocations after Long Rest equal to CHA modifier + half Zealot level rounded down (minimum 1). Subclass Invocations are always prepared and do not count.",
                  "campaignId": "progression.class.zealot.1.invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Sense the Unclean",
              "names": [
                "Sense the Unclean"
              ],
              "features": [
                {
                  "id": "9e0cc5133b892f3a",
                  "name": "Sense the Unclean",
                  "level": 1,
                  "status": "locked",
                  "description": "As an Action, sense explicitly tagged Daemonic, Warp-corrupted, possessed, strongly sanctified/profane, or equivalent supernatural presences within 60 ft until end of your next turn; total cover blocks exact location. Uses = CHA modifier (minimum 1) per Long Rest. This does not define D&D creature types; taxonomy is maintained separately.",
                  "campaignId": "progression.class.zealot.1.sense_the_unclean",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 2,
          "names": [
            "Fighting Style — native D&D5e feat",
            "Fervor",
            "Zealous Advance",
            "Shield of Conviction"
          ],
          "features": [
            {
              "id": "27ba51e5a27b534a",
              "name": "Fervor",
              "level": 2,
              "status": "locked",
              "description": "Fervor maximum 2. Long Rest restores all. Once per Long Rest, a Short Rest restores half maximum rounded up. Fervor powers base and subclass features and is separate from spell slots.",
              "campaignId": "progression.class.zealot.2.fervor",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            },
            {
              "id": "2af9ffa25b36bcf5",
              "name": "Zealous Advance",
              "level": 2,
              "status": "locked",
              "description": "Spend 1 Fervor as a Bonus Action: gain +10 ft Speed and Advantage on your next weapon attack before end of this turn.",
              "campaignId": "progression.class.zealot.2.zealous_advance",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            },
            {
              "id": "b46c679b51604e5a",
              "name": "Shield of Conviction",
              "level": 2,
              "status": "locked",
              "description": "When you take damage, spend 1 Fervor as a Reaction to reduce it by 1d10 + CHA modifier + PB.",
              "campaignId": "progression.class.zealot.2.shield_of_conviction",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 2,
              "type": "ItemChoice",
              "title": "Fighting Style — native D&D5e feat",
              "names": [
                "Fighting Style — native D&D5e feat"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            },
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Fervor",
              "names": [
                "Fervor"
              ],
              "features": [
                {
                  "id": "27ba51e5a27b534a",
                  "name": "Fervor",
                  "level": 2,
                  "status": "locked",
                  "description": "Fervor maximum 2. Long Rest restores all. Once per Long Rest, a Short Rest restores half maximum rounded up. Fervor powers base and subclass features and is separate from spell slots.",
                  "campaignId": "progression.class.zealot.2.fervor",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Zealous Advance",
              "names": [
                "Zealous Advance"
              ],
              "features": [
                {
                  "id": "2af9ffa25b36bcf5",
                  "name": "Zealous Advance",
                  "level": 2,
                  "status": "locked",
                  "description": "Spend 1 Fervor as a Bonus Action: gain +10 ft Speed and Advantage on your next weapon attack before end of this turn.",
                  "campaignId": "progression.class.zealot.2.zealous_advance",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Shield of Conviction",
              "names": [
                "Shield of Conviction"
              ],
              "features": [
                {
                  "id": "b46c679b51604e5a",
                  "name": "Shield of Conviction",
                  "level": 2,
                  "status": "locked",
                  "description": "When you take damage, spend 1 Fervor as a Reaction to reduce it by 1d10 + CHA modifier + PB.",
                  "campaignId": "progression.class.zealot.2.shield_of_conviction",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ScaleValue",
              "title": "Fervor",
              "names": [
                "Fervor"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 3,
          "names": [
            "Zealot Creed",
            "2nd-level Invocations"
          ],
          "features": [
            {
              "id": "78019d2098f71ce8",
              "name": "2nd-level Invocations",
              "level": 3,
              "status": "locked",
              "description": "Unlock level-2 Invocations.",
              "campaignId": "progression.class.zealot.3.2nd_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "Subclass",
              "title": "Zealot Creed",
              "names": [
                "Zealot Creed"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "2nd-level Invocations",
              "names": [
                "2nd-level Invocations"
              ],
              "features": [
                {
                  "id": "78019d2098f71ce8",
                  "name": "2nd-level Invocations",
                  "level": 3,
                  "status": "locked",
                  "description": "Unlock level-2 Invocations.",
                  "campaignId": "progression.class.zealot.3.2nd_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 4,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 5,
          "names": [
            "Extra Attack",
            "3rd-level Invocations"
          ],
          "features": [
            {
              "id": "ab8c62c52fcc565d",
              "name": "Extra Attack",
              "level": 5,
              "status": "locked",
              "description": "Attack twice, instead of once, whenever you take the Attack action.",
              "campaignId": "progression.class.zealot.5.extra_attack",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            },
            {
              "id": "4be9ea37dfe063d8",
              "name": "3rd-level Invocations",
              "level": 5,
              "status": "locked",
              "description": "Unlock level-3 Invocations.",
              "campaignId": "progression.class.zealot.5.3rd_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Extra Attack",
              "names": [
                "Extra Attack"
              ],
              "features": [
                {
                  "id": "ab8c62c52fcc565d",
                  "name": "Extra Attack",
                  "level": 5,
                  "status": "locked",
                  "description": "Attack twice, instead of once, whenever you take the Attack action.",
                  "campaignId": "progression.class.zealot.5.extra_attack",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "3rd-level Invocations",
              "names": [
                "3rd-level Invocations"
              ],
              "features": [
                {
                  "id": "4be9ea37dfe063d8",
                  "name": "3rd-level Invocations",
                  "level": 5,
                  "status": "locked",
                  "description": "Unlock level-3 Invocations.",
                  "campaignId": "progression.class.zealot.5.3rd_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [
            "Unyielding Constitution"
          ],
          "features": [
            {
              "id": "e09684c1f4f2ebb9",
              "name": "Unyielding Constitution",
              "level": 6,
              "status": "locked",
              "description": "Advantage on saving throws against disease and toxins, including the Poisoned condition when caused by a toxin or disease.",
              "campaignId": "progression.class.zealot.6.unyielding_constitution",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Unyielding Constitution",
              "names": [
                "Unyielding Constitution"
              ],
              "features": [
                {
                  "id": "e09684c1f4f2ebb9",
                  "name": "Unyielding Constitution",
                  "level": 6,
                  "status": "locked",
                  "description": "Advantage on saving throws against disease and toxins, including the Poisoned condition when caused by a toxin or disease.",
                  "campaignId": "progression.class.zealot.6.unyielding_constitution",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [
            "4th-level Invocations",
            "Subclass Feature"
          ],
          "features": [
            {
              "id": "e74fb354f1481b60",
              "name": "4th-level Invocations",
              "level": 7,
              "status": "locked",
              "description": "Unlock level-4 Invocations.",
              "campaignId": "progression.class.zealot.7.4th_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "4th-level Invocations",
              "names": [
                "4th-level Invocations"
              ],
              "features": [
                {
                  "id": "e74fb354f1481b60",
                  "name": "4th-level Invocations",
                  "level": 7,
                  "status": "locked",
                  "description": "Unlock level-4 Invocations.",
                  "campaignId": "progression.class.zealot.7.4th_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 7,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 8,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 9,
          "names": [
            "Fervor III",
            "5th-level Invocations"
          ],
          "features": [
            {
              "id": "e54713db697887c7",
              "name": "Fervor III",
              "level": 9,
              "status": "locked",
              "description": "Fervor maximum increases to 3; once-per-Long-Rest Short Rest recovery becomes 2.",
              "campaignId": "progression.class.zealot.9.fervor_iii",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            },
            {
              "id": "beec931214315816",
              "name": "5th-level Invocations",
              "level": 9,
              "status": "locked",
              "description": "Unlock level-5 Invocations.",
              "campaignId": "progression.class.zealot.9.5th_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Fervor III",
              "names": [
                "Fervor III"
              ],
              "features": [
                {
                  "id": "e54713db697887c7",
                  "name": "Fervor III",
                  "level": 9,
                  "status": "locked",
                  "description": "Fervor maximum increases to 3; once-per-Long-Rest Short Rest recovery becomes 2.",
                  "campaignId": "progression.class.zealot.9.fervor_iii",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "5th-level Invocations",
              "names": [
                "5th-level Invocations"
              ],
              "features": [
                {
                  "id": "beec931214315816",
                  "name": "5th-level Invocations",
                  "level": 9,
                  "status": "locked",
                  "description": "Unlock level-5 Invocations.",
                  "campaignId": "progression.class.zealot.9.5th_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [
            "Relentless Conviction"
          ],
          "features": [
            {
              "id": "dc19e2365b5b499b",
              "name": "Relentless Conviction",
              "level": 10,
              "status": "locked",
              "description": "When you roll Initiative with no Fervor remaining, regain 1 Fervor.",
              "campaignId": "progression.class.zealot.10.relentless_conviction",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Relentless Conviction",
              "names": [
                "Relentless Conviction"
              ],
              "features": [
                {
                  "id": "dc19e2365b5b499b",
                  "name": "Relentless Conviction",
                  "level": 10,
                  "status": "locked",
                  "description": "When you roll Initiative with no Fervor remaining, regain 1 Fervor.",
                  "campaignId": "progression.class.zealot.10.relentless_conviction",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [
            "6th-level Invocations"
          ],
          "features": [
            {
              "id": "c25ae81e4d2a55c6",
              "name": "6th-level Invocations",
              "level": 11,
              "status": "locked",
              "description": "Unlock level-6 Invocations.",
              "campaignId": "progression.class.zealot.11.6th_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "6th-level Invocations",
              "names": [
                "6th-level Invocations"
              ],
              "features": [
                {
                  "id": "c25ae81e4d2a55c6",
                  "name": "6th-level Invocations",
                  "level": 11,
                  "status": "locked",
                  "description": "Unlock level-6 Invocations.",
                  "campaignId": "progression.class.zealot.11.6th_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 12,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 12,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 13,
          "names": [
            "7th-level Invocations"
          ],
          "features": [
            {
              "id": "3c8976df2f255422",
              "name": "7th-level Invocations",
              "level": 13,
              "status": "locked",
              "description": "Unlock level-7 Invocations.",
              "campaignId": "progression.class.zealot.13.7th_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "7th-level Invocations",
              "names": [
                "7th-level Invocations"
              ],
              "features": [
                {
                  "id": "3c8976df2f255422",
                  "name": "7th-level Invocations",
                  "level": 13,
                  "status": "locked",
                  "description": "Unlock level-7 Invocations.",
                  "campaignId": "progression.class.zealot.13.7th_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [
            "Rite of Resolve"
          ],
          "features": [
            {
              "id": "f0ccf6fc6725fc6b",
              "name": "Rite of Resolve",
              "level": 14,
              "status": "locked",
              "description": "As an Action, spend 1 Fervor and touch a willing creature to end one of these conditions on it: Charmed, Frightened, or Poisoned. This is ordinary condition relief, not Warp purification; removing possession, corruption, or Warp Exposure requires an explicit Purifier/anti-Warp effect.",
              "campaignId": "progression.class.zealot.14.rite_of_resolve",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Rite of Resolve",
              "names": [
                "Rite of Resolve"
              ],
              "features": [
                {
                  "id": "f0ccf6fc6725fc6b",
                  "name": "Rite of Resolve",
                  "level": 14,
                  "status": "locked",
                  "description": "As an Action, spend 1 Fervor and touch a willing creature to end one of these conditions on it: Charmed, Frightened, or Poisoned. This is ordinary condition relief, not Warp purification; removing possession, corruption, or Warp Exposure requires an explicit Purifier/anti-Warp effect.",
                  "campaignId": "progression.class.zealot.14.rite_of_resolve",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [
            "8th-level Invocations",
            "Subclass Feature"
          ],
          "features": [
            {
              "id": "433f0703b4193dd1",
              "name": "8th-level Invocations",
              "level": 15,
              "status": "locked",
              "description": "Unlock level-8 Invocations.",
              "campaignId": "progression.class.zealot.15.8th_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "8th-level Invocations",
              "names": [
                "8th-level Invocations"
              ],
              "features": [
                {
                  "id": "433f0703b4193dd1",
                  "name": "8th-level Invocations",
                  "level": 15,
                  "status": "locked",
                  "description": "Unlock level-8 Invocations.",
                  "campaignId": "progression.class.zealot.15.8th_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 15,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 16,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 17,
          "names": [
            "Fervor IV",
            "9th-level Invocations"
          ],
          "features": [
            {
              "id": "fbdc76c1475695b6",
              "name": "Fervor IV",
              "level": 17,
              "status": "locked",
              "description": "Fervor maximum increases to 4; once-per-Long-Rest Short Rest recovery remains 2.",
              "campaignId": "progression.class.zealot.17.fervor_iv",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            },
            {
              "id": "123d9621cc9d4e4f",
              "name": "9th-level Invocations",
              "level": 17,
              "status": "locked",
              "description": "Unlock level-9 Invocations.",
              "campaignId": "progression.class.zealot.17.9th_level_invocations",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Fervor IV",
              "names": [
                "Fervor IV"
              ],
              "features": [
                {
                  "id": "fbdc76c1475695b6",
                  "name": "Fervor IV",
                  "level": 17,
                  "status": "locked",
                  "description": "Fervor maximum increases to 4; once-per-Long-Rest Short Rest recovery remains 2.",
                  "campaignId": "progression.class.zealot.17.fervor_iv",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "9th-level Invocations",
              "names": [
                "9th-level Invocations"
              ],
              "features": [
                {
                  "id": "123d9621cc9d4e4f",
                  "name": "9th-level Invocations",
                  "level": 17,
                  "status": "locked",
                  "description": "Unlock level-9 Invocations.",
                  "campaignId": "progression.class.zealot.17.9th_level_invocations",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [
            "Indomitable Creed"
          ],
          "features": [
            {
              "id": "e981c859c472ac0b",
              "name": "Indomitable Creed",
              "level": 18,
              "status": "locked",
              "description": "When you fail a saving throw, you may spend 1 Fervor to reroll it and must use the new result.",
              "campaignId": "progression.class.zealot.18.indomitable_creed",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Indomitable Creed",
              "names": [
                "Indomitable Creed"
              ],
              "features": [
                {
                  "id": "e981c859c472ac0b",
                  "name": "Indomitable Creed",
                  "level": 18,
                  "status": "locked",
                  "description": "When you fail a saving throw, you may spend 1 Fervor to reroll it and must use the new result.",
                  "campaignId": "progression.class.zealot.18.indomitable_creed",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [
            "Epic Boon — choose a native or Warhammer alias"
          ],
          "features": [],
          "entries": [
            {
              "level": 19,
              "type": "ItemChoice",
              "title": "Epic Boon — choose a native or Warhammer alias",
              "names": [
                "Epic Boon — choose a native or Warhammer alias"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            }
          ]
        },
        {
          "level": 20,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 20,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "subclassIds": [
        "subclass.zealot.crusader",
        "subclass.zealot.preacher",
        "subclass.zealot.purifier"
      ],
      "advancementCount": 33
    },
    {
      "id": "b448d20af4803f07",
      "name": "Soldier",
      "kind": "Item",
      "campaignId": "class.soldier",
      "status": "locked",
      "slug": "soldier",
      "image": "images/classes/class-soldier.png",
      "identifier": "soldier",
      "hitDie": "d10",
      "spellcasting": {
        "ability": "",
        "progression": "none",
        "preparation": "none"
      },
      "text": "General weapons expert; major role comes from subclass.\n\nD&D5e chassis: Fighter.\n\nPrimary ability: Strength or Dexterity (campaign recommendation: Strength).\n\nSubclass cadence: 3/7/10/15/18.\n\nRecommended pre-background array: STR 15, DEX 13, CON 15, INT 10, WIS 10, CHA 8.",
      "summary": "General weapons expert; major role comes from subclass.",
      "chassis": "Fighter",
      "primaryAbility": [
        "str"
      ],
      "subclassCadence": "3/7/10/15/18",
      "recommendedArray": "STR 15, DEX 13, CON 15, INT 10, WIS 10, CHA 8",
      "levels": [
        {
          "level": 1,
          "names": [
            "Hit Points",
            "Core Proficiencies",
            "Fighting Style — native D&D5e feat",
            "Second Wind",
            "Weapon Mastery",
            "Weapon Masteries Known"
          ],
          "features": [
            {
              "id": "5f1caa2c4f0e8daf",
              "name": "Second Wind",
              "level": 1,
              "status": "locked",
              "description": "Native Fighter-like recovery.",
              "campaignId": "progression.class.soldier.1.second_wind",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            },
            {
              "id": "4f4c05feba72ea28",
              "name": "Weapon Mastery",
              "level": 1,
              "status": "locked",
              "description": "Use native Weapon Mastery infrastructure.",
              "campaignId": "progression.class.soldier.1.weapon_mastery",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 1,
              "type": "HitPoints",
              "title": "Hit Points",
              "names": [
                "Hit Points"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "Trait",
              "title": "Core Proficiencies",
              "names": [
                "Core Proficiencies"
              ],
              "features": [],
              "choices": 2,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemChoice",
              "title": "Fighting Style — native D&D5e feat",
              "names": [
                "Fighting Style — native D&D5e feat"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Second Wind",
              "names": [
                "Second Wind"
              ],
              "features": [
                {
                  "id": "5f1caa2c4f0e8daf",
                  "name": "Second Wind",
                  "level": 1,
                  "status": "locked",
                  "description": "Native Fighter-like recovery.",
                  "campaignId": "progression.class.soldier.1.second_wind",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Weapon Mastery",
              "names": [
                "Weapon Mastery"
              ],
              "features": [
                {
                  "id": "4f4c05feba72ea28",
                  "name": "Weapon Mastery",
                  "level": 1,
                  "status": "locked",
                  "description": "Use native Weapon Mastery infrastructure.",
                  "campaignId": "progression.class.soldier.1.weapon_mastery",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ScaleValue",
              "title": "Weapon Masteries Known",
              "names": [
                "Weapon Masteries Known"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 2,
          "names": [
            "Action Surge",
            "Tactical Mind"
          ],
          "features": [
            {
              "id": "8049b24592ff129f",
              "name": "Action Surge",
              "level": 2,
              "status": "needs_review",
              "description": "Action Surge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.soldier.2.action_surge",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            },
            {
              "id": "a16a0c2cd95e4bf2",
              "name": "Tactical Mind",
              "level": 2,
              "status": "locked",
              "description": "Use native 2024 Fighter mechanic; Warhammer rename optional.",
              "campaignId": "progression.class.soldier.2.tactical_mind",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Action Surge",
              "names": [
                "Action Surge"
              ],
              "features": [
                {
                  "id": "8049b24592ff129f",
                  "name": "Action Surge",
                  "level": 2,
                  "status": "needs_review",
                  "description": "Action Surge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.soldier.2.action_surge",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Tactical Mind",
              "names": [
                "Tactical Mind"
              ],
              "features": [
                {
                  "id": "a16a0c2cd95e4bf2",
                  "name": "Tactical Mind",
                  "level": 2,
                  "status": "locked",
                  "description": "Use native 2024 Fighter mechanic; Warhammer rename optional.",
                  "campaignId": "progression.class.soldier.2.tactical_mind",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 3,
          "names": [
            "Soldier Specialization"
          ],
          "features": [],
          "entries": [
            {
              "level": 3,
              "type": "Subclass",
              "title": "Soldier Specialization",
              "names": [
                "Soldier Specialization"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 4,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 5,
          "names": [
            "Extra Attack",
            "Tactical Shift"
          ],
          "features": [
            {
              "id": "54f1ea1189b3d787",
              "name": "Extra Attack",
              "level": 5,
              "status": "locked",
              "description": "Two attacks.",
              "campaignId": "progression.class.soldier.5.extra_attack",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            },
            {
              "id": "692199c2de912701",
              "name": "Tactical Shift",
              "level": 5,
              "status": "needs_review",
              "description": "Tactical Shift is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.soldier.5.tactical_shift",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Extra Attack",
              "names": [
                "Extra Attack"
              ],
              "features": [
                {
                  "id": "54f1ea1189b3d787",
                  "name": "Extra Attack",
                  "level": 5,
                  "status": "locked",
                  "description": "Two attacks.",
                  "campaignId": "progression.class.soldier.5.extra_attack",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Tactical Shift",
              "names": [
                "Tactical Shift"
              ],
              "features": [
                {
                  "id": "692199c2de912701",
                  "name": "Tactical Shift",
                  "level": 5,
                  "status": "needs_review",
                  "description": "Tactical Shift is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.soldier.5.tactical_shift",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 6,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 7,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 7,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 8,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 9,
          "names": [
            "Indomitable",
            "Tactical Master"
          ],
          "features": [
            {
              "id": "311595c718c86ba0",
              "name": "Indomitable",
              "level": 9,
              "status": "needs_review",
              "description": "Indomitable is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.soldier.9.indomitable",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            },
            {
              "id": "677c7324b70bdfea",
              "name": "Tactical Master",
              "level": 9,
              "status": "locked",
              "description": "Use native Push/Sap/Slow mastery substitution. This replaces custom Weapon Drill handling tree.",
              "campaignId": "progression.class.soldier.9.tactical_master",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Indomitable",
              "names": [
                "Indomitable"
              ],
              "features": [
                {
                  "id": "311595c718c86ba0",
                  "name": "Indomitable",
                  "level": 9,
                  "status": "needs_review",
                  "description": "Indomitable is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.soldier.9.indomitable",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Tactical Master",
              "names": [
                "Tactical Master"
              ],
              "features": [
                {
                  "id": "677c7324b70bdfea",
                  "name": "Tactical Master",
                  "level": 9,
                  "status": "locked",
                  "description": "Use native Push/Sap/Slow mastery substitution. This replaces custom Weapon Drill handling tree.",
                  "campaignId": "progression.class.soldier.9.tactical_master",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 10,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [
            "Extra Attack II"
          ],
          "features": [
            {
              "id": "4d3cad89018f7286",
              "name": "Extra Attack II",
              "level": 11,
              "status": "locked",
              "description": "Three attacks.",
              "campaignId": "progression.class.soldier.11.extra_attack_ii",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "Extra Attack II",
              "names": [
                "Extra Attack II"
              ],
              "features": [
                {
                  "id": "4d3cad89018f7286",
                  "name": "Extra Attack II",
                  "level": 11,
                  "status": "locked",
                  "description": "Three attacks.",
                  "campaignId": "progression.class.soldier.11.extra_attack_ii",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 12,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 12,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 13,
          "names": [
            "Indomitable II",
            "Studied Attacks"
          ],
          "features": [
            {
              "id": "dbeffa11f6ebd389",
              "name": "Indomitable II",
              "level": 13,
              "status": "needs_review",
              "description": "Indomitable (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.soldier.13.indomitable_ii",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            },
            {
              "id": "64ccafffdff60bed",
              "name": "Studied Attacks",
              "level": 13,
              "status": "locked",
              "description": "Use native 2024 Fighter mechanic rather than custom Combat Veteran reroll pool.",
              "campaignId": "progression.class.soldier.13.studied_attacks",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Indomitable II",
              "names": [
                "Indomitable II"
              ],
              "features": [
                {
                  "id": "dbeffa11f6ebd389",
                  "name": "Indomitable II",
                  "level": 13,
                  "status": "needs_review",
                  "description": "Indomitable (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.soldier.13.indomitable_ii",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Studied Attacks",
              "names": [
                "Studied Attacks"
              ],
              "features": [
                {
                  "id": "64ccafffdff60bed",
                  "name": "Studied Attacks",
                  "level": 13,
                  "status": "locked",
                  "description": "Use native 2024 Fighter mechanic rather than custom Combat Veteran reroll pool.",
                  "campaignId": "progression.class.soldier.13.studied_attacks",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 14,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 15,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 15,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 16,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 17,
          "names": [
            "Action Surge II",
            "Indomitable III"
          ],
          "features": [
            {
              "id": "1ae1e738ea9a61d2",
              "name": "Action Surge II",
              "level": 17,
              "status": "needs_review",
              "description": "Action Surge (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.soldier.17.action_surge_ii",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            },
            {
              "id": "3a9131c5f7f4aa2a",
              "name": "Indomitable III",
              "level": 17,
              "status": "needs_review",
              "description": "Indomitable (3) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
              "campaignId": "progression.class.soldier.17.indomitable_iii",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Action Surge II",
              "names": [
                "Action Surge II"
              ],
              "features": [
                {
                  "id": "1ae1e738ea9a61d2",
                  "name": "Action Surge II",
                  "level": 17,
                  "status": "needs_review",
                  "description": "Action Surge (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.soldier.17.action_surge_ii",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Indomitable III",
              "names": [
                "Indomitable III"
              ],
              "features": [
                {
                  "id": "3a9131c5f7f4aa2a",
                  "name": "Indomitable III",
                  "level": 17,
                  "status": "needs_review",
                  "description": "Indomitable (3) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
                  "campaignId": "progression.class.soldier.17.indomitable_iii",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 18,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [
            "Epic Boon — choose a native or Warhammer alias"
          ],
          "features": [],
          "entries": [
            {
              "level": 19,
              "type": "ItemChoice",
              "title": "Epic Boon — choose a native or Warhammer alias",
              "names": [
                "Epic Boon — choose a native or Warhammer alias"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            }
          ]
        },
        {
          "level": 20,
          "names": [
            "Extra Attack III"
          ],
          "features": [
            {
              "id": "8f909f47e2eccada",
              "name": "Extra Attack III",
              "level": 20,
              "status": "locked",
              "description": "Four attacks.",
              "campaignId": "progression.class.soldier.20.extra_attack_iii",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Extra Attack III",
              "names": [
                "Extra Attack III"
              ],
              "features": [
                {
                  "id": "8f909f47e2eccada",
                  "name": "Extra Attack III",
                  "level": 20,
                  "status": "locked",
                  "description": "Four attacks.",
                  "campaignId": "progression.class.soldier.20.extra_attack_iii",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "subclassIds": [
        "subclass.soldier.artillerist",
        "subclass.soldier.gunslinger",
        "subclass.soldier.shock_trooper",
        "subclass.soldier.warp_spider"
      ],
      "advancementCount": 30
    },
    {
      "id": "baaa8b89c95ef8f3",
      "name": "Psyker",
      "kind": "Item",
      "campaignId": "class.psyker",
      "status": "locked",
      "slug": "psyker",
      "image": "images/classes/class-psyker.png",
      "identifier": "psyker",
      "hitDie": "d6",
      "spellcasting": {
        "ability": "cha",
        "progression": "full",
        "preparation": "known"
      },
      "text": "Sorcerer-based d6 learned full caster with reduced safe slots, Warp Exposure, Bonus-Action Draw from the Warp, Hazardous Manifestation, Perils, and no Sorcery Points/Metamagic.\n\nD&D5e chassis: Sorcerer-based full caster with reduced safe slots + Draw from the Warp.\n\nPrimary ability: Charisma.\n\nSubclass cadence: 3/6/14/18.\n\nRecommended pre-background array: STR 8, DEX 12, CON 13, INT 10, WIS 14, CHA 15.",
      "summary": "Sorcerer-based d6 learned full caster with reduced safe slots, Warp Exposure, Bonus-Action Draw from the Warp, Hazardous Manifestation, Perils, and no Sorcery Points/Metamagic.",
      "chassis": "Sorcerer-based full caster with reduced safe slots + Draw from the Warp",
      "primaryAbility": [
        "cha"
      ],
      "subclassCadence": "3/6/14/18",
      "recommendedArray": "STR 8, DEX 12, CON 13, INT 10, WIS 14, CHA 15",
      "levels": [
        {
          "level": 1,
          "names": [
            "Hit Points",
            "Core Proficiencies",
            "Psychic Powers",
            "Warp Exposure & Warp Discipline",
            "Warp Exposure"
          ],
          "features": [
            {
              "id": "332e960e9026c186",
              "name": "Psychic Powers",
              "level": 1,
              "status": "locked",
              "description": "CHA learned caster. Cantrips/Powers Known follow the 2024 Sorcerer prepared-spell count as a learned list: 4 cantrips and 2 leveled powers at this level. Normal full-caster spell-level access; safe slot counts are one fewer than normal per available level, minimum 1.",
              "campaignId": "progression.class.psyker.1.psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            },
            {
              "id": "bd79653a93d10ec1",
              "name": "Warp Exposure & Warp Discipline",
              "level": 1,
              "status": "locked",
              "description": "Warp Exposure 0–100. Stable 0–24; Whispering 25–49; Fraying 50–74; Breach 75–99; 100 Possession Crisis. Warp Control uses WIS saves DC 10/13/16 in the three dangerous bands. Short Rest reduces Exposure 15; Long Rest resets it to 0. Ordinary healing/restoration does not reduce Exposure unless explicitly anti-Warp.",
              "campaignId": "progression.class.psyker.1.warp_exposure_warp_discipline",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 1,
              "type": "HitPoints",
              "title": "Hit Points",
              "names": [
                "Hit Points"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "Trait",
              "title": "Core Proficiencies",
              "names": [
                "Core Proficiencies"
              ],
              "features": [],
              "choices": 2,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Psychic Powers",
              "names": [
                "Psychic Powers"
              ],
              "features": [
                {
                  "id": "332e960e9026c186",
                  "name": "Psychic Powers",
                  "level": 1,
                  "status": "locked",
                  "description": "CHA learned caster. Cantrips/Powers Known follow the 2024 Sorcerer prepared-spell count as a learned list: 4 cantrips and 2 leveled powers at this level. Normal full-caster spell-level access; safe slot counts are one fewer than normal per available level, minimum 1.",
                  "campaignId": "progression.class.psyker.1.psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ItemGrant",
              "title": "Warp Exposure & Warp Discipline",
              "names": [
                "Warp Exposure & Warp Discipline"
              ],
              "features": [
                {
                  "id": "bd79653a93d10ec1",
                  "name": "Warp Exposure & Warp Discipline",
                  "level": 1,
                  "status": "locked",
                  "description": "Warp Exposure 0–100. Stable 0–24; Whispering 25–49; Fraying 50–74; Breach 75–99; 100 Possession Crisis. Warp Control uses WIS saves DC 10/13/16 in the three dangerous bands. Short Rest reduces Exposure 15; Long Rest resets it to 0. Ordinary healing/restoration does not reduce Exposure unless explicitly anti-Warp.",
                  "campaignId": "progression.class.psyker.1.warp_exposure_warp_discipline",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 1,
              "type": "ScaleValue",
              "title": "Warp Exposure",
              "names": [
                "Warp Exposure"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 2,
          "names": [
            "Draw from the Warp",
            "Hazardous Manifestation"
          ],
          "features": [
            {
              "id": "660777d45df79ab4",
              "name": "Draw from the Warp",
              "level": 2,
              "status": "locked",
              "description": "Bonus Action at any time. Declare an expended slot. Each Draw recovers PB slot levels toward that declared slot and adds 1d8+4% Warp Exposure; consecutive Draws may be required for a high-level slot, no partial recovery persists if the sequence stops, and excess final capacity is lost. Recoverable slot cap: up to 5th at L1–10, 6th at L11, 7th at L13, 8th at L15, 9th at L17. The slot is restored even if Warp Control fails; Perils are additional cost.",
              "campaignId": "progression.class.psyker.2.draw_from_the_warp",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            },
            {
              "id": "395964cf9e1f3264",
              "name": "Hazardous Manifestation",
              "level": 2,
              "status": "locked",
              "description": "When casting an eligible leveled Psychic Power with a slot, resolve it at +1 effective spell level without spending a higher slot, maximum effective level 9. Can stack with normal upcasting, once per casting. Not usable on cantrips or Reaction powers. Adds +5% Warp Exposure, then resolves Warp Control/Possession Crisis as appropriate.",
              "campaignId": "progression.class.psyker.2.hazardous_manifestation",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Draw from the Warp",
              "names": [
                "Draw from the Warp"
              ],
              "features": [
                {
                  "id": "660777d45df79ab4",
                  "name": "Draw from the Warp",
                  "level": 2,
                  "status": "locked",
                  "description": "Bonus Action at any time. Declare an expended slot. Each Draw recovers PB slot levels toward that declared slot and adds 1d8+4% Warp Exposure; consecutive Draws may be required for a high-level slot, no partial recovery persists if the sequence stops, and excess final capacity is lost. Recoverable slot cap: up to 5th at L1–10, 6th at L11, 7th at L13, 8th at L15, 9th at L17. The slot is restored even if Warp Control fails; Perils are additional cost.",
                  "campaignId": "progression.class.psyker.2.draw_from_the_warp",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 2,
              "type": "ItemGrant",
              "title": "Hazardous Manifestation",
              "names": [
                "Hazardous Manifestation"
              ],
              "features": [
                {
                  "id": "395964cf9e1f3264",
                  "name": "Hazardous Manifestation",
                  "level": 2,
                  "status": "locked",
                  "description": "When casting an eligible leveled Psychic Power with a slot, resolve it at +1 effective spell level without spending a higher slot, maximum effective level 9. Can stack with normal upcasting, once per casting. Not usable on cantrips or Reaction powers. Adds +5% Warp Exposure, then resolves Warp Control/Possession Crisis as appropriate.",
                  "campaignId": "progression.class.psyker.2.hazardous_manifestation",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 3,
          "names": [
            "Psyker Discipline",
            "2nd-level Psychic Powers"
          ],
          "features": [
            {
              "id": "700968372004793e",
              "name": "2nd-level Psychic Powers",
              "level": 3,
              "status": "locked",
              "description": "Unlock level-2 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.3.2nd_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "Subclass",
              "title": "Psyker Discipline",
              "names": [
                "Psyker Discipline"
              ],
              "features": [],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "2nd-level Psychic Powers",
              "names": [
                "2nd-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "700968372004793e",
                  "name": "2nd-level Psychic Powers",
                  "level": 3,
                  "status": "locked",
                  "description": "Unlock level-2 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.3.2nd_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 4,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 5,
          "names": [
            "3rd-level Psychic Powers"
          ],
          "features": [
            {
              "id": "6e28087ad1f46c86",
              "name": "3rd-level Psychic Powers",
              "level": 5,
              "status": "locked",
              "description": "Unlock level-3 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.5.3rd_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "3rd-level Psychic Powers",
              "names": [
                "3rd-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "6e28087ad1f46c86",
                  "name": "3rd-level Psychic Powers",
                  "level": 5,
                  "status": "locked",
                  "description": "Unlock level-3 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.5.3rd_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 6,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [
            "4th-level Psychic Powers"
          ],
          "features": [
            {
              "id": "108732dabce4dd39",
              "name": "4th-level Psychic Powers",
              "level": 7,
              "status": "locked",
              "description": "Unlock level-4 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.7.4th_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "4th-level Psychic Powers",
              "names": [
                "4th-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "108732dabce4dd39",
                  "name": "4th-level Psychic Powers",
                  "level": 7,
                  "status": "locked",
                  "description": "Unlock level-4 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.7.4th_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 8,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 9,
          "names": [
            "5th-level Psychic Powers"
          ],
          "features": [
            {
              "id": "dd33234c94a008f7",
              "name": "5th-level Psychic Powers",
              "level": 9,
              "status": "locked",
              "description": "Unlock level-5 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.9.5th_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "5th-level Psychic Powers",
              "names": [
                "5th-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "dd33234c94a008f7",
                  "name": "5th-level Psychic Powers",
                  "level": 9,
                  "status": "locked",
                  "description": "Unlock level-5 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.9.5th_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [
            "Mental Bastion"
          ],
          "features": [
            {
              "id": "7a61239fad7695a4",
              "name": "Mental Bastion",
              "level": 10,
              "status": "locked",
              "description": "Gain Resistance to Psychic damage and Advantage on saves to avoid or end Charmed. This never reduces Warp Exposure and does not cancel self-generated Perils.",
              "campaignId": "progression.class.psyker.10.mental_bastion",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Mental Bastion",
              "names": [
                "Mental Bastion"
              ],
              "features": [
                {
                  "id": "7a61239fad7695a4",
                  "name": "Mental Bastion",
                  "level": 10,
                  "status": "locked",
                  "description": "Gain Resistance to Psychic damage and Advantage on saves to avoid or end Charmed. This never reduces Warp Exposure and does not cancel self-generated Perils.",
                  "campaignId": "progression.class.psyker.10.mental_bastion",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [
            "6th-level Psychic Powers"
          ],
          "features": [
            {
              "id": "6cd87f8968182184",
              "name": "6th-level Psychic Powers",
              "level": 11,
              "status": "locked",
              "description": "Unlock level-6 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.11.6th_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 11,
              "type": "ItemGrant",
              "title": "6th-level Psychic Powers",
              "names": [
                "6th-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "6cd87f8968182184",
                  "name": "6th-level Psychic Powers",
                  "level": 11,
                  "status": "locked",
                  "description": "Unlock level-6 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.11.6th_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 12,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 12,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 13,
          "names": [
            "7th-level Psychic Powers"
          ],
          "features": [
            {
              "id": "2a05395fa76d0731",
              "name": "7th-level Psychic Powers",
              "level": 13,
              "status": "locked",
              "description": "Unlock level-7 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.13.7th_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "7th-level Psychic Powers",
              "names": [
                "7th-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "2a05395fa76d0731",
                  "name": "7th-level Psychic Powers",
                  "level": 13,
                  "status": "locked",
                  "description": "Unlock level-7 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.13.7th_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 14,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [
            "8th-level Psychic Powers"
          ],
          "features": [
            {
              "id": "93b10c198fe7f015",
              "name": "8th-level Psychic Powers",
              "level": 15,
              "status": "locked",
              "description": "Unlock level-8 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.15.8th_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "8th-level Psychic Powers",
              "names": [
                "8th-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "93b10c198fe7f015",
                  "name": "8th-level Psychic Powers",
                  "level": 15,
                  "status": "locked",
                  "description": "Unlock level-8 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.15.8th_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [
            "Talent / Ability Score Improvement"
          ],
          "features": [],
          "entries": [
            {
              "level": 16,
              "type": "AbilityScoreImprovement",
              "title": "Talent / Ability Score Improvement",
              "names": [
                "Talent / Ability Score Improvement"
              ],
              "features": [],
              "choices": null,
              "points": 2
            }
          ]
        },
        {
          "level": 17,
          "names": [
            "9th-level Psychic Powers"
          ],
          "features": [
            {
              "id": "c96dbf9f8f0fa27c",
              "name": "9th-level Psychic Powers",
              "level": 17,
              "status": "locked",
              "description": "Unlock level-9 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
              "campaignId": "progression.class.psyker.17.9th_level_psychic_powers",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "9th-level Psychic Powers",
              "names": [
                "9th-level Psychic Powers"
              ],
              "features": [
                {
                  "id": "c96dbf9f8f0fa27c",
                  "name": "9th-level Psychic Powers",
                  "level": 17,
                  "status": "locked",
                  "description": "Unlock level-9 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
                  "campaignId": "progression.class.psyker.17.9th_level_psychic_powers",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [
            "Subclass Feature"
          ],
          "features": [],
          "entries": [
            {
              "level": 18,
              "type": "Subclass",
              "title": "Subclass Feature",
              "names": [
                "Subclass Feature"
              ],
              "features": [],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [
            "Epic Boon — choose a native or Warhammer alias"
          ],
          "features": [],
          "entries": [
            {
              "level": 19,
              "type": "ItemChoice",
              "title": "Epic Boon — choose a native or Warhammer alias",
              "names": [
                "Epic Boon — choose a native or Warhammer alias"
              ],
              "features": [],
              "choices": {
                "count": 1
              },
              "points": null
            }
          ]
        },
        {
          "level": 20,
          "names": [
            "Master of the Warp"
          ],
          "features": [
            {
              "id": "c686f24288f01fa5",
              "name": "Master of the Warp",
              "level": 20,
              "status": "locked",
              "description": "Once per Long Rest when you Draw from the Warp, make it a Perfect Draw: restore one expended spell slot you are currently eligible to recover, regardless of the normal PB-level requirement, and gain no Warp Exposure from that Draw. It still uses the normal Bonus Action.",
              "campaignId": "progression.class.psyker.20.master_of_the_warp",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": ""
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Master of the Warp",
              "names": [
                "Master of the Warp"
              ],
              "features": [
                {
                  "id": "c686f24288f01fa5",
                  "name": "Master of the Warp",
                  "level": 20,
                  "status": "locked",
                  "description": "Once per Long Rest when you Draw from the Warp, make it a Perfect Draw: restore one expended spell slot you are currently eligible to recover, regardless of the normal PB-level requirement, and gain no Warp Exposure from that Draw. It still uses the normal Bonus Action.",
                  "campaignId": "progression.class.psyker.20.master_of_the_warp",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": ""
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "subclassIds": [
        "subclass.psyker.biomancer",
        "subclass.psyker.pyromancer",
        "subclass.psyker.telekinetic"
      ],
      "advancementCount": 26
    }
  ],
  "subclasses": [
    {
      "id": "1486921cb618462c",
      "name": "Warp Spider",
      "kind": "Item",
      "campaignId": "subclass.soldier.warp_spider",
      "status": "locked",
      "slug": "warp-spider",
      "classId": "class.soldier",
      "className": "Soldier",
      "summary": "Warp mobility + Death Spinner\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Warp mobility + Death Spinner\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.\n\nRestriction: Aeldari-only",
      "restriction": "Aeldari-only",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Warp Spider: Warp Jump Generator",
            "Warp Spider: Death Spinner Training"
          ],
          "features": [
            {
              "id": "7a9d8fe9dc5f43b1",
              "name": "Warp Spider: Warp Jump Generator",
              "level": 3,
              "status": "locked",
              "description": "As a Bonus Action, teleport up to 20 ft to an unoccupied space you can see. You may pass through creatures and solid obstacles but must end in open space. Uses = PB per Long Rest.",
              "campaignId": "subfeature.subclass.soldier.warp_spider.3.warp_jump_generator",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.warp_spider"
            },
            {
              "id": "b721e97512059431",
              "name": "Warp Spider: Death Spinner Training",
              "level": 3,
              "status": "locked",
              "description": "Gain proficiency with Death Spinner-family weapons. Your first Death Spinner attack before end of the turn after Warp Jump ignores Half Cover and treats Three-Quarters Cover as Half Cover.",
              "campaignId": "subfeature.subclass.soldier.warp_spider.3.death_spinner_training",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.warp_spider"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Warp Jump Generator",
              "names": [
                "Warp Spider: Warp Jump Generator"
              ],
              "features": [
                {
                  "id": "7a9d8fe9dc5f43b1",
                  "name": "Warp Spider: Warp Jump Generator",
                  "level": 3,
                  "status": "locked",
                  "description": "As a Bonus Action, teleport up to 20 ft to an unoccupied space you can see. You may pass through creatures and solid obstacles but must end in open space. Uses = PB per Long Rest.",
                  "campaignId": "subfeature.subclass.soldier.warp_spider.3.warp_jump_generator",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.warp_spider"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Death Spinner Training",
              "names": [
                "Warp Spider: Death Spinner Training"
              ],
              "features": [
                {
                  "id": "b721e97512059431",
                  "name": "Warp Spider: Death Spinner Training",
                  "level": 3,
                  "status": "locked",
                  "description": "Gain proficiency with Death Spinner-family weapons. Your first Death Spinner attack before end of the turn after Warp Jump ignores Half Cover and treats Three-Quarters Cover as Half Cover.",
                  "campaignId": "subfeature.subclass.soldier.warp_spider.3.death_spinner_training",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.warp_spider"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Warp Spider: Improved Warp Jump"
          ],
          "features": [
            {
              "id": "625c0f411c1d0106",
              "name": "Warp Spider: Improved Warp Jump",
              "level": 7,
              "status": "locked",
              "description": "Warp Jump range becomes 30 ft. When you finish a Short Rest, regain one expended Warp Jump use.",
              "campaignId": "subfeature.subclass.soldier.warp_spider.7.improved_warp_jump",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.warp_spider"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Improved Warp Jump",
              "names": [
                "Warp Spider: Improved Warp Jump"
              ],
              "features": [
                {
                  "id": "625c0f411c1d0106",
                  "name": "Warp Spider: Improved Warp Jump",
                  "level": 7,
                  "status": "locked",
                  "description": "Warp Jump range becomes 30 ft. When you finish a Short Rest, regain one expended Warp Jump use.",
                  "campaignId": "subfeature.subclass.soldier.warp_spider.7.improved_warp_jump",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.warp_spider"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Warp Spider: Flickerjump"
          ],
          "features": [
            {
              "id": "9ae76014c8e92d93",
              "name": "Warp Spider: Flickerjump",
              "level": 10,
              "status": "locked",
              "description": "When an attack hits you, use your Reaction to teleport up to 15 ft and reduce the triggering damage by 1d8 + PB. Uses = PB per Long Rest.",
              "campaignId": "subfeature.subclass.soldier.warp_spider.10.flickerjump",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.warp_spider"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Flickerjump",
              "names": [
                "Warp Spider: Flickerjump"
              ],
              "features": [
                {
                  "id": "9ae76014c8e92d93",
                  "name": "Warp Spider: Flickerjump",
                  "level": 10,
                  "status": "locked",
                  "description": "When an attack hits you, use your Reaction to teleport up to 15 ft and reduce the triggering damage by 1d8 + PB. Uses = PB per Long Rest.",
                  "campaignId": "subfeature.subclass.soldier.warp_spider.10.flickerjump",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.warp_spider"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Warp Spider: Phase Assault"
          ],
          "features": [
            {
              "id": "c140ffd0420a4166",
              "name": "Warp Spider: Phase Assault",
              "level": 15,
              "status": "locked",
              "description": "Immediately after Warp Jump, you have Advantage on your first weapon attack before end of turn. On a hit it deals +2d6 damage, or +3d6 if made with a Death Spinner. Once per turn.",
              "campaignId": "subfeature.subclass.soldier.warp_spider.15.phase_assault",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.warp_spider"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Phase Assault",
              "names": [
                "Warp Spider: Phase Assault"
              ],
              "features": [
                {
                  "id": "c140ffd0420a4166",
                  "name": "Warp Spider: Phase Assault",
                  "level": 15,
                  "status": "locked",
                  "description": "Immediately after Warp Jump, you have Advantage on your first weapon attack before end of turn. On a hit it deals +2d6 damage, or +3d6 if made with a Death Spinner. Once per turn.",
                  "campaignId": "subfeature.subclass.soldier.warp_spider.15.phase_assault",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.warp_spider"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Warp Spider: Master of the Warp Web"
          ],
          "features": [
            {
              "id": "f3b461e84b788ec9",
              "name": "Warp Spider: Master of the Warp Web",
              "level": 18,
              "status": "locked",
              "description": "Warp Jump no longer requires a Bonus Action: once on each of your turns you may Jump before or after one of your attacks without an action. Normal uses apply; when Initiative is rolled with no uses remaining, regain 1. Phase Assault becomes +3d6 with other qualifying weapons or +4d6 with a Death Spinner.",
              "campaignId": "subfeature.subclass.soldier.warp_spider.18.master_of_the_warp_web",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.warp_spider"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Master of the Warp Web",
              "names": [
                "Warp Spider: Master of the Warp Web"
              ],
              "features": [
                {
                  "id": "f3b461e84b788ec9",
                  "name": "Warp Spider: Master of the Warp Web",
                  "level": 18,
                  "status": "locked",
                  "description": "Warp Jump no longer requires a Bonus Action: once on each of your turns you may Jump before or after one of your attacks without an action. Normal uses apply; when Initiative is rolled with no uses remaining, regain 1. Phase Assault becomes +3d6 with other qualifying weapons or +4d6 with a Death Spinner.",
                  "campaignId": "subfeature.subclass.soldier.warp_spider.18.master_of_the_warp_web",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.warp_spider"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 6
    },
    {
      "id": "2f05284a707c2f68",
      "name": "Mechanist",
      "kind": "Item",
      "campaignId": "subclass.tech_adept.mechanist",
      "status": "locked",
      "slug": "mechanist",
      "classId": "class.tech_adept",
      "className": "Tech-Adept",
      "summary": "Constructs/drones; one permanent Steel Defender-style companion\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Constructs/drones; one permanent Steel Defender-style companion\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Mechanist: Primary Construct"
          ],
          "features": [
            {
              "id": "a2dfc83180bcecb9",
              "name": "Mechanist: Primary Construct",
              "level": 3,
              "status": "locked",
              "description": "Build one permanent Steel Defender-style construct. Medium Construct; AC 15; HP = 5 + five times Tech-Adept level; Speed 40 ft. Choose Assault frame (melee 5 ft) or Support frame (ranged 60 ft) after a Long Rest. Its attack uses your Tech Ability attack modifier and deals 1d8 + PB damage. It acts after you; unless commanded with your Bonus Action it Dodges. It can use Deflect as a Reaction to impose Disadvantage on one attack against a creature within 5 ft of it.",
              "campaignId": "subfeature.subclass.tech_adept.mechanist.3.primary_construct",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.mechanist"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Primary Construct",
              "names": [
                "Mechanist: Primary Construct"
              ],
              "features": [
                {
                  "id": "a2dfc83180bcecb9",
                  "name": "Mechanist: Primary Construct",
                  "level": 3,
                  "status": "locked",
                  "description": "Build one permanent Steel Defender-style construct. Medium Construct; AC 15; HP = 5 + five times Tech-Adept level; Speed 40 ft. Choose Assault frame (melee 5 ft) or Support frame (ranged 60 ft) after a Long Rest. Its attack uses your Tech Ability attack modifier and deals 1d8 + PB damage. It acts after you; unless commanded with your Bonus Action it Dodges. It can use Deflect as a Reaction to impose Disadvantage on one attack against a creature within 5 ft of it.",
                  "campaignId": "subfeature.subclass.tech_adept.mechanist.3.primary_construct",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.mechanist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [
            "Mechanist: Synchronized Targeting"
          ],
          "features": [
            {
              "id": "ce066d4c784aef1a",
              "name": "Mechanist: Synchronized Targeting",
              "level": 5,
              "status": "locked",
              "description": "Once per turn when you damage a creature with a Tech Ability or Tech-Integrated weapon, your Primary Construct has Advantage on its next attack against that creature before start of your next turn.",
              "campaignId": "subfeature.subclass.tech_adept.mechanist.5.synchronized_targeting",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.mechanist"
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Synchronized Targeting",
              "names": [
                "Mechanist: Synchronized Targeting"
              ],
              "features": [
                {
                  "id": "ce066d4c784aef1a",
                  "name": "Mechanist: Synchronized Targeting",
                  "level": 5,
                  "status": "locked",
                  "description": "Once per turn when you damage a creature with a Tech Ability or Tech-Integrated weapon, your Primary Construct has Advantage on its next attack against that creature before start of your next turn.",
                  "campaignId": "subfeature.subclass.tech_adept.mechanist.5.synchronized_targeting",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.mechanist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [
            "Mechanist: Advanced Construct"
          ],
          "features": [
            {
              "id": "b2cb5aa22d7239d1",
              "name": "Mechanist: Advanced Construct",
              "level": 9,
              "status": "locked",
              "description": "Primary Construct attack damage becomes 2d8 + PB and its AC becomes 16. If Deflect does not turn the triggering attack into a miss, reduce that attack’s damage by PB.",
              "campaignId": "subfeature.subclass.tech_adept.mechanist.9.advanced_construct",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.mechanist"
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Advanced Construct",
              "names": [
                "Mechanist: Advanced Construct"
              ],
              "features": [
                {
                  "id": "b2cb5aa22d7239d1",
                  "name": "Mechanist: Advanced Construct",
                  "level": 9,
                  "status": "locked",
                  "description": "Primary Construct attack damage becomes 2d8 + PB and its AC becomes 16. If Deflect does not turn the triggering attack into a miss, reduce that attack’s damage by PB.",
                  "campaignId": "subfeature.subclass.tech_adept.mechanist.9.advanced_construct",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.mechanist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Mechanist: Apex Warform"
          ],
          "features": [
            {
              "id": "419337f3f51aac47",
              "name": "Mechanist: Apex Warform",
              "level": 15,
              "status": "locked",
              "description": "Once per Long Rest, when you command your Primary Construct, empower it for 1 minute: it gains Temporary HP equal to twice your Tech-Adept level, +2 AC, and when commanded to Attack it makes two attacks instead of one.",
              "campaignId": "subfeature.subclass.tech_adept.mechanist.15.apex_warform",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.mechanist"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Apex Warform",
              "names": [
                "Mechanist: Apex Warform"
              ],
              "features": [
                {
                  "id": "419337f3f51aac47",
                  "name": "Mechanist: Apex Warform",
                  "level": 15,
                  "status": "locked",
                  "description": "Once per Long Rest, when you command your Primary Construct, empower it for 1 minute: it gains Temporary HP equal to twice your Tech-Adept level, +2 AC, and when commanded to Attack it makes two attacks instead of one.",
                  "campaignId": "subfeature.subclass.tech_adept.mechanist.15.apex_warform",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.mechanist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "301e46d7309d45a1",
      "name": "Crusader",
      "kind": "Item",
      "campaignId": "subclass.zealot.crusader",
      "status": "locked",
      "slug": "crusader",
      "classId": "class.zealot",
      "className": "Zealot",
      "summary": "Martial full-caster Zealot\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Martial full-caster Zealot\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Crusader: Unyielding Challenge",
            "Crusader: Unstoppable Charge"
          ],
          "features": [
            {
              "id": "538ff77fd66203d6",
              "name": "Crusader: Unyielding Challenge",
              "level": 3,
              "status": "locked",
              "description": "Spend 1 Fervor as a Bonus Action to mark one creature within 30 ft until end of your next turn. The first time during the mark that it attacks a creature other than you, that attack has Disadvantage.",
              "campaignId": "subfeature.subclass.zealot.crusader.3.unyielding_challenge",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.crusader"
            },
            {
              "id": "a8e74c927281202e",
              "name": "Crusader: Unstoppable Charge",
              "level": 3,
              "status": "locked",
              "description": "When you use Zealous Advance, your movement does not provoke Opportunity Attacks from the current target of Unyielding Challenge.",
              "campaignId": "subfeature.subclass.zealot.crusader.3.unstoppable_charge",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.crusader"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Unyielding Challenge",
              "names": [
                "Crusader: Unyielding Challenge"
              ],
              "features": [
                {
                  "id": "538ff77fd66203d6",
                  "name": "Crusader: Unyielding Challenge",
                  "level": 3,
                  "status": "locked",
                  "description": "Spend 1 Fervor as a Bonus Action to mark one creature within 30 ft until end of your next turn. The first time during the mark that it attacks a creature other than you, that attack has Disadvantage.",
                  "campaignId": "subfeature.subclass.zealot.crusader.3.unyielding_challenge",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.crusader"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Unstoppable Charge",
              "names": [
                "Crusader: Unstoppable Charge"
              ],
              "features": [
                {
                  "id": "a8e74c927281202e",
                  "name": "Crusader: Unstoppable Charge",
                  "level": 3,
                  "status": "locked",
                  "description": "When you use Zealous Advance, your movement does not provoke Opportunity Attacks from the current target of Unyielding Challenge.",
                  "campaignId": "subfeature.subclass.zealot.crusader.3.unstoppable_charge",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.crusader"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Crusader: Aura of Fortitude"
          ],
          "features": [
            {
              "id": "43f6c7ed8f6942bd",
              "name": "Crusader: Aura of Fortitude",
              "level": 7,
              "status": "locked",
              "description": "While conscious, allies within 10 ft that are below half their maximum HP gain +1 AC.",
              "campaignId": "subfeature.subclass.zealot.crusader.7.aura_of_fortitude",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.crusader"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Aura of Fortitude",
              "names": [
                "Crusader: Aura of Fortitude"
              ],
              "features": [
                {
                  "id": "43f6c7ed8f6942bd",
                  "name": "Crusader: Aura of Fortitude",
                  "level": 7,
                  "status": "locked",
                  "description": "While conscious, allies within 10 ft that are below half their maximum HP gain +1 AC.",
                  "campaignId": "subfeature.subclass.zealot.crusader.7.aura_of_fortitude",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.crusader"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Crusader: Improved Aura of Fortitude"
          ],
          "features": [
            {
              "id": "4e614f81e2cadd61",
              "name": "Crusader: Improved Aura of Fortitude",
              "level": 15,
              "status": "locked",
              "description": "Aura of Fortitude retains +1 AC below half HP and additionally grants Advantage on Death Saving Throws to allies within the aura.",
              "campaignId": "subfeature.subclass.zealot.crusader.15.improved_aura_of_fortitude",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.crusader"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Improved Aura of Fortitude",
              "names": [
                "Crusader: Improved Aura of Fortitude"
              ],
              "features": [
                {
                  "id": "4e614f81e2cadd61",
                  "name": "Crusader: Improved Aura of Fortitude",
                  "level": 15,
                  "status": "locked",
                  "description": "Aura of Fortitude retains +1 AC below half HP and additionally grants Advantage on Death Saving Throws to allies within the aura.",
                  "campaignId": "subfeature.subclass.zealot.crusader.15.improved_aura_of_fortitude",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.crusader"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [
            "Crusader: Saint of the Unbroken Line"
          ],
          "features": [
            {
              "id": "889b031d7e6de8a8",
              "name": "Crusader: Saint of the Unbroken Line",
              "level": 20,
              "status": "locked",
              "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. Gain Resistance to Bludgeoning, Piercing, and Slashing damage; Aura of Fortitude grants its +1 AC regardless of current HP; once per turn when you hit with a weapon attack deal +2d8 weapon damage; the first creature you hit on each of your turns becomes your Unyielding Challenge target until start of your next turn without Fervor.",
              "campaignId": "subfeature.subclass.zealot.crusader.20.saint_of_the_unbroken_line",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.crusader"
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Saint of the Unbroken Line",
              "names": [
                "Crusader: Saint of the Unbroken Line"
              ],
              "features": [
                {
                  "id": "889b031d7e6de8a8",
                  "name": "Crusader: Saint of the Unbroken Line",
                  "level": 20,
                  "status": "locked",
                  "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. Gain Resistance to Bludgeoning, Piercing, and Slashing damage; Aura of Fortitude grants its +1 AC regardless of current HP; once per turn when you hit with a weapon attack deal +2d8 weapon damage; the first creature you hit on each of your turns becomes your Unyielding Challenge target until start of your next turn without Fervor.",
                  "campaignId": "subfeature.subclass.zealot.crusader.20.saint_of_the_unbroken_line",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.crusader"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "featureCount": 5
    },
    {
      "id": "326dfa1bbaacfac1",
      "name": "Commander",
      "kind": "Item",
      "campaignId": "subclass.space_marine.commander",
      "status": "locked",
      "slug": "commander",
      "classId": "class.space_marine",
      "className": "Space Marine",
      "summary": "Leadership and combat auras\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Leadership and combat auras\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.\n\nRestriction: Human/Space Marine only",
      "restriction": "Human/Space Marine only",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Commander: Battle Orders"
          ],
          "features": [
            {
              "id": "2c817720af955648",
              "name": "Commander: Battle Orders",
              "level": 3,
              "status": "locked",
              "description": "You have PB uses per Long Rest. As a Bonus Action choose one ally within 30 ft that can see or hear you and issue one order: Advance (ally may use Reaction to move up to half Speed without provoking); Focus Fire (ally gains Advantage on its next attack before start of your next turn); Hold Fast (ally gains Temporary HP equal to CON modifier + PB).",
              "campaignId": "subfeature.subclass.space_marine.commander.3.battle_orders",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.commander"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Battle Orders",
              "names": [
                "Commander: Battle Orders"
              ],
              "features": [
                {
                  "id": "2c817720af955648",
                  "name": "Commander: Battle Orders",
                  "level": 3,
                  "status": "locked",
                  "description": "You have PB uses per Long Rest. As a Bonus Action choose one ally within 30 ft that can see or hear you and issue one order: Advance (ally may use Reaction to move up to half Speed without provoking); Focus Fire (ally gains Advantage on its next attack before start of your next turn); Hold Fast (ally gains Temporary HP equal to CON modifier + PB).",
                  "campaignId": "subfeature.subclass.space_marine.commander.3.battle_orders",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.commander"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Commander: Lead from the Front"
          ],
          "features": [
            {
              "id": "ad8159f9867427ea",
              "name": "Commander: Lead from the Front",
              "level": 6,
              "status": "locked",
              "description": "Once per round when an ally within 30 ft hits a creature that you have damaged since the start of your previous turn, add your PB to that ally’s damage.",
              "campaignId": "subfeature.subclass.space_marine.commander.6.lead_from_the_front",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.commander"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Lead from the Front",
              "names": [
                "Commander: Lead from the Front"
              ],
              "features": [
                {
                  "id": "ad8159f9867427ea",
                  "name": "Commander: Lead from the Front",
                  "level": 6,
                  "status": "locked",
                  "description": "Once per round when an ally within 30 ft hits a creature that you have damaged since the start of your previous turn, add your PB to that ally’s damage.",
                  "campaignId": "subfeature.subclass.space_marine.commander.6.lead_from_the_front",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.commander"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Commander: Veteran Command"
          ],
          "features": [
            {
              "id": "883544a5155e8787",
              "name": "Commander: Veteran Command",
              "level": 10,
              "status": "locked",
              "description": "When you issue a Battle Order, you may target two different allies with the same order by spending only one use. When you finish a Short Rest, regain one expended Battle Order use.",
              "campaignId": "subfeature.subclass.space_marine.commander.10.veteran_command",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.commander"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Veteran Command",
              "names": [
                "Commander: Veteran Command"
              ],
              "features": [
                {
                  "id": "883544a5155e8787",
                  "name": "Commander: Veteran Command",
                  "level": 10,
                  "status": "locked",
                  "description": "When you issue a Battle Order, you may target two different allies with the same order by spending only one use. When you finish a Short Rest, regain one expended Battle Order use.",
                  "campaignId": "subfeature.subclass.space_marine.commander.10.veteran_command",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.commander"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Commander: Supreme Commander"
          ],
          "features": [
            {
              "id": "f71a5aa74c2fe6c7",
              "name": "Commander: Supreme Commander",
              "level": 14,
              "status": "locked",
              "description": "Once per Long Rest when you enter Combat State, you may declare Decisive Command for the same duration. At the start of each of your turns while it lasts, issue one Battle Order to one eligible ally without a Bonus Action or expending a use. Battle Order range becomes 60 ft during Decisive Command.",
              "campaignId": "subfeature.subclass.space_marine.commander.14.supreme_commander",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.commander"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Supreme Commander",
              "names": [
                "Commander: Supreme Commander"
              ],
              "features": [
                {
                  "id": "f71a5aa74c2fe6c7",
                  "name": "Commander: Supreme Commander",
                  "level": 14,
                  "status": "locked",
                  "description": "Once per Long Rest when you enter Combat State, you may declare Decisive Command for the same duration. At the start of each of your turns while it lasts, issue one Battle Order to one eligible ally without a Bonus Action or expending a use. Battle Order range becomes 60 ft during Decisive Command.",
                  "campaignId": "subfeature.subclass.space_marine.commander.14.supreme_commander",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.commander"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "3e30a58089f9f618",
      "name": "Assault",
      "kind": "Item",
      "campaignId": "subclass.space_marine.assault",
      "status": "locked",
      "slug": "assault",
      "classId": "class.space_marine",
      "className": "Space Marine",
      "summary": "Mobility and melee\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Mobility and melee\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.\n\nRestriction: Human/Space Marine only",
      "restriction": "Human/Space Marine only",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Assault: Jump Pack Assault",
            "Assault: Meteoric Charge"
          ],
          "features": [
            {
              "id": "b22de4b98985025c",
              "name": "Assault: Jump Pack Assault",
              "level": 3,
              "status": "locked",
              "description": "Gain an integrated jump pack as subclass-defining equipment that does not consume Power Armor Upgrade capacity. While not Incapacitated, PB times per Long Rest as a Bonus Action fly up to your Speed; you must end on a surface that can support you or fall. Entering Combat State does not prevent using this feature on later turns.",
              "campaignId": "subfeature.subclass.space_marine.assault.3.jump_pack_assault",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.assault"
            },
            {
              "id": "70613c5d1a852e5f",
              "name": "Assault: Meteoric Charge",
              "level": 3,
              "status": "locked",
              "description": "Once per turn, if you moved at least 20 ft during the turn and at least 10 ft of that movement was airborne from Jump Pack Assault, your first melee weapon hit deals +1d6 weapon damage; Large-or-smaller target makes STR save (DC 8 + PB + STR) or falls Prone.",
              "campaignId": "subfeature.subclass.space_marine.assault.3.meteoric_charge",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.assault"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Jump Pack Assault",
              "names": [
                "Assault: Jump Pack Assault"
              ],
              "features": [
                {
                  "id": "b22de4b98985025c",
                  "name": "Assault: Jump Pack Assault",
                  "level": 3,
                  "status": "locked",
                  "description": "Gain an integrated jump pack as subclass-defining equipment that does not consume Power Armor Upgrade capacity. While not Incapacitated, PB times per Long Rest as a Bonus Action fly up to your Speed; you must end on a surface that can support you or fall. Entering Combat State does not prevent using this feature on later turns.",
                  "campaignId": "subfeature.subclass.space_marine.assault.3.jump_pack_assault",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.assault"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Meteoric Charge",
              "names": [
                "Assault: Meteoric Charge"
              ],
              "features": [
                {
                  "id": "70613c5d1a852e5f",
                  "name": "Assault: Meteoric Charge",
                  "level": 3,
                  "status": "locked",
                  "description": "Once per turn, if you moved at least 20 ft during the turn and at least 10 ft of that movement was airborne from Jump Pack Assault, your first melee weapon hit deals +1d6 weapon damage; Large-or-smaller target makes STR save (DC 8 + PB + STR) or falls Prone.",
                  "campaignId": "subfeature.subclass.space_marine.assault.3.meteoric_charge",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.assault"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Assault: Aerial Predator"
          ],
          "features": [
            {
              "id": "90528986cf5aae2c",
              "name": "Assault: Aerial Predator",
              "level": 6,
              "status": "locked",
              "description": "Jump Pack Assault range becomes Speed + 10 ft and you regain one expended use on a Short Rest. Falling damage you take is reduced by five times your Space Marine level while your jump pack functions.",
              "campaignId": "subfeature.subclass.space_marine.assault.6.aerial_predator",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.assault"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Aerial Predator",
              "names": [
                "Assault: Aerial Predator"
              ],
              "features": [
                {
                  "id": "90528986cf5aae2c",
                  "name": "Assault: Aerial Predator",
                  "level": 6,
                  "status": "locked",
                  "description": "Jump Pack Assault range becomes Speed + 10 ft and you regain one expended use on a Short Rest. Falling damage you take is reduced by five times your Space Marine level while your jump pack functions.",
                  "campaignId": "subfeature.subclass.space_marine.assault.6.aerial_predator",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.assault"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Assault: Shock Descent"
          ],
          "features": [
            {
              "id": "333f68c063caf493",
              "name": "Assault: Shock Descent",
              "level": 10,
              "status": "locked",
              "description": "Once per turn when you end Jump Pack Assault on the ground, choose creatures within 10 ft up to PB. Each makes STR save (DC 8 + PB + STR); on failure it takes 2d6 Bludgeoning and falls Prone, on success half damage and remains standing.",
              "campaignId": "subfeature.subclass.space_marine.assault.10.shock_descent",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.assault"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Shock Descent",
              "names": [
                "Assault: Shock Descent"
              ],
              "features": [
                {
                  "id": "333f68c063caf493",
                  "name": "Assault: Shock Descent",
                  "level": 10,
                  "status": "locked",
                  "description": "Once per turn when you end Jump Pack Assault on the ground, choose creatures within 10 ft up to PB. Each makes STR save (DC 8 + PB + STR); on failure it takes 2d6 Bludgeoning and falls Prone, on success half damage and remains standing.",
                  "campaignId": "subfeature.subclass.space_marine.assault.10.shock_descent",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.assault"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Assault: Angel of Death"
          ],
          "features": [
            {
              "id": "0ce66bb225263a29",
              "name": "Assault: Angel of Death",
              "level": 14,
              "status": "locked",
              "description": "While Combat State is active, Jump Pack Assault no longer expends uses, though it still uses your Bonus Action. Meteoric Charge bonus becomes +2d6 and movement from Jump Pack Assault does not provoke Opportunity Attacks.",
              "campaignId": "subfeature.subclass.space_marine.assault.14.angel_of_death",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.assault"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Angel of Death",
              "names": [
                "Assault: Angel of Death"
              ],
              "features": [
                {
                  "id": "0ce66bb225263a29",
                  "name": "Assault: Angel of Death",
                  "level": 14,
                  "status": "locked",
                  "description": "While Combat State is active, Jump Pack Assault no longer expends uses, though it still uses your Bonus Action. Meteoric Charge bonus becomes +2d6 and movement from Jump Pack Assault does not provoke Opportunity Attacks.",
                  "campaignId": "subfeature.subclass.space_marine.assault.14.angel_of_death",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.assault"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 5
    },
    {
      "id": "5284d1d2898f8bc1",
      "name": "Energy Savant",
      "kind": "Item",
      "campaignId": "subclass.tech_adept.energy_savant",
      "status": "locked",
      "slug": "energy-savant",
      "classId": "class.tech_adept",
      "className": "Tech-Adept",
      "summary": "Plasma/electric/ion/EMP/gravity/fields\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Plasma/electric/ion/EMP/gravity/fields\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Energy Savant: Energy Calibration"
          ],
          "features": [
            {
              "id": "c0793cafe48b5b9f",
              "name": "Energy Savant: Energy Calibration",
              "level": 3,
              "status": "locked",
              "description": "When you cast a Tech Ability that deals Fire, Lightning, or Force damage, you may change that damage to one of the other two types. Once per turn, reroll one damage die of a Tech Ability dealing one of those types; you must use the new roll.",
              "campaignId": "subfeature.subclass.tech_adept.energy_savant.3.energy_calibration",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.energy_savant"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Energy Calibration",
              "names": [
                "Energy Savant: Energy Calibration"
              ],
              "features": [
                {
                  "id": "c0793cafe48b5b9f",
                  "name": "Energy Savant: Energy Calibration",
                  "level": 3,
                  "status": "locked",
                  "description": "When you cast a Tech Ability that deals Fire, Lightning, or Force damage, you may change that damage to one of the other two types. Once per turn, reroll one damage die of a Tech Ability dealing one of those types; you must use the new roll.",
                  "campaignId": "subfeature.subclass.tech_adept.energy_savant.3.energy_calibration",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.energy_savant"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [
            "Energy Savant: Power Modulation"
          ],
          "features": [
            {
              "id": "1ef1cc01e98a7a61",
              "name": "Energy Savant: Power Modulation",
              "level": 5,
              "status": "locked",
              "description": "Once per turn when a Tech Ability deals Fire, Lightning, or Force damage, add your INT modifier to one damage roll of that ability.",
              "campaignId": "subfeature.subclass.tech_adept.energy_savant.5.power_modulation",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.energy_savant"
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Power Modulation",
              "names": [
                "Energy Savant: Power Modulation"
              ],
              "features": [
                {
                  "id": "1ef1cc01e98a7a61",
                  "name": "Energy Savant: Power Modulation",
                  "level": 5,
                  "status": "locked",
                  "description": "Once per turn when a Tech Ability deals Fire, Lightning, or Force damage, add your INT modifier to one damage roll of that ability.",
                  "campaignId": "subfeature.subclass.tech_adept.energy_savant.5.power_modulation",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.energy_savant"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [
            "Energy Savant: Reactive Field"
          ],
          "features": [
            {
              "id": "99d624f01d460d95",
              "name": "Energy Savant: Reactive Field",
              "level": 9,
              "status": "locked",
              "description": "When you take Acid, Cold, Fire, Force, Lightning, or Thunder damage, use your Reaction to gain Resistance to the triggering damage instance and until start of your next turn. Uses = PB per Long Rest.",
              "campaignId": "subfeature.subclass.tech_adept.energy_savant.9.reactive_field",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.energy_savant"
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Reactive Field",
              "names": [
                "Energy Savant: Reactive Field"
              ],
              "features": [
                {
                  "id": "99d624f01d460d95",
                  "name": "Energy Savant: Reactive Field",
                  "level": 9,
                  "status": "locked",
                  "description": "When you take Acid, Cold, Fire, Force, Lightning, or Thunder damage, use your Reaction to gain Resistance to the triggering damage instance and until start of your next turn. Uses = PB per Long Rest.",
                  "campaignId": "subfeature.subclass.tech_adept.energy_savant.9.reactive_field",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.energy_savant"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Energy Savant: Conversion Mastery"
          ],
          "features": [
            {
              "id": "aafabcb3525ffd20",
              "name": "Energy Savant: Conversion Mastery",
              "level": 15,
              "status": "locked",
              "description": "Gain permanent Resistance to Fire, Force, and Lightning damage. When you use Reactive Field, your next Tech Ability or Tech-Integrated weapon attack that deals damage before end of your next turn deals +2d8 damage to one target; use the triggering damage type if that ability/weapon can deal it, otherwise Force.",
              "campaignId": "subfeature.subclass.tech_adept.energy_savant.15.conversion_mastery",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.energy_savant"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Conversion Mastery",
              "names": [
                "Energy Savant: Conversion Mastery"
              ],
              "features": [
                {
                  "id": "aafabcb3525ffd20",
                  "name": "Energy Savant: Conversion Mastery",
                  "level": 15,
                  "status": "locked",
                  "description": "Gain permanent Resistance to Fire, Force, and Lightning damage. When you use Reactive Field, your next Tech Ability or Tech-Integrated weapon attack that deals damage before end of your next turn deals +2d8 damage to one target; use the triggering damage type if that ability/weapon can deal it, otherwise Force.",
                  "campaignId": "subfeature.subclass.tech_adept.energy_savant.15.conversion_mastery",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.energy_savant"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "5950831b2b7e7754",
      "name": "Preacher",
      "kind": "Item",
      "campaignId": "subclass.zealot.preacher",
      "status": "locked",
      "slug": "preacher",
      "classId": "class.zealot",
      "className": "Zealot",
      "summary": "Buffs, healing, support, auras\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Buffs, healing, support, auras\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Preacher: Rally the Faithful",
            "Preacher: Intercession"
          ],
          "features": [
            {
              "id": "ced1b037b1ba213b",
              "name": "Preacher: Rally the Faithful",
              "level": 3,
              "status": "locked",
              "description": "Spend 1 Fervor as a Bonus Action; one ally within 30 ft gains Temporary HP equal to Zealot level + CHA modifier.",
              "campaignId": "subfeature.subclass.zealot.preacher.3.rally_the_faithful",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.preacher"
            },
            {
              "id": "8c69083bfd91c9de",
              "name": "Preacher: Intercession",
              "level": 3,
              "status": "locked",
              "description": "When an ally within 30 ft takes damage, you may use Shield of Conviction on that ally instead of yourself, spending Fervor and your Reaction normally.",
              "campaignId": "subfeature.subclass.zealot.preacher.3.intercession",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.preacher"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Rally the Faithful",
              "names": [
                "Preacher: Rally the Faithful"
              ],
              "features": [
                {
                  "id": "ced1b037b1ba213b",
                  "name": "Preacher: Rally the Faithful",
                  "level": 3,
                  "status": "locked",
                  "description": "Spend 1 Fervor as a Bonus Action; one ally within 30 ft gains Temporary HP equal to Zealot level + CHA modifier.",
                  "campaignId": "subfeature.subclass.zealot.preacher.3.rally_the_faithful",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.preacher"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Intercession",
              "names": [
                "Preacher: Intercession"
              ],
              "features": [
                {
                  "id": "8c69083bfd91c9de",
                  "name": "Preacher: Intercession",
                  "level": 3,
                  "status": "locked",
                  "description": "When an ally within 30 ft takes damage, you may use Shield of Conviction on that ally instead of yourself, spending Fervor and your Reaction normally.",
                  "campaignId": "subfeature.subclass.zealot.preacher.3.intercession",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.preacher"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Preacher: Aura of Resolve"
          ],
          "features": [
            {
              "id": "0b53ba3c1e23eb1a",
              "name": "Preacher: Aura of Resolve",
              "level": 7,
              "status": "locked",
              "description": "While conscious, allies within 10 ft gain +2 on saving throws against Frightened and Charmed.",
              "campaignId": "subfeature.subclass.zealot.preacher.7.aura_of_resolve",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.preacher"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Aura of Resolve",
              "names": [
                "Preacher: Aura of Resolve"
              ],
              "features": [
                {
                  "id": "0b53ba3c1e23eb1a",
                  "name": "Preacher: Aura of Resolve",
                  "level": 7,
                  "status": "locked",
                  "description": "While conscious, allies within 10 ft gain +2 on saving throws against Frightened and Charmed.",
                  "campaignId": "subfeature.subclass.zealot.preacher.7.aura_of_resolve",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.preacher"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Preacher: Improved Aura of Resolve"
          ],
          "features": [
            {
              "id": "18b9321d8378dfc5",
              "name": "Preacher: Improved Aura of Resolve",
              "level": 15,
              "status": "locked",
              "description": "Aura of Resolve radius becomes 30 ft; the bonus remains +2.",
              "campaignId": "subfeature.subclass.zealot.preacher.15.improved_aura_of_resolve",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.preacher"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Improved Aura of Resolve",
              "names": [
                "Preacher: Improved Aura of Resolve"
              ],
              "features": [
                {
                  "id": "18b9321d8378dfc5",
                  "name": "Preacher: Improved Aura of Resolve",
                  "level": 15,
                  "status": "locked",
                  "description": "Aura of Resolve radius becomes 30 ft; the bonus remains +2.",
                  "campaignId": "subfeature.subclass.zealot.preacher.15.improved_aura_of_resolve",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.preacher"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [
            "Preacher: Living Sermon"
          ],
          "features": [
            {
              "id": "2b091978365c740b",
              "name": "Preacher: Living Sermon",
              "level": 20,
              "status": "locked",
              "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. Aura of Resolve grants immunity to Frightened and Charmed instead of +2. At start of an ally’s turn in the aura, if it has no Temporary HP it gains Temporary HP equal to CHA modifier + PB. Once per round you may use Intercession without spending Fervor (Reaction still required).",
              "campaignId": "subfeature.subclass.zealot.preacher.20.living_sermon",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.preacher"
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Living Sermon",
              "names": [
                "Preacher: Living Sermon"
              ],
              "features": [
                {
                  "id": "2b091978365c740b",
                  "name": "Preacher: Living Sermon",
                  "level": 20,
                  "status": "locked",
                  "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. Aura of Resolve grants immunity to Frightened and Charmed instead of +2. At start of an ally’s turn in the aura, if it has no Temporary HP it gains Temporary HP equal to CHA modifier + PB. Once per round you may use Intercession without spending Fervor (Reaction still required).",
                  "campaignId": "subfeature.subclass.zealot.preacher.20.living_sermon",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.preacher"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "featureCount": 5
    },
    {
      "id": "5c86548edc727a66",
      "name": "Chirurgeon",
      "kind": "Item",
      "campaignId": "subclass.tech_adept.chirurgeon",
      "status": "locked",
      "slug": "chirurgeon",
      "classId": "class.tech_adept",
      "className": "Tech-Adept",
      "summary": "Non-psychic technological medicine/restoration\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Non-psychic technological medicine/restoration\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Chirurgeon: Battlefield Medicae"
          ],
          "features": [
            {
              "id": "921346feeb7d89b5",
              "name": "Chirurgeon: Battlefield Medicae",
              "level": 3,
              "status": "locked",
              "description": "Gain Medicine proficiency or Expertise if already proficient. You may stabilize a creature with a Medicae Kit as a Bonus Action. Once per turn when a Tech Ability restores HP to a creature, add your INT modifier to that healing.",
              "campaignId": "subfeature.subclass.tech_adept.chirurgeon.3.battlefield_medicae",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.chirurgeon"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Battlefield Medicae",
              "names": [
                "Chirurgeon: Battlefield Medicae"
              ],
              "features": [
                {
                  "id": "921346feeb7d89b5",
                  "name": "Chirurgeon: Battlefield Medicae",
                  "level": 3,
                  "status": "locked",
                  "description": "Gain Medicine proficiency or Expertise if already proficient. You may stabilize a creature with a Medicae Kit as a Bonus Action. Once per turn when a Tech Ability restores HP to a creature, add your INT modifier to that healing.",
                  "campaignId": "subfeature.subclass.tech_adept.chirurgeon.3.battlefield_medicae",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.chirurgeon"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [
            "Chirurgeon: Combat Stimulants"
          ],
          "features": [
            {
              "id": "9ab07a2ab7266039",
              "name": "Chirurgeon: Combat Stimulants",
              "level": 5,
              "status": "locked",
              "description": "When a level 1+ Tech Ability restores HP to a creature, that creature may use its Reaction to either stand from Prone without spending movement or move up to 10 ft without provoking Opportunity Attacks.",
              "campaignId": "subfeature.subclass.tech_adept.chirurgeon.5.combat_stimulants",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.chirurgeon"
            }
          ],
          "entries": [
            {
              "level": 5,
              "type": "ItemGrant",
              "title": "Combat Stimulants",
              "names": [
                "Chirurgeon: Combat Stimulants"
              ],
              "features": [
                {
                  "id": "9ab07a2ab7266039",
                  "name": "Chirurgeon: Combat Stimulants",
                  "level": 5,
                  "status": "locked",
                  "description": "When a level 1+ Tech Ability restores HP to a creature, that creature may use its Reaction to either stand from Prone without spending movement or move up to 10 ft without provoking Opportunity Attacks.",
                  "campaignId": "subfeature.subclass.tech_adept.chirurgeon.5.combat_stimulants",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.chirurgeon"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [
            "Chirurgeon: Bionic Reconstruction"
          ],
          "features": [
            {
              "id": "f1ef0e3201c5b4f7",
              "name": "Chirurgeon: Bionic Reconstruction",
              "level": 9,
              "status": "locked",
              "description": "During a Long Rest, with Tech/Tinker’s Tools or Medicae tools and suitable components, treat one lingering physical Critical Injury on a creature. You can suppress its mechanical penalties until the next Long Rest; if an appropriate bionic/prosthetic Item is available, install it and resolve a permanent limb/organ loss as that Item permits. In addition, PB times per Long Rest when your Tech Ability restores HP, you may also end Poisoned on that target.",
              "campaignId": "subfeature.subclass.tech_adept.chirurgeon.9.bionic_reconstruction",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.chirurgeon"
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Bionic Reconstruction",
              "names": [
                "Chirurgeon: Bionic Reconstruction"
              ],
              "features": [
                {
                  "id": "f1ef0e3201c5b4f7",
                  "name": "Chirurgeon: Bionic Reconstruction",
                  "level": 9,
                  "status": "locked",
                  "description": "During a Long Rest, with Tech/Tinker’s Tools or Medicae tools and suitable components, treat one lingering physical Critical Injury on a creature. You can suppress its mechanical penalties until the next Long Rest; if an appropriate bionic/prosthetic Item is available, install it and resolve a permanent limb/organ loss as that Item permits. In addition, PB times per Long Rest when your Tech Ability restores HP, you may also end Poisoned on that target.",
                  "campaignId": "subfeature.subclass.tech_adept.chirurgeon.9.bionic_reconstruction",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.chirurgeon"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Chirurgeon: Master Chirurgeon"
          ],
          "features": [
            {
              "id": "f75005fabf85b9e5",
              "name": "Chirurgeon: Master Chirurgeon",
              "level": 15,
              "status": "locked",
              "description": "Once per Long Rest, when a creature you can see within 30 ft would be reduced to 0 HP or would fail its third Death Saving Throw, use your Reaction to leave it at 1 HP and then restore 4d8 + INT HP.",
              "campaignId": "subfeature.subclass.tech_adept.chirurgeon.15.master_chirurgeon",
              "ownerClassId": "class.tech_adept",
              "ownerSubclassId": "subclass.tech_adept.chirurgeon"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Master Chirurgeon",
              "names": [
                "Chirurgeon: Master Chirurgeon"
              ],
              "features": [
                {
                  "id": "f75005fabf85b9e5",
                  "name": "Chirurgeon: Master Chirurgeon",
                  "level": 15,
                  "status": "locked",
                  "description": "Once per Long Rest, when a creature you can see within 30 ft would be reduced to 0 HP or would fail its third Death Saving Throw, use your Reaction to leave it at 1 HP and then restore 4d8 + INT HP.",
                  "campaignId": "subfeature.subclass.tech_adept.chirurgeon.15.master_chirurgeon",
                  "ownerClassId": "class.tech_adept",
                  "ownerSubclassId": "subclass.tech_adept.chirurgeon"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "6153adacc92a23d6",
      "name": "Blade Master",
      "kind": "Item",
      "campaignId": "subclass.operative.blade_master",
      "status": "locked",
      "slug": "blade-master",
      "classId": "class.operative",
      "className": "Operative",
      "summary": "Melee dueling, riposte, critical precision\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Melee dueling, riposte, critical precision\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Blade Master: Precision Blade",
            "Blade Master: Duelist's Footwork"
          ],
          "features": [
            {
              "id": "3b042147e6806e71",
              "name": "Blade Master: Precision Blade",
              "level": 3,
              "status": "locked",
              "description": "You may deal Sneak Attack with any proficient melee weapon that lacks the Heavy property; it need not have Finesse.",
              "campaignId": "subfeature.subclass.operative.blade_master.3.precision_blade",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.blade_master"
            },
            {
              "id": "e677a627695cb889",
              "name": "Blade Master: Duelist's Footwork",
              "level": 3,
              "status": "locked",
              "description": "After you make a melee weapon attack against a creature, that creature cannot make Opportunity Attacks against you for the rest of your turn.",
              "campaignId": "subfeature.subclass.operative.blade_master.3.duelist_s_footwork",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.blade_master"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Precision Blade",
              "names": [
                "Blade Master: Precision Blade"
              ],
              "features": [
                {
                  "id": "3b042147e6806e71",
                  "name": "Blade Master: Precision Blade",
                  "level": 3,
                  "status": "locked",
                  "description": "You may deal Sneak Attack with any proficient melee weapon that lacks the Heavy property; it need not have Finesse.",
                  "campaignId": "subfeature.subclass.operative.blade_master.3.precision_blade",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.blade_master"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Duelist's Footwork",
              "names": [
                "Blade Master: Duelist's Footwork"
              ],
              "features": [
                {
                  "id": "e677a627695cb889",
                  "name": "Blade Master: Duelist's Footwork",
                  "level": 3,
                  "status": "locked",
                  "description": "After you make a melee weapon attack against a creature, that creature cannot make Opportunity Attacks against you for the rest of your turn.",
                  "campaignId": "subfeature.subclass.operative.blade_master.3.duelist_s_footwork",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.blade_master"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [
            "Blade Master: Riposte"
          ],
          "features": [
            {
              "id": "620f25e2cf577946",
              "name": "Blade Master: Riposte",
              "level": 9,
              "status": "locked",
              "description": "When a creature within your melee reach misses you with a melee attack, use your Reaction to make one melee weapon attack against it. Uses = PB per Long Rest. This off-turn attack can qualify for Sneak Attack normally.",
              "campaignId": "subfeature.subclass.operative.blade_master.9.riposte",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.blade_master"
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Riposte",
              "names": [
                "Blade Master: Riposte"
              ],
              "features": [
                {
                  "id": "620f25e2cf577946",
                  "name": "Blade Master: Riposte",
                  "level": 9,
                  "status": "locked",
                  "description": "When a creature within your melee reach misses you with a melee attack, use your Reaction to make one melee weapon attack against it. Uses = PB per Long Rest. This off-turn attack can qualify for Sneak Attack normally.",
                  "campaignId": "subfeature.subclass.operative.blade_master.9.riposte",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.blade_master"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [
            "Blade Master: Killing Stroke",
            "Blade Master: Combination Strike"
          ],
          "features": [
            {
              "id": "3631dd1c35667aa6",
              "name": "Blade Master: Killing Stroke",
              "level": 13,
              "status": "locked",
              "description": "When you score a Critical Hit with a melee weapon, add two additional weapon damage dice to the critical hit, before Sneak Attack and other bonus dice.",
              "campaignId": "subfeature.subclass.operative.blade_master.13.killing_stroke",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.blade_master"
            },
            {
              "id": "c9ae7d946517e4e2",
              "name": "Blade Master: Combination Strike",
              "level": 13,
              "status": "locked",
              "description": "After you hit a creature with a melee Sneak Attack, your next melee weapon attack against that creature before end of your next turn gains +2 to the attack roll.",
              "campaignId": "subfeature.subclass.operative.blade_master.13.combination_strike",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.blade_master"
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Killing Stroke",
              "names": [
                "Blade Master: Killing Stroke"
              ],
              "features": [
                {
                  "id": "3631dd1c35667aa6",
                  "name": "Blade Master: Killing Stroke",
                  "level": 13,
                  "status": "locked",
                  "description": "When you score a Critical Hit with a melee weapon, add two additional weapon damage dice to the critical hit, before Sneak Attack and other bonus dice.",
                  "campaignId": "subfeature.subclass.operative.blade_master.13.killing_stroke",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.blade_master"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Combination Strike",
              "names": [
                "Blade Master: Combination Strike"
              ],
              "features": [
                {
                  "id": "c9ae7d946517e4e2",
                  "name": "Blade Master: Combination Strike",
                  "level": 13,
                  "status": "locked",
                  "description": "After you hit a creature with a melee Sneak Attack, your next melee weapon attack against that creature before end of your next turn gains +2 to the attack roll.",
                  "campaignId": "subfeature.subclass.operative.blade_master.13.combination_strike",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.blade_master"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [
            "Blade Master: Perfect Duelist"
          ],
          "features": [
            {
              "id": "53c03dc7d9ae01f9",
              "name": "Blade Master: Perfect Duelist",
              "level": 17,
              "status": "locked",
              "description": "When you take the Attack action using a melee weapon, make one additional melee weapon attack as a Bonus Action. Riposte no longer has limited uses, and a Riposte that hits adds PB to its damage.",
              "campaignId": "subfeature.subclass.operative.blade_master.17.perfect_duelist",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.blade_master"
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Perfect Duelist",
              "names": [
                "Blade Master: Perfect Duelist"
              ],
              "features": [
                {
                  "id": "53c03dc7d9ae01f9",
                  "name": "Blade Master: Perfect Duelist",
                  "level": 17,
                  "status": "locked",
                  "description": "When you take the Attack action using a melee weapon, make one additional melee weapon attack as a Bonus Action. Riposte no longer has limited uses, and a Riposte that hits adds PB to its damage.",
                  "campaignId": "subfeature.subclass.operative.blade_master.17.perfect_duelist",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.blade_master"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 6
    },
    {
      "id": "6311a03ba683a181",
      "name": "Telekinetic",
      "kind": "Item",
      "campaignId": "subclass.psyker.telekinetic",
      "status": "locked",
      "slug": "telekinetic",
      "classId": "class.psyker",
      "className": "Psyker",
      "summary": "Force/control; telepathy folded into discipline\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Force/control; telepathy folded into discipline\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Telekinetic: Telekinetic Discipline"
          ],
          "features": [
            {
              "id": "322d61de247ebb29",
              "name": "Telekinetic: Telekinetic Discipline",
              "level": 3,
              "status": "locked",
              "description": "Your Telekinetic-exclusive Psychic Powers are always known. Kinetic Impulse: once per turn when a creature is hit by your Psychic Power attack or fails a save against your Psychic Power, move a Large-or-smaller target 5 ft toward or away from you. Willing creatures can always be moved.",
              "campaignId": "subfeature.subclass.psyker.telekinetic.3.telekinetic_discipline",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.telekinetic"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Telekinetic Discipline",
              "names": [
                "Telekinetic: Telekinetic Discipline"
              ],
              "features": [
                {
                  "id": "322d61de247ebb29",
                  "name": "Telekinetic: Telekinetic Discipline",
                  "level": 3,
                  "status": "locked",
                  "description": "Your Telekinetic-exclusive Psychic Powers are always known. Kinetic Impulse: once per turn when a creature is hit by your Psychic Power attack or fails a save against your Psychic Power, move a Large-or-smaller target 5 ft toward or away from you. Willing creatures can always be moved.",
                  "campaignId": "subfeature.subclass.psyker.telekinetic.3.telekinetic_discipline",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.telekinetic"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Telekinetic: Kinetic Barrier"
          ],
          "features": [
            {
              "id": "5900721caff86347",
              "name": "Telekinetic: Kinetic Barrier",
              "level": 6,
              "status": "locked",
              "description": "When you or an ally within 30 ft is hit by an attack, use your Reaction to grant +2 AC against that attack, potentially turning it into a miss. Uses = PB per Long Rest.",
              "campaignId": "subfeature.subclass.psyker.telekinetic.6.kinetic_barrier",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.telekinetic"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Kinetic Barrier",
              "names": [
                "Telekinetic: Kinetic Barrier"
              ],
              "features": [
                {
                  "id": "5900721caff86347",
                  "name": "Telekinetic: Kinetic Barrier",
                  "level": 6,
                  "status": "locked",
                  "description": "When you or an ally within 30 ft is hit by an attack, use your Reaction to grant +2 AC against that attack, potentially turning it into a miss. Uses = PB per Long Rest.",
                  "campaignId": "subfeature.subclass.psyker.telekinetic.6.kinetic_barrier",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.telekinetic"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Telekinetic: Master of Motion"
          ],
          "features": [
            {
              "id": "aab0232da987c2b9",
              "name": "Telekinetic: Master of Motion",
              "level": 14,
              "status": "locked",
              "description": "Kinetic Impulse moves a target 10 ft and can affect Huge creatures. While conscious, you gain a 30-ft Fly Speed with Hover through sustained telekinetic lift.",
              "campaignId": "subfeature.subclass.psyker.telekinetic.14.master_of_motion",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.telekinetic"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Master of Motion",
              "names": [
                "Telekinetic: Master of Motion"
              ],
              "features": [
                {
                  "id": "aab0232da987c2b9",
                  "name": "Telekinetic: Master of Motion",
                  "level": 14,
                  "status": "locked",
                  "description": "Kinetic Impulse moves a target 10 ft and can affect Huge creatures. While conscious, you gain a 30-ft Fly Speed with Hover through sustained telekinetic lift.",
                  "campaignId": "subfeature.subclass.psyker.telekinetic.14.master_of_motion",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.telekinetic"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Telekinetic: Absolute Force"
          ],
          "features": [
            {
              "id": "20f231f79d16e2f0",
              "name": "Telekinetic: Absolute Force",
              "level": 18,
              "status": "locked",
              "description": "Kinetic Barrier no longer has limited uses (Reaction still limits it to once per round). Once per turn, Kinetic Impulse can move an unwilling Large-or-smaller creature up to 20 ft; after the movement you may knock it Prone. Huge targets remain limited to 10 ft and cannot be knocked Prone by this feature.",
              "campaignId": "subfeature.subclass.psyker.telekinetic.18.absolute_force",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.telekinetic"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Absolute Force",
              "names": [
                "Telekinetic: Absolute Force"
              ],
              "features": [
                {
                  "id": "20f231f79d16e2f0",
                  "name": "Telekinetic: Absolute Force",
                  "level": 18,
                  "status": "locked",
                  "description": "Kinetic Barrier no longer has limited uses (Reaction still limits it to once per round). Once per turn, Kinetic Impulse can move an unwilling Large-or-smaller creature up to 20 ft; after the movement you may knock it Prone. Huge targets remain limited to 10 ft and cannot be knocked Prone by this feature.",
                  "campaignId": "subfeature.subclass.psyker.telekinetic.18.absolute_force",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.telekinetic"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "661405fd7b884728",
      "name": "Heavy",
      "kind": "Item",
      "campaignId": "subclass.space_marine.heavy",
      "status": "locked",
      "slug": "heavy",
      "classId": "class.space_marine",
      "className": "Space Marine",
      "summary": "Heavy ranged weapons\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Heavy ranged weapons\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.\n\nRestriction: Human/Space Marine only",
      "restriction": "Human/Space Marine only",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Heavy: Heavy Weapons Doctrine"
          ],
          "features": [
            {
              "id": "d6fcf426109c4e4b",
              "name": "Heavy: Heavy Weapons Doctrine",
              "level": 3,
              "status": "locked",
              "description": "Choose one Astartes Heavy weapon family you are proficient with after each Long Rest. While using a weapon from that family, hostile creatures within 5 ft do not impose Disadvantage on your ranged attacks solely for being adjacent, and once per turn while Combat State is active one hit with that family deals extra damage equal to your Combat State damage bonus.",
              "campaignId": "subfeature.subclass.space_marine.heavy.3.heavy_weapons_doctrine",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.heavy"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Heavy Weapons Doctrine",
              "names": [
                "Heavy: Heavy Weapons Doctrine"
              ],
              "features": [
                {
                  "id": "d6fcf426109c4e4b",
                  "name": "Heavy: Heavy Weapons Doctrine",
                  "level": 3,
                  "status": "locked",
                  "description": "Choose one Astartes Heavy weapon family you are proficient with after each Long Rest. While using a weapon from that family, hostile creatures within 5 ft do not impose Disadvantage on your ranged attacks solely for being adjacent, and once per turn while Combat State is active one hit with that family deals extra damage equal to your Combat State damage bonus.",
                  "campaignId": "subfeature.subclass.space_marine.heavy.3.heavy_weapons_doctrine",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.heavy"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Heavy: Stabilized Platform"
          ],
          "features": [
            {
              "id": "6ab15b5588f13478",
              "name": "Heavy: Stabilized Platform",
              "level": 6,
              "status": "locked",
              "description": "If you moved no more than half your Speed on your turn, attacks with your chosen Heavy weapon family ignore Half Cover and treat Three-Quarters Cover as Half Cover. You have Advantage on saves/checks against effects that would forcibly move you while you are wielding that weapon and in Combat State.",
              "campaignId": "subfeature.subclass.space_marine.heavy.6.stabilized_platform",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.heavy"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Stabilized Platform",
              "names": [
                "Heavy: Stabilized Platform"
              ],
              "features": [
                {
                  "id": "6ab15b5588f13478",
                  "name": "Heavy: Stabilized Platform",
                  "level": 6,
                  "status": "locked",
                  "description": "If you moved no more than half your Speed on your turn, attacks with your chosen Heavy weapon family ignore Half Cover and treat Three-Quarters Cover as Half Cover. You have Advantage on saves/checks against effects that would forcibly move you while you are wielding that weapon and in Combat State.",
                  "campaignId": "subfeature.subclass.space_marine.heavy.6.stabilized_platform",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.heavy"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Heavy: Fire Discipline"
          ],
          "features": [
            {
              "id": "7b71e64753d0e172",
              "name": "Heavy: Fire Discipline",
              "level": 10,
              "status": "locked",
              "description": "Once on each of your turns when you take the Attack action using your chosen Heavy weapon family, you may replace one attack with that weapon’s Suppressive Fire Activity if it normally requires an Action. Resolve its normal ammunition cost and save.",
              "campaignId": "subfeature.subclass.space_marine.heavy.10.fire_discipline",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.heavy"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Fire Discipline",
              "names": [
                "Heavy: Fire Discipline"
              ],
              "features": [
                {
                  "id": "7b71e64753d0e172",
                  "name": "Heavy: Fire Discipline",
                  "level": 10,
                  "status": "locked",
                  "description": "Once on each of your turns when you take the Attack action using your chosen Heavy weapon family, you may replace one attack with that weapon’s Suppressive Fire Activity if it normally requires an Action. Resolve its normal ammunition cost and save.",
                  "campaignId": "subfeature.subclass.space_marine.heavy.10.fire_discipline",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.heavy"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Heavy: Devastator Doctrine"
          ],
          "features": [
            {
              "id": "d8410ef0fc1f59fc",
              "name": "Heavy: Devastator Doctrine",
              "level": 14,
              "status": "locked",
              "description": "While Combat State is active, once per turn a hit with your chosen Heavy weapon family deals +2d8 weapon damage. When you use its Automatic/Sustained save-based Activity, add one weapon damage die to that Activity’s damage instead. Choose only the attack or area benefit on a turn.",
              "campaignId": "subfeature.subclass.space_marine.heavy.14.devastator_doctrine",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.heavy"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Devastator Doctrine",
              "names": [
                "Heavy: Devastator Doctrine"
              ],
              "features": [
                {
                  "id": "d8410ef0fc1f59fc",
                  "name": "Heavy: Devastator Doctrine",
                  "level": 14,
                  "status": "locked",
                  "description": "While Combat State is active, once per turn a hit with your chosen Heavy weapon family deals +2d8 weapon damage. When you use its Automatic/Sustained save-based Activity, add one weapon damage die to that Activity’s damage instead. Choose only the attack or area benefit on a turn.",
                  "campaignId": "subfeature.subclass.space_marine.heavy.14.devastator_doctrine",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.heavy"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "94bb42c858777fff",
      "name": "Pyromancer",
      "kind": "Item",
      "campaignId": "subclass.psyker.pyromancer",
      "status": "locked",
      "slug": "pyromancer",
      "classId": "class.psyker",
      "className": "Psyker",
      "summary": "Destructive fire psychic discipline\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Destructive fire psychic discipline\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Pyromancer: Pyromantic Discipline"
          ],
          "features": [
            {
              "id": "e3e86e9dbb219058",
              "name": "Pyromancer: Pyromantic Discipline",
              "level": 3,
              "status": "locked",
              "description": "Your Pyromancer-exclusive Psychic Powers are always known. Warpfire: whenever a Psychic Power you cast deals Fire or Psychic damage, you may have that power deal the other of those two types instead. You also gain Resistance to Fire damage.",
              "campaignId": "subfeature.subclass.psyker.pyromancer.3.pyromantic_discipline",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.pyromancer"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Pyromantic Discipline",
              "names": [
                "Pyromancer: Pyromantic Discipline"
              ],
              "features": [
                {
                  "id": "e3e86e9dbb219058",
                  "name": "Pyromancer: Pyromantic Discipline",
                  "level": 3,
                  "status": "locked",
                  "description": "Your Pyromancer-exclusive Psychic Powers are always known. Warpfire: whenever a Psychic Power you cast deals Fire or Psychic damage, you may have that power deal the other of those two types instead. You also gain Resistance to Fire damage.",
                  "campaignId": "subfeature.subclass.psyker.pyromancer.3.pyromantic_discipline",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.pyromancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Pyromancer: Pyrokinetic Surge"
          ],
          "features": [
            {
              "id": "f4816e5681d41106",
              "name": "Pyromancer: Pyrokinetic Surge",
              "level": 6,
              "status": "locked",
              "description": "Once per turn when a Psychic Power you cast deals Fire damage, add your CHA modifier to one damage roll of that power.",
              "campaignId": "subfeature.subclass.psyker.pyromancer.6.pyrokinetic_surge",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.pyromancer"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Pyrokinetic Surge",
              "names": [
                "Pyromancer: Pyrokinetic Surge"
              ],
              "features": [
                {
                  "id": "f4816e5681d41106",
                  "name": "Pyromancer: Pyrokinetic Surge",
                  "level": 6,
                  "status": "locked",
                  "description": "Once per turn when a Psychic Power you cast deals Fire damage, add your CHA modifier to one damage roll of that power.",
                  "campaignId": "subfeature.subclass.psyker.pyromancer.6.pyrokinetic_surge",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.pyromancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Pyromancer: Living Flame"
          ],
          "features": [
            {
              "id": "2f54f3c86a6ff399",
              "name": "Pyromancer: Living Flame",
              "level": 14,
              "status": "locked",
              "description": "Your Psychic Powers ignore Resistance to Fire damage. Your Fire Resistance becomes Immunity to Fire. When you take Fire damage that is reduced to 0 by this immunity, you may move up to 10 ft without provoking Opportunity Attacks.",
              "campaignId": "subfeature.subclass.psyker.pyromancer.14.living_flame",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.pyromancer"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Living Flame",
              "names": [
                "Pyromancer: Living Flame"
              ],
              "features": [
                {
                  "id": "2f54f3c86a6ff399",
                  "name": "Pyromancer: Living Flame",
                  "level": 14,
                  "status": "locked",
                  "description": "Your Psychic Powers ignore Resistance to Fire damage. Your Fire Resistance becomes Immunity to Fire. When you take Fire damage that is reduced to 0 by this immunity, you may move up to 10 ft without provoking Opportunity Attacks.",
                  "campaignId": "subfeature.subclass.psyker.pyromancer.14.living_flame",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.pyromancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Pyromancer: Conflagration Incarnate"
          ],
          "features": [
            {
              "id": "8092e4437b5a6b39",
              "name": "Pyromancer: Conflagration Incarnate",
              "level": 18,
              "status": "locked",
              "description": "As a Bonus Action once per Long Rest, become a living psychic inferno for 1 minute. Hostile creatures that enter a 10-ft aura around you for the first time on a turn or start there make a DEX save vs your Psychic Power DC, taking 2d8 Fire or Psychic damage (your choice) on failure, half on success. Once per turn when you deal Fire/Psychic damage with a Psychic Power, add +2d8 to one damaged target.",
              "campaignId": "subfeature.subclass.psyker.pyromancer.18.conflagration_incarnate",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.pyromancer"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Conflagration Incarnate",
              "names": [
                "Pyromancer: Conflagration Incarnate"
              ],
              "features": [
                {
                  "id": "8092e4437b5a6b39",
                  "name": "Pyromancer: Conflagration Incarnate",
                  "level": 18,
                  "status": "locked",
                  "description": "As a Bonus Action once per Long Rest, become a living psychic inferno for 1 minute. Hostile creatures that enter a 10-ft aura around you for the first time on a turn or start there make a DEX save vs your Psychic Power DC, taking 2d8 Fire or Psychic damage (your choice) on failure, half on success. Once per turn when you deal Fire/Psychic damage with a Psychic Power, add +2d8 to one damaged target.",
                  "campaignId": "subfeature.subclass.psyker.pyromancer.18.conflagration_incarnate",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.pyromancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "94e0a414d7c56cce",
      "name": "Artillerist",
      "kind": "Item",
      "campaignId": "subclass.soldier.artillerist",
      "status": "locked",
      "slug": "artillerist",
      "classId": "class.soldier",
      "className": "Soldier",
      "summary": "Ordnance/explosives/area control/anti-armor\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Ordnance/explosives/area control/anti-armor\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Artillerist: Ordnance Training",
            "Artillerist: Fire-Control Safety"
          ],
          "features": [
            {
              "id": "f0a3bd5412cb065c",
              "name": "Artillerist: Ordnance Training",
              "level": 3,
              "status": "locked",
              "description": "Gain 2 Ordnance cantrips and 1st–5th-level Ordnance slots using the standard Paladin/Ranger half-caster slot progression based on total Soldier level. STR is the Ordnance ability (attack = PB + STR; save DC = 8 + PB + STR). Cantrips known: 2 at L3, 3 at L10, 4 at L18. Prepare leveled Ordnance after each Long Rest equal to STR mod + half Soldier level (round down, minimum 1).",
              "campaignId": "subfeature.subclass.soldier.artillerist.3.ordnance_training",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.artillerist"
            },
            {
              "id": "717239b11b2cd6fe",
              "name": "Artillerist: Fire-Control Safety",
              "level": 3,
              "status": "locked",
              "description": "When an Ordnance effect you activate forces creatures in an area to make a saving throw, choose a number of creatures you can see up to PB. Chosen creatures have Advantage on that save and take no damage from the Ordnance if they succeed.",
              "campaignId": "subfeature.subclass.soldier.artillerist.3.fire_control_safety",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.artillerist"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Ordnance Training",
              "names": [
                "Artillerist: Ordnance Training"
              ],
              "features": [
                {
                  "id": "f0a3bd5412cb065c",
                  "name": "Artillerist: Ordnance Training",
                  "level": 3,
                  "status": "locked",
                  "description": "Gain 2 Ordnance cantrips and 1st–5th-level Ordnance slots using the standard Paladin/Ranger half-caster slot progression based on total Soldier level. STR is the Ordnance ability (attack = PB + STR; save DC = 8 + PB + STR). Cantrips known: 2 at L3, 3 at L10, 4 at L18. Prepare leveled Ordnance after each Long Rest equal to STR mod + half Soldier level (round down, minimum 1).",
                  "campaignId": "subfeature.subclass.soldier.artillerist.3.ordnance_training",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.artillerist"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Fire-Control Safety",
              "names": [
                "Artillerist: Fire-Control Safety"
              ],
              "features": [
                {
                  "id": "717239b11b2cd6fe",
                  "name": "Artillerist: Fire-Control Safety",
                  "level": 3,
                  "status": "locked",
                  "description": "When an Ordnance effect you activate forces creatures in an area to make a saving throw, choose a number of creatures you can see up to PB. Chosen creatures have Advantage on that save and take no damage from the Ordnance if they succeed.",
                  "campaignId": "subfeature.subclass.soldier.artillerist.3.fire_control_safety",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.artillerist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Artillerist: Combined Arms"
          ],
          "features": [
            {
              "id": "565160622977e4c4",
              "name": "Artillerist: Combined Arms",
              "level": 7,
              "status": "locked",
              "description": "After you use your Action to activate an Ordnance cantrip, you may make one weapon attack as a Bonus Action.",
              "campaignId": "subfeature.subclass.soldier.artillerist.7.combined_arms",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.artillerist"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Combined Arms",
              "names": [
                "Artillerist: Combined Arms"
              ],
              "features": [
                {
                  "id": "565160622977e4c4",
                  "name": "Artillerist: Combined Arms",
                  "level": 7,
                  "status": "locked",
                  "description": "After you use your Action to activate an Ordnance cantrip, you may make one weapon attack as a Bonus Action.",
                  "campaignId": "subfeature.subclass.soldier.artillerist.7.combined_arms",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.artillerist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Artillerist: Payload Specialist"
          ],
          "features": [
            {
              "id": "068d3236e47d99c4",
              "name": "Artillerist: Payload Specialist",
              "level": 10,
              "status": "locked",
              "description": "Once on each of your turns when an Ordnance deals damage, add your STR modifier to one damage roll against one target. You also know a third Ordnance cantrip.",
              "campaignId": "subfeature.subclass.soldier.artillerist.10.payload_specialist",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.artillerist"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Payload Specialist",
              "names": [
                "Artillerist: Payload Specialist"
              ],
              "features": [
                {
                  "id": "068d3236e47d99c4",
                  "name": "Artillerist: Payload Specialist",
                  "level": 10,
                  "status": "locked",
                  "description": "Once on each of your turns when an Ordnance deals damage, add your STR modifier to one damage roll against one target. You also know a third Ordnance cantrip.",
                  "campaignId": "subfeature.subclass.soldier.artillerist.10.payload_specialist",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.artillerist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Artillerist: Indirect Fire"
          ],
          "features": [
            {
              "id": "1cb2728ef11cf920",
              "name": "Artillerist: Indirect Fire",
              "level": 15,
              "status": "locked",
              "description": "Called Fire may target a point you cannot personally see if its location is communicated by a willing spotter you can communicate with or is otherwise precisely known, the target point is in range, and a valid delivery path exists. Such Ordnance ignores Half Cover from intervening low obstacles and treats Three-Quarters Cover as Half Cover unless the Ordnance says otherwise.",
              "campaignId": "subfeature.subclass.soldier.artillerist.15.indirect_fire",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.artillerist"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Indirect Fire",
              "names": [
                "Artillerist: Indirect Fire"
              ],
              "features": [
                {
                  "id": "1cb2728ef11cf920",
                  "name": "Artillerist: Indirect Fire",
                  "level": 15,
                  "status": "locked",
                  "description": "Called Fire may target a point you cannot personally see if its location is communicated by a willing spotter you can communicate with or is otherwise precisely known, the target point is in range, and a valid delivery path exists. Such Ordnance ignores Half Cover from intervening low obstacles and treats Three-Quarters Cover as Half Cover unless the Ordnance says otherwise.",
                  "campaignId": "subfeature.subclass.soldier.artillerist.15.indirect_fire",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.artillerist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Artillerist: Master of Ordnance"
          ],
          "features": [
            {
              "id": "d9f4f310796089c4",
              "name": "Artillerist: Master of Ordnance",
              "level": 18,
              "status": "locked",
              "description": "You know a fourth Ordnance cantrip. After you use your Action to activate any Ordnance, cantrip or leveled, you may make one weapon attack as a Bonus Action. When you roll Initiative, if you have no 1st-level Ordnance slots remaining, regain one 1st-level Ordnance slot.",
              "campaignId": "subfeature.subclass.soldier.artillerist.18.master_of_ordnance",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.artillerist"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Master of Ordnance",
              "names": [
                "Artillerist: Master of Ordnance"
              ],
              "features": [
                {
                  "id": "d9f4f310796089c4",
                  "name": "Artillerist: Master of Ordnance",
                  "level": 18,
                  "status": "locked",
                  "description": "You know a fourth Ordnance cantrip. After you use your Action to activate any Ordnance, cantrip or leveled, you may make one weapon attack as a Bonus Action. When you roll Initiative, if you have no 1st-level Ordnance slots remaining, regain one 1st-level Ordnance slot.",
                  "campaignId": "subfeature.subclass.soldier.artillerist.18.master_of_ordnance",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.artillerist"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 6
    },
    {
      "id": "95b24fb3487852dc",
      "name": "Shock Trooper",
      "kind": "Item",
      "campaignId": "subclass.soldier.shock_trooper",
      "status": "locked",
      "slug": "shock-trooper",
      "classId": "class.soldier",
      "className": "Soldier",
      "summary": "Aggressive breach/assault\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Aggressive breach/assault\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Shock Trooper: Breach and Clear"
          ],
          "features": [
            {
              "id": "4f51060a82f9968f",
              "name": "Shock Trooper: Breach and Clear",
              "level": 3,
              "status": "locked",
              "description": "Once on each of your turns, after moving at least 10 ft toward a creature, your first weapon hit against it deals +1d6 weapon damage. If the target is Large or smaller, it makes a STR save (DC 8 + PB + STR) or falls Prone.",
              "campaignId": "subfeature.subclass.soldier.shock_trooper.3.breach_and_clear",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.shock_trooper"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Breach and Clear",
              "names": [
                "Shock Trooper: Breach and Clear"
              ],
              "features": [
                {
                  "id": "4f51060a82f9968f",
                  "name": "Shock Trooper: Breach and Clear",
                  "level": 3,
                  "status": "locked",
                  "description": "Once on each of your turns, after moving at least 10 ft toward a creature, your first weapon hit against it deals +1d6 weapon damage. If the target is Large or smaller, it makes a STR save (DC 8 + PB + STR) or falls Prone.",
                  "campaignId": "subfeature.subclass.soldier.shock_trooper.3.breach_and_clear",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.shock_trooper"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Shock Trooper: Shock Momentum"
          ],
          "features": [
            {
              "id": "c61b252bdb0e7e51",
              "name": "Shock Trooper: Shock Momentum",
              "level": 7,
              "status": "locked",
              "description": "Once per turn when you reduce a hostile creature to 0 HP, move up to half your Speed without provoking Opportunity Attacks. Your next weapon hit before the end of your next turn deals +1d8 weapon damage.",
              "campaignId": "subfeature.subclass.soldier.shock_trooper.7.shock_momentum",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.shock_trooper"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Shock Momentum",
              "names": [
                "Shock Trooper: Shock Momentum"
              ],
              "features": [
                {
                  "id": "c61b252bdb0e7e51",
                  "name": "Shock Trooper: Shock Momentum",
                  "level": 7,
                  "status": "locked",
                  "description": "Once per turn when you reduce a hostile creature to 0 HP, move up to half your Speed without provoking Opportunity Attacks. Your next weapon hit before the end of your next turn deals +1d8 weapon damage.",
                  "campaignId": "subfeature.subclass.soldier.shock_trooper.7.shock_momentum",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.shock_trooper"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Shock Trooper: Close-Quarters Brutality"
          ],
          "features": [
            {
              "id": "4ffc9a8fce1583f9",
              "name": "Shock Trooper: Close-Quarters Brutality",
              "level": 10,
              "status": "locked",
              "description": "Once per turn when you hit a creature within 10 ft, deal +1d8 weapon damage; this becomes +2d8 if the target is Prone, Grappled, or Restrained, or if an ally is within 5 ft of it and not Incapacitated.",
              "campaignId": "subfeature.subclass.soldier.shock_trooper.10.close_quarters_brutality",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.shock_trooper"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Close-Quarters Brutality",
              "names": [
                "Shock Trooper: Close-Quarters Brutality"
              ],
              "features": [
                {
                  "id": "4ffc9a8fce1583f9",
                  "name": "Shock Trooper: Close-Quarters Brutality",
                  "level": 10,
                  "status": "locked",
                  "description": "Once per turn when you hit a creature within 10 ft, deal +1d8 weapon damage; this becomes +2d8 if the target is Prone, Grappled, or Restrained, or if an ally is within 5 ft of it and not Incapacitated.",
                  "campaignId": "subfeature.subclass.soldier.shock_trooper.10.close_quarters_brutality",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.shock_trooper"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Shock Trooper: Devastating Breach"
          ],
          "features": [
            {
              "id": "5c48152c2b6980ce",
              "name": "Shock Trooper: Devastating Breach",
              "level": 15,
              "status": "locked",
              "description": "Breach and Clear bonus becomes +3d6. On a failed Breach STR save, the target also moves up to 10 ft away. If it collides with a solid object it takes +2d6 Bludgeoning; if it collides with another creature, that creature makes a DEX save or takes 2d6 Bludgeoning and falls Prone.",
              "campaignId": "subfeature.subclass.soldier.shock_trooper.15.devastating_breach",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.shock_trooper"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Devastating Breach",
              "names": [
                "Shock Trooper: Devastating Breach"
              ],
              "features": [
                {
                  "id": "5c48152c2b6980ce",
                  "name": "Shock Trooper: Devastating Breach",
                  "level": 15,
                  "status": "locked",
                  "description": "Breach and Clear bonus becomes +3d6. On a failed Breach STR save, the target also moves up to 10 ft away. If it collides with a solid object it takes +2d6 Bludgeoning; if it collides with another creature, that creature makes a DEX save or takes 2d6 Bludgeoning and falls Prone.",
                  "campaignId": "subfeature.subclass.soldier.shock_trooper.15.devastating_breach",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.shock_trooper"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Shock Trooper: Unstoppable Assault"
          ],
          "features": [
            {
              "id": "7ae517d0f86ff144",
              "name": "Shock Trooper: Unstoppable Assault",
              "level": 18,
              "status": "locked",
              "description": "When you use Action Surge, until end of turn your first hit against each creature deals +2d8 weapon damage; Breach and Clear no longer requires the 10-ft approach for its first trigger; after each weapon attack you may move 10 ft without provoking from that attack’s target. Each creature you reduce to 0 HP also empowers your next hit that turn for +2d8, once per defeated creature.",
              "campaignId": "subfeature.subclass.soldier.shock_trooper.18.unstoppable_assault",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.shock_trooper"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Unstoppable Assault",
              "names": [
                "Shock Trooper: Unstoppable Assault"
              ],
              "features": [
                {
                  "id": "7ae517d0f86ff144",
                  "name": "Shock Trooper: Unstoppable Assault",
                  "level": 18,
                  "status": "locked",
                  "description": "When you use Action Surge, until end of turn your first hit against each creature deals +2d8 weapon damage; Breach and Clear no longer requires the 10-ft approach for its first trigger; after each weapon attack you may move 10 ft without provoking from that attack’s target. Each creature you reduce to 0 HP also empowers your next hit that turn for +2d8, once per defeated creature.",
                  "campaignId": "subfeature.subclass.soldier.shock_trooper.18.unstoppable_assault",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.shock_trooper"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 5
    },
    {
      "id": "96fdaffc22e47a35",
      "name": "Bulwark",
      "kind": "Item",
      "campaignId": "subclass.space_marine.bulwark",
      "status": "locked",
      "slug": "bulwark",
      "classId": "class.space_marine",
      "className": "Space Marine",
      "summary": "Defense/tank\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Defense/tank\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.\n\nRestriction: Human/Space Marine only",
      "restriction": "Human/Space Marine only",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Bulwark: Bulwark Shield Integration"
          ],
          "features": [
            {
              "id": "07e1a1dc9ec2ff60",
              "name": "Bulwark: Bulwark Shield Integration",
              "level": 3,
              "status": "locked",
              "description": "A Combat Shield, Boarding Shield, or Storm Shield designated as your Bulwark shield becomes subclass-defining equipment and does not consume Power Armor Upgrade capacity. While wielding it in Combat State, the first creature you hit on your turn has Disadvantage on its first attack against a creature other than you before start of your next turn.",
              "campaignId": "subfeature.subclass.space_marine.bulwark.3.bulwark_shield_integration",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.bulwark"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Bulwark Shield Integration",
              "names": [
                "Bulwark: Bulwark Shield Integration"
              ],
              "features": [
                {
                  "id": "07e1a1dc9ec2ff60",
                  "name": "Bulwark: Bulwark Shield Integration",
                  "level": 3,
                  "status": "locked",
                  "description": "A Combat Shield, Boarding Shield, or Storm Shield designated as your Bulwark shield becomes subclass-defining equipment and does not consume Power Armor Upgrade capacity. While wielding it in Combat State, the first creature you hit on your turn has Disadvantage on its first attack against a creature other than you before start of your next turn.",
                  "campaignId": "subfeature.subclass.space_marine.bulwark.3.bulwark_shield_integration",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.bulwark"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Bulwark: Interpose"
          ],
          "features": [
            {
              "id": "2df16e1b4df0f54d",
              "name": "Bulwark: Interpose",
              "level": 6,
              "status": "locked",
              "description": "When an ally within 5 ft is hit by an attack, use Reaction to move into an adjacent legal space and become the target of the attack instead, using the original attack roll against your AC. If you cannot legally occupy a suitable space, you may instead reduce the ally’s damage by 1d10 + CON modifier + PB. Uses = PB per Long Rest.",
              "campaignId": "subfeature.subclass.space_marine.bulwark.6.interpose",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.bulwark"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Interpose",
              "names": [
                "Bulwark: Interpose"
              ],
              "features": [
                {
                  "id": "2df16e1b4df0f54d",
                  "name": "Bulwark: Interpose",
                  "level": 6,
                  "status": "locked",
                  "description": "When an ally within 5 ft is hit by an attack, use Reaction to move into an adjacent legal space and become the target of the attack instead, using the original attack roll against your AC. If you cannot legally occupy a suitable space, you may instead reduce the ally’s damage by 1d10 + CON modifier + PB. Uses = PB per Long Rest.",
                  "campaignId": "subfeature.subclass.space_marine.bulwark.6.interpose",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.bulwark"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Bulwark: Fortified Position"
          ],
          "features": [
            {
              "id": "f6d88151b47d6840",
              "name": "Bulwark: Fortified Position",
              "level": 10,
              "status": "locked",
              "description": "While wielding your Bulwark shield and not Incapacitated, you have Advantage on checks/saves to resist being shoved or knocked Prone. Allies directly adjacent to you can treat you and your shield as Half Cover against ranged attacks when geometry reasonably places you between them and the attacker.",
              "campaignId": "subfeature.subclass.space_marine.bulwark.10.fortified_position",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.bulwark"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Fortified Position",
              "names": [
                "Bulwark: Fortified Position"
              ],
              "features": [
                {
                  "id": "f6d88151b47d6840",
                  "name": "Bulwark: Fortified Position",
                  "level": 10,
                  "status": "locked",
                  "description": "While wielding your Bulwark shield and not Incapacitated, you have Advantage on checks/saves to resist being shoved or knocked Prone. Allies directly adjacent to you can treat you and your shield as Half Cover against ranged attacks when geometry reasonably places you between them and the attacker.",
                  "campaignId": "subfeature.subclass.space_marine.bulwark.10.fortified_position",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.bulwark"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Bulwark: Unbreakable Bastion"
          ],
          "features": [
            {
              "id": "d79321515e5cd4b9",
              "name": "Bulwark: Unbreakable Bastion",
              "level": 14,
              "status": "locked",
              "description": "Interpose no longer has limited uses. When you use Interpose and the triggering attack either misses you or its damage is reduced to 0, the attacker takes Force damage equal to 2d8 + CON modifier if it is within 30 ft. This retaliation can occur once per turn.",
              "campaignId": "subfeature.subclass.space_marine.bulwark.14.unbreakable_bastion",
              "ownerClassId": "class.space_marine",
              "ownerSubclassId": "subclass.space_marine.bulwark"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Unbreakable Bastion",
              "names": [
                "Bulwark: Unbreakable Bastion"
              ],
              "features": [
                {
                  "id": "d79321515e5cd4b9",
                  "name": "Bulwark: Unbreakable Bastion",
                  "level": 14,
                  "status": "locked",
                  "description": "Interpose no longer has limited uses. When you use Interpose and the triggering attack either misses you or its damage is reduced to 0, the attacker takes Force damage equal to 2d8 + CON modifier if it is within 30 ft. This retaliation can occur once per turn.",
                  "campaignId": "subfeature.subclass.space_marine.bulwark.14.unbreakable_bastion",
                  "ownerClassId": "class.space_marine",
                  "ownerSubclassId": "subclass.space_marine.bulwark"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "c71996304068e82e",
      "name": "Gunslinger",
      "kind": "Item",
      "campaignId": "subclass.soldier.gunslinger",
      "status": "locked",
      "slug": "gunslinger",
      "classId": "class.soldier",
      "className": "Soldier",
      "summary": "Pistols, mobility, dual wield, close-range firearm combat\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Pistols, mobility, dual wield, close-range firearm combat\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Gunslinger: Quick Draw"
          ],
          "features": [
            {
              "id": "4a6c5fe3e6ea29bf",
              "name": "Gunslinger: Quick Draw",
              "level": 3,
              "status": "locked",
              "description": "Whenever you could draw or stow one sidearm, you may draw or stow two. Attacks with pistols do not gain Disadvantage solely because a hostile creature is within 5 ft of you.",
              "campaignId": "subfeature.subclass.soldier.gunslinger.3.quick_draw",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.gunslinger"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Quick Draw",
              "names": [
                "Gunslinger: Quick Draw"
              ],
              "features": [
                {
                  "id": "4a6c5fe3e6ea29bf",
                  "name": "Gunslinger: Quick Draw",
                  "level": 3,
                  "status": "locked",
                  "description": "Whenever you could draw or stow one sidearm, you may draw or stow two. Attacks with pistols do not gain Disadvantage solely because a hostile creature is within 5 ft of you.",
                  "campaignId": "subfeature.subclass.soldier.gunslinger.3.quick_draw",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.gunslinger"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Gunslinger: Guns Akimbo"
          ],
          "features": [
            {
              "id": "9da983772a305b2b",
              "name": "Gunslinger: Guns Akimbo",
              "level": 7,
              "status": "locked",
              "description": "While wielding two pistols, after you take the Attack action and make at least one pistol attack, you may make one attack with the other pistol as a Bonus Action and add the normal ability modifier to damage.",
              "campaignId": "subfeature.subclass.soldier.gunslinger.7.guns_akimbo",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.gunslinger"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Guns Akimbo",
              "names": [
                "Gunslinger: Guns Akimbo"
              ],
              "features": [
                {
                  "id": "9da983772a305b2b",
                  "name": "Gunslinger: Guns Akimbo",
                  "level": 7,
                  "status": "locked",
                  "description": "While wielding two pistols, after you take the Attack action and make at least one pistol attack, you may make one attack with the other pistol as a Bonus Action and add the normal ability modifier to damage.",
                  "campaignId": "subfeature.subclass.soldier.gunslinger.7.guns_akimbo",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.gunslinger"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [
            "Gunslinger: Point-Blank Execution"
          ],
          "features": [
            {
              "id": "de243e1ea86dfb55",
              "name": "Gunslinger: Point-Blank Execution",
              "level": 10,
              "status": "locked",
              "description": "Once per turn when you hit with a pistol against a creature within 5 ft, add one of the pistol’s weapon damage dice.",
              "campaignId": "subfeature.subclass.soldier.gunslinger.10.point_blank_execution",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.gunslinger"
            }
          ],
          "entries": [
            {
              "level": 10,
              "type": "ItemGrant",
              "title": "Point-Blank Execution",
              "names": [
                "Gunslinger: Point-Blank Execution"
              ],
              "features": [
                {
                  "id": "de243e1ea86dfb55",
                  "name": "Gunslinger: Point-Blank Execution",
                  "level": 10,
                  "status": "locked",
                  "description": "Once per turn when you hit with a pistol against a creature within 5 ft, add one of the pistol’s weapon damage dice.",
                  "campaignId": "subfeature.subclass.soldier.gunslinger.10.point_blank_execution",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.gunslinger"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Gunslinger: Deadeye"
          ],
          "features": [
            {
              "id": "c5fa1b79765f3891",
              "name": "Gunslinger: Deadeye",
              "level": 15,
              "status": "locked",
              "description": "Your pistol attacks score a Critical Hit on 19–20. Pistol attacks ignore Half Cover and treat Three-Quarters Cover as Half Cover.",
              "campaignId": "subfeature.subclass.soldier.gunslinger.15.deadeye",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.gunslinger"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Deadeye",
              "names": [
                "Gunslinger: Deadeye"
              ],
              "features": [
                {
                  "id": "c5fa1b79765f3891",
                  "name": "Gunslinger: Deadeye",
                  "level": 15,
                  "status": "locked",
                  "description": "Your pistol attacks score a Critical Hit on 19–20. Pistol attacks ignore Half Cover and treat Three-Quarters Cover as Half Cover.",
                  "campaignId": "subfeature.subclass.soldier.gunslinger.15.deadeye",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.gunslinger"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Gunslinger: Gunfighter's Tempo"
          ],
          "features": [
            {
              "id": "c871ac4dc867acf5",
              "name": "Gunslinger: Gunfighter's Tempo",
              "level": 18,
              "status": "locked",
              "description": "Once per turn when you score a Critical Hit with a pistol or reduce a creature to 0 HP with one, immediately make one pistol attack against a different creature you can see in range. This granted attack cannot trigger Gunfighter’s Tempo. If dual-wielding pistols, choose either pistol.",
              "campaignId": "subfeature.subclass.soldier.gunslinger.18.gunfighter_s_tempo",
              "ownerClassId": "class.soldier",
              "ownerSubclassId": "subclass.soldier.gunslinger"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Gunfighter's Tempo",
              "names": [
                "Gunslinger: Gunfighter's Tempo"
              ],
              "features": [
                {
                  "id": "c871ac4dc867acf5",
                  "name": "Gunslinger: Gunfighter's Tempo",
                  "level": 18,
                  "status": "locked",
                  "description": "Once per turn when you score a Critical Hit with a pistol or reduce a creature to 0 HP with one, immediately make one pistol attack against a different creature you can see in range. This granted attack cannot trigger Gunfighter’s Tempo. If dual-wielding pistols, choose either pistol.",
                  "campaignId": "subfeature.subclass.soldier.gunslinger.18.gunfighter_s_tempo",
                  "ownerClassId": "class.soldier",
                  "ownerSubclassId": "subclass.soldier.gunslinger"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 5
    },
    {
      "id": "e1a33d6cff5f3f16",
      "name": "Infiltrator",
      "kind": "Item",
      "campaignId": "subclass.operative.infiltrator",
      "status": "locked",
      "slug": "infiltrator",
      "classId": "class.operative",
      "className": "Operative",
      "summary": "Stealth, security, disguise, vanish-after-attacking\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Stealth, security, disguise, vanish-after-attacking\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Infiltrator: Ghost Training"
          ],
          "features": [
            {
              "id": "1945b72f73bf0301",
              "name": "Infiltrator: Ghost Training",
              "level": 3,
              "status": "locked",
              "description": "Gain Expertise in Stealth or Security Kit; if already Expert, choose another Operative skill. Gain a Climb Speed equal to your Speed. You can perform basic lock/security-device interactions that normally take an Action as a Bonus Action.",
              "campaignId": "subfeature.subclass.operative.infiltrator.3.ghost_training",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.infiltrator"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Ghost Training",
              "names": [
                "Infiltrator: Ghost Training"
              ],
              "features": [
                {
                  "id": "1945b72f73bf0301",
                  "name": "Infiltrator: Ghost Training",
                  "level": 3,
                  "status": "locked",
                  "description": "Gain Expertise in Stealth or Security Kit; if already Expert, choose another Operative skill. Gain a Climb Speed equal to your Speed. You can perform basic lock/security-device interactions that normally take an Action as a Bonus Action.",
                  "campaignId": "subfeature.subclass.operative.infiltrator.3.ghost_training",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.infiltrator"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [
            "Infiltrator: Concealment Protocol"
          ],
          "features": [
            {
              "id": "e6ceb1cc4afa50fc",
              "name": "Infiltrator: Concealment Protocol",
              "level": 9,
              "status": "locked",
              "description": "You may Hide while lightly obscured by smoke, in dim light, concealed by machinery, in a sufficiently dense crowd, or behind Half Cover. Gain Exploit Weakness option Ghost Attack (cost 1d6): if Hidden when attacking, the attack does not end Hidden provided you finish the turn behind Three-Quarters or Total Cover.",
              "campaignId": "subfeature.subclass.operative.infiltrator.9.concealment_protocol",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.infiltrator"
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Concealment Protocol",
              "names": [
                "Infiltrator: Concealment Protocol"
              ],
              "features": [
                {
                  "id": "e6ceb1cc4afa50fc",
                  "name": "Infiltrator: Concealment Protocol",
                  "level": 9,
                  "status": "locked",
                  "description": "You may Hide while lightly obscured by smoke, in dim light, concealed by machinery, in a sufficiently dense crowd, or behind Half Cover. Gain Exploit Weakness option Ghost Attack (cost 1d6): if Hidden when attacking, the attack does not end Hidden provided you finish the turn behind Three-Quarters or Total Cover.",
                  "campaignId": "subfeature.subclass.operative.infiltrator.9.concealment_protocol",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.infiltrator"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [
            "Infiltrator: Deep Cover"
          ],
          "features": [
            {
              "id": "2346600465efe7c5",
              "name": "Infiltrator: Deep Cover",
              "level": 13,
              "status": "locked",
              "description": "With appropriate clothing/equipment and preparation, establish convincing false identities. You have Advantage on Deception checks to maintain a prepared identity and Security Kit checks against identification systems, and can accurately mimic a person’s speech after studying them. Routine observers do not automatically see through the disguise.",
              "campaignId": "subfeature.subclass.operative.infiltrator.13.deep_cover",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.infiltrator"
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Deep Cover",
              "names": [
                "Infiltrator: Deep Cover"
              ],
              "features": [
                {
                  "id": "2346600465efe7c5",
                  "name": "Infiltrator: Deep Cover",
                  "level": 13,
                  "status": "locked",
                  "description": "With appropriate clothing/equipment and preparation, establish convincing false identities. You have Advantage on Deception checks to maintain a prepared identity and Security Kit checks against identification systems, and can accurately mimic a person’s speech after studying them. Routine observers do not automatically see through the disguise.",
                  "campaignId": "subfeature.subclass.operative.infiltrator.13.deep_cover",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.infiltrator"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [
            "Infiltrator: Ghost Protocol"
          ],
          "features": [
            {
              "id": "c53d8db2ba4378bd",
              "name": "Infiltrator: Ghost Protocol",
              "level": 17,
              "status": "locked",
              "description": "After dealing Sneak Attack damage, immediately move up to half Speed. If you end where Concealment Protocol permits hiding, immediately attempt to Hide without an Action or Bonus Action. The creature hit by that Sneak Attack cannot take Reactions until start of its next turn.",
              "campaignId": "subfeature.subclass.operative.infiltrator.17.ghost_protocol",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.infiltrator"
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Ghost Protocol",
              "names": [
                "Infiltrator: Ghost Protocol"
              ],
              "features": [
                {
                  "id": "c53d8db2ba4378bd",
                  "name": "Infiltrator: Ghost Protocol",
                  "level": 17,
                  "status": "locked",
                  "description": "After dealing Sneak Attack damage, immediately move up to half Speed. If you end where Concealment Protocol permits hiding, immediately attempt to Hide without an Action or Bonus Action. The creature hit by that Sneak Attack cannot take Reactions until start of its next turn.",
                  "campaignId": "subfeature.subclass.operative.infiltrator.17.ghost_protocol",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.infiltrator"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "e4c5407ad8a709fc",
      "name": "Purifier",
      "kind": "Item",
      "campaignId": "subclass.zealot.purifier",
      "status": "locked",
      "slug": "purifier",
      "classId": "class.zealot",
      "className": "Zealot",
      "summary": "Offense, purgation, anti-Warp\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Offense, purgation, anti-Warp\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Purifier: Purging Brand",
            "Purifier: Burning Conviction"
          ],
          "features": [
            {
              "id": "42cb56eadc3bf0d5",
              "name": "Purifier: Purging Brand",
              "level": 3,
              "status": "locked",
              "description": "When you damage a creature with a weapon attack or Invocation, spend 1 Fervor to brand it until end of your next turn. A branded target cannot regain HP and has Disadvantage on the next saving throw it makes against one of your Purifier Invocations during the brand.",
              "campaignId": "subfeature.subclass.zealot.purifier.3.purging_brand",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.purifier"
            },
            {
              "id": "c94c7dd4d602ec1d",
              "name": "Purifier: Burning Conviction",
              "level": 3,
              "status": "locked",
              "description": "When you use Zealous Advance, your next successful weapon attack that turn applies Purging Brand without spending additional Fervor.",
              "campaignId": "subfeature.subclass.zealot.purifier.3.burning_conviction",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.purifier"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Purging Brand",
              "names": [
                "Purifier: Purging Brand"
              ],
              "features": [
                {
                  "id": "42cb56eadc3bf0d5",
                  "name": "Purifier: Purging Brand",
                  "level": 3,
                  "status": "locked",
                  "description": "When you damage a creature with a weapon attack or Invocation, spend 1 Fervor to brand it until end of your next turn. A branded target cannot regain HP and has Disadvantage on the next saving throw it makes against one of your Purifier Invocations during the brand.",
                  "campaignId": "subfeature.subclass.zealot.purifier.3.purging_brand",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.purifier"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Burning Conviction",
              "names": [
                "Purifier: Burning Conviction"
              ],
              "features": [
                {
                  "id": "c94c7dd4d602ec1d",
                  "name": "Purifier: Burning Conviction",
                  "level": 3,
                  "status": "locked",
                  "description": "When you use Zealous Advance, your next successful weapon attack that turn applies Purging Brand without spending additional Fervor.",
                  "campaignId": "subfeature.subclass.zealot.purifier.3.burning_conviction",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.purifier"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [
            "Purifier: Aura of Censure"
          ],
          "features": [
            {
              "id": "c8aa157903fada4d",
              "name": "Purifier: Aura of Censure",
              "level": 7,
              "status": "needs_review",
              "description": "10-ft aura while conscious. General effect is locked: once on each ally’s turn, when that ally damages a hostile creature while within the aura, one damage roll gains +2 damage. Specialty rider is provisionally: a creature designated by the campaign Purifier-specialty taxonomy suffers -1 AC while in the aura.",
              "campaignId": "subfeature.subclass.zealot.purifier.7.aura_of_censure",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.purifier"
            }
          ],
          "entries": [
            {
              "level": 7,
              "type": "ItemGrant",
              "title": "Aura of Censure",
              "names": [
                "Purifier: Aura of Censure"
              ],
              "features": [
                {
                  "id": "c8aa157903fada4d",
                  "name": "Purifier: Aura of Censure",
                  "level": 7,
                  "status": "needs_review",
                  "description": "10-ft aura while conscious. General effect is locked: once on each ally’s turn, when that ally damages a hostile creature while within the aura, one damage roll gains +2 damage. Specialty rider is provisionally: a creature designated by the campaign Purifier-specialty taxonomy suffers -1 AC while in the aura.",
                  "campaignId": "subfeature.subclass.zealot.purifier.7.aura_of_censure",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.purifier"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [
            "Purifier: Improved Aura of Censure"
          ],
          "features": [
            {
              "id": "f829322a4382f291",
              "name": "Purifier: Improved Aura of Censure",
              "level": 15,
              "status": "needs_review",
              "description": "Aura radius increases from 10 ft to 30 ft. General +2 once-per-turn damage rider remains. The -1 AC specialty rider expands with the aura once the specialty taxonomy is approved.",
              "campaignId": "subfeature.subclass.zealot.purifier.15.improved_aura_of_censure",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.purifier"
            }
          ],
          "entries": [
            {
              "level": 15,
              "type": "ItemGrant",
              "title": "Improved Aura of Censure",
              "names": [
                "Purifier: Improved Aura of Censure"
              ],
              "features": [
                {
                  "id": "f829322a4382f291",
                  "name": "Purifier: Improved Aura of Censure",
                  "level": 15,
                  "status": "needs_review",
                  "description": "Aura radius increases from 10 ft to 30 ft. General +2 once-per-turn damage rider remains. The -1 AC specialty rider expands with the aura once the specialty taxonomy is approved.",
                  "campaignId": "subfeature.subclass.zealot.purifier.15.improved_aura_of_censure",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.purifier"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [
            "Purifier: Incandescent Judgment"
          ],
          "features": [
            {
              "id": "0489a28a0670b4bb",
              "name": "Purifier: Incandescent Judgment",
              "level": 20,
              "status": "locked",
              "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. The first creature you damage on each of your turns is Purging Branded without Fervor. Once per turn when you damage a branded creature, deal +2d8 Fire or Radiant damage (choose on each trigger). You are immune to Frightened and Charmed for the duration.",
              "campaignId": "subfeature.subclass.zealot.purifier.20.incandescent_judgment",
              "ownerClassId": "class.zealot",
              "ownerSubclassId": "subclass.zealot.purifier"
            }
          ],
          "entries": [
            {
              "level": 20,
              "type": "ItemGrant",
              "title": "Incandescent Judgment",
              "names": [
                "Purifier: Incandescent Judgment"
              ],
              "features": [
                {
                  "id": "0489a28a0670b4bb",
                  "name": "Purifier: Incandescent Judgment",
                  "level": 20,
                  "status": "locked",
                  "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. The first creature you damage on each of your turns is Purging Branded without Fervor. Once per turn when you damage a branded creature, deal +2d8 Fire or Radiant damage (choose on each trigger). You are immune to Frightened and Charmed for the duration.",
                  "campaignId": "subfeature.subclass.zealot.purifier.20.incandescent_judgment",
                  "ownerClassId": "class.zealot",
                  "ownerSubclassId": "subclass.zealot.purifier"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        }
      ],
      "featureCount": 5
    },
    {
      "id": "e520cb70f5c754f1",
      "name": "Biomancer",
      "kind": "Item",
      "campaignId": "subclass.psyker.biomancer",
      "status": "locked",
      "slug": "biomancer",
      "classId": "class.psyker",
      "className": "Psyker",
      "summary": "Biological manipulation and restoration\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Biological manipulation and restoration\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Biomancer: Biomantic Discipline"
          ],
          "features": [
            {
              "id": "73a2e1b4fa49b86a",
              "name": "Biomancer: Biomantic Discipline",
              "level": 3,
              "status": "locked",
              "description": "Your Biomancer-exclusive Psychic Powers are always known. Fleshcraft: once per turn when one of your Psychic Powers restores HP to a creature, it regains additional HP equal to your CHA modifier. Gain proficiency in Medicine, or Expertise if already proficient.",
              "campaignId": "subfeature.subclass.psyker.biomancer.3.biomantic_discipline",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.biomancer"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Biomantic Discipline",
              "names": [
                "Biomancer: Biomantic Discipline"
              ],
              "features": [
                {
                  "id": "73a2e1b4fa49b86a",
                  "name": "Biomancer: Biomantic Discipline",
                  "level": 3,
                  "status": "locked",
                  "description": "Your Biomancer-exclusive Psychic Powers are always known. Fleshcraft: once per turn when one of your Psychic Powers restores HP to a creature, it regains additional HP equal to your CHA modifier. Gain proficiency in Medicine, or Expertise if already proficient.",
                  "campaignId": "subfeature.subclass.psyker.biomancer.3.biomantic_discipline",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.biomancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [
            "Biomancer: Adaptive Physiology"
          ],
          "features": [
            {
              "id": "c9a1901609232553",
              "name": "Biomancer: Adaptive Physiology",
              "level": 6,
              "status": "locked",
              "description": "After each Long Rest choose one adaptation until the next Long Rest: Carapace (+1 AC while not wearing Heavy armor), Fleet (+10 ft Speed), Resilient (Advantage on CON saves against poison/disease and on checks to resist exhaustion-like physical hazards), or Predatory Senses (Darkvision 120 ft, or +60 ft if already longer than 60, and Advantage on Perception checks relying on sight/smell).",
              "campaignId": "subfeature.subclass.psyker.biomancer.6.adaptive_physiology",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.biomancer"
            }
          ],
          "entries": [
            {
              "level": 6,
              "type": "ItemGrant",
              "title": "Adaptive Physiology",
              "names": [
                "Biomancer: Adaptive Physiology"
              ],
              "features": [
                {
                  "id": "c9a1901609232553",
                  "name": "Biomancer: Adaptive Physiology",
                  "level": 6,
                  "status": "locked",
                  "description": "After each Long Rest choose one adaptation until the next Long Rest: Carapace (+1 AC while not wearing Heavy armor), Fleet (+10 ft Speed), Resilient (Advantage on CON saves against poison/disease and on checks to resist exhaustion-like physical hazards), or Predatory Senses (Darkvision 120 ft, or +60 ft if already longer than 60, and Advantage on Perception checks relying on sight/smell).",
                  "campaignId": "subfeature.subclass.psyker.biomancer.6.adaptive_physiology",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.biomancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 14,
          "names": [
            "Biomancer: Master Biomancy"
          ],
          "features": [
            {
              "id": "8c2ad65902ffd761",
              "name": "Biomancer: Master Biomancy",
              "level": 14,
              "status": "locked",
              "description": "Gain Resistance to Poison and Necrotic damage. When a Psychic Power restores HP to a creature, you may also end Poisoned on that creature; uses equal PB per Long Rest.",
              "campaignId": "subfeature.subclass.psyker.biomancer.14.master_biomancy",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.biomancer"
            }
          ],
          "entries": [
            {
              "level": 14,
              "type": "ItemGrant",
              "title": "Master Biomancy",
              "names": [
                "Biomancer: Master Biomancy"
              ],
              "features": [
                {
                  "id": "8c2ad65902ffd761",
                  "name": "Biomancer: Master Biomancy",
                  "level": 14,
                  "status": "locked",
                  "description": "Gain Resistance to Poison and Necrotic damage. When a Psychic Power restores HP to a creature, you may also end Poisoned on that creature; uses equal PB per Long Rest.",
                  "campaignId": "subfeature.subclass.psyker.biomancer.14.master_biomancy",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.biomancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 18,
          "names": [
            "Biomancer: Perfected Flesh"
          ],
          "features": [
            {
              "id": "fbc554dbad9cbbc7",
              "name": "Biomancer: Perfected Flesh",
              "level": 18,
              "status": "locked",
              "description": "As a Bonus Action once per Long Rest, perfect your physiology for 1 minute. At start of each of your turns while above 0 HP, regain 10 HP; gain +10 ft Speed and Advantage on STR, DEX, and CON saving throws. Fleshcraft may benefit two creatures per turn instead of one.",
              "campaignId": "subfeature.subclass.psyker.biomancer.18.perfected_flesh",
              "ownerClassId": "class.psyker",
              "ownerSubclassId": "subclass.psyker.biomancer"
            }
          ],
          "entries": [
            {
              "level": 18,
              "type": "ItemGrant",
              "title": "Perfected Flesh",
              "names": [
                "Biomancer: Perfected Flesh"
              ],
              "features": [
                {
                  "id": "fbc554dbad9cbbc7",
                  "name": "Biomancer: Perfected Flesh",
                  "level": 18,
                  "status": "locked",
                  "description": "As a Bonus Action once per Long Rest, perfect your physiology for 1 minute. At start of each of your turns while above 0 HP, regain 10 HP; gain +10 ft Speed and Advantage on STR, DEX, and CON saving throws. Fleshcraft may benefit two creatures per turn instead of one.",
                  "campaignId": "subfeature.subclass.psyker.biomancer.18.perfected_flesh",
                  "ownerClassId": "class.psyker",
                  "ownerSubclassId": "subclass.psyker.biomancer"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 4
    },
    {
      "id": "f492213d68fa9a31",
      "name": "Assassin",
      "kind": "Item",
      "campaignId": "subclass.operative.assassin",
      "status": "locked",
      "slug": "assassin",
      "classId": "class.operative",
      "className": "Operative",
      "summary": "Marked prey, ambush, target elimination\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "description": "Marked prey, ambush, target elimination\n\nSubclass roster/identity locked; exact feature text may still undergo D&D5e balance cleanup.",
      "restriction": "",
      "levels": [
        {
          "level": 1,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 2,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 3,
          "names": [
            "Assassin: Marked Prey",
            "Assassin: Ambush Specialist"
          ],
          "features": [
            {
              "id": "dd561e24d044defe",
              "name": "Assassin: Marked Prey",
              "level": 3,
              "status": "locked",
              "description": "As a Bonus Action, mark one creature you can see within 90 ft for 1 minute. You have Advantage on Survival, Investigation, and Perception checks to track or locate it. Once per turn when you deal Sneak Attack damage to it, add PB to the damage. Uses = PB per Long Rest.",
              "campaignId": "subfeature.subclass.operative.assassin.3.marked_prey",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.assassin"
            },
            {
              "id": "b4ebd55961f2fbc8",
              "name": "Assassin: Ambush Specialist",
              "level": 3,
              "status": "locked",
              "description": "You have Advantage on Initiative rolls. Once during the first round of combat, when you deal Sneak Attack damage to a creature that has not yet taken a turn, deal additional damage equal to your Operative level.",
              "campaignId": "subfeature.subclass.operative.assassin.3.ambush_specialist",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.assassin"
            }
          ],
          "entries": [
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Marked Prey",
              "names": [
                "Assassin: Marked Prey"
              ],
              "features": [
                {
                  "id": "dd561e24d044defe",
                  "name": "Assassin: Marked Prey",
                  "level": 3,
                  "status": "locked",
                  "description": "As a Bonus Action, mark one creature you can see within 90 ft for 1 minute. You have Advantage on Survival, Investigation, and Perception checks to track or locate it. Once per turn when you deal Sneak Attack damage to it, add PB to the damage. Uses = PB per Long Rest.",
                  "campaignId": "subfeature.subclass.operative.assassin.3.marked_prey",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.assassin"
                }
              ],
              "choices": null,
              "points": null
            },
            {
              "level": 3,
              "type": "ItemGrant",
              "title": "Ambush Specialist",
              "names": [
                "Assassin: Ambush Specialist"
              ],
              "features": [
                {
                  "id": "b4ebd55961f2fbc8",
                  "name": "Assassin: Ambush Specialist",
                  "level": 3,
                  "status": "locked",
                  "description": "You have Advantage on Initiative rolls. Once during the first round of combat, when you deal Sneak Attack damage to a creature that has not yet taken a turn, deal additional damage equal to your Operative level.",
                  "campaignId": "subfeature.subclass.operative.assassin.3.ambush_specialist",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.assassin"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 4,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 5,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 6,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 7,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 8,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 9,
          "names": [
            "Assassin: Predator's Tools"
          ],
          "features": [
            {
              "id": "974666be78f8a511",
              "name": "Assassin: Predator's Tools",
              "level": 9,
              "status": "locked",
              "description": "Relentless Pursuit: when your Marked Prey voluntarily moves away, use your Reaction to move up to half Speed toward it without provoking from that creature. Poison Expertise: gain Poisoner’s Kit proficiency (Expertise if already proficient), and applying a poison to a weapon is a Bonus Action.",
              "campaignId": "subfeature.subclass.operative.assassin.9.predator_s_tools",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.assassin"
            }
          ],
          "entries": [
            {
              "level": 9,
              "type": "ItemGrant",
              "title": "Predator's Tools",
              "names": [
                "Assassin: Predator's Tools"
              ],
              "features": [
                {
                  "id": "974666be78f8a511",
                  "name": "Assassin: Predator's Tools",
                  "level": 9,
                  "status": "locked",
                  "description": "Relentless Pursuit: when your Marked Prey voluntarily moves away, use your Reaction to move up to half Speed toward it without provoking from that creature. Poison Expertise: gain Poisoner’s Kit proficiency (Expertise if already proficient), and applying a poison to a weapon is a Bonus Action.",
                  "campaignId": "subfeature.subclass.operative.assassin.9.predator_s_tools",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.assassin"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 10,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 11,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 12,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 13,
          "names": [
            "Assassin: Execution"
          ],
          "features": [
            {
              "id": "8ecba81fd2ed5bc1",
              "name": "Assassin: Execution",
              "level": 13,
              "status": "locked",
              "description": "Once per turn when you deal Sneak Attack to your Marked Prey while it is at or below half maximum HP, deal +3d6 damage. If this reduces it to 0 HP, mark another visible creature immediately without a Bonus Action or additional Marked Prey use.",
              "campaignId": "subfeature.subclass.operative.assassin.13.execution",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.assassin"
            }
          ],
          "entries": [
            {
              "level": 13,
              "type": "ItemGrant",
              "title": "Execution",
              "names": [
                "Assassin: Execution"
              ],
              "features": [
                {
                  "id": "8ecba81fd2ed5bc1",
                  "name": "Assassin: Execution",
                  "level": 13,
                  "status": "locked",
                  "description": "Once per turn when you deal Sneak Attack to your Marked Prey while it is at or below half maximum HP, deal +3d6 damage. If this reduces it to 0 HP, mark another visible creature immediately without a Bonus Action or additional Marked Prey use.",
                  "campaignId": "subfeature.subclass.operative.assassin.13.execution",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.assassin"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 14,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 15,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 16,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 17,
          "names": [
            "Assassin: Death Sentence"
          ],
          "features": [
            {
              "id": "b469671e7a017188",
              "name": "Assassin: Death Sentence",
              "level": 17,
              "status": "locked",
              "description": "When you deal Sneak Attack to your Marked Prey, declare Death Sentence. It makes a CON save (DC 8 + PB + DEX). On failure, roll your Sneak Attack dice twice for this attack; on success use normal Sneak Attack. Until start of your next turn it cannot regain HP or become Hidden from you. Once per Short or Long Rest.",
              "campaignId": "subfeature.subclass.operative.assassin.17.death_sentence",
              "ownerClassId": "class.operative",
              "ownerSubclassId": "subclass.operative.assassin"
            }
          ],
          "entries": [
            {
              "level": 17,
              "type": "ItemGrant",
              "title": "Death Sentence",
              "names": [
                "Assassin: Death Sentence"
              ],
              "features": [
                {
                  "id": "b469671e7a017188",
                  "name": "Assassin: Death Sentence",
                  "level": 17,
                  "status": "locked",
                  "description": "When you deal Sneak Attack to your Marked Prey, declare Death Sentence. It makes a CON save (DC 8 + PB + DEX). On failure, roll your Sneak Attack dice twice for this attack; on success use normal Sneak Attack. Until start of your next turn it cannot regain HP or become Hidden from you. Once per Short or Long Rest.",
                  "campaignId": "subfeature.subclass.operative.assassin.17.death_sentence",
                  "ownerClassId": "class.operative",
                  "ownerSubclassId": "subclass.operative.assassin"
                }
              ],
              "choices": null,
              "points": null
            }
          ]
        },
        {
          "level": 18,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 19,
          "names": [],
          "features": [],
          "entries": []
        },
        {
          "level": 20,
          "names": [],
          "features": [],
          "entries": []
        }
      ],
      "featureCount": 5
    }
  ],
  "backgrounds": [
    {
      "id": "b18fb25068a98162",
      "name": "Adept",
      "kind": "Item",
      "campaignId": "background.adept",
      "status": "locked",
      "slug": "adept",
      "summary": "Scholar, clerk, savant, archivist, or administratum-trained specialist.",
      "description": "Scholar, clerk, savant, archivist, or administratum-trained specialist.\n\nAbility scores: INT/WIS/CHA\n\nSkill proficiencies: Investigation; History\n\nTool proficiency: Calligrapher's Supplies or campaign data-slate/administratum tool\n\nCanonical Origin Talent: Skilled\n\nLegacy source origin field: Skilled\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Scribe.\n\nNative origin talent: Skilled.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "INT/WIS/CHA",
      "skills": "Investigation; History",
      "tools": "Calligrapher's Supplies or campaign data-slate/administratum tool",
      "originTalent": "Skilled",
      "nativeBackground": "Scribe",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "1073769d4c67c0e0",
      "name": "Devotee",
      "kind": "Item",
      "campaignId": "background.devotee",
      "status": "locked",
      "slug": "devotee",
      "summary": "Religious upbringing without automatically granting supernatural spellcasting.",
      "description": "Religious upbringing without automatically granting supernatural spellcasting.\n\nAbility scores: CON/WIS/CHA\n\nSkill proficiencies: Creed/Lore; Insight\n\nTool proficiency: One Artisan Tool or ritual/liturgical tool appropriate to the faith\n\nCanonical Origin Talent: Magic Initiate (Cleric)\n\nLegacy source origin field: Tough\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Acolyte.\n\nNative origin talent: Magic Initiate (Cleric).\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "CON/WIS/CHA",
      "skills": "Creed/Lore; Insight",
      "tools": "One Artisan Tool or ritual/liturgical tool appropriate to the faith",
      "originTalent": "Magic Initiate (Cleric)",
      "nativeBackground": "Acolyte",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "f582e236148274c4",
      "name": "Drifter",
      "kind": "Item",
      "campaignId": "background.drifter",
      "status": "needs_review",
      "slug": "drifter",
      "summary": "Colonist, death-world survivor, ranger, homesteader, or wilderness native.",
      "description": "Colonist, death-world survivor, ranger, homesteader, or wilderness native.\n\nAbility scores: STR/CON/WIS\n\nSkill proficiencies: Survival; Perception\n\nTool proficiency: Herbalism Kit or one appropriate Artisan Tool\n\nCanonical Origin Talent: Lucky\n\nLegacy source origin field: Tough\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Wayfarer.\n\nNative origin talent: Lucky.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "STR/CON/WIS",
      "skills": "Survival; Perception",
      "tools": "Herbalism Kit or one appropriate Artisan Tool",
      "originTalent": "Lucky",
      "nativeBackground": "Wayfarer",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "f74775d29ae56d7e",
      "name": "Exile",
      "kind": "Item",
      "campaignId": "background.exile",
      "status": "needs_review",
      "slug": "exile",
      "summary": "Exile, deserter, renegade, escaped captive, or social outsider.",
      "description": "Exile, deserter, renegade, escaped captive, or social outsider.\n\nAbility scores: DEX/WIS/CHA\n\nSkill proficiencies: Stealth; Insight\n\nTool proficiency: Disguise Kit or Security Kit\n\nCanonical Origin Talent: Healer\n\nLegacy source origin field: Lucky\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Hermit.\n\nNative origin talent: Healer.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "DEX/WIS/CHA",
      "skills": "Stealth; Insight",
      "tools": "Disguise Kit or Security Kit",
      "originTalent": "Healer",
      "nativeBackground": "Hermit",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "794a83fdd3934807",
      "name": "Fabricator",
      "kind": "Item",
      "campaignId": "background.fabricator",
      "status": "locked",
      "slug": "fabricator",
      "summary": "Mechanic, manufactorum worker, artisan, or technical laborer.",
      "description": "Mechanic, manufactorum worker, artisan, or technical laborer.\n\nAbility scores: STR/DEX/INT\n\nSkill proficiencies: Investigation; Sleight of Hand\n\nTool proficiency: Tech/Tinker's Tools\n\nCanonical Origin Talent: Crafter\n\nLegacy source origin field: Crafter\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Artisan.\n\nNative origin talent: Crafter.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "STR/DEX/INT",
      "skills": "Investigation; Sleight of Hand",
      "tools": "Tech/Tinker's Tools",
      "originTalent": "Crafter",
      "nativeBackground": "Artisan",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "9e52d1e4559fdb2c",
      "name": "Grifter",
      "kind": "Item",
      "campaignId": "background.grifter",
      "status": "locked",
      "slug": "grifter",
      "summary": "Con artist, fixer, black-market broker, or social infiltrator.",
      "description": "Con artist, fixer, black-market broker, or social infiltrator.\n\nAbility scores: DEX/INT/CHA\n\nSkill proficiencies: Deception; Sleight of Hand\n\nTool proficiency: Disguise Kit or Security Kit\n\nCanonical Origin Talent: Skilled\n\nLegacy source origin field: Lucky\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Charlatan.\n\nNative origin talent: Skilled.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "DEX/INT/CHA",
      "skills": "Deception; Sleight of Hand",
      "tools": "Disguise Kit or Security Kit",
      "originTalent": "Skilled",
      "nativeBackground": "Charlatan",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "aff81d0c250a2088",
      "name": "Highborn",
      "kind": "Item",
      "campaignId": "background.highborn",
      "status": "needs_review",
      "slug": "highborn",
      "summary": "Aristocrat, dynastic heir, clan elite, sept notable, or equivalent.",
      "description": "Aristocrat, dynastic heir, clan elite, sept notable, or equivalent.\n\nAbility scores: INT/WIS/CHA\n\nSkill proficiencies: History; Persuasion\n\nTool proficiency: One Gaming Set\n\nCanonical Origin Talent: Skilled\n\nLegacy source origin field: Skilled\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Noble.\n\nNative origin talent: Skilled.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "INT/WIS/CHA",
      "skills": "History; Persuasion",
      "tools": "One Gaming Set",
      "originTalent": "Skilled",
      "nativeBackground": "Noble",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "96c13da162c388bc",
      "name": "Laborer",
      "kind": "Item",
      "campaignId": "background.laborer",
      "status": "needs_review",
      "slug": "laborer",
      "summary": "Colonist, death-world survivor, ranger, homesteader, or wilderness native.",
      "description": "Colonist, death-world survivor, ranger, homesteader, or wilderness native.\n\nAbility scores: STR/CON/WIS\n\nSkill proficiencies: Survival; Perception\n\nTool proficiency: Herbalism Kit or one appropriate Artisan Tool\n\nCanonical Origin Talent: Tough\n\nLegacy source origin field: Tough\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Farmer.\n\nNative origin talent: Tough.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "STR/CON/WIS",
      "skills": "Survival; Perception",
      "tools": "Herbalism Kit or one appropriate Artisan Tool",
      "originTalent": "Tough",
      "nativeBackground": "Farmer",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "0058f30a98ce6c11",
      "name": "Outlaw",
      "kind": "Item",
      "campaignId": "background.outlaw",
      "status": "needs_review",
      "slug": "outlaw",
      "summary": "Exile, deserter, renegade, escaped captive, or social outsider.",
      "description": "Exile, deserter, renegade, escaped captive, or social outsider.\n\nAbility scores: DEX/WIS/CHA\n\nSkill proficiencies: Stealth; Insight\n\nTool proficiency: Disguise Kit or Security Kit\n\nCanonical Origin Talent: Alert\n\nLegacy source origin field: Lucky\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Criminal.\n\nNative origin talent: Alert.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "DEX/WIS/CHA",
      "skills": "Stealth; Insight",
      "tools": "Disguise Kit or Security Kit",
      "originTalent": "Alert",
      "nativeBackground": "Criminal",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "df95fd589c7d3aae",
      "name": "Pathfinder",
      "kind": "Item",
      "campaignId": "background.pathfinder",
      "status": "needs_review",
      "slug": "pathfinder",
      "summary": "Reconnaissance specialist, pathfinder, outrider, or hunter.",
      "description": "Reconnaissance specialist, pathfinder, outrider, or hunter.\n\nAbility scores: DEX/CON/WIS\n\nSkill proficiencies: Stealth; Perception\n\nTool proficiency: Cartographer's Tools\n\nCanonical Origin Talent: Magic Initiate (Druid)\n\nLegacy source origin field: Alert\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Guide.\n\nNative origin talent: Magic Initiate (Druid).\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "DEX/CON/WIS",
      "skills": "Stealth; Perception",
      "tools": "Cartographer's Tools",
      "originTalent": "Magic Initiate (Druid)",
      "nativeBackground": "Guide",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "a63eb5f7a820eb5a",
      "name": "Performer",
      "kind": "Item",
      "campaignId": "background.performer",
      "status": "needs_review",
      "slug": "performer",
      "summary": "Diplomat, negotiator, attaché, liaison, or cross-faction intermediary.",
      "description": "Diplomat, negotiator, attaché, liaison, or cross-faction intermediary.\n\nAbility scores: INT/WIS/CHA\n\nSkill proficiencies: Persuasion; Insight\n\nTool proficiency: Disguise Kit or one Gaming Set\n\nCanonical Origin Talent: Musician\n\nLegacy source origin field: Skilled\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Entertainer.\n\nNative origin talent: Musician.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "INT/WIS/CHA",
      "skills": "Persuasion; Insight",
      "tools": "Disguise Kit or one Gaming Set",
      "originTalent": "Musician",
      "nativeBackground": "Entertainer",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "95f3d6c6d49bc1d6",
      "name": "Savant",
      "kind": "Item",
      "campaignId": "background.savant",
      "status": "needs_review",
      "slug": "savant",
      "summary": "Scholar, clerk, savant, archivist, or administratum-trained specialist.",
      "description": "Scholar, clerk, savant, archivist, or administratum-trained specialist.\n\nAbility scores: INT/WIS/CHA\n\nSkill proficiencies: Investigation; History\n\nTool proficiency: Calligrapher's Supplies or campaign data-slate/administratum tool\n\nCanonical Origin Talent: Magic Initiate (Wizard)\n\nLegacy source origin field: Skilled\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Sage.\n\nNative origin talent: Magic Initiate (Wizard).\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "INT/WIS/CHA",
      "skills": "Investigation; History",
      "tools": "Calligrapher's Supplies or campaign data-slate/administratum tool",
      "originTalent": "Magic Initiate (Wizard)",
      "nativeBackground": "Sage",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "89e27356cf139167",
      "name": "Sentry",
      "kind": "Item",
      "campaignId": "background.sentry",
      "status": "needs_review",
      "slug": "sentry",
      "summary": "Former line infantry, militia, PDF, mercenary regiment, or analogous xenos soldier.",
      "description": "Former line infantry, militia, PDF, mercenary regiment, or analogous xenos soldier.\n\nAbility scores: STR/DEX/CON\n\nSkill proficiencies: Athletics; Perception\n\nTool proficiency: Land Vehicles\n\nCanonical Origin Talent: Alert\n\nLegacy source origin field: Savage Attacker\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Guard.\n\nNative origin talent: Alert.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "STR/DEX/CON",
      "skills": "Athletics; Perception",
      "tools": "Land Vehicles",
      "originTalent": "Alert",
      "nativeBackground": "Guard",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "a82ddaab2b653dd7",
      "name": "Trader",
      "kind": "Item",
      "campaignId": "background.trader",
      "status": "needs_review",
      "slug": "trader",
      "summary": "Professional gun-for-hire or independent warrior.",
      "description": "Professional gun-for-hire or independent warrior.\n\nAbility scores: STR/DEX/CON\n\nSkill proficiencies: Athletics; Intimidation\n\nTool proficiency: Land Vehicles or one Gaming Set\n\nCanonical Origin Talent: Lucky\n\nLegacy source origin field: Savage Attacker\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Merchant.\n\nNative origin talent: Lucky.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "STR/DEX/CON",
      "skills": "Athletics; Intimidation",
      "tools": "Land Vehicles or one Gaming Set",
      "originTalent": "Lucky",
      "nativeBackground": "Merchant",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "fd9f649cda1550a4",
      "name": "Veteran",
      "kind": "Item",
      "campaignId": "background.veteran",
      "status": "needs_review",
      "slug": "veteran",
      "summary": "Former line infantry, militia, PDF, mercenary regiment, or analogous xenos soldier.",
      "description": "Former line infantry, militia, PDF, mercenary regiment, or analogous xenos soldier.\n\nAbility scores: STR/DEX/CON\n\nSkill proficiencies: Athletics; Perception\n\nTool proficiency: Land Vehicles\n\nCanonical Origin Talent: Savage Attacker\n\nLegacy source origin field: Savage Attacker\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Soldier.\n\nNative origin talent: Savage Attacker.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "STR/DEX/CON",
      "skills": "Athletics; Perception",
      "tools": "Land Vehicles",
      "originTalent": "Savage Attacker",
      "nativeBackground": "Soldier",
      "equipmentStatus": "deferred",
      "wealth": "50"
    },
    {
      "id": "e32a98c6a35bfcd7",
      "name": "Voidsman",
      "kind": "Item",
      "campaignId": "background.voidsman",
      "status": "needs_review",
      "slug": "voidsman",
      "summary": "Shipboard crew, voidsman, corsair, naval hand, or station-born traveler.",
      "description": "Shipboard crew, voidsman, corsair, naval hand, or station-born traveler.\n\nAbility scores: DEX/INT/WIS\n\nSkill proficiencies: Acrobatics; Perception\n\nTool proficiency: Navigator's Tools or Voidcraft Vehicles\n\nCanonical Origin Talent: Tavern Brawler\n\nLegacy source origin field: Alert\n\nStarting equipment: Exact Warhammer item packages are assigned after equipment conversion; use normal 2024 package-or-budget structure.\n\nNative D&D5e origin background: Sailor.\n\nNative origin talent: Tavern Brawler.\n\nThe Warhammer display name is changed; internal D&D5e keys remain available for compatibility.",
      "abilityScores": "DEX/INT/WIS",
      "skills": "Acrobatics; Perception",
      "tools": "Navigator's Tools or Voidcraft Vehicles",
      "originTalent": "Tavern Brawler",
      "nativeBackground": "Sailor",
      "equipmentStatus": "deferred",
      "wealth": "50"
    }
  ],
  "talents": [
    {
      "id": "6567843dad3e56b0",
      "name": "Ammunition Specialist",
      "kind": "Item",
      "campaignId": "talent.ammo_specialist",
      "status": "locked",
      "slug": "ammunition-specialist",
      "category": "General",
      "prerequisite": "Level 4+; proficiency with an ammunition weapon",
      "nativeName": "",
      "description": "Increase DEX or INT by 1 (max 20). Once on each of your turns, you can switch between compatible ammunition types as part of making an attack instead of requiring a separate object interaction. When you Reload, you may choose the loaded compatible ammunition as part of the same Reload.\n\nPrerequisite: Level 4+; proficiency with an ammunition weapon\n\nSupports specialty-ammo play without attack/DC bonuses."
    },
    {
      "id": "211ac855a91e22fe",
      "name": "Boon of Perfect Warfare",
      "kind": "Item",
      "campaignId": "boon.perfect_warfare",
      "status": "locked",
      "slug": "boon-of-perfect-warfare",
      "category": "Epic Boon",
      "prerequisite": "Level 19+",
      "nativeName": "Boon of Combat Prowess",
      "description": "Campaign display name for the 2024 Boon of Combat Prowess; use the native feat mechanics unchanged.\n\nStrong Soldier/Operative recommendation.\n\nUse the native D&D5e Epic Boon mechanics; this item is a Warhammer display-name alias, not a second Epic Boon engine."
    },
    {
      "id": "cff158497ad124a2",
      "name": "Boon of Providence",
      "kind": "Item",
      "campaignId": "boon.providence",
      "status": "locked",
      "slug": "boon-of-providence",
      "category": "Epic Boon",
      "prerequisite": "Level 19+",
      "nativeName": "Boon of Fate",
      "description": "Campaign display name for the 2024 Boon of Fate; use the native feat mechanics unchanged.\n\nStrong Preacher/Commander/support identity.\n\nUse the native D&D5e Epic Boon mechanics; this item is a Warhammer display-name alias, not a second Epic Boon engine."
    },
    {
      "id": "8d867ec36b4a4259",
      "name": "Boon of the Unbreakable",
      "kind": "Item",
      "campaignId": "boon.unbreakable",
      "status": "locked",
      "slug": "boon-of-the-unbreakable",
      "category": "Epic Boon",
      "prerequisite": "Level 19+",
      "nativeName": "Boon of Fortitude",
      "description": "Campaign display name for the 2024 Boon of Fortitude; use the native feat mechanics unchanged.\n\nPrimarily recommended for Space Marine/Soldier but available normally if prerequisites are met.\n\nUse the native D&D5e Epic Boon mechanics; this item is a Warhammer display-name alias, not a second Epic Boon engine."
    },
    {
      "id": "cfb755b7fd453c6d",
      "name": "Boon of Translocation",
      "kind": "Item",
      "campaignId": "boon.translocation",
      "status": "locked",
      "slug": "boon-of-translocation",
      "category": "Epic Boon",
      "prerequisite": "Level 19+",
      "nativeName": "Boon of Dimensional Travel",
      "description": "Campaign display name for the 2024 Boon of Dimensional Travel; use the native feat mechanics unchanged.\n\nUseful for mobile martial/caster builds.\n\nUse the native D&D5e Epic Boon mechanics; this item is a Warhammer display-name alias, not a second Epic Boon engine."
    },
    {
      "id": "0241c3cb58d86e6d",
      "name": "Boon of True Sight",
      "kind": "Item",
      "campaignId": "boon.true_sight",
      "status": "locked",
      "slug": "boon-of-true-sight",
      "category": "Epic Boon",
      "prerequisite": "Level 19+",
      "nativeName": "Boon of Truesight",
      "description": "Campaign display name for the 2024 Boon of Truesight; use the native feat mechanics unchanged.\n\nStrong anti-Warp/anti-deception option.\n\nUse the native D&D5e Epic Boon mechanics; this item is a Warhammer display-name alias, not a second Epic Boon engine."
    },
    {
      "id": "fcf6938a4010dc56",
      "name": "Boon of Warp Mastery",
      "kind": "Item",
      "campaignId": "boon.warp_mastery",
      "status": "locked",
      "slug": "boon-of-warp-mastery",
      "category": "Epic Boon",
      "prerequisite": "Level 19+",
      "nativeName": "Boon of Spell Recall",
      "description": "Campaign display name for the 2024 Boon of Spell Recall; use the native feat mechanics unchanged.\n\nRecommended Psyker option; it does not itself reduce Warp Exposure.\n\nUse the native D&D5e Epic Boon mechanics; this item is a Warhammer display-name alias, not a second Epic Boon engine."
    },
    {
      "id": "ce997d94386fa726",
      "name": "Demolitions Expert",
      "kind": "Item",
      "campaignId": "talent.demolitions_expert",
      "status": "locked",
      "slug": "demolitions-expert",
      "category": "General",
      "prerequisite": "Level 4+",
      "nativeName": "",
      "description": "Increase DEX or INT by 1 (max 20). Once per turn when you roll damage for a grenade, explosive, or Ordnance Item you activated, you can reroll a number of the effect's damage dice up to your PB; you must use the new rolls.\n\nPrerequisite: Level 4+\n\nDamage reliability rather than save-DC inflation."
    },
    {
      "id": "c92ebf9be0c29858",
      "name": "Field Engineer",
      "kind": "Item",
      "campaignId": "talent.field_engineer",
      "status": "locked",
      "slug": "field-engineer",
      "category": "General",
      "prerequisite": "Level 4+",
      "nativeName": "",
      "description": "Increase INT or WIS by 1 (max 20). Gain proficiency with Tech/Tinker's Tools. During a Short Rest, you can repair one construct or vehicle you can reach for Hit Points equal to 2d6 + your PB + your INT modifier. A target can benefit from this repair once per Short Rest.\n\nPrerequisite: Level 4+\n\nCampaign-specific repair feat; not a substitute for Tech-Adept class powers."
    },
    {
      "id": "06947e4149130cf7",
      "name": "Overwatch Specialist",
      "kind": "Item",
      "campaignId": "talent.overwatch_specialist",
      "status": "locked",
      "slug": "overwatch-specialist",
      "category": "General",
      "prerequisite": "Level 4+; DEX or WIS 13+",
      "nativeName": "",
      "description": "Increase DEX or WIS by 1 (max 20). A number of times per Long Rest equal to PB, when a hostile creature you can see moves at least 10 feet while within the normal range of a ranged weapon you are wielding, you can use your Reaction to make one attack with that weapon against it.\n\nPrerequisite: Level 4+; DEX or WIS 13+\n\nAdds a limited reaction-shot option without making Overwatch a universal base-class rule."
    },
    {
      "id": "aa56f28133733382",
      "name": "Suppression Specialist",
      "kind": "Item",
      "campaignId": "talent.suppression_specialist",
      "status": "locked",
      "slug": "suppression-specialist",
      "category": "General",
      "prerequisite": "Level 4+; proficiency with a weapon that has Suppressive Fire",
      "nativeName": "",
      "description": "Increase STR or DEX by 1 (max 20). When a creature succeeds on its saving throw against your Suppressive Fire, you can still reduce its Speed by 10 feet until the end of its next turn. You can affect only one successful saver per use of Suppressive Fire.\n\nPrerequisite: Level 4+; proficiency with a weapon that has Suppressive Fire\n\nImproves control without applying full Suppressed on a successful save."
    },
    {
      "id": "a31deb201ca8d8b1",
      "name": "Vehicle Ace",
      "kind": "Item",
      "campaignId": "talent.vehicle_ace",
      "status": "locked",
      "slug": "vehicle-ace",
      "category": "General",
      "prerequisite": "Level 4+",
      "nativeName": "",
      "description": "Increase DEX or INT by 1 (max 20). Gain one vehicle proficiency. You have Advantage on ability checks made to control that vehicle during hazards, chases, or loss-of-control situations, and you ignore Disadvantage on those checks caused solely by the vehicle being damaged.\n\nPrerequisite: Level 4+\n\nAdventure-scale vehicle specialization."
    },
    {
      "id": "99b2c302d6961afb",
      "name": "Warp-Hardened",
      "kind": "Item",
      "campaignId": "talent.warp_hardened",
      "status": "locked",
      "slug": "warp-hardened",
      "category": "General",
      "prerequisite": "Level 4+",
      "nativeName": "",
      "description": "Increase WIS or CHA by 1 (max 20). You have Advantage on saving throws against possession and against effects explicitly tagged as Warp intrusion. When you take Psychic damage, you can use your Reaction to gain Resistance to that instance of damage; uses equal PB per Long Rest.\n\nPrerequisite: Level 4+\n\nExternal Warp defense; does not protect a Psyker from the normal cost of Draw from the Warp unless an effect says so."
    },
    {
      "id": "ea088cc0de9b6775",
      "name": "Xenobiologist",
      "kind": "Item",
      "campaignId": "talent.xenobiologist",
      "status": "locked",
      "slug": "xenobiologist",
      "category": "General",
      "prerequisite": "Level 4+",
      "nativeName": "",
      "description": "Increase INT or WIS by 1 (max 20). Gain proficiency in Xenology (native Nature), or Expertise if already proficient. As a Bonus Action after observing a creature for at least 1 round, you can learn one damage resistance, immunity, or vulnerability it has (GM chooses if several apply). Uses equal PB per Long Rest.\n\nPrerequisite: Level 4+\n\nExploration/monster-knowledge feat."
    }
  ],
  "features": {
    "00eab088902b0818": {
      "id": "00eab088902b0818",
      "name": "Devastating Strike I",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.9.devastating_assault_i",
      "status": "needs_review",
      "slug": "devastating-strike-i",
      "description": "When you use Aggressive Assault, forgo its Advantage on one eligible STR-based melee or Astartes ranged attack on your turn. On hit deal +1d10 weapon damage and choose Forceful (push 15 ft, then you may move half Speed toward target without OA) or Hamstring (Speed -15 until start next turn). Eligible ranged attacks may be at any range, but Aggressive Assault itself only grants/forgoes Advantage for eligible ranged attacks within 30 ft.",
      "level": 9,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "015a6cdfdcc84896": {
      "id": "015a6cdfdcc84896",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.9.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain your specialization feature.",
      "level": 9,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "0489a28a0670b4bb": {
      "id": "0489a28a0670b4bb",
      "name": "Purifier: Incandescent Judgment",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.purifier.20.incandescent_judgment",
      "status": "locked",
      "slug": "purifier-incandescent-judgment",
      "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. The first creature you damage on each of your turns is Purging Branded without Fervor. Once per turn when you damage a branded creature, deal +2d8 Fire or Radiant damage (choose on each trigger). You are immune to Frightened and Charmed for the duration.",
      "level": 20,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.purifier",
      "category": "Subclass feature",
      "requirements": ""
    },
    "05472dc674a8d6fa": {
      "id": "05472dc674a8d6fa",
      "name": "Perfect Execution",
      "kind": "Item",
      "campaignId": "progression.class.operative.20.perfect_execution",
      "status": "needs_review",
      "slug": "perfect-execution",
      "description": "Stroke of Luck is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 20,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "0624899a7c1cf0c2": {
      "id": "0624899a7c1cf0c2",
      "name": "Psyker Discipline",
      "kind": "Item",
      "campaignId": "progression.class.psyker.3.psyker_discipline",
      "status": "locked",
      "slug": "psyker-discipline",
      "description": "Choose Pyromancer, Biomancer, or Telekinetic. Discipline-exclusive powers are always known and do not count against the normal Powers Known limit.",
      "level": 3,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "068d3236e47d99c4": {
      "id": "068d3236e47d99c4",
      "name": "Artillerist: Payload Specialist",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.artillerist.10.payload_specialist",
      "status": "locked",
      "slug": "artillerist-payload-specialist",
      "description": "Once on each of your turns when an Ordnance deals damage, add your STR modifier to one damage roll against one target. You also know a third Ordnance cantrip.",
      "level": 10,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.artillerist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "07e1a1dc9ec2ff60": {
      "id": "07e1a1dc9ec2ff60",
      "name": "Bulwark: Bulwark Shield Integration",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.bulwark.3.bulwark_shield_integration",
      "status": "locked",
      "slug": "bulwark-bulwark-shield-integration",
      "description": "A Combat Shield, Boarding Shield, or Storm Shield designated as your Bulwark shield becomes subclass-defining equipment and does not consume Power Armor Upgrade capacity. While wielding it in Combat State, the first creature you hit on your turn has Disadvantage on its first attack against a creature other than you before start of your next turn.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.bulwark",
      "category": "Subclass feature",
      "requirements": ""
    },
    "09b18684d5692da2": {
      "id": "09b18684d5692da2",
      "name": "Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.1.invocations",
      "status": "locked",
      "slug": "invocations",
      "description": "CHA prepared full caster through 9th level. Know 3 Invocation cantrips at L1, 4 at L4, 5 at L10. Prepare leveled Invocations after Long Rest equal to CHA modifier + half Zealot level rounded down (minimum 1). Subclass Invocations are always prepared and do not count.",
      "level": 1,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "0ab1a50c1ab1116b": {
      "id": "0ab1a50c1ab1116b",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.psyker.8.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 8,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "0b53ba3c1e23eb1a": {
      "id": "0b53ba3c1e23eb1a",
      "name": "Preacher: Aura of Resolve",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.preacher.7.aura_of_resolve",
      "status": "locked",
      "slug": "preacher-aura-of-resolve",
      "description": "While conscious, allies within 10 ft gain +2 on saving throws against Frightened and Charmed.",
      "level": 7,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.preacher",
      "category": "Subclass feature",
      "requirements": ""
    },
    "0ce66bb225263a29": {
      "id": "0ce66bb225263a29",
      "name": "Assault: Angel of Death",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.assault.14.angel_of_death",
      "status": "locked",
      "slug": "assault-angel-of-death",
      "description": "While Combat State is active, Jump Pack Assault no longer expends uses, though it still uses your Bonus Action. Meteoric Charge bonus becomes +2d6 and movement from Jump Pack Assault does not provoke Opportunity Attacks.",
      "level": 14,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.assault",
      "category": "Subclass feature",
      "requirements": ""
    },
    "0ea857a5ace61a16": {
      "id": "0ea857a5ace61a16",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.soldier.6.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 6,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "0ffc1c3cd79195de": {
      "id": "0ffc1c3cd79195de",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.14.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 14,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "108732dabce4dd39": {
      "id": "108732dabce4dd39",
      "name": "4th-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.7.4th_level_psychic_powers",
      "status": "locked",
      "slug": "4th-level-psychic-powers",
      "description": "Unlock level-4 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 7,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "123d9621cc9d4e4f": {
      "id": "123d9621cc9d4e4f",
      "name": "9th-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.17.9th_level_invocations",
      "status": "locked",
      "slug": "9th-level-invocations",
      "description": "Unlock level-9 Invocations.",
      "level": 17,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "15c5317121365b16": {
      "id": "15c5317121365b16",
      "name": "Expertise",
      "kind": "Item",
      "campaignId": "progression.class.operative.1.expertise",
      "status": "needs_review",
      "slug": "expertise",
      "description": "Expertise is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 1,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "16201dbcdb955661": {
      "id": "16201dbcdb955661",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.zealot.8.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 8,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "170ec04b883dd8b2": {
      "id": "170ec04b883dd8b2",
      "name": "Weapon Mastery (3)",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.4.weapon_mastery_3",
      "status": "locked",
      "slug": "weapon-mastery-3",
      "description": "Increase mastered weapon choices to 3.",
      "level": 4,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "18b9321d8378dfc5": {
      "id": "18b9321d8378dfc5",
      "name": "Preacher: Improved Aura of Resolve",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.preacher.15.improved_aura_of_resolve",
      "status": "locked",
      "slug": "preacher-improved-aura-of-resolve",
      "description": "Aura of Resolve radius becomes 30 ft; the bonus remains +2.",
      "level": 15,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.preacher",
      "category": "Subclass feature",
      "requirements": ""
    },
    "1945b72f73bf0301": {
      "id": "1945b72f73bf0301",
      "name": "Infiltrator: Ghost Training",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.infiltrator.3.ghost_training",
      "status": "locked",
      "slug": "infiltrator-ghost-training",
      "description": "Gain Expertise in Stealth or Security Kit; if already Expert, choose another Operative skill. Gain a Climb Speed equal to your Speed. You can perform basic lock/security-device interactions that normally take an Action as a Bonus Action.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.infiltrator",
      "category": "Subclass feature",
      "requirements": ""
    },
    "1a2878272e64baa5": {
      "id": "1a2878272e64baa5",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.zealot.16.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 16,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "1ae1e738ea9a61d2": {
      "id": "1ae1e738ea9a61d2",
      "name": "Action Surge II",
      "kind": "Item",
      "campaignId": "progression.class.soldier.17.action_surge_ii",
      "status": "needs_review",
      "slug": "action-surge-ii",
      "description": "Action Surge (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 17,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "1c1a69d515c6a0f4": {
      "id": "1c1a69d515c6a0f4",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.soldier.10.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 10,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "1cb2728ef11cf920": {
      "id": "1cb2728ef11cf920",
      "name": "Artillerist: Indirect Fire",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.artillerist.15.indirect_fire",
      "status": "locked",
      "slug": "artillerist-indirect-fire",
      "description": "Called Fire may target a point you cannot personally see if its location is communicated by a willing spotter you can communicate with or is otherwise precisely known, the target point is in range, and a valid delivery path exists. Such Ordnance ignores Half Cover from intervening low obstacles and treats Three-Quarters Cover as Half Cover unless the Ordnance says otherwise.",
      "level": 15,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.artillerist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "1dfb2adba8a74a42": {
      "id": "1dfb2adba8a74a42",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.operative.17.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 17,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "1ef1cc01e98a7a61": {
      "id": "1ef1cc01e98a7a61",
      "name": "Energy Savant: Power Modulation",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.energy_savant.5.power_modulation",
      "status": "locked",
      "slug": "energy-savant-power-modulation",
      "description": "Once per turn when a Tech Ability deals Fire, Lightning, or Force damage, add your INT modifier to one damage roll of that ability.",
      "level": 5,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.energy_savant",
      "category": "Subclass feature",
      "requirements": ""
    },
    "200319c5c256433e": {
      "id": "200319c5c256433e",
      "name": "Epic Boon",
      "kind": "Item",
      "campaignId": "progression.class.operative.19.epic_boon",
      "status": "needs_review",
      "slug": "epic-boon",
      "description": "Epic Boon is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 19,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "20f231f79d16e2f0": {
      "id": "20f231f79d16e2f0",
      "name": "Telekinetic: Absolute Force",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.telekinetic.18.absolute_force",
      "status": "locked",
      "slug": "telekinetic-absolute-force",
      "description": "Kinetic Barrier no longer has limited uses (Reaction still limits it to once per round). Once per turn, Kinetic Impulse can move an unwilling Large-or-smaller creature up to 20 ft; after the movement you may knock it Prone. Huge targets remain limited to 10 ft and cannot be knocked Prone by this feature.",
      "level": 18,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.telekinetic",
      "category": "Subclass feature",
      "requirements": ""
    },
    "21656e0035591dc9": {
      "id": "21656e0035591dc9",
      "name": "Exploit Weakness",
      "kind": "Item",
      "campaignId": "progression.class.operative.5.exploit_weakness",
      "status": "needs_review",
      "slug": "exploit-weakness",
      "description": "Sneak Attack qualification/Exploit option minutiae remain Needs Review.",
      "level": 5,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2346600465efe7c5": {
      "id": "2346600465efe7c5",
      "name": "Infiltrator: Deep Cover",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.infiltrator.13.deep_cover",
      "status": "locked",
      "slug": "infiltrator-deep-cover",
      "description": "With appropriate clothing/equipment and preparation, establish convincing false identities. You have Advantage on Deception checks to maintain a prepared identity and Security Kit checks against identification systems, and can accurately mimic a person’s speech after studying them. Routine observers do not automatically see through the disguise.",
      "level": 13,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.infiltrator",
      "category": "Subclass feature",
      "requirements": ""
    },
    "275e31661ef1a78c": {
      "id": "275e31661ef1a78c",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.zealot.12.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 12,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "27ba51e5a27b534a": {
      "id": "27ba51e5a27b534a",
      "name": "Fervor",
      "kind": "Item",
      "campaignId": "progression.class.zealot.2.fervor",
      "status": "locked",
      "slug": "fervor",
      "description": "Fervor maximum 2. Long Rest restores all. Once per Long Rest, a Short Rest restores half maximum rounded up. Fervor powers base and subclass features and is separate from spell slots.",
      "level": 2,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "28edbbbc5b40ab1e": {
      "id": "28edbbbc5b40ab1e",
      "name": "Apex Technologist",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.20.apex_technologist",
      "status": "locked",
      "slug": "apex-technologist",
      "description": "Once per Long Rest, cast one prepared 6th-level Tech Ability without expending a spell slot. In addition, when Initiative is rolled and you have no Tactical Calculation uses remaining, regain one use.",
      "level": 20,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2a05395fa76d0731": {
      "id": "2a05395fa76d0731",
      "name": "7th-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.13.7th_level_psychic_powers",
      "status": "locked",
      "slug": "7th-level-psychic-powers",
      "description": "Unlock level-7 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 13,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2a8cadf03848d16e": {
      "id": "2a8cadf03848d16e",
      "name": "Epic Boon",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.19.epic_boon",
      "status": "needs_review",
      "slug": "epic-boon",
      "description": "Epic Boon is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 19,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2af9ffa25b36bcf5": {
      "id": "2af9ffa25b36bcf5",
      "name": "Zealous Advance",
      "kind": "Item",
      "campaignId": "progression.class.zealot.2.zealous_advance",
      "status": "locked",
      "slug": "zealous-advance",
      "description": "Spend 1 Fervor as a Bonus Action: gain +10 ft Speed and Advantage on your next weapon attack before end of this turn.",
      "level": 2,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2b091978365c740b": {
      "id": "2b091978365c740b",
      "name": "Preacher: Living Sermon",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.preacher.20.living_sermon",
      "status": "locked",
      "slug": "preacher-living-sermon",
      "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. Aura of Resolve grants immunity to Frightened and Charmed instead of +2. At start of an ally’s turn in the aura, if it has no Temporary HP it gains Temporary HP equal to CHA modifier + PB. Once per round you may use Intercession without spending Fervor (Reaction still required).",
      "level": 20,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.preacher",
      "category": "Subclass feature",
      "requirements": ""
    },
    "2c817720af955648": {
      "id": "2c817720af955648",
      "name": "Commander: Battle Orders",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.commander.3.battle_orders",
      "status": "locked",
      "slug": "commander-battle-orders",
      "description": "You have PB uses per Long Rest. As a Bonus Action choose one ally within 30 ft that can see or hear you and issue one order: Advance (ally may use Reaction to move up to half Speed without provoking); Focus Fire (ally gains Advantage on its next attack before start of your next turn); Hold Fast (ally gains Temporary HP equal to CON modifier + PB).",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.commander",
      "category": "Subclass feature",
      "requirements": ""
    },
    "2d34a82ca53f4f7a": {
      "id": "2d34a82ca53f4f7a",
      "name": "Enhanced Mobility",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.5.enhanced_mobility",
      "status": "needs_review",
      "slug": "enhanced-mobility",
      "description": "Fast Movement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 5,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2df16e1b4df0f54d": {
      "id": "2df16e1b4df0f54d",
      "name": "Bulwark: Interpose",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.bulwark.6.interpose",
      "status": "locked",
      "slug": "bulwark-interpose",
      "description": "When an ally within 5 ft is hit by an attack, use Reaction to move into an adjacent legal space and become the target of the attack instead, using the original attack roll against your AC. If you cannot legally occupy a suitable space, you may instead reduce the ally’s damage by 1d10 + CON modifier + PB. Uses = PB per Long Rest.",
      "level": 6,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.bulwark",
      "category": "Subclass feature",
      "requirements": ""
    },
    "2ebab3c8b88d0690": {
      "id": "2ebab3c8b88d0690",
      "name": "4th-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.7.4th_level_tech_abilities",
      "status": "locked",
      "slug": "4th-level-tech-abilities",
      "description": "Unlock level-4 Tech Abilities.",
      "level": 7,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "2f54f3c86a6ff399": {
      "id": "2f54f3c86a6ff399",
      "name": "Pyromancer: Living Flame",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.pyromancer.14.living_flame",
      "status": "locked",
      "slug": "pyromancer-living-flame",
      "description": "Your Psychic Powers ignore Resistance to Fire damage. Your Fire Resistance becomes Immunity to Fire. When you take Fire damage that is reduced to 0 by this immunity, you may move up to 10 ft without provoking Opportunity Attacks.",
      "level": 14,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.pyromancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "2f62e8e14299c3f5": {
      "id": "2f62e8e14299c3f5",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.10.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 10,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "311595c718c86ba0": {
      "id": "311595c718c86ba0",
      "name": "Indomitable",
      "kind": "Item",
      "campaignId": "progression.class.soldier.9.indomitable",
      "status": "needs_review",
      "slug": "indomitable",
      "description": "Indomitable is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 9,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "322d61de247ebb29": {
      "id": "322d61de247ebb29",
      "name": "Telekinetic: Telekinetic Discipline",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.telekinetic.3.telekinetic_discipline",
      "status": "locked",
      "slug": "telekinetic-telekinetic-discipline",
      "description": "Your Telekinetic-exclusive Psychic Powers are always known. Kinetic Impulse: once per turn when a creature is hit by your Psychic Power attack or fails a save against your Psychic Power, move a Large-or-smaller target 5 ft toward or away from you. Willing creatures can always be moved.",
      "level": 3,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.telekinetic",
      "category": "Subclass feature",
      "requirements": ""
    },
    "332e960e9026c186": {
      "id": "332e960e9026c186",
      "name": "Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.1.psychic_powers",
      "status": "locked",
      "slug": "psychic-powers",
      "description": "CHA learned caster. Cantrips/Powers Known follow the 2024 Sorcerer prepared-spell count as a learned list: 4 cantrips and 2 leveled powers at this level. Normal full-caster spell-level access; safe slot counts are one fewer than normal per available level, minimum 1.",
      "level": 1,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "333f68c063caf493": {
      "id": "333f68c063caf493",
      "name": "Assault: Shock Descent",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.assault.10.shock_descent",
      "status": "locked",
      "slug": "assault-shock-descent",
      "description": "Once per turn when you end Jump Pack Assault on the ground, choose creatures within 10 ft up to PB. Each makes STR save (DC 8 + PB + STR); on failure it takes 2d6 Bludgeoning and falls Prone, on success half damage and remains standing.",
      "level": 10,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.assault",
      "category": "Subclass feature",
      "requirements": ""
    },
    "3452ac84126e8fa3": {
      "id": "3452ac84126e8fa3",
      "name": "Tactical Calculation",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.7.tactical_calculation",
      "status": "locked",
      "slug": "tactical-calculation",
      "description": "When you or a creature you can see within 30 ft makes an ability check or saving throw, use your Reaction to add your INT modifier to the roll after seeing the d20 but before the outcome is resolved. Uses = INT modifier (minimum 1) per Long Rest.",
      "level": 7,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "3631dd1c35667aa6": {
      "id": "3631dd1c35667aa6",
      "name": "Blade Master: Killing Stroke",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.blade_master.13.killing_stroke",
      "status": "locked",
      "slug": "blade-master-killing-stroke",
      "description": "When you score a Critical Hit with a melee weapon, add two additional weapon damage dice to the critical hit, before Sneak Attack and other bonus dice.",
      "level": 13,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.blade_master",
      "category": "Subclass feature",
      "requirements": ""
    },
    "36c768f3194fd2c2": {
      "id": "36c768f3194fd2c2",
      "name": "Devastating Strike II",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.13.devastating_assault_ii",
      "status": "needs_review",
      "slug": "devastating-strike-ii",
      "description": "Gain Staggering (target has Disadvantage on next save and cannot make Opportunity Attacks until start next turn) and Sundering (next attack by another creature before your next turn gains +5) options. Damage remains +1d10.",
      "level": 13,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "38f9e0ee56a1e754": {
      "id": "38f9e0ee56a1e754",
      "name": "Power Armor Upgrade II",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.7.power_armor_upgrade_ii",
      "status": "locked",
      "slug": "power-armor-upgrade-ii",
      "description": "Maximum active Power Armor Upgrades becomes 2. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
      "level": 7,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "3940bcdde599d37b": {
      "id": "3940bcdde599d37b",
      "name": "Evasive Reflexes",
      "kind": "Item",
      "campaignId": "progression.class.operative.5.evasive_reflexes",
      "status": "needs_review",
      "slug": "evasive-reflexes",
      "description": "Uncanny Dodge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 5,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "395964cf9e1f3264": {
      "id": "395964cf9e1f3264",
      "name": "Hazardous Manifestation",
      "kind": "Item",
      "campaignId": "progression.class.psyker.2.hazardous_manifestation",
      "status": "locked",
      "slug": "hazardous-manifestation",
      "description": "When casting an eligible leveled Psychic Power with a slot, resolve it at +1 effective spell level without spending a higher slot, maximum effective level 9. Can stack with normal upcasting, once per casting. Not usable on cantrips or Reaction powers. Adds +5% Warp Exposure, then resolves Warp Control/Possession Crisis as appropriate.",
      "level": 2,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "3a9131c5f7f4aa2a": {
      "id": "3a9131c5f7f4aa2a",
      "name": "Indomitable III",
      "kind": "Item",
      "campaignId": "progression.class.soldier.17.indomitable_iii",
      "status": "needs_review",
      "slug": "indomitable-iii",
      "description": "Indomitable (3) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 17,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "3b042147e6806e71": {
      "id": "3b042147e6806e71",
      "name": "Blade Master: Precision Blade",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.blade_master.3.precision_blade",
      "status": "locked",
      "slug": "blade-master-precision-blade",
      "description": "You may deal Sneak Attack with any proficient melee weapon that lacks the Heavy property; it need not have Finesse.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.blade_master",
      "category": "Subclass feature",
      "requirements": ""
    },
    "3c8976df2f255422": {
      "id": "3c8976df2f255422",
      "name": "7th-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.13.7th_level_invocations",
      "status": "locked",
      "slug": "7th-level-invocations",
      "description": "Unlock level-7 Invocations.",
      "level": 13,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "3eebe909e28ef4a7": {
      "id": "3eebe909e28ef4a7",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.zealot.7.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain your Zealot Creed feature.",
      "level": 7,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "40ffd821518a6b89": {
      "id": "40ffd821518a6b89",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.5.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain your specialization feature.",
      "level": 5,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "419337f3f51aac47": {
      "id": "419337f3f51aac47",
      "name": "Mechanist: Apex Warform",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.mechanist.15.apex_warform",
      "status": "locked",
      "slug": "mechanist-apex-warform",
      "description": "Once per Long Rest, when you command your Primary Construct, empower it for 1 minute: it gains Temporary HP equal to twice your Tech-Adept level, +2 AC, and when commanded to Attack it makes two attacks instead of one.",
      "level": 15,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.mechanist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "42cb56eadc3bf0d5": {
      "id": "42cb56eadc3bf0d5",
      "name": "Purifier: Purging Brand",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.purifier.3.purging_brand",
      "status": "locked",
      "slug": "purifier-purging-brand",
      "description": "When you damage a creature with a weapon attack or Invocation, spend 1 Fervor to brand it until end of your next turn. A branded target cannot regain HP and has Disadvantage on the next saving throw it makes against one of your Purifier Invocations during the brand.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.purifier",
      "category": "Subclass feature",
      "requirements": ""
    },
    "433f0703b4193dd1": {
      "id": "433f0703b4193dd1",
      "name": "8th-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.15.8th_level_invocations",
      "status": "locked",
      "slug": "8th-level-invocations",
      "description": "Unlock level-8 Invocations.",
      "level": 15,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "43f6c7ed8f6942bd": {
      "id": "43f6c7ed8f6942bd",
      "name": "Crusader: Aura of Fortitude",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.crusader.7.aura_of_fortitude",
      "status": "locked",
      "slug": "crusader-aura-of-fortitude",
      "description": "While conscious, allies within 10 ft that are below half their maximum HP gain +1 AC.",
      "level": 7,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.crusader",
      "category": "Subclass feature",
      "requirements": ""
    },
    "457cbcd1465397db": {
      "id": "457cbcd1465397db",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.zealot.15.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain your Zealot Creed feature.",
      "level": 15,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "459083b3771844d6": {
      "id": "459083b3771844d6",
      "name": "Technical Expertise",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.6.technical_expertise",
      "status": "locked",
      "slug": "technical-expertise",
      "description": "Double PB for ability checks made with tools in which you are proficient.",
      "level": 6,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4769c718ffc4f6e8": {
      "id": "4769c718ffc4f6e8",
      "name": "Transhuman Training",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.3.transhuman_training",
      "status": "needs_review",
      "slug": "transhuman-training",
      "description": "Primal Knowledge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4857f90b396a151c": {
      "id": "4857f90b396a151c",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.soldier.4.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 4,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4a6c5fe3e6ea29bf": {
      "id": "4a6c5fe3e6ea29bf",
      "name": "Gunslinger: Quick Draw",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.gunslinger.3.quick_draw",
      "status": "locked",
      "slug": "gunslinger-quick-draw",
      "description": "Whenever you could draw or stow one sidearm, you may draw or stow two. Attacks with pistols do not gain Disadvantage solely because a hostile creature is within 5 ft of you.",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.gunslinger",
      "category": "Subclass feature",
      "requirements": ""
    },
    "4be9ea37dfe063d8": {
      "id": "4be9ea37dfe063d8",
      "name": "3rd-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.5.3rd_level_invocations",
      "status": "locked",
      "slug": "3rd-level-invocations",
      "description": "Unlock level-3 Invocations.",
      "level": 5,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4c3d4c810522a1ad": {
      "id": "4c3d4c810522a1ad",
      "name": "Evasion",
      "kind": "Item",
      "campaignId": "progression.class.operative.7.evasion",
      "status": "needs_review",
      "slug": "evasion",
      "description": "Evasion is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 7,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4d3cad89018f7286": {
      "id": "4d3cad89018f7286",
      "name": "Extra Attack II",
      "kind": "Item",
      "campaignId": "progression.class.soldier.11.extra_attack_ii",
      "status": "locked",
      "slug": "extra-attack-ii",
      "description": "Three attacks.",
      "level": 11,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4ddb371637d4ccd2": {
      "id": "4ddb371637d4ccd2",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.psyker.4.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 4,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4de166f52983461c": {
      "id": "4de166f52983461c",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.12.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 12,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4e614f81e2cadd61": {
      "id": "4e614f81e2cadd61",
      "name": "Crusader: Improved Aura of Fortitude",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.crusader.15.improved_aura_of_fortitude",
      "status": "locked",
      "slug": "crusader-improved-aura-of-fortitude",
      "description": "Aura of Fortitude retains +1 AC below half HP and additionally grants Advantage on Death Saving Throws to allies within the aura.",
      "level": 15,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.crusader",
      "category": "Subclass feature",
      "requirements": ""
    },
    "4f4c05feba72ea28": {
      "id": "4f4c05feba72ea28",
      "name": "Weapon Mastery",
      "kind": "Item",
      "campaignId": "progression.class.soldier.1.weapon_mastery",
      "status": "locked",
      "slug": "weapon-mastery",
      "description": "Use native Weapon Mastery infrastructure.",
      "level": 1,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4f51060a82f9968f": {
      "id": "4f51060a82f9968f",
      "name": "Shock Trooper: Breach and Clear",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.shock_trooper.3.breach_and_clear",
      "status": "locked",
      "slug": "shock-trooper-breach-and-clear",
      "description": "Once on each of your turns, after moving at least 10 ft toward a creature, your first weapon hit against it deals +1d6 weapon damage. If the target is Large or smaller, it makes a STR save (DC 8 + PB + STR) or falls Prone.",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.shock_trooper",
      "category": "Subclass feature",
      "requirements": ""
    },
    "4ff98927a58260a2": {
      "id": "4ff98927a58260a2",
      "name": "Weapon Mastery (4)",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.10.weapon_mastery_4",
      "status": "locked",
      "slug": "weapon-mastery-4",
      "description": "Increase mastered weapon choices to 4.",
      "level": 10,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "4ffc9a8fce1583f9": {
      "id": "4ffc9a8fce1583f9",
      "name": "Shock Trooper: Close-Quarters Brutality",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.shock_trooper.10.close_quarters_brutality",
      "status": "locked",
      "slug": "shock-trooper-close-quarters-brutality",
      "description": "Once per turn when you hit a creature within 10 ft, deal +1d8 weapon damage; this becomes +2d8 if the target is Prone, Grappled, or Restrained, or if an ally is within 5 ft of it and not Incapacitated.",
      "level": 10,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.shock_trooper",
      "category": "Subclass feature",
      "requirements": ""
    },
    "508ececf4e62d4d2": {
      "id": "508ececf4e62d4d2",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.zealot.20.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain your Zealot Creed feature.",
      "level": 20,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "51908f124a8c8645": {
      "id": "51908f124a8c8645",
      "name": "Technical Aptitude",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.1.technical_aptitude",
      "status": "locked",
      "slug": "technical-aptitude",
      "description": "Gain Tech/Tinker’s Tools proficiency (or another Artisan Tool if already proficient) and use Tech/Tinker’s Tools or a suitable technological device as the focus for Tech Abilities.",
      "level": 1,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "52585f0b321dc7ee": {
      "id": "52585f0b321dc7ee",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.operative.8.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 8,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "529cc56c5dcd7e3d": {
      "id": "529cc56c5dcd7e3d",
      "name": "Threat Awareness",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.2.threat_awareness",
      "status": "needs_review",
      "slug": "threat-awareness",
      "description": "Danger Sense is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 2,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "52c15298435bc24d": {
      "id": "52c15298435bc24d",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.operative.12.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 12,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "538ff77fd66203d6": {
      "id": "538ff77fd66203d6",
      "name": "Crusader: Unyielding Challenge",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.crusader.3.unyielding_challenge",
      "status": "locked",
      "slug": "crusader-unyielding-challenge",
      "description": "Spend 1 Fervor as a Bonus Action to mark one creature within 30 ft until end of your next turn. The first time during the mark that it attacks a creature other than you, that attack has Disadvantage.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.crusader",
      "category": "Subclass feature",
      "requirements": ""
    },
    "53c03dc7d9ae01f9": {
      "id": "53c03dc7d9ae01f9",
      "name": "Blade Master: Perfect Duelist",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.blade_master.17.perfect_duelist",
      "status": "locked",
      "slug": "blade-master-perfect-duelist",
      "description": "When you take the Attack action using a melee weapon, make one additional melee weapon attack as a Bonus Action. Riposte no longer has limited uses, and a Riposte that hits adds PB to its damage.",
      "level": 17,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.blade_master",
      "category": "Subclass feature",
      "requirements": ""
    },
    "54d32589ef474d19": {
      "id": "54d32589ef474d19",
      "name": "Tech Upgrades IV",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.14.tech_upgrades_iv",
      "status": "locked",
      "slug": "tech-upgrades-iv",
      "description": "Tech Upgrades known increases to 10; active capacity increases to 4.",
      "level": 14,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "54f1ea1189b3d787": {
      "id": "54f1ea1189b3d787",
      "name": "Extra Attack",
      "kind": "Item",
      "campaignId": "progression.class.soldier.5.extra_attack",
      "status": "locked",
      "slug": "extra-attack",
      "description": "Two attacks.",
      "level": 5,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "565160622977e4c4": {
      "id": "565160622977e4c4",
      "name": "Artillerist: Combined Arms",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.artillerist.7.combined_arms",
      "status": "locked",
      "slug": "artillerist-combined-arms",
      "description": "After you use your Action to activate an Ordnance cantrip, you may make one weapon attack as a Bonus Action.",
      "level": 7,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.artillerist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "56dd3c7e57f73656": {
      "id": "56dd3c7e57f73656",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.12.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 12,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "5900721caff86347": {
      "id": "5900721caff86347",
      "name": "Telekinetic: Kinetic Barrier",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.telekinetic.6.kinetic_barrier",
      "status": "locked",
      "slug": "telekinetic-kinetic-barrier",
      "description": "When you or an ally within 30 ft is hit by an attack, use your Reaction to grant +2 AC against that attack, potentially turning it into a miss. Uses = PB per Long Rest.",
      "level": 6,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.telekinetic",
      "category": "Subclass feature",
      "requirements": ""
    },
    "5c48152c2b6980ce": {
      "id": "5c48152c2b6980ce",
      "name": "Shock Trooper: Devastating Breach",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.shock_trooper.15.devastating_breach",
      "status": "locked",
      "slug": "shock-trooper-devastating-breach",
      "description": "Breach and Clear bonus becomes +3d6. On a failed Breach STR save, the target also moves up to 10 ft away. If it collides with a solid object it takes +2d6 Bludgeoning; if it collides with another creature, that creature makes a DEX save or takes 2d6 Bludgeoning and falls Prone.",
      "level": 15,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.shock_trooper",
      "category": "Subclass feature",
      "requirements": ""
    },
    "5c9d8d144f20ac75": {
      "id": "5c9d8d144f20ac75",
      "name": "Expertise II",
      "kind": "Item",
      "campaignId": "progression.class.operative.6.expertise_ii",
      "status": "needs_review",
      "slug": "expertise-ii",
      "description": "Expertise (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 6,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "5dee036b636b78ca": {
      "id": "5dee036b636b78ca",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.16.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 16,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "5f1caa2c4f0e8daf": {
      "id": "5f1caa2c4f0e8daf",
      "name": "Second Wind",
      "kind": "Item",
      "campaignId": "progression.class.soldier.1.second_wind",
      "status": "locked",
      "slug": "second-wind",
      "description": "Native Fighter-like recovery.",
      "level": 1,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "5f91506fa7c6957d": {
      "id": "5f91506fa7c6957d",
      "name": "Tech Upgrades III",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.10.tech_upgrades_iii",
      "status": "locked",
      "slug": "tech-upgrades-iii",
      "description": "Tech Upgrades known increases to 8; active capacity increases to 3.",
      "level": 10,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "601f5b074c3bf2f0": {
      "id": "601f5b074c3bf2f0",
      "name": "Transhuman Frame",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.1.transhuman_frame",
      "status": "locked",
      "slug": "transhuman-frame",
      "description": "Counts as one size larger for carrying capacity and push/drag/lift. Space Marine remains Medium.",
      "level": 1,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "620f25e2cf577946": {
      "id": "620f25e2cf577946",
      "name": "Blade Master: Riposte",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.blade_master.9.riposte",
      "status": "locked",
      "slug": "blade-master-riposte",
      "description": "When a creature within your melee reach misses you with a melee attack, use your Reaction to make one melee weapon attack against it. Uses = PB per Long Rest. This off-turn attack can qualify for Sneak Attack normally.",
      "level": 9,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.blade_master",
      "category": "Subclass feature",
      "requirements": ""
    },
    "625c0f411c1d0106": {
      "id": "625c0f411c1d0106",
      "name": "Warp Spider: Improved Warp Jump",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.warp_spider.7.improved_warp_jump",
      "status": "locked",
      "slug": "warp-spider-improved-warp-jump",
      "description": "Warp Jump range becomes 30 ft. When you finish a Short Rest, regain one expended Warp Jump use.",
      "level": 7,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.warp_spider",
      "category": "Subclass feature",
      "requirements": ""
    },
    "6444f707d725849a": {
      "id": "6444f707d725849a",
      "name": "Aggressive Assault",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.2.aggressive_assault",
      "status": "needs_review",
      "slug": "aggressive-assault",
      "description": "Architecture locked; exact formula/eligibility/balance remains delegated or Needs Review.",
      "level": 2,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "64ccafffdff60bed": {
      "id": "64ccafffdff60bed",
      "name": "Studied Attacks",
      "kind": "Item",
      "campaignId": "progression.class.soldier.13.studied_attacks",
      "status": "locked",
      "slug": "studied-attacks",
      "description": "Use native 2024 Fighter mechanic rather than custom Combat Veteran reroll pool.",
      "level": 13,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6588c249c457425e": {
      "id": "6588c249c457425e",
      "name": "Shock Advance",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.7.shock_advance",
      "status": "needs_review",
      "slug": "shock-advance",
      "description": "Instinctive Pounce is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 7,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "660777d45df79ab4": {
      "id": "660777d45df79ab4",
      "name": "Draw from the Warp",
      "kind": "Item",
      "campaignId": "progression.class.psyker.2.draw_from_the_warp",
      "status": "locked",
      "slug": "draw-from-the-warp",
      "description": "Bonus Action at any time. Declare an expended slot. Each Draw recovers PB slot levels toward that declared slot and adds 1d8+4% Warp Exposure; consecutive Draws may be required for a high-level slot, no partial recovery persists if the sequence stops, and excess final capacity is lost. Recoverable slot cap: up to 5th at L1–10, 6th at L11, 7th at L13, 8th at L15, 9th at L17. The slot is restored even if Warp Control fails; Perils are additional cost.",
      "level": 2,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "666b50ba4c88afc1": {
      "id": "666b50ba4c88afc1",
      "name": "Weapon Mastery",
      "kind": "Item",
      "campaignId": "progression.class.operative.1.weapon_mastery",
      "status": "needs_review",
      "slug": "weapon-mastery",
      "description": "Weapon Mastery is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 1,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6714878d98fe972a": {
      "id": "6714878d98fe972a",
      "name": "Expanded Attunement II",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.14.expanded_attunement_ii",
      "status": "locked",
      "slug": "expanded-attunement-ii",
      "description": "Maximum attuned items becomes 5.",
      "level": 14,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "677c7324b70bdfea": {
      "id": "677c7324b70bdfea",
      "name": "Tactical Master",
      "kind": "Item",
      "campaignId": "progression.class.soldier.9.tactical_master",
      "status": "locked",
      "slug": "tactical-master",
      "description": "Use native Push/Sap/Slow mastery substitution. This replaces custom Weapon Drill handling tree.",
      "level": 9,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "692199c2de912701": {
      "id": "692199c2de912701",
      "name": "Tactical Shift",
      "kind": "Item",
      "campaignId": "progression.class.soldier.5.tactical_shift",
      "status": "needs_review",
      "slug": "tactical-shift",
      "description": "Tactical Shift is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 5,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "69e105dd00d5f7de": {
      "id": "69e105dd00d5f7de",
      "name": "Target Acquisition",
      "kind": "Item",
      "campaignId": "progression.class.operative.3.target_acquisition",
      "status": "locked",
      "slug": "target-acquisition",
      "description": "Player-facing Target Acquisition; mechanically native 2024 Steady Aim.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6ab15b5588f13478": {
      "id": "6ab15b5588f13478",
      "name": "Heavy: Stabilized Platform",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.heavy.6.stabilized_platform",
      "status": "locked",
      "slug": "heavy-stabilized-platform",
      "description": "If you moved no more than half your Speed on your turn, attacks with your chosen Heavy weapon family ignore Half Cover and treat Three-Quarters Cover as Half Cover. You have Advantage on saves/checks against effects that would forcibly move you while you are wielding that weapon and in Combat State.",
      "level": 6,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.heavy",
      "category": "Subclass feature",
      "requirements": ""
    },
    "6ad1982596930e1c": {
      "id": "6ad1982596930e1c",
      "name": "Persistent Combat State",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.15.persistent_combat_state",
      "status": "needs_review",
      "slug": "persistent-combat-state",
      "description": "Persistent Rage is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 15,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6c9f62175232012e": {
      "id": "6c9f62175232012e",
      "name": "Tech Upgrades V",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.18.tech_upgrades_v",
      "status": "locked",
      "slug": "tech-upgrades-v",
      "description": "Tech Upgrades known increases to 12; active capacity remains 4.",
      "level": 18,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6cd87f8968182184": {
      "id": "6cd87f8968182184",
      "name": "6th-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.11.6th_level_psychic_powers",
      "status": "locked",
      "slug": "6th-level-psychic-powers",
      "description": "Unlock level-6 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 11,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6ddb4a0120a9b8cf": {
      "id": "6ddb4a0120a9b8cf",
      "name": "Power Armor Upgrade IV",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.17.power_armor_upgrade_iv",
      "status": "locked",
      "slug": "power-armor-upgrade-iv",
      "description": "Maximum active Power Armor Upgrades becomes 4. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
      "level": 17,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "6e28087ad1f46c86": {
      "id": "6e28087ad1f46c86",
      "name": "3rd-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.5.3rd_level_psychic_powers",
      "status": "locked",
      "slug": "3rd-level-psychic-powers",
      "description": "Unlock level-3 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 5,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "700968372004793e": {
      "id": "700968372004793e",
      "name": "2nd-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.3.2nd_level_psychic_powers",
      "status": "locked",
      "slug": "2nd-level-psychic-powers",
      "description": "Unlock level-2 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 3,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "70613c5d1a852e5f": {
      "id": "70613c5d1a852e5f",
      "name": "Assault: Meteoric Charge",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.assault.3.meteoric_charge",
      "status": "locked",
      "slug": "assault-meteoric-charge",
      "description": "Once per turn, if you moved at least 20 ft during the turn and at least 10 ft of that movement was airborne from Jump Pack Assault, your first melee weapon hit deals +1d6 weapon damage; Large-or-smaller target makes STR save (DC 8 + PB + STR) or falls Prone.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.assault",
      "category": "Subclass feature",
      "requirements": ""
    },
    "717239b11b2cd6fe": {
      "id": "717239b11b2cd6fe",
      "name": "Artillerist: Fire-Control Safety",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.artillerist.3.fire_control_safety",
      "status": "locked",
      "slug": "artillerist-fire-control-safety",
      "description": "When an Ordnance effect you activate forces creatures in an area to make a saving throw, choose a number of creatures you can see up to PB. Chosen creatures have Advantage on that save and take no damage from the Ordnance if they succeed.",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.artillerist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "73a2e1b4fa49b86a": {
      "id": "73a2e1b4fa49b86a",
      "name": "Biomancer: Biomantic Discipline",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.biomancer.3.biomantic_discipline",
      "status": "locked",
      "slug": "biomancer-biomantic-discipline",
      "description": "Your Biomancer-exclusive Psychic Powers are always known. Fleshcraft: once per turn when one of your Psychic Powers restores HP to a creature, it regains additional HP equal to your CHA modifier. Gain proficiency in Medicine, or Expertise if already proficient.",
      "level": 3,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.biomancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "73bb08dae311c38d": {
      "id": "73bb08dae311c38d",
      "name": "Stored Protocol",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.11.stored_protocol",
      "status": "locked",
      "slug": "stored-protocol",
      "description": "After a Long Rest, store one prepared 1st-level Tech Ability with an Action or Bonus Action casting time in a Tiny object/device. A creature holding it may activate the stored ability using its normal activation; the device uses your Tech Ability attack/DC and has PB uses, restored when you reconfigure it after a Long Rest. Only one Stored Protocol device may exist at a time.",
      "level": 11,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "78019d2098f71ce8": {
      "id": "78019d2098f71ce8",
      "name": "2nd-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.3.2nd_level_invocations",
      "status": "locked",
      "slug": "2nd-level-invocations",
      "description": "Unlock level-2 Invocations.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "791ed3e5c6d2d11a": {
      "id": "791ed3e5c6d2d11a",
      "name": "Advanced Exploits",
      "kind": "Item",
      "campaignId": "progression.class.operative.14.advanced_exploits",
      "status": "needs_review",
      "slug": "advanced-exploits",
      "description": "Devious Strikes is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 14,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "792729df48cacf49": {
      "id": "792729df48cacf49",
      "name": "3rd-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.5.3rd_level_tech_abilities",
      "status": "locked",
      "slug": "3rd-level-tech-abilities",
      "description": "Unlock level-3 Tech Abilities.",
      "level": 5,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "7936e805d6fddffa": {
      "id": "7936e805d6fddffa",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.operative.16.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 16,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "7a61239fad7695a4": {
      "id": "7a61239fad7695a4",
      "name": "Mental Bastion",
      "kind": "Item",
      "campaignId": "progression.class.psyker.10.mental_bastion",
      "status": "locked",
      "slug": "mental-bastion",
      "description": "Gain Resistance to Psychic damage and Advantage on saves to avoid or end Charmed. This never reduces Warp Exposure and does not cancel self-generated Perils.",
      "level": 10,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "7a9d8fe9dc5f43b1": {
      "id": "7a9d8fe9dc5f43b1",
      "name": "Warp Spider: Warp Jump Generator",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.warp_spider.3.warp_jump_generator",
      "status": "locked",
      "slug": "warp-spider-warp-jump-generator",
      "description": "As a Bonus Action, teleport up to 20 ft to an unoccupied space you can see. You may pass through creatures and solid obstacles but must end in open space. Uses = PB per Long Rest.",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.warp_spider",
      "category": "Subclass feature",
      "requirements": ""
    },
    "7ae517d0f86ff144": {
      "id": "7ae517d0f86ff144",
      "name": "Shock Trooper: Unstoppable Assault",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.shock_trooper.18.unstoppable_assault",
      "status": "locked",
      "slug": "shock-trooper-unstoppable-assault",
      "description": "When you use Action Surge, until end of turn your first hit against each creature deals +2d8 weapon damage; Breach and Clear no longer requires the 10-ft approach for its first trigger; after each weapon attack you may move 10 ft without provoking from that attack’s target. Each creature you reduce to 0 HP also empowers your next hit that turn for +2d8, once per defeated creature.",
      "level": 18,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.shock_trooper",
      "category": "Subclass feature",
      "requirements": ""
    },
    "7b71e64753d0e172": {
      "id": "7b71e64753d0e172",
      "name": "Heavy: Fire Discipline",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.heavy.10.fire_discipline",
      "status": "locked",
      "slug": "heavy-fire-discipline",
      "description": "Once on each of your turns when you take the Attack action using your chosen Heavy weapon family, you may replace one attack with that weapon’s Suppressive Fire Activity if it normally requires an Action. Resolve its normal ammunition cost and save.",
      "level": 10,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.heavy",
      "category": "Subclass feature",
      "requirements": ""
    },
    "7c38d1e9ac87b43f": {
      "id": "7c38d1e9ac87b43f",
      "name": "5th-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.9.5th_level_tech_abilities",
      "status": "locked",
      "slug": "5th-level-tech-abilities",
      "description": "Unlock level-5 Tech Abilities.",
      "level": 9,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "7ea4858878aaa51d": {
      "id": "7ea4858878aaa51d",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.soldier.14.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 14,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8049b24592ff129f": {
      "id": "8049b24592ff129f",
      "name": "Action Surge",
      "kind": "Item",
      "campaignId": "progression.class.soldier.2.action_surge",
      "status": "needs_review",
      "slug": "action-surge",
      "description": "Action Surge is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 2,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8056d5b4af08f66d": {
      "id": "8056d5b4af08f66d",
      "name": "Combat State Damage +3",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.9.combat_state_damage_+3",
      "status": "needs_review",
      "slug": "combat-state-damage-3",
      "description": "Rage Damage +3 is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 9,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8092e4437b5a6b39": {
      "id": "8092e4437b5a6b39",
      "name": "Pyromancer: Conflagration Incarnate",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.pyromancer.18.conflagration_incarnate",
      "status": "locked",
      "slug": "pyromancer-conflagration-incarnate",
      "description": "As a Bonus Action once per Long Rest, become a living psychic inferno for 1 minute. Hostile creatures that enter a 10-ft aura around you for the first time on a turn or start there make a DEX save vs your Psychic Power DC, taking 2d8 Fire or Psychic damage (your choice) on failure, half on success. Once per turn when you deal Fire/Psychic damage with a Psychic Power, add +2d8 to one damaged target.",
      "level": 18,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.pyromancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "816c1a3231bd0ef4": {
      "id": "816c1a3231bd0ef4",
      "name": "Combat State Damage +4",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.16.combat_state_damage_+4",
      "status": "needs_review",
      "slug": "combat-state-damage-4",
      "description": "Rage Damage +4 is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 16,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8346c83a560f0304": {
      "id": "8346c83a560f0304",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.15.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain your specialization feature.",
      "level": 15,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "834eb2fdb476e998": {
      "id": "834eb2fdb476e998",
      "name": "Epic Boon",
      "kind": "Item",
      "campaignId": "progression.class.psyker.19.epic_boon",
      "status": "locked",
      "slug": "epic-boon",
      "description": "Choose an eligible Epic Boon; campaign aliases remain display-only.",
      "level": 19,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "83e6a8d68d3ca23e": {
      "id": "83e6a8d68d3ca23e",
      "name": "Operative Specialization",
      "kind": "Item",
      "campaignId": "progression.class.operative.3.operative_specialization",
      "status": "needs_review",
      "slug": "operative-specialization",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8448fcc34ad7651a": {
      "id": "8448fcc34ad7651a",
      "name": "Professional Expertise",
      "kind": "Item",
      "campaignId": "progression.class.operative.7.professional_expertise",
      "status": "needs_review",
      "slug": "professional-expertise",
      "description": "Reliable Talent is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 7,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "86955c1331cfb563": {
      "id": "86955c1331cfb563",
      "name": "Epic Boon",
      "kind": "Item",
      "campaignId": "progression.class.soldier.19.epic_boon",
      "status": "needs_review",
      "slug": "epic-boon",
      "description": "Exact boon catalog delegated/recovery required.",
      "level": 19,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "86b204292203e78e": {
      "id": "86b204292203e78e",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.16.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 16,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "883544a5155e8787": {
      "id": "883544a5155e8787",
      "name": "Commander: Veteran Command",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.commander.10.veteran_command",
      "status": "locked",
      "slug": "commander-veteran-command",
      "description": "When you issue a Battle Order, you may target two different allies with the same order by spending only one use. When you finish a Short Rest, regain one expended Battle Order use.",
      "level": 10,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.commander",
      "category": "Subclass feature",
      "requirements": ""
    },
    "889b031d7e6de8a8": {
      "id": "889b031d7e6de8a8",
      "name": "Crusader: Saint of the Unbroken Line",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.crusader.20.saint_of_the_unbroken_line",
      "status": "locked",
      "slug": "crusader-saint-of-the-unbroken-line",
      "description": "As a Bonus Action once per Long Rest, enter a 1-minute transformation. Gain Resistance to Bludgeoning, Piercing, and Slashing damage; Aura of Fortitude grants its +1 AC regardless of current HP; once per turn when you hit with a weapon attack deal +2d8 weapon damage; the first creature you hit on each of your turns becomes your Unyielding Challenge target until start of your next turn without Fervor.",
      "level": 20,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.crusader",
      "category": "Subclass feature",
      "requirements": ""
    },
    "88ae31d9ae0a4ebb": {
      "id": "88ae31d9ae0a4ebb",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.psyker.16.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 16,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8a15ec21ae95e81d": {
      "id": "8a15ec21ae95e81d",
      "name": "Combat Reflexes",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.7.combat_reflexes",
      "status": "needs_review",
      "slug": "combat-reflexes",
      "description": "Feral Instinct is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 7,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8c2ad65902ffd761": {
      "id": "8c2ad65902ffd761",
      "name": "Biomancer: Master Biomancy",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.biomancer.14.master_biomancy",
      "status": "locked",
      "slug": "biomancer-master-biomancy",
      "description": "Gain Resistance to Poison and Necrotic damage. When a Psychic Power restores HP to a creature, you may also end Poisoned on that creature; uses equal PB per Long Rest.",
      "level": 14,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.biomancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "8c69083bfd91c9de": {
      "id": "8c69083bfd91c9de",
      "name": "Preacher: Intercession",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.preacher.3.intercession",
      "status": "locked",
      "slug": "preacher-intercession",
      "description": "When an ally within 30 ft takes damage, you may use Shield of Conviction on that ally instead of yourself, spending Fervor and your Reaction normally.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.preacher",
      "category": "Subclass feature",
      "requirements": ""
    },
    "8c6b082013756f36": {
      "id": "8c6b082013756f36",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.6.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 6,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8d03f4659a9b18a6": {
      "id": "8d03f4659a9b18a6",
      "name": "2nd-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.3.2nd_level_tech_abilities",
      "status": "locked",
      "slug": "2nd-level-tech-abilities",
      "description": "Unlock level-2 Tech Abilities.",
      "level": 3,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "8ecba81fd2ed5bc1": {
      "id": "8ecba81fd2ed5bc1",
      "name": "Assassin: Execution",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.assassin.13.execution",
      "status": "locked",
      "slug": "assassin-execution",
      "description": "Once per turn when you deal Sneak Attack to your Marked Prey while it is at or below half maximum HP, deal +3d6 damage. If this reduces it to 0 HP, mark another visible creature immediately without a Bonus Action or additional Marked Prey use.",
      "level": 13,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.assassin",
      "category": "Subclass feature",
      "requirements": ""
    },
    "8f909f47e2eccada": {
      "id": "8f909f47e2eccada",
      "name": "Extra Attack III",
      "kind": "Item",
      "campaignId": "progression.class.soldier.20.extra_attack_iii",
      "status": "locked",
      "slug": "extra-attack-iii",
      "description": "Four attacks.",
      "level": 20,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "90528986cf5aae2c": {
      "id": "90528986cf5aae2c",
      "name": "Assault: Aerial Predator",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.assault.6.aerial_predator",
      "status": "locked",
      "slug": "assault-aerial-predator",
      "description": "Jump Pack Assault range becomes Speed + 10 ft and you regain one expended use on a Short Rest. Falling damage you take is reduced by five times your Space Marine level while your jump pack functions.",
      "level": 6,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.assault",
      "category": "Subclass feature",
      "requirements": ""
    },
    "911d478d396e9d12": {
      "id": "911d478d396e9d12",
      "name": "Combat State",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.1.combat_state",
      "status": "needs_review",
      "slug": "combat-state",
      "description": "Architecture locked; exact formula/eligibility/balance remains delegated or Needs Review.",
      "level": 1,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "921346feeb7d89b5": {
      "id": "921346feeb7d89b5",
      "name": "Chirurgeon: Battlefield Medicae",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.chirurgeon.3.battlefield_medicae",
      "status": "locked",
      "slug": "chirurgeon-battlefield-medicae",
      "description": "Gain Medicine proficiency or Expertise if already proficient. You may stabilize a creature with a Medicae Kit as a Bonus Action. Once per turn when a Tech Ability restores HP to a creature, add your INT modifier to that healing.",
      "level": 3,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.chirurgeon",
      "category": "Subclass feature",
      "requirements": ""
    },
    "93b10c198fe7f015": {
      "id": "93b10c198fe7f015",
      "name": "8th-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.15.8th_level_psychic_powers",
      "status": "locked",
      "slug": "8th-level-psychic-powers",
      "description": "Unlock level-8 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 15,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "955bba9aa98235fb": {
      "id": "955bba9aa98235fb",
      "name": "Soldier Specialization",
      "kind": "Item",
      "campaignId": "progression.class.soldier.3.soldier_specialization",
      "status": "needs_review",
      "slug": "soldier-specialization",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "974666be78f8a511": {
      "id": "974666be78f8a511",
      "name": "Assassin: Predator's Tools",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.assassin.9.predator_s_tools",
      "status": "locked",
      "slug": "assassin-predator-s-tools",
      "description": "Relentless Pursuit: when your Marked Prey voluntarily moves away, use your Reaction to move up to half Speed toward it without provoking from that creature. Poison Expertise: gain Poisoner’s Kit proficiency (Expertise if already proficient), and applying a poison to a weapon is a Bonus Action.",
      "level": 9,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.assassin",
      "category": "Subclass feature",
      "requirements": ""
    },
    "9788f288e103a228": {
      "id": "9788f288e103a228",
      "name": "Tech Upgrades",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.2.tech_upgrades",
      "status": "locked",
      "slug": "tech-upgrades",
      "description": "Learn 4 Tech Upgrades and maintain 1 active. They are class-granted enhancements applied to compatible existing equipment; they have no rarity and never create/replicate inventory equipment. Reassign active upgrades after a Long Rest.",
      "level": 2,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "991e32261317026a": {
      "id": "991e32261317026a",
      "name": "Weapon Mastery (2)",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.1.weapon_mastery",
      "status": "locked",
      "slug": "weapon-mastery-2",
      "description": "Two mastered weapon choices at class entry.",
      "level": 1,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "99d624f01d460d95": {
      "id": "99d624f01d460d95",
      "name": "Energy Savant: Reactive Field",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.energy_savant.9.reactive_field",
      "status": "locked",
      "slug": "energy-savant-reactive-field",
      "description": "When you take Acid, Cold, Fire, Force, Lightning, or Thunder damage, use your Reaction to gain Resistance to the triggering damage instance and until start of your next turn. Uses = PB per Long Rest.",
      "level": 9,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.energy_savant",
      "category": "Subclass feature",
      "requirements": ""
    },
    "9ab07a2ab7266039": {
      "id": "9ab07a2ab7266039",
      "name": "Chirurgeon: Combat Stimulants",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.chirurgeon.5.combat_stimulants",
      "status": "locked",
      "slug": "chirurgeon-combat-stimulants",
      "description": "When a level 1+ Tech Ability restores HP to a creature, that creature may use its Reaction to either stand from Prone without spending movement or move up to 10 ft without provoking Opportunity Attacks.",
      "level": 5,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.chirurgeon",
      "category": "Subclass feature",
      "requirements": ""
    },
    "9ae76014c8e92d93": {
      "id": "9ae76014c8e92d93",
      "name": "Warp Spider: Flickerjump",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.warp_spider.10.flickerjump",
      "status": "locked",
      "slug": "warp-spider-flickerjump",
      "description": "When an attack hits you, use your Reaction to teleport up to 15 ft and reduce the triggering damage by 1d8 + PB. Uses = PB per Long Rest.",
      "level": 10,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.warp_spider",
      "category": "Subclass feature",
      "requirements": ""
    },
    "9d22c84e7a1e1e5a": {
      "id": "9d22c84e7a1e1e5a",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.8.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 8,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "9da983772a305b2b": {
      "id": "9da983772a305b2b",
      "name": "Gunslinger: Guns Akimbo",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.gunslinger.7.guns_akimbo",
      "status": "locked",
      "slug": "gunslinger-guns-akimbo",
      "description": "While wielding two pistols, after you take the Attack action and make at least one pistol attack, you may make one attack with the other pistol as a Bonus Action and add the normal ability modifier to damage.",
      "level": 7,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.gunslinger",
      "category": "Subclass feature",
      "requirements": ""
    },
    "9e0cc5133b892f3a": {
      "id": "9e0cc5133b892f3a",
      "name": "Sense the Unclean",
      "kind": "Item",
      "campaignId": "progression.class.zealot.1.sense_the_unclean",
      "status": "locked",
      "slug": "sense-the-unclean",
      "description": "As an Action, sense explicitly tagged Daemonic, Warp-corrupted, possessed, strongly sanctified/profane, or equivalent supernatural presences within 60 ft until end of your next turn; total cover blocks exact location. Uses = CHA modifier (minimum 1) per Long Rest. This does not define D&D creature types; taxonomy is maintained separately.",
      "level": 1,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "9e42a73a136a1eb4": {
      "id": "9e42a73a136a1eb4",
      "name": "Evasive Movement",
      "kind": "Item",
      "campaignId": "progression.class.operative.2.evasive_movement",
      "status": "needs_review",
      "slug": "evasive-movement",
      "description": "Cunning Action is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 2,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "9ed661069ed947cc": {
      "id": "9ed661069ed947cc",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.psyker.6.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain the feature for your Psyker Discipline.",
      "level": 6,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "a16a0c2cd95e4bf2": {
      "id": "a16a0c2cd95e4bf2",
      "name": "Tactical Mind",
      "kind": "Item",
      "campaignId": "progression.class.soldier.2.tactical_mind",
      "status": "locked",
      "slug": "tactical-mind",
      "description": "Use native 2024 Fighter mechanic; Warhammer rename optional.",
      "level": 2,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "a1fcf6be0699ae3d": {
      "id": "a1fcf6be0699ae3d",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.soldier.7.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 7,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "a2dfc83180bcecb9": {
      "id": "a2dfc83180bcecb9",
      "name": "Mechanist: Primary Construct",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.mechanist.3.primary_construct",
      "status": "locked",
      "slug": "mechanist-primary-construct",
      "description": "Build one permanent Steel Defender-style construct. Medium Construct; AC 15; HP = 5 + five times Tech-Adept level; Speed 40 ft. Choose Assault frame (melee 5 ft) or Support frame (ranged 60 ft) after a Long Rest. Its attack uses your Tech Ability attack modifier and deals 1d8 + PB damage. It acts after you; unless commanded with your Bonus Action it Dodges. It can use Deflect as a Reaction to impose Disadvantage on one attack against a creature within 5 ft of it.",
      "level": 3,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.mechanist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "a3b99b736cc6ad44": {
      "id": "a3b99b736cc6ad44",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.soldier.15.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 15,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "a8e74c927281202e": {
      "id": "a8e74c927281202e",
      "name": "Crusader: Unstoppable Charge",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.crusader.3.unstoppable_charge",
      "status": "locked",
      "slug": "crusader-unstoppable-charge",
      "description": "When you use Zealous Advance, your movement does not provoke Opportunity Attacks from the current target of Unyielding Challenge.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.crusader",
      "category": "Subclass feature",
      "requirements": ""
    },
    "aa02300a2dedce3b": {
      "id": "aa02300a2dedce3b",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.zealot.4.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 4,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "aab0232da987c2b9": {
      "id": "aab0232da987c2b9",
      "name": "Telekinetic: Master of Motion",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.telekinetic.14.master_of_motion",
      "status": "locked",
      "slug": "telekinetic-master-of-motion",
      "description": "Kinetic Impulse moves a target 10 ft and can affect Huge creatures. While conscious, you gain a 30-ft Fly Speed with Hover through sustained telekinetic lift.",
      "level": 14,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.telekinetic",
      "category": "Subclass feature",
      "requirements": ""
    },
    "aafabcb3525ffd20": {
      "id": "aafabcb3525ffd20",
      "name": "Energy Savant: Conversion Mastery",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.energy_savant.15.conversion_mastery",
      "status": "locked",
      "slug": "energy-savant-conversion-mastery",
      "description": "Gain permanent Resistance to Fire, Force, and Lightning damage. When you use Reactive Field, your next Tech Ability or Tech-Integrated weapon attack that deals damage before end of your next turn deals +2d8 damage to one target; use the triggering damage type if that ability/weapon can deal it, otherwise Force.",
      "level": 15,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.energy_savant",
      "category": "Subclass feature",
      "requirements": ""
    },
    "ab8c62c52fcc565d": {
      "id": "ab8c62c52fcc565d",
      "name": "Extra Attack",
      "kind": "Item",
      "campaignId": "progression.class.zealot.5.extra_attack",
      "status": "locked",
      "slug": "extra-attack",
      "description": "Attack twice, instead of once, whenever you take the Attack action.",
      "level": 5,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "ad8159f9867427ea": {
      "id": "ad8159f9867427ea",
      "name": "Commander: Lead from the Front",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.commander.6.lead_from_the_front",
      "status": "locked",
      "slug": "commander-lead-from-the-front",
      "description": "Once per round when an ally within 30 ft hits a creature that you have damaged since the start of your previous turn, add your PB to that ally’s damage.",
      "level": 6,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.commander",
      "category": "Subclass feature",
      "requirements": ""
    },
    "aea89e3aa17931f0": {
      "id": "aea89e3aa17931f0",
      "name": "Epic Boon",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.19.epic_boon",
      "status": "locked",
      "slug": "epic-boon",
      "description": "Choose an eligible Epic Boon.",
      "level": 19,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "af043555a2db2e93": {
      "id": "af043555a2db2e93",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.soldier.8.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 8,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "af2db0ff381f702a": {
      "id": "af2db0ff381f702a",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.soldier.18.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 18,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "b07b4ab171d3ee2e": {
      "id": "b07b4ab171d3ee2e",
      "name": "8th-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.15.8th_level_tech_abilities",
      "status": "locked",
      "slug": "8th-level-tech-abilities",
      "description": "Unlock level-8 Tech Abilities.",
      "level": 15,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "b22de4b98985025c": {
      "id": "b22de4b98985025c",
      "name": "Assault: Jump Pack Assault",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.assault.3.jump_pack_assault",
      "status": "locked",
      "slug": "assault-jump-pack-assault",
      "description": "Gain an integrated jump pack as subclass-defining equipment that does not consume Power Armor Upgrade capacity. While not Incapacitated, PB times per Long Rest as a Bonus Action fly up to your Speed; you must end on a surface that can support you or fall. Entering Combat State does not prevent using this feature on later turns.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.assault",
      "category": "Subclass feature",
      "requirements": ""
    },
    "b2bef28311d1796d": {
      "id": "b2bef28311d1796d",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.operative.10.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 10,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "b2cb5aa22d7239d1": {
      "id": "b2cb5aa22d7239d1",
      "name": "Mechanist: Advanced Construct",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.mechanist.9.advanced_construct",
      "status": "locked",
      "slug": "mechanist-advanced-construct",
      "description": "Primary Construct attack damage becomes 2d8 + PB and its AC becomes 16. If Deflect does not turn the triggering attack into a miss, reduce that attack’s damage by PB.",
      "level": 9,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.mechanist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "b331625e9ce50605": {
      "id": "b331625e9ce50605",
      "name": "Transhuman Might",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.18.transhuman_might",
      "status": "needs_review",
      "slug": "transhuman-might",
      "description": "Indomitable Might is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 18,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "b469671e7a017188": {
      "id": "b469671e7a017188",
      "name": "Assassin: Death Sentence",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.assassin.17.death_sentence",
      "status": "locked",
      "slug": "assassin-death-sentence",
      "description": "When you deal Sneak Attack to your Marked Prey, declare Death Sentence. It makes a CON save (DC 8 + PB + DEX). On failure, roll your Sneak Attack dice twice for this attack; on success use normal Sneak Attack. Until start of your next turn it cannot regain HP or become Hidden from you. Once per Short or Long Rest.",
      "level": 17,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.assassin",
      "category": "Subclass feature",
      "requirements": ""
    },
    "b46c679b51604e5a": {
      "id": "b46c679b51604e5a",
      "name": "Shield of Conviction",
      "kind": "Item",
      "campaignId": "progression.class.zealot.2.shield_of_conviction",
      "status": "locked",
      "slug": "shield-of-conviction",
      "description": "When you take damage, spend 1 Fervor as a Reaction to reduce it by 1d10 + CHA modifier + PB.",
      "level": 2,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "b4ebd55961f2fbc8": {
      "id": "b4ebd55961f2fbc8",
      "name": "Assassin: Ambush Specialist",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.assassin.3.ambush_specialist",
      "status": "locked",
      "slug": "assassin-ambush-specialist",
      "description": "You have Advantage on Initiative rolls. Once during the first round of combat, when you deal Sneak Attack damage to a creature that has not yet taken a turn, deal additional damage equal to your Operative level.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.assassin",
      "category": "Subclass feature",
      "requirements": ""
    },
    "b721e97512059431": {
      "id": "b721e97512059431",
      "name": "Warp Spider: Death Spinner Training",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.warp_spider.3.death_spinner_training",
      "status": "locked",
      "slug": "warp-spider-death-spinner-training",
      "description": "Gain proficiency with Death Spinner-family weapons. Your first Death Spinner attack before end of the turn after Warp Jump ignores Half Cover and treats Three-Quarters Cover as Half Cover.",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.warp_spider",
      "category": "Subclass feature",
      "requirements": ""
    },
    "bd79653a93d10ec1": {
      "id": "bd79653a93d10ec1",
      "name": "Warp Exposure & Warp Discipline",
      "kind": "Item",
      "campaignId": "progression.class.psyker.1.warp_exposure_warp_discipline",
      "status": "locked",
      "slug": "warp-exposure-and-warp-discipline",
      "description": "Warp Exposure 0–100. Stable 0–24; Whispering 25–49; Fraying 50–74; Breach 75–99; 100 Possession Crisis. Warp Control uses WIS saves DC 10/13/16 in the three dangerous bands. Short Rest reduces Exposure 15; Long Rest resets it to 0. Ordinary healing/restoration does not reduce Exposure unless explicitly anti-Warp.",
      "level": 1,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "beec931214315816": {
      "id": "beec931214315816",
      "name": "5th-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.9.5th_level_invocations",
      "status": "locked",
      "slug": "5th-level-invocations",
      "description": "Unlock level-5 Invocations.",
      "level": 9,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "c0793cafe48b5b9f": {
      "id": "c0793cafe48b5b9f",
      "name": "Energy Savant: Energy Calibration",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.energy_savant.3.energy_calibration",
      "status": "locked",
      "slug": "energy-savant-energy-calibration",
      "description": "When you cast a Tech Ability that deals Fire, Lightning, or Force damage, you may change that damage to one of the other two types. Once per turn, reroll one damage die of a Tech Ability dealing one of those types; you must use the new roll.",
      "level": 3,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.energy_savant",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c140ffd0420a4166": {
      "id": "c140ffd0420a4166",
      "name": "Warp Spider: Phase Assault",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.warp_spider.15.phase_assault",
      "status": "locked",
      "slug": "warp-spider-phase-assault",
      "description": "Immediately after Warp Jump, you have Advantage on your first weapon attack before end of turn. On a hit it deals +2d6 damage, or +3d6 if made with a Death Spinner. Once per turn.",
      "level": 15,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.warp_spider",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c25ae81e4d2a55c6": {
      "id": "c25ae81e4d2a55c6",
      "name": "6th-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.11.6th_level_invocations",
      "status": "locked",
      "slug": "6th-level-invocations",
      "description": "Unlock level-6 Invocations.",
      "level": 11,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "c4ca288877aa5392": {
      "id": "c4ca288877aa5392",
      "name": "Epic Boon",
      "kind": "Item",
      "campaignId": "progression.class.zealot.19.epic_boon",
      "status": "locked",
      "slug": "epic-boon",
      "description": "Choose an eligible Epic Boon.",
      "level": 19,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "c53d8db2ba4378bd": {
      "id": "c53d8db2ba4378bd",
      "name": "Infiltrator: Ghost Protocol",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.infiltrator.17.ghost_protocol",
      "status": "locked",
      "slug": "infiltrator-ghost-protocol",
      "description": "After dealing Sneak Attack damage, immediately move up to half Speed. If you end where Concealment Protocol permits hiding, immediately attempt to Hide without an Action or Bonus Action. The creature hit by that Sneak Attack cannot take Reactions until start of its next turn.",
      "level": 17,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.infiltrator",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c5fa1b79765f3891": {
      "id": "c5fa1b79765f3891",
      "name": "Gunslinger: Deadeye",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.gunslinger.15.deadeye",
      "status": "locked",
      "slug": "gunslinger-deadeye",
      "description": "Your pistol attacks score a Critical Hit on 19–20. Pistol attacks ignore Half Cover and treat Three-Quarters Cover as Half Cover.",
      "level": 15,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.gunslinger",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c61b252bdb0e7e51": {
      "id": "c61b252bdb0e7e51",
      "name": "Shock Trooper: Shock Momentum",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.shock_trooper.7.shock_momentum",
      "status": "locked",
      "slug": "shock-trooper-shock-momentum",
      "description": "Once per turn when you reduce a hostile creature to 0 HP, move up to half your Speed without provoking Opportunity Attacks. Your next weapon hit before the end of your next turn deals +1d8 weapon damage.",
      "level": 7,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.shock_trooper",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c686f24288f01fa5": {
      "id": "c686f24288f01fa5",
      "name": "Master of the Warp",
      "kind": "Item",
      "campaignId": "progression.class.psyker.20.master_of_the_warp",
      "status": "locked",
      "slug": "master-of-the-warp",
      "description": "Once per Long Rest when you Draw from the Warp, make it a Perfect Draw: restore one expended spell slot you are currently eligible to recover, regardless of the normal PB-level requirement, and gain no Warp Exposure from that Draw. It still uses the normal Bonus Action.",
      "level": 20,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "c871ac4dc867acf5": {
      "id": "c871ac4dc867acf5",
      "name": "Gunslinger: Gunfighter's Tempo",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.gunslinger.18.gunfighter_s_tempo",
      "status": "locked",
      "slug": "gunslinger-gunfighter-s-tempo",
      "description": "Once per turn when you score a Critical Hit with a pistol or reduce a creature to 0 HP with one, immediately make one pistol attack against a different creature you can see in range. This granted attack cannot trigger Gunfighter’s Tempo. If dual-wielding pistols, choose either pistol.",
      "level": 18,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.gunslinger",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c8aa157903fada4d": {
      "id": "c8aa157903fada4d",
      "name": "Purifier: Aura of Censure",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.purifier.7.aura_of_censure",
      "status": "needs_review",
      "slug": "purifier-aura-of-censure",
      "description": "10-ft aura while conscious. General effect is locked: once on each ally’s turn, when that ally damages a hostile creature while within the aura, one damage roll gains +2 damage. Specialty rider is provisionally: a creature designated by the campaign Purifier-specialty taxonomy suffers -1 AC while in the aura.",
      "level": 7,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.purifier",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c94c7dd4d602ec1d": {
      "id": "c94c7dd4d602ec1d",
      "name": "Purifier: Burning Conviction",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.purifier.3.burning_conviction",
      "status": "locked",
      "slug": "purifier-burning-conviction",
      "description": "When you use Zealous Advance, your next successful weapon attack that turn applies Purging Brand without spending additional Fervor.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.purifier",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c96dbf9f8f0fa27c": {
      "id": "c96dbf9f8f0fa27c",
      "name": "9th-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.17.9th_level_psychic_powers",
      "status": "locked",
      "slug": "9th-level-psychic-powers",
      "description": "Unlock level-9 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 17,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "c9a1901609232553": {
      "id": "c9a1901609232553",
      "name": "Biomancer: Adaptive Physiology",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.biomancer.6.adaptive_physiology",
      "status": "locked",
      "slug": "biomancer-adaptive-physiology",
      "description": "After each Long Rest choose one adaptation until the next Long Rest: Carapace (+1 AC while not wearing Heavy armor), Fleet (+10 ft Speed), Resilient (Advantage on CON saves against poison/disease and on checks to resist exhaustion-like physical hazards), or Predatory Senses (Darkvision 120 ft, or +60 ft if already longer than 60, and Advantage on Perception checks relying on sight/smell).",
      "level": 6,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.biomancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "c9ae7d946517e4e2": {
      "id": "c9ae7d946517e4e2",
      "name": "Blade Master: Combination Strike",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.blade_master.13.combination_strike",
      "status": "locked",
      "slug": "blade-master-combination-strike",
      "description": "After you hit a creature with a melee Sneak Attack, your next melee weapon attack against that creature before end of your next turn gains +2 to the attack roll.",
      "level": 13,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.blade_master",
      "category": "Subclass feature",
      "requirements": ""
    },
    "ca75e62ff0721024": {
      "id": "ca75e62ff0721024",
      "name": "Sneak Attack",
      "kind": "Item",
      "campaignId": "progression.class.operative.1.sneak_attack",
      "status": "needs_review",
      "slug": "sneak-attack",
      "description": "Normal 2024 Rogue Sneak Attack qualification and 1d6→10d6 scaling. Do not add a separate qualification subsystem.",
      "level": 1,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "cd686097442b74fd": {
      "id": "cd686097442b74fd",
      "name": "Mental Conditioning",
      "kind": "Item",
      "campaignId": "progression.class.operative.15.mental_conditioning",
      "status": "needs_review",
      "slug": "mental-conditioning",
      "description": "Slippery Mind is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 15,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "cdad584e56a9368f": {
      "id": "cdad584e56a9368f",
      "name": "Tech-Adept Specialization",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.3.tech_adept_specialization",
      "status": "locked",
      "slug": "tech-adept-specialization",
      "description": "Choose Mechanist, Chirurgeon, or Energy Savant.",
      "level": 3,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "ce066d4c784aef1a": {
      "id": "ce066d4c784aef1a",
      "name": "Mechanist: Synchronized Targeting",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.mechanist.5.synchronized_targeting",
      "status": "locked",
      "slug": "mechanist-synchronized-targeting",
      "description": "Once per turn when you damage a creature with a Tech Ability or Tech-Integrated weapon, your Primary Construct has Advantage on its next attack against that creature before start of your next turn.",
      "level": 5,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.mechanist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "ced1b037b1ba213b": {
      "id": "ced1b037b1ba213b",
      "name": "Preacher: Rally the Faithful",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.preacher.3.rally_the_faithful",
      "status": "locked",
      "slug": "preacher-rally-the-faithful",
      "description": "Spend 1 Fervor as a Bonus Action; one ally within 30 ft gains Temporary HP equal to Zealot level + CHA modifier.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.preacher",
      "category": "Subclass feature",
      "requirements": ""
    },
    "d0174fc0004018a9": {
      "id": "d0174fc0004018a9",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.operative.9.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 9,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "d6fcf426109c4e4b": {
      "id": "d6fcf426109c4e4b",
      "name": "Heavy: Heavy Weapons Doctrine",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.heavy.3.heavy_weapons_doctrine",
      "status": "locked",
      "slug": "heavy-heavy-weapons-doctrine",
      "description": "Choose one Astartes Heavy weapon family you are proficient with after each Long Rest. While using a weapon from that family, hostile creatures within 5 ft do not impose Disadvantage on your ranged attacks solely for being adjacent, and once per turn while Combat State is active one hit with that family deals extra damage equal to your Combat State damage bonus.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.heavy",
      "category": "Subclass feature",
      "requirements": ""
    },
    "d79321515e5cd4b9": {
      "id": "d79321515e5cd4b9",
      "name": "Bulwark: Unbreakable Bastion",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.bulwark.14.unbreakable_bastion",
      "status": "locked",
      "slug": "bulwark-unbreakable-bastion",
      "description": "Interpose no longer has limited uses. When you use Interpose and the triggering attack either misses you or its damage is reduced to 0, the attacker takes Force damage equal to 2d8 + CON modifier if it is within 30 ft. This retaliation can occur once per turn.",
      "level": 14,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.bulwark",
      "category": "Subclass feature",
      "requirements": ""
    },
    "d7ec48a33c72ded6": {
      "id": "d7ec48a33c72ded6",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.psyker.12.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 12,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "d8410ef0fc1f59fc": {
      "id": "d8410ef0fc1f59fc",
      "name": "Heavy: Devastator Doctrine",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.heavy.14.devastator_doctrine",
      "status": "locked",
      "slug": "heavy-devastator-doctrine",
      "description": "While Combat State is active, once per turn a hit with your chosen Heavy weapon family deals +2d8 weapon damage. When you use its Automatic/Sustained save-based Activity, add one weapon damage die to that Activity’s damage instead. Choose only the attack or area benefit on a turn.",
      "level": 14,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.heavy",
      "category": "Subclass feature",
      "requirements": ""
    },
    "d9c94faf7758c2f3": {
      "id": "d9c94faf7758c2f3",
      "name": "9th-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.17.9th_level_tech_abilities",
      "status": "locked",
      "slug": "9th-level-tech-abilities",
      "description": "Unlock level-9 Tech Abilities.",
      "level": 17,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "d9f4f310796089c4": {
      "id": "d9f4f310796089c4",
      "name": "Artillerist: Master of Ordnance",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.artillerist.18.master_of_ordnance",
      "status": "locked",
      "slug": "artillerist-master-of-ordnance",
      "description": "You know a fourth Ordnance cantrip. After you use your Action to activate any Ordnance, cantrip or leveled, you may make one weapon attack as a Bonus Action. When you roll Initiative, if you have no 1st-level Ordnance slots remaining, regain one 1st-level Ordnance slot.",
      "level": 18,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.artillerist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "da0fa9b49aafe56b": {
      "id": "da0fa9b49aafe56b",
      "name": "Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.1.tech_abilities",
      "status": "locked",
      "slug": "tech-abilities",
      "description": "INT prepared technological abilities; standard full-caster slots through 9th level. Prepare after Long Rest; subclass-exclusive Tech Abilities are always prepared.",
      "level": 1,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "da22ba35a28f16a0": {
      "id": "da22ba35a28f16a0",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.8.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 8,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "da5a471bf3ed1da3": {
      "id": "da5a471bf3ed1da3",
      "name": "Space Marine Subclass",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.3.space_marine_subclass",
      "status": "needs_review",
      "slug": "space-marine-subclass",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "db19f318dbd31a42": {
      "id": "db19f318dbd31a42",
      "name": "Improved Exploit Weakness",
      "kind": "Item",
      "campaignId": "progression.class.operative.11.improved_exploit_weakness",
      "status": "needs_review",
      "slug": "improved-exploit-weakness",
      "description": "Improved Cunning Strike is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 11,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dbeffa11f6ebd389": {
      "id": "dbeffa11f6ebd389",
      "name": "Indomitable II",
      "kind": "Item",
      "campaignId": "progression.class.soldier.13.indomitable_ii",
      "status": "needs_review",
      "slug": "indomitable-ii",
      "description": "Indomitable (2) is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 13,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dc19e2365b5b499b": {
      "id": "dc19e2365b5b499b",
      "name": "Relentless Conviction",
      "kind": "Item",
      "campaignId": "progression.class.zealot.10.relentless_conviction",
      "status": "locked",
      "slug": "relentless-conviction",
      "description": "When you roll Initiative with no Fervor remaining, regain 1 Fervor.",
      "level": 10,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dcc0eff6a910eb4c": {
      "id": "dcc0eff6a910eb4c",
      "name": "Expanded Attunement III",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.18.expanded_attunement_iii",
      "status": "locked",
      "slug": "expanded-attunement-iii",
      "description": "Maximum attuned items becomes 6.",
      "level": 18,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dd1381dd5be5b5de": {
      "id": "dd1381dd5be5b5de",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.soldier.16.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 16,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dd33234c94a008f7": {
      "id": "dd33234c94a008f7",
      "name": "5th-level Psychic Powers",
      "kind": "Item",
      "campaignId": "progression.class.psyker.9.5th_level_psychic_powers",
      "status": "locked",
      "slug": "5th-level-psychic-powers",
      "description": "Unlock level-5 Psychic Powers on normal full-caster schedule; safe slot counts remain reduced by one, minimum one.",
      "level": 9,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dd561e24d044defe": {
      "id": "dd561e24d044defe",
      "name": "Assassin: Marked Prey",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.assassin.3.marked_prey",
      "status": "locked",
      "slug": "assassin-marked-prey",
      "description": "As a Bonus Action, mark one creature you can see within 90 ft for 1 minute. You have Advantage on Survival, Investigation, and Perception checks to track or locate it. Once per turn when you deal Sneak Attack damage to it, add PB to the damage. Uses = PB per Long Rest.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.assassin",
      "category": "Subclass feature",
      "requirements": ""
    },
    "de243e1ea86dfb55": {
      "id": "de243e1ea86dfb55",
      "name": "Gunslinger: Point-Blank Execution",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.gunslinger.10.point_blank_execution",
      "status": "locked",
      "slug": "gunslinger-point-blank-execution",
      "description": "Once per turn when you hit with a pistol against a creature within 5 ft, add one of the pistol’s weapon damage dice.",
      "level": 10,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.gunslinger",
      "category": "Subclass feature",
      "requirements": ""
    },
    "de4e624f67195b95": {
      "id": "de4e624f67195b95",
      "name": "Tech Upgrades II",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.6.tech_upgrades_ii",
      "status": "locked",
      "slug": "tech-upgrades-ii",
      "description": "Tech Upgrades known increases to 6; active capacity increases to 2.",
      "level": 6,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "df4d489d14dc625c": {
      "id": "df4d489d14dc625c",
      "name": "Fighting Style",
      "kind": "Item",
      "campaignId": "progression.class.zealot.2.fighting_style",
      "status": "locked",
      "slug": "fighting-style",
      "description": "Choose an eligible Fighting Style feat.",
      "level": 2,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "dfee5d1386e50bfd": {
      "id": "dfee5d1386e50bfd",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.operative.13.subclass_feature",
      "status": "needs_review",
      "slug": "subclass-feature",
      "description": "Subclass Feature is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 13,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e09684c1f4f2ebb9": {
      "id": "e09684c1f4f2ebb9",
      "name": "Unyielding Constitution",
      "kind": "Item",
      "campaignId": "progression.class.zealot.6.unyielding_constitution",
      "status": "locked",
      "slug": "unyielding-constitution",
      "description": "Advantage on saving throws against disease and toxins, including the Poisoned condition when caused by a toxin or disease.",
      "level": 6,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e0dca5957a243437": {
      "id": "e0dca5957a243437",
      "name": "Gene-Forged Paragon",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.20.gene_forged_paragon",
      "status": "needs_review",
      "slug": "gene-forged-paragon",
      "description": "Primal Champion is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 20,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e115c66c6f3d16d7": {
      "id": "e115c66c6f3d16d7",
      "name": "Power Armor Upgrade I",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.3.power_armor_upgrade_i",
      "status": "locked",
      "slug": "power-armor-upgrade-i",
      "description": "Maximum active Power Armor Upgrades becomes 1. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
      "level": 3,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e1954dabdc0bc70b": {
      "id": "e1954dabdc0bc70b",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.4.talent_ability_score_improvement",
      "status": "locked",
      "slug": "talent-ability-score-improvement",
      "description": "Choose an eligible feat/Talent or Ability Score Improvement.",
      "level": 4,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e2483251daa8a944": {
      "id": "e2483251daa8a944",
      "name": "7th-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.13.7th_level_tech_abilities",
      "status": "locked",
      "slug": "7th-level-tech-abilities",
      "description": "Unlock level-7 Tech Abilities.",
      "level": 13,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e2eeab28dda82bde": {
      "id": "e2eeab28dda82bde",
      "name": "Fighting Style",
      "kind": "Item",
      "campaignId": "progression.class.soldier.1.fighting_style",
      "status": "locked",
      "slug": "fighting-style",
      "description": "Use native 2024 Fighting Style feats. No bespoke firearm Fighting Style suite is required; firearm specialization is handled by normal feats/subclasses/properties.",
      "level": 1,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e30ee2e8d0e8da5a": {
      "id": "e30ee2e8d0e8da5a",
      "name": "Underworld Cant",
      "kind": "Item",
      "campaignId": "progression.class.operative.1.underworld_cant",
      "status": "needs_review",
      "slug": "underworld-cant",
      "description": "Thieves' Cant is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 1,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e3e86e9dbb219058": {
      "id": "e3e86e9dbb219058",
      "name": "Pyromancer: Pyromantic Discipline",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.pyromancer.3.pyromantic_discipline",
      "status": "locked",
      "slug": "pyromancer-pyromantic-discipline",
      "description": "Your Pyromancer-exclusive Psychic Powers are always known. Warpfire: whenever a Psychic Power you cast deals Fire or Psychic damage, you may have that power deal the other of those two types instead. You also gain Resistance to Fire damage.",
      "level": 3,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.pyromancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "e54713db697887c7": {
      "id": "e54713db697887c7",
      "name": "Fervor III",
      "kind": "Item",
      "campaignId": "progression.class.zealot.9.fervor_iii",
      "status": "locked",
      "slug": "fervor-iii",
      "description": "Fervor maximum increases to 3; once-per-Long-Rest Short Rest recovery becomes 2.",
      "level": 9,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e59ef05e80f87c43": {
      "id": "e59ef05e80f87c43",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.operative.4.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 4,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e5dafb02391bfae6": {
      "id": "e5dafb02391bfae6",
      "name": "Combat Elusiveness",
      "kind": "Item",
      "campaignId": "progression.class.operative.18.combat_elusiveness",
      "status": "needs_review",
      "slug": "combat-elusiveness",
      "description": "Elusive is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 18,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e649d248e7efd0af": {
      "id": "e649d248e7efd0af",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.psyker.14.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain the feature for your Psyker Discipline.",
      "level": 14,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e677a627695cb889": {
      "id": "e677a627695cb889",
      "name": "Blade Master: Duelist's Footwork",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.blade_master.3.duelist_s_footwork",
      "status": "locked",
      "slug": "blade-master-duelist-s-footwork",
      "description": "After you make a melee weapon attack against a creature, that creature cannot make Opportunity Attacks against you for the rest of your turn.",
      "level": 3,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.blade_master",
      "category": "Subclass feature",
      "requirements": ""
    },
    "e6ceb1cc4afa50fc": {
      "id": "e6ceb1cc4afa50fc",
      "name": "Infiltrator: Concealment Protocol",
      "kind": "Item",
      "campaignId": "subfeature.subclass.operative.infiltrator.9.concealment_protocol",
      "status": "locked",
      "slug": "infiltrator-concealment-protocol",
      "description": "You may Hide while lightly obscured by smoke, in dim light, concealed by machinery, in a sufficiently dense crowd, or behind Half Cover. Gain Exploit Weakness option Ghost Attack (cost 1d6): if Hidden when attacking, the attack does not end Hidden provided you finish the turn behind Three-Quarters or Total Cover.",
      "level": 9,
      "ownerClassId": "class.operative",
      "ownerSubclassId": "subclass.operative.infiltrator",
      "category": "Subclass feature",
      "requirements": ""
    },
    "e74fb354f1481b60": {
      "id": "e74fb354f1481b60",
      "name": "4th-level Invocations",
      "kind": "Item",
      "campaignId": "progression.class.zealot.7.4th_level_invocations",
      "status": "locked",
      "slug": "4th-level-invocations",
      "description": "Unlock level-4 Invocations.",
      "level": 7,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e981c859c472ac0b": {
      "id": "e981c859c472ac0b",
      "name": "Indomitable Creed",
      "kind": "Item",
      "campaignId": "progression.class.zealot.18.indomitable_creed",
      "status": "locked",
      "slug": "indomitable-creed",
      "description": "When you fail a saving throw, you may spend 1 Fervor to reroll it and must use the new result.",
      "level": 18,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "e9d46a2c4d5d0c5d": {
      "id": "e9d46a2c4d5d0c5d",
      "name": "Subclass Feature",
      "kind": "Item",
      "campaignId": "progression.class.psyker.18.subclass_feature",
      "status": "locked",
      "slug": "subclass-feature",
      "description": "Gain the feature for your Psyker Discipline.",
      "level": 18,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "eb578548bcd48c3d": {
      "id": "eb578548bcd48c3d",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.4.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 4,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "eb98c4a1cfe80557": {
      "id": "eb98c4a1cfe80557",
      "name": "Relentless Physiology",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.11.relentless_physiology",
      "status": "needs_review",
      "slug": "relentless-physiology",
      "description": "Relentless Rage is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 11,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f0a3bd5412cb065c": {
      "id": "f0a3bd5412cb065c",
      "name": "Artillerist: Ordnance Training",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.artillerist.3.ordnance_training",
      "status": "locked",
      "slug": "artillerist-ordnance-training",
      "description": "Gain 2 Ordnance cantrips and 1st–5th-level Ordnance slots using the standard Paladin/Ranger half-caster slot progression based on total Soldier level. STR is the Ordnance ability (attack = PB + STR; save DC = 8 + PB + STR). Cantrips known: 2 at L3, 3 at L10, 4 at L18. Prepare leveled Ordnance after each Long Rest equal to STR mod + half Soldier level (round down, minimum 1).",
      "level": 3,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.artillerist",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f0ccf6fc6725fc6b": {
      "id": "f0ccf6fc6725fc6b",
      "name": "Rite of Resolve",
      "kind": "Item",
      "campaignId": "progression.class.zealot.14.rite_of_resolve",
      "status": "locked",
      "slug": "rite-of-resolve",
      "description": "As an Action, spend 1 Fervor and touch a willing creature to end one of these conditions on it: Charmed, Frightened, or Poisoned. This is ordinary condition relief, not Warp purification; removing possession, corruption, or Warp Exposure requires an explicit Purifier/anti-Warp effect.",
      "level": 14,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f1ef0e3201c5b4f7": {
      "id": "f1ef0e3201c5b4f7",
      "name": "Chirurgeon: Bionic Reconstruction",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.chirurgeon.9.bionic_reconstruction",
      "status": "locked",
      "slug": "chirurgeon-bionic-reconstruction",
      "description": "During a Long Rest, with Tech/Tinker’s Tools or Medicae tools and suitable components, treat one lingering physical Critical Injury on a creature. You can suppress its mechanical penalties until the next Long Rest; if an appropriate bionic/prosthetic Item is available, install it and resolve a permanent limb/organ loss as that Item permits. In addition, PB times per Long Rest when your Tech Ability restores HP, you may also end Poisoned on that target.",
      "level": 9,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.chirurgeon",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f1f4369c826af4ec": {
      "id": "f1f4369c826af4ec",
      "name": "Expanded Attunement I",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.10.expanded_attunement_i",
      "status": "locked",
      "slug": "expanded-attunement-i",
      "description": "Maximum attuned items becomes 4.",
      "level": 10,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f2460c050e5ba843": {
      "id": "f2460c050e5ba843",
      "name": "Talent / Ability Score Improvement",
      "kind": "Item",
      "campaignId": "progression.class.soldier.12.talent___ability_score_improvement",
      "status": "needs_review",
      "slug": "talent-ability-score-improvement",
      "description": "Ability Score Improvement is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 12,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f3b2243d9fe1dfb3": {
      "id": "f3b2243d9fe1dfb3",
      "name": "Extra Attack",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.5.extra_attack",
      "status": "needs_review",
      "slug": "extra-attack",
      "description": "Extra Attack is represented as a manual/native feature placeholder until its complete player-facing text is promoted.",
      "level": 5,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f3b461e84b788ec9": {
      "id": "f3b461e84b788ec9",
      "name": "Warp Spider: Master of the Warp Web",
      "kind": "Item",
      "campaignId": "subfeature.subclass.soldier.warp_spider.18.master_of_the_warp_web",
      "status": "locked",
      "slug": "warp-spider-master-of-the-warp-web",
      "description": "Warp Jump no longer requires a Bonus Action: once on each of your turns you may Jump before or after one of your attacks without an action. Normal uses apply; when Initiative is rolled with no uses remaining, regain 1. Phase Assault becomes +3d6 with other qualifying weapons or +4d6 with a Death Spinner.",
      "level": 18,
      "ownerClassId": "class.soldier",
      "ownerSubclassId": "subclass.soldier.warp_spider",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f4816e5681d41106": {
      "id": "f4816e5681d41106",
      "name": "Pyromancer: Pyrokinetic Surge",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.pyromancer.6.pyrokinetic_surge",
      "status": "locked",
      "slug": "pyromancer-pyrokinetic-surge",
      "description": "Once per turn when a Psychic Power you cast deals Fire damage, add your CHA modifier to one damage roll of that power.",
      "level": 6,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.pyromancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f594e32b34952f1b": {
      "id": "f594e32b34952f1b",
      "name": "Devastating Strike III",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.17.devastating_assault_iii",
      "status": "needs_review",
      "slug": "devastating-strike-iii",
      "description": "Extra damage becomes +2d10 and you may apply two different Devastating Strike effects on the same qualifying hit.",
      "level": 17,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f6d88151b47d6840": {
      "id": "f6d88151b47d6840",
      "name": "Bulwark: Fortified Position",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.bulwark.10.fortified_position",
      "status": "locked",
      "slug": "bulwark-fortified-position",
      "description": "While wielding your Bulwark shield and not Incapacitated, you have Advantage on checks/saves to resist being shoved or knocked Prone. Allies directly adjacent to you can treat you and your shield as Half Cover against ranged attacks when geometry reasonably places you between them and the attacker.",
      "level": 10,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.bulwark",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f71a5aa74c2fe6c7": {
      "id": "f71a5aa74c2fe6c7",
      "name": "Commander: Supreme Commander",
      "kind": "Item",
      "campaignId": "subfeature.subclass.space_marine.commander.14.supreme_commander",
      "status": "locked",
      "slug": "commander-supreme-commander",
      "description": "Once per Long Rest when you enter Combat State, you may declare Decisive Command for the same duration. At the start of each of your turns while it lasts, issue one Battle Order to one eligible ally without a Bonus Action or expending a use. Battle Order range becomes 60 ft during Decisive Command.",
      "level": 14,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "subclass.space_marine.commander",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f75005fabf85b9e5": {
      "id": "f75005fabf85b9e5",
      "name": "Chirurgeon: Master Chirurgeon",
      "kind": "Item",
      "campaignId": "subfeature.subclass.tech_adept.chirurgeon.15.master_chirurgeon",
      "status": "locked",
      "slug": "chirurgeon-master-chirurgeon",
      "description": "Once per Long Rest, when a creature you can see within 30 ft would be reduced to 0 HP or would fail its third Death Saving Throw, use your Reaction to leave it at 1 HP and then restore 4d8 + INT HP.",
      "level": 15,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "subclass.tech_adept.chirurgeon",
      "category": "Subclass feature",
      "requirements": ""
    },
    "f7b952547af83e2f": {
      "id": "f7b952547af83e2f",
      "name": "Power Armor Upgrade III",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.13.power_armor_upgrade_iii",
      "status": "locked",
      "slug": "power-armor-upgrade-iii",
      "description": "Maximum active Power Armor Upgrades becomes 3. Upgrades are acquired as loot, Requisition, merchant stock, faction rewards, or quests; leveling increases capacity but does not automatically grant a specific upgrade item.",
      "level": 13,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "f829322a4382f291": {
      "id": "f829322a4382f291",
      "name": "Purifier: Improved Aura of Censure",
      "kind": "Item",
      "campaignId": "subfeature.subclass.zealot.purifier.15.improved_aura_of_censure",
      "status": "needs_review",
      "slug": "purifier-improved-aura-of-censure",
      "description": "Aura radius increases from 10 ft to 30 ft. General +2 once-per-turn damage rider remains. The -1 AC specialty rider expands with the aura once the specialty taxonomy is approved.",
      "level": 15,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "subclass.zealot.purifier",
      "category": "Subclass feature",
      "requirements": ""
    },
    "fa848cc1404d1e4c": {
      "id": "fa848cc1404d1e4c",
      "name": "Zealot Creed",
      "kind": "Item",
      "campaignId": "progression.class.zealot.3.zealot_creed",
      "status": "locked",
      "slug": "zealot-creed",
      "description": "Choose Purifier, Preacher, or Crusader.",
      "level": 3,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "fb2a40e79fb62214": {
      "id": "fb2a40e79fb62214",
      "name": "Integrated Power Armor",
      "kind": "Item",
      "campaignId": "progression.class.space_marine.1.integrated_power_armor",
      "status": "locked",
      "slug": "integrated-power-armor",
      "description": "Intrinsic armor defense: AC = 10 + DEX modifier + CON modifier; does not stack with worn armor; no attunement; worn Integrated Power Armor does not count against carrying capacity.",
      "level": 1,
      "ownerClassId": "class.space_marine",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "fbc554dbad9cbbc7": {
      "id": "fbc554dbad9cbbc7",
      "name": "Biomancer: Perfected Flesh",
      "kind": "Item",
      "campaignId": "subfeature.subclass.psyker.biomancer.18.perfected_flesh",
      "status": "locked",
      "slug": "biomancer-perfected-flesh",
      "description": "As a Bonus Action once per Long Rest, perfect your physiology for 1 minute. At start of each of your turns while above 0 HP, regain 10 HP; gain +10 ft Speed and Advantage on STR, DEX, and CON saving throws. Fleshcraft may benefit two creatures per turn instead of one.",
      "level": 18,
      "ownerClassId": "class.psyker",
      "ownerSubclassId": "subclass.psyker.biomancer",
      "category": "Subclass feature",
      "requirements": ""
    },
    "fbdc76c1475695b6": {
      "id": "fbdc76c1475695b6",
      "name": "Fervor IV",
      "kind": "Item",
      "campaignId": "progression.class.zealot.17.fervor_iv",
      "status": "locked",
      "slug": "fervor-iv",
      "description": "Fervor maximum increases to 4; once-per-Long-Rest Short Rest recovery remains 2.",
      "level": 17,
      "ownerClassId": "class.zealot",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    },
    "fe0f64cf38636649": {
      "id": "fe0f64cf38636649",
      "name": "6th-level Tech Abilities",
      "kind": "Item",
      "campaignId": "progression.class.tech_adept.11.6th_level_tech_abilities",
      "status": "locked",
      "slug": "6th-level-tech-abilities",
      "description": "Unlock level-6 Tech Abilities.",
      "level": 11,
      "ownerClassId": "class.tech_adept",
      "ownerSubclassId": "",
      "category": "Class feature",
      "requirements": ""
    }
  },
  "glossary": [
    {
      "term": "Advancement",
      "definition": "A native D&D5e entry that applies a choice or grants a feature as a character is created or gains a level."
    },
    {
      "term": "Class chassis",
      "definition": "The native D&D5e class structure used as the mechanical foundation for a Warhammer class."
    },
    {
      "term": "Subclass cadence",
      "definition": "The class levels at which a class receives its subclass features."
    },
    {
      "term": "Native fallback",
      "definition": "The D&D5e or manual procedure used when optional automation is absent, disabled, incompatible, or not yet approved."
    },
    {
      "term": "needs_review",
      "definition": "A visible review boundary. It means the entry should not be treated as final mechanics without the linked source and fallback."
    },
    {
      "term": "Universal Spell Pool",
      "definition": "A class-list choice for Psyker, Tech-Adept, and Zealot. It is not automatically prepared, and it does not apply to Artillerist."
    },
    {
      "term": "Stable campaign ID",
      "definition": "The semantic identity used to keep references stable even when a display name changes."
    }
  ]
};
