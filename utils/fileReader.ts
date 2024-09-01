import fs from "node:fs";

export default async function readFile(filename: string): Promise<string | void> {
  return await  fs.readFile(filename, 'utf8', (err, data) => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  return data;
                });
}

