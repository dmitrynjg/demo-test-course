export interface CourseType {
  id: number;
  img: string;
  icon: string;
  title: string;
  totalClass: number;
  totalStudent: number;
  rating: number;
  courseTitle: string;
  courseName: string;
  price: string;
  desc: string;
  instructor: InstructorType;
  reviews: ReviewType[];
}

export interface InstructorType {
  id: number;
  img: string;
  name: string;
  title: string;
  desc: string;
}

export interface ReviewType {
  id: number;
  children: string;
  img: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

const courseData = [
  {
    id: 1,
    img: '/assets/img/course/course-thumb-01.jpg',
    icon: '/assets/img/icon/course-avata-01.png',
    title: 'Полный курс веб-разработки 2022',
    totalClass: 35,
    totalStudent: 305,
    rating: 4.1,
    courseTitle: 'Дизайн',
    courseName: 'Разработка',
    price: '20.00',
    desc: `Продвинутый курс по веб-разработке: Этот курс предназначен для опытных веб-разработчиков, которые хотят улучшить свои навыки и освоить самые современные технологии. Вы научитесь создавать сложные веб-приложения с использованием фреймворков и инструментов, таких как React, Node.js и MongoDB. 
    Разработчики смогут расширить свои возможности и повысить свою стоимость на рынке труда с помощью этого курса.`,
    instructor: {
      id: 1,
      img: '/assets/img/bg/instructor-bg-01.jpg',
      name: 'Бруклин Симмонс',
      total_class: '35',
      total_st: '291',
      title: 'Инструктор',
      desc: 'Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.',
    },
    reviews: [
      {
        id: 1,
        children: '',
        img: '/assets/img/blog/comments/comment-1.jpg',
        name: 'Элеонора Фант',
        rating: 5,
        date: '14 июля 2022',
        comment: `
            Этот курс просто потрясающий! Я получил множество полезных знаний и навыков, которые могу сразу применить на
            практике. Преподаватель ясно и понятно объясняет материал, а задания и упражнения помогают закрепить и
            углубить понимание. Очень рекомендую!
         `,
      },
      {
        id: 2,
        children: '',
        img: '/assets/img/blog/comments/comment-2.jpg',
        name: 'Лесли Александр',
        rating: 4,
        date: '14 июля 2022',
        comment: `
            Я очень рада, что решила пройти этот курс. Он оказался исключительно практически ориентированным, и я смогла
            мгновенно использовать полученные знания в своей работе. Курс хорошо структурирован, и каждый модуль
            освещает ключевые аспекты темы. Благодаря высококвалифицированному преподавателю, я легко освоила новый
            материал и почувствовала значительный прогресс в своих навыках.
         `,
      },
      {
        id: 3,
        children: '',
        img: '/assets/img/blog/comments/comment-3.jpg',
        name: 'Дайан Рассел',
        date: '14 июля 2022',
        rating: 4,
        comment: `
            Этот курс является отличным введением в тему. В нем предоставлены все необходимые основы и ключевые понятия,
            чтобы начать разбираться в области. Преподаватель очень терпеливо отвечал на все вопросы и объяснял
            неочевидные моменты. Спасибо за отличный курс
         `,
      },
    ],
  },
  {
    id: 2,
    img: '/assets/img/course/course-thumb-02.jpg',
    icon: '/assets/img/icon/course-avata-02.png',
    title: 'Маркетинговый стратег',
    totalClass: 35,
    totalStudent: 231,
    rating: 4.7,
    courseTitle: 'Маркетинг',
    courseName: 'Реклама',
    price: '20.00',
    desc: `Маркетинговый стратег - секреты успешной рекламы": В этом курсе вы познакомитесь с основами маркетинга и научитесь разрабатывать эффективные рекламные стратегии. Вы изучите такие темы, как определение целевой аудитории, создание продающих текстов и дизайна.`,
    instructor: {
      id: 1,
      img: '/assets/img/bg/instructor-bg-01.jpg',
      name: 'Бруклин Симмонс',
      total_class: '35',
      total_st: '291',
      title: 'Инструктор',
      desc: 'Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.',
    },
    reviews: [
      {
        id: 1,
        children: '',
        img: '/assets/img/blog/comments/comment-1.jpg',
        name: 'Элеонора Фант',
        rating: 5,
        date: '14 июля 2022',
        comment: `
            Этот курс просто потрясающий! Я получил множество полезных знаний и навыков, которые могу сразу применить на
            практике. Преподаватель ясно и понятно объясняет материал, а задания и упражнения помогают закрепить и
            углубить понимание. Очень рекомендую!
         `,
      },
      {
        id: 2,
        children: '',
        img: '/assets/img/blog/comments/comment-2.jpg',
        name: 'Лесли Александр',
        rating: 4,
        date: '14 июля 2022',
        comment: `
            Я очень рада, что решила пройти этот курс. Он оказался исключительно практически ориентированным, и я смогла
            мгновенно использовать полученные знания в своей работе. Курс хорошо структурирован, и каждый модуль
            освещает ключевые аспекты темы. Благодаря высококвалифицированному преподавателю, я легко освоила новый
            материал и почувствовала значительный прогресс в своих навыках.
         `,
      },
      {
        id: 3,
        children: '',
        img: '/assets/img/blog/comments/comment-3.jpg',
        name: 'Дайан Рассел',
        date: '14 июля 2022',
        rating: 4,
        comment: `
            Этот курс является отличным введением в тему. В нем предоставлены все необходимые основы и ключевые понятия,
            чтобы начать разбираться в области. Преподаватель очень терпеливо отвечал на все вопросы и объяснял
            неочевидные моменты. Спасибо за отличный курс
         `,
      },
    ],
  },
  {
    id: 3,
    img: '/assets/img/course/course-thumb-03.jpg',
    icon: '/assets/img/icon/course-avata-03.png',
    title: 'Управление проектами и инновациями',
    totalClass: 35,
    totalStudent: 241,
    rating: 4.4,
    courseTitle: 'Проект',
    courseName: 'Управление',
    price: '20.00',
    desc: 'Этот курс исследует методы и стратегии управления проектами и инновациями в различных отраслях. Студенты изучают ключевые понятия и инструменты, необходимые для успешного планирования, выполнения и контроля проектов. Курс также раскрывает вопросы и вызовы, связанные с управлением инновациями, включая разработку и внедрение новых идей, процессов и продуктов.',
    instructor: {
      id: 1,
      img: '/assets/img/bg/instructor-bg-01.jpg',
      name: 'Бруклин Симмонс',
      total_class: '35',
      total_st: '291',
      title: 'Инструктор',
      desc: 'Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.',
    },
    reviews: [
      {
        id: 1,
        children: '',
        img: '/assets/img/blog/comments/comment-1.jpg',
        name: 'Элеонора Фант',
        rating: 5,
        date: '14 июля 2022',
        comment: `
            Этот курс просто потрясающий! Я получил множество полезных знаний и навыков, которые могу сразу применить на
            практике. Преподаватель ясно и понятно объясняет материал, а задания и упражнения помогают закрепить и
            углубить понимание. Очень рекомендую!
         `,
      },
      {
        id: 2,
        children: '',
        img: '/assets/img/blog/comments/comment-2.jpg',
        name: 'Лесли Александр',
        rating: 4,
        date: '14 июля 2022',
        comment: `
            Я очень рада, что решила пройти этот курс. Он оказался исключительно практически ориентированным, и я смогла
            мгновенно использовать полученные знания в своей работе. Курс хорошо структурирован, и каждый модуль
            освещает ключевые аспекты темы. Благодаря высококвалифицированному преподавателю, я легко освоила новый
            материал и почувствовала значительный прогресс в своих навыках.
         `,
      },
      {
        id: 3,
        children: '',
        img: '/assets/img/blog/comments/comment-3.jpg',
        name: 'Дайан Рассел',
        date: '14 июля 2022',
        rating: 4,
        comment: `
            Этот курс является отличным введением в тему. В нем предоставлены все необходимые основы и ключевые понятия,
            чтобы начать разбираться в области. Преподаватель очень терпеливо отвечал на все вопросы и объяснял
            неочевидные моменты. Спасибо за отличный курс
         `,
      },
    ],
  },
  {
    id: 4,
    img: '/assets/img/course/course-thumb-04.jpg',
    icon: '/assets/img/icon/course-avata-04.png',
    title: 'Маркетинговые исследования',
    totalClass: 35,
    totalStudent: 211,
    rating: 4.2,
    courseTitle: 'Маркетинг',
    courseName: 'Иследования',
    price: '20.00',
    desc: `Этот курс обучает студентов основным принципам и методам маркетингового исследования. Студенты изучают различные техники сбора и анализа данных, используемых в маркетинговом исследовании. Курс также охватывает темы, связанные с пониманием рыночного поведения, 
    определением целевой аудитории и разработкой маркетинговых стратегий на основе результатов исследования.`,
    instructor: {
      id: 1,
      img: '/assets/img/bg/instructor-bg-01.jpg',
      name: 'Бруклин Симмонс',
      total_class: '35',
      total_st: '291',
      title: 'Инструктор',
      desc: 'Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.',
    },
    reviews: [
      {
        id: 1,
        children: '',
        img: '/assets/img/blog/comments/comment-1.jpg',
        name: 'Элеонора Фант',
        rating: 5,
        date: '14 июля 2022',
        comment: `
            Этот курс просто потрясающий! Я получил множество полезных знаний и навыков, которые могу сразу применить на
            практике. Преподаватель ясно и понятно объясняет материал, а задания и упражнения помогают закрепить и
            углубить понимание. Очень рекомендую!
         `,
      },
      {
        id: 2,
        children: '',
        img: '/assets/img/blog/comments/comment-2.jpg',
        name: 'Лесли Александр',
        rating: 4,
        date: '14 июля 2022',
        comment: `
            Я очень рада, что решила пройти этот курс. Он оказался исключительно практически ориентированным, и я смогла
            мгновенно использовать полученные знания в своей работе. Курс хорошо структурирован, и каждый модуль
            освещает ключевые аспекты темы. Благодаря высококвалифицированному преподавателю, я легко освоила новый
            материал и почувствовала значительный прогресс в своих навыках.
         `,
      },
      {
        id: 3,
        children: '',
        img: '/assets/img/blog/comments/comment-3.jpg',
        name: 'Дайан Рассел',
        date: '14 июля 2022',
        rating: 4,
        comment: `
            Этот курс является отличным введением в тему. В нем предоставлены все необходимые основы и ключевые понятия,
            чтобы начать разбираться в области. Преподаватель очень терпеливо отвечал на все вопросы и объяснял
            неочевидные моменты. Спасибо за отличный курс
         `,
      },
    ],
  },
  {
    id: 5,
    img: '/assets/img/course/course-thumb-05.jpg',
    icon: '/assets/img/icon/course-avata-05.png',
    title: 'Управление персоналом и трудовые отношения',
    totalClass: 35,
    totalStudent: 291,
    rating: 4.5,
    courseTitle: 'Управление',
    courseName: 'Персонал',
    price: '20.00',
    desc: `Этот курс изучает основные аспекты управления персоналом и трудовых отношений в организации. Студенты изучают принципы подбора, обучения и развития персонала, а также стратегии мотивации и удержания сотрудников. Курс также рассматривает 
    правовые аспекты, связанные с управлением персоналом, включая законы о труде и трудовые договоры.`,
    instructor: {
      id: 1,
      img: '/assets/img/bg/instructor-bg-01.jpg',
      name: 'Бруклин Симмонс',
      total_class: '35',
      total_st: '291',
      title: 'Инструктор',
      desc: 'Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.',
    },

    reviews: [
      {
        id: 1,
        children: '',
        img: '/assets/img/blog/comments/comment-1.jpg',
        name: 'Элеонора Фант',
        rating: 5,
        date: '14 июля 2022',
        comment: `
            Этот курс просто потрясающий! Я получил множество полезных знаний и навыков, которые могу сразу применить на
            практике. Преподаватель ясно и понятно объясняет материал, а задания и упражнения помогают закрепить и
            углубить понимание. Очень рекомендую!
         `,
      },
      {
        id: 2,
        children: '',
        img: '/assets/img/blog/comments/comment-2.jpg',
        name: 'Лесли Александр',
        rating: 4,
        date: '14 июля 2022',
        comment: `
            Я очень рада, что решила пройти этот курс. Он оказался исключительно практически ориентированным, и я смогла
            мгновенно использовать полученные знания в своей работе. Курс хорошо структурирован, и каждый модуль
            освещает ключевые аспекты темы. Благодаря высококвалифицированному преподавателю, я легко освоила новый
            материал и почувствовала значительный прогресс в своих навыках.
         `,
      },
      {
        id: 3,
        children: '',
        img: '/assets/img/blog/comments/comment-3.jpg',
        name: 'Дайан Рассел',
        date: '14 июля 2022',
        rating: 4,
        comment: `
            Этот курс является отличным введением в тему. В нем предоставлены все необходимые основы и ключевые понятия,
            чтобы начать разбираться в области. Преподаватель очень терпеливо отвечал на все вопросы и объяснял
            неочевидные моменты. Спасибо за отличный курс
         `,
      },
    ],
  },
  {
    id: 6,
    img: '/assets/img/course/course-thumb-06.jpg',
    icon: '/assets/img/icon/course-avata-06.png',
    title: 'Финансовый менеджмент и анализ',
    totalClass: 35,
    totalStudent: 291,
    rating: 4.9,
    courseTitle: 'Финансы',
    courseName: 'Анализ',
    price: '20.00',
    desc: 'Этот курс предоставляет студентам знания и навыки в области финансового менеджмента и анализа. Студенты изучают финансовую отчетность, финансовый анализ и оценку инвестиционных проектов. Курс также рассматривает вопросы финансового планирования, управления оборотным капиталом и принятия финансовых решений в организации.',
    instructor: {
      id: 1,
      img: '/assets/img/bg/instructor-bg-01.jpg',
      name: 'Бруклин Симмонс',
      total_class: '35',
      total_st: '291',
      title: 'Инструктор',
      desc: 'Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.',
    },

    reviews: [
      {
        id: 1,
        children: '',
        img: '/assets/img/blog/comments/comment-1.jpg',
        name: 'Элеонора Фант',
        rating: 5,
        date: '14 июля 2022',
        comment: `
            Этот курс просто потрясающий! Я получил множество полезных знаний и навыков, которые могу сразу применить на
            практике. Преподаватель ясно и понятно объясняет материал, а задания и упражнения помогают закрепить и
            углубить понимание. Очень рекомендую!
         `,
      },
      {
        id: 2,
        children: '',
        img: '/assets/img/blog/comments/comment-2.jpg',
        name: 'Лесли Александр',
        rating: 4,
        date: '14 июля 2022',
        comment: `
            Я очень рада, что решила пройти этот курс. Он оказался исключительно практически ориентированным, и я смогла
            мгновенно использовать полученные знания в своей работе. Курс хорошо структурирован, и каждый модуль
            освещает ключевые аспекты темы. Благодаря высококвалифицированному преподавателю, я легко освоила новый
            материал и почувствовала значительный прогресс в своих навыках.
         `,
      },
      {
        id: 3,
        children: '',
        img: '/assets/img/blog/comments/comment-3.jpg',
        name: 'Дайан Рассел',
        date: '14 июля 2022',
        rating: 4,
        comment: `
            Этот курс является отличным введением в тему. В нем предоставлены все необходимые основы и ключевые понятия,
            чтобы начать разбираться в области. Преподаватель очень терпеливо отвечал на все вопросы и объяснял
            неочевидные моменты. Спасибо за отличный курс
         `,
      },
    ],
  },
];
export default courseData;
