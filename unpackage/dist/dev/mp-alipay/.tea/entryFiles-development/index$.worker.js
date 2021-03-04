if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node-modules/uview-ui/components/u-row/u-row?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-col/u-col?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-icon/u-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-search/u-search?hash=a3ccc293bd44c3aa518f6106e8ba0cf7af0c1009');
require('../../node-modules/uview-ui/components/u-tag/u-tag?hash=a3ccc293bd44c3aa518f6106e8ba0cf7af0c1009');
require('../../components/pin-search-recommend-list/pin-search-recommend-list?hash=08dc76d38c374f7888ce368ce38a7a78eca6537b');
require('../../components/pin-product/pin-product?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../node-modules/uview-ui/components/u-swiper/u-swiper?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=022ef1e205c61f3f030fc8ed6d73032cf60dd409');
require('../../pages/class/class?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/msg/msg?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/search/search?hash=d9b94f82df044547dc84cd59225394cfeca784d4');
require('../../pages/search/result/result?hash=19ab5ffe7df22e9af69ea3e9b151d6cb82485c9c');
require('../../pages/group-detail/group-detail?hash=2d3ae97617d5bbdcd65caf9e2ca3b414f342c5c6');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}