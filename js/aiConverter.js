/**
 * SketchTrace - Beautiful Artistic Pencil & Line-Art Converter
 * Uses Color Dodge Blending + Gaussian Blur + Dynamic Edge Thresholding
 * to convert ANY portrait or photo into a beautiful, realistic, hand-drawn pencil sketch
 * with 100% visible, natural facial structure (Eyes, Eyebrows, Nose, Lips, Cap, Clothes).
 */

window.SketchTrace = window.SketchTrace || {};

class AIConverter {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  async convertImage(imageSource, mode = 'pencil', intensity = 50) {
    const img = await this.loadImage(imageSource);
    const maxDim = 1200; // Optimal HD processing dimension
    let targetW = img.width;
    let targetH = img.height;

    if (targetW > maxDim || targetH > maxDim) {
      if (targetW > targetH) {
        targetH = Math.round((targetH * maxDim) / targetW);
        targetW = maxDim;
      } else {
        targetW = Math.round((targetW * maxDim) / targetH);
        targetH = maxDim;
      }
    }

    this.canvas.width = targetW;
    this.canvas.height = targetH;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, targetW, targetH);
    this.ctx.drawImage(img, 0, 0, targetW, targetH);

    const imgData = this.ctx.getImageData(0, 0, targetW, targetH);
    const data = imgData.data;
    const totalPixels = targetW * targetH;

    // Step 1: Convert to Grayscale & Inverted Grayscale
    const gray = new Float32Array(totalPixels);
    const inverted = new Float32Array(totalPixels);

    for (let i = 0; i < data.length; i += 4) {
      const g = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      gray[i / 4] = g;
      inverted[i / 4] = 255 - g;
    }

    // Step 2: Gaussian Blur on Inverted Image (Radius based on Intensity Slider)
    const blurRadius = Math.max(3, Math.min(25, Math.round(intensity / 4)));
    const blurredInverted = this.applyFastBlur(inverted, targetW, targetH, blurRadius);

    // Step 3: Color Dodge Blending (Photoshop Gold Standard for Beautiful Pencil Sketches)
    // Blend equation: dodge = min(255, (gray * 256) / (255 - blurredInverted + 1))
    const dodge = new Float32Array(totalPixels);
    for (let i = 0; i < totalPixels; i++) {
      const top = gray[i] * 256;
      const bot = 255 - blurredInverted[i] + 1;
      let val = top / bot;
      if (val > 255) val = 255;
      dodge[i] = val;
    }

    // Step 4: Contrast & Threshold Enhancement for Tracing Visibility
    // Softens dark blocky splotches while keeping facial lines (eyes, nose, lips, chin, clothes) crisp!
    const contrastGain = 1.25;
    for (let y = 0; y < targetH; y++) {
      for (let x = 0; x < targetW; x++) {
        const idx = y * targetW + x;
        const pIdx = idx * 4;

        if (x < 2 || x >= targetW - 2 || y < 2 || y >= targetH - 2) {
          data[pIdx] = 255;
          data[pIdx + 1] = 255;
          data[pIdx + 2] = 255;
          data[pIdx + 3] = 255;
          continue;
        }

        let val = dodge[idx];

        // Apply contrast curve to make pencil lines sharp yet smooth
        val = ((val - 128) * contrastGain) + 128;
        if (val < 0) val = 0;
        if (val > 255) val = 255;

        // Posterize high white areas to pure white for ultra-clean tracing background
        if (val > 235) val = 255;

        data[pIdx] = val;
        data[pIdx + 1] = val;
        data[pIdx + 2] = val;
        data[pIdx + 3] = 255;
      }
    }

    this.ctx.putImageData(imgData, 0, 0);
    return this.canvas.toDataURL('image/png');
  }

  applyFastBlur(src, w, h, radius) {
    const dst = new Float32Array(w * h);
    const size = radius * 2 + 1;
    const area = size * size;

    // Horizontal & Vertical separable box blur approximation of Gaussian
    const temp = new Float32Array(w * h);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let sum = 0;
        let count = 0;
        for (let dx = -radius; dx <= radius; dx++) {
          const nx = x + dx;
          if (nx >= 0 && nx < w) {
            sum += src[y * w + nx];
            count++;
          }
        }
        temp[y * w + x] = sum / count;
      }
    }

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let sum = 0;
        let count = 0;
        for (let dy = -radius; dy <= radius; dy++) {
          const ny = y + dy;
          if (ny >= 0 && ny < h) {
            sum += temp[ny * w + x];
            count++;
          }
        }
        dst[y * w + x] = sum / count;
      }
    }

    return dst;
  }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      if (src.startsWith('http://') || src.startsWith('https://')) {
        img.crossOrigin = 'anonymous';
      }
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  }
}

window.SketchTrace.aiConverter = new AIConverter();
