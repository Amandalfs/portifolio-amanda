import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import { languages } from '../../constants/languages';
 
export const routing = defineRouting({
  locales: languages,
  defaultLocale: 'pt'
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);