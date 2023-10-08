import { CourseType } from '@/src/data/course-data';

export interface CourseDtoResponse extends Omit<CourseType, 'totalClass' | 'totalStudent'> {
  totalClass: string;
  totalStudent: string;
  link: string;
}

const courseDto = (course: CourseType, pluralRules: Intl.PluralRules): CourseDtoResponse => {
  const classCardinalRules = pluralRules.select(course.totalClass);
  const studentCardinalRules = pluralRules.select(course.totalStudent);

  const studentsType = {
    one: 'Студент',
    few: 'Студента',
    many: 'Студентов',
    other: 'Студентов',
  };

  const classType = {
    one: 'Класс',
    few: 'Класса',
    many: 'Классов',
    other: 'Класса',
  };

  return {
    ...course,
    totalClass: `${course.totalClass} ${classType[classCardinalRules]}`,
    totalStudent: `${course.totalStudent} ${studentsType[studentCardinalRules]}`,
    link: `/course-details/${course.id}`,
  };
};

export default courseDto;
