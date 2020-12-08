import path from 'path';

export default class Utils {
    static readableBytes(bytes, si = false, dp = 1) {
        const thresh = si ? 1000 : 1024;

        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }

        const units = si
            ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10 ** dp;

        do {
            bytes /= thresh;
            ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


        return bytes.toFixed(dp) + ' ' + units[u];
    }

    static clamp(x, min = 0, max = 1) {
        return Math.min(max, Math.max(min, x));
    }

    static baseFileName(filePath) {
        return path.basename(filePath);
    }


    static async waitSleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}