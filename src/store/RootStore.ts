import CatalogStore from './CatalogStore';
import FilterStore from './FilterStore';

class RootStore {
  FilterStore: typeof FilterStore;
  CatalogStore: typeof CatalogStore;

  constructor() {
    this.CatalogStore = CatalogStore;
    this.FilterStore = FilterStore;
  }
}

const Store = new RootStore();
export default Store;
