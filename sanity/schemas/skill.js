import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the skill"
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of the skilll from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
})
