import type { ManifestV3Export } from '@crxjs/vite-plugin';

import packageJson from "../package.json";


const manifest: ManifestV3Export = {
    manifest_version: 3,
    name: 'name',
    version: packageJson.version,
    description: 'description!!!!',
    incognito: 'split',
    permissions: [
        'bookmarks',
        'storage',
        'favicon'
    ],
    chrome_url_overrides: {
        newtab: 'src/newtab/index.html'
    },
    content_security_policy: {
        extension_pages: "script-src 'self'; object-src 'self'"
    },
}

export { manifest }