/**
 * SketchTrace - Trace Engine
 */

window.SketchTrace = window.SketchTrace || {};

class TraceEngine {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.img = new Image();
    this.isImgLoaded = false;

    this.scale = 0.85;
    this.rotation = 0;
    this.flipH = false;
    this.flipV = false;
    this.panX = 0;
    this.panY = 0;

    this.opacity = 0.65;
    this.brightness = 100;
    this.contrast = 100;
    this.saturation = 100;
    this.invert = false;
    this.bgDimmer = 0.0;
    this.gridType = 'none';

    this.isLocked = false;
    this.isDragging = false;
    this.startTouchX = 0;
    this.startTouchY = 0;
    this.initialPanX = 0;
    this.initialPanY = 0;

    this.bindEvents();
  }

  loadSketch(sketch) {
    this.isImgLoaded = false;
    return new Promise((resolve) => {
      this.img = new Image();
      if (sketch.imageUrl && (sketch.imageUrl.startsWith('http://') || sketch.imageUrl.startsWith('https://'))) {
        this.img.crossOrigin = 'anonymous';
      }
      this.img.onload = () => {
        this.isImgLoaded = true;
        this.resetPosition();
        this.render();
        resolve(true);
      };
      this.img.onerror = () => {
        // Fallback for missing/corrupted image
        this.isImgLoaded = true;
        this.resetPosition();
        this.render();
        resolve(true);
      };

      if (sketch.imageUrl) {
        this.img.src = sketch.imageUrl;
      } else if (sketch.dataUrl) {
        this.img.src = sketch.dataUrl;
      } else if (sketch.svgPath) {
        const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="none"/>${sketch.svgPath}</svg>`;
        const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
        this.img.src = URL.createObjectURL(blob);
      }
    });
  }

  resizeCanvas(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
    if (this.panX === 0 && this.panY === 0) {
      this.resetPosition();
    } else {
      this.render();
    }
  }

  resetPosition() {
    if (!this.canvas.width || !this.canvas.height) return;
    this.scale = 0.85;
    this.rotation = 0;
    this.flipH = false;
    this.flipV = false;
    this.panX = this.canvas.width / 2;
    this.panY = this.canvas.height / 2;
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      const { width: w, height: h } = this.canvas;
      if (!w || !h) return;
      this.ctx.clearRect(0, 0, w, h);

      if (this.bgDimmer > 0) {
        this.ctx.fillStyle = `rgba(0, 0, 0, ${this.bgDimmer})`;
        this.ctx.fillRect(0, 0, w, h);
      }

      if (this.isImgLoaded && this.img.width > 0) {
        this.ctx.save();
        let filter = `opacity(${this.opacity}) brightness(${this.brightness}%) contrast(${this.contrast}%) saturate(${this.saturation}%)`;
        if (this.invert) filter += ` invert(100%)`;
        this.ctx.filter = filter;

        this.ctx.translate(this.panX, this.panY);
        this.ctx.rotate((this.rotation * Math.PI) / 180);
        this.ctx.scale(this.scale * (this.flipH ? -1 : 1), this.scale * (this.flipV ? -1 : 1));

        const drawW = this.img.width || 400;
        const drawH = this.img.height || 400;
        this.ctx.drawImage(this.img, -drawW / 2, -drawH / 2, drawW, drawH);
        this.ctx.restore();
      }

      this.renderGrid(w, h);
    });
  }

  renderGrid(w, h) {
    if (this.gridType === 'none') return;
    this.ctx.save();
    this.ctx.strokeStyle = 'rgba(37, 99, 235, 0.4)';
    this.ctx.lineWidth = 1.5;

    if (this.gridType === '3x3') {
      for (let i = 1; i < 3; i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(i * (w / 3), 0);
        this.ctx.lineTo(i * (w / 3), h);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, i * (h / 3));
        this.ctx.lineTo(w, i * (h / 3));
        this.ctx.stroke();
      }
    } else if (this.gridType === 'diagonal') {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(w, h);
      this.ctx.moveTo(w, 0);
      this.ctx.lineTo(0, h);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  bindEvents() {
    const el = this.canvas;
    const handleStart = (e) => {
      if (this.isLocked) return;
      const touches = e.touches || [e];
      if (touches.length === 1) {
        this.isDragging = true;
        this.startTouchX = touches[0].clientX;
        this.startTouchY = touches[0].clientY;
        this.initialPanX = this.panX;
        this.initialPanY = this.panY;
      }
    };

    const handleMove = (e) => {
      if (this.isLocked || !this.isDragging) return;
      const touches = e.touches || [e];
      if (touches.length === 1) {
        this.panX = this.initialPanX + (touches[0].clientX - this.startTouchX);
        this.panY = this.initialPanY + (touches[0].clientY - this.startTouchY);
        this.render();
      }
    };

    const handleEnd = () => { this.isDragging = false; };

    el.addEventListener('touchstart', handleStart, { passive: false });
    el.addEventListener('touchmove', handleMove, { passive: false });
    el.addEventListener('touchend', handleEnd);

    el.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
  }

  setLock(l) { this.isLocked = l; }
}

window.SketchTrace.TraceEngine = TraceEngine;
