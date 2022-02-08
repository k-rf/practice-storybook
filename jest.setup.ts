import '@testing-library/jest-dom';

import path from 'path';

import dotenv from 'dotenv';
import { fetch } from 'whatwg-fetch';

// Jest のテスト実行中に `fetch` を呼び出せるようにするため
global.fetch = fetch;

dotenv.config({ path: path.resolve(__dirname, '.env.test') });
