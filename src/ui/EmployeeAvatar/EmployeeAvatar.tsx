import Image from 'next/image';

import styles from './EmployeeAvatar.module.css';

export function EmployeeAvatar({
  firstName,
  lastName
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <div className={styles['avatar-container']}>
      <Image
        src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=0070f3&color=ffffff&size=128&rounded=true&bold=true`}
        alt='Profile image'
        width='64'
        height='64'
        className={styles.avatar}
      />
    </div>
  );
}
