/**
 * SketchTrace - Fail-Safe Application Controller & View Switcher
 */

window.SketchTrace = window.SketchTrace || {};

class SketchTraceApp {
  constructor() {
    this.currentView = 'home';
    this.selectedSketch = null;
    this.traceEngine = null;
    this.currentConvertedImage = null;
    this.init();
  }

  init() {
    try {
      const storage = window.SketchTrace.storage;
      if (storage) {
        const theme = storage.getTheme();
        storage.setTheme(theme);
      }

      const canvas = document.getElementById('traceCanvas');
      if (canvas && window.SketchTrace.TraceEngine) {
        this.traceEngine = new window.SketchTrace.TraceEngine(canvas);
        window.addEventListener('resize', () => this.handleResize());
        this.handleResize();
      }

      this.bindNavigation();
      this.bindCategoriesClick();
      this.bindSearch();
      this.bindTraceControls();
      this.bindConverter();
      this.bindAdmin();
      this.bindPwaInstall();
      this.bindThemeModal();
      this.initPakistanFlagRain();
      this.registerServiceWorker();

      this.renderHome();
    } catch (err) {
      console.error('App init error:', err);
    }
  }

  initPakistanFlagRain() {
    let container = document.getElementById('pakistanFlagRain');
    if (!container) {
      container = document.createElement('div');
      container.id = 'pakistanFlagRain';
      container.className = 'pointer-events-none fixed inset-0 z-0 overflow-hidden hidden';
      document.body.insertBefore(container, document.body.firstChild);
    }

    let bigFlag = document.getElementById('pakistanBigWavingFlag');
    if (!bigFlag) {
      bigFlag = document.createElement('div');
      bigFlag.id = 'pakistanBigWavingFlag';
      bigFlag.className = 'pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden hidden';
      bigFlag.innerHTML = `
        <svg viewBox="0 0 300 200" class="w-[95vw] max-w-[1400px] h-auto opacity-40 filter drop-shadow-2xl waving-big-flag">
          <rect width="300" height="200" fill="#01411C" rx="12"/>
          <rect width="75" height="200" fill="#FFFFFF" rx="8"/>
          <g transform="translate(187.5, 100)">
            <circle cx="0" cy="0" r="48" fill="#FFFFFF"/>
            <circle cx="14" cy="-10" r="42" fill="#01411C"/>
            <polygon points="14,-20 19.5,-5 35,-5 22.5,4 27,19 14,10 1,19 5.5,4 -7,-5 8.5,-5" fill="#FFFFFF" transform="rotate(-15)"/>
          </g>
        </svg>
      `;
      document.body.insertBefore(bigFlag, document.body.firstChild);
    }

    const flagSvgs = [
      // 1. Waving Flag with Pole
      `<svg viewBox="0 0 100 70" class="w-10 h-7 inline-block drop-shadow-md"><line x1="10" y1="5" x2="10" y2="68" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round"/><circle cx="10" cy="5" r="4" fill="#FFD700"/><g transform="translate(10, 8)"><rect width="80" height="50" fill="#01411C" rx="3"/><rect width="20" height="50" fill="#FFFFFF" rx="2"/><g transform="translate(50, 25)"><circle cx="0" cy="0" r="12" fill="#FFFFFF"/><circle cx="3.5" cy="-2.5" r="10" fill="#01411C"/><polygon points="3,-5 4.5,-1 8.5,-1 5.5,1 6.5,5 3.5,3 0.5,5 1.5,1 -2.5,-1 2.5,-1" fill="#FFFFFF" transform="rotate(-15)"/></g></g></svg>`,
      // 2. Official National Flag Banner
      `<svg viewBox="0 0 90 60" class="w-9 h-6 inline-block drop-shadow-md"><rect width="90" height="60" fill="#01411C" rx="4"/><rect width="22.5" height="60" fill="#FFFFFF" rx="3"/><g transform="translate(56.25, 30)"><circle cx="0" cy="0" r="14" fill="#FFFFFF"/><circle cx="4" cy="-3" r="12" fill="#01411C"/><polygon points="4,-6 5.5,-1.5 10,-1.5 6.5,1 7.8,5.5 4,3 0.2,5.5 1.5,1 -2,-1.5 2.5,-1.5" fill="#FFFFFF" transform="rotate(-15)"/></g></svg>`,
      // 3. Round Crescent Badge
      `<svg viewBox="0 0 80 80" class="w-8 h-8 inline-block drop-shadow-md"><circle cx="40" cy="40" r="38" fill="#01411C" stroke="#FFFFFF" stroke-width="3"/><g transform="translate(40, 40)"><circle cx="0" cy="0" r="18" fill="#FFFFFF"/><circle cx="5" cy="-4" r="15" fill="#01411C"/><polygon points="5,-8 7,-2 13,-2 8,2 10,8 5,4 0,8 2,2 -3,-2 3,-2" fill="#FFFFFF" transform="rotate(-15)"/></g></svg>`
    ];

    let html = '';
    const totalFlags = 40;

    for (let i = 0; i < totalFlags; i++) {
      const svg = flagSvgs[i % flagSvgs.length];
      const left = (Math.random() * 95).toFixed(2);
      const delay = (Math.random() * 10).toFixed(2);
      const duration = (6 + Math.random() * 8).toFixed(2);
      const opacity = (0.65 + Math.random() * 0.35).toFixed(2);

      html += `<div class="falling-flag" style="left:${left}%; animation-delay:${delay}s; animation-duration:${duration}s; opacity:${opacity};">${svg}</div>`;
    }

    container.innerHTML = html;
  }

  bindThemeModal() {
    const modal = document.getElementById('themeModal');
    const toggleBtn = document.getElementById('themeToggleBtn');
    const closeBtn = document.getElementById('closeThemeModalBtn');

    if (window.SketchTrace.storage && window.SketchTrace.storage.isIndependenceExpired()) {
      const pakBtn = document.querySelector('[data-theme-btn="pakistan"]');
      if (pakBtn) pakBtn.classList.add('hidden');
    }

    if (toggleBtn && modal) {
      toggleBtn.onclick = () => modal.classList.remove('hidden');
    }
    if (closeBtn && modal) {
      closeBtn.onclick = () => modal.classList.add('hidden');
    }

    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.onclick = () => {
        const themeName = btn.getAttribute('data-theme-btn');
        if (window.SketchTrace.storage) {
          window.SketchTrace.storage.setTheme(themeName);
          this.showToast(`🎨 Theme changed to ${themeName.toUpperCase()}!`);
        }
        modal?.classList.add('hidden');
      };
    });
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('[PWA] ServiceWorker registered with scope:', reg.scope);
            reg.update();
            reg.onupdatefound = () => {
              const installingWorker = reg.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    this.showToast('🚀 App updated! Ads & Features active.');
                  }
                };
              }
            };
          })
          .catch((err) => {
            console.error('[PWA] ServiceWorker registration error:', err);
          });
      });
    }
  }

  bindPwaInstall() {
    let deferredPrompt = null;
    const installBtn = document.getElementById('pwaInstallBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (installBtn) {
        installBtn.classList.remove('hidden');
        installBtn.onclick = async () => {
          installBtn.classList.add('hidden');
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log('[PWA] User response to install prompt:', outcome);
          deferredPrompt = null;
        };
      }
    });

    window.addEventListener('appinstalled', () => {
      if (installBtn) installBtn.classList.add('hidden');
      this.showToast('🎉 SketchTrace Installed Successfully!');
    });
  }

  handleResize() {
    const container = document.getElementById('cameraTraceView');
    if (container && this.traceEngine) {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      this.traceEngine.resizeCanvas(w, h);
    }
  }

  switchView(viewName, params = {}) {
    try {
      this.currentView = viewName;
      
      // Target view element ID
      const targetId = viewName === 'home' ? 'homeView' :
                       viewName === 'category' ? 'categoryView' :
                       viewName === 'cameraTrace' ? 'cameraTraceView' :
                       viewName === 'aiConverter' ? 'aiConverterView' :
                       viewName === 'myUploads' ? 'myUploadsView' :
                       viewName === 'admin' ? 'adminView' : 'homeView';

      const views = ['homeView', 'categoryView', 'cameraTraceView', 'aiConverterView', 'myUploadsView', 'adminView'];
      
      views.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (id === targetId) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        }
      });

      const headerEl = document.querySelector('header');
      const navEl = document.querySelector('nav');
      const footerEl = document.querySelector('footer');

      if (viewName === 'cameraTrace') {
        if (headerEl) headerEl.classList.add('hidden');
        if (navEl) navEl.classList.add('hidden');
        if (footerEl) footerEl.classList.add('hidden');
      } else {
        if (headerEl) headerEl.classList.remove('hidden');
        if (navEl) navEl.classList.remove('hidden');
        if (footerEl) footerEl.classList.remove('hidden');
      }

      // View-specific actions
      if (viewName === 'home') {
        this.renderHome();
        if (window.SketchTrace.cameraService) window.SketchTrace.cameraService.stopCamera();
      } else if (viewName === 'category') {
        const catId = params.categoryId || 'anime';
        this.renderCategoryPage(catId);
        if (window.SketchTrace.cameraService) window.SketchTrace.cameraService.stopCamera();
      } else if (viewName === 'cameraTrace') {
        if (params.sketch) {
          this.startCameraTraceSession(params.sketch);
        }
      } else if (viewName === 'aiConverter') {
        if (window.SketchTrace.cameraService) window.SketchTrace.cameraService.stopCamera();
        if (params.imageSource) {
          this.setupAIConverterView(params.imageSource);
        }
      } else if (viewName === 'myUploads') {
        if (window.SketchTrace.cameraService) window.SketchTrace.cameraService.stopCamera();
        this.renderMyUploads();
      } else if (viewName === 'admin') {
        if (window.SketchTrace.cameraService) window.SketchTrace.cameraService.stopCamera();
        this.renderAdminPanel();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('switchView error:', err);
    }
  }

  // --- Home Page Rendering ---
  renderHome() {
    try {
      const sketchCatalog = window.SketchTrace.sketchCatalog;
      if (!sketchCatalog) return;

      this.renderCategoriesGrid();
      this.renderSketchGrid('featuredGrid', sketchCatalog.getFeaturedSketches() || []);
      this.renderSketchGrid('trendingGrid', sketchCatalog.getTrendingSketches() || []);
      this.renderSketchGrid('newGrid', sketchCatalog.getNewSketches() || []);
      this.renderRecentlyViewedSection();
      this.renderFavoritesSection();
    } catch (e) {
      console.error('renderHome error:', e);
    }
  }

  renderCategoriesGrid() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    const CATEGORIES = (window.SketchTrace.sketchCatalog && window.SketchTrace.sketchCatalog.CATEGORIES) || [];

    grid.innerHTML = CATEGORIES.map(cat => `
      <div data-category="${cat.id}" class="category-card cursor-pointer p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all">
        <div class="text-3xl mb-2">${cat.icon}</div>
        <h3 class="font-bold text-sm text-slate-900">${cat.name}</h3>
        <p class="text-xs text-slate-500 mt-0.5 line-clamp-1">${cat.description}</p>
        <div class="mt-2 flex items-center justify-between text-xs text-blue-600 font-semibold">
          <span>${cat.count}+ Sketches</span>
          <span>→</span>
        </div>
      </div>
    `).join('');

    this.bindCategoriesClick();
  }

  bindCategoriesClick() {
    document.querySelectorAll('.category-card').forEach(card => {
      card.onclick = () => {
        const catId = card.getAttribute('data-category');
        this.switchView('category', { categoryId: catId });
      };
    });
  }

  async renderRecentlyViewedSection() {
    try {
      const recent = (await window.SketchTrace.storage.getRecent()) || [];
      const sec = document.getElementById('recentSection');
      if (!sec) return;
      if (recent.length === 0) {
        sec.classList.add('hidden');
      } else {
        sec.classList.remove('hidden');
        this.renderSketchGrid('recentGrid', recent);
      }
    } catch (e) {}
  }

  async renderFavoritesSection() {
    try {
      const favs = (await window.SketchTrace.storage.getFavorites()) || [];
      const sec = document.getElementById('favoritesSection');
      if (!sec) return;
      if (favs.length === 0) {
        sec.classList.add('hidden');
      } else {
        sec.classList.remove('hidden');
        this.renderSketchGrid('favoritesGrid', favs);
      }
    } catch (e) {}
  }

  renderSketchGrid(containerId, sketches = [], options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isLibrary = options.isLibrary || ['myUploadsGrid', 'myFavsGrid', 'myDownloadsGrid'].includes(containerId);

    if (!sketches || sketches.length === 0) {
      container.innerHTML = `<div class="col-span-full p-6 text-center text-xs text-slate-400">No sketches found in this list.</div>`;
      return;
    }

    container.innerHTML = sketches.map(sketch => {
      const isIndep = sketch.category === 'independence' || (sketch.id && String(sketch.id).startsWith('independence'));
      return `
      <div data-sketch-id="${sketch.id}" class="sketch-card cursor-pointer group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-600 hover:shadow-md transition-all relative">
        <div class="bg-slate-50 p-6 aspect-square flex items-center justify-center relative overflow-hidden border-b border-slate-100">
          ${isIndep ? `
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-700 to-green-600 text-white text-[10px] font-extrabold shadow-lg border border-emerald-400/50 flex items-center gap-1 z-10">
              🇵🇰 14 August Special
            </span>
          ` : ''}
          ${(sketch.imageUrl || sketch.dataUrl) ? `
            <img src="${sketch.imageUrl || sketch.dataUrl}" alt="${sketch.name}" class="w-full h-full object-contain group-hover:scale-105 transition-transform" />
          ` : `
            <svg viewBox="0 0 400 400" class="w-full h-full object-contain group-hover:scale-105 transition-transform">
              ${sketch.svgPath}
            </svg>
          `}
          <span class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase">
            ${sketch.difficulty || 'HD'}
          </span>
        </div>
        <div class="p-4">
          ${isIndep ? `
            <div class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-extrabold mb-1.5 border border-emerald-300 shadow-xs">
              🇵🇰 14 August Special
            </div>
          ` : ''}
          <h4 class="font-bold text-sm text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">${sketch.name}</h4>
          <div class="flex items-center justify-between mt-1.5 text-xs text-slate-500">
            <span class="capitalize">${sketch.category}</span>
            <span class="font-semibold text-amber-500">★ ${sketch.popularity || 95}%</span>
          </div>
          ${isLibrary ? `
            <div class="mt-3 flex items-center gap-2">
              <button class="start-trace-btn flex-1 py-2 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1">
                👁️ View & Trace
              </button>
              <button class="delete-library-btn px-2.5 py-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold text-xs transition-colors flex items-center justify-center" title="Delete Image">
                🗑️
              </button>
            </div>
          ` : `
            <button class="start-trace-btn mt-3 w-full py-2 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1">
              👁️ View & Trace
            </button>
          `}
        </div>
      </div>
    `;}).join('');

    container.querySelectorAll('.sketch-card').forEach(card => {
      card.onclick = async (e) => {
        const id = card.getAttribute('data-sketch-id');
        const sketch = window.SketchTrace.sketchCatalog.getSketchById(id) || sketches.find(s => s.id === id);

        if (e.target.closest('.delete-library-btn')) {
          e.stopPropagation();
          if (containerId === 'myUploadsGrid') {
            await window.SketchTrace.storage.deleteUpload(id);
          } else if (containerId === 'myFavsGrid') {
            await window.SketchTrace.storage.deleteFavorite(id);
          } else if (containerId === 'myDownloadsGrid') {
            await window.SketchTrace.storage.deleteDownload(id);
          } else {
            await window.SketchTrace.storage.deleteUpload(id);
            await window.SketchTrace.storage.deleteFavorite(id);
            await window.SketchTrace.storage.deleteDownload(id);
          }
          this.showToast('🗑️ Image deleted from Library!');
          this.renderMyUploads();
          this.renderHome();
          return;
        }

        // Always open the detail modal first (where Favorite, Download & Start Trace options are present)
        this.openSketchDetailModal(sketch);
      };
    });
  }

  // --- Category Page ---
  renderCategoryPage(categoryId = 'anime') {
    const sketchCatalog = window.SketchTrace.sketchCatalog;
    if (!sketchCatalog) return;

    const CATEGORIES = sketchCatalog.CATEGORIES || [];
    let categoryObj = CATEGORIES.find(c => c.id === categoryId);
    if (!categoryObj) {
      const formattedName = categoryId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      categoryObj = { id: categoryId, name: formattedName, description: `${formattedName} line art sketches for tracing.` };
    }

    const sketches = sketchCatalog.getSketchesByCategory(categoryId) || [];

    const titleEl = document.getElementById('categoryTitle');
    const descEl = document.getElementById('categoryDescription');
    const countEl = document.getElementById('categoryCount');

    if (titleEl) titleEl.innerText = categoryObj.name;
    if (descEl) descEl.innerText = categoryObj.description || '';
    if (countEl) countEl.innerText = `${sketches.length} Sketches Available`;

    this.renderSketchGrid('categorySketchesGrid', sketches);
  }

  // --- Sketch Details Modal ---
  async openSketchDetailModal(sketch) {
    if (!sketch) return;
    this.selectedSketch = sketch;

    const modal = document.getElementById('sketchDetailModal');
    if (!modal) return;

    // Open picture modal immediately for fast UI feedback
    modal.classList.remove('hidden');

    if (window.SketchTrace.storage) {
      window.SketchTrace.storage.addRecent(sketch).catch(() => {});
    }

    const nameEl = document.getElementById('modalSketchName');
    const catEl = document.getElementById('modalSketchCategory');
    const diffEl = document.getElementById('modalSketchDifficulty');
    const previewContainer = document.getElementById('modalSketchPreview');

    const isIndep = sketch.category === 'independence' || (sketch.id && String(sketch.id).startsWith('independence'));
    if (nameEl) nameEl.innerText = sketch.name;
    if (catEl) {
      catEl.innerHTML = isIndep ? `<span class="inline-flex items-center gap-1 font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">🇵🇰 14 August Special</span>` : sketch.category;
    }
    if (diffEl) diffEl.innerText = sketch.difficulty || 'Medium';

    if (previewContainer) {
      if (sketch.imageUrl || sketch.dataUrl) {
        previewContainer.innerHTML = `<img src="${sketch.imageUrl || sketch.dataUrl}" alt="${sketch.name}" class="w-full h-full object-contain" />`;
      } else if (sketch.svgPath) {
        previewContainer.innerHTML = `<svg viewBox="0 0 400 400" class="w-full h-full object-contain">${sketch.svgPath}</svg>`;
      }
    }

    const favBtn = document.getElementById('modalFavBtn');
    if (favBtn && window.SketchTrace.storage) {
      const isFav = await window.SketchTrace.storage.isFavorite(sketch.id);
      favBtn.innerText = isFav ? '❤️ Favorited' : '🤍 Favorite';
      favBtn.onclick = async () => {
        const added = await window.SketchTrace.storage.toggleFavorite(sketch);
        favBtn.innerText = added ? '❤️ Favorited' : '🤍 Favorite';
        this.showToast(added ? '❤️ Added to Favorites!' : '🤍 Removed from Favorites');
        this.renderHome();
        this.renderMyUploads();
      };
    }

    const downloadBtn = document.getElementById('modalDownloadBtn');
    if (downloadBtn) {
      downloadBtn.onclick = async () => {
        if (window.SketchTrace.storage) {
          await window.SketchTrace.storage.saveDownload(sketch);
          this.renderMyUploads();
        }

        const src = sketch.imageUrl || sketch.dataUrl;
        const name = (sketch.name || 'sketch').replace(/[^a-z0-9_-]/gi, '_');

        if (src) {
          try {
            const res = await fetch(src);
            const blob = await res.blob();
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            const ext = blob.type.includes('jpeg') || blob.type.includes('jpg') ? 'jpg' : 'png';
            a.download = `${name}.${ext}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
          } catch (e) {
            const a = document.createElement('a');
            a.href = src;
            a.download = `${name}.png`;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        } else if (sketch.svgPath) {
          const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">${sketch.svgPath}</svg>`;
          const blob = new Blob([svgContent], { type: 'image/svg+xml' });
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = `${name}.svg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        }

        this.showToast('📥 Downloaded & saved to Library!');
      };
    }

    const startBtn = document.getElementById('modalStartTraceBtn');
    if (startBtn) {
      startBtn.onclick = () => {
        modal.classList.add('hidden');
        this.switchView('cameraTrace', { sketch });
      };
    }

    modal.classList.remove('hidden');
  }

  // --- Camera Trace View Mode ---
  async startCameraTraceSession(sketch) {
    if (!sketch) return;
    this.selectedSketch = sketch;
    this.switchView('cameraTrace');
    const videoEl = document.getElementById('cameraVideo');

    if (this.traceEngine) {
      await this.traceEngine.loadSketch(sketch);
    }
    if (window.SketchTrace.cameraService && videoEl) {
      await window.SketchTrace.cameraService.startCamera(videoEl);
    }
    setTimeout(() => this.handleResize(), 50);
  }

  bindTraceControls() {
    const drawer = document.getElementById('traceOptionsDrawer');
    document.getElementById('toggleOptionsBtn')?.addEventListener('click', () => {
      drawer?.classList.toggle('hidden');
    });
    document.getElementById('closeOptionsBtn')?.addEventListener('click', () => {
      drawer?.classList.add('hidden');
    });

    document.getElementById('traceBackBtn')?.addEventListener('click', () => {
      if (window.SketchTrace.cameraService) window.SketchTrace.cameraService.stopCamera();
      this.switchView('home');
    });

    document.getElementById('traceFlashBtn')?.addEventListener('click', async () => {
      if (window.SketchTrace.cameraService) {
        const on = await window.SketchTrace.cameraService.toggleTorch();
        this.showToast(on ? 'Flashlight ON' : 'Flashlight OFF');
      }
    });

    document.getElementById('traceGridSelect')?.addEventListener('change', (e) => {
      if (this.traceEngine) {
        this.traceEngine.gridType = e.target.value;
        this.traceEngine.render();
      }
    });

    document.getElementById('traceScreenshotBtn')?.addEventListener('click', () => {
      const canvas = document.getElementById('traceCanvas');
      if (window.SketchTrace.cameraService && canvas) {
        window.SketchTrace.cameraService.captureCompositeScreenshot(canvas, this.selectedSketch ? this.selectedSketch.name : 'sketch');
        this.showToast('Screenshot saved!');
      }
    });

    document.getElementById('opacitySlider')?.addEventListener('input', (e) => {
      if (this.traceEngine) {
        this.traceEngine.opacity = parseFloat(e.target.value);
        this.traceEngine.render();
      }
    });
    document.getElementById('brightnessSlider')?.addEventListener('input', (e) => {
      if (this.traceEngine) {
        this.traceEngine.brightness = parseInt(e.target.value);
        this.traceEngine.render();
      }
    });
    document.getElementById('contrastSlider')?.addEventListener('input', (e) => {
      if (this.traceEngine) {
        this.traceEngine.contrast = parseInt(e.target.value);
        this.traceEngine.render();
      }
    });

    document.getElementById('zoomInBtn')?.addEventListener('click', () => {
      if (this.traceEngine) {
        this.traceEngine.scale = Math.min(5.0, this.traceEngine.scale + 0.15);
        this.traceEngine.render();
      }
    });
    document.getElementById('zoomOutBtn')?.addEventListener('click', () => {
      if (this.traceEngine) {
        this.traceEngine.scale = Math.max(0.2, this.traceEngine.scale - 0.15);
        this.traceEngine.render();
      }
    });
    document.getElementById('rotateBtn')?.addEventListener('click', () => {
      if (this.traceEngine) {
        this.traceEngine.rotation = (this.traceEngine.rotation + 90) % 360;
        this.traceEngine.render();
      }
    });
    document.getElementById('invertBtn')?.addEventListener('click', () => {
      if (this.traceEngine) {
        this.traceEngine.invert = !this.traceEngine.invert;
        this.traceEngine.render();
      }
    });
    document.getElementById('bgDimmerBtn')?.addEventListener('click', () => {
      if (this.traceEngine) {
        this.traceEngine.bgDimmer = this.traceEngine.bgDimmer === 0 ? 0.6 : 0;
        this.traceEngine.render();
      }
    });
    document.getElementById('resetPosBtn')?.addEventListener('click', () => {
      if (this.traceEngine) this.traceEngine.resetPosition();
    });

    const lockPosBtn = document.getElementById('lockPosBtn');
    lockPosBtn?.addEventListener('click', () => {
      if (this.traceEngine) {
        const locked = !this.traceEngine.isLocked;
        this.traceEngine.setLock(locked);
        lockPosBtn.classList.toggle('bg-amber-500', locked);
        this.showToast(locked ? 'Position Locked!' : 'Position Unlocked!');
      }
    });

    const screenLockBtn = document.getElementById('screenLockBtn');
    const overlay = document.getElementById('screenLockOverlay');
    const unlockBtn = document.getElementById('unlockHoldBtn');

    screenLockBtn?.addEventListener('click', () => {
      if (window.SketchTrace.screenLockService) window.SketchTrace.screenLockService.lock(overlay);
    });

    if (unlockBtn && overlay && window.SketchTrace.screenLockService) {
      window.SketchTrace.screenLockService.bindLongPressUnlock(unlockBtn, overlay, () => {
        this.showToast('Screen Unlocked!');
      });
    }
  }

  bindConverter() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const customSketch = { id: `upload-${Date.now()}`, name: file.name || 'My Custom Photo', category: 'Uploads', dataUrl: evt.target.result };
          if (window.SketchTrace.storage) window.SketchTrace.storage.saveUpload(customSketch);
          this.switchView('cameraTrace', { sketch: customSketch });
        };
        reader.readAsDataURL(file);
      }
    };

    document.getElementById('heroUploadBtn')?.addEventListener('click', () => fileInput.click());
  }

  // --- My Uploads & Library ---
  async renderMyUploads() {
    if (!window.SketchTrace.storage) return;
    const catalog = window.SketchTrace.sketchCatalog;

    let uploads = (await window.SketchTrace.storage.getUploads()) || [];
    let favs = (await window.SketchTrace.storage.getFavorites()) || [];
    let downloads = (await window.SketchTrace.storage.getDownloads()) || [];

    // Ensure full sketch object data (imageUrl, svgPath, name) is populated
    if (catalog) {
      favs = favs.map(f => {
        const catItem = catalog.getSketchById(f.id);
        return catItem ? { ...catItem, ...f } : f;
      });
      downloads = downloads.map(d => {
        const catItem = catalog.getSketchById(d.id);
        return catItem ? { ...catItem, ...d } : d;
      });
    }

    this.renderSketchGrid('myUploadsGrid', uploads);
    this.renderSketchGrid('myFavsGrid', favs);
    this.renderSketchGrid('myDownloadsGrid', downloads);
  }

  // --- Admin Panel ---
  renderAdminPanel() {
    if (!window.SketchTrace.adminController) return;
    const list = window.SketchTrace.adminController.getAdminSketches() || [];
    const container = document.getElementById('adminSketchesList');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `<div class="p-4 text-center text-xs text-slate-400 bg-white rounded-xl border border-slate-200">No custom admin sketches added yet. Use the form above to add sketches.</div>`;
      return;
    }

    container.innerHTML = list.map(s => `
      <div data-id="${s.id}" class="admin-sketch-card cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-sm transition-all">
        <div class="flex items-center gap-3">
          <img src="${s.dataUrl}" class="w-12 h-12 object-contain bg-slate-50 rounded-lg p-1 border border-slate-100" />
          <div>
            <h4 class="font-bold text-sm text-slate-900">${s.name}</h4>
            <span class="text-xs text-blue-600 font-semibold">${s.category} • Tap to Open & Trace 📷</span>
          </div>
        </div>
        <button data-id="${s.id}" class="delete-admin-btn p-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold">Delete</button>
      </div>
    `).join('');

    container.querySelectorAll('.admin-sketch-card').forEach(card => {
      card.onclick = (e) => {
        if (e.target.closest('.delete-admin-btn')) return;
        const id = card.getAttribute('data-id');
        const sketch = list.find(s => s.id === id);
        if (sketch) {
          this.openSketchDetailModal(sketch);
        }
      };
    });

    container.querySelectorAll('.delete-admin-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        window.SketchTrace.adminController.deleteAdminSketch(btn.getAttribute('data-id'));
        this.renderAdminPanel();
      };
    });
  }

  bindAdmin() {
    document.getElementById('adminAddSketchForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('adminSketchNameInput');
      const catSelect = document.getElementById('adminCategorySelect');
      const fileInput = document.getElementById('adminFileInput');

      if (!nameInput || !fileInput || !fileInput.files[0]) {
        this.showToast('Please enter a sketch name and select a sketch file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (evt) => {
        if (window.SketchTrace.adminController) {
          window.SketchTrace.adminController.addAdminSketch({
            name: nameInput.value,
            category: catSelect ? catSelect.value : 'anime',
            dataUrl: evt.target.result
          });
          this.renderAdminPanel();
          this.showToast('Sketch added to catalog!');
        }
      };
      reader.readAsDataURL(fileInput.files[0]);
    });
  }

  // --- Navigation Binding ---
  bindNavigation() {
    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const targetView = btn.getAttribute('data-nav');
        this.switchView(targetView);
      };
    });

    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
      const modal = document.getElementById('themeModal');
      if (modal) modal.classList.remove('hidden');
    });

    document.querySelectorAll('.close-modal-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
      };
    });
  }

  bindSearch() {
    const inputIds = ['mainSearchInput', 'heroSearchInput', 'mobileSearchInput'];
    const dropdownIds = ['searchDropdown', 'heroSearchDropdown', 'mobileSearchDropdown'];

    const inputs = inputIds.map(id => document.getElementById(id)).filter(Boolean);
    const dropdowns = dropdownIds.map(id => document.getElementById(id)).filter(Boolean);

    if (inputs.length === 0) return;

    const handleSearch = (e) => {
      const q = e.target.value;
      inputs.forEach(inp => { if (inp !== e.target) inp.value = q; });

      if (!q.trim()) {
        dropdowns.forEach(d => d.classList.add('hidden'));
        return;
      }
      if (!window.SketchTrace.sketchCatalog) return;

      const results = window.SketchTrace.sketchCatalog.searchSketches(q) || [];

      dropdowns.forEach(dropdown => {
        if (results.length === 0) {
          dropdown.innerHTML = `<div class="p-4 text-xs text-slate-500 text-center font-medium">No sketches found matching "${q}"</div>`;
        } else {
          dropdown.innerHTML = results.slice(0, 10).map(s => `
            <div data-id="${s.id}" class="search-item p-2.5 hover:bg-blue-50 cursor-pointer border-b border-slate-100 flex items-center justify-between transition-colors">
              <div class="flex items-center gap-3 overflow-hidden">
                ${(s.imageUrl || s.dataUrl) ? `
                  <img src="${s.imageUrl || s.dataUrl}" alt="${s.name}" class="w-10 h-10 object-contain bg-slate-50 rounded-lg p-0.5 border border-slate-200 flex-shrink-0" />
                ` : `
                  <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xs flex-shrink-0">🎨</div>
                `}
                <div class="truncate">
                  <h4 class="font-bold text-xs text-slate-900 truncate">${s.name}</h4>
                  <span class="text-[10px] text-blue-600 font-semibold uppercase tracking-wider">${s.category} • ${s.difficulty || 'Medium'}</span>
                </div>
              </div>
              <span class="text-xs text-blue-600 font-bold flex-shrink-0 ml-2 bg-blue-50 px-2 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">Trace 📷</span>
            </div>
          `).join('');

          dropdown.querySelectorAll('.search-item').forEach(item => {
            item.onclick = () => {
              const id = item.getAttribute('data-id');
              const s = window.SketchTrace.sketchCatalog.getSketchById(id) || results.find(r => r.id === id);
              dropdowns.forEach(d => d.classList.add('hidden'));
              this.openSketchDetailModal(s);
            };
          });
        }
        dropdown.classList.remove('hidden');
      });
    };

    inputs.forEach(input => {
      input.addEventListener('input', handleSearch);
      input.addEventListener('focus', handleSearch);
    });

    document.addEventListener('click', (e) => {
      const isInputClick = inputs.some(inp => inp.contains(e.target));
      const isDropdownClick = dropdowns.some(drp => drp.contains(e.target));
      if (!isInputClick && !isDropdownClick) {
        dropdowns.forEach(d => d.classList.add('hidden'));
      }
    });
  }

  showToast(msg) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
  }
}

function initApp() {
  if (!window.sketchApp) {
    window.sketchApp = new SketchTraceApp();
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
