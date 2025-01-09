import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
import { BestProjectsDto } from './dto/bestProjects.dto'

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BestProjectsDto>
) {
  const data = await fs.readFile(__dirname + '../../../_database/data.json', 'utf8');
  const bestProjects = JSON.parse(data);
  res.status(200).json({ bestProjects });
}