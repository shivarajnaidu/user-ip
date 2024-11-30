
import { IncomingMessage } from 'node:http';

/**
 * Extracts the IP address from the request object.
 * @param req - The request object (Express or similar frameworks).
 * @returns The extracted IP address or undefined if not found.
 */
declare function extractIP(req: IncomingMessage): string | undefined;

// Export the function as the default export (for CommonJS compatibility)
export = extractIP;

// Named export
export { extractIP };