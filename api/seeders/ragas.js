"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ragas",
      [
        {
          name: "Bhairav",
          time: "Pratham",
          mood: "serious",
          description:
            "Raag Bhairav is often referred to as the king of morning Raags. It produces a rich atmosphere. The Rishabh and Dhaivat used here are oscillating which is strongly recommended in this Raag and it makes the Raag mood intense.Mukhya-Ang:`r r S ; d d P ; G m d d P ; G m r r S ; ,N S;` Aaroh-Avroh:`S r G m P d N S' - S' N d P m G r S; ` ",
          image: "(252,232,131) (255,179,71) (255,153,51)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yaman",
          time: "Pancham",
          mood: "love,devotion,happy,soothing",
          description:
            "Yaman Raga belonging to the Kalyan thaat. It is a sampurna raga, meaning it has all seven notes (sa, re, ga, ma, pa, dha, ni) in its Aaroh and Avroh scale.Yaman is said to have a soothing effect on the listener and is also considered to be a raga of love and devotion. Many Musicians have their own version of Yaman, some of the famous versions are Vilambit Yaman, Drut Yaman, Yaman Kalyan, Yaman Barwa, Yaman Manjh, Yaman Todi, etc. Mukhya-Ang:`	,N R G ; ,N R M G ; M P ; M D P N D P M R G R ; ,N R ,D ,N S;` Aaroh-Avroh:`,N R S - N R G M P D N S' - S' N D P M G R S ,N R S`   ",
          image: "(255,0,255,1) (0,0,255,1) (255,255,255,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bilaskhani Todi",
          time: "Dwitiya",
          mood: "devotional,contemplative",
          description:
            "Legend has it that this raga was created by Bilas Khan, son of Miyan Tansen, after his father's death. It is said that while trying to sing Todi, his father's favorite raga, in the wake of his father, Bilas was so grief-stricken that he mixed up his notes. That gave birth to this raga, and that Tansen's corpse moved one hand in approval of the new melody.Arohana:` Sa re ga Pa dha Sa` Avarohana: `re ni dha Ma ga re Sa`",
          image: "(255,255,255) (192,192,192) (128,128,128)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ahir Bhairav",
          time: "Pratham",
          mood: "Melancholic, Melancholic, longing, devotion, peaceful,contemplative,meditative",
          description:
            " Ahir Bhairav considered a royal raga and is associated with the Bhairav thata, which is one of the 10 main thatas (parent scales) in Indian classical music. The scale of Raag Aheer Bhairav is similar to the natural minor scale in Western music, and it is known for its soothing and contemplative qualities. It is often used in devotional music and is considered a suitable raga for singing bhajans (devotional songs) and kirtans (devotional chanting).",
          image:
            "(255,255,240,1) (255,0,255,1) (255,165,0,1) (255,215,0,1) (0,255,255,1) (0,0,255,1) (255,0,0,1) (255,255,0,1) (0,255,0,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Durga",
          time: "Pratham",
          mood: "joy,happiness,joyful,celebrations,festive",
          description:
            "Raga Durga belonging to the Durga thaat. It is a sampurna raga, meaning it has all seven notes (sa, re, ga, ma, pa, dha, ni) in its ascending and descending scale.It is often used in light classical music forms such as thumri, dadra and bhajans. It is said to evoke feelings of joy and happiness, and is considered to be suitable for celebrations and festive occasions. Raga Durga is also associated with the Hindu goddess Durga, who is considered to be the embodiment of strength and power",
          image: "(255,255,0,1) (255,165,0,1) (0,128,0,1)  (0,0,255,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bhopali",
          time: "Pancham",
          mood: " longing, separation, love,devotion",
          description:
            "Raga Bhopali is a raga of the Bhairavi That, which is known for its emotional depth and expressiveness. It is typically played in the late night and is considered to be a soothing and contemplative raga. The notes used in Raga Bhopali create a sense of longing and separation, making it an ideal choice for expressing emotions of love, devotion, and nostalgia.In terms of its technical structure, Raga Bhopali is considered a sampurna raga, which means it uses all seven notes in its scale. It is also characterized by the use of shuddha madhyam (natural 3rd) and teevra madhyam (sharpened 3rd) which gives it a unique and distinctive sound, and makes it distinct from other ragas in the Bhairavi That. Raga Bhopali is often performed in the form of a slow-paced alap, jod and jhala, followed by a faster-paced gat in vilambit (slow) and drut (fast) laya. It is usually accompanied by tabla and harmonium. It is also used in light classical forms such as thumri, and ghazals, and sometimes it is used in film music.",
          image: "(255,250,205,1) (255,228,196,1) (255,218,185,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Desh",
          time: "Pratham",
          mood: "Patriotism, Nationalism",
          description:
            "Raga Desh belongs to the Kalyan That (parent scale). It is considered a morning raga and is usually performed in the early morning hours.The scale of Raga Desh uses the notes shuddha rishabh, shuddha madhyam, and shuddha dhaivat which creates a sense of peace and serenity. It is said to evoke feelings of devotion and devotion to the country, hence its name Desh, which means (country) in Hindi. It is also said to be associated with the sense of patriotism and national pride.The raga is characterized by its soothing and peaceful melody, it is often used in devotional music and is considered suitable for singing in a contemplative and meditative mood.",
          image: "(0,255,0,1) (255,255,255,1) (255,153,51,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Khamaj",
          time: "Shasth",
          mood: "love, longing, devotion,",
          description:
            "Khamaj is a North Indian classical raga, belonging to the Khamaj thaat. It is a romantic and melancholic raga, often evoking feelings of longing and separation. The notes used in the raga include Sa, Re, Ga, Ma, Pa, Dha, and Ni and the ga and ni shudh (natural) and other notes are slightly flattened. It is usually performed during the evening hours, and is considered to be well-suited for light classical forms such as thumri, dadra, and ghazal.",
          image:
            "(255,192,203,1) (255,255,0,1) (255,215,0,1) (255,0,255,1) (255,165,0,1) (0,255,0,1) (255,165,0,1) (0,255,255,1) (0,0,255,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bageshri",
          time: "Shasth",
          mood: "longing, separation, sorrow, romantic",
          description:
            "Raga Bageshri is a raga in Hindustani classical music that belongs to the Bageshri That (parent scale). It is considered a night raga and is usually performed in the late evening or night hours. Raga Bageshri is known for its melancholic and evocative melody, and it is said to evoke feelings of longing, separation, and sorrow.The scale of Raga Bageshri uses the notes shuddha madhyam and teevra madhyam (sharpened fourth).It is also said to be suitable for singing in a romantic or devotional context. ",
          image:
            "(255,255,240,1) (255,0,255,1) (255,165,0,1) (255,215,0,1) (0,255,255,1) (0,0,255,1) (255,0,0,1) (255,255,0,1) (0,255,0,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brindabani Sarag",
          time: "Pratham",
          mood: "purity, serenity, devotion, enlightenment, wisdom, calmness",
          description:
            "Brindabani Sarag is a raga in Hindustani classical music that belongs to the Bhairav That (parent scale). It is considered a morning raga and is usually performed in the early morning hours. Raga Brindabani Sarag is known for its devotional and serene melody, and it is said to evoke feelings of devotion and spirituality.",
          image: "(255,255,255,1) (255,255,0,1) (173,216,230,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marwa",
          time: "Tritiya",
          mood: "introspection,longing",
          description:
            "Raga Marwa is a raga in Hindustani classical music that belongs to the Marwa That (parent scale). It is considered a morning raga and is usually performed in the early morning hours. Raga Marwa is known for its melancholic and contemplative melody, and it is said to evoke feelings of introspection and longing.The scale of Raga Marwa uses the notes shuddha rishabh and shuddha madhyam (natural second and natural fourth) which creates a sense of contemplative and melancholic melody.",
          image: "(128,128,128,1) (0,0,255,1) (0,128,0,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Purvi",
          time: "Chaturth",
          mood: "serenity, calmness,purity,contemplation",
          description:
            "Purvi is a raga in the Hindustani classical music tradition. It is a member of the Kalyan Thaat and is considered to be a morning raga. It is typically performed in the early morning hours, and it is said to evoke feelings of serenity and calmness. The scale of Raga Purvi uses the notes shuddha rishabh and komal dhaivat (natural second and flat seventh) which creates a sense of serene and calming melody. Raga Purvi is typically performed in a slow to medium tempo, with a lot of meend (glides) and gamak (ornamentation).",
          image: "(0,0,255,1) (0,128,0,1) (255,255,255,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darbari",
          time: "Saptami",
          mood: "serenity, calmness, contemplation ,depth, contemplation, introspection",
          description:
            "The Raag Darbari, said to be created by Miya Tansen, results in a sweet and heavy atmosphere.Raga Darbari is a night raga, it is generally performed in the late evening or early night, it is considered to be a heavy and serious raga. The melody is contemplative, introspective and serene, it uses the notes shuddha madhyam and shuddha nishad (natural fourth and natural seventh) which creates a sense of contemplative, introspective and serene melody. Raga Darbari is typically performed in a slow to medium tempo, with a lot of meend (glides) and gamak (ornamentation).Aaroh-Avroh: `S R g m P d n S' - S' d n P m P g m R S` ",
          image: "(0,0,255,1) (0,0,0,1) (128,0,128,1)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("ragas", null, {});
  },
};
