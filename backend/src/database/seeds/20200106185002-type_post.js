module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'type_posts',
      [
        {
          id: 1,
          title: 'Páginas',
        },
        {
          id: 2,
          title: 'Documentos',
        },
        {
          id: 3,
          title: 'Tutoriais',
        },
        {
          id: 4,
          title: 'Reuniões',
        },
      ],
      {}
    );
  },

  down: () => {},
};
