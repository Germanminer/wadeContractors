import sharp from 'sharp'
import fs from 'fs';

const input = 'public/team.jpg';
const outputDir = 'public/optimizedImages';
const widths = [480, 800, 1200];
const formats = ['jpg', 'webp'];

widths.forEach(width => {
    formats.forEach(format => {
        sharp(input)
            .resize({ width })
            .toFile(`${outputDir}/team.jpg-${width}.${format}`, (err, info) => {
                if (err) console.error(err);
            });
    });
});
