/**
 * SketchTrace Camera Service
 */

window.SketchTrace = window.SketchTrace || {};

class CameraService {
  constructor() {
    this.stream = null;
    this.videoElement = null;
    this.torchSupported = false;
    this.isTorchOn = false;
  }

  static isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;
  }

  async startCamera(videoElement) {
    this.videoElement = videoElement;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return false;
    }

    this.stopCamera();

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } }
      });
      this.videoElement.srcObject = this.stream;
      await this.videoElement.play();
      return true;
    } catch (e) {
      console.warn('Camera stream warning:', e);
      return false;
    }
  }

  async toggleTorch() {
    if (!this.stream) return false;
    const track = this.stream.getVideoTracks()[0];
    if (track) {
      this.isTorchOn = !this.isTorchOn;
      try {
        await track.applyConstraints({ advanced: [{ torch: this.isTorchOn }] });
        return this.isTorchOn;
      } catch (e) {
        this.isTorchOn = false;
        return false;
      }
    }
    return false;
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    if (this.videoElement) {
      this.videoElement.srcObject = null;
    }
  }

  captureCompositeScreenshot(sketchCanvas, name = 'sketch') {
    const offscreen = document.createElement('canvas');
    const w = sketchCanvas.width || 1080;
    const h = sketchCanvas.height || 1920;
    offscreen.width = w;
    offscreen.height = h;

    const ctx = offscreen.getContext('2d');
    if (this.videoElement && this.videoElement.readyState === 4) {
      ctx.drawImage(this.videoElement, 0, 0, w, h);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
    }

    ctx.drawImage(sketchCanvas, 0, 0, w, h);

    const a = document.createElement('a');
    a.download = `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`;
    a.href = offscreen.toDataURL('image/png');
    a.click();
  }
}

window.SketchTrace.cameraService = new CameraService();
