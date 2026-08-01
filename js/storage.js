/**
 * SketchTrace Storage Service with robust serialization & error handling
 */

window.SketchTrace = window.SketchTrace || {};

class StorageService {
  _cleanSketch(sketch) {
    if (!sketch) return null;
    return {
      id: String(sketch.id || `sketch-${Date.now()}`),
      name: String(sketch.name || 'Untitled Sketch'),
      category: String(sketch.category || 'General'),
      difficulty: String(sketch.difficulty || 'Medium'),
      popularity: Number(sketch.popularity || 95),
      imageUrl: sketch.imageUrl ? String(sketch.imageUrl) : '',
      dataUrl: sketch.dataUrl ? String(sketch.dataUrl) : '',
      svgPath: sketch.svgPath ? String(sketch.svgPath) : ''
    };
  }

  getUser() {
    try {
      const u = localStorage.getItem('sketchtrace_user');
      if (u) return JSON.parse(u);
    } catch (e) {}
    return { name: 'Guest Artist', type: 'guest', isLoggedIn: false };
  }

  setUser(u) {
    try {
      localStorage.setItem('sketchtrace_user', JSON.stringify(u));
    } catch (e) {}
  }

  isIndependenceExpired() {
    const now = new Date();
    // Independence theme expires at the end of August 14th (August 15th 00:00:00)
    const cutoff = new Date(now.getFullYear(), 7, 15, 0, 0, 0); // Month 7 is August
    return now >= cutoff;
  }

  getTheme() {
    let t = localStorage.getItem('sketchtrace_theme') || 'light';
    if (t === 'pakistan' && this.isIndependenceExpired()) {
      t = 'light';
      try { localStorage.setItem('sketchtrace_theme', 'light'); } catch (e) {}
    }
    return t;
  }

  setTheme(t) {
    if (t === 'pakistan' && this.isIndependenceExpired()) {
      t = 'light';
    }
    try {
      localStorage.setItem('sketchtrace_theme', t);
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.className = t;
    if (['dark', 'crimson', 'cyberpunk', 'emerald', 'violet', 'ocean', 'amber', 'oled', 'pakistan'].includes(t)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  async getFavorites() {
    try {
      const str = localStorage.getItem('sketchtrace_favs');
      return str ? JSON.parse(str) : [];
    } catch (e) {
      return [];
    }
  }

  async isFavorite(id) {
    const favs = await this.getFavorites();
    return favs.some(f => String(f.id) === String(id));
  }

  async toggleFavorite(sketch) {
    const clean = this._cleanSketch(sketch);
    if (!clean) return false;

    const favs = await this.getFavorites();
    const idx = favs.findIndex(f => String(f.id) === String(clean.id));
    let added = false;

    if (idx >= 0) {
      favs.splice(idx, 1);
    } else {
      favs.unshift(clean);
      added = true;
    }

    try {
      localStorage.setItem('sketchtrace_favs', JSON.stringify(favs));
    } catch (e) {
      console.error('[Storage] Error saving favorites:', e);
    }
    return added;
  }

  async getRecent() {
    try {
      const str = localStorage.getItem('sketchtrace_recent');
      return str ? JSON.parse(str) : [];
    } catch (e) {
      return [];
    }
  }

  async addRecent(sketch) {
    const clean = this._cleanSketch(sketch);
    if (!clean) return;

    let recent = await this.getRecent();
    recent = recent.filter(r => String(r.id) !== String(clean.id));
    recent.unshift(clean);
    if (recent.length > 20) recent = recent.slice(0, 20);
    try {
      localStorage.setItem('sketchtrace_recent', JSON.stringify(recent));
    } catch (e) {}
  }

  async saveDownload(sketch) {
    const clean = this._cleanSketch(sketch);
    if (!clean) return;

    let downloads = await this.getDownloads();
    downloads = downloads.filter(d => String(d.id) !== String(clean.id));
    downloads.unshift(clean);
    try {
      localStorage.setItem('sketchtrace_downloads', JSON.stringify(downloads));
    } catch (e) {
      console.error('[Storage] Error saving download:', e);
    }
  }

  async getDownloads() {
    try {
      const str = localStorage.getItem('sketchtrace_downloads');
      return str ? JSON.parse(str) : [];
    } catch (e) {
      return [];
    }
  }

  async saveUpload(sketch) {
    const clean = this._cleanSketch(sketch);
    if (!clean) return;

    let uploads = await this.getUploads();
    uploads = uploads.filter(u => String(u.id) !== String(clean.id));
    uploads.unshift(clean);
    try {
      localStorage.setItem('sketchtrace_uploads', JSON.stringify(uploads));
    } catch (e) {
      console.error('[Storage] Error saving upload:', e);
    }
  }

  async getUploads() {
    try {
      const str = localStorage.getItem('sketchtrace_uploads');
      return str ? JSON.parse(str) : [];
    } catch (e) {
      return [];
    }
  }

  async deleteUpload(id) {
    let uploads = await this.getUploads();
    uploads = uploads.filter(u => String(u.id) !== String(id));
    try {
      localStorage.setItem('sketchtrace_uploads', JSON.stringify(uploads));
    } catch (e) {}
  }

  async deleteFavorite(id) {
    let favs = await this.getFavorites();
    favs = favs.filter(f => String(f.id) !== String(id));
    try {
      localStorage.setItem('sketchtrace_favs', JSON.stringify(favs));
    } catch (e) {}
  }

  async deleteDownload(id) {
    let downloads = await this.getDownloads();
    downloads = downloads.filter(d => String(d.id) !== String(id));
    try {
      localStorage.setItem('sketchtrace_downloads', JSON.stringify(downloads));
    } catch (e) {}
  }
}

window.SketchTrace.storage = new StorageService();
