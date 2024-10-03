'use client';
import {
  usePathname,
  useRouter as useRouterNextNavigation,
  useSearchParams,
  useParams
} from 'next/navigation';

export function useRouter() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouterNextNavigation();

  const getSearchParams = (params: string) => searchParams.get(params) || null;

  const updateSearchParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (!!value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return { id, getSearchParams, updateSearchParams };
}
