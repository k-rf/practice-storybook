import { readdirSync } from 'fs';
import path from 'path';

import { composeStories } from '@storybook/testing-react';
import type { StoryFile, StoryFn } from '@storybook/testing-react/dist/types';
import { render } from '@testing-library/react';

import { AppProvider } from '~/providers';

const helper = <T extends StoryFile>(testName: string, storyFile: T) => {
  const Stories = composeStories(storyFile) as Record<string, StoryFn<unknown>>;

  describe(testName, () => {
    const Decorator = ({ children }: { children: React.ReactNode }) => {
      return <AppProvider>{children}</AppProvider>;
    };

    Object.values(Stories).map((Story) => {
      it(`${Story.storyName}`, async () => {
        const { container } = render(
          <Decorator>
            <Story />
          </Decorator>
        );

        await Story.play({ canvasElement: container });
      });
    });
  });
};

const testName = (str: string) => {
  const s = str.split('/');
  return s[s.length - 1].split('.')[0];
};

const readAllFiles = (pathName: string): string[] => {
  return readdirSync(pathName, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? readAllFiles(path.join(pathName, e.name))
      : path.join(pathName, e.name)
  );
};

const allStoryTests = readAllFiles('src')
  .filter((e) => /.+\.stories\.tsx$/.test(e))
  .map((e) => {
    const s = e.split('.');
    return `../${s.slice(0, s.length - 1).join('.')}`;
  })
  .map((e) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const story = require(e);
    return () => helper(testName(e), story);
  });

allStoryTests.forEach((test) => test());
