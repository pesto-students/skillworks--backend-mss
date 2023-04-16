"use strict";
/** @type {import('sequelize-cli').Migration} */
const fs = require("fs");
const Axios = require("axios");
// const base64 = require("base64-img");

module.exports = {
  async up(queryInterface, Sequelize) {
    // const imgUrl =
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Shubha_Mudgal_%281%29.JPG/600px-Shubha_Mudgal_%281%29.JPG";
    // async function downloadImage(imgUrl, filePath) {
    //   const response = await Axios({
    //     imgUrl,
    //     method: "GET",
    //     responseType: "stream",
    //   });
    //   return new Promise((resolve, reject) => {
    //     response.data
    //       .pipe(fs.createWriteStream(filePath))
    //       .on("error", reject)
    //       .once("close", () => resolve(filePath));
    //   });
    // }

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "artists",
      [
        {
          firstName: "Shubha",
          lastName: "Mudgal",
          bio: "Shubha Mudgal is a renowned Indian classical vocalist, known for her performances in the Hindustani classical tradition. She has been performing and recording music for over four decades, and is considered one of the leading exponents of the Kirana gharana, a school of Indian classical music  Mudgal has performed extensively in India and abroad, and has also collaborated with a wide range of musicians from different genres. She has received several awards and accolades for her contributions to Indian classical music, including the Padma Shri and the Sangeet Natak Akademi Award. In addition to her music career, Mudgal is also known for her work as a music educator and cultural advocate. She has conducted workshops and lectures on Indian classical music, and has also served as a jury member for several music competitions. Mudgal is also actively involved in promoting and preserving Indian classical music, through her work with various cultural organizations.",
          image: "https://i.ibb.co/9p28r64/600px-Shubha-Mudgal-1.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Kaushiki",
          lastName: "Chakraborty",
          bio: "Kaushiki Chakraborty is an Indian classical vocalist who is considered one of the leading exponents of the Patiala Gharana, a style of Indian classical music. She has received numerous awards and accolades for her performances, including the Padma Shri, one of India's highest civilian honors. Chakraborty is also a trained classical dancer and has performed in various dance productions. She is also a music composer and music director. She has performed in many prestigious music festivals across the world.",
          image:
            "https://i.ibb.co/HGnVv0k/Kaushiki-Chakrabarty-2013-sq-cropped.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Ustad Rashid",
          lastName: "Khan",
          bio: "Ustad Rashid Khan is an Indian classical vocalist of the Hindustani music tradition. He is considered one of the leading exponents of the Rampur-Sahaswan gharana, a style of Indian classical music that is known for its emotional expressiveness and use of intricate vocal ornamentation. Khan began his training in music at a young age under his father and grandfather, both of whom were accomplished musicians. He has received numerous awards and accolades for his performances, including the Padma Bhushan, one of India's highest civilian honors, and the Sangeet Natak Akademi Award, India's highest award for performing artists. He has performed in many prestigious music festivals across the world",
          image:
            "https://i.ibb.co/0D5qqJc/Ustad-rashid-kan-bharat-bhavan-bhopal-4.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Pandit Ajay",
          lastName: "Chakraborty",
          bio: "Pandit Ajay Chakraborty is an Indian classical vocalist of the Hindustani music tradition. He is considered one of the leading exponents of the Patiala Gharana, a style of Indian classical music that is known for its emphasis on layakari (rhythmic intricacies) and the use of intricate vocal ornamentation. He started learning music at a very young age under his father and uncle, both of whom were accomplished musicians. He has received numerous awards and accolades for his performances, including the Sangeet Natak Akademi Award, India's highest award for performing artists. He has performed in many prestigious music festivals across the world and has also been a visiting professor at various music institutions.",
          image:
            "https://i.ibb.co/ChNjsrr/330px-Ajoy-Chakrabarty-Kolkata-2015-12-4-2128.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Pandit Bhimsen",
          lastName: "Joshi",
          bio: "Pandit Bhimsen Joshi was an Indian classical vocalist of the Hindustani music tradition. He was considered one of the greatest exponents of the Kirana gharana, a style of Indian classical music that is known for its emphasis on melody and emotional expressiveness. He began his training in music at a young age under his mother and later under several other accomplished musicians, including Sawai Gandharva, one of the leading exponents of the Kirana gharana. He was awarded the Padma Vibhushan, one of India's highest civilian honors and the Sangeet Natak Akademi Award, India's highest award for performing artists. He also received several other awards such as the Tansen Samman, the Sahitya Akademi Award and the National Film Award for Best Male Playback Singer. He has performed in many prestigious music festivals across the world and his music continues to be popular among classical music enthusiasts.",
          image: "https://i.ibb.co/bsKvCkk/Shashankwith-Bhimsen-Joshi.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Pandit M. Venkatesh",
          lastName: "Kumar",
          bio: "Pandit M. Venkatesh Kumar is an Indian Hindustani vocalist. He is best known for his rendition of devotional songs composed by Swami Haridas. He belongs to the Kirana and Gwalior Gharana.In devotional music, he is most acclaimed for his Kannada vachana and dasara pada singing.Psndit ji has recorded multiple devotional and classical CD albums.He was awarded the Padma Shri Award by the Government of India in 2016.",
          image: "https://i.ibb.co/XZ73CYj/330px-Venkatesh-Kumar.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Pandit Jasraj",
          lastName: "Joshi",
          bio: "Pandit Jasraj was an Indian classical vocalist of the Hindustani music tradition. He was considered one of the greatest exponents of the Mewati gharana, a style of Indian classical music that is known for its emphasis on melody and emotional expressiveness. He began his training in music at a young age under his father and later under several other accomplished musicians, including his elder brother, Pandit Motiram. He was awarded the Padma Vibhushan, one of India's highest civilian honors, and the Sangeet Natak Akademi Award, India's highest award for performing artists. He also received several other awards such as the Tansen Samman, the Sahitya Akademi Award and the National Film Award for Best Male Playback Singer. He has performed in many prestigious music festivals across the world and his music continues to be popular among classical music enthusiasts. He passed away on 17th August 2020",
          image:
            "https://i.ibb.co/3z1td38/330px-Pandit-Jasraj-at-Bhopal-2015.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Ustad Amir",
          lastName: "Khan",
          bio: "Ustad Amir Khan was an Indian classical vocalist of the Hindustani music tradition. He was considered one of the leading exponents of the Indore gharana, a style of Indian classical music that is known for its emphasis on layakari (rhythmic intricacies) and the use of intricate vocal ornamentation. He began his training in music at a young age under his father, Ustad Alladiya Khan, who was one of the leading exponents of the Indore gharana. He was awarded the Padma Bhushan, one of India's highest civilian honors and the Sangeet Natak Akademi Award, India's highest award for performing artists. He has performed in many prestigious music festivals across the world and his music continues to be popular among classical music enthusiasts. He passed away on 13 February 1974.",
          image: "https://i.ibb.co/8Bv2dn5/AmirKhan.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Kishori",
          lastName: "Amonkar",
          bio: "Kishori Amonkar was an Indian classical vocalist of the Hindustani music tradition. She was considered one of the leading exponents of the Jaipur-Atrauli gharana, a style of Indian classical music that is known for its emphasis on melody and emotional expressiveness. She began her training in music at a young age under her mother, Mogubai Kurdikar, who was one of the leading exponents of the Jaipur-Atrauli gharana. She was awarded the Padma Bhushan, one of India's highest civilian honors, and the Sangeet Natak Akademi Award, India's highest award for performing artists. She also received several other awards such as the Tansen Samman and the National Film Award for Best Female Playback Singer. She has performed in many prestigious music festivals across the world and her music continues to be popular among classical music enthusiasts. She passed away on 3 April 2017.",
          image: "https://i.ibb.co/W5ghRM0/Kishori-Amankar.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Ashwini",
          lastName: "Bhide-Deshpande",
          bio: "Ashwini Bhide-Deshpande is an Indian classical vocalist of the Hindustani music tradition. She is considered one of the leading exponents of the Jaipur-Atrauli gharana, a style of Indian classical music that is known for its emphasis on melody and emotional expressiveness. She began her training in music at a young age under her mother, Smt. Sushila Bhave-Deshpande, who was a renowned classical vocalist and later under late Smt. Kishori Amonkar. She has received numerous awards and accolades for her performances, including the Sangeet Natak Akademi Award, India's highest award for performing artists, and the prestigious Tansen award by the Government of Madhya Pradesh. She has performed in many prestigious music festivals across the world and also been a visiting professor at various music institutions.",
          image:
            "https://i.ibb.co/6nWxt1r/Ashwini-Bhide-Deshpande-Performing-at-Rajarani-Music-Festival-2016-Bhubaneswar-Odisha-India-09.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Ustad Bade Gulam Ali",
          lastName: "Khan",
          bio: "Ustad Bade Ghulam Ali Khan was an Indian classical vocalist of the Hindustani music tradition. He was considered one of the greatest exponents of the Patiala gharana, a style of Indian classical music that is known for its emphasis on layakari (rhythmic intricacies) and the use of intricate vocal ornamentation. He began his training in music at a young age under his father, Ustad Ali Baksh Khan, who was one of the leading exponents of the Patiala gharana. He was awarded the Padma Bhushan, one of India's highest civilian honors and the Sangeet Natak Akademi Award, India's highest award for performing artists. He has performed in many prestigious music festivals across the world and his music continues to be popular among classical music enthusiasts. He passed away on 25 April 1968.",
          image:
            "https://i.ibb.co/2YcBB0M/330px-Ustad-Bade-Ghulam-Ali-Khan.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Pandit Dattatreya Vishn",
          lastName: "Paluskar",
          bio: "Pandit D. V. Paluskar was an Indian classical vocalist of the Hindustani music tradition. He was considered one of the leading exponents of the Gwalior gharana, a style of Indian classical music that is known for its emphasis on layakari (rhythmic intricacies) and the use of intricate vocal ornamentation. He began his training in music at a young age under his father, Pandit Vishnu Digambar Paluskar, who was one of the leading exponents of the Gwalior gharana. He was awarded the Padma Bhushan, one of India's highest civilian honors and the Sangeet Natak Akademi Award, India's highest award for performing artists. He has performed in many prestigious music festivals across the world and his music continues to be popular among classical music enthusiasts. He passed away on 15 October 1955.",
          image: "https://i.ibb.co/LhTL8BR/D-V-Paluskar.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Pandit Ulhas",
          lastName: "Kashalkar",
          bio: "Pandit Ulhas Kashalkar is an Indian classical vocalist of the Hindustani music tradition. He is considered one of the leading exponents of the Gwalior gharana, a style of Indian classical music that is known for its emphasis on layakari (rhythmic intricacies) and the use of intricate vocal ornamentation. He began his training in music at a young age under his father, Pandit Rambhau Kashalkar, and later under several other accomplished musicians, including Pandit D V Paluskar who was also a prominent representative of Gwalior Gharana. He has received numerous awards and accolades for his performances, including the Sangeet Natak Akademi Award, India's highest award for performing artists. He has performed in many prestigious music festivals across the world and is also a visiting professor at various music institutions.",
          image: "https://i.ibb.co/PFZZKvW/Ulhas-2011.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstName: "Ustad Mubarak Ali",
          lastName: "Khan",
          bio: "Ustad Mubarak Ali Khan is a Pakistani classical vocalist of the Hindustani music tradition. He is considered one of the leading exponents of the Patiala gharana, a style of Indian classical music that is known for its emphasis on layakari (rhythmic intricacies) and the use of intricate vocal ornamentation. He began his training in music at a young age under his father, Ustad Ghulam Ali Khan, who was one of the leading exponents of the Patiala gharana. He has performed in many prestigious music festivals across the world and his music continues to be popular among classical music enthusiasts. He is also considered as one of the leading classical vocalist of Pakistan and has been awarded several awards and honors for his contributions to music.",
          image: "https://i.ibb.co/0XYjgkj/mubarak-Alikhan.jpg",
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
    return queryInterface.bulkDelete("artists", null, {});
  },
};
