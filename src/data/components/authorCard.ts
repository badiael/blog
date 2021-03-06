export function AuthorCard(props: {
  src: string
  name: string
  twitterHandle: string
  twitterLink: string
}): ComponentReference {
  return {
    type: 'AuthorCard',
    props,
  }
}

const AuthorCardComponent: Component = {
  name: 'AuthorCard',
  content: {
    name: 'AuthorCard',
    type: 'View',
    source: 'teleport-elements-core',
    style: {
      display: 'flex',
    },
    children: [
      {
        source: 'teleport-elements-core',
        type: 'Image',
        name: 'author',
        style: {
          height: '60px',
          width: '60px',
          borderRadius: '50%',
          border: '5px solid #fff',
        },
        props: {
          src: '$props.src',
          alt: '$props.name',
        },
      },
      {
        source: 'teleport-elements-core',
        type: 'View',
        name: 'Author',
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '15px',
          lineHeight: '1.2',
        },
        children: [
          {
            source: 'teleport-elements-core',
            type: 'Text',
            name: 'Name',
            children: '$props.name',
          },
          {
            source: 'teleport-elements-core',
            type: 'Link',
            name: 'Role',
            children: [
              {
                name: 'link',
                source: 'teleport-elements-core',
                type: 'A',
                children: '$props.twitterHandle',
                style: {
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                },
              },
            ],
            props: {
              href: '$props.twitterLink',
            },
          },
        ],
      },
    ],
  },
}

export default AuthorCardComponent
