"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "songs",
      [
        {
          title: "Raga Yaman- Shubha Mudgal (Album: Maestro's Choice )",
          youtube_link: "https://youtu.be/VmOvwFvkVao",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Yaman | Vid. Kaushiki Chakraborty | Vocal",
          youtube_link: "https://youtu.be/BVL3fO8dUdk",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Ustad Rashid Khan - Raag Yaman",
          youtube_link: "https://youtu.be/msynlBeksks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Pandit Ajoy Chakraborty - Yaman",
          youtube_link: "https://youtu.be/NPGtRSKV4Vk",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:
            "Raga Yaman Kalyan Album: Lifestory Of A Legend, Bhimsen Joshi",
          youtube_link: "https://youtu.be/S0ioBZItZ2A",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Yaman By Padma Shree Pt M Venkatesh Kumar",
          youtube_link: "https://youtu.be/SbN_uDaUex0",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Ajoy Chakraborty Raga Bilaskhani todi",
          youtube_link: "https://youtu.be/IHo1AzWHeV4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Ja Ja Re Ja - Bilaskhani Todi | Pandit Jasraj",
          youtube_link: "https://youtu.be/3c5_Sff7JVE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:
            "Bandish - Raag Bilas khani todi - Kaahe karat mose jhagda pritam pyare",
          youtube_link: "https://youtu.be/fos1a9hblFw",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Ustad Amir Khan Raga Bilashkani Todi",
          youtube_link: "https://youtu.be/ElfURyrWYII",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Kishori Amonkar - Bilaskhani Todi",
          youtube_link: "https://youtu.be/Lx62q3KkEy8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Bhairav - Ustad Rashid Khan",
          youtube_link: "https://youtu.be/b0dm0th5bnY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Pandit Ajoy Chakraborty - Bhairav",
          youtube_link: "https://youtu.be/kvftN50z6W4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Bhairav | Album: Lifestory Of A Legend, Bhimsen Joshi",
          youtube_link: "https://youtu.be/NMHoLg5PxRM",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Bhairav by Padmashri Pandit Venkatesh Kumar",
          youtube_link: "https://youtu.be/2g84HNvKJUE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga: Ahir Bhairav (Bandish in Teental)",
          youtube_link: "https://youtu.be/Wx-9A-mgif8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Ahir Bhairav Pandit M. Venkateshkumar, Dharwad",
          youtube_link: "https://youtu.be/p3LfeDd70Ts",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:
            "Albela Sajan Aayo Re by Ustad Rashid Khan in Raag Ahir Bhairav",
          youtube_link: "https://youtu.be/5k_QRPlk3w0",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Ahir Bhairav - Kaushiki Chakraborty",
          youtube_link: "https://youtu.be/DdRsefSImM8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Ahir Bhairav - Ashwini Bhide",
          youtube_link: "https://youtu.be/3xSsJ9GC6lQ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Ustad Rashid Khan - Raag Bhopali",
          youtube_link: "https://youtu.be/zJqjXZq1Kw0",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Bhopali - Ustad Bade Ghulam Ali Khan ",
          youtube_link: "https://youtu.be/MFf5QiezPDQ",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Bhupali Pandit D V Paluskar",
          youtube_link: "https://youtu.be/iz_7LWIOa5c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Pandit Ullhas Kashalkar | Raag Bhupali",
          youtube_link: "https://youtu.be/DLuMNQWK3fY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Des | Pandit Jasraj (Album: Thaat Khamaj) ",
          youtube_link: "https://youtu.be/kwgeiUq_FFc",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Desh by Ustad Rashid Khan",
          youtube_link: "https://youtu.be/DVRJEb6iK6k",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Des by Ustad Mubarik Ali Khan Sahib",
          youtube_link: "https://youtu.be/H53-Ts0USg0",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Desh - Ustad Bade Ghulam Ali Khan",
          youtube_link: "https://youtu.be/0mFJ9WL_f7w",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raag Khamaj Pt. Ajoy Chakraborty",
          youtube_link: "https://youtu.be/S18t5iaNT-4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Jashn-E-Deccan 2016: Pt. Venkatesh Kumar, Raag Khamaj",
          youtube_link: "https://youtu.be/Uf8hHeAJkN4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "BAGESHREE by Kaushiki Chakraborty",
          youtube_link: "https://youtu.be/I9tM2wKGt9I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Bageshri | Pandit Jasraj",
          youtube_link: "https://youtu.be/9A2i6cVYq7g",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Pt. Venkatesh Kumar: Raag Durga",
          youtube_link: "https://youtu.be/K7H-ptuxlr8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Ustad Rashid Khan presents Raga Durga",
          youtube_link: "https://youtu.be/vEzPSDQbXTs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Madhmad Sarang - Pandit Jasraj",
          youtube_link: "https://youtu.be/vxGSeCi72nE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Brindabani Sarang",
          youtube_link: "https://youtu.be/13_Mbm_zrhg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Raga Marwa - Pandit Jasraj ",
          youtube_link: "https://youtu.be/ZFXkiSCLNt8",
          created_at: new Date(),
          updated_at: new Date(),
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
    return queryInterface.bulkDelete("songs", null, {});
  },
};
