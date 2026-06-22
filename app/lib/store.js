import { promises as fs } from "fs";
import path from "path";

const FILE = path.join(process.cwd(), "data", "claims.json");

async function ensure() {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  try { await fs.access(FILE); } catch { await fs.writeFile(FILE, "[]"); }
}

export async function getClaims() {
  await ensure();
  const raw = await fs.readFile(FILE, "utf8");
  try { return JSON.parse(raw); } catch { return []; }
}

export async function addClaim(claim) {
  const claims = await getClaims();
  const record = { id: Date.now(), at: new Date().toISOString(), ...claim };
  claims.push(record);
  await fs.writeFile(FILE, JSON.stringify(claims, null, 2));
  return record;
}
