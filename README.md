# **Endpoint Testing**
---
## **Setting up Endpoint testing**
* Install superset as a dependency
```bash
$ npm i supertest
```
* Add type definition to allow the code to compile without TypeScript errors.
```bash
$ npm i --save-dev @types/supertest
```
* Import SuperTest in the spec file.
```typescript
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    }
)});
```
* Create and Run Tests
```bash
$ npm run test
```