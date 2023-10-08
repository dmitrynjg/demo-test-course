import courseData from '@/src/data/course-data';
import courseDto from '@/src/lib/dto/course';
import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sort } = req.query;

  const ruCardinalRules = new Intl.PluralRules('ru-RU');
  let data = courseData;

  if (sort === 'rating') {
    data = data.sort((a, b) => (a.rating > b.rating ? -1 : 1));
  }

  res.status(200).json(
    data.map((course) => courseDto(course, ruCardinalRules)) || []
  );
}
