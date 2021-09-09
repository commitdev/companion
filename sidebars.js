const autogenerated = 'autogenerated'
const category = 'category'

module.exports = {
  journeys: [
    'journeys/get-started',
    {
      type: category,
      label: '1st Engineer',
      collapsible: false,
      items: [
        {
          type: autogenerated,
          dirName: 'journeys/first-engineer'
        }
      ]
    },
  ],
};