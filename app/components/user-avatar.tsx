import { useMemo } from 'react';
import { classNames } from '~/lib/class-names';

export default function UserAvatar({
  size = 'base',
  userImageSrc,
  userName,
}: {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  userImageSrc: string | null;
  userName: string;
}) {
  const initials = useMemo(() => {
    const nameParts = userName
      .split(' ')
      .map((p) => p.trim())
      .filter((p): p is string => !!p);
    return nameParts.length === 1
      ? userName.slice(0, 1).toUpperCase()
      : [nameParts[0][0], nameParts[nameParts.length - 1][0]].join('');
  }, [userName]);

  if (userImageSrc != null) {
    return (
      <img
        alt={userName}
        className={classNames(
          'rounded-full bg-gray-50 text-gray-800',
          size === 'xs' && 'h-6 w-6',
          size === 'sm' && 'h-8 w-8',
          size === 'base' && 'h-10 w-10',
          size === 'lg' && 'h-12 w-12',
          size === 'xl' && 'h-14 w-14',
        )}
        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      />
    );
  }

  return (
    <span
      className={classNames(
        'rounded-full bg-gray-500 inline-flex items-center justify-center',
        size === 'xs' && 'h-6 w-6',
        size === 'sm' && 'h-8 w-8',
        size === 'base' && 'h-10 w-10',
        size === 'lg' && 'h-12 w-12',
        size === 'xl' && 'h-14 w-14',
      )}
      title={userName}
    >
      <span
        className={classNames(
          'font-medium leading-none text-gray-50',
          size === 'xs' && 'text-xs',
          size === 'sm' && 'text-sm',
          size === 'base' && 'text-mediun',
          size === 'lg' && 'text-lg',
          size === 'xl' && 'text-xl',
        )}
      >
        {initials}
      </span>
    </span>
  );
}
