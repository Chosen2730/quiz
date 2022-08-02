const synonyms =
  "Choose the word that is NEAREST IN MEANING to the block letter word";
const antonyms =
  "Choose the word that is OPPOSITE IN MEANING to the block letter word";
const interprete =
  "Choose the BEST INTERPRETATION for the sentence among the options";
const fill = "Fill in the gap with the most appropriate word";
const phrasalVerbs =
  "Replace the PHRASAL VERB in BLOCK LETTERS with a suitable alternative verb";
export const English = [
  {
    inst: phrasalVerbs,
    q: "The foundation COMES UP WITH the idea of providing teachers in rural areas with more teaching resources",
    opt: ["refuses", "postpone", "proposes", "accepts"],
    ans: "proposes",
  },
  {
    inst: phrasalVerbs,
    q: "the government needs to develop the public transport system if it wishes to encourage more people TO GIVE UP driving private vehicles",
    opt: ["continue", "desist[from]", "consider", "testify"],
    ans: "desist[from]",
  },
  {
    inst: phrasalVerbs,
    q: "more talks by successful people I needed to CHEER students UP",
    opt: ["inspire", "refresh", "enlist", "inspect"],
    ans: "inspire",
  },
  {
    inst: phrasalVerbs,
    q: "the government decides to CUT OFF their support programs funded develop communities as they lack funding",
    opt: ["continue", "revise", "improve", "abandon"],
    ans: "abandon",
  },
  {
    inst: phrasalVerbs,
    q: "if students struggle to find information for their specific studies they can easily LOOK IT UP on the internet",
    opt: ["imitate", "beautify", "invent", "research"],
    ans: "research",
  },
  {
    inst: fill,
    q: "the newly lauched electronic gadget has really __________________-",
    opt: ["taken up", "take up", "taken off", "take off"],
    ans: "taken off",
  },
  {
    inst: fill,
    q: "the bus was almost full so it was difficult to __________________-",
    opt: ["get in", "get on", "get up"],
    ans: "get on",
  },
  {
    inst: fill,
    q: "the soldier will be brought to trial because it's considered to have __________________- state secrets to the enemy ",
    opt: ["backed up", "given away", "broken out", "turned off"],
    ans: "given away",
  },
  {
    inst: fill,
    q: "i thought the movie was going to end but it just __________________-",
    opt: ["dragged in", "dragged on", "dragged into"],
    ans: "dragged on",
  },
  {
    inst: fill,
    q: "oh no! the list of building has __________________ again",
    opt: ["broken down", "broken up", "broken in"],
    ans: "broken down",
  },
  {
    inst: fill,
    q: "in a recent survey it was found that most manager's time it's taken __________________- with paperwork and writing report",
    opt: ["up", "down", "by"],
    ans: "up",
  },
  {
    inst: fill,
    q: "sorry i'm late, my car __________________ petrol",
    opt: ["ran out", "ran out of", "ran out on"],
    ans: "ran out of",
  },
  {
    inst: fill,
    q: "i painted __________________ to them the possible consequences of their actions",
    opt: ["with", "out", "to"],
    ans: "out",
  },
  {
    inst: fill,
    q: "the english teacher gave the class a list of work to __________________ the meaning of ",
    opt: ["set up", "run over", "look up", "check in"],
    ans: "look up",
  },
  {
    inst: fill,
    q: "the team managed to __________________ the police barricade",
    opt: ["break in", "break through", "break on"],
    ans: "break through",
  },
  {
    inst: fill,
    q: "in my opinon, money really brings __________________- the worst people{greed,jealousy and envy}",
    opt: ["off", "down", "out"],
    ans: "out",
  },
  {
    inst: fill,
    q: "there was nothing good on tv so i turned it __________________- and went to bed ",
    opt: ["off", "on", "up", "down"],
    ans: "off",
  },
  {
    inst: fill,
    q: "we have to __________________- my notes once again to make sure we have understood all important details before the exam",
    opt: ["stand for", "go over", "pull down", "put up with"],
    ans: "pull down",
  },
  {
    inst: fill,
    q: "friends that help you to __________________ a difficult time in your life ",
    opt: ["get in", "get around", "get buy", "get through"],
    ans: "get through",
  },
  {
    inst: fill,
    q: "music is too loud. can you turn it __________________ a bit?",
    opt: ["up", "out", "off", "down"],
    ans: "off",
  },
  {
    inst: fill,
    q: "__________________! things will definitely been better.",
    opt: ["cheer on", "cheer at", "cheer up"],
    ans: "cheer up",
  },
  {
    inst: fill,
    q: "that's a good recommendation. i'm happy to __________________ it",
    opt: ["talk down to", "put on", "looked for", "go along with"],
    ans: "go along with",
  },
  {
    inst: fill,
    q: "Adeyemi and Adewale no longer do business together . They fell __________________- over money and have stopped speaking to each other ",
    opt: ["from", "out", "with"],
    ans: "out",
  },
  {
    inst: fill,
    q: "the police are making attempts to __________________ on drunk drivers",
    opt: ["crack up", "crackdown", "crack through"],
    ans: "crack up",
  },
  {
    inst: fill,
    q: "today, there's a tendency in our culture to __________________- the people who have not been to a university",
    opt: ["take off", "show off", "turnover", "look down on"],
    ans: "look down on",
  },
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
    q: "A car accelerates uniformly from rest at 4ms-2. How far will it travel in the fifth complete second.",
    opt: ["100m", "50m", "32m", "18m"],
    ans: "18m",
  },

  {
    q: "What is the acceleration between two points on a velocity time graph which has coordinate (10s, 15ms-1) and (20s, 35ms-1)",
    opt: ["1.75ms-²", "3.50ms-²", "1.00ms-²", "2.00ms-²"],
    ans: "2.00ms-²",
  },

  {
    q: "A bullet fired vertically upward from a gun held 2.0m above the ground reaches its maximum height in 4.0s. Calculate its initial velocity.",
    opt: ["10ms-¹", "8ms-¹", "40ms-¹", "20ms-¹"],
    ans: "40ms-¹",
  },

  {
    q: "Two particles X and Y starting from rest cover the same distance. The acceleration of X is twice that of Y. The ratio of the time taken by X to that taken by Y is.",
    opt: ["1/2", "2", "1√2", "√2"],
    ans: "1√2",
  },

  {
    q: "In free fall, a body of mass 1kg drops from a height of 125m from rest in 5s. How long will it take another body of mass 2kg to fall from rest from the same height? [g=10ms-²]",
    opt: ["5s", "10s", "12s", "15s"],
    ans: "5s",
  },

  {
    q: "A small metal ball is thrown vertically upwards from the top of a tower with an initial velocity of 20ms-1. If the ball took a total of 6s to the reach the ground level,determine the height of the tower (g=10ms-¹)",
    opt: ["60s", "80s", "100s", "120s"],
    ans: "60s",
  },

  {
    q: "A palm fruit dropped to the ground from the top of a tree 45m tall. How long does it take to reach the ground? (g=10ms-¹)",
    opt: ["9s", "4.5s", "6s", "3s"],
    ans: "3s",
  },

  {
    q: "A mango fruit drops from a branch 10m above the ground, just before hitting the ground its velocity is",
    opt: ["10√2ms-¹", "100ms-¹", "5√2ms-¹"],
    ans: "10√2ms-¹",
  },

  {
    q: "A body falls freely under gravity (g=9.8m/s²) from a height of 40m on to the top of a platform 0.8m above the ground. Its velocity on reaching the platform is.",
    opt: ["784ms-¹", "80ms-¹", "78.4ms-¹", "27.7ms-¹"],
    ans: "27.7ms-¹",
  },

  {
    q: "A motor vehicle is brought to rest from a speed of 15ms-¹ in 20s. Calculate the retardation.",
    opt: ["0.75ms-²", "1.33ms-²", "5.00ms-²", "7.50ms-²"],
    ans: "0.75ms-²",
  },

  {
    q: "Two points on a velocity time graph have coordinate (5s, 10ms-¹) and (20s, 20ms-¹) calculate the mean acceleration between the two points.",
    opt: ["0.67ms-¹", "0.83ms-¹", "1.50ms-¹", "2.00ms-¹"],
    ans: "0.67ms-¹",
  },

  {
    q: "An aeroplane lands on a runway at a speed of 180km/hour and is brought to a stop uniformly in 30s. What distance does it cover on the runway before coming to a rest?",
    opt: ["360m", "540m", "750m", "975m"],
    ans: "750m",
  },

  {
    q: "A car moving with a speed of 90km/hour was brought to rest by the application of the brakes in 10s. How far did the car travel after the brakes were applied.",
    opt: ["125m", "150m", "250m", "15km"],
    ans: "125m",
  },

  {
    q: "A particle starts from rest and moves with a constant acceleration of 0.5m/s². The distance covered by the particle in 10s is",
    opt: ["2.5m", "5.0m", "25.0m", "50.0m"],
    ans: "2.5m",
  },

  {
    q: "A body starts from rest and move with uniform acceleration of 6m/s². What distance does it cover in the third second",
    opt: ["15m", "18m", "27m", "30m"],
    ans: "15m",
  },

  {
    q: "If a car starts from rest and move with a uniform acceleration of 10m/s² for ten seconds, the distance it covers in the last ten seconds of motion is?",
    opt: ["95m", "100m", "500m", "905m"],
    ans: "95m",
  },

  {
    q: "A train has an initial velocity of 44m/s and acceleration of -4m/s². Its velocity after ten seconds is",
    opt: ["2m/s", "4m/s", "8m/s", "12m/s"],
    ans: "4m/s",
  },

  {
    q: "A boy cycles continuously through a distance of 1.0km in 5minutes. Calculate his average speed.",
    opt: ["3.33m/s", "2.30m/s", "5m/s", "15.00m/s"],
    ans: "3.33m/s",
  },

  {
    q: "An air force jet flying with a speed of 335m/s went past an anti air craft gun. How far is the aircraft 5s later when the gun was fired",
    opt: ["838m", "3350m", "670m", "1675m"],
    ans: "1675m",
  },

  {
    q: "An object of mass 2kg moves for 5s with a uniform velocity of 100ms-¹. What is the magnitude of its acceleration ms-²",
    opt: ["2.0", "3.0", "0.0", "5.0"],
    ans: "0.0",
  },
  {
    q: "A temperature of 20° C is the same as ? ",
    opt: ["36°F", "68°F", "11.1°F", "43.1°F"],
    ans: "68°F",
  },
  {
    q: "An object is positioned between two plain mirrors inclined at right angle to each other.The object is 1 units distance from each mirror the number of images form is",
    opt: ["1", "2", "3", "4"],
    ans: "3",
  },
  {
    q: "the visible part of lights consists of the following colors",
    opt: [
      "red, indigo, infra-red, violet, yellow, green and blue",
      "Red, green, blue, violet, indigo, orange and yellow",
      "blue, ultra-violet, infra-red, red, yellow, indigo, violet, green and orange",
      "blue, red, pink, green, orange, purple, yellow",
    ],
    ans: "Red, green, blue, violet, indigo, orange and yellow",
  },
  {
    q: "An object moves with uniform speed Round a circle, it’s acceleration has",
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
    q: "Light of velocity 3.0*10^8m/s is incident on a material of refractive index n. If the velocity of light is reduced to 2.4*10^8m/s in the material ,what is n ?",
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
    q: "What is a skeleton? ",
    opt: [
      "skeleton is the bony framework of the body which provides support shape and protection to the soft tissues and organs in animals",
      "It's currently a bony framework of thr body that enables animals to move from one place to another",
      "A skeleton is a framework of the body that provides support and shape to the body",
    ],
    ans: "Skeleton is the bony framework of the body which provides support shape and protection to the soft tissues and organs in animals",
  },
  {
    q: "List the three forms of skeletal materials found in mammals",
    opt: [
      "Hydrostatic Skeleton, exoskeleton and endoskeleton",
      "Bones, cartilage and cuticles",
      "Ecdydis, cuticles and bones ",
    ],
    ans: "Bones, cartilage and cuticles",
  },

  {
    q: "Bone can be defined as ?",
    opt: [
      "The components of the verbral skeleton",
      "A tissues and a major component of vertebral skeletal",
      "None of the above",
    ],
    ans: "A tissues and a major components of vertebral skeletal",
  },

  {
    q: "The cartilage is a ____ found in the skeleton of complex vertebrates",
    opt: ["cell", "system", "tissues"],
    ans: "tissues",
  },

  {
    q: "The three types of cartilages are :",
    opt: [
      "Hyaline, ecdydis and fibro-cartilage",
      "Elastic , fibro-cartilage and moulting",
      "Elastic, fibro-cartilage and hyaline cartilage",
    ],
    ans: "Elastic, fibro-cartilage and hyaline cartilage",
  },

  {
    q: "The types of skeletons are ? ",
    opt: [
      "ecdydis, cuticles and bones",
      "bone, cartilage and cuticles",
      "endoskeleton, exoskeleton and hydrostatic skeleton",
    ],
    ans: " endoskeleton, exoskeleton and hydrostatic skeleton",
  },

  {
    q: "____ is a type of skeleton possessed by soft-bodied animals. They are fluid pressure to provide support.",
    opt: [],
    ans: "hydrostatic skeleton",
  },

  {
    q: "which of the following skeleton is found in lizard, birds, toad, fishes and mammals ?",
    opt: ["endoskeleton", "exosleton", "hydrostatic skeleton"],
    ans: "endoskeleton",
  },

  {
    q: "____ is made up of the skull, vertebral column or backbone, the ribs and sternum or breastbone",
    opt: ["axial skeleton", "appendicular skeleton", "exoskeleton"],
    ans: "axial skeleton",
  },

  {
    q: "list the 3 major parts of the skulls.",
    opt: [
      "anterior cranial fossa, posterior cranial fossa, middle cranial fossa",
      "cranium, brain box, jaw",
      "cranium, facial skeleton, jaws",
    ],
    ans: "cranium, facial skeleton, jaws",
  },

  {
    q: "The vetebral column is also known as the following except ?",
    opt: ["backbone", "vertebrae", "spinal column"],
    ans: "vertebrae",
  },

  {
    q: "How many vertebrae are found in mammals? ",
    opt: ["3", "5", "4"],
    ans: "5",
  },

  {
    q: "Where is the lumber vertebrae ? ",
    opt: ["neck region", "chest region", "upper abdomen"],
    ans: "upper abdomen",
  },

  {
    q: "Where is the caudal vertebrae found ?",
    opt: ["lower abdomen", "upper abdomen", "tail region"],
    ans: "tail region",
  },

  {
    q: "Where is the thoracic vertebrae found ?",
    opt: ["neck region", "chest region", "lower abdomen"],
    ans: "chest region",
  },

  {
    q: "How many thoracic vertebrae is found in man ?",
    opt: ["15", "11", "12"],
    ans: "12",
  },

  {
    q: "All this are features of a typical vertebrae except: ",
    opt: ["neural canal", "cervical canal", "transverse process"],
    ans: "cervical canal",
  },

  {
    q: "The axis articulates with the atlas to the _____ process ",
    opt: ["transverse", "odontoid", "facet"],
    ans: "odontoid",
  },

  {
    q: "In mammals the scapula and coracoid used to form what is called______",
    opt: ["scapular coracoid", "glenoid cavity", "pubis symphysis"],
    ans: "scapular coracoid",
  },

  {
    q: "The of fusion of the 2 halves of the pelvic gridle is called______? ",
    opt: ["scapular coracoid", "glenoid cavity", "pubis symphysis"],
    ans: "pubis symphysis",
  },

  {
    q: "a major function of the caudal verbrae is ____",
    opt: [
      "we provide attachment for tail muscles",
      "they provide support for the four limbs",
      "the support of the tail",
    ],
    ans: "the support of the tail",
  },

  {
    q: "The wristbone are followed by bones of the digits, the digits are 5 and they are called ?",
    opt: ["carpals", "metacarpals", "phalanges"],
    ans: "metacarpals",
  },

  {
    q: "where is the femur located ?",
    opt: ["shin", "thigh", "arm"],
    ans: "thigh",
  },

  {
    q: "The heamoglobin is____ ?",
    opt: ["A red blood cell", "A white blood cell", "A cell in the tissues"],
    ans: "A red blood cell",
  },
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
    q: "__________ involves the study of external features of plants and animals",
    opt: ["Anatomy", "Morphology", "Physiology", "Genetics"],
    ans: "Morphology",
  },
  {
    q: "How many level of organizations do we have ",
    opt: ["3", "6", "5", "4"],
    ans: "4",
  },
  {
    q: "The smallest unit of living organism is_________",
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
    q: "In Binomial system of nomenclature, the first name is _________ and it's always begins with a capital letter while the second name is _________ and begins with small letter",
    opt: [
      "genetic name and specimen name",
      "specific name and genetic name",
      "generic name and specific name",
      "specific name and generic name",
    ],
    ans: "generic name and specific name",
  },
  {
    q: "The scientific name of cocoa is _______",
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
    q: "Evaluate 11011 + 11110 base two ",
    opt: ["111010", "111001", "110001", "101001", "100011"],
    ans: "111001",
  },
  {
    q: "A group of market women sell at least one of yam, plantain and maize. 12 of them sell maize, 10 sell yam and 14 sell plantain. 5 sell plantain and maize, 4 sell yam and maize, 2 sell yam and plantain only while 3 sell all the three items. How many women are in the group?",
    opt: ["25", "19", "18", "17"],
    ans: "25",
  },

  {
    q: "Find the value of X if 2√x + 2√2 = 1x − 2√2",
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
    q: "Factorize completely x2 + 2xy + y2 + 3x + 3y − 18.",
    opt: [
      "(x+y+6)(x+y-3)",
      "(x-y-6)(x-y+3)",
      "(x-y+6)(x-y-3)",
      "(x+y-6)(x+y+3)",
    ],
    ans: "(x+y+6)(x+y-3)",
  },
  {
    q: "Solve the inequality 2 – x > x^2  ",
    opt: ["x < -2 or x > 1", "x > 2 or x < -1", "-1 < x < 2", "-2 > x < 1"],
    ans: "-2 > x < 1",
  },
  {
    q: "The third term of an A.P. is 4x – 2y and the 9th term is 10x – 8y. Find the common  difference. ",
    opt: ["19x – 17y", "8x – 4y", "x – y", "2x"],
    ans: "x – y",
  },
  {
    q: "A man wishes to keep his money in a savings deposit at 25% compound interest so that after  three years he can buy a car for N150,000. How much does he need to deposit?  ",
    opt: ["N112,000.50", "N96,000.00", "N85,714.28", "N76,800.00"],
    ans: "N76,800.00",
  },
  {
    q: "If (2√3 - √2 )/( √3 + 2√2 ) = m + n√6 , find the values of m and n respectively.  ",
    opt: ["1, -2", "-2, 1", "−2/5, 1", "2, 3/5"],
    ans: "-2, 1",
  },
  {
    q: "Let P = {1, 2, u, v, w, x}; Q = {2, 3, u, v, w, 5, 6, y} and R = {2, 3, 4, v, x, y}.  Determine (P - Q) n R. ",
    opt: ["{1, x}", "{x, y}", "{x}", "0"],
    ans: "{x}",
  },
  {
    q: "A two-digit number, say AB was mistakenly written as BA by an overworked student. Due  to this error, the student was working with a number bigger in value, and its difference with the  actual number is one less than the actual number. If the sum of the two digits is half a score.  What is the actual number?",
    opt: ["43", "34", "73", "37"],
    ans: "37",
  },
  {
    q: "From a point P, the bearings of two points Q and R are 67degreeW and N23degreeE respectively. If the  bearing of R from Q is N68degreeE and PQ = 150m, calculate PR. ",
    opt: ["120m", "140m", "150m", "160m"],
    ans: "150m",
  },
  {
    q: "Divide 4x^3– 3x – 1 by 2x – 1.  ",
    opt: ["2x^2– x + 1", "2x^2– x – 1", "2x^2 + x + 1", "2x^2 + x – 1"],
    ans: "2x^2 + x – 1",
  },
  {
    q: "A trader bought 100 oranges at 5 for N1.20, 20 oranges got spoilt and the remaining were  sold at for N1.50. Find the percentage gain or loss. ",
    opt: ["30% gain", "25% gain", "30% loss", "25% loss"],
    ans: "25% gain",
  },
  {
    q: "Evaluate: (0.21 x 0.072 x 0.00054) ÷ (0.006 x 1.68 x 0.063), correct to 4 s.f.  ",
    opt: ["0.01286", "0.01285", "0.1286", "0.1285"],
    ans: "0.01286",
  },
  {
    q: "The slope of the tangent to the curve y = 3x^2– 2x + 5 at the point (1, 6) is  ",
    opt: ["4", "1", "6", "5"],
    ans: "4",
  },
  {
    q: "A circle with radius 5cm has its radius increasing at the rate of 0.2 m/s. What will be the  corresponding increase in the area?  ",
    opt: ["2π", "5π", "π", "4π"],
    ans: "2π",
  },
  {
    q: "If the 9th term of an A.P. is five times the 5th term, find the relationship between a and d.",
    opt: ["2a + 2 = 0", "3a + 5d = 0", "a + 3d = 0", "a + 2d = 0."],
    ans: "a + 3d = 0",
  },
  {
    q: "The binary operation * is defined on the set of integers p and q by p * q = pq + p + q.  Find 2 * (3 * 4).  ",
    opt: ["59", "19", "67", "38"],
    ans: "59",
  },
  {
    q: "A bucket is 12cm in diameter at the top, 8cm in diameter at the bottom and 4cm deep.  Calculate its volume. ",
    opt: ["304π/3 cm3", "128π/3 cm3", "144π/3 cm3", "72π/3 cm3"],
    ans: "304π/3 cm3",
  },
  {
    q: "The sum of the interior angles of a polygon is 20 right angles. How many sides does the  polygon have?  ",
    opt: ["12", "20", "40", "10"],
    ans: "12",
  },
  {
    q: "A hunter 1.6m tall, views a bird on top of a tree at an angle of 45 degrees. If the distance  between the hunter and the tree is 10.4m, find the height of the tree.  ",
    opt: ["9.0m", "12.0m", "8.8m", "10.4m"],
    ans: "10.4m",
  },
  {
    q: "Find the value of a if the line 2y – ax + 4 = 0 is perpendicular to the line y + (x/4)-7=0  ",
    opt: ["-4", "4", "8", "-8"],
    ans: "8",
  },
  {
    q: "Find the mean of the data: 7, -3, 4, -2, 5, -9, 4, 8, -6, 12.  ",
    opt: ["3", "4", "1", "2"],
    ans: "2",
  },
  {
    q: "The probability of a student passing any exam is 2/3. If the student takes three exams, what  is the probability that he will not pass any of them?  ",
    opt: ["2/3", "4/9", "8/27", "1/27"],
    ans: "1/27",
  },
];
