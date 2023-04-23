interface WxPage {
  /** 生命周期回调—监听页面加载
   *
   * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
   */
  onLoad(
    /** 打开当前页面路径中的参数 */
    query: Record<string, string | undefined>
  ): void | Promise<void>;
  /** 生命周期回调—监听页面显示
   *
   * 页面显示/切入前台时触发。
   */
  onShow(): void | Promise<void>;
  /** 生命周期回调—监听页面初次渲染完成
   *
   * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
   *
   * 注意：对界面内容进行设置的 API 如`wx.setNavigationBarTitle`，请在`onReady`之后进行。
   */
  onReady(): void | Promise<void>;
  /** 生命周期回调—监听页面隐藏
   *
   * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
   */
  onHide(): void | Promise<void>;
  /** 生命周期回调—监听页面卸载
   *
   * 页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。
   */
  onUnload(): void | Promise<void>;
  /** 监听用户下拉动作
   *
   * 监听用户下拉刷新事件。
   * - 需要在`app.json`的`window`选项中或页面配置中开启`enablePullDownRefresh`。
   * - 可以通过`wx.startPullDownRefresh`触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
   * - 当处理完数据刷新后，`wx.stopPullDownRefresh`可以停止当前页面的下拉刷新。
   */
  onPullDownRefresh(): void | Promise<void>;
  /** 页面上拉触底事件的处理函数
   *
   * 监听用户上拉触底事件。
   * - 可以在`app.json`的`window`选项中或页面配置中设置触发距离`onReachBottomDistance`。
   * - 在触发距离内滑动期间，本事件只会被触发一次。
   */
  onReachBottom(): void | Promise<void>;
  /** 用户点击右上角转发
   *
   * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
   *
   * **注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮**
   *
   * 此事件需要 return 一个 Object，用于自定义转发内容
   */
  onShareAppMessage(
    /** 分享发起来源参数 */
    options: IShareAppMessageOption
  ):
    | ICustomShareContent
    | IAsyncCustomShareContent
    | Promise<ICustomShareContent>
    | void
    | Promise<void>;
  /**
   * 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容
   *
   * 本接口为 Beta 版本，暂只在 Android 平台支持，详见 [分享到朋友圈 (Beta)](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share-timeline.html)
   *
   * 基础库 2.11.3 开始支持，低版本需做兼容处理。
   */
  onShareTimeline(): ICustomTimelineContent | void;

  /** 页面滚动触发事件的处理函数
   *
   * 监听用户滑动页面事件。
   */
  onPageScroll(
    /** 页面滚动参数 */
    options: IPageScrollOption
  ): void | Promise<void>;

  /** 当前是 tab 页时，点击 tab 时触发，最低基础库： `1.9.0` */
  onTabItemTap(
    /** tab 点击参数 */
    options: ITabItemTapOption
  ): void | Promise<void>;

  /** 窗口尺寸改变时触发，最低基础库：`2.4.0` */
  onResize(
    /** 窗口尺寸参数 */
    options: IResizeOption
  ): void | Promise<void>;

  /**
   * 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
   * 基础库 2.10.3，安卓 7.0.15 版本起支持，iOS 暂不支持
   */
  onAddToFavorites(options: IAddToFavoritesOption): IAddToFavoritesContent;
}
interface WxPageInstance {
  init(params: WxPage): void;
  create(): void;
  goTest(): void;
}
declare function wxPage(): WxPageInstance;

export { wxPage };
