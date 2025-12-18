import Image from 'next/image';

interface AuthorProfileProps {
  name: string;
  avatar: string;
  bio: string;
  social?: {
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export function AuthorProfile({ name, avatar, bio, social }: AuthorProfileProps) {
  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8">
      <div className="flex gap-4 items-start">
        {/* 아바타 */}
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />

        {/* 프로필 정보 */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{name} Sir</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
            {bio}
          </p>

          {/* 소셜 링크 */}
          {social && (
            <div className="flex gap-3 mt-3">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  GitHub
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Twitter
                </a>
              )}
              {social.email && (
                <a
                  href={`mailto:${social.email}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Email
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
