interface DataState {
  id: number;
  avatar: string;
  name: string;
  description: string;
  skills: string[];
}

type DataProps = DataState[];

const Data: DataProps = [
  {
    id: 1,
    avatar:
      'https://portfolioweb.storage.iran.liara.space/Images/Portfolio/SouthernRecipes/Main/1.jpg',
    name: 'javascript',
    description:
      'Create an empty image instance using new Image(). Then set its attributes like (src, height, width, alt, title, etc). Finally, insert it into the document.',
    skills: ['html5', 'css3', 'javascript', 'typescript'],
  },
  {
    id: 2,
    avatar:
      'https://portfolioweb.storage.iran.liara.space/Images/Portfolio/SouthernRecipes/Main/1.jpg',
    name: 'typescript',
    description:
      'Create an empty image instance using new Image(). Then set its attributes like (src, height, width, alt, title, etc). Finally, insert it into the document.',
    skills: ['html5', 'css3', 'javascript', 'typescript'],
  },
  {
    id: 3,
    avatar:
      'https://portfolioweb.storage.iran.liara.space/Images/Portfolio/SouthernRecipes/Main/1.jpg',
    name: 'next.js',
    description:
      'Create an empty image instance using new Image(). Then set its attributes like (src, height, width, alt, title, etc). Finally, insert it into the document.',
    skills: ['html5', 'css3', 'javascript', 'typescript'],
  },
];

export { Data };
