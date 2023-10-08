import React from 'react';
import Breadcrumb from '../bredcrumb/breadcrumb';
import CounterArea from '../homes/home-3/counter-area';
import CourseArea from './course-area';
import CourseDetailsArea from './course-details-area';
import { CourseDtoResponse } from '@/src/lib/dto/course';

export interface CourseDetailsProps extends CourseDtoResponse {
  otherCourses: CourseDtoResponse[],
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  courseName,
  courseTitle,
  desc,
  icon,
  img,
  rating,
  instructor,
  price,
  reviews,
  title,
  totalClass,
  totalStudent,
  otherCourses,
}) => {
  return (
    <>
      <Breadcrumb
        title={title}
        subtitle={title}
        isDbbl='Course'
      />
      <CourseDetailsArea
        icon={icon}
        price={price}
        title={title}
        desc={desc}
        rating={rating}
        instructor={instructor}
        reviews={reviews}
        totalClass={totalClass}
        totalStudent={totalStudent}
        img={img}
        courseName={courseName}
        courseTitle={courseTitle}
      />
      <CourseArea courses={otherCourses} />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
