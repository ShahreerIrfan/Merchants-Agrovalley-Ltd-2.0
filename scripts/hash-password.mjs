#!/usr/bin/env node
/**
 * Merchants AgroValley - Secure Admin Password Hasher (Argon2id)
 *
 * OWASP Password Storage Guidelines:
 * - Argon2id algorithm
 * - Memory cost: 19456 KiB (~19 MiB)
 * - Time cost / iterations: 2
 * - Parallelism: 1
 * - Secure terminal input without echoing plaintext characters
 * - Never passes plaintext in command arguments or logs
 */

import readline from 'node:readline';
import { Writable } from 'node:stream';
import { hash, Algorithm } from '@node-rs/argon2';

const mutableStdout = new Writable({
  write(chunk, encoding, callback) {
    if (!this.muted) {
      process.stdout.write(chunk, encoding);
    }
    callback();
  },
});

mutableStdout.muted = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: mutableStdout,
  terminal: true,
});

console.log('\n==================================================');
console.log(' Merchants AgroValley - Admin Password Hash Tool');
console.log('==================================================\n');
process.stdout.write('Enter new Admin Password (input will be hidden): ');
mutableStdout.muted = true;

rl.question('', async (password) => {
  mutableStdout.muted = false;
  console.log('\n');

  if (!password || password.length < 12) {
    console.error('Error: Password must be at least 12 characters long for admin security.');
    rl.close();
    process.exit(1);
  }

  process.stdout.write('Confirm Admin Password: ');
  mutableStdout.muted = true;

  rl.question('', async (confirmPassword) => {
    mutableStdout.muted = false;
    console.log('\n');

    if (password !== confirmPassword) {
      console.error('Error: Passwords do not match.');
      rl.close();
      process.exit(1);
    }

    try {
      // Argon2id with OWASP recommended parameters
      const passwordHash = await hash(password, {
        algorithm: Algorithm.Argon2id,
        memoryCost: 19456,
        timeCost: 2,
        parallelism: 1,
      });

      console.log('--------------------------------------------------');
      console.log('Argon2id Password Hash generated successfully:');
      console.log('--------------------------------------------------\n');
      console.log(passwordHash);
      console.log('\n--------------------------------------------------');
      console.log('Copy this hash to your .env.local as:');
      console.log(`ADMIN_PASSWORD_HASH="${passwordHash}"`);
      console.log('--------------------------------------------------\n');
    } catch (err) {
      console.error('Hashing failed:', err);
      process.exit(1);
    } finally {
      rl.close();
    }
  });
});
