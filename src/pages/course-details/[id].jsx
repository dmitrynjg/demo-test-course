import courseData from '@/src/data/course-data';
import courseDto from '@/src/lib/dto/course';
import React from 'react';
import SEO from '../../common/seo';
import CourseDetails from '../../components/course-details';
import WrapperFour from '../../layout/wrapper-4';

const index = ({ course }) => {
  return (
    <WrapperFour>
      <SEO pageTitle={'Course Details'} />
      <CourseDetails {...course} />
    </WrapperFour>
  );
};

export default index;

export async function getStaticPaths() {
  const paths = courseData.map((course) => ({
    params: { id: course.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const ruCardinalRules = new Intl.PluralRules('ru-RU');
  const course = courseData.find((course) => course.id === +params.id);
  return {
    props: {
      course: {
        ...courseDto(course, ruCardinalRules),
        otherCourses: courseData.slice(0, 3).map((course) => courseDto(course, ruCardinalRules)),
      },
    },
  };
}
