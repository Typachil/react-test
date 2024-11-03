import { makeAutoObservable } from 'mobx';

import { MEDIA_QUERY } from '@/shared/constants';

class HeaderUIStore {
  heightBeforeTransparent: number | undefined;
  visible: boolean = true;
  transparent: boolean = false;
  isOpenNav: boolean = false;
  isActiveSearch: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setVisibility = (visibility: boolean) => {
    this.visible = visibility;
  };

  setTransparency = (transparency: boolean) => {
    this.transparent = transparency;
  };

  setHeightBeforeTransparent = (height: number) => {
    this.heightBeforeTransparent = height;
  };

  setOpenNav = (isOpen: boolean) => {
    this.isOpenNav = isOpen;
  };

  setActiveSearch = (isActive: boolean) => {
    this.isActiveSearch = isActive;
  };
}

class UIStore {
  pageFullHeight: number = 0;

  heightToTransparentHeader: number = 0;
  isHeaderVisible: boolean = true;
  isHeaderTransparent: boolean = false;
  isSearchActive: boolean = false;

  currentVisibleBlockColor: string | undefined;

  isDrawerAuthOpen: boolean = false;
  isDrawerMenuOpen: boolean = false;
  isDrawerFilterOpen: boolean = false;
  isDrawerFeedbackOpen: boolean = false;

  deviceType: string;

  Header: HeaderUIStore;

  constructor() {
    this.Header = new HeaderUIStore();
    makeAutoObservable(this);
    this.deviceType = 'desktop';

    if (typeof window !== 'undefined') {
      this.deviceType = this.getDeviceType(window.innerWidth);
      this.handleResize = this.handleResize.bind(this);
      window.addEventListener('resize', this.handleResize);
    }
  }

  getDeviceType(width : number) {
    if (width >= MEDIA_QUERY.LAPTOP) return 'desktop';
    if (width >= MEDIA_QUERY.TABLET) return 'laptop';
    if (width >= MEDIA_QUERY.MOBILE) return 'tablet';
    return 'mobile';
  }

  handleResize() {
    this.deviceType = this.getDeviceType(window.innerWidth);
  }

  setDrawerAuthOpen = (isOpen: boolean) => {
    this.isDrawerAuthOpen = isOpen;
  };
  setDrawerMenuOpen = (isOpen: boolean) => {
    this.isDrawerMenuOpen = isOpen;
  };
  setDrawerFilterOpen = (isOpen: boolean) => {
    this.isDrawerFilterOpen = isOpen;
  };
  setDrawerFeedbackOpen = (isOpen: boolean) => {
    this.isDrawerFeedbackOpen = isOpen;
  };

  setFullPageHeight = (height: number) => {
    this.pageFullHeight = height;
  };

  setHeightToTransparentHeader = (height: number) => {
    this.heightToTransparentHeader = height;
  };

  setActiveSearch = () => {
    this.isSearchActive = true;
  };

  setDisableSearch = () => {
    this.isSearchActive = false;
  };

  setCurrentVisibleBlockColor = (color: string) => {
    this.currentVisibleBlockColor = color;
  };

  removeCurrentVisibleBlockColor = () => {
    this.currentVisibleBlockColor = undefined;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UIStore();
