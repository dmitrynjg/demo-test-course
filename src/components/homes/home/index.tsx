import React, { useEffect, useState } from 'react';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import ChooseArea from './choose-area';
import CounterArea from '../../../common/counter-area';
import CourseArea from './course-area';
import FeatureArea from './feature-area';
import HeroBanner from './hero-banner';
import InstructorArea from '../../../common/instructor-area';
import SuitableArea from '../../../common/suitable-area';
import TestimonialArea from './testimonial-area';
import BlogArea from './blog-area';
import BrandArea from '../../../common/brand-area';
import { CourseDtoResponse } from '@/src/lib/dto/course';

const Home = ({ repo }) => {
  const [courses, setCourses] = useState<CourseDtoResponse[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/course?sort=rating');
      const courses: CourseDtoResponse[] = await res.json();
      setCourses(courses);
    })();
  }, []);
  return (
    <>
      <HeroBanner />
      <FeatureArea />
      <AboutArea />
      <CategoryArea />
      <CourseArea courses={courses} />
      <ChooseArea />
      <CounterArea />
      <InstructorArea />
      <SuitableArea />
      <TestimonialArea />
      <BlogArea />
      <BrandArea style_1={true} />
      <h1>{repo}</h1>
    </>
  );
};

export default Home;
