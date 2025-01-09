import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { BestProjectsDto } from './bestProjects.dto';

export async function GET() {
  try {
    const data = await fs.readFile('./src/app/_database/pt/database.json', 'utf8');
    const bestProjects = JSON.parse(data);
    return NextResponse.json({ bestProjects } as BestProjectsDto);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
