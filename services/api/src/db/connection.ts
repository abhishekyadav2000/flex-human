import postgres from 'postgres';

const DATABASE_URL = process.env['DATABASE_URL'] ?? 'postgres://flex:flex@localhost:5432/flexhuman';

export const sql = postgres(DATABASE_URL, {
  max: 20,
  idle_timeout: 30,
  connect_timeout: 10,
});

export async function checkConnection(): Promise<boolean> {
  try {
    await sql`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
