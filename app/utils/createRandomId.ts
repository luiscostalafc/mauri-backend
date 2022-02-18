import crypto from 'crypto'
export const generateRandomId = () => crypto.randomBytes(32).toString("hex");