import course_data from '@/src/data/course-data';
import courseDto from '@/src/lib/dto/course';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const ruCardinalRules = new Intl.PluralRules('ru-RU');
  const searchCourse = course_data.find((course) => course.id === +id);

  res.status(200).json(courseDto(searchCourse, ruCardinalRules) || { ok: false, message: 'Course not found' });
}
