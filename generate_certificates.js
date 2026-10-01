const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function generateAllCertificates() {
  const masterPath = 'multimedia/FICHAS TEC - CERTIFICADOS/CERTIFICADO de AUTENTICIDAD.pdf';
  if (!fs.existsSync(masterPath)) {
    console.error('Master certificate not found at', masterPath);
    return;
  }

  const outDir = 'multimedia/certificados';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const masterBytes = fs.readFileSync(masterPath);
  const src = await PDFDocument.load(masterBytes);

  // 1. Artworks already present as complete 2-page pairs in the master PDF
  const existingPairs = [
    { id: 'pez-leon', filename: 'certificado_pez_leon.pdf', pages: [0, 1] },
    { id: 'leon', filename: 'certificado_leon.pdf', pages: [2, 3] },
    { id: 'duplo', filename: 'certificado_duplo.pdf', pages: [4, 5] },
    { id: 'fluvia', filename: 'certificado_fluvia.pdf', pages: [6, 7] },
    { id: 'renovacion', filename: 'certificado_renovacion.pdf', pages: [8, 9] },
    { id: 'plenitud', filename: 'certificado_plenitud.pdf', pages: [10, 11] },
    { id: 'transito', filename: 'certificado_transito.pdf', pages: [12, 13] }
  ];

  for (const item of existingPairs) {
    const doc = await PDFDocument.create();
    const [p1, p2] = await doc.copyPages(src, item.pages);
    doc.addPage(p1);
    doc.addPage(p2);
    const dest = path.join(outDir, item.filename);
    fs.writeFileSync(dest, await doc.save());
    console.log(`Generated extracted certificate: ${dest} (${fs.statSync(dest).size} bytes)`);
  }

  // 2. Artworks to generate from the official blank template (pages 14 & 15)
  const templateArtworks = [
    {
      id: 'levi-carlo',
      filename: 'certificado_levi_carlo.pdf',
      code: 'WE009',
      titleEs: 'Levi Carlo',
      titleEn: 'Levi Carlo',
      seriesEs: 'Retratos',
      seriesEn: 'Portraits',
      techniqueEs: 'Óleo sobre lienzo',
      techniqueEn: 'Oil on canvas',
      dims: '25 x 25 cm',
      year: '2026',
      imagePath: 'multimedia/Levi Carlo.jpg'
    },
    {
      id: 'luan',
      filename: 'certificado_luan.pdf',
      code: 'WE008',
      titleEs: 'Luan',
      titleEn: 'Luan',
      seriesEs: 'Retratos',
      seriesEn: 'Portraits',
      techniqueEs: 'Óleo sobre lienzo',
      techniqueEn: 'Oil on canvas',
      dims: '25 x 25 cm',
      year: '2026',
      imagePath: 'multimedia/Luan.jpg'
    },
    {
      id: 'william',
      filename: 'certificado_william.pdf',
      code: 'WE010',
      titleEs: 'William',
      titleEn: 'William',
      seriesEs: 'Retratos',
      seriesEn: 'Portraits',
      techniqueEs: 'Óleo sobre lienzo',
      techniqueEn: 'Oil on canvas',
      dims: '90 x 60 cm',
      year: '2025',
      imagePath: 'multimedia/William.jpg'
    },
    {
      id: 'sirena',
      filename: 'certificado_sirena.pdf',
      code: 'WE011',
      titleEs: 'Sirena',
      titleEn: 'Mermaid / Sirena',
      seriesEs: 'Serie: Ser-Es',
      seriesEn: 'Ser-Es Series',
      techniqueEs: 'Técnica Mixta, Óleo & Carboncillo',
      techniqueEn: 'Mixed Media, Oil & Charcoal',
      dims: '80 x 56 cm',
      year: '2026',
      imagePath: 'multimedia/Sirena.jpg'
    },
    {
      id: 'satiro',
      filename: 'certificado_satiro.pdf',
      code: 'WE012',
      titleEs: 'Sátiro',
      titleEn: 'Satyr / Sátiro',
      seriesEs: 'Serie: Ser-Es',
      seriesEn: 'Ser-Es Series',
      techniqueEs: 'Técnica Mixta, Grafito & Óleo',
      techniqueEn: 'Mixed Media, Graphite & Oil',
      dims: '80 x 56 cm',
      year: '2026',
      imagePath: 'multimedia/Sátiro.jpg'
    },
    {
      id: 'lechuza',
      filename: 'certificado_lechuza.pdf',
      code: 'WE013',
      titleEs: 'Lechuza',
      titleEn: 'Owl / Lechuza',
      seriesEs: 'Serie: Ser-Es',
      seriesEn: 'Ser-Es Series',
      techniqueEs: 'Técnica Mixta, Óleo & Pastel',
      techniqueEn: 'Mixed Media, Oil & Pastel',
      dims: '80 x 56 cm',
      year: '2026',
      imagePath: 'multimedia/Lechuza.jpg'
    }
  ];

  for (const item of templateArtworks) {
    const doc = await PDFDocument.create();
    const [p1, p2] = await doc.copyPages(src, [14, 15]);
    doc.addPage(p1);
    doc.addPage(p2);

    const font = await doc.embedFont(StandardFonts.Helvetica);
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

    // Embed image
    if (fs.existsSync(item.imagePath)) {
      const imgBytes = fs.readFileSync(item.imagePath);
      let embeddedImg;
      if (item.imagePath.toLowerCase().endsWith('.png')) {
        embeddedImg = await doc.embedPng(imgBytes);
      } else {
        embeddedImg = await doc.embedJpg(imgBytes);
      }

      const imgDims = embeddedImg.scale(1);
      const maxW = 210;
      const maxH = 240;
      const scale = Math.min(maxW / imgDims.width, maxH / imgDims.height);
      const w = imgDims.width * scale;
      const h = imgDims.height * scale;
      const x = 306 - (w / 2);
      const y = 445 - (h / 2);

      p1.drawImage(embeddedImg, { x, y, width: w, height: h });
      p2.drawImage(embeddedImg, { x, y, width: w, height: h });
    }

    // --- Page 1 (Español) ---
    // Title
    p1.drawText(item.titleEs, { x: 175, y: 288.5, size: 10, font: fontBold, color: rgb(0.12, 0.12, 0.12) });
    // Series
    p1.drawText(item.seriesEs, { x: 125, y: 275, size: 9.5, font: font, color: rgb(0.2, 0.2, 0.2) });
    // Cover and draw Technique
    p1.drawRectangle({ x: 135, y: 231, width: 220, height: 14, color: rgb(1, 1, 1) });
    p1.drawText(item.techniqueEs, { x: 137, y: 234, size: 9.5, font: font, color: rgb(0.2, 0.2, 0.2) });
    // Cover 00 x 00 cm and draw real dimensions
    p1.drawRectangle({ x: 155, y: 218, width: 85, height: 14, color: rgb(1, 1, 1) });
    p1.drawText(item.dims, { x: 158, y: 220.5, size: 9.5, font: fontBold, color: rgb(0.12, 0.12, 0.12) });
    // Year
    p1.drawText(item.year, { x: 118, y: 207, size: 9.5, font: font, color: rgb(0.2, 0.2, 0.2) });
    // Cover WE000 and draw real registration code
    p1.drawRectangle({ x: 190, y: 190, width: 55, height: 14, color: rgb(1, 1, 1) });
    p1.drawText(item.code, { x: 191, y: 193.2, size: 9.5, font: fontBold, color: rgb(0.12, 0.12, 0.12) });

    // --- Page 2 (English) ---
    // Title
    p2.drawText(item.titleEn, { x: 175, y: 288.5, size: 10, font: fontBold, color: rgb(0.12, 0.12, 0.12) });
    // Series
    p2.drawText(item.seriesEn, { x: 125, y: 275, size: 9.5, font: font, color: rgb(0.2, 0.2, 0.2) });
    // Cover and draw Technique
    p2.drawRectangle({ x: 135, y: 231, width: 220, height: 14, color: rgb(1, 1, 1) });
    p2.drawText(item.techniqueEn, { x: 137, y: 234, size: 9.5, font: font, color: rgb(0.2, 0.2, 0.2) });
    // Cover 00 x 00 cm and draw real dimensions
    p2.drawRectangle({ x: 155, y: 218, width: 85, height: 14, color: rgb(1, 1, 1) });
    p2.drawText(item.dims, { x: 158, y: 220.5, size: 9.5, font: fontBold, color: rgb(0.12, 0.12, 0.12) });
    // Year
    p2.drawText(item.year, { x: 118, y: 207, size: 9.5, font: font, color: rgb(0.2, 0.2, 0.2) });
    // Cover WE000 and draw real registration code
    p2.drawRectangle({ x: 190, y: 190, width: 55, height: 14, color: rgb(1, 1, 1) });
    p2.drawText(item.code, { x: 191, y: 193.2, size: 9.5, font: fontBold, color: rgb(0.12, 0.12, 0.12) });

    const dest = path.join(outDir, item.filename);
    fs.writeFileSync(dest, await doc.save());
    console.log(`Generated templated certificate: ${dest} (${fs.statSync(dest).size} bytes)`);
  }

  console.log('All individual certificates successfully generated!');
}

generateAllCertificates().catch(console.error);
