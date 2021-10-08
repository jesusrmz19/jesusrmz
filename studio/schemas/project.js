export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'link',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'repo',
      title: 'Repo Link',
      type: 'url',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altImage',
      title: 'Alt Text for Image',
      type: 'string',
    },
    {
      title: 'Project Technologies',
      name: 'projectTechnologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'HTML', value: 'html5' },
          { title: 'CSS', value: 'css3-alt' },
          { title: 'SCSS', value: 'sass' },
          { title: 'JavaScript', value: 'js-square' },
          { title: 'Parcel', value: 'box-open' },
          { title: 'React', value: 'react' },
          { title: 'Gulp', value: 'gulp' },
        ],
      },
    },
  ],
};
