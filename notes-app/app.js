import { appendFile } from 'fs/promises'

await Bun.write('notes.txt', 'My name is David. ')
await appendFile('notes.txt', 'I am in my 20s.')

