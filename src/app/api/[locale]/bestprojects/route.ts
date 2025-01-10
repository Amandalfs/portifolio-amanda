import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { BestProjectsDto } from './bestProjects.dto';
import path from 'path';

interface Params {
  locale: string;
}

interface ErrorResponse {
  error: string;
}

interface BestProjectsResponse {
  bestProjects: BestProjectsDto;
}

export async function GET(_: unknown, { params }: { params: Promise<Params> }): Promise<NextResponse<BestProjectsResponse | ErrorResponse>> {
  try {
    const locale = (await params).locale;

    if (!["en", "pt"].includes(locale)) {
      return NextResponse.json({ error: 'Locale not found' }, { status: 404 });
    }

    const filePath = path.resolve(process.cwd(), `src/app/database/${locale}/database.json`);
    const data = await fs.readFile(filePath, 'utf8');
    const bestProjects = JSON.parse(data);
    return NextResponse.json({ ...bestProjects }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
