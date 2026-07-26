/**
 * SketchTrace - Screen Lock Service
 */

window.SketchTrace = window.SketchTrace || {};

class ScreenLockService {
  constructor() {
    this.wakeLock = null;
    this.isLocked = false;
  }

  async requestWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        this.wakeLock = await navigator.wakeLock.request('screen');
      } catch (e) {}
    }
  }

  async releaseWakeLock() {
    if (this.wakeLock) {
      try {
        await this.wakeLock.release();
        this.wakeLock = null;
      } catch (e) {}
    }
  }

  lock(overlayEl) {
    this.isLocked = true;
    this.requestWakeLock();
    if (overlayEl) {
      overlayEl.classList.remove('hidden');
      overlayEl.classList.add('flex');
    }
  }

  unlock(overlayEl) {
    this.isLocked = false;
    this.releaseWakeLock();
    if (overlayEl) {
      overlayEl.classList.add('hidden');
      overlayEl.classList.remove('flex');
    }
  }

  bindLongPressUnlock(buttonEl, overlayEl, onUnlocked) {
    let timer = null;
    const holdDuration = 1800;
    const bar = buttonEl.querySelector('.unlock-progress-bar');

    const start = (e) => {
      e.preventDefault();
      if (bar) {
        bar.style.transition = `width ${holdDuration}ms linear`;
        bar.style.width = '100%';
      }
      timer = setTimeout(() => {
        this.unlock(overlayEl);
        if (onUnlocked) onUnlocked();
        reset();
      }, holdDuration);
    };

    const reset = () => {
      if (timer) clearTimeout(timer);
      timer = null;
      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '0%';
      }
    };

    buttonEl.addEventListener('touchstart', start, { passive: false });
    buttonEl.addEventListener('touchend', reset);
    buttonEl.addEventListener('mousedown', start);
    buttonEl.addEventListener('mouseup', reset);
    buttonEl.addEventListener('mouseleave', reset);
  }
}

window.SketchTrace.screenLockService = new ScreenLockService();
