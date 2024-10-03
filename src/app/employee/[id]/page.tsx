import { EmployeeDetail } from '@/ui/EmployeeDetail/EmployeeDetail';

import styles from './../page.module.css';

export default function EmployeeDetailPage({
  params
}: {
  params: { id: string };
}) {
  return (
    <div className={styles.page}>
      <EmployeeDetail id={params.id} />
    </div>
  );
}
