import Link from 'next/link';
import React from 'react';
import { CourseDtoResponse } from '@/src/lib/dto/course';

const CourseArea: React.FC<{ courses: CourseDtoResponse[] }> = ({ courses = [] }) => {
  return (
    <>
      <section
        className='course-area pt-115 pb-110 wow fadeInUp'
        data-wow-duration='.8s'
        data-wow-delay='.4s'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title mb-65'>
                <h2 className='tp-section-title mb-20'>Explore Popular Courses</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {courses.map((item) => (
              <div
                key={item.id}
                className='col-xl-4 col-lg-6 col-md-6'
              >
                <div className='tpcourse mb-40'>
                  <div className='tpcourse__thumb p-relative w-img fix'>
                    <Link href={item.link}>
                      <img
                        src={item.img}
                        alt='course-thumb'
                      />
                    </Link>
                    <div className='tpcourse__tag'>
                      <Link href={item.link}>
                        <i className='fi fi-rr-heart'></i>
                      </Link>
                    </div>
                  </div>
                  <div className='tpcourse__content'>
                    <div className='tpcourse__avatar d-flex align-items-center mb-20'>
                      <img
                        src={item.icon}
                        alt='course-avata'
                      />
                      <h4 className='tpcourse__title'>
                        <Link href={item.link}>{item.title}</Link>
                      </h4>
                    </div>
                    <div className='tpcourse__meta pb-15 mb-20'>
                      <ul className='d-flex align-items-center'>
                        <li>
                          <img
                            src='/assets/img/icon/c-meta-01.png'
                            alt='meta-icon'
                          />
                          <span>{item.totalClass}</span>
                        </li>
                        <li>
                          <img
                            src='/assets/img/icon/c-meta-02.png'
                            alt='meta-icon'
                          />
                          <span>{item.totalStudent}</span>
                        </li>
                        <li>
                          <img
                            src='/assets/img/icon/c-meta-03.png'
                            alt='meta-icon'
                          />
                          <span>{item.rating}</span>
                        </li>
                      </ul>
                    </div>
                    <div className='tpcourse__category d-flex align-items-center justify-content-between'>
                      <ul className='tpcourse__price-list d-flex align-items-center'>
                        <li>
                          <Link href={item.link}>{item.courseTitle}</Link>
                        </li>
                        <li>
                          <Link href={item.link}>{item.courseName}</Link>
                        </li>
                      </ul>
                      <h5 className='tpcourse__course-price'>${item.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='row text-center'>
            <div className='col-lg-12'>
              <div className='course-btn mt-20'>
                <Link
                  className='tp-btn'
                  href='/course-details'
                >
                  Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseArea;
