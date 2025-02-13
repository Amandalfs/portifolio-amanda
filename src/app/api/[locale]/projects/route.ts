import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { AllProjects } from './AllProjects.dto';

interface Params {
  locale: string;
  id: string;
}

interface ErrorResponse {
  error: string;
}

export async function GET(_: unknown, { params }: { params: Promise<Params> }): Promise<NextResponse<AllProjects | ErrorResponse>> {
  try {
    const locale = (await params).locale;
    
    if (!["en", "pt"].includes(locale)) {
      return NextResponse.json({ error: 'Locale not found' }, { status: 404 });
    }

    const filePath = path.resolve(process.cwd(), `src/app/database/${locale}/database.json`);
    const data = await fs.readFile(filePath, 'utf8');
    const fileDatabase = JSON.parse(data)
    
    return NextResponse.json({ projects: fileDatabase.projects }, { status: 200})

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
