/**
 * SketchTrace - Admin Controller
 */

window.SketchTrace = window.SketchTrace || {};

class AdminController {
  getAdminSketches() {
    try {
      const str = localStorage.getItem('sketchtrace_admin_sketches');
      if (str) return JSON.parse(str);
    } catch (e) {}
    return [];
  }

  addAdminSketch(sketchObj) {
    let list = this.getAdminSketches();
    const newSketch = {
      id: `admin-${Date.now()}`,
      name: sketchObj.name,
      category: sketchObj.category,
      difficulty: sketchObj.difficulty || 'Medium',
      popularity: 100,
      dataUrl: sketchObj.dataUrl || '',
      tags: [sketchObj.category, 'admin']
    };
    list.unshift(newSketch);
    localStorage.setItem('sketchtrace_admin_sketches', JSON.stringify(list));
    return newSketch;
  }

  deleteAdminSketch(id) {
    let list = this.getAdminSketches();
    list = list.filter(s => s.id !== id);
    localStorage.setItem('sketchtrace_admin_sketches', JSON.stringify(list));
  }
}

window.SketchTrace.adminController = new AdminController();
