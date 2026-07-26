/**
 * SketchTrace Storage Service
 */

window.SketchTrace = window.SketchTrace || {};

class StorageService {
  getUser() {
    try {
      const u = localStorage.getItem('sketchtrace_user');
      if (u) return JSON.parse(u);
    } catch (e) {}
    return { name: 'Guest Artist', type: 'guest', isLoggedIn: false };
  }

  setUser(u) {
    localStorage.setItem('sketchtrace_user', JSON.stringify(u));
  }

  getTheme() {
    return localStorage.getItem('sketchtrace_theme') || 'light';
  }

  setTheme(t) {
    localStorage.setItem('sketchtrace_theme', t);
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.className = t;
    if (['dark', 'crimson', 'cyberpunk', 'emerald', 'violet', 'ocean', 'amber', 'oled'].includes(t)) {
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
    return favs.some(f => f.id === id);
  }

  async toggleFavorite(sketch) {
    const favs = await this.getFavorites();
    const idx = favs.findIndex(f => f.id === sketch.id);
    let added = false;

    if (idx >= 0) {
      favs.splice(idx, 1);
    } else {
      favs.unshift(sketch);
      added = true;
    }

    localStorage.setItem('sketchtrace_favs', JSON.stringify(favs));
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
    let recent = await this.getRecent();
    recent = recent.filter(r => r.id !== sketch.id);
    recent.unshift(sketch);
    if (recent.length > 20) recent = recent.slice(0, 20);
    localStorage.setItem('sketchtrace_recent', JSON.stringify(recent));
  }

  async saveDownload(sketch) {
    let downloads = [];
    try {
      const str = localStorage.getItem('sketchtrace_downloads');
      if (str) downloads = JSON.parse(str);
    } catch (e) {}

    if (!downloads.some(d => d.id === sketch.id)) {
      downloads.unshift(sketch);
      localStorage.setItem('sketchtrace_downloads', JSON.stringify(downloads));
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
    let uploads = [];
    try {
      const str = localStorage.getItem('sketchtrace_uploads');
      if (str) uploads = JSON.parse(str);
    } catch (e) {}

    uploads.unshift(sketch);
    localStorage.setItem('sketchtrace_uploads', JSON.stringify(uploads));
  }

  async getUploads() {
    try {
      const str = localStorage.getItem('sketchtrace_uploads');
      return str ? JSON.parse(str) : [];
    } catch (e) {
      return [];
    }
  }
}

window.SketchTrace.storage = new StorageService();
