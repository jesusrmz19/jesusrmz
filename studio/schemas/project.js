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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date Finished',
      type: 'datetime',
    },
    {
      name: 'bgcolor',
      title: 'Background Color',
      type: 'string',
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
      name: 'designed',
      title: 'Designed?',
      type: 'boolean',
    },
    {
      name: 'developed',
      title: 'Developed?',
      type: 'boolean',
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
