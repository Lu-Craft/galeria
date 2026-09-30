const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.JPG': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
    '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
    // Decode percent-encoded paths (e.g., spaces, accents)
    let decodedUrl;
    try {
        decodedUrl = decodeURIComponent(req.url.split('?')[0]);
    } catch (e) {
        decodedUrl = req.url.split('?')[0];
    }

    let filePath = path.join(ROOT, decodedUrl === '/' ? 'index.html' : decodedUrl);

    // Normalize path to prevent directory traversal
    const safePath = path.normalize(filePath);
    if (!safePath.startsWith(ROOT)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    fs.stat(safePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end(`404 Not Found: ${decodedUrl}`);
        }

        const ext = path.extname(safePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': stats.size,
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        });

        const stream = fs.createReadStream(safePath);
        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`  Galeria Angela Maria en ejecucion localmente:`);
    console.log(`  URL: http://localhost:${PORT}`);
    console.log(`==================================================\n`);
});
