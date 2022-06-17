const synonyms =
  "Choose the word that is NEAREST IN MEANING to the block letter word";
const antonyms =
  "Choose the word that is OPPOSITE IN MEANING to the block letter word";
const interprete =
  "Choose the best interpretation for the sentence among the options";
const fill = "Fill in the gap with the most appropriate word";
export const English = [
  {
    inst: synonyms,
    q: "Our local paper is noted for it's INCISIVE editorials on local politics.",
    opt: ["Sarcastic", "Penetrating", "Decisive", "Destructive"],
    ans: "Penetrating",
  },
  {
    inst: synonyms,
    q: "His jail terms were to run CONCURRENTLY",
    opt: ["Simultaneously", "Uniformly", "Laboriously", "Consecutively"],
    ans: "Simultaneously",
  },
  {
    inst: synonyms,
    q: "His TACITURNITY amazed everyone in the court during the legal tussle.",
    opt: ["Sensibility", "Pervasiveness", "Obliviousness", "Reticence"],
    ans: "Reticence",
  },
  {
    inst: synonyms,
    q: "You have been asked to change your LAISSEZ-FAIRE attitude to work",
    opt: ["Stupid", "Carefree", "Careful", "Serious"],
    ans: "Carefree",
  },
  {
    inst: synonyms,
    q: "The team has become INDOMITABLE quite recently",
    opt: ["Incorrigible", "Disobedient", "Unconquerable", "Unruly"],
    ans: "Unconquerable",
  },
  {
    inst: synonyms,
    q: "Tom's ABERRANT behavior attracted attention",
    opt: ["Rascally", "Selfish", "Heady", "Abnormal"],
    ans: "Abnormal",
  },
  {
    inst: synonyms,
    q: "They show no FINESSE in dealing with strangers",
    opt: ["Boldness", "Kindness", "Tact", "Love"],
    ans: "Tact",
  },
  {
    inst: synonyms,
    q: "The principal told the teacher to stop BROWBEATING the children",
    opt: ["Pampering", "Caning", "Bullying", "Deceiving"],
    ans: "Bullying",
  },
  {
    inst: synonyms,
    q: "The man preaches egalitarianism without matching it up with action.",
    opt: ["Salvation", "Dedication", "Kindness", "Equality"],
    ans: "Equality",
  },
  {
    inst: synonyms,
    q: "The COALESCENCE of the groups created additional problems.",
    opt: ["Fighting", "Proscription", "Union", "Disbandment"],
    ans: "Union",
  },
  {
    inst: antonyms,
    q: "GREGARIOUS animals can be found in the zoo.",
    opt: ["Various", "Wild", "Lonely", "Tame"],
    ans: "Lonely",
  },
  {
    inst: antonyms,
    q: "My father lived a SPARTAN life before his death.",
    opt: ["Extravagant", "Peaceful", "Quiet", "Luxurious"],
    ans: "Luxurious",
  },
  {
    inst: antonyms,
    q: "There was a general ACQUIESCENCE on the new drug law",
    opt: ["Compromise", "Agreement", "Resistance", "Discrepancy"],
    ans: "Resistance",
  },
  {
    inst: antonyms,
    q: "To most people last Christmas was an AUSTERE period",
    opt: ["Prosperous", "Harsh", "Severe", "Sour"],
    ans: "Prosperous",
  },
  {
    inst: antonyms,
    q: "It seems fashionable, in some quarters today, to DECRY examination and the ability to pass them",
    opt: ["Extol", "Abuse", "Entreat", "Discourage"],
    ans: "Extol",
  },
  {
    inst: antonyms,
    q: "In spite of many days of fasting, Musa is still FASTIDIOUS about his food",
    opt: ["Particular", "Undecided", "Indifferent", "Unmindful"],
    ans: "Unmindful",
  },
  {
    inst: antonyms,
    q: "My eldest brother is now faced with the VICISSITUDES of married life.",
    opt: ["Amazement", "Sweetness", "Amiability", "Stability"],
    ans: "Stability",
  },
  {
    inst: antonyms,
    q: "The man who had been seriously ill was CONVALESCING  at a seaside resort.",
    opt: [
      "Regaining health",
      "Deteriorating in health",
      "Recuperating",
      "Relaxing",
    ],
    ans: "Deteriorating in health",
  },
  {
    inst: antonyms,
    q: "The journalist's write-up contained a PLETHORA of detail.",
    opt: ["Simplicity", "Spectrum", "Shortage", "Complexity"],
    ans: "Shortage",
  },
  {
    inst: antonyms,
    q: "The proprietor accused Uche of silently ACQUIESCING to the students demand.",
    opt: ["Adjusting", "Resisting", "Compromising", "Submitting"],
    ans: "Resisting",
  },
  {
    inst: antonyms,
    q: "Akpan was able to DOUSE the flames with the new piece of equipment.",
    opt: ["Reduce", "Extinguish", "Ignite", "Reinforce"],
    ans: "Ignite",
  },
  {
    inst: antonyms,
    q: "In our last play, Segun acted the HERO",
    opt: ["Villain", "Devil", "Criminal", "Assassin"],
    ans: "Villain",
  },
  {
    inst: antonyms,
    q: "His ANTIPATHY affected the growth of his business",
    opt: ["Hatred", "Receptiveness", "Loyalty", "Hostility"],
    ans: "Receptiveness",
  },
  {
    inst: synonyms,
    q: "The plan has gone AWRY",
    opt: ["Wide", "Wrong", "Recoverable", "Repulsive"],
    ans: "Wrong",
  },
  {
    inst: synonyms,
    q: "Olisa HOODWINKED the men into buying and selling",
    opt: ["Grouped", "Lured", "Deluded", "Drove"],
    ans: "Lured",
  },

  {
    inst: interprete,
    q: "Mr Jack could be a successful businessman if he paid more attention to the more intricate aspects of his account",
    opt: [
      "Mr Jack will undoubtedly succeed",
      "Mr Jack cannot succeed",
      "Jack will have a very good chance of succeeding",
      "Mr Jack will find it difficult to succeed",
    ],
    ans: "Jack will have a very good chance of succeeding",
  },
  {
    inst: interprete,
    q: "Had she asked me earlier , I might have been able to employ him",
    opt: [
      "I employed her",
      "I did not employ him",
      "I did not employ her",
      "I employed neither of the two",
    ],
    ans: "I did not employ him",
  },
  {
    inst: interprete,
    q: "He was a gullible leader, his followers took advantage of him",
    opt: [
      "He was weak and unable to enforce his authority",
      "He was partial and unfair in dispensing justice",
      "He was simple minded to a fault",
      "He was slow to act",
    ],
    ans: "He was simple minded to a fault",
  },
  {
    inst: interprete,
    q: "The witness was guilty of swearing to a statement he knew to be false",
    opt: ["Forgery", "Perjury", "Libel", "Slander"],
    ans: "Perjury",
  },
  {
    inst: interprete,
    q: "The politician had a variety of peculiarities. The most conspicuous is the way he gesticulates when making a serious point",
    opt: [
      "Shows anxiety when making a serious point",
      "Breaks down when talking seriously",
      "Uses his hands and arms as a sign",
      "Shakes his head from one side to the other",
    ],
    ans: "Uses his hands and arms as a sign",
  },
  {
    inst: interprete,
    q: "My headmaster is getting old, his masters have been retired, but because of his zeal for work ,he has been retained",
    opt: [
      "My headmaster is strong",
      "My headmaster is cheerful",
      "My headmaster is enthusiastic about his job",
      "My headmaster's activity at work is unparalleled",
    ],
    ans: "My headmaster is enthusiastic about his job",
  },
  {
    inst: interprete,
    q: "He heard the loud noise of the huge air-raid siren",
    opt: ["Buzz", "Crack", "Rumble", "Wail"],
    ans: "Wail",
  },
  {
    inst: fill,
    q: "Maimuna wrote to ask if I could put her ________ for the night",
    opt: ["Up", "in", "Out", "Off"],
    ans: "up",
  },

  {
    inst: interprete,
    q: "In some parts of the society , people are ostracized purely on the basis of their percentage",
    opt: ["Hated", "Disrespected", "Shut off from others", "Abandoned"],
    ans: "Shut off from others",
  },
  {
    inst: interprete,
    q: "He reneged on the agreement between him and his employees",
    opt: ["Kept", "Failed to keep", "Failed to approve", "Failed to sign"],
    ans: "Failed to keep",
  },
  {
    inst: interprete,
    q: "She wriggled out of her wedding gown",
    opt: [
      "She could not take off her gown herself so she was assisted",
      "Her dress got torn because of the snake-like pattern",
      "No one could have imagined that her dress was so tight",
      "It took her some time to remove her close fitting dress",
    ],
    ans: "It took her some time to remove her close fitting dress",
  },
  {
    inst: interprete,
    q: "The computer operator was sacked for incompetence",
    opt: [
      "The computer operator was sacked for his foolishness",
      "The computer operator was sacked for his laziness",
      "The computer operator was sacked for his lack of skill",
      "The computer operator was sacked for lateness",
    ],
    ans: "The computer operator was sacked for his lack of skill",
  },
  {
    inst: interprete,
    q: "After the meeting, I read a leer on his face as he looked at the woman",
    opt: ["Satisfying meaning", "Bad look", "Pleasant condition", "Poor smile"],
    ans: "Bad look",
  },
  {
    inst: interprete,
    q: "The manager described Mfon as a man of vehement character",
    opt: [
      "Clever and helpful",
      "Troublesome and noisy",
      "Weak and uninterested",
      "Strong and insistent",
    ],
    ans: "Strong and insistent",
  },
  {
    inst: interprete,
    q: "Let us not indulge in recrimination",
    opt: [
      "Indictment",
      "Accusation",
      "Counter accusation",
      "Unfounded allegation",
    ],
    ans: "Counter accusation",
  },
  {
    inst: interprete,
    q: "The conference is biennial",
    opt: [
      "The conference is  held twice every year",
      "The conference is held twice every two years",
      "The conference is held once every other year",
      "The conference Lasts for two years",
    ],
    ans: ",The conference Lasts for two years",
  },

  {
    inst: interprete,
    q: "Their strength is their staggering capacity to reproduce",
    opt: [
      "Unstable multiplying power",
      "Unreliable attacking power",
      "Qualitative multiplying power",
      "Overwhelming multiplying power",
    ],
    ans: "Overwhelming multiplying power",
  },
  {
    inst: interprete,
    q: "Jide says  he read in the papers that our uncle has been declared a persona non grata by the French government",
    opt: [
      "Unwelcome guest",
      "Impersonator",
      "Ungrateful person",
      "Unofficial guest",
    ],
    ans: "Unwelcome guest",
  },

  {
    inst: interprete,
    q: "He was between the devil and the deep blue sea",
    opt: [
      "He was in danger",
      "He was scared",
      "He stood between the devil and the sea",
      "He was in a dilemma",
    ],
    ans: "He was in a dilemma",
  },

  {
    inst: interprete,
    q: "My father was at the apogee of his career when he was retired",
    opt: [
      "Terminal point",
      "Least productive stage",
      "Redundant stage",
      "Highest point",
    ],
    ans: "Highest point",
  },
];

export const physics = [
  {
    q: "A temperature of 20° C is the same as ? ",
    opt: ["36°F", "68°F", "11.1°F", "43.1°F"],
    ans: "68°F",
  },
  {
    q: " An object is positioned between two plain mirrors inclined at right angle to each other.The object is 1 units distance from each mirror the number of images form is  ",
    opt: ["1", "2", "3", "4"],
    ans: "3",
  },
  {
    q: "the visible part of lights consists of the following colors",
    opt: [
      "red, indigo, infra-red, violet, yellow, green and blue",
      "Red,green,blue,violet,indigo,orange and yellow",
      "blue,ultra-violet,infra-red,red,yellow,indigo,violet,green and orange",
      "blue,red,pink,green,orange,purple, yellow",
    ],
    ans: "Red,green,blue,violet,indigo,orange and yellow",
  },
  {
    q: "An object moves with uniform speed Round a circle ,it’s acceleration has",
    opt: [
      "Constant direction and magnitude ",
      "Constant magnitude and varying direction",
      "Varying magnitude and constant direction",
      "Varying magnitude and direction",
    ],
    ans: "Constant magnitude and varying direction",
  },
  {
    q: "To converts and alternating current dynamo into a Direct current dynamo,the.",
    opt: [
      "numbers of turns in the coil is increased",
      "strength of the field magnet is increased ",
      "slip rings are replaced with a split ring cummutator",
      "coil is wounded on a soft iron armature",
    ],
    ans: "slip rings are replaced with a split ring cummutator",
  },
  {
    q: "When an atom loses or gains a charge ,it becomes",
    opt: ["an electron", "an ion", "A neutron", "A proton"],
    ans: "an ion",
  },
  {
    q: " A body starts from rest and moves with a uniform acceleration of 6 ms-2 what distance does it cover in the third second",
    opt: ["15m ", "18m ", "27m", "30m"],
    ans: "15m ",
  },
  {
    q: "When an object is placed very close to the pole Of a concave mirror, the virtual image obtained is ",
    opt: [
      "Diminished and upright ",
      "diminished and inverted",
      "enlarged and inverted",
      "enlarged and upright",
    ],
    ans: "enlarged and upright",
  },
  {
    q: "Which of the following factors Has no effects on the e.m.f of A primary cell ",
    opt: [
      "temperature",
      " Size of the cell",
      "nature of the plate",
      "nature of the electrolyte",
    ],
    ans: "nature of the plate",
  },
  {
    q: "If the Nigerian flag (green white green) Is viewed in pure yellow lights, which of the following set of color would be observed  on the flag",
    opt: [
      "green,yellow,green ",
      "red,yellow,red",
      "black,yellow,black ",
      "green,white,green",
    ],
    ans: "green,yellow,green ",
  },
  {
    q: "Which of the following has the lowest internal  resistance when new ",
    opt: ["Leclanché cell ", "Daniel cell  ", "Accumulator", " Torch battery"],
    ans: "Accumulator",
  },
  {
    q: "which of the following is the dimension of pressure?",
    opt: ["ML-1T-2", "ML2T3 ", "MLT-2", "ML-3"],
    ans: "ML-1T-2",
  },
  {
    q: "The difference between the sound waves and light waves is that sound waves",
    opt: [
      "Are transverse while light waves are longitudinal ",
      "Require a medium to travel while light waves do not ",
      "can be diffracted but light waves cannot ",
      "Cannot be reflected but light waves ",
    ],
    ans: "Require a medium to travel while light waves do not ",
  },
  {
    q: "The pitch of an acoustic device am be increased by",
    opt: [
      " Increasing the frequency",
      " Increasing the amplitude",
      " Decreasing the loudness",
      " Decreasing the intensity",
    ],
    ans: " Increasing the frequency",
  },
  {
    q: " The purpose of a dielectric material in a parallel plate capacitor is to",
    opt: [
      "increase it's capacitance",
      "decrease its capacitance ",
      "Insulate the plates from each other",
      "Increase the magnetic field between the plates",
    ],
    ans: "increase it's capacitance",
  },
  {
    q: "The colors seen in thin films of oil on the road in soap bubbles are due to",
    opt: ["reflection", "interference", "diffraction", "Polarization"],
    ans: "interference",
  },
  {
    q: "Light of velocity 3.0*10^8m/s is incident on a material of refractive index n . If the velocity of light is reduced to 2.4*10^8m/s in the material ,what is n ?",
    opt: [".2.33", "2.25", "1.33 ", "1.25"],
    ans: "1.25",
  },
  {
    q: "The physical quantity that has the same dimensions as impulse is",
    opt: ["Energy", "momentum", " Surface tension", "Pressure"],
    ans: "momentum",
  },
  {
    q: "The electromagnetic waves that are sensitive to temperature changes are",
    opt: ["X-rays", "Gamma rays", "Ultra violet rays ", "Infra-rays"],
    ans: "Infra-rays",
  },
];
export const chemistry = [
  {
    q: "Which of the following metals is purified commercially by electrolysis",
    opt: ["Zn", "Fe", "Sn", "Cu"],
    ans: "Cu",
  },
  {
    q: "The compound that is used as an anaesthetic is",
    opt: ["CCl4", "CHCH3", "CH2Cl2", "CH3Cl"],
    ans: "CHCH3",
  },
  {
    q: "The IUPAC nomenclature of the compound LiAlH4 is",
    opt: [
      "lithiumtetrahydridoaluminateIII",
      "aluminum tetrahydrido lithium",
      "tetrahydrido lithium aluminateIII",
      "lithum aluminum hydride",
    ],
    ans: "lithiumtetrahydridoaluminateIII",
  },
  {
    q: "Which of the following substances when boiled with aqueous solution of sodium hydroxide would be hydrolyzed i.protein ii.Fat iii.polythene",
    opt: ["i", "ii", "i and ii", "ii and iii"],
    ans: "i and ii",
  },

  {
    q: "Which of the following statements about intermolecular distances and cohesive forces between gas molecules is correct",
    opt: [
      "They are both large",
      "They are both negligible",
      "They are large and negligible",
      "They are constant and negligible",
    ],
    ans: "They are both negligible",
  },
  {
    q: "Which of the following metals is the strongest reducing agent",
    opt: ["Sodium", "Sliver", "Potassium", "Copper"],
    ans: "Potassium",
  },
  {
    q: "A mixture of sugar and sulphur can be separated by",
    opt: [
      "dissolution in water, evaporation and filtration",
      "filtration, evaporation and dissolution in water",
      "dissolution in water, filtration and evaporation",
      "evaporation, dissolution in water and filtration",
    ],
    ans: "dissolution in water, filtration and evaporation",
  },

  {
    q: "A compound commonly used for sterilization and preservation of specimens and food is",
    opt: ["ethanol", "benzene", "ether", "ammonia"],
    ans: "ethanol",
  },

  {
    q: "Elements in the same period in the periodic table have the same",
    opt: [
      "number of shells",
      "atomic number",
      "chemical properties",
      "physical properties",
    ],
    ans: "number of shells",
  },

  {
    q: "Stainless steel is used for making",
    opt: ["magnets", "tools", "coins and medals", "moving parts of clocks"],
    ans: "tools",
  },

  {
    q: "An effect of thermal pollution on water bodies that the",
    opt: [
      "Volume of water reduces",
      "volume of chemical waste increase",
      "level of oxides of nitrogen increase",
      "level of oxygen reduces",
    ],
    ans: "level of oxygen reduces",
  },

  {
    q: "By means of filtration,one component can be obtained pure from an aqueous mixture of sodium chloride and",
    opt: ["potassium nitrate", "sand", "lead nitrate", "sugar"],
    ans: "sand",
  },
  {
    q: "In which of the following are water molecules in the most disorderly arrangement",
    opt: ["ice at 10°C", "ice at 0°C", "water at 100°C", "Steam at 100°C"],
    ans: "Steam at 100°C",
  },

  {
    q: "200cm³ each of 0.1m solution of leadII trioxonitrate V and hydrochloric acid were mixed. Assuming that leadII chloride is completely insoluble, calculate the mass of leadII Chloride that will be precipitated.[Pb=207,Cl=35.5,N=14,O=16]",
    opt: ["2.78g", "5.56g", "8.34g", "11.12g"],
    ans: "5.56g",
  },

  {
    q: "Cotton is almost pure",
    opt: ["starch", "protein", "animal fibre", "cellulose"],
    ans: "cellulose",
  },

  {
    q: "In the periodic table,the elements that lose electrons most readily belong to",
    opt: ["group IA", "group IA", "group IIA", "group VIIA"],
    ans: "group IA",
  },

  {
    q: "Which of the following properties increases down the group in the periodic table",
    opt: [
      "atomic radius",
      "electronegativity",
      "electron affinity",
      "ionization energy",
    ],
    ans: "atomic radius",
  },

  {
    q: "The following are ores of metals EXCEPT",
    opt: ["bauxite", "dolomite", "haematite", "graphite"],
    ans: "graphite",
  },

  {
    q: "To which group and period respectively does an element with 15 electrons belong",
    opt: ["3 and 3", "3 and 5", "5 and 3", "5 and 5"],
    ans: "5 and 3",
  },
];
export const biology = [
  {
    q: "which of the following best defines biology",
    opt: [
      "The study of life",
      "The study of plants and animals",
      "The study of the existence of things around us",
    ],
    ans: "The study of life",
  },
  {
    q: "All these are branches of biology except",
    opt: ["Genetics", "Morphology", "Locomotion", "Anatomy"],
    ans: "Locomotion",
  },
  {
    q: "__ involves the study of external features of plants and animals",
    opt: ["Anatomy", "Morphology", "Physiology", "Genetics"],
    ans: "Morphology",
  },
  {
    q: "How many level of organizations do we have ",
    opt: ["3", "6", "5", "4"],
    ans: "4",
  },
  {
    q: "The smallest unit of living organism is__",
    opt: ["cell", "tissue", "organ", "organism"],
    ans: "cell",
  },
  {
    q: "The system of classification of living things was introduced by who?",
    opt: [
      " Car Von Linne (1707-1778)",
      "carolus linneaus",
      "Car Bon Linne (1707- 1778)",
      "carolus linnaus",
    ],
    ans: "Car Von Linne (1707-1778)",
  },
  {
    q: "The basic unit of classification of living things is__",
    opt: ["family", "class", "species"],
    ans: "species",
  },
  {
    q: "In Binomial system of nomenclature, the first name is ______ and it's always begins with a capital letter while the second name is ______ and begins with small letter",
    opt: [
      "genetic name and specimen name",
      "specific name and genetic name",
      "generic name and specific name",
      "specific name and generic name",
    ],
    ans: "generic name and specific name",
  },
  {
    q: "The scientific name of cocoa is __",
    opt: ["zea mays", "oryza sativa", "citrus sinesis", "theobroma cacao"],
    ans: "theobroma cacao",
  },
  {
    q: "An example of a protozoa is _?",
    opt: ["blue-green alga", "cyanophyta", "amoeba", "rhizopus"],
    ans: "amoeba",
  },
  {
    q: "Euglenophyta is a phyla under which kingdom?",
    opt: ["fungi", "protista", "monera", "animalia"],
    ans: "protista",
  },
  {
    q: "chlorophyta is also known as __?",
    opt: ["green algae", "blue -green algae", "red algae", "brown algae"],
    ans: "green algae",
  },
  {
    q: "All these are characteristics of viruses except",
    opt: [
      "virus is microscopic in nature",
      "it possesses  the RNA or DNA",
      "it respires, feed and excrete",
      "it is responsible for the causes of many chronic diseases like AIDS",
    ],
    ans: "it respires, feeds and excretes",
  },
  {
    q: "schizophyta & cyanophyta are two types of phyla under which kingdom?",
    opt: ["monera", "protista", "fungi", "plantae"],
    ans: "monera",
  },
];
export const maths = [
  {
    q: "Express 0.0040752 to three significant figures.",
    opt: ["0.00475", "0.0041", "0.00408", "0.4075", "0.004"],
    ans: "0.00408",
  },
  {
    q: "Express 10000800 in standard form",
    opt: [
      "1.00008×10^7",
      "1.00008×10^5",
      "1.00008×10^2",
      "1.00008×10^–5",
      "1.00008×10^–7",
    ],
    ans: "1.00008×10^7",
  },
  {
    q: "Evaluate 11011+11110 base two ",
    opt: ["111010", "111001", "110001", "101001", "100011"],
    ans: "111001",
  },
  {
    q: "A group of market women sell at least one of yam, plantain and maize. 12 of them sell maize, 10 sell yam and 14 sell plantain. 5 sell plantain and maize, 4 sell yam and maize, 2 sell yam and plantain only while 3 sell all the three items. How many women are in the group?",
    opt: [" 25", "19", "18", "17"],
    ans: "25",
  },

  {
    q: "Find the value of X if 2√x+2√=1x−2√",
    opt: [" 3√2+4", "3√2-4", "3-2√2", "4+2√2"],
    ans: "3√2+4",
  },
  {
    q: "If (a2b−3c)34a−1b4c5=apbqcr What is the value of p+2q?",
    opt: ["5/2", "-5/4", "-25/4", "-10"],
    ans: "5/2",
  },

  {
    q: "What is the answer when 24346 is divided by 426?",
    opt: ["236", "356", "526", "556"],
    ans: "356",
  },

  {
    q: "The sum of two numbers is twice their difference. If the difference of the numbers is P, find the larger of the two numbers",
    opt: ["p/2", "3p/2", "5p/2", "3p"],
    ans: "3p/2",
  },

  {
    q: "A binary operation * is defined by a*b = ab+a+b for any real number a and b. if the identity element is zero, find the inverse of 2 under this operation.",
    opt: ["2/3", "1/2", "-1/2", "-2/3"],
    ans: "-2/3",
  },
  {
    q: "Factorize completely x2+2xy+y2+3x+3y−18.",
    opt: [
      "(x+y+6)(x+y-3)",
      "(x-y-6)(x-y+3)",
      "(x-y+6)(x-y-3)",
      "(x+y-6)(x+y+3)",
    ],
    ans: "(x+y+6)(x+y-3)",
  },
];
