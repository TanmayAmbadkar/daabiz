import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..');
const destDir = __dirname;

const copyDir = (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            if (entry.name === 'daabiz-react' || entry.name === 'node_modules' || entry.name === '.git') continue;
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

// Specific copies
const copy = (srcRel, destRel) => {
    const src = path.join(sourceDir, srcRel);
    const dest = path.join(destDir, destRel);
    if (fs.existsSync(src)) {
        // Ensure dest dir exists
        const destFolder = path.dirname(dest);
        if (!fs.existsSync(destFolder)) {
            fs.mkdirSync(destFolder, { recursive: true });
        }

        // If src is dir, use recursive copy
        if (fs.lstatSync(src).isDirectory()) {
            // We need to copy contents of src to dest
            // fs.cpSync is available in Node 16.7+
            if (fs.cpSync) {
                fs.cpSync(src, dest, { recursive: true });
            } else {
                // Fallback for older node
                copyDir(src, dest);
            }
        } else {
            fs.copyFileSync(src, dest);
        }
        console.log(`Copied ${src} to ${dest}`);
    } else {
        console.log(`Source not found: ${src}`);
    }
}

try {
    copy('css', 'src/assets/css');
    copy('media', 'public/media');
    copy('img', 'public/img');
    copy('assets', 'public/assets');
    copy('js', 'public/js');
    console.log('Copy complete');
} catch (e) {
    console.error(e);
}
