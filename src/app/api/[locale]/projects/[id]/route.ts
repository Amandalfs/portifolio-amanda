import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { FindProjectById, ProjectDetail } from './projectById.dto';

interface Params {
  locale: string;
  id: string;
}

interface ErrorResponse {
  error: string;
}

export async function GET(_: unknown, { params }: { params: Promise<Params> }): Promise<NextResponse<FindProjectById | ErrorResponse>> {
  try {
    const locale = (await params).locale;
    const id = (await params).id;
    
    if (!["en", "pt"].includes(locale)) {
      return NextResponse.json({ error: 'Locale not found' }, { status: 404 });
    }

    const filePath = path.resolve(process.cwd(), `src/app/database/${locale}/database.json`);
    const data = await fs.readFile(filePath, 'utf8');
    const fileDatabase = JSON.parse(data);
    const project = fileDatabase.projects.find((project: ProjectDetail)=> {
        return project.id === id
    })

    if(!project){ 
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json({ project }, { status: 200})

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
