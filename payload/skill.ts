import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3
    }
  ],
};

const backEnd: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Spring Framework',
      level: 3
    },
    {
      title: 'Spring boot',
      level: 3
    },
    {
      title: 'eGov Framework',
      level: 2
    },
    {
      title: 'MyBatis',
      level: 3
    },
    {
      title: 'JPA',
      level: 3
    }
  ],
};

const frontEnd: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'jQuery',
      level: 3
    },
    {
      title: 'JSP',
      level: 3
    },
    {
      title: 'HTML5',
      level: 3
    },
    {
      title: 'CSS3',
      level: 3
    }
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MariaDB',
      level: 3
    },
    {
      title: 'MongoDB',
      level: 3
    },
    {
      title: 'Oracle',
      level: 2
    }
  ],
};

const versionControl: ISkill.Skill = {
  category: 'Version Control & Tool',
  items: [
    {
      title: 'GitHub',
      level: 2
    },
    {
      title: 'SVN',
      level: 2
    },
    {
      title: 'Apache Tomcat 9.0',
      level: 2
    },
    {
      title: 'Swagger',
      level: 2
    }
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    languages,
    backEnd,
    frontEnd,
    database,
    versionControl
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
