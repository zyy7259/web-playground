(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NIM"] = factory();
	else
		root["NIM"] = factory();
})(this, function() {
return webpackJsonp_NIM_Web_SDK_v2_0_0_dev([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * NIM Web SDK
	 *
	 * db.js & es6-promise 13KB
	 * backo2 1KB
	 * es5-shim/es5-sham 19KB
	 * engine.io-client 37KB
	 * event-emitter
	 * platform 13KB
	 * socket.io-client 46KB
	 * xhr 3KB
	 * search require\('(?!\.) in the src folder to see which libs nim depends.
	 */

	// ployfill
	// require('/util/shim');
	__webpack_require__(1);
	__webpack_require__(2);
	// polyfill the global environment
	__webpack_require__(3).polyfill();

	var NIM = __webpack_require__(79);

	/**
	 * SDK 使用 {@link https://github.com/bestiejs/platform.js/|platform.js} 来检测浏览器平台, 通过 `NIM.platform` 来获取此库的引用
	 * @memberOf NIM
	 * @type {Object}
	 */
	NIM.platform = __webpack_require__(41);
	/**
	 * SDK 使用 {@link https://github.com/Raynos/xhr|xhr} 来发送 Ajax 请求, 通过 `NIM.xhr` 来获取此库的引用
	 * @memberOf NIM
	 * @type {Function}
	 */
	NIM.xhr = __webpack_require__(69);
	/**
	 * SDK 使用 {@link https://github.com/socketio/socket.io-client/tree/0.9|socket.io-client 0.9} 来建立 Socket 连接, 通过 `NIM.io` 或 `window.io` 来获取此库的引用
	 * @memberOf NIM
	 * @type {Object}
	 */
	NIM.io = __webpack_require__(44);
	/**
	 * SDK 使用 {@link https://github.com/Bill4Time/javascript-natural-sort|natural sort} 来对数组进行排序, 通过 `NIM.naturalSort` 来获取此库的引用
	 * @memberOf NIM
	 * @type {Function}
	 * @name naturalSort
	 */
	NIM.naturalSort = __webpack_require__(11);
	/**
	 * SDK 使用 {@link https://github.com/juliangruber/deep-access|deep access} 来获取对象的属性值, 通过 `NIM.deepAccess` 来获取此库的引用
	 * @type {Function}
	 */
	NIM.deepAccess = __webpack_require__(12);

	NIM.db = __webpack_require__(77);

	// 加密
	// NIM.AES = require("crypto-js/aes");

	NIM.util = __webpack_require__(10);
	NIM.support = __webpack_require__(78);
	NIM.blob = __webpack_require__(37);

	module.exports = NIM;


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var ApiBase = __webpack_require__(9);
	var Protocol = __webpack_require__(80);
	var config = __webpack_require__(26);
	var logger = __webpack_require__(40);
	var IMMessage = __webpack_require__(115);

	/**
	 *
	 * NIM constructor.
	 * @constructor
	 * 
	 * @param {Object}              options                                 配置参数
	 * @param {Boolean|Object}      [options.debug=false]                   是否开启调试, 如果开启调试, 将会在控制台输出一些log。默认`false`不输出日志, 可以传`true`来开启日志或者传入对象来定制输出日志时使用的样式。
	 * @param {String}              [options.debug.style]                   输出日志时使用的样式, 只支持`chrom/firefox/safari`等高级浏览器, 默认样式为`'color:blue;'`。

	 * @param {String}              options.appKey                          在云信管理后台查看应用的 appKey
	 * @param {String}              options.account                         帐号, 应用内唯一
	 * @param {String}              options.token                           帐号的 token, 用于建立连接
	 * @param {Function}            [options.onconnect]                     连接建立后的回调, 会传入一个对象, 包含登录的信息, 有以下字段
	 * - `lastLoginDeviceId`: 上次登录的设备的设备号
	 * - `connectionId`: 本次登录的连接号
	 * - `ip`: 客户端IP
	 * - `port`: 客户端端口
	 * - `country`: 本次登录的国家
	 * @param {Function}            [options.onwillreconnect]                 即将重连的回调
	 * - 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
	 * - 此回调会收到一个对象, 包含额外的信息, 有以下字段
	 *     - `duration`: 距离下次重连的时间
	 *     - `retryCount`: 重连尝试的次数
	 * @param {Function}            [options.ondisconnect]                  断开连接后的回调
	 * - 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
	 * - 此回调会收到一个对象, 包含错误的信息, 有以下字段
	 *     - `code`: 出错时的错误码, 可能为空
	 *         - `302`: 账号或者密码错误
	 *         - `'kicked'`: 被踢
	 * - 当`code`为`'kicked'`的时候, 此对象会有以下字段
	 *     - `reason`: 被踢的原因
	 *         - `samePlatformKick`: 不允许同一个帐号在多个地方同时登录
	 *         - `serverKick`: 被服务器踢了
	 *         - `otherPlatformKick`: 被其它端踢了
	 *     - `message`: 文字描述的被踢的原因
	 * @param {Function}            [options.onerror]                       发生错误的回调, 会传入{@link NIMError|错误}对象

	 * @param {Function}            [options.onloginportschange]            多端登录状态变化的回调, 会收到{@link LoginPort|登录端}列表, 以下情况会收到此回调
	 * - 登录时其它端在线
	 * - 登录后其它端上线或者下线
	 * 
	 * @param {Boolean}             [options.syncRelations=true]            是否同步黑名单和静音列表, 默认`true`, 如果传`false`就收不到黑名单和静音列表, 即不会收到`onblacklist`回调和`onmutelist`回调, 开发者后续可以调用{@link NIM#getRelations|获取黑名单和静音列表}来获取黑名单和静音列表。
	 * @param {Function}            [options.onblacklist]                   同步黑名单的回调, 会传入黑名单列表`blacklist`
	 * - `blacklist`的属性`invalid`包含被删除的黑名单列表
	 * - 此回调是增量回调, 可以调用{@link NIM#mergeRelations|nim.mergeRelations}和{@link NIM#cutRelations|nim.cutRelations}来合并数据
	 * @param {Function}            [options.onsyncmarkinblacklist]         当前登录用户在其它端{@link NIM#markInBlacklist|加入黑名单/从黑名单移除}后的回调, 会传入一个参数, 包含两个字段
	 * - `account`: 要加入黑名单/从黑名单移除的账号
	 * - `isAdd`: `true`表示加入黑名单, `false`表示从黑名单移除
	 * @param {Function}            [options.onmutelist]                    同步静音列表的回调, 会传入静音列表`mutelist`
	 * - `mutelist`的属性`invalid`包含被删除的静音列表
	 * - 此回调是增量回调, 可以调用{@link NIM#mergeRelations|nim.mergeRelations}和{@link NIM#cutRelations|nim.cutRelations}来合并数据
	 * @param {Function}            [options.onsyncmarkinmutelist]          当前登录用户在其它端{@link NIM#markInMutelist|加入静音列表/从静音列表移除}后的回调, 会传入一个参数, 包含两个字段
	 * - `account`: 要加入黑名单/从黑名单移除的账号
	 * - `isAdd`: `true`表示加入静音列表, `false`表示从静音列表移除
	 * 
	 * @param {Boolean}             [options.syncFriends]                   是否同步好友列表, 默认`true`, 如果传`false`就收不到`onfriends`回调, 开发者后续可以调用{@link NIM#getFriends|获取好友列表}来获取好友列表。
	 * @param {Function}            [options.onfriends]                     同步好友列表的回调, 会传入好友列表
	 * @param {Function}            [options.onsyncfriendaction]           当前登录用户在其它端进行好友相关的操作后的回调
	 * - 操作包括
	 *     - {@link NIM#addFriend|直接加为好友}
	 *     - {@link NIM#applyFriend|申请加为好友}
	 *     - {@link NIM#passFriendApply|通过好友申请}
	 *     - {@link NIM#rejectFriendApply|拒绝好友申请}
	 *     - {@link NIM#deleteFriend|删除好友}
	 *     - {@link NIM#updateFriend|更新好友}
	 * - 此回调会收到一个参数`obj`, 它有一个字段`type`的值为操作的类型, 具体类型如下：
	 *     - `'addFriend'` (直接加为好友), 此时`obj`的字段如下: 
	 *         - `account`的值为被直接加为好友的账号
	 *         - `friend`为被直接加为好友的{@link Friend|好友对象}
	 *         - `ps`为附言
	 *     - `'applyFriend'` (申请加为好友), 此时`obj`的字段如下: 
	 *         - `account`的值为被申请加为好友的账号
	 *         - `ps`为附言
	 *     - `'passFriendApply'` (通过好友申请), 此时`obj`的字段如下: 
	 *         - `account`的值为被通过好友申请的账号
	 *         - `friend`为被通过好友申请的{@link Friend|好友对象}
	 *         - `ps`为附言
	 *     - `'rejectFriendApply'` (拒绝好友申请), 此时`obj`的字段如下: 
	 *         - `account`的值为被拒绝好友申请的账号
	 *         - `ps`为附言
	 *     - `'deleteFriend'` (删除好友), 此时`obj`的字段如下: 
	 *         - `account`的值为被删除好友的账号
	 *     - `'updateFriend'` (更新好友), 此时`obj`的字段如下: 
	 *         - `friend`的值为被更新的{@link Friend|好友对象}
	 * 
	 * @param {Function}            [options.onmyinfo]                      同步登录用户名片的回调, 会传入{@link User|用户名片}
	 * @param {Function}            [options.onupdatemyinfo]                当前登录用户在其它端修改自己的个人名片之后的回调, 会传入{@link User|用户名片}
	 * @param {Function}            [options.onusers]                       同步好友用户名片的回调, 会传入{@link User|用户名片}数组
	 * @param {Function}            [options.onupdateuser]                  用户名片更新后的回调, 会传入{@link User|用户名片}
	 * 
	 * @param {Boolean}             [options.syncTeams=true]                是否同步群列表, 默认      `true`, 如果传`false`就收不到群列表, 即不会收到`onteams`回调, 开发者后续可以调用{@link NIM#getTeams|获取群列表}来获取群列表
	 * @param {Function}            [options.onteams]                       同步群列表的回调, 会传入{@link Team|群}数组
	 * @param {Function}            [options.onsynccreateteam]              当前登录用户在其它端{@link NIM#createTeam|创建群}后的回调, 会传入{@link Team|群对象}
	 * @param {Boolean}             [options.syncTeamMembers=true]          是否同步群成员, 默认`true`, 只有在`syncTeams`=`true`的时候才起作用, 如果传`false`就不会同步群成员, 即不会收到`onteammembers`和`onsyncteammembersdone`回调, 开发者后续可以调用{@link NIM#getTeamMembers|获取群成员}来获取群成员
	 * @param {Function}            [options.onteammembers]                 同步群成员的回调, 一个群对应一个回调, 会传入{@link TeamMember|群成员}数组
	 * @param {Function}            [options.onsyncteammembersdone]         当`syncTeams`和`syncTeamMembers`同时为true时, 会同步所有群的群成员, 当所有群的群成员同步结束时, 会调用此回调
	 * @param {Function}            [options.onupdateteammember]            群成员信息更新后的回调, 会传入{@link TeamMember|群成员}对象, 不过此时的信息是不完整的, 只会包括被更新的字段。当前登录帐号在其它端修改自己在群里面的昵称时也会收到此回调。
	 * 
	 * @param {Function}            [options.onsessions]                    同步最近会话列表回调, 会传入{@link Session|会话}列表, 按时间正序排列, 即最近聊过天的放在列表的最后面。
	 * @param {Function}            [options.onupdatesession]               更新会话的回调, 会传入{@link Session|会话}, 以下情况会收到此回调
	 * - 收到消息
	 * - 发送消息
	 * - 设置当前回话
	 * - 重置会话未读数
	 * 
	 * @param {Boolean}             [options.syncRoamingMsgs=true]          是否同步漫游消息, 默认`true`。如果传`false`就收不到漫游消息, 即不会收到`onroamingmsgs`回调
	 * @param {Function}            [options.onroamingmsgs]                 同步漫游消息的回调, 每个会话对应一个回调, 会传入{@link IMMessage|消息}数组
	 * @param {Function}            [options.onofflinemsgs]                 同步离线消息的回调, 每个会话对应一个回调, 会传入{@link IMMessage|消息}数组
	 * @param {Function}            [options.onmsg]                         收到消息的回调, 会传入{@link IMMessage|消息}对象
	 * - 当前登录帐号在其它端发送消息之后也会收到此回调, 注意此时消息对象的`from`字段就是当前登录的帐号
	 * 
	 * @param {Function}            [options.onofflinesysmsgs]              同步离线系统通知的回调, 会传入{@link SystemMessage|系统通知}数组
	 * @param {Function}            [options.onsysmsg]                      收到系统通知的回调, 会传入{@link SystemMessage|系统通知}
	 * @param {Function}            [options.onupdatesysmsg]                更新系统通知后的回调, 会传入{@link SystemMessage|系统通知}
	 * - 以下情况会收到此回调
	 *     - {@link NIM#passFriendApply|通过好友申请}
	 *     - {@link NIM#rejectFriendApply|拒绝好友申请}
	 *     - {@link NIM#acceptTeamInvite|接受入群邀请}
	 *     - {@link NIM#rejectTeamInvite|拒绝入群邀请}
	 *     - {@link NIM#passTeamApply|通过入群申请}
	 *     - {@link NIM#rejectTeamApply|拒绝入群申请}
	 * - 这些操作的发起方会收到此回调, 接收被更新的系统通知, 根据操作的类型系统通知会被更新为下面两种状态
	 *     - `'passed'`: 已通过
	 *     - `'rejected'`: 已拒绝
	 * @param {Function}            [options.onsysmsgunread]                收到系统通知未读数的回调
	 * - SDK 会管理内建系统通知的未读数, 此回调接收的对象包括以下字段
	 *     - `total`: 总共的未读数
	 *     - `friend`: 所有跟好友相关的系统通知的未读数
	 *     - `addFriend`: 直接加为好友的未读数
	 *     - `applyFriend`: 申请加为好友的未读数
	 *     - `passFriendApply`: 通过好友申请的未读数
	 *     - `rejectFriendApply`: 拒绝好友申请的未读数
	 *     - `deleteFriend`: 删除好友的未读数
	 *     - `team`: 所有跟群相关的系统通知的未读数
	 *     - `teamInvite`: 入群邀请的未读数
	 *     - `rejectTeamInvite`: 接受入群邀请的未读数
	 *     - `applyTeam`: 入群申请的未读数
	 *     - `rejectTeamApply`: 拒绝入群申请的未读数
	 * @param {Function}            [options.onupdatesysmsgunread]          更新系统通知未读数的回调
	 * @param {Function}            [options.onofflinecustomsysmsgs]        同步离线自定义系统通知的回调, 会传入{@link SystemMessage|系统通知}数组
	 * @param {Function}            [options.oncustomsysmsg]                收到自定义系统通知的回调, 会传入{@link SystemMessage|系统通知}
	 * 
	 * @param {Function}            [options.onsyncdone]                    当上面各个同步（不包括下面的同步群成员）完成后, 会调用此回调；注意, SDK保证在`onsyncdone`调用的时候上面的同步肯定完成了, 但是不保证各个同步回调的顺序。
	 *
	 * @param {Object}              [options.dataSource]                    SDK 需要开发者提供数据来完成下面的工作
	 * - 检查用户名片是否更新
	 * - 会话相关的逻辑
	 * - 消息去重
	 * - 系统通知去重
	 * @param {Function} [options.dataSource.getUser] SDK 需要拿到名片才能判断用户名片是否被更新, 开发者可以调用{@link NIM#findUser|nim.findUser}来完成此工作
	 * @param {Function} [options.dataSource.getSession] SDK 需要会话来处理会话相关的逻辑, 开发者可以调用{@link NIM#findUser|nim.findSession}来完成此工作
	 * @param {Function} [options.dataSource.getMsg] SDK 需要查询消息来去重消息, 开发者可以调用{@link NIM#findUser|nim.findMsg}来完成此工作
	 * @param {Function} [options.dataSource.getSysMsg] SDK 需要查询系统通知来去重系统通知, 开发者可以调用{@link NIM#findUser|nim.findSysMsg}来完成此工作
	 * 
	 * @param {Boolean} [options.autoMarkRead=true] 是否自动标记消息为已收到
	 * - 默认情况下SDK在收到服务器推送过来的消息后, 会在将消息推给开发者时将消息标记为已读状态, 下次登录后就不会收到标记为已读的消息。
	 *     - SDK通过`onofflinemsgs`、`onofflinesysmsgs`、`onofflinecustomsysmsgs`等回调将离线消息推送给开发者
	 *     - SDK通过`onmsg`、`onsysmsg`、`oncustomsysmsg`等回调将在线消息推送给开发者
	 * - 如果开发者想控制标记消息为已收到的时机, 那么可以传`false`, 这样SDK就不会自动标记消息已读, 此时需要开发者在适当的时机调用相关的方法来标记消息为已读, 否则下次登录后还会收到未标记为已读的消息。
	 *     - 调用{@link NIM#markSysMsgRead|标记系统通知已读}来标记{@link SystemMessage|系统通知}和{@link SystemMessage.type|自定义系统通知}为已读状态
	 *
	 * @param {Boolean} [options.db=true] 是否使用数据库
	 * - 在支持数据库的浏览器上 SDK 会将数据缓存到数据库中, 后续同步都是增量更新, 加快初始化速度
	 * - 如果开发者不想使用数据库, 那么可以设置`db`为`false`来禁用数据库
	 * 
	 * @example
	 * var data = {};
	 * var nim = new NIM({
	 *     // 初始化SDK
	 *     // debug: true
	 *     appKey: 'appKey',
	 *     account: 'account',
	 *     token: 'token',
	 *     onconnect: onConnect,
	 *     onerror: onError,
	 *     onwillreconnect: onWillReconnect,
	 *     ondisconnect: onDisconnect,
	 *     // 多端
	 *     onloginportschange: onLoginPortsChange,
	 *     // 用户关系
	 *     onblacklist: onBlacklist,
	 *     onsyncmarkinblacklist: onMarkInBlacklist,
	 *     onmutelist: onMutelist,
	 *     onsyncmarkinmutelist: onMarkInMutelist,
	 *     // 好友关系
	 *     onfriends: onFriends,
	 *     onsyncfriendaction: onSyncFriendAction,
	 *     // 用户名片
	 *     onmyinfo: onMyInfo,
	 *     onupdatemyinfo: onUpdateMyInfo,
	 *     onusers: onUsers,
	 *     onupdateuser: onUpdateUser,
	 *     // 群组
	 *     onteams: onTeams,
	 *     onsynccreateteam: onCreateTeam,
	 *     onteammembers: onTeamMembers,
	 *     onsyncteammembersdone: onSyncTeamMembersDone,
	 *     onupdateteammember: onUpdateTeamMember,
	 *     // 会话
	 *     onsessions: onSessions,
	 *     onupdatesession: onUpdateSession,
	 *     // 消息
	 *     onroamingmsgs: onRoamingMsgs,
	 *     onofflinemsgs: onOfflineMsgs,
	 *     onmsg: onMsg,
	 *     // 系统通知
	 *     onofflinesysmsgs: onOfflineSysMsgs,
	 *     onsysmsg: onSysMsg,
	 *     onupdatesysmsg: onUpdateSysMsg,
	 *     onsysmsgunread: onSysMsgUnread,
	 *     onupdatesysmsgunread: onUpdateSysMsgUnread,
	 *     onofflinecustomsysmsgs: onOfflineCustomSysMsgs,
	 *     oncustomsysmsg: onCustomSysMsg,
	 *     // 同步完成
	 *     onsyncdone: onSyncDone,
	 *     // 数据源
	 *     dataSource: {
	 *         getUser: function(account) {
	 *             return nim.findUser(data.users, account);
	 *         },
	 *         getSession: function(sessionId) {
	 *             return nim.findSession(data.sessions, sessionId);
	 *         },
	 *         getMsg: function(msg) {
	 *             return nim.findMsg(data.msgs && data.msgs[msg.sessionId], msg.idClient);
	 *         },
	 *         getSysMsg: function(sysMsg) {
	 *             return nim.findSysMsg(data.sysMsgs, sysMsg.idServer);
	 *         }
	 *     }
	 * });
	 * 
	 * function onConnect() {
	 *     console.log('连接成功');
	 * }
	 * function onWillReconnect(obj) {
	 *     // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
	 *     console.log('即将重连', obj);
	 * }
	 * function onDisconnect(error) {
	 *     // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
	 *     console.log('连接断开', error);
	 *     if (error) {
	 *         switch (error.code) {
	 *         // 账号或者密码错误, 请跳转到登录页面并提示错误
	 *         case 302:
	 *             break;
	 *         // 被踢, 请提示错误后跳转到登录页面
	 *         case 'kicked':
	 *             break;
	 *         default:
	 *             break;
	 *         }
	 *     }
	 * }
	 * function onError(error, obj) {
	 *     console.log('发生错误', error, obj);
	 * }
	 * 
	 * function onLoginPortsChange(loginPorts) {
	 *     console.log('当前登录帐号在其它端的状态发生改变了', loginPorts);
	 * }
	 * 
	 * function onBlacklist(blacklist) {
	 *     console.log('收到黑名单', blacklist);
	 *     data.blacklist = nim.mergeRelations(data.blacklist, blacklist);
	 *     data.blacklist = nim.cutRelations(data.blacklist, blacklist.invalid);
	 *     refreshBlacklistUI();
	 * }
	 * function onMarkInBlacklist(obj) {
	 *     console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '黑名单', obj);
	 *     if (obj.isAdd) {
	 *         addToBlacklist(obj);
	 *     } else {
	 *         removeFromBlacklist(obj);
	 *     }
	 * }
	 * function addToBlacklist(obj) {
	 *     data.blacklist = nim.mergeRelations(data.blacklist, obj.record);
	 *     refreshBlacklistUI();
	 * }
	 * function removeFromBlacklist(obj) {
	 *     data.blacklist = nim.cutRelations(data.blacklist, obj.record);
	 *     refreshBlacklistUI();
	 * }
	 * function refreshBlacklistUI() {
	 *     // 刷新界面
	 * }
	 * function onMutelist(mutelist) {
	 *     console.log('收到静音列表', mutelist);
	 *     data.mutelist = nim.mergeRelations(data.mutelist, mutelist);
	 *     data.mutelist = nim.cutRelations(data.mutelist, mutelist.invalid);
	 *     refreshMutelistUI();
	 * }
	 * function onMarkInMutelist(obj) {
	 *     console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '静音列表', obj);
	 *     if (obj.isAdd) {
	 *         addToMutelist(obj);
	 *     } else {
	 *         removeFromMutelist(obj);
	 *     }
	 * }
	 * function addToMutelist(obj) {
	 *     data.mutelist = nim.mergeRelations(data.mutelist, obj.record);
	 *     refreshMutelistUI();
	 * }
	 * function removeFromMutelist(obj) {
	 *     data.mutelist = nim.cutRelations(data.mutelist, obj.record);
	 *     refreshMutelistUI();
	 * }
	 * function refreshMutelistUI() {
	 *     // 刷新界面
	 * }
	 * 
	 * function onFriends(friends) {
	 *     console.log('收到好友列表', friends);
	 *     data.friends = nim.mergeFriends(data.friends, friends);
	 *     data.friends = nim.cutFriends(data.friends, friends.invalid);
	 *     refreshFriendsUI();
	 * }
	 * function onSyncFriendAction(obj) {
	 *     console.log('收到好友操作', obj);
	 *     switch (obj.type) {
	 *     case 'addFriend':
	 *         console.log('你在其它端直接加了一个好友' + obj);
	 *         onAddFriend(obj.friend);
	 *         break;
	 *     case 'applyFriend':
	 *         console.log('你在其它端申请加了一个好友' + obj);
	 *         break;
	 *     case 'passFriendApply':
	 *         console.log('你在其它端通过了一个好友申请' + obj);
	 *         onAddFriend(obj.friend);
	 *         break;
	 *     case 'rejectFriendApply':
	 *         console.log('你在其它端拒绝了一个好友申请' + obj);
	 *         break;
	 *     case 'deleteFriend':
	 *         console.log('你在其它端删了一个好友' + obj);
	 *         onDeleteFriend(obj.account);
	 *         break;
	 *     case 'updateFriend':
	 *         console.log('你在其它端更新了一个好友', obj);
	 *         onUpdateFriend(obj.friend);
	 *         break;
	 *     }
	 * }
	 * function onAddFriend(friend) {
	 *     data.friends = nim.mergeFriends(data.friends, friend);
	 *     refreshFriendsUI();
	 * }
	 * function onDeleteFriend(account) {
	 *     data.friends = nim.cutFriendsByAccounts(data.friends, account);
	 *     refreshFriendsUI();
	 * }
	 * function onUpdateFriend(friend) {
	 *     data.friends = nim.mergeFriends(data.friends, friend);
	 *     refreshFriendsUI();
	 * }
	 * function refreshFriendsUI() {
	 *     // 刷新界面
	 * }
	 * 
	 * function onMyInfo(user) {
	 *     console.log('收到我的名片', user);
	 *     data.myInfo = user;
	 *     updateMyInfoUI();
	 * }
	 * function onUpdateMyInfo(user) {
	 *     console.log('我的名片更新了', user);
	 *     data.myInfo = NIM.util.merge(data.myInfo, user);
	 *     updateMyInfoUI();
	 * }
	 * function updateMyInfoUI() {
	 *     // 刷新界面
	 * }
	 * function onUsers(users) {
	 *     console.log('收到用户名片列表', users);
	 *     data.users = nim.mergeUsers(data.users, users);
	 * }
	 * function onUpdateUser(user) {
	 *     console.log('用户名片更新了', user);
	 *     data.users = nim.mergeUsers(data.users, user);
	 * }
	 * 
	 * function onTeams(teams) {
	 *     console.log('群列表', teams);
	 *     data.teams = nim.mergeTeams(data.teams, teams);
	 *     onInvalidTeams(teams.invalid);
	 * }
	 * function onInvalidTeams(teams) {
	 *     data.teams = nim.cutTeams(data.teams, teams);
	 *     data.invalidTeams = nim.mergeTeams(data.invalidTeams, teams);
	 *     refreshTeamsUI();
	 * }
	 * function onCreateTeam(team) {
	 *     console.log('你创建了一个群', team);
	 *     data.teams = nim.mergeTeams(data.teams, team);
	 *     refreshTeamsUI();
	 *     onTeamMembers({
	 *         teamId: team.teamId,
	 *         members: owner
	 *     });
	 * }
	 * function refreshTeamsUI() {
	 *     // 刷新界面
	 * }
	 * function onTeamMembers(obj) {
	 *     console.log('收到群成员', obj);
	 *     var teamId = obj.teamId;
	 *     var members = obj.members;
	 *     data.teamMembers = data.teamMembers || {};
	 *     data.teamMembers[teamId] = nim.mergeTeamMembers(data.teamMembers[teamId], members);
	 *     data.teamMembers[teamId] = nim.cutTeamMembers(data.teamMembers[teamId], members.invalid);
	 *     refreshTeamMembersUI();
	 * }
	 * function onSyncTeamMembersDone() {
	 *     console.log('同步群列表完成');
	 * }
	 * function onUpdateTeamMember(teamMember) {
	 *     console.log('群成员信息更新了', teamMember);
	 *     onTeamMembers({
	 *         teamId: teamMember.teamId,
	 *         members: teamMember
	 *     });
	 * }
	 * function refreshTeamMembersUI() {
	 *     // 刷新界面
	 * }
	 * 
	 * function onSessions(sessions) {
	 *     console.log('收到会话列表', sessions);
	 *     data.sessions = nim.mergeSessions(data.sessions, sessions);
	 *     updateSessionsUI();
	 * }
	 * function onUpdateSession(session) {
	 *     console.log('会话更新了', session);
	 *     data.sessions = nim.mergeSessions(data.sessions, session);
	 *     updateSessionsUI();
	 * }
	 * function updateSessionsUI() {
	 *     // 刷新界面
	 * }
	 * 
	 * function onRoamingMsgs(obj) {
	 *     console.log('漫游消息', obj);
	 *     pushMsg(obj.msgs);
	 * }
	 * function onOfflineMsgs(obj) {
	 *     console.log('离线消息', obj);
	 *     pushMsg(obj.msgs);
	 * }
	 * function onMsg(msg) {
	 *     console.log('收到消息', msg.scene, msg.type, msg);
	 *     pushMsg(msg);
	 * }
	 * function pushMsg(msgs) {
	 *     if (!Array.isArray(msgs)) { msgs = [msgs]; }
	 *     var sessionId = msgs[0].sessionId;
	 *     data.msgs = data.msgs || {};
	 *     data.msgs[sessionId] = nim.mergeMsgs(data.msgs[sessionId], msgs);
	 * }
	 * 
	 * function onOfflineSysMsgs(sysMsgs) {
	 *     console.log('收到离线系统通知', sysMsgs);
	 *     pushSysMsgs(sysMsgs);
	 * }
	 * function onSysMsg(sysMsg) {
	 *     console.log('收到系统通知', sysMsg)
	 *     pushSysMsgs(sysMsg);
	 * }
	 * function onUpdateSysMsg(sysMsg) {
	 *     pushSysMsgs(sysMsg);
	 * }
	 * function pushSysMsgs(sysMsgs) {
	 *     data.sysMsgs = nim.mergeSysMsgs(data.sysMsgs, sysMsgs);
	 *     refreshSysMsgsUI();
	 * }
	 * function onSysMsgUnread(obj) {
	 *     console.log('收到系统通知未读数', obj);
	 *     data.sysMsgUnread = obj;
	 *     refreshSysMsgsUI();
	 * }
	 * function onUpdateSysMsgUnread(obj) {
	 *     console.log('系统通知未读数更新了', obj);
	 *     data.sysMsgUnread = obj;
	 *     refreshSysMsgsUI();
	 * }
	 * function refreshSysMsgsUI() {
	 *     // 刷新界面
	 * }
	 * function onOfflineCustomSysMsgs(sysMsgs) {
	 *     console.log('收到离线自定义系统通知', sysMsgs);
	 * }
	 * function onCustomSysMsg(sysMsg) {
	 *     console.log('收到自定义系统通知', sysMsg);
	 * }
	 * 
	 * function onSyncDone() {
	 *     console.log('同步完成');
	 * }
	 */
	function NIM(options) {
	    var self = this;
	    logger.setDebug(options.debug);
	    self.account = options.account;
	    self.message = new IMMessage({
	        account: self.account
	    });
	    self.protocol = new Protocol(options);
	    self.protocol.nim = self;
	    self.protocol.message = self.message;
	    self.db = self.protocol.db;
	}

	var NIMFn = NIM.fn = NIM.prototype = Object.create(ApiBase.prototype);

	NIM.info = NIMFn.info = config.info;

	module.exports = NIM;

	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var DB = __webpack_require__(81);
	var Protocol = __webpack_require__(39);
	var NIMError = __webpack_require__(14);
	var config = __webpack_require__(26);
	var util = __webpack_require__(10);
	var notundef = util.notundef;
	// parser
	var Parser = __webpack_require__(49);
	var configMap = __webpack_require__(92);
	var serializeMap = __webpack_require__(93);
	var unserializeMap = __webpack_require__(94);
	var parser = Parser.getInstance({
	    type: 'IM',
	    configMap: configMap,
	    serializeMap: serializeMap,
	    unserializeMap: unserializeMap
	});

	function IMProtocol(options) {
	    var self = this;
	    util.verifyOptions(options, 'appKey account token');
	    // 所有通知回调在用 Promise 的地方使用 setTimeout 来模拟异步线程, 否则, 如果抛出错误会被 Promise catch 到, 控制台就不会报错
	    util.verifyCallback(options, 'onconnect onerror onwillreconnect ondisconnect onloginportschange onmyinfo onblacklist onmutelist onfriends onusers onteams onsessions onroamingmsgs onofflinemsgs onofflinefiltermsgs onofflinesysmsgs onsysmsgunread onofflinecustomsysmsgs onsyncdone onteammembers onsyncteammembersdone onmsg onsysmsg oncustomsysmsg onupdatemyinfo onupdateuser onupdateteammember onupdatesession onupdatesysmsgunread onupdatesysmsg onsynccreateteam onsyncmarkinblacklist onsyncmarkinmutelist  onsyncfriendaction');
	    util.merge(self, util.filterObj(options, 'appKey account token'));
	    // 重置数据库
	    self.db = new DB();
	    self.db.reset(options.db);
	    // lbsUrl
	    if (notundef(options.lbsUrl)) {
	        config.lbsUrl = options.lbsUrl;
	    }
	    // 调用父类初始化
	    Protocol.call(self, options);
	    self.name = 'IM';
	}

	var IMProtocolFn = IMProtocol.fn = IMProtocol.prototype = Object.create(Protocol.prototype);

	IMProtocolFn.init = function() {
	    var self = this;

	    // socket 地址
	    self.socketUrls = [];

	    // 协议解释器
	    self.parser = parser;
	    
	    // 是否已经进行过同步, 如果已经进行过, 那么后续的同步均为增量同步
	    self.hasSynced = false;
	    // 是否已经进行过同步群成员, 如果已经进行过, 那么后续的同步均为增量同步
	    self.hasSyncedTeamMembers = false;
	    // 存储同步 Promise 数组, 监视什么时候完成同步
	    self.syncPromiseArray = [];
	    // 在同步过程中, 会存入同步到的数据
	    self.syncResult = {};
	    // 存储同步群成员 Promise 数组, 监视什么时候完成同步群成员
	    self.syncTeamMembersPromiseArray = [];
	    // 在同步群成员过程中, 会存入同步到的数据
	    self.syncTeamMembersResult = {};
	    // 同步时间戳, 当没有数据库时从此对象读取同步时间戳, 从而进行增量同步
	    self.timetags = {};
	    // 会话集合
	    self.sessionsSet = {};

	    self.initAutoMarkRead();
	};

	IMProtocolFn.initAutoMarkRead = function() {
	    var options = this.options;
	    util.verifyBooleanWithDefault(options, 'autoMarkRead', true);
	    // 目前使用一个通用的开关, 下面的代码是各个子开关, 先注释掉
	    // 将options.autoMarkRead处理成false或者{}
	    // if (util.notundef(options.autoMarkRead)) {
	    //     if (!util.isObject(options.autoMarkRead)) {
	    //         // 如果该不是一个对象, 那么它必须是Boolean
	    //         util.verifyParamType('autoMarkRead', options.autoMarkRead, 'boolean');
	    //         // 如果是true, 那么变为{}
	    //         if (options.autoMarkRead === true) {
	    //             options.autoMarkRead = {};
	    //         }
	    //     }
	    // } else {
	    //     options.autoMarkRead = {};
	    // }
	    // var auto = true;
	    // if (options.autoMarkRead === false) {
	    //     options.autoMarkRead = {};
	    //     auto = false;
	    // }
	    // // filter开头的开关用于控制云商服专用消息的标记已读
	    // util.verifyBooleanWithDefault(options.autoMarkRead, 'p2p team sys customSys filterP2p filterTeam filterSys filterCustomSys', auto, 'autoMarkRead.');
	};

	IMProtocolFn.processResponse = function(packet) {
	    var self = this;
	    // 按照协议类型进行处理
	    switch (packet.service){
	    case 'link':
	        self.processLink(packet);
	        break;
	    case 'auth':
	        self.processAuth(packet);
	        break;
	    case 'user':
	        self.processUser(packet);
	        break;
	    case 'notify':
	        self.processNotify(packet);
	        break;
	    case 'sync':
	        self.processSync(packet);
	        break;
	    case 'misc':
	        self.processMisc(packet);
	        break;
	    case 'talk':
	        self.processMessage(packet);
	        break;
	    case 'team':
	        self.processTeam(packet);
	        break;
	    case 'friend':
	        self.processFriend(packet);
	        break;
	    case 'chatroom':
	        self.processChatroom(packet);
	        break;
	    case 'filter':
	        self.processFilter(packet);
	        break;
	    default:
	        // 如果没有找到对应的服务, 那么不作处理直接返回
	        return;
	    }
	};

	/**
	 * 判断packet是否是同步的回包
	 * 因为同步可能有多个回包, 所以第一个回包会获取到packet.obj.sync, 后面的回包都获取不到packet.obj
	 * @private
	 */
	IMProtocolFn.packetFromSync = function(packet) {
	    return !packet.obj || !!packet.obj.sync;
	};

	// 数据库错误
	IMProtocolFn.onDBError = function(event) {
	    var error = NIMError.newDBError();
	    error.event = event;
	    this.notifyError(error);
	};

	module.exports = IMProtocol;

	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(101);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(114);


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Partial support in Safari and iOS 8/9.
	 * - When start a transaction on more than one object stores, Safari throw an error:
	 *     - NotFoundError: DOM IDBDatabase Exception 8: An operation failed because the requested database object could not be found.
	 * - If two objects has same key, when put them into two different object stores, the first one will disappear. (iOS8, not iOS9)
	 * - IndexedDB is not available in iOS 8/9 “UIWebView” (not Safari) or Home screen apps (is standalone)
	 */

	var platform = __webpack_require__(41);
	var deep = __webpack_require__(12);
	var lib = __webpack_require__(77);
	var util = __webpack_require__(10);
	var logger = __webpack_require__(40);
	var support = __webpack_require__(78);
	var NIMError = __webpack_require__(14);
	var newSupportDBError = NIMError.newSupportDBError;
	var noDBError = NIMError.noDBError;
	var config = __webpack_require__(82);

	var DBPrefix = 'nim-';
	var _support = false;

	function setSupport(flag) {
	    _support = flag;
	    support.set('db', flag, lib);
	}
	setSupport(!!window.indexedDB);
	if (platform.name === 'Safari') {
	    var version = parseInt(platform.version.split('.')[0], 10);
	    // 如果是 iOS8 及以下, 那么不支持数据库, 因为不同的 ObjectStore 使用同一个 key 的话, 后面的记录会覆盖前面的记录
	    if (version < 9) {
	        setSupport(false);
	    }
	}

	function DB() {

	}

	var pro = DB.fn = DB.prototype;

	pro.reset = util.emptyFunc;
	if (_support) {
	    pro.reset = function(o) {
	        // 只有当 o === false 才禁用 db
	        this.enable = o !== false;
	    };
	}

	pro.init = function(account) {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    // 如果已经初始化过了, 那么直接返回
	    if (self.server) { return Promise.resolve(); }
	    self.name = DBPrefix + account;
	    return lib.open({
	        server: self.name,
	        version: config.version,
	        schema: config.schema
	    }).then(function(s) {
	        logger.warn('init db', self.name);
	        self.server = s;
	    }, function(event) {
	        setSupport(false);
	        self.server = null;
	        self.name = null;
	        throw event;
	    });
	};

	pro.destroy = function() {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    // 如果已经销毁了, 那么直接返回
	    if (!self.server) { return Promise.resolve(); }
	    return lib.remove(self.name).then(function() {
	        logger.warn('delete db', self.name);
	        self.server = null;
	        self.name = null;
	    });
	};

	pro.clear = function() {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    // 如果已经销毁了, 那么直接返回
	    if (!self.server) { return Promise.resolve(); }
	    // 先清空 timetag, 然后再清空其它所有数据, 这样就算 timetag 清空失败也是没问题的
	    // 否则的话, 如果 timetag 没被清空, 其它数据被清空了, 同步就会有问题
	    return self.server.clear('timetag').then(function() {
	        var tables = [].slice.call(self.server.getIndexedDB().objectStoreNames);
	        var promiseArray = [];
	        tables.forEach(function(table) {
	            promiseArray.push(self.server.clear(table));
	        });
	        if (promiseArray.length) {
	            return Promise.all(promiseArray).then(function() {
	                logger.warn('clear db', self.name);
	            });
	        }
	    });
	};

	pro.close = function() {
	    var self = this;
	    if (self.server) {
	        self.server.close();
	        self.server = null;
	        self.name = null;
	    }
	};

	pro.remove = function(name, keys) {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    if (!self.server) { return Promise.reject(noDBError()); }
	    if (!util.isArray(keys)) {
	        keys = [keys];
	    }
	    // keys = keys.map(function(key) {
	    //     return db.prefixKey(name, key);
	    // });
	    return self.server.remove(name, keys).then(function() {
	        logger.warn('delete', name, keys.length===1 ? keys[0]:keys);
	    });
	};

	pro.put = function(name, records) {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    if (!self.server) { return Promise.reject(noDBError()); }
	    if (!util.isArray(records)) {
	        records = [records];
	    }
	    // records = db.prefixRecords(name, records);
	    return self.server.update(name, records).then(function(records) {
	        var args = ['put', name];
	        var keyPath = config.schema[name].key.keyPath;
	        var keys = [];
	        if (keyPath) {
	            records.forEach(function(record) {
	                keys.push(deep(record, keyPath));
	            });
	            args.push(keys.length===1 ? keys[0]:keys);
	        }
	        args.push(records.length===1 ? records[0]:records);
	        logger.warn.apply(logger.warn, args);
	        return records;
	    });
	};

	pro.updateAndDelete = function(name, updates, deletes) {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    if (!self.server) { return Promise.reject(noDBError()); }
	    // updates = db.prefixRecords(name, updates);
	    // deletes = db.prefixRecords(name, deletes);
	    return self.server.updateAndDelete(name, updates, deletes);
	};

	pro.get = function(name, key) {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    if (!self.server) { return Promise.reject(noDBError()); }
	    return self.server.get(name, key);
	};

	// TODO count
	pro.getAll = function(name, options) {
	    var self = this;
	    if (!self.enable) { return Promise.reject(newSupportDBError()); }
	    if (!self.server) { return Promise.reject(noDBError()); }
	    options = options || {};
	    // 只有明确要 keys desc distinct, 才传 true
	    options.keys = options.keys === true;
	    options.desc = options.desc === true;
	    options.distinct = options.distinct === true;
	    return self.server.query(name, options.index)
	                    .filter(options.filter)
	                    .keys(options.keys)
	                    .desc(options.desc)
	                    .limit(options.limit)
	                    .distinct(options.distinct)
	                    .map(options.mapper)
	                    .modify(options.modifyObj)
	                    .execute();
	    // .then(function(records) {
	    //     records = db.unprefixRecords(name, options.keyIsNumber, records);
	    //     return records;
	    // });
	};

	pro.getOnly = function(name, index, matchValue, options) {
	    var self = this;
	    if (!self.enable) { throw newSupportDBError(); }
	    if (!self.server) { throw noDBError(); }
	    options = options || {};
	    // 只有明确要 keys desc distinct remove, 才传 true
	    options.keys = options.keys === true;
	    options.desc = options.desc === true;
	    options.distinct = options.distinct === true;
	    options.remove = options.remove === true;
	    return self.server.query(name, index)
	                    .only(matchValue)
	                    .filter(options.filter)
	                    .keys(options.keys)
	                    .desc(options.desc)
	                    .limit(options.limit)
	                    .distinct(options.distinct)
	                    .map(options.mapper)
	                    .modify(options.modifyObj)
	                    .remove(options.remove)
	                    .execute();
	};

	pro.getOne = function() {
	    var self = this;
	    return self.getOnly.apply(self, arguments).then(function(records) {
	        return records[0];
	    });
	};

	pro.clearTable = function(name) {
	    var self = this;
	    if (!self.enable) { throw newSupportDBError(); }
	    if (!self.server) { throw noDBError(); }
	    return self.server.clear(name);
	};

	// TODO openRequest.onblocked, which is triggered when the `onupgradeneeded` event should be triggered but the database is still in use somewhere else.
	// TODO db.onversionchange, which is triggered when the database structure changes in somewhere else.

	module.exports = DB;

	// require('./record');
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);


/***/ },
/* 82 */
/***/ function(module, exports) {

	var config = {
	    version: 1
	};

	var schema = {
	    timetag: {
	        key: {
	            keyPath: 'name'
	        }
	    },
	    blacklist: {
	        key: {
	            keyPath: 'account'
	        }
	    },
	    mutelist: {
	        key: {
	            keyPath: 'account'
	        }
	    },
	    friend: {
	        key: {
	            keyPath: 'account'
	        }
	    },
	    user: {
	        key: {
	            keyPath: 'account'
	        }
	    },
	    team: {
	        key: {
	            keyPath: 'teamId'
	        }
	    },
	    teamMember: {
	        key: {
	            keyPath: 'id'
	        },
	        indexes: {
	            teamId: { unique: false }
	        }
	    },
	    msg: {
	        key: {
	            // 用自增的 key, 这样存储顺序就是聊天的顺序
	            // 不指定 keyPath 这样取出来的数据不带 id 字段
	            // keyPath: 'id',
	            autoIncrement: true
	        },
	        indexes: {
	            idClient: { unique: true },
	            sessionId: { unique: false },
	            // sessionTime: { unique: false },
	            sessionType: { unique: false }
	        }
	    },
	    sysMsg: {
	        key: {
	            // 用自增的 key, 这样存储顺序就是聊天的顺序
	            // 不指定 keyPath 这样取出来的数据不带 id 字段
	            // keyPath: 'id',
	            autoIncrement: true
	        },
	        indexes: {
	            idServer: { unique: true },
	            category: { unique: false },
	            type: { unique: false }
	        }
	    },
	    sysMsgUnread: {
	        key: {
	            keyPath: 'type'
	        }
	    },
	    session: {
	        key: {
	            keyPath: 'id'
	        },
	        indexes: {
	            updateTime: { unique: false }
	        }
	    }
	};

	config.schema = schema;

	config.keyPath = function(objectStore) {
	    return config.schema[objectStore].key.keyPath;
	};

	module.exports = config;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;

	DBFn.getTimetags = function(filter) {
	    var timetags = {};
	    var mapper = function(record) {
	        timetags[record.name] = record.value;
	        return record;
	    };
	    return this.getAll('timetag', {
	        filter: filter,
	        mapper: mapper
	    }).then(function() {
	        return timetags;
	    });
	};

	DBFn.getTeamMemberTimetags = function() {
	    return this.getTimetags(function(record) {
	        return record.name.indexOf('team-') !== -1;
	    });
	};

	DBFn.getTimetag = function(name) {
	    return this.getOne('timetag', null, name).then(function(obj) {
	        obj = obj || {value:0};
	        return obj.value;
	    });
	};

	DBFn.getTeamMemberTimetag = function(teamId) {
	    return this.getTimetag('team-' + teamId);
	};

	DBFn.updateTimetag = function(name, timetag) {
	    var record = { name: name, value: timetag };
	    return this.put('timetag', record);
	};

	DBFn.updateMyInfoTimetag = function(timetag) {
	    return this.updateTimetag('myInfo', timetag);
	};

	DBFn.updateRelationTimetag = function(timetag) {
	    return this.updateTimetag('relations', timetag);
	};

	DBFn.getRelationsTimetag = function() {
	    return this.getTimetag('relations');
	};

	DBFn.updateFriendTimetag = function(timetag) {
	    return this.updateTimetag('friends', timetag);
	};

	DBFn.getFriendsTimetag = function() {
	    return this.getTimetag('friends');
	};

	DBFn.updateFriendUserTimetag = function(timetag) {
	    return this.updateTimetag('friendUsers', timetag);
	};

	DBFn.updateTeamTimetag = function(timetag) {
	    return this.updateTimetag('teams', timetag);
	};

	DBFn.getTeamsTimetag = function() {
	    return this.getTimetag('teams');
	};

	DBFn.updateTeamMemberTimetag = function(teamId, timetag) {
	    return this.updateTimetag('team-' + teamId, timetag);
	};

	DBFn.getTeamMembersTimetag = function(teamId) {
	    return this.getTimetag('team-' + teamId);
	};

	/*
	 * 什么时候更新漫游消息时间戳
	 * - 收到漫游消息和离线消息后, 拿到最后一条消息的时间戳, 再更新漫游消息时间戳
	 * - 发消息成功后更新漫游消息时间戳
	 * - 收到消息后更新漫游消息时间戳
	 */
	DBFn.updateRoamingMsgTimetag = function(timetag) {
	    return this.updateTimetag('roamingMsgs', timetag);
	};

	DBFn.deleteTimetag = function(name) {
	    return this.remove('timetag', name);
	};

	DBFn.deleteTeamMemberTimetag = function(teamId) {
	    return this.deleteTimetag('team-' + teamId);
	};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var util = __webpack_require__(10);
	var logger = __webpack_require__(40);
	var TableBlacklist = 'blacklist';
	var TableMutelist = 'mutelist';

	/*
	 * 更新、删除
	 * - 成功后更新时间戳
	 */
	DBFn.mergeRelations = function(blacklist, blacklist2delete, mutelist, mutelist2delete, timetag) {
	    var self = this;
	    var p1 = self.updateAndDelete(TableBlacklist, blacklist, blacklist2delete);
	    var p2 = self.updateAndDelete(TableMutelist, mutelist, mutelist2delete);
	    return Promise.all([p1, p2]).then(function() {
	        logger.warn('merge relations');
	        self.updateRelationTimetag(timetag);
	        return [blacklist, blacklist2delete, mutelist, mutelist2delete, timetag];
	    });
	};

	DBFn.getRelations = function() {
	    var self = this;
	    var p1 = self.getAll(TableBlacklist);
	    var p2 = self.getAll(TableMutelist);
	    return Promise.all([p1, p2]);
	};

	DBFn.markInBlacklist = function(obj) {
	    var self = this;
	    // 先复制, 不受外界干扰
	    obj = util.copy(obj);
	    if (obj.isAdd) {
	        var record = obj.record;
	        return self.put(TableBlacklist, record);
	    } else {
	        var account = obj.account;
	        return self.remove(TableBlacklist, account);
	    }
	};

	DBFn.markInMutelist = function(obj) {
	    var self = this;
	    // 先复制, 不受外界干扰
	    obj = util.copy(obj);
	    if (obj.isAdd) {
	        var record = obj.record;
	        return self.put(TableMutelist, record);
	    } else {
	        var account = obj.account;
	        return self.remove(TableMutelist, account);
	    }
	};


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var util = __webpack_require__(10);
	var logger = __webpack_require__(40);
	var TableFriend = 'friend';

	/*
	 * 更新好友、删除好友
	 * - 成功后更新对应的好友时间戳
	 */
	DBFn.mergeFriends = function(friends, friends2delete, timetag) {
	    var self = this;
	    return self.updateAndDelete(TableFriend, friends, friends2delete).then(function() {
	        logger.warn('merge friends');
	        // 此时间戳不一定有
	        if (timetag) {
	            self.updateFriendTimetag(timetag);
	        }
	        return [friends, friends2delete, timetag];
	    });
	};

	DBFn.putFriend = function(friend) {
	    return this.put(TableFriend, friend);
	};

	/*
	 * 更新好友, 加好友都走这里
	 */
	DBFn.updateFriend = function(friend) {
	    // 先复制, 不受外界干扰
	    friend = util.copy(friend);
	    var account = friend.account;
	    return this.getOne(TableFriend, null, account, {
	        modifyObj: friend
	    }).then(function(record) {
	        if (record) {
	            logger.warn('update friend', account, friend);
	        } else {
	            logger.warn('update friend no', account);
	        }
	        return record;
	    });
	};

	DBFn.deleteFriend = function(account) {
	    var self = this;
	    var p1 = self.remove(TableFriend, account);
	    var p2 = self.deleteUser(account);
	    return Promise.all([p1, p2]);
	};

	DBFn.getFriends = function() {
	    var filter = function(friend) {
	        return friend.valid;
	    };
	    return this.getAll(TableFriend, {
	        filter: filter
	    });
	};

	DBFn.getFriend = function(account) {
	    return this.getOne(TableFriend, null, account);
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var util = __webpack_require__(10);
	var logger = __webpack_require__(40);
	var NIMError = __webpack_require__(14);
	var TeamMember = __webpack_require__(87);
	var TableTeam = 'team';
	var IndexTeamId = 'teamId';
	var TableTeamMember = 'teamMember';

	/*
	 * 更新群和解散群
	 * - 成功后更新对应的群时间戳
	 */
	DBFn.mergeTeams = function(teams, teams2delete, timetag) {
	    var self = this;
	    var p1 = self.put(TableTeam, teams);
	    var p2 = self.leaveTeams(teams2delete, timetag);
	    return Promise.all([p1, p2]).then(function() {
	        logger.warn('merge teams');
	        self.updateTeamTimetag(timetag);
	        return [teams, teams2delete, timetag];
	    });
	};

	/*
	 * 添加群
	 */
	DBFn.putTeam = function(team) {
	    // 创建群时服务器并没有返回这个字段
	    team.validToCurrentUser = true;
	    return this.put(TableTeam, team);
	};

	DBFn.updateTeam = function(team) {
	    var self = this;
	    // 先复制, 不受外界干扰
	    team = util.copy(team);
	    var teamId = team.teamId;
	    return self.getOne(TableTeam, null, teamId, {
	        modifyObj: team
	    }).then(function(record) {
	        if (record) {
	            logger.warn('update team', teamId, team);
	        } else {
	            logger.warn('update team no', teamId);
	            return self.putTeam(team);
	        }
	        return record;
	    });
	};

	/*
	 * 转让群
	 * - 更新两个的群成员
	 * - 成功后更新群
	 */
	DBFn.transferTeam = function(team, from, to) {
	    var self = this;
	    var teamId = team.teamId;
	    var memberUpdateTime = team.memberUpdateTime;
	    var m1 = {
	        teamId: teamId,
	        account: from,
	        type: 'normal',
	        updateTime: memberUpdateTime
	    };
	    var m2 = {
	        teamId: teamId,
	        account: to,
	        type: 'owner',
	        updateTime: memberUpdateTime
	    };
	    return self.updateTeamMembers([m1, m2]).then(function() {
	        return self.putTeam(team).then(function() {
	            logger.warn('transfer team', team.teamId, from, to);
	            return [team, from, to];
	        });
	    });
	};

	/*
	 * 离开群
	 * - 标记该群（成功后更新对应的群时间戳）
	 * - 成功后移除该群的所有群成员（成功后移除对应的群成员时间戳）
	 */
	DBFn.leaveTeam = function(teamId) {
	    var self = this;
	    return self.updateTeam({
	        teamId: teamId,
	        validToCurrentUser: false
	    }).then(function() {
	        return self.removeAllTeamMembers(teamId);
	    });
	};

	/*
	 * 解散群
	 * - 标记该群
	 * - 成功后移除该群的所有群成员（成功后移除对应的群成员时间戳）
	 */
	DBFn.dismissTeam = function(teamId, timetag) {
	    var self = this;
	    var modifyObj = {
	        teamId: teamId,
	        valid: false,
	        validToCurrentUser: false,
	        updateTime: timetag
	    };
	    return self.updateTeam(modifyObj).then(function() {
	        return self.removeAllTeamMembers(teamId);
	    });
	};

	DBFn.leaveTeams = function(teams, timetag) {
	    var self = this;
	    var array = [];
	    var promise;
	    teams.forEach(function(team) {
	        promise = self.leaveTeam(team.teamId, timetag);
	        array.push(promise);
	    });
	    return Promise.all(array);
	};

	DBFn.getTeams = function() {
	    return this.getAll(TableTeam, {
	        filter: isValidTeamToCurrentUser
	    });
	};

	function isValidTeamToCurrentUser(team) {
	    return team.valid && team.validToCurrentUser;
	}

	DBFn.getTeam = function(teamId) {
	    teamId = '' + teamId;
	    return this.getOne(TableTeam, null, teamId);
	};

	DBFn.getTeamsByTeamIds = function(teamIds) {
	    var self = this;
	    var array = [];
	    var promise;
	    teamIds.forEach(function(teamId) {
	        promise = self.getTeam(teamId);
	        array.push(promise);
	    });
	    return Promise.all(array);
	};

	DBFn.mergeTeamMembers = function(teamId, members, members2delete, timetag) {
	    var self = this;
	    var p1 = self.putTeamMembers(members);
	    var p2 = self.updateTeamMembers(members2delete);
	    return Promise.all([p1, p2]).then(function() {
	        logger.warn('merge members', teamId);
	        return self.updateTeamMemberTimetag(teamId, timetag);
	    });
	};

	/*
	 * 添加群成员
	 */
	DBFn.putTeamMembers = function(members) {
	    return this.put(TableTeamMember, members);
	};

	DBFn.getTeamMembers = function(teamId) {
	    teamId = '' + teamId;
	    var filter = function(teamMember) {
	        return teamMember.valid;
	    };
	    return this.getOnly(TableTeamMember, IndexTeamId, teamId, {
	        filter: filter
	    });
	};

	DBFn.getInvalidTeamMembers = function(teamId, accounts) {
	    var self = this;
	    teamId = '' + teamId;
	    var array = [];
	    var promise;
	    accounts.forEach(function(account) {
	        promise = self.getOne(TableTeamMember, null, TeamMember.genId(teamId, account));
	        array.push(promise);
	    });
	    return Promise.all(array);
	};

	/*
	 * 更新群成员
	 */
	DBFn.updateTeamMember = function(member) {
	    var teamId = member.teamId;
	    var account = member.account;
	    var id = TeamMember.genId(teamId, account);
	    // member 包含 account id 等不需要更新的属性, 所以先过滤一下
	    var modifyObj = util.filterObj(member, 'nickInTeam muteTeam updateTime type valid');
	    return this.getOne(TableTeamMember, null, id , {
	        modifyObj: modifyObj
	    }).then(function(m) {
	        if (m) {
	            logger.warn('update member', teamId, account, modifyObj);
	        } else {
	            logger.warn('update member no', teamId, account);
	        }
	        return m;
	    });
	};

	/*
	 * 更新群成员
	 */
	DBFn.updateTeamMembers = function(members) {
	    var self = this;
	    if (!members.length) {return Promise.resolve();}
	    var array = [];
	    var promise;
	    members.forEach(function(member) {
	        promise = self.updateTeamMember(member).then(function() {
	        });
	        array.push(promise);
	    });
	    return Promise.all(array);
	};

	/*
	 * 更新群的管理员
	 * - 后续性能如果有问题的话, 增加一个索引, idType = id + type
	 */
	DBFn.updateTeamManagers = function(teamId, accounts, isManager, timetag) {
	    var members = accounts.map(function(account) {
	        return {
	            teamId: teamId,
	            account: account,
	            type: isManager ? 'manager' : 'normal',
	            updateTime: timetag
	        };
	    });
	    return this.updateTeamMembers(members);
	};

	DBFn.removeTeamMembersByAccounts = function(teamId, accounts) {
	    var members = accounts.map(function(account) {
	        return {
	            teamId: teamId,
	            account: account,
	            valid: false
	        };
	    });
	    return this.updateTeamMembers(members);
	};

	/*
	 * 移除群的所有群成员, 成功后移除对应的群成员时间戳
	 */
	DBFn.removeAllTeamMembers = function(teamId) {
	    var self = this;
	    var modifyObj = {
	        valid: false
	    };
	    return self.getOnly(TableTeamMember, IndexTeamId, teamId, {
	        modifyObj: modifyObj
	    }).then(function() {
	        logger.warn('invalid all teamMembers', teamId);
	        return self.deleteTeamMemberTimetag(teamId);
	    });
	};

	DBFn.deleteTeamMembers = function(teamId) {
	    var self = this;
	    return self.getOnly(TableTeamMember, IndexTeamId, teamId, {
	        remove: true
	    }).then(function() {
	        logger.warn('delete all teamMembers', teamId);
	        self.deleteTeamMemberTimetag(teamId);
	    });
	};

	/*
	 * 删除群 单个或者数组
	 * - 如果还在群里面, 那么不删除
	 */
	DBFn.deleteTeam = function(teamIds) {
	    var self = this;
	    var array = [];
	    var promise;
	    if (!util.isArray(teamIds)) { teamIds = [teamIds]; }
	    teamIds.forEach(function(teamId) {
	        teamId = '' + teamId;
	        promise = self.get(TableTeam, teamId).then(function(team) {
	            if (!!team && isValidTeamToCurrentUser(team)) {
	                throw NIMError.stillInTeamError();
	            } else {
	                var p1 = self.remove(TableTeam, teamId);
	                var p2 = self.deleteTeamMembers(teamId);
	                return Promise.all([p1, p2]);
	            }
	        });
	        array.push(promise);
	    });
	    return array.length === 1 ? array[0] : Promise.all(array);
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var notundef = util.notundef;

	/**
	 * 群成员类型
	 * 
	 * - `'normal'` (普通成员)
	 * - `'owner'` (群主)
	 * - `'manager'` (管理员)
	 * 
	 * @memberOf TeamMember
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeReverseMap = {
	    0: 'normal',
	    1: 'owner',
	    2: 'manager'
	};

	/**
	 * 群成员
	 * 
	 * @constructor
	 * @property {Number}   teamId          群ID
	 * @property {String}   account         帐号
	 * @property {String}   type            {@link TeamMember.type|群成员类型}
	 * @property {String}   nickInTeam      在群里面的昵称
	 * @property {Boolean}  muteTeam        是否关闭此群的消息提醒, `true`表示关闭提醒, 但是SDK仍然会收到这个群的消息, SDK只是记录这个设置, 具体根据这个设置要执行的操作由第三方APP决定
	 * @property {Number}   joinTime        入群时间
	 * @property {Number}   updateTime      更新时间
	 * @property {Boolean}  active          普通群拉人进来的时候, 被拉的人处于未激活状态, 未激活状态下看不到这个群, 当有人说话后自动转为激活状态, 能看到该群
	 */
	function TeamMember(options) {
	    util.verifyOptions(options, 'teamId');
	    util.verifyParamAtLeastPresentOne(options, 'nickInTeam muteTeam');
	    this.teamId = options.teamId;
	    // 当更新自己的昵称时, 不会传`account`
	    if (notundef(options.account)) { this.account = options.account; }
	    if (notundef(options.nickInTeam)) { this.nickInTeam = options.nickInTeam; }
	    if (notundef(options.muteTeam)) {
	        this.bits = 0;
	        if (!!options.muteTeam) {
	            this.bits += (1<<0);
	        }
	    }
	}

	TeamMember.reverse = function(teamMember) {
	    var obj = util.copy(teamMember);
	    if (notundef(obj.teamId)) { obj.teamId = '' + obj.teamId; }
	    if (notundef(obj.type)) { obj.type = typeReverseMap[obj.type]; }
	    if (notundef(obj.active)) { obj.active = +obj.active === 1; }
	    if (notundef(obj.valid)) { obj.valid = +obj.valid === 1; }
	    if (notundef(obj.joinTime)) { obj.joinTime = +obj.joinTime; }
	    if (notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
	    if (notundef(obj.bits)) {
	        // 需要同时知道其他标志位的值才能正确设置, 目前只有一个标志位所以是没问题 TODO
	        var bits = obj.bits;
	        delete obj.bits;
	        obj.muteTeam = !!(bits & 1);
	    }
	    // 添加 ID
	    if (notundef(obj.teamId) && notundef(obj.account)) {
	        obj.id = TeamMember.genId(obj.teamId, obj.account);
	    }
	    return obj;
	};

	TeamMember.genId = function(teamId, account) {
	    return teamId + '-' + account;
	};

	TeamMember.accounts2ids = function(teamId, accounts) {
	    return accounts.map(function(a) {
	        return TeamMember.genId(teamId, a);
	    });
	};

	TeamMember.assembleMembers = function(team, accounts) {
	    if (!util.isArray(accounts)) { accounts = [accounts]; }
	    return accounts.map(function(account) {
	        return TeamMember.assembleMember(team, account);
	    });
	};

	TeamMember.assembleMember = function(team, account) {
	    return {
	        account: account,
	        active: true,
	        id: TeamMember.genId(team.teamId, account),
	        joinTime: team.memberUpdateTime,
	        muteTeam: false,
	        nickInTeam: "",
	        teamId: team.teamId,
	        type: 'normal',
	        updateTime: team.memberUpdateTime,
	        valid: true
	    };
	};

	TeamMember.assembleOwner = function(team) {
	    var owner = TeamMember.assembleMember(team, team.owner);
	    owner.type = 'owner';
	    return owner;
	};

	module.exports = TeamMember;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var logger = __webpack_require__(40);
	var util = __webpack_require__(10);
	var TableUser = 'user';

	/**
	 * 处理我的信息
	 * @private
	 * @param  {Boolean} shouldUpdateTimetag 是否更新时间戳
	 */
	DBFn.mergeMyInfo = function(user, shouldUpdateTimetag) {
	    var self = this;
	    return self.put(TableUser, user).then(function() {
	        if (shouldUpdateTimetag) {
	            return self.updateMyInfoTimetag(user.updateTime);
	        }
	        return user;
	    });
	};

	DBFn.mergeFriendUsers = function(users, timetag) {
	    var self = this;
	    return self.putUsers(users).then(function() {
	        self.updateFriendUserTimetag(timetag);
	    });
	};

	DBFn.putUsers = function(users) {
	    return this.put(TableUser, users);
	};

	DBFn.putUser = function(user) {
	    return this.put(TableUser, user);
	};

	DBFn.updateUser = function(user) {
	    // 先复制, 不受外界干扰
	    user = util.copy(user);
	    var account = user.account;
	    return this.getOne(TableUser, null, account, {
	        modifyObj: user
	    }).then(function(record) {
	        if (record) {
	            logger.warn('update user', account, user);
	        } else {
	            logger.warn('update user no', account);
	        }
	        return record;
	    });
	};

	// 如果是好友, 更新其用户信息
	DBFn.updateUsersIfIsFriend = function(users) {
	    var self = this;
	    var waitArray = [];
	    var updateArray = [];
	    var promise;
	    users.forEach(function(user) {
	        promise = self.getFriend(user.account).then(function(record) {
	            if (!!record) {
	                promise = self.putUser(user);
	                updateArray.push(promise);
	            }
	            return record;
	        });
	        waitArray.push(promise);
	    });
	    return Promise.all(waitArray).then(function() {
	        return Promise.all(updateArray).then(function(updateResult) {
	            return updateResult;
	        });
	    });
	};

	DBFn.deleteUser = function(account) {
	    return this.remove(TableUser, account);
	};

	DBFn.getUser = function(account) {
	    return this.getOne(TableUser, null, account);
	};

	DBFn.getUsers = function(accounts) {
	    function filter(user) {
	        return accounts.indexOf(user.account) !== -1;
	    }
	    return this.getAll(TableUser, {
	        filter: filter
	    });
	};

	DBFn.getAllUsers = function() {
	    return this.getAll(TableUser);
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var logger = __webpack_require__(40);
	var TableSession = 'session';
	var TableMsg = 'msg';
	var IndexIdClient = 'idClient';
	var IndexSession = 'sessionId';
	var IndexSessionType = 'sessionType';

	/*
	 * 存储消息, 策略为只管存, 并且保存存储成功的消息, 
	 * 如果失败, 说明对应的消息已经存在, 那么刚好过滤掉, 
	 * 最终返回所有存储成功的消息
	 */
	DBFn.putMsg = function(msgs) {
	    var self = this;
	    return new Promise(function(resolve) {
	        if (!util.isArray(msgs)) { msgs = [msgs]; }
	        // 如果是过滤（云商服专用）, 直接返回
	        if (msgs[0].filter) { return; }
	        var array = [];
	        var counter = msgs.length;
	        msgs.forEach(function(msg) {
	            // 这里要加字段, 所以先拷贝
	            msg = util.copy(msg);
	            // msg.sessionTime = msg.sessionId + '-' + msg.time;
	            msg.sessionType = msg.sessionId + '-' + msg.type;
	            self.put(TableMsg, msg).then(function(record) {
	                array.push(record[0]);
	                bingo();
	            }, bingo);
	        });
	        // 就算有失败, 也算完成, 最终返回所有存储成功的记录
	        function bingo() {
	            counter--;
	            if (counter===0) {
	                resolve(array);
	            }
	        }
	    });
	};

	/*
	 * 更新消息
	 * 只允许更新 localCustom
	 */
	DBFn.updateMsg = function(msg) {
	    var self = this;
	    // 如果是过滤（云商服专用）, 直接返回
	    if (msg.filter) { return; }
	    var idClient = msg.idClient;
	    var modifyObj = util.filterObj(msg, 'resend status idServer time localCustom');
	    return self.getOne(TableMsg, IndexIdClient, idClient, {
	        modifyObj: modifyObj
	    }).then(function(record) {
	        if (record) {
	            logger.warn('update msg', idClient, modifyObj);
	        } else {
	            logger.warn('udpate msg no', idClient);
	        }
	        return record;
	    });
	};

	DBFn.getMsgsBySessionId = function(options) {
	    var self = this;
	    options = options || {};
	    // 顺序、限量、索引
	    var desc = !options.reverse;
	    var limit = options.limit || 100;
	    var index = IndexSession;
	    var matchValue = options.sessionId;
	    // 如果有关键词, 那么类型必须为文本
	    var type = options.type;
	    var keyword = options.keyword;
	    if (notundef(keyword)) {
	        type = 'text';
	    }
	    // 如果有类型, 那么更换索引
	    if (notundef(type)) {
	        index = IndexSessionType;
	        matchValue = matchValue + '-' + type;
	    }
	    // 如果没有提供 lastMsgIdClient 和 keyword, 那么匹配所有的记录
	    // 如果提供了 lastMsgIdClient, 那么匹配从 lastMsgIdClient 的下一条开始的所有记录
	    // 如果提供了 keyword, 那么匹配所有包含 keyword 的消息
	    var lastMsgIdClient = options.lastMsgIdClient;
	    var findLastRecord = false;
	    var filter;
	    if (notundef(lastMsgIdClient) || notundef(keyword)) {
	        filter = function(msg) {
	            if (notundef(lastMsgIdClient)) {
	                if (findLastRecord) {
	                    return bingo();
	                } else {
	                    if (msg.idClient === lastMsgIdClient) {
	                        findLastRecord = true;
	                    }
	                    return false;
	                }
	            }
	            return bingo();
	            function bingo() {
	                if (notundef(keyword)) {
	                    return msg.text.indexOf(keyword) !== -1;
	                }
	                return true;
	            }
	        };
	    }
	    return self.getOnly(TableMsg, index, matchValue, {
	        filter: filter,
	        desc: desc,
	        limit: limit,
	        mapper: self.pruneMsg
	    });
	};

	// 不返回给开发者某些属性
	DBFn.pruneMsg = function(msg) {
	    if (msg) {
	        delete msg.sessionTime;
	        delete msg.sessionType;
	        return msg;
	    } else {
	        return null;
	    }
	};

	DBFn.getMsgByIdClient = function(idClient) {
	    var self = this;
	    return self.getOne(TableMsg, IndexIdClient, idClient).then(function(record) {
	        return self.pruneMsg(record);
	    });
	};

	DBFn.getMsgsByIdClients = function(idClients) {
	    var self = this;
	    var array = [],
	        promise;
	    idClients.forEach(function(idClient) {
	        promise = self.getMsgByIdClient(idClient);
	        array.push(promise);
	    });
	    return Promise.all(array);
	};

	// idClients 单个或数组
	DBFn.deleteMsg = function(idClients) {
	    var self = this;
	    var array = [];
	    var promise;
	    if (!util.isArray(idClients)) { idClients = [idClients]; }
	    idClients.forEach(function(idClient) {
	        promise = self.getOne(TableMsg, IndexIdClient, idClient, {
	            remove: true
	        });
	        array.push(promise);
	    });
	    return array.length === 1 ? array[0] : Promise.all(array);
	};

	DBFn.deleteMsgsBySessionId = function(sessionId) {
	    var self = this;
	    return self.getOnly(TableMsg, IndexSession, sessionId, {
	        remove: true
	    });
	};

	// 删除所有消息和会话
	DBFn.deleteAllMsgs = function() {
	    var self = this;
	    var p1 = self.clearTable(TableMsg);
	    var p2 = self.clearTable(TableSession);
	    return Promise.all([p1, p2]);
	};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var logger = __webpack_require__(40);
	var TableSysMsg = 'sysMsg';
	var IndexIdServer = 'idServer';
	var IndexType = 'type';
	var IndexCategory = 'category';
	var TableSysMsgUnread = 'sysMsgUnread';

	/*
	 * 存储系统通知（不存自定义系统通知）
	 * - 收到离线系统通知
	 * - 收到系统通知
	 * 策略为只管存, 并且保存存储成功的系统通知, 
	 * 如果失败, 说明对应的系统通知已经存在, 那么刚好过滤掉, 
	 * 最终返回所有存储成功的系统通知
	 */
	DBFn.putSysMsg = function(sysMsgs) {
	    var self = this;
	    return new Promise(function(resolve) {
	        if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
	        // 如果是过滤（云商服专用）, 直接返回
	        if (sysMsgs[0].filter) { return; }
	        var array = [];
	        var counter = sysMsgs.length;
	        sysMsgs.forEach(function(sysMsg) {
	            sysMsg = util.copy(sysMsg);
	            self.put(TableSysMsg, sysMsg).then(function(record) {
	                array.push(record[0]);
	                bingo();
	            }, bingo);
	        });
	        // 就算有失败, 也算完成, 最终返回所有存储成功的记录
	        function bingo() {
	            counter--;
	            if (counter===0) {
	                resolve(array);
	            }
	        }
	    });
	};

	/*
	 * 获取系统通知
	 */
	DBFn.getSysMsgs = function(options) {
	    var self = this;
	    options = options || {};
	    var desc = !options.reverse;
	    var limit = options.limit || 100;
	    var index = null;
	    var matchValue = null;
	    // 如果有种类, 更换索引
	    if (!!options.category) {
	        index = IndexCategory;
	        matchValue = options.category;
	    }
	    // 如果有类型, 更换索引
	    if (!!options.type) {
	        index = IndexType;
	        matchValue = options.type;
	    }
	    // 如果没有提供 lastIdServer, 那么匹配所有的记录
	    // 如果提供了 lastIdServer, 那么匹配从 lastIdServer 的下一条开始的所有记录
	    var lastIdServer = options.lastIdServer;
	    var findLastRecord = false;
	    var filter;
	    if (notundef(lastIdServer)) {
	        lastIdServer = '' + lastIdServer;
	        filter = function(sysMsg) {
	            if (findLastRecord) {
	                return true;
	            } else {
	                if (sysMsg.idServer === lastIdServer) {
	                    findLastRecord = true;
	                }
	                return false;
	            }
	        };
	    }
	    options = {
	        filter: filter,
	        desc: desc,
	        limit: limit
	    };
	    if (!index) {
	        return self.getAll(TableSysMsg, options);
	    } else {
	        return self.getOnly(TableSysMsg, index, matchValue, options);
	    }
	};

	/*
	 * 更新系统通知
	 * 只允许更新 read, state, localCustom
	 */
	DBFn.updateSysMsg = function(sysMsg) {
	    if (sysMsg.filter) { return; }
	    var idServer = '' + sysMsg.idServer;
	    var modifyObj = util.filterObj(sysMsg, 'read state error localCustom');
	    return this.getOne(TableSysMsg, IndexIdServer, idServer, {
	        modifyObj: modifyObj
	    }).then(function(record) {
	        if (record) {
	            logger.warn('update sysMsg', idServer, modifyObj);
	        } else {
	            logger.warn('update sysMsg no', idServer);
	        }
	        return record;
	    });
	};

	/*
	 * 标记系统通知为已读
	 * sysMsgs 可以为数组或者单个
	 */
	DBFn.markSysMsgRead = function(sysMsgs) {
	    var self = this;
	    var array = [];
	    var promise;
	    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
	    sysMsgs.forEach(function(sysMsg) {
	        promise = self.updateSysMsg({
	            idServer: sysMsg.idServer,
	            read: true
	        });
	        array.push(promise);
	    });
	    return array.length === 1 ? array[0] : Promise.all(array);
	};

	/*
	 * 删除系统通知
	 * idServers 可以为数组或者单个
	 */
	DBFn.deleteSysMsg = function(idServers) {
	    var self = this;
	    var array = [];
	    var promise;
	    if (!util.isArray(idServers)) { idServers = [idServers]; }
	    idServers.forEach(function(idServer) {
	        idServer = '' + idServer;
	        promise = self.getOne(TableSysMsg, IndexIdServer, idServer, {
	            remove: true
	        });
	        array.push(promise);
	    });
	    return array.length === 1 ? array[0] : Promise.all(array);
	};

	DBFn.deleteAllSysMsgs = function() {
	    var self = this;
	    var p1 = self.clearTable(TableSysMsg);
	    var p2 = self.clearTable(TableSysMsgUnread);
	    return Promise.all([p1, p2]);
	};

	/*
	 * 获取系统通知未读数
	 */
	DBFn.getSysMsgUnread = function() {
	    return this.getAll(TableSysMsgUnread).then(function(records) {
	        var obj = {};
	        records.forEach(function(record) {
	            obj[record.type] = record.num;
	        });
	        return obj;
	    });
	};

	/*
	 * 更新系统通知未读数
	 */
	DBFn.updateSysMsgUnread = function(sysMsgUnread) {
	    // 先复制, 不受外界干扰
	    sysMsgUnread = util.copy(sysMsgUnread);
	    var records = [];
	    Object.keys(sysMsgUnread).forEach(function(type) {
	        records.push({
	            type: type,
	            num: sysMsgUnread[type]
	        });
	    });
	    return this.put(TableSysMsgUnread, records).then(function() {
	        logger.warn('update sysMsg unread', sysMsgUnread);
	        return sysMsgUnread;
	    });
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var DBFn = __webpack_require__(81).fn;
	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var logger = __webpack_require__(40);
	var TableSession = 'session';
	var IndexUpdateTime = 'updateTime';

	/*
	 * 存储会话, 如果没有记录, 那么创建新的纪录
	 */
	DBFn.putSession = function(session) {
	    var self = this;
	    var modifyObj = util.copy(session);
	    delete modifyObj.id;
	    return self.getOne(TableSession, null, session.id, {
	        modifyObj: modifyObj
	    }).then(function(record) {
	        if (!record) {
	            session.unread = 0;
	            return self.put(TableSession, session).then(function(records) {
	                return records[0];
	            });
	        } else {
	            logger.warn('put session', session);
	            return record;
	        }
	    });
	};

	DBFn.getSessions = function(options) {
	    options = options || {};
	    var desc = !options.reverse;
	    var limit = options.limit || 100;
	    // 如果没有提供 lastSessionId, 那么匹配所有的记录
	    // 如果提供了 lastSessionId, 那么匹配从 lastSessionId 的下一条开始的所有记录
	    var lastSessionId = options.lastSessionId;
	    var findLastRecord = false;
	    var filter;
	    if (notundef(lastSessionId)) {
	        filter = function(session) {
	            if (findLastRecord) {
	                return true;
	            } else {
	                if (session.id === lastSessionId) {
	                    findLastRecord = true;
	                }
	                return false;
	            }
	        };
	    }
	    return this.getAll(TableSession, {
	        index: IndexUpdateTime,
	        desc: desc,
	        limit: limit,
	        filter: filter
	    });
	};

	DBFn.getSession = function(sessionId) {
	    return this.get(TableSession, sessionId);
	};

	/*
	 * 修改已有的会话
	 * 只允许更新 unread lastMsg localCustom
	 */
	DBFn.updateSession = function(session) {
	    var sessionId = session.id;
	    var modifyObj = util.filterObj(session, 'unread lastMsg localCustom');
	    return this.getOne(TableSession, null, sessionId, {
	        modifyObj: modifyObj
	    }).then(function(record) {
	        if (record) {
	            logger.warn('update session', sessionId, modifyObj);
	        } else {
	            logger.warn('update session no', sessionId);
	        }
	        return record;
	    });
	};

	DBFn.resetSessionUnread = function(sessionId) {
	    return this.updateSession({
	        id: sessionId,
	        unread: 0
	    });
	};

	/**
	 * 删除会话
	 * @private
	 * @param  {String|String[]} id     id 或者 id 数组
	 */
	DBFn.deleteSession = function(id) {
	    return this.remove(TableSession, id);
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var configBase = __webpack_require__(51);

	// 外层是 service, 内层是 cmd
	var idMap = util.merge({}, configBase.idMap, {
	    // 登录协议
	    auth: {
	        id: 2,
	        // web一键登录
	        login: 3,
	        // 被踢通知
	        kicked: 5,
	        // 退出登录
	        logout: 6,
	        // 多端登陆通知
	        multiPortLogin: 7,
	        // 踢其它端
	        kick: 8
	    },
	    // 用户协议
	    user: {
	        id: 3,
	        // 加入黑名单/从黑名单移除
	        markInBlacklist: 3,
	        // 获取黑名单
	        getBlacklist: 4,
	        // 加入静音列表/从静音列表移除
	        markInMutelist: 5,
	        // 获取静音列表
	        getMutelist: 6,
	        // 获取黑名单和静音列表
	        getRelations: 8,
	        getUsers: 7,
	        updateMyInfo: 10,
	        syncMyInfo: 109,
	        syncUpdateMyInfo: 110
	    },
	    // 通知
	    notify: {
	        id: 4,
	        // 标记通知已读
	        markRead: 3,
	        // 离线session+team消息通知
	        syncOfflineMsgs: 4,
	        // 批量标记协议已读
	        batchMarkRead: 5,
	        // 离线system消息同步通知
	        syncOfflineSysMsgs: 6,
	        // 漫游消息同步通知
	        // 每个会话返回一个包
	        syncRoamingMsgs: 9
	    },
	    // 同步
	    sync: {
	        id: 5,
	        // 同步
	        sync: 1,
	        // 同步群成员
	        syncTeamMembers: 2
	    },
	    // 其它
	    misc: {
	        id: 6,
	        // 获取nos上传凭证
	        getNosToken: 2,
	        // 语音转文字
	        audioToText: 5,
	        // 处理图片
	        processImage: 6
	    },
	    // 消息
	    talk: {
	        id: 7,
	        // 发送消息
	        sendMsg: 1,
	        // 消息通知
	        msg: 2,
	        // 系统通知通知
	        sysMsg: 3,
	        // 获取单人历史消息
	        getHistoryMsgs: 6,
	        // 发送自定义系统通知
	        sendCustomSysMsg: 7,
	        // 获取包含关键词的单人历史消息
	        searchHistoryMsgs: 8,
	        // 删除会话
	        deleteSessions: 9,
	        // 获取会话列表
	        getSessions: 10,
	        // 发送消息后发送方的多端同步通知
	        syncSendMsg: 101
	    },
	    // 群
	    team: {
	        id: 8,
	        // 创建群
	        createTeam: 1,
	        // 发送群消息
	        sendTeamMsg: 2,
	        // 群消息通知
	        teamMsg: 3,
	        // 群消息列表通知
	        teamMsgs: 4,
	        // 拉人入群
	        addTeamMembers: 5,
	        // 踢人出群
	        removeTeamMembers: 6,
	        // 修改群资料
	        updateTeam: 7,
	        // 退出群
	        leaveTeam: 8,
	        // 获取群
	        getTeam: 9,
	        // 获取群列表
	        getTeams: 10,
	        // 获取群成员
	        getTeamMembers: 11,
	        // 解散群
	        dismissTeam: 12,
	        // 申请入群
	        applyTeam: 13,
	        // 同意入群申请
	        passTeamApply: 14,
	        // 拒绝入群申请
	        rejectTeamApply: 15,
	        // 添加群管理员
	        addTeamManagers: 16,
	        // 移除群管理员
	        removeTeamManagers: 17,
	        // 转让群
	        transferTeam: 18,
	        // 修改自己的群资料
	        updateInfoInTeam: 19,
	        // 修改别人的群昵称
	        updateNickInTeam: 20,
	        // 接受入群邀请
	        acceptTeamInvite: 21,
	        // 拒绝入群邀请
	        rejectTeamInvite: 22,
	        // 获取群组历史消息
	        getTeamHistoryMsgs: 23,
	        // 获取包含关键词的群组历史消息
	        searchTeamHistoryMsgs: 24,
	        // 同步群列表通知
	        syncTeams: 109,
	        // 同步群成员通知
	        syncTeamMembers: 111,
	        // 多端同步创建群通知
	        syncCreateTeam: 101,
	        // 多端同步发送群消息通知
	        syncSendTeamMsg: 102,
	        // 多端同步更新群成员通知
	        syncUpdateTeamMember: 119
	    },
	    // 好友协议
	    friend: {
	        id: 12,
	        // 添加好友
	        friendRequest: 1,
	        // 添加好友多端同步
	        syncFriendRequest: 101,
	        // 删除好友
	        deleteFriend: 2,
	        // 删除好友多端同步
	        syncDeleteFriend: 102,
	        // 更新好友
	        updateFriend: 3,
	        // 更新好友多端同步
	        syncUpdateFriend: 103,
	        // 获取好友列表
	        getFriends: 4
	    },
	    chatroom: {
	        id: 13,
	        getChatroomAddress: 1
	    },
	    // 过滤协议, 此协议下的消息都会转发给第三方服务器, 由第三方服务器处理后得到最终发送的消息内容
	    filter: {
	        id: 101,
	        // 发送过滤消息
	        sendFilterMsg: 1,
	        // 过滤消息通知
	        filterMsg: 2,
	        // 过滤系统通知通知
	        filterSysMsg: 3,
	        // 发送过滤自定义系统通知
	        sendFilterCustomSysMsg: 7
	    }
	});

	/**
	 * 命令配置
	 * params 说明: 如果类型是 Property, 如果没有 entity, entity 值就是 name
	 */
	var cmdConfig = util.merge({}, configBase.cmdConfig, {
	    // 登录
	    login: { sid: idMap.auth.id, cid: idMap.auth.login, params: [
	        {type: 'Property', name: 'login'}
	    ]},
	    // 退出登录
	    logout: { sid: idMap.auth.id, cid: idMap.auth.logout },
	    // 踢其它端
	    kick: { sid: idMap.auth.id, cid: idMap.auth.kick, params: [
	        {type: 'StrArray', name: 'deviceIds'}
	    ]},

	    // 加入黑名单/从黑名单移除
	    markInBlacklist: { sid: idMap.user.id, cid: idMap.user.markInBlacklist, params: [
	        {type: 'String', name: 'account'},
	        {type: 'bool', name: 'isAdd'}
	    ]},
	    // 获取黑名单
	    getBlacklist: { sid: idMap.user.id, cid: idMap.user.getBlacklist, params: [
	        {type: 'long', name: 'time'}
	    ]},
	    // 加入静音列表/从静音列表移除
	    markInMutelist: { sid: idMap.user.id, cid: idMap.user.markInMutelist, params: [
	        {type: 'String', name: 'account'},
	        {type: 'bool', name: 'isAdd'}
	    ]},
	    // 获取静音列表
	    getMutelist: { sid: idMap.user.id, cid: idMap.user.getMutelist, params: [
	        {type: 'long', name: 'time'}
	    ]},
	    getRelations: {sid: idMap.user.id, cid: idMap.user.getRelations, params: [
	        {type: 'long', name: 'timetag'}
	    ]},
	    getUsers: {sid: idMap.user.id, cid: idMap.user.getUsers, params: [
	        {type: 'StrArray', name: 'accounts'}
	    ]},
	    updateMyInfo: {sid: idMap.user.id, cid: idMap.user.updateMyInfo, params: [
	        {type: 'Property', name: 'user'}
	    ]},

	    // 标记通知已读, 实际未使用, 统一使用批量标记协议已读
	    markRead: { sid: idMap.notify.id, cid: idMap.notify.markRead, params: [
	        {type: 'long', name: 'id'},
	        {type: 'ph', name: 'ph'}
	    ]},
	    // 批量标记协议已读
	    batchMarkRead: { sid: idMap.notify.id, cid: idMap.notify.batchMarkRead, params: [
	        {type: 'byte', name: 'sid'},
	        {type: 'byte', name: 'cid'},
	        {type: 'LongArray', name: 'ids'}
	    ]},

	    // 同步 4_4(离线session+team消息), 4_6(离线system消息), 8_109(群资料)
	    sync: { sid: idMap.sync.id, cid: idMap.sync.sync, params: [
	        {type: 'Property', name: 'sync'}
	    ]},
	    // 同步群成员
	    syncTeamMembers: { sid: idMap.sync.id, cid: idMap.sync.syncTeamMembers, params: [
	        {type: 'LongLongMap', name: 'sync'}
	    ]},

	    // 获取nos上传凭证
	    getNosToken: { sid: idMap.misc.id, cid: idMap.misc.getNosToken, params: [
	        {type: 'String', name: 'responseBody'}
	    ]},
	    audioToText: {sid: idMap.misc.id, cid: idMap.misc.audioToText, params: [
	        {type: 'Property', name: 'audioToText'}
	    ]},
	    processImage: {sid: idMap.misc.id, cid: idMap.misc.processImage, params: [
	        {type: 'String', name: 'url'},
	        {type: 'PropertyArray', name: 'imageOps', entity: 'imageOp'}
	    ]},

	    // 发送消息
	    sendMsg: { sid: idMap.talk.id, cid: idMap.talk.sendMsg,  params: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 获取单人历史消息
	    getHistoryMsgs: { sid: idMap.talk.id, cid: idMap.talk.getHistoryMsgs, params: [
	        {type: 'String', name: 'to'},
	        {type: 'long', name: 'beginTime'},
	        {type: 'long', name: 'endTime'},
	        {type: 'long', name: 'lastMsgId'},
	        {type: 'int', name: 'limit'},
	        {type: 'bool', name: 'reverse'}
	    ]},
	    // 发送自定义系统通知
	    sendCustomSysMsg: { sid: idMap.talk.id, cid: idMap.talk.sendCustomSysMsg, params: [
	        {type: 'Property', name: 'sysMsg'}
	    ]},
	    // 获取包含关键词的单人历史消息
	    searchHistoryMsgs: { sid: idMap.talk.id, cid: idMap.talk.searchHistoryMsgs, params: [
	        {type: 'String', name: 'to'},
	        {type: 'long', name: 'beginTime'},
	        {type: 'long', name: 'endTime'},
	        {type: 'String', name: 'keyword'},
	        {type: 'int', name: 'limit'},
	        {type: 'bool', name: 'reverse'}
	    ]},
	    // 获取会话列表
	    getSessions: {sid: idMap.talk.id, cid: idMap.talk.getSessions, params: [
	        {type: 'long', name: 'time'}
	    ]},
	    // 删除会话
	    deleteSessions: {sid: idMap.talk.id, cid: idMap.talk.deleteSessions, params: [
	        {type: 'StrArray', name: 'sessions'}
	    ]},

	    // 创建群
	    createTeam: { sid: idMap.team.id, cid: idMap.team.createTeam, params: [
	        {type: 'Property', name: 'team'},
	        {type: 'StrArray', name: 'accounts'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 发送群消息
	    sendTeamMsg: { sid: idMap.team.id, cid: idMap.team.sendTeamMsg, params: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 拉人入群
	    addTeamMembers: { sid: idMap.team.id, cid: idMap.team.addTeamMembers, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'StrArray', name: 'accounts'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 踢人出群
	    removeTeamMembers: { sid: idMap.team.id, cid: idMap.team.removeTeamMembers, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'StrArray', name: 'accounts'}
	    ]},
	    // 更新群
	    updateTeam: { sid: idMap.team.id, cid: idMap.team.updateTeam, params: [
	        {type: 'Property', name: 'team'}
	    ]},
	    // 退出群
	    leaveTeam: { sid: idMap.team.id, cid: idMap.team.leaveTeam, params: [
	        {type: 'long', name: 'teamId'}
	    ]},
	    // 获取群
	    getTeam: { sid: idMap.team.id, cid: idMap.team.getTeam, params: [
	        {type: 'long', name: 'teamId'}
	    ]},
	    // 获取群列表
	    getTeams: { sid: idMap.team.id, cid: idMap.team.getTeams, params: [
	        {type: 'long', name: 'timetag'}
	    ]},
	    // 获取群成员
	    getTeamMembers: { sid: idMap.team.id, cid: idMap.team.getTeamMembers, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'long', name: 'timetag'}
	    ]},
	    // 解散群
	    dismissTeam: { sid: idMap.team.id, cid: idMap.team.dismissTeam, params: [
	        {type: 'long', name: 'teamId'}
	    ]},
	    // 申请入群
	    applyTeam: { sid: idMap.team.id, cid: idMap.team.applyTeam, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 同意入群申请
	    passTeamApply: { sid: idMap.team.id, cid: idMap.team.passTeamApply, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'String', name: 'from'}
	    ]},
	    // 拒绝入群申请
	    rejectTeamApply: { sid: idMap.team.id, cid: idMap.team.rejectTeamApply, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'String', name: 'from'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 添加群管理员
	    addTeamManagers: { sid: idMap.team.id, cid: idMap.team.addTeamManagers, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'StrArray', name: 'accounts'}
	    ]},
	    // 移除群管理员
	    removeTeamManagers: { sid: idMap.team.id, cid: idMap.team.removeTeamManagers, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'StrArray', name: 'accounts'}
	    ]},
	    // 转让群
	    transferTeam: { sid: idMap.team.id, cid: idMap.team.transferTeam, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'String', name: 'account'},
	        {type: 'bool', name: 'leave'}
	    ]},
	    // 修改自己的群资料
	    updateInfoInTeam: { sid: idMap.team.id, cid: idMap.team.updateInfoInTeam, params: [
	        {type: 'Property', name: 'teamMember'}
	    ]},
	    // 修改别人的群昵称
	    updateNickInTeam: { sid: idMap.team.id, cid: idMap.team.updateNickInTeam, params: [
	        {type: 'Property', name: 'teamMember'}
	    ]},
	    // 接受入群邀请
	    acceptTeamInvite: { sid: idMap.team.id, cid: idMap.team.acceptTeamInvite, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'String', name: 'from'}
	    ]},
	    // 拒绝入群邀请
	    rejectTeamInvite: { sid: idMap.team.id, cid: idMap.team.rejectTeamInvite, params: [
	        {type: 'long', name: 'teamId'},
	        {type: 'String', name: 'from'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 获取群组历史消息
	    getTeamHistoryMsgs: { sid: idMap.team.id, cid: idMap.team.getTeamHistoryMsgs, params: [
	        {type: 'long', name: 'to'},
	        {type: 'long', name: 'beginTime'},
	        {type: 'long', name: 'endTime'},
	        {type: 'long', name: 'lastMsgId'},
	        {type: 'int', name: 'limit'},
	        {type: 'bool', name: 'reverse'}
	    ]},
	    // 获取包含关键词的群组历史消息
	    searchTeamHistoryMsgs: { sid: idMap.team.id, cid: idMap.team.searchTeamHistoryMsgs, params: [
	        {type: 'long', name: 'to'},
	        {type: 'long', name: 'beginTime'},
	        {type: 'long', name: 'endTime'},
	        {type: 'String', name: 'keyword'},
	        {type: 'int', name: 'limit'},
	        {type: 'bool', name: 'reverse'}
	    ]},

	    // 添加好友
	    friendRequest: { sid: idMap.friend.id, cid: idMap.friend.friendRequest, params: [
	        {type: 'String', name: 'account'},
	        {type: 'byte', name: 'type'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 删除好友
	    deleteFriend: { sid: idMap.friend.id, cid: idMap.friend.deleteFriend, params: [
	        {type: 'String', name: 'account'}
	    ]},
	    // 更新好友
	    updateFriend: { sid: idMap.friend.id, cid: idMap.friend.updateFriend, params: [
	        {type: 'Property', name: 'friend'}
	    ]},
	    // 获取好友列表
	    getFriends: { sid: idMap.friend.id, cid: idMap.friend.getFriends, params: [
	        {type: 'long', name: 'timetag'}
	    ]},
	    getChatroomAddress: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroomAddress, params: [
	        {type: 'long', name: 'chatroomId'}
	    ]},
	    // 发送过滤消息
	    sendFilterMsg: { sid: idMap.filter.id, cid: idMap.filter.sendFilterMsg,  params: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 发送过滤自定义系统通知
	    sendFilterCustomSysMsg: { sid: idMap.filter.id, cid: idMap.filter.sendFilterCustomSysMsg, params: [
	        {type: 'Property', name: 'sysMsg'}
	    ]}
	});

	/**
	 * 回包配置
	 * response 说明: 如果没有 entity, entity 值就是 name
	 */
	var packetConfig = util.merge({}, configBase.packetConfig, {
	    // 登录
	    '2_3': {service: 'auth', cmd: 'login', response: [
	        {type: 'Property', name: 'loginRes'},
	        {type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort'}
	    ]},
	    // 被踢通知
	    '2_5': {service: 'auth', cmd: 'kicked', response: [
	        {type: 'Number', name: 'from'},
	        {type: 'Number', name: 'reason'}
	    ]},
	    // 退出登录
	    '2_6': {service: 'auth', cmd: 'logout'},
	    // 多端登陆通知
	    '2_7': {service: 'auth', cmd: 'multiPortLogin', response: [
	        {type: 'Number', name: 'state'},
	        {type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort'}
	    ]},
	    // 踢其它端
	    '2_8': {service: 'auth', cmd: 'kick', response: [
	        {type: 'StrArray', name: 'deviceIds'}
	    ]},

	    // 加入黑名单/从黑名单移除
	    '3_3': {service: 'user', cmd: 'markInBlacklist'},
	    // 加入黑名单/从黑名单移除多端同步
	    '3_103': {service: 'user', cmd: 'syncMarkInBlacklist', response: [
	        {type: 'String', name: 'account'},
	        {type: 'Boolean', name: 'isAdd'}
	    ]},
	    // 获取黑名单
	    '3_4': {service: 'user', cmd: 'getBlacklist', response: [
	        {type: 'StrArray', name: 'blacklist'}
	    ]},
	    // 加入静音列表/从静音列表移除
	    '3_5': {service: 'user', cmd: 'markInMutelist'},
	    // 加入静音列表/从静音列表移除多端同步
	    '3_105': {service: 'user', cmd: 'syncMarkInMutelist', response: [
	        {type: 'String', name: 'account'},
	        {type: 'Boolean', name: 'isAdd'}
	    ]},
	    // 获取静音列表
	    '3_6': {service: 'user', cmd: 'getMutelist', response: [
	        {type: 'StrArray', name: 'mutelist'}
	    ]},
	    // 获取黑名单和静音列表
	    '3_8': {service: 'user', cmd: 'getRelations', response: [
	        {type: 'PropertyArray', name: 'specialRelations', entity: 'specialRelation'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    '3_7': {service: 'user', cmd: 'getUsers', response: [
	        {type: 'PropertyArray', name: 'users', entity: 'user'}
	    ]},
	    '3_10': {service: 'user', cmd: 'updateMyInfo', response: [
	        {type: 'Number', name: 'timetag'}
	    ]},
	    '3_109': {service: 'user', cmd: 'syncMyInfo', response: [
	        {type: 'Property', name: 'user'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    '3_110': {service: 'user', cmd: 'syncUpdateMyInfo', response: [
	        {type: 'Property', name: 'user'}
	    ]},

	    // 通知包
	    '4_1': {service: 'notify'},
	    '4_2': {service: 'notify'},
	    '4_3': {service: 'notify', cmd: 'markRead'},
	    // 离线session+team消息同步通知
	    '4_4': {service: 'notify', cmd: 'syncOfflineMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 批量标记协议已读
	    '4_5': {service: 'notify', cmd: 'batchMarkRead'},
	    // 离线sysMsg通知
	    '4_6': {service: 'notify', cmd: 'syncOfflineSysMsgs', response: [
	        {type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg'}
	    ]},
	    // 漫游消息同步通知
	    '4_9': {service: 'notify', cmd: 'syncRoamingMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 离线过滤的消息通知
	    '4_100': {service: 'notify', cmd: 'syncOfflineFilterMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 离线过滤的sysMsg通知
	    '4_101': {service: 'notify', cmd: 'syncOfflineFilterSysMsgs', response: [
	        {type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg'}
	    ]},
	    // 同步
	    '5_1': {service: 'sync', cmd: 'syncDone', response: [
	        {type: 'Number', name: 'timetag'}
	    ]},
	    // 同步群成员
	    '5_2': {service: 'sync', cmd: 'syncTeamMembersDone', response: [
	        {type: 'Number', name: 'timetag'}
	    ]},
	    // 获取nos上传凭证
	    '6_2': {service: 'misc', cmd: 'getNosToken', response: [
	        {type: 'Property', name: 'nosToken'}
	    ]},
	    '6_5': {service: 'misc', cmd: 'audioToText', response: [
	        {type: 'String', name: 'text'}
	    ]},
	    // 处理图片
	    '6_6': {service: 'misc', cmd: 'processImage', response: [
	        {type: 'String', name: 'url'}
	    ]},
	    // 发送消息
	    '7_1': {service: 'talk', cmd: 'sendMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 消息通知
	    '7_2': {service: 'talk', cmd: 'msg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 系统通知通知
	    '7_3': {service: 'talk', cmd: 'sysMsg', response: [
	        {type: 'Property', name: 'sysMsg'}
	    ]},
	    // 获取单人历史消息
	    '7_6': {service: 'talk', cmd: 'getHistoryMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 发送自定义系统通知
	    '7_7': {service: 'talk', cmd: 'sendCustomSysMsg'},
	    // 获取包含关键词的单人历史消息
	    '7_8': {service: 'talk', cmd: 'searchHistoryMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    '7_9': {service: 'talk', cmd: 'deleteSessions'},
	    '7_10': {service: 'talk', cmd: 'getSessions', response: [
	        {type: 'StrArray', name: 'sessions'}
	    ]},
	    // 发送消息后发送方的多端同步通知
	    '7_101': {service: 'talk', cmd: 'syncSendMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 创建群
	    '8_1': {service: 'team', cmd: 'createTeam', response: [
	        {type: 'Property', name: 'team'}
	    ]},
	    // 发送群消息
	    '8_2': {service: 'team', cmd: 'sendTeamMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 群消息通知
	    '8_3': {service: 'team', cmd: 'teamMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 群消息列表通知
	    '8_4': {service: 'team', cmd: 'teamMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 拉人入群
	    '8_5': {service: 'team', cmd: 'addTeamMembers'},
	    // 踢人出群
	    '8_6': {service: 'team', cmd: 'removeTeamMembers'},
	    // 更新群
	    '8_7': {service: 'team', cmd: 'updateTeam', response: [
	        {type: 'Number', name: 'id'},
	        {type: 'Number', name: 'time'}
	    ]},
	    // 退出群
	    '8_8': {service: 'team', cmd: 'leaveTeam'},
	    // 获取群
	    '8_9': {service: 'team', cmd: 'getTeam', response: [
	        {type: 'Property', name: 'team'}
	    ]},
	    // 获取群列表
	    '8_10': {service: 'team', cmd: 'getTeams', response: [
	        {type: 'PropertyArray', name: 'teams', entity: 'team'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    // 获取群成员
	    '8_11': {service: 'team', cmd: 'getTeamMembers', response: [
	        {type: 'Number', name: 'teamId'},
	        {type: 'PropertyArray', name: 'members', entity: 'teamMember'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    // 解散群
	    '8_12': {service: 'team', cmd: 'dismissTeam'},
	    // 申请入群
	    '8_13': {service: 'team', cmd: 'applyTeam', response: [
	        {type: 'Property', name: 'team'}
	    ]},
	    // 同意入群申请
	    '8_14': {service: 'team', cmd: 'passTeamApply'},
	    // 拒绝入群申请
	    '8_15': {service: 'team', cmd: 'rejectTeamApply'},
	    // 添加群管理员
	    '8_16': {service: 'team', cmd: 'addTeamManagers'},
	    // 移除群管理员
	    '8_17': {service: 'team', cmd: 'removeTeamManagers'},
	    // 转让群
	    '8_18': {service: 'team', cmd: 'transferTeam'},
	    // 修改自己的群资料
	    '8_19': {service: 'team', cmd: 'updateInfoInTeam'},
	    // 修改别人的群昵称
	    '8_20': {service: 'team', cmd: 'updateNickInTeam'},
	    // 接受入群邀请
	    '8_21': {service: 'team', cmd: 'acceptTeamInvite', response: [
	        {type: 'Property', name: 'team'}
	    ]},
	    // 拒绝入群邀请
	    '8_22': {service: 'team', cmd: 'rejectTeamInvite'},
	    // 获取群组历史消息
	    '8_23': {service: 'team', cmd: 'getTeamHistoryMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 获取包含关键词的群组历史消息
	    '8_24': {service: 'team', cmd: 'searchTeamHistoryMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    // 同步群列表通知
	    '8_109': {service: 'team', cmd: 'syncTeams', response: [
	        {type: 'Number', name: 'timetag'},
	        {type: 'PropertyArray', name: 'teams', entity: 'team'}
	    ]},
	    // 同步群成员通知
	    '8_111': {service: 'team', cmd: 'syncTeamMembers', response: [
	        {type: 'Number', name: 'teamId'},
	        {type: 'PropertyArray', name: 'members', entity: 'teamMember'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    // 多端同步创建群通知
	    '8_101': {service: 'team', cmd: 'syncCreateTeam', response: [
	        {type: 'Property', name: 'team'}
	    ]},
	    // 多端同步发送群消息通知
	    '8_102': {service: 'team', cmd: 'syncSendTeamMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 多端同步更新群成员通知
	    '8_119': {service: 'team', cmd: 'syncUpdateTeamMember', response: [
	        {type: 'Property', name: 'teamMember'}
	    ]},

	    // 添加好友
	    '12_1': {service: 'friend', cmd: 'friendRequest'},
	    // 添加好友多端同步
	    '12_101': {service: 'friend', cmd: 'syncFriendRequest', response: [
	        {type: 'String', name: 'account'},
	        {type: 'Number', name: 'type'},
	        {type: 'String', name: 'ps'}
	    ]},
	    // 删除好友
	    '12_2': {service: 'friend', cmd: 'deleteFriend'},
	    // 删除好友多端同步
	    '12_102': {service: 'friend', cmd: 'syncDeleteFriend', response: [
	        {type: 'String', name: 'account'}
	    ]},
	    // 更新好友
	    '12_3': {service: 'friend', cmd: 'updateFriend'},
	    // 更新好友多端同步
	    '12_103': {service: 'friend', cmd: 'syncUpdateFriend', response: [
	        {type: 'Property', name: 'friend'}
	    ]},
	    // 获取好友列表
	    '12_4': {service: 'friend', cmd: 'getFriends', response: [
	        {type: 'PropertyArray', name: 'friends', entity: 'friend'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    // 同步好友列表
	    '12_5': {service: 'friend', cmd: 'syncFriends', response: [
	        {type: 'PropertyArray', name: 'friends', entity: 'friend'},
	        {type: 'Number', name: 'timetag'}
	    ]},
	    '12_6': {service: 'friend', cmd: 'syncFriendUsers', response: [
	        {type: 'PropertyArray', name: 'users', entity: 'user'},
	        {type: 'Number', name: 'timetag'}
	    ]},

	    '13_1': {service: 'chatroom', cmd: 'getChatroomAddress', response: [
	        {type: 'StrArray', name: 'address'}
	    ]},

	    // 发送过滤消息
	    '101_1': {service: 'filter', cmd: 'sendFilterMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 过滤消息通知
	    '101_2': {service: 'filter', cmd: 'filterMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    // 过滤系统通知通知
	    '101_3': {service: 'filter', cmd: 'filterSysMsg', response: [
	        {type: 'Property', name: 'sysMsg'}
	    ]},
	    // 发送过滤自定义系统通知
	    '101_7': {service: 'filter', cmd: 'sendFilterCustomSysMsg'}
	});

	module.exports = {
	    idMap: idMap,
	    cmdConfig: cmdConfig,
	    packetConfig: packetConfig
	};


/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = {
	    "login": {
	        "os": 4,
	        "sdkVersion": 6,
	        "protocolVersion": 9,
	        "deviceId": 13,
	        "appKey": 18,
	        "account": 19,
	        "browser": 24,
	        "token": 1000
	    },
	    "loginRes": {
	        "lastLoginDeviceId": 17,
	        "connectionId": 102,
	        "ip": 103,
	        "port": 104,
	        "country": 106
	    },
	    "loginPort": {
	        "type": 3,
	        "os": 4,
	        "mac": 5,
	        "deviceId": 13,
	        "account": 19,
	        "connectionId": 102,
	        "ip": 103,
	        "time": 109
	    },
	    "sync": {
	        "myInfo": 1,
	        "offlineMsgs": 2,
	        "teams": 3,
	        "roamingMsgs": 7,
	        "relations": 9,
	        "friends": 11,
	        "sessions": 12,
	        "friendUsers": 13,
	        "filterMsgs": 100
	    },
	    "team": {
	        "teamId": 1,
	        "name": 3,
	        "type": 4,
	        "owner": 5,
	        "level": 6,
	        "selfCustom": 7,
	        "valid": 8,
	        "memberNum": 9,
	        "memberUpdateTime": 10,
	        "createTime": 11,
	        "updateTime": 12,
	        "validToCurrentUser": 13,
	        "intro": 14,
	        "announcement": 15,
	        "joinMode": 16,
	        "bits": 17,
	        "custom": 18,
	        "serverCustom": 19
	    },
	    "teamMember": {
	        "teamId": 1,
	        "account": 3,
	        "type": 4,
	        "nickInTeam": 5,
	        "bits": 7,
	        "active": 8,
	        "valid": 9,
	        "joinTime": 10,
	        "updateTime": 11
	    },
	    "msg": {
	        "scene": 0,
	        "to": 1,
	        "from": 2,
	        "fromClientType": 4,
	        "fromDeviceId": 5,
	        "fromNick": 6,
	        "time": 7,
	        "type": 8,
	        "body": 9,
	        "attach": 10,
	        "idClient": 11,
	        "idServer": 12,
	        "resend": 13,
	        "userUpdateTime": 14,
	        "custom": 15,
	        "pushPayload": 16,
	        "pushContent": 17,
	        "isHistoryable": 100,
	        "isRoamingable": 101,
	        "isSyncable": 102,
	        "isMuted": 104,
	        "cc": 105,
	        "isPushable": 107,
	        "isOfflinable": 108,
	        "isUnreadable": 109,
	        "needPushNick": 110
	    },
	    "sysMsg": {
	        "time": 0,
	        "type": 1,
	        "to": 2,
	        "from": 3,
	        "ps": 4,
	        "attach": 5,
	        "idServer": 6,
	        "sendToOnlineUsersOnly": 7,
	        "apnsText": 8,
	        "pushPayload": 9,
	        "cc": 105,
	        "isPushable": 107,
	        "isUnreadable": 109,
	        "needPushNick": 110
	    },
	    "nosToken": {
	        "objectName": 1,
	        "token": 2,
	        "bucket": 3,
	        "expireTime": 4
	    },
	    "friend": {
	        "account": 4,
	        "flag": 5,
	        "beflag": 6,
	        "source": 7,
	        "alias": 8,
	        "bits": 9,
	        "custom": 10,
	        "createTime": 11,
	        "updateTime": 12
	    },
	    "user": {
	        "account": 1,
	        "nick": 3,
	        "avatar": 4,
	        "sign": 5,
	        "gender": 6,
	        "email": 7,
	        "birth": 8,
	        "tel": 9,
	        "custom": 10,
	        "createTime": 12,
	        "updateTime": 13
	    },
	    "specialRelation": {
	        "account": 0,
	        "isMuted": 1,
	        "isBlacked": 2,
	        "createTime": 3,
	        "updateTime": 4
	    },
	    "audioToText": {
	        "url": 2
	    },
	    "imageOp": {
	        "type": 0,
	        "stripMeta": 1,
	        "typeType": 2,
	        "blurRadius": 3,
	        "blurSigma": 4,
	        "qualityQuality": 5,
	        "cropX": 6,
	        "cropY": 7,
	        "cropWidth": 8,
	        "cropHeight": 9,
	        "rotateAngle": 10,
	        "pixelPixel": 11,
	        "thumbnailMode": 12,
	        "thumbnailWidth": 13,
	        "thumbnailHeight": 14,
	        "thumbnailAxisX": 15,
	        "thumbnailAxisY": 16,
	        "thumbnailCenterX": 17,
	        "thumbnailCenterY": 18,
	        "thumbnailEnlarge": 19,
	        "thumbnailToStatic": 20,
	        "watermarkType": 21,
	        "watermarkGravity": 22,
	        "watermarkDissolve": 23,
	        "watermarkDx": 24,
	        "watermarkDy": 25,
	        "watermarkImage": 26,
	        "watermarkText": 27,
	        "watermarkFont": 28,
	        "watermarkFontSize": 29,
	        "watermarkFontColor": 30,
	        "interlace": 31
	    }
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
	    "login": {
	        "4": "os",
	        "6": "sdkVersion",
	        "9": "protocolVersion",
	        "13": "deviceId",
	        "18": "appKey",
	        "19": "account",
	        "24": "browser",
	        "1000": "token"
	    },
	    "loginRes": {
	        "17": "lastLoginDeviceId",
	        "102": "connectionId",
	        "103": "ip",
	        "104": "port",
	        "106": "country"
	    },
	    "loginPort": {
	        "3": "type",
	        "4": "os",
	        "5": "mac",
	        "13": "deviceId",
	        "19": "account",
	        "102": "connectionId",
	        "103": "ip",
	        "109": "time"
	    },
	    "sync": {
	        "1": "myInfo",
	        "2": "offlineMsgs",
	        "3": "teams",
	        "7": "roamingMsgs",
	        "9": "relations",
	        "11": "friends",
	        "12": "sessions",
	        "13": "friendUsers",
	        "100": "filterMsgs"
	    },
	    "team": {
	        "1": "teamId",
	        "3": "name",
	        "4": "type",
	        "5": "owner",
	        "6": "level",
	        "7": "selfCustom",
	        "8": "valid",
	        "9": "memberNum",
	        "10": "memberUpdateTime",
	        "11": "createTime",
	        "12": "updateTime",
	        "13": "validToCurrentUser",
	        "14": "intro",
	        "15": "announcement",
	        "16": "joinMode",
	        "17": "bits",
	        "18": "custom",
	        "19": "serverCustom"
	    },
	    "teamMember": {
	        "1": "teamId",
	        "3": "account",
	        "4": "type",
	        "5": "nickInTeam",
	        "7": "bits",
	        "8": "active",
	        "9": "valid",
	        "10": "joinTime",
	        "11": "updateTime"
	    },
	    "msg": {
	        "0": "scene",
	        "1": "to",
	        "2": "from",
	        "4": "fromClientType",
	        "5": "fromDeviceId",
	        "6": "fromNick",
	        "7": "time",
	        "8": "type",
	        "9": "body",
	        "10": "attach",
	        "11": "idClient",
	        "12": "idServer",
	        "13": "resend",
	        "14": "userUpdateTime",
	        "15": "custom",
	        "16": "pushPayload",
	        "17": "pushContent",
	        "100": "isHistoryable",
	        "101": "isRoamingable",
	        "102": "isSyncable",
	        "104": "isMuted",
	        "105": "cc",
	        "107": "isPushable",
	        "108": "isOfflinable",
	        "109": "isUnreadable",
	        "110": "needPushNick"
	    },
	    "sysMsg": {
	        "0": "time",
	        "1": "type",
	        "2": "to",
	        "3": "from",
	        "4": "ps",
	        "5": "attach",
	        "6": "idServer",
	        "7": "sendToOnlineUsersOnly",
	        "8": "apnsText",
	        "9": "pushPayload",
	        "105": "cc",
	        "107": "isPushable",
	        "109": "isUnreadable",
	        "110": "needPushNick"
	    },
	    "nosToken": {
	        "1": "objectName",
	        "2": "token",
	        "3": "bucket",
	        "4": "expireTime"
	    },
	    "friend": {
	        "4": "account",
	        "5": "flag",
	        "6": "beflag",
	        "7": "source",
	        "8": "alias",
	        "9": "bits",
	        "10": "custom",
	        "11": "createTime",
	        "12": "updateTime"
	    },
	    "user": {
	        "1": "account",
	        "3": "nick",
	        "4": "avatar",
	        "5": "sign",
	        "6": "gender",
	        "7": "email",
	        "8": "birth",
	        "9": "tel",
	        "10": "custom",
	        "12": "createTime",
	        "13": "updateTime"
	    },
	    "specialRelation": {
	        "0": "account",
	        "1": "isMuted",
	        "2": "isBlacked",
	        "3": "createTime",
	        "4": "updateTime"
	    },
	    "audioToText": {
	        "2": "url"
	    },
	    "imageOp": {
	        "0": "type",
	        "1": "stripMeta",
	        "2": "typeType",
	        "3": "blurRadius",
	        "4": "blurSigma",
	        "5": "qualityQuality",
	        "6": "cropX",
	        "7": "cropY",
	        "8": "cropWidth",
	        "9": "cropHeight",
	        "10": "rotateAngle",
	        "11": "pixelPixel",
	        "12": "thumbnailMode",
	        "13": "thumbnailWidth",
	        "14": "thumbnailHeight",
	        "15": "thumbnailAxisX",
	        "16": "thumbnailAxisY",
	        "17": "thumbnailCenterX",
	        "18": "thumbnailCenterY",
	        "19": "thumbnailEnlarge",
	        "20": "thumbnailToStatic",
	        "21": "watermarkType",
	        "22": "watermarkGravity",
	        "23": "watermarkDissolve",
	        "24": "watermarkDx",
	        "25": "watermarkDy",
	        "26": "watermarkImage",
	        "27": "watermarkText",
	        "28": "watermarkFont",
	        "29": "watermarkFontSize",
	        "30": "watermarkFontColor",
	        "31": "interlace"
	    }
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var xhr = __webpack_require__(69);
	var config = __webpack_require__(26);
	var logger = __webpack_require__(40);

	IMProtocolFn.refreshSocketUrl = function() {
	    var self = this;
	    var options = self.options;
	    var info = config.info;
	    var lbsUrl = config.lbsUrl + 
	            '?k=' + options.appKey + 
	            '&id=' + options.account + 
	            '&sv=' + info.sdkVersion + 
	            '&pv=' + info.protocolVersion;
	    logger.log('will refresh lbs', lbsUrl);
	    xhr({
	        method: 'GET',
	        cors: true,
	        url: lbsUrl,
	        timeout: config.xhrTimeout
	    }, function(error, response, body) {
	        if (!error) {
	            self.socketUrls = [];
	            body = JSON.parse(body);
	            body.common.link.forEach(function(url) {
	                self.socketUrls.push(config.formatSocketUrl(url));
	            });
	            body.common['link.default'].forEach(function(url) {
	                url = config.formatSocketUrl(url);
	                if (self.socketUrls.indexOf(url) === -1) {
	                    self.socketUrls.push(url);
	                }
	            });
	            self.connectToUrl(self.getNextSocketUrl());
	        } else {
	            self.onDisconnect();
	        }
	    });
	};

	// TODO just for test;
	// IMProtocolFn.getNextSocketUrl = function() {
	//     url = 'https://testlink.netease.im:9092';
	// };
	// TODO test end


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var logger = __webpack_require__(40);
	var LoginPort = __webpack_require__(46);

	IMProtocolFn.assembleLogin = function() {
	    return {
	        login: this.assembleIMLogin()
	    };
	};

	// 登录之后打开数据库
	IMProtocolFn.afterLogin = function() {
	    var self = this;
	    var db = self.db;
	    if (db.enable) {
	        self.db.init(self.account).then(function() {
	            self.syncData();
	        }, function(error) {
	            logger.warn('no db', error);
	            self.syncData();
	        });
	    } else {
	        logger.warn('no db');
	        self.syncData();
	    }
	};

	// 处理认证协议
	IMProtocolFn.processAuth = function(packet) {
	    var self = this;
	    switch (packet.cmd) {
	    // 登录回报
	    case 'login':
	        if (!packet.error) {
	            packet.obj = packet.content.loginRes;
	            self.onLoginPortsChange(packet.content.loginPorts, 2);
	        }
	        break;
	    // 被踢通知
	    case 'kicked':
	        self.onKicked(packet);
	        return;
	    // 多端登陆通知
	    case 'multiPortLogin':
	        self.onLoginPortsChange(packet.content.loginPorts, packet.content.state);
	        break;
	    // 踢其它端
	    case 'kick':
	        if (!packet.error) {
	            packet.obj.deviceIds = packet.content.deviceIds;
	        }
	        break;
	    default:
	        break;
	    }
	};

	IMProtocolFn.onLoginPortsChange = function(loginPorts, state) {
	    if (!!loginPorts && !!loginPorts.length) {
	        var online = true;
	        switch (state) {
	        case 2:
	            online = true;
	            break;
	        case 3:
	            online = false;
	            break;
	        default:
	            break;
	        }
	        loginPorts.forEach(function(p) {
	            p.type = LoginPort.reverseType(p.type);
	            p.time = +p.time;
	            p.online = online;
	        });
	        logger.info('on login ports', loginPorts);
	        this.options.onloginportschange(loginPorts);
	    }
	};

	IMProtocolFn.kickedReasons = [
	    '',
	    'samePlatformKick',
	    'serverKick',
	    'otherPlatformKick'
	];

	IMProtocolFn.kickedMessages = [
	    '',
	    '不允许同一个帐号在多个地方同时登录',
	    '被服务器踢了',
	    '被其它端踢了'
	];


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var undef = util.undef;
	var objs2ids = util.objs2ids;
	var objs2accounts = util.objs2accounts;
	var teams2ids = util.teams2ids;
	var logger = __webpack_require__(40);

	/*
	 * 同步数据, 强制同步离线消息, 其它同步做成可选的
	 */
	IMProtocolFn.syncData = function() {
	    var self = this;
	    var db = self.db;
	    var options = self.options;
	    var supportDb = db.enable;
	    if (supportDb) {
	        self.db.getTimetags().then(function(timetags) {
	            bingo(timetags);
	        }, function() {
	            bingo();
	        });
	    } else {
	        bingo(self.timetags);
	    }
	    function bingo (timetags) {
	        self.syncPromiseArray = [];
	        self.syncResult = {};
	        self.syncTeamMembersPromiseArray = [];
	        self.syncTeamMembersResult = {};

	        // 默认同步这些东西
	        util.verifyBooleanWithDefault(options, 'syncRelations syncFriends syncFriendUsers syncTeams syncRoamingMsgs syncTeamMembers', true);
	        // 默认不同步过滤的消息（目前只有云商服用到过滤消息）
	        util.verifyBooleanWithDefault(options, 'syncFilter', false);

	        var sync = {};
	        timetags = timetags || {};
	        // 强制同步 我的信息、离线消息
	        sync.myInfo = timetags.myInfo || 0;
	        sync.offlineMsgs = 0;
	        // 可选同步
	        if (options.syncRelations) { sync.relations = timetags.relations || 0; }
	        if (options.syncFriends) { sync.friends = timetags.friends || 0; }
	        if (options.syncFriendUsers) { sync.friendUsers = timetags.friendUsers || 0; }
	        if (options.syncTeams) { sync.teams = timetags.teams || 0; }
	        if (options.syncRoamingMsgs) { sync.roamingMsgs = timetags.roamingMsgs || 0; }
	        // 不同步最近会话列表, 从漫游消息和离线消息构造最近会话列表
	        // 所以如果没有漫游消息和离线消息, 那么就没有最近会话列表
	        // if (false) { sync.sessions = 0; }
	        // 目前只有云商服用到这个配置, 未在文档上列出
	        if (options.syncFilter) { sync.filterMsgs = 0; }
	        self.sendCmd('sync', {
	            sync: sync
	        }, self.onSyncData.bind(self));
	    }
	};

	IMProtocolFn.onSyncData = function(error, obj) {
	    this.onMiscError(error, obj, 'sync error');
	};

	IMProtocolFn.processSync = function(packet) {
	    var self = this;
	    switch (packet.cmd) {
	    // 同步
	    case 'syncDone':
	        self.timetags.sync = packet.content.timetag;
	        self.onSyncDone();
	        break;
	    // 同步群成员
	    case 'syncTeamMembersDone':
	        self.onSyncTeamMembersDone();
	        break;
	    default:
	        break;
	    }
	};

	IMProtocolFn.onSyncDone = function() {
	    var self = this;
	    var db = self.db;
	    var supportDb = db.enable,
	        options = self.options,
	        promiseArray = self.syncPromiseArray,
	        result = self.syncResult,
	        promise,
	        blacklist,
	        invalidBlacklist,
	        mutelist,
	        invalidMutelist,
	        friends,
	        invalidFriends,
	        myInfo,
	        users,
	        teams,
	        invalidTeams,
	        sessions,
	        roamingMsgs,
	        offlineMsgs,
	        offlineFilterMsgs,
	        offlineSysMsgs,
	        offlineCustomSysMsgs,
	        offlineFilterSysMsgs,
	        offlineFilterCustomSysMsgs,
	        sysMsgUnread;

	    if (!!promiseArray.length) {
	        Promise.all(promiseArray).then(afterSync, function(e) {
	            self.onDBError(e);
	        });
	    } else {
	        afterSync();
	    }

	    function afterSync() {
	        logger.warn('after sync', util.promises2cmds(promiseArray));
	        promiseArray = [];
	        blacklist = result.blacklist;
	        invalidBlacklist = result.invalidBlacklist || [];
	        mutelist = result.mutelist;
	        invalidMutelist = result.invalidMutelist || [];
	        friends = result.friends;
	        invalidFriends = result.invalidFriends || [];
	        myInfo = result.myInfo;
	        users = result.users;
	        teams = result.teams;
	        invalidTeams = result.invalidTeams || [];
	        sessions = result.sessions;
	        roamingMsgs = result.roamingMsgs;
	        offlineMsgs = result.offlineMsgs;
	        offlineFilterMsgs = result.offlineFilterMsgs;
	        offlineSysMsgs = result.offlineSysMsgs;
	        offlineCustomSysMsgs = result.offlineCustomSysMsgs;
	        offlineFilterSysMsgs = result.offlineFilterSysMsgs;
	        offlineFilterCustomSysMsgs = result.offlineFilterCustomSysMsgs;
	        sysMsgUnread = result.sysMsgUnread;

	        if (sessions) {
	            var arr = [];
	            Object.keys(sessions).forEach(function(key) {
	                arr.push(sessions[key]);
	            });
	            sessions = arr.sort(function(s1, s2) {
	                return s2.updateTime - s1.updateTime;
	            });
	        }
	        // 如果启用了数据库, 并且还没有同步过, 那么从数据库获取全量数据
	        if (supportDb && !self.hasSynced) {
	            pullFullData();
	        }
	        if (!!promiseArray.length) {
	            Promise.all(promiseArray).then(notifyData, function(event) {
	                self.onDBError(event);
	            });
	        } else {
	            notifyData();
	        }
	    }

	    function pullFullData() {
	        // 关系
	        if (options.syncRelations) {
	            promise = db.getRelations().then(function(result) {
	                blacklist = result[0];
	                mutelist = result[1];
	                blacklist.invalid = invalidBlacklist;
	                mutelist.invalid = invalidMutelist;
	            }, function(event) {
	                event._msg = 'on relations error';
	                return event;
	            });
	            promiseArray.push(promise);
	        }
	        // 好友
	        if (options.syncFriends) {
	            promise = db.getFriends().then(function(records) {
	                friends = records;
	                friends.invalid = invalidFriends;
	            }, function(event) {
	                event._msg = 'on friends error';
	                return event;
	            });
	            promiseArray.push(promise);
	        }
	        // 我的名片
	        if (undef(myInfo)) {
	            promise = db.getUser(self.account).then(function(record) {
	                myInfo = record;
	            }, function(event) {
	                event._msg = 'on myInfo error';
	                return event;
	            });
	            promiseArray.push(promise);
	        }
	        // 好友名片
	        if (options.syncFriendUsers) {
	            promise = db.getAllUsers().then(function(records) {
	                users = records;
	            }, function(event) {
	                event._msg = 'on users error';
	                return event;
	            });
	            promiseArray.push(promise);
	        }
	        // 群
	        if (options.syncTeams) {
	            promise = db.getTeams().then(function(records) {
	                teams = records;
	                teams.invalid = invalidTeams;
	            }, function(event) {
	                event._msg = 'on teams error';
	                return event;
	            });
	            promiseArray.push(promise);
	        }
	        // 会话
	        promise = db.getSessions().then(function(records) {
	            sessions = records;
	        }, function(event) {
	            event._msg = 'on sessions error';
	            return event;
	        });
	        promiseArray.push(promise);
	        // 系统通知未读数
	        promise = db.getSysMsgUnread().then(function(records) {
	            sysMsgUnread = records;
	        }, function(event) {
	            event._msg = 'on sysMsgUnread error';
	            return event;
	        });
	        promiseArray.push(promise);
	    }

	    function notifyData() {
	        // 用 setTimeout 模拟异步线程
	        setTimeout(notifyDataAsync, 0);
	    }

	    function notifyDataAsync() {
	        // 是否要等待同步漫游消息时间戳
	        var timetags = [],
	            timetag,
	            msgs;

	        if (!!blacklist) {
	            logger.info('on blacklist', objs2accounts(blacklist), blacklist);
	            logger.info('on mutelist', objs2accounts(mutelist), mutelist);
	            options.onblacklist(blacklist);
	            options.onmutelist(mutelist);
	        }

	        if (!!friends) {
	            logger.info('on friends', objs2accounts(friends), friends);
	            options.onfriends(friends);
	        }

	        if (!!myInfo) {
	            logger.info('on myInfo', myInfo);
	            // 记录我的信息
	            self.myInfo = myInfo;
	            options.onmyinfo(util.copy(myInfo));
	        }

	        if (!!users) {
	            logger.info('on users', objs2accounts(users), users);
	            options.onusers(users);
	        }
	        
	        if (!!teams) {
	            logger.info('on teams', teams2ids(teams), teams);
	            options.onteams(teams);
	        }

	        if (!!sessions) {
	            logger.info('on sessions', objs2ids(sessions), sessions);
	            options.onsessions(sessions);
	        }

	        if (!!roamingMsgs) {
	            roamingMsgs.forEach(function(i) {
	                timetags.push(i.timetag);
	                msgs = i.msgs;
	                if (!!msgs.length) {
	                    logger.info('on roaming msgs', i.sessionId, msgs.length, msgs);
	                    options.onroamingmsgs(i);
	                }
	            });
	        }

	        if (!!offlineMsgs) {
	            offlineMsgs.forEach(function(i) {
	                timetags.push(i.timetag);
	                msgs = i.msgs;
	                if (!!msgs.length) {
	                    logger.info('on offline msgs', i.sessionId, msgs.length, msgs);
	                    options.onofflinemsgs(i);
	                }
	            });
	        }

	        if (!!offlineFilterMsgs) {
	            offlineFilterMsgs.forEach(function(i) {
	                timetags.push(i.timetag);
	                msgs = i.msgs;
	                if (!!msgs.length) {
	                    logger.info('on offline filter msgs', i.sessionId, msgs.length, msgs);
	                    options.onofflinefiltermsgs(msgs);
	                }
	            });
	        }

	        if (!!offlineSysMsgs) {
	            logger.info('on offline sys msgs', offlineSysMsgs.length, offlineSysMsgs);
	            options.onofflinesysmsgs(offlineSysMsgs);
	        }

	        // 目前并没有这种类型的消息
	        if (!!offlineFilterSysMsgs) {
	            logger.info('on offline filter sys msgs', offlineFilterSysMsgs.length, offlineFilterSysMsgs);
	            options.onofflinefiltersysmsgs(offlineFilterSysMsgs);
	        }

	        if (!!offlineCustomSysMsgs) {
	            logger.info('on offline custom sys msgs', offlineCustomSysMsgs.length, offlineCustomSysMsgs);
	            options.onofflinecustomsysmsgs(offlineCustomSysMsgs);
	        }

	        if (!!offlineFilterCustomSysMsgs) {
	            logger.info('on offline filter custom sys msgs', offlineFilterCustomSysMsgs.length, offlineFilterCustomSysMsgs);
	            options.onofflinefiltercustomsysmsgs(offlineFilterCustomSysMsgs);
	        }

	        if (!!sysMsgUnread) {
	            logger.info('on sysMsgUnread', sysMsgUnread);
	            options.onsysmsgunread(sysMsgUnread);
	        }

	        // timetags 时间戳数组长度为0 表示没有漫游消息和离线消息
	        // 如果没有漫游消息和离线消息, 不需要更新漫游消息时间戳
	        // 如果有, 需要更新漫游消息时间戳, 取所有漫游消息和离线消息里面最大的时间戳
	        if (!!timetags.length) {
	            timetag = Math.max.apply(Math, timetags);
	            self.updateRoamingMsgTimetag(timetag).then(bingo, bingo);
	        } else {
	            bingo();
	        }

	        // 清空同步缓存数据
	        self.syncPromiseArray = null;
	        self.syncResult = null;
	    }

	    function bingo() {
	        logger.info('sync done');
	        self.hasSynced = true;
	        options.onsyncdone();

	        // 如果要同步群成员, 并且有群（全量或者增量）, 则同步群成员
	        // 如果不要同步群成员, 或者没有群（本来就没有群或者没有增量更新）, 当做群成员已经同步完成
	        if (options.syncTeamMembers && !!teams && !!teams.length) {
	            self.syncTeamMembers(teams);
	        } else {
	            setTimeout(function() {
	                self.onSyncTeamMembersDone();
	            }, 0);
	        }
	    }

	};

	IMProtocolFn.syncTeamMembers = function(teams) {
	    var self = this;
	    var db = self.db;
	    if (db.enable) {
	        db.getTeamMemberTimetags().then(function(timetags) {
	            bingo(timetags);
	        }, function() {
	            bingo();
	        });
	    } else {
	        bingo(self.timetags);
	    }
	    function bingo(timetags) {
	        var sync = {};
	        timetags = timetags || {};
	        teams.forEach(function(team) {
	            sync[team.teamId] = timetags['team-' + team.teamId] || 0;
	        }, self);
	        self.sendCmd('syncTeamMembers', {
	            sync: sync
	        }, self.onSyncTeamMembers.bind(self));
	    }
	};

	IMProtocolFn.onSyncTeamMembers = function(error, obj) {
	    this.onMiscError(error, obj, 'sync teamMembers error');
	};

	/*
	 * - 同步时如果启用了数据库, 统一在同步完成后通知开发者
	 * - 同步时如果没启用数据库, 会在同步过程中通知开发者
	 * - 请参考 IMProtocol#onTeamMembers~getAll
	 */
	IMProtocolFn.onSyncTeamMembersDone = function() {
	    var self = this,
	        db = self.db,
	        options = self.options,
	        result = self.syncTeamMembersResult,
	        promiseArray = self.syncTeamMembersPromiseArray,
	        promise;

	    if (!!promiseArray.length) {
	        Promise.all(promiseArray).then(afterSync, function(e) {
	            self.onDBError(e);
	        });
	    } else {
	        afterSync();
	    }

	    // 所有同步的 Promise 均已完成
	    function afterSync() {
	        logger.warn('after sync members', util.promises2cmds(promiseArray));
	        promiseArray = [];
	        // 如果启用了数据库, 并且还没有同步过, 那么从数据库获取全量数据
	        if (db.enable && !self.hasSyncedTeamMembers) {
	            pullFullData();
	        } else {
	            notifyData();
	        }
	    }

	    function pullFullData() {
	        if (!options.syncTeams || !options.syncTeamMembers) {return bingo();}
	        db.getTeams().then(function(teams) {
	            teams.forEach(function(team) {
	                var teamId = team.teamId;
	                promise = db.getTeamMembers(teamId).then(function(members) {
	                    result[teamId] = members;
	                }, function(event) {
	                    event._msg = 'on members error';
	                    return event;
	                });
	                promiseArray.push(promise);
	            });
	            if (!!promiseArray.length) {
	                Promise.all(promiseArray).then(notifyData, function(e) {
	                    self.onDBError(e);
	                });
	            } else {
	                notifyData();
	            }
	        }, function(event) {
	            event._msg = 'on members error';
	            self.onDBError(event);
	        });
	    }

	    function notifyData() {
	        // 用 setTimeout 模拟异步线程
	        setTimeout(notifyDataAsync, 0);
	    }

	    function notifyDataAsync() {
	        var members,
	            invalid;
	        Object.keys(result).forEach(function(teamId) {
	            if (teamId.indexOf('invalid') === -1) {
	                members = result[teamId];
	                invalid = result[teamId+'-invalid'] || [];
	                members.invalid = invalid;
	                onTeamMembers(teamId, members);
	            }
	        });
	        bingo();
	    }

	    function onTeamMembers(teamId, members) {
	        logger.info('on members', teamId, objs2accounts(members), members);
	        options.onteammembers({
	            teamId: teamId,
	            members: members
	        });
	    }

	    function bingo() {
	        logger.info('sync members done');
	        self.hasSyncedTeamMembers = true;
	        options.onsyncteammembersdone();
	        // 清空同步缓存数据
	        self.syncTeamMembersResult = null;
	        self.syncTeamMembersPromiseArray = null;
	    }

	};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var objs2accounts = util.objs2accounts;
	var logger = __webpack_require__(40);
	var SpecialRelation = __webpack_require__(99);
	var User = __webpack_require__(100);

	IMProtocolFn.processUser = function(packet) {
	    var self = this,
	        db = self.db,
	        obj = packet.obj,
	        error = packet.error,
	        content = packet.content,
	        users;

	    switch (packet.cmd) {
	    // 加入黑名单/从黑名单移除
	    case 'markInBlacklist':
	        if (!error) { self.markInBlacklist(obj); }
	        break;
	    case 'syncMarkInBlacklist':
	        self.markInBlacklist(content, true);
	        break;
	    // 加入静音列表/从静音列表移除
	    case 'markInMutelist':
	        if (!error) { self.markInMutelist(obj); }
	        break;
	    case 'syncMarkInMutelist':
	        self.markInMutelist(content, true);
	        break;
	    // 获取黑名单和静音列表
	    case 'getRelations':
	        if (!error) { self.onRelations(packet); }
	        break;
	    case 'syncMyInfo':
	        self.onMyInfo(packet, true);
	        break;
	    case 'updateMyInfo':
	        if (!error) {
	            obj.updateTime = content.timetag;
	            self.onUpdateMyInfo(packet, obj);
	        }
	        break;
	    case 'syncUpdateMyInfo':
	        self.onUpdateMyInfo(packet, content.user, true);
	        break;
	    case 'getUsers':
	        if (!error) {
	            users = content.users.map(function(user) {
	                return User.reverse(user);
	            });
	            packet.obj = users;
	            if (db.enable) {
	                db.updateUsersIfIsFriend(users);
	            }
	        }
	        break;
	    default:
	        break;
	    }
	};

	/*
	 * 处理我的信息
	 */
	IMProtocolFn.onMyInfo = function(packet) {
	    var self = this,
	        db = self.db,
	        error = packet.error,
	        content = packet.content,
	        isSync = true,
	        user;

	    // 用于同步的Promise
	    var promise = new Promise(function(resolve, reject) {
	        if (!error) {
	            // 处理数据
	            parseData();
	            // 如果支持数据库, 那么合并数据, 否则直接 bingo
	            if (db.enable) {
	                mergeData(resolve, reject);
	            } else {
	                bingo();
	                resolve();
	            }
	        } else {
	            // 同步时应该没有error, 所以这里应该走不到
	            reject(error);
	        }
	    });
	    if (isSync) {
	        promise.cmd = 'myInfo';
	        self.syncPromiseArray.push(promise);
	    }

	    function parseData() {
	        user = User.reverse(content.user);
	        logger.warn('parse myInfo', user);
	    }

	    function mergeData(resolveSync, rejectSync) {
	        // 不用设置用于主动获取的 Promise
	        db.mergeMyInfo(user, isSync).then(function() {
	            bingo();
	            resolveSync();
	        }).then(undefined, function(event) {
	            event._msg = 'merge myInfo error';
	            rejectSync(event);
	        });
	    }

	    function bingo() {
	        self.timetags.myInfo = user.updateTime;
	        if (isSync) {
	            // 如果是同步, 那么统一在 onSyncDone 里面通知开发者
	            self.syncResult.myInfo = user;
	        }
	    }

	};

	/**
	 * 更新我的信息
	 * @private
	 * @param  {Object}  user     增量的用户信息
	 * @param  {Boolean} isSynced 是否是多端同步
	 */
	IMProtocolFn.onUpdateMyInfo = function(packet, obj, isSynced) {
	    var self = this;
	    var db = self.db;
	    var userUpdate = User.reverse(obj);
	    var user = util.merge(self.myInfo, userUpdate);
	    self.myInfo = user;
	    // 如果是多端同步, 那么通知开发者
	    if (isSynced) {
	        logger.info('on update myInfo', user);
	        self.options.onupdatemyinfo(user);
	    } else {
	        packet.obj = user;
	    }
	    if (db.enable) {
	        userUpdate.account = self.account;
	        db.updateUser(userUpdate);
	    }
	};

	/*
	 * 处理黑名单和静音列表, 同步和主动获取都会走这个逻辑
	 */
	IMProtocolFn.onRelations = function(packet) {
	    var self = this,
	        db = self.db,
	        error = packet.error,
	        // 有同步和主动获取两种情况
	        isSync = self.packetFromSync(packet),
	        rawRelations = packet.content.specialRelations,
	        hasChange = true,
	        timetag,
	        blacklist = [],
	        invalidBlacklist = [],
	        mutelist = [],
	        invalidMutelist = [];

	    // 用于同步的Promise
	    var promise = new Promise(function(resolve, reject) {
	        if (!error) {
	            // 处理数据
	            parseData();
	            // 如果支持数据库, 那么合并数据, 否则直接 bingo
	            if (db.enable) {
	                mergeData(resolve, reject);
	            } else {
	                bingo();
	                resolve();
	            }
	        } else {
	            // 同步时应该没有error, 所以这里应该走不到
	            reject(error);
	        }
	    });
	    if (isSync) {
	        promise.cmd = 'relations';
	        self.syncPromiseArray.push(promise);
	    }

	    function parseData() {
	        rawRelations.forEach(function(sr) {
	            sr = SpecialRelation.parse(sr);
	            var item = {
	                account: sr.account,
	                createTime: sr.createTime,
	                updateTime: sr.updateTime
	            };
	            if (sr.isBlacked) {
	                blacklist.push(item);
	            } else {
	                invalidBlacklist.push(item);
	            }
	            if (sr.isMuted) {
	                mutelist.push(item);
	            } else {
	                invalidMutelist.push(item);
	            }
	        });
	        logger.warn('parse blacklist', objs2accounts(blacklist), blacklist, 'delete', objs2accounts(invalidBlacklist), invalidBlacklist);
	        logger.warn('parse mutelist', objs2accounts(mutelist), mutelist, 'delete', objs2accounts(invalidMutelist), invalidMutelist);
	        if (!rawRelations.length) {
	            hasChange = false;
	        } else {
	            hasChange = true;
	            timetag = packet.content.timetag;
	        }
	    }

	    function mergeData(resolveSync, rejectSync) {
	        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
	        packet.promise = new Promise(function(resolve, reject) {
	            if (hasChange) {
	                // 增量更新数据库
	                db.mergeRelations(blacklist, invalidBlacklist, mutelist, invalidMutelist, timetag).then(function() {
	                    afterMergeData();
	                }).then(undefined, function(event) {
	                    event._msg = 'merge relations error';
	                    reject(event);
	                    rejectSync(event);
	                });
	            } else {
	                logger.warn('no merge relations');
	                afterMergeData();
	            }
	            function afterMergeData() {
	                // 如果不是同步, 那么需要获取完整的列表
	                if (!isSync) {
	                    db.getRelations().then(function(result) {
	                        blacklist = result[0];
	                        mutelist = result[1];
	                        bingo();
	                        resolve();
	                        resolveSync();
	                    }).then(undefined, function(event) {
	                        event._msg = 'get relations error';
	                        reject(event);
	                        rejectSync(event);
	                    });
	                } else {
	                    bingo();
	                    resolve();
	                    resolveSync();
	                }
	            }
	        }).then(undefined, function(event) {
	            event._msg = 'merge relations data error';
	            rejectSync(event);
	            throw event;
	        });
	    }

	    function bingo() {
	        self.timetags.relations = timetag;
	        blacklist.invalid = invalidBlacklist;
	        mutelist.invalid = invalidMutelist;
	        // 返回数据
	        if (isSync) {
	            // 如果是同步, 那么统一在onSyncDone里面通知开发者
	            self.syncResult.blacklist = blacklist;
	            self.syncResult.mutelist = mutelist;
	            self.syncResult.invalidBlacklist = invalidBlacklist;
	            self.syncResult.invalidMutelist = invalidMutelist;
	        } else {
	            logger.warn('get relations', blacklist, mutelist);
	            packet.obj.blacklist = blacklist;
	            packet.obj.mutelist = mutelist;
	        }
	    }

	};

	/**
	 * 标记黑名单
	 * @private
	 * @param  {Object}  obj      请求对象
	 * @param  {Boolean} isSynced 是否是多端同步
	 * @return {Void}
	 */
	IMProtocolFn.markInBlacklist = function(obj, isSynced) {
	    var self = this;
	    var db = self.db;
	    obj.record = {
	        account: obj.account,
	        updateTime: +new Date()
	    };
	    if (db.enable) {
	        db.markInBlacklist(obj);
	    }
	    if (isSynced) {
	        logger.info('on sync markInBlacklist', obj);
	        self.options.onsyncmarkinblacklist(obj);
	    }
	};

	/**
	 * 标记静音列表
	 * @private
	 * @param  {Object}  obj      请求对象
	 * @param  {Boolean} isSynced 是否是多端同步
	 * @return {Void}
	 */
	IMProtocolFn.markInMutelist = function(obj, isSynced) {
	    var self = this;
	    var db = self.db;
	    obj.record = {
	        account: obj.account,
	        updateTime: +new Date()
	    };
	    if (db.enable) {
	        db.markInMutelist(obj);
	    }
	    if (isSynced) {
	        logger.info('on sync markInMutelist', obj);
	        self.options.onsyncmarkinmutelist(obj);
	    }
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);

	/**
	 * 黑名单/静音名单
	 * @constructor
	 * @name Relation
	 * @property {String}   account     账号
	 * @property {Long}     updateTime  更新时间
	 */
	function SpecialRelation() {

	}

	SpecialRelation.parse = function(sr) {
	    var obj = util.copy(sr);
	    obj.isBlacked = obj.isBlacked === '1';
	    obj.isMuted = obj.isMuted === '1';
	    obj.createTime = +obj.createTime;
	    obj.updateTime = +obj.updateTime;
	    return obj;
	};

	module.exports = SpecialRelation;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);

	/**
	 * 性别
	 *
	 * - `'unknown'` (未知)
	 * - `'male'` (男)
	 * - `'female'` (女)
	 *
	 * @memberOf User
	 * @name gender
	 * @readOnly
	 * @enum {String}
	 */
	var genderMap = {
	    unknown: 0,
	    male: 1,
	    female: 2
	};
	var genderReverseMap = {
	    0: 'unknown',
	    1: 'male',
	    2: 'female'
	};

	/**
	 * @constructor
	 *
	 * @property {String}   account     账号
	 * @property {String}   nick        昵称
	 * @property {String}   avatar      头像
	 * @property {String}   sign        签名
	 * @property {String}   gender      {@link User.gender|性别}
	 * @property {String}   email       邮箱
	 * @property {String}   birth       生日
	 * @property {String}   tel         电话号码
	 * @property {String}   custom      扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
	 * @property {Long}     createTime  创建时间
	 * @property {Long}     updateTime  更新时间
	 */
	function User(options) {
	    util.merge(this, options);
	    if (util.notundef(this.gender)) {
	        util.verifyParamValid('gender', this.gender, User.validGenders);
	        this.gender = genderMap[this.gender];
	    }
	    if (util.notundef(this.email) && this.email !== '') { util.verifyEmail('email', this.email); }
	    if (util.notundef(this.birth) && this.birth !== '') { util.verifyBirth('birth', this.birth); }
	    if (util.notundef(this.tel) && this.tel !== '') { util.verifyTel('tel', this.tel); }
	}

	User.reverse = function(user) {
	    var obj = util.filterObj(user, 'account nick avatar sign gender email birth tel custom createTime updateTime');
	    if (util.notundef(obj.gender)) { obj.gender = genderReverseMap[obj.gender]; }
	    if (util.notundef(obj.createTime)) { obj.createTime = +obj.createTime; }
	    if (util.notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
	    return obj;
	};

	User.reverseUsers = function(users) {
	    return users.map(function(user) {
	        return User.reverse(user);
	    });
	};

	User.validGenders = Object.keys(genderMap);

	module.exports = User;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var objs2accounts = util.objs2accounts;
	var logger = __webpack_require__(40);
	var Friend = __webpack_require__(102);
	var User = __webpack_require__(100);

	/**
	 * 处理好友协议回包
	 */
	IMProtocolFn.processFriend = function(packet) {
	    var self = this,
	        obj = packet.obj,
	        content = packet.content,
	        error = packet.error;
	    switch (packet.cmd) {
	    // 添加好友
	    case 'friendRequest':
	        self.updateFriendSysMsg(packet);
	        if (!error) {
	            self.onFriendRequest(obj);
	        }
	        break;
	    // 添加好友多端同步
	    case 'syncFriendRequest':
	        self.onFriendRequest(content, true);
	        break;
	    // 删除好友
	    case 'deleteFriend':
	        if (!error) { self.onDeleteFriend(obj); }
	        break;
	    // 删除好友多端同步
	    case 'syncDeleteFriend':
	        self.onDeleteFriend(content, true);
	        break;
	    // 更新好友
	    case 'updateFriend':
	        if (!error) { self.onUpdateFriend(obj); }
	        break;
	    // 更新好友多端同步
	    case 'syncUpdateFriend':
	        self.onUpdateFriend(content.friend, true);
	        break;
	    // 获取好友列表
	    case 'getFriends':
	        self.onFriends(packet);
	        break;
	    // 同步好友列表
	    case 'syncFriends':
	        self.onFriends(packet);
	        break;
	    case 'syncFriendUsers':
	        self.onFriendUsers(packet);
	        break;
	    default:
	        break;
	    }
	};

	/*
	 * 处理好友, 同步和主动获取都会走这个逻辑
	 */
	IMProtocolFn.onFriends = function(packet) {
	    var self = this,
	        db = self.db,
	        error = packet.error,
	        // 有同步和主动获取两种情况
	        isSync = self.packetFromSync(packet),
	        rawFriends = packet.content.friends,
	        hasChange = true,
	        timetag,
	        friends = [],
	        invalidFriends = [];

	    // 用于同步的Promise
	    var promise = new Promise(function(resolve, reject) {
	        if (!error) {
	            // 处理数据
	            parseData();
	            // 如果支持数据库, 那么合并数据, 否则直接 bingo
	            if (db.enable) {
	                mergeData(resolve, reject);
	            } else {
	                bingo();
	                resolve();
	            }
	        } else {
	            // 同步时应该没有error, 所以这里应该走不到
	            reject(error);
	        }
	    });
	    if (isSync) {
	        promise.cmd = 'friends';
	        self.syncPromiseArray.push(promise);
	    }

	    function parseData() {
	        if (hasChange) {
	            rawFriends.forEach(function(friend) {
	                friend = Friend.reverse(friend);
	                if (friend.valid) {
	                    friends.push(friend);
	                } else {
	                    invalidFriends.push(friend);
	                }
	            });
	        }
	        logger.warn('parse friends', objs2accounts(friends), friends, 'delete', objs2accounts(invalidFriends), invalidFriends);
	        if (!rawFriends.length) {
	            hasChange = false;
	        } else {
	            hasChange = true;
	            timetag = packet.content.timetag;
	        }
	    }

	    function mergeData(resolveSync, rejectSync) {
	        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
	        packet.promise = new Promise(function(resolve, reject) {
	            if (hasChange) {
	                // 增量更新数据库
	                db.mergeFriends(friends, invalidFriends, timetag).then(function() {
	                    afterMergeData();
	                }).then(undefined, function(event) {
	                    event._msg = 'merge friends error';
	                    reject(event);
	                    rejectSync(event);
	                });
	            } else {
	                logger.warn('no merge friends');
	                afterMergeData();
	            }
	            function afterMergeData() {
	                // 如果不是同步, 那么需要获取完整的列表
	                if (!isSync) {
	                    db.getFriends().then(function(records) {
	                        friends = records;
	                        bingo();
	                        resolve();
	                        resolveSync();
	                    }).then(undefined, function(event) {
	                        event._msg = 'get friends error';
	                        reject(event);
	                        rejectSync(event);
	                    });
	                } else {
	                    bingo();
	                    resolve();
	                    resolveSync();
	                }
	            }
	        }).then(undefined, function(event) {
	            event._msg = 'merge friends data error';
	            rejectSync(event);
	            throw event;
	        });
	    }

	    function bingo() {
	        self.timetags.friends = timetag;
	        friends.invalid = invalidFriends;
	        // 返回数据
	        if (isSync) {
	            // 如果是同步, 那么统一在 onSyncDone 里面通知开发者
	            self.syncResult.friends = friends;
	            self.syncResult.invalidFriends = invalidFriends;
	        } else {
	            logger.warn('get friends', objs2accounts(friends), friends);
	            packet.obj = friends;
	        }
	    }

	};

	/**
	 * 处理好友请求
	 * - 主动发起的好友请求
	 * - 多端同步添加好友
	 * - 收到相关的系统通知
	 * @private
	 * @param  {Object}  obj      请求对象
	 * @param  {Boolean} isSynced 是否是多端同步
	 * @return {Void}
	 */
	IMProtocolFn.onFriendRequest = function(obj, isSynced) {
	    var promise = Promise.resolve();
	    var self = this;
	    var db = self.db;
	    var type = obj.type;
	    type = obj.type = Friend.getTypeFromByte(type) || type;
	    var isAdd = type === 'addFriend' || type === 'passFriendApply';
	    if (isAdd) {
	        // 如果是加好友, 将拼好的对象传给开发者
	        var friend = obj.friend = Friend.assembleFriend(obj.account);
	        // 那么存数据库
	        if (db.enable) {
	            promise = db.putFriend(friend);
	        }
	    }
	    // 如果是多端同步, 那么通知开发者
	    if (isSynced) {
	        self.onSyncFriendAction(obj);
	    }
	    return promise;
	};

	IMProtocolFn.onSyncFriendAction = function(obj) {
	    logger.info('on sync friendAction', obj);
	    this.options.onsyncfriendaction(obj);
	};

	/**
	 * 删除好友
	 * - 主动删除
	 * - 多端同步删除
	 * - 被删除, 收到系统通知
	 * @private
	 * @param  {Object}  obj      请求对象
	 * @param  {Boolean} isSynced 是否是多端同步
	 * @return {Void}
	 */
	IMProtocolFn.onDeleteFriend = function(obj, isSynced) {
	    var promise = Promise.resolve();
	    var self = this;
	    var db = self.db;
	    if (db.enable) {
	        promise = db.deleteFriend(obj.account);
	    }
	    // 如果是多端同步, 那么通知开发者
	    if (isSynced) {
	        obj.type = 'deleteFriend';
	        self.onSyncFriendAction(obj);
	    }
	    return promise;
	};

	/**
	 * 更新好友
	 * @private
	 * @param  {Object}  obj      请求对象
	 * @param  {Boolean} isSynced 是否是多端同步
	 * @return {Void}
	 */
	IMProtocolFn.onUpdateFriend = function(obj, isSynced) {
	    var self = this;
	    var db = self.db;
	    var friend = Friend.reverse(obj);
	    if (db.enable) {
	        db.updateFriend(friend);
	    }
	    // 如果是多端同步, 那么通知开发者
	    if (isSynced) {
	        self.onSyncFriendAction({
	            type: 'updateFriend',
	            friend: friend
	        });
	    }
	};

	// 只有在启用数据库的时候才同步好友对应的用户名片
	IMProtocolFn.onFriendUsers = function(packet) {
	    var self = this;
	    var db = self.db;
	    var content = packet.content;
	    var users = content.users.map(function(user) {
	        return User.reverse(user);
	    });
	    logger.warn('parse users', objs2accounts(users), users);
	    var timetag = content.timetag;
	    var promise = Promise.resolve();
	    if (db.enable) {
	        promise = db.mergeFriendUsers(users, timetag);
	    }
	    self.timetags.friendUsers = timetag;
	    promise.cmd = 'friendUsers';
	    self.syncPromiseArray.push(promise);
	    self.syncResult.users = users;
	};

	/*
	 * 更新系统通知状态
	 */
	IMProtocolFn.updateFriendSysMsg = function(packet) {
	    var obj = packet.obj;
	    var state;
	    var error = packet.error;
	    var sysMsg;

	    if (!packet.obj.idServer) { return; }

	    if (!error) {
	        var type = obj.type;
	        type = Friend.getTypeFromByte(type) || type;
	        switch (type) {
	        case 'passFriendApply':
	            state = 'passed';
	            break;
	        case 'rejectFriendApply':
	            state = 'rejected';
	            break;
	        }
	    } else {
	        state = 'error';
	        error = util.filterObj(error, 'code message');
	    }
	    
	    sysMsg = {
	        idServer: obj.idServer,
	        state: state
	    };
	    if (error) {
	        sysMsg.error = error;
	    }
	    this.updateSysMsg(sysMsg);
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var notundef = util.notundef;

	/**
	 * 好友请求类型
	 * 
	 * - `'addFriend'` (直接加为好友)
	 * - `'applyFriend'` (申请加为好友)
	 * - `'passFriendApply'` (通过好友申请)
	 * - `'rejectFriendApply'` (拒绝好友申请)
	 * 
	 * @memberOf Friend
	 * @name requestType
	 * @readOnly
	 * @enum {String}
	 */
	var requestTypeMap = {
	    addFriend: 1,
	    applyFriend: 2,
	    passFriendApply: 3,
	    rejectFriendApply: 4
	};
	var requestTypeReverseMap = {
	    1: 'addFriend',
	    2: 'applyFriend',
	    3: 'passFriendApply',
	    4: 'rejectFriendApply'
	};

	/**
	 * @constructor
	 *
	 * @property {String}   account     账号
	 * @property {String}   alias       昵称
	 * @property {String}   custom      扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
	 * @property {Number}   createTime  成为好友的时间
	 * @property {Number}   updateTime  更新时间
	 */
	function Friend(options) {
	    util.verifyOptions(options, 'account');
	    util.verifyParamAtLeastPresentOne(options, 'alias custom');
	    this.account = options.account;
	    if (notundef(options.alias)) { this.alias = options.alias; }
	    if (notundef(options.custom)) { this.custom = options.custom; }
	}

	Friend.reverse = function(friend) {
	    var obj = util.filterObj(friend, 'account alias custom createTime updateTime');
	    if (notundef(friend.flag)) { obj.valid = friend.flag === '1'; }
	    if (notundef(obj.createTime)) { obj.createTime = +obj.createTime; }
	    if (notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
	    return obj;
	};

	Friend.validTypes = function() {
	    return Object.keys(requestTypeMap);
	};

	Friend.getByteFromType = function(type) {
	    return requestTypeMap[type];
	};

	Friend.getTypeFromByte = function(typeInByte) {
	    return requestTypeReverseMap[typeInByte];
	};

	Friend.assembleFriend = function(account) {
	    var timetag = +new Date();
	    return {
	        account: account,
	        alias: "",
	        createTime: timetag,
	        custom: "",
	        updateTime: timetag,
	        valid: true
	    };
	};

	module.exports = Friend;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var objs2accounts = util.objs2accounts;
	var teams2ids = util.teams2ids;
	var logger = __webpack_require__(40);
	var Team = __webpack_require__(104);
	var TeamMember = __webpack_require__(87);

	/**
	 * 处理群协议
	 */
	IMProtocolFn.processTeam = function(packet) {
	    var self = this,
	        error = packet.error,
	        team,
	        member,
	        owner;
	    switch (packet.cmd) {
	    case 'createTeam':
	        team = packet.obj.team;
	        if (!error) { team = packet.content.team; }
	        team = Team.reverse(team);
	        packet.obj.team = team;
	        owner = TeamMember.assembleOwner(team);
	        packet.obj.owner = owner;
	        if (!error) { self.onCreateTeam(team, owner); }
	        break;
	    case 'syncCreateTeam':
	        team = Team.reverse(packet.content.team);
	        logger.info('on sync createTeam', team);
	        owner = TeamMember.assembleOwner(team);
	        self.options.onsynccreateteam(team, owner);
	        self.onCreateTeam(team, owner);
	        break;
	    case 'sendTeamMsg':
	        self.onSendMsg(packet);
	        break;
	    case 'teamMsg':
	        self.onMsg(packet);
	        break;
	    case 'teamMsgs':
	        self.onMsgs(packet);
	        break;
	    case 'addTeamMembers':
	    case 'removeTeamMembers':
	    case 'leaveTeam':
	    case 'dismissTeam':
	    case 'addTeamManagers':
	    case 'removeTeamManagers':
	    case 'transferTeam':
	        break;
	    case 'updateInfoInTeam':
	        member = packet.obj;
	        member.account = self.account;
	        member.id = TeamMember.genId(member.teamId, member.account);
	        member = TeamMember.reverse(member);
	        packet.obj = member;
	        self.onTeamMember(member);
	        break;
	    case 'updateNickInTeam':
	        packet.obj = TeamMember.reverse(packet.obj);
	        break;
	    case 'updateTeam':
	        packet.obj = Team.reverse(packet.obj);
	        break;
	    case 'applyTeam':
	        if (!packet.error) {
	            packet.obj = Team.reverse(packet.content.team);
	        }
	        break;
	    case 'passTeamApply':
	        self.updateTeamSysMsgState(packet, 'passed');
	        break;
	    case 'rejectTeamApply':
	        self.updateTeamSysMsgState(packet, 'rejected');
	        break;
	    case 'acceptTeamInvite':
	        self.updateTeamSysMsgState(packet, 'passed');
	        if (!packet.error) {
	            packet.obj = Team.reverse(packet.content.team);
	        }
	        break;
	    case 'rejectTeamInvite':
	        self.updateTeamSysMsgState(packet, 'rejected');
	        break;
	    case 'getTeam':
	        if (!packet.error) {
	            packet.obj = Team.reverse(packet.content.team);
	        }
	        break;
	    case 'getTeams':
	        self.onTeams(packet);
	        break;
	    case 'getTeamMembers':
	        self.onTeamMembers(packet);
	        break;
	    case 'syncTeams':
	        self.onTeams(packet);
	        break;
	    case 'syncTeamMembers':
	        self.onTeamMembers(packet);
	        break;
	    case 'getTeamHistoryMsgs':
	    case 'searchTeamHistoryMsgs':
	        self.onHistoryMsgs(packet);
	        break;
	    case 'syncSendTeamMsg':
	        self.onMsg(packet);
	        break;
	    // 更新别人的群昵称也走这里, 跟多端同步走一条协议了
	    case 'syncUpdateTeamMember':
	        member = TeamMember.reverse(packet.content.teamMember);
	        logger.info('on update teamMember', member);
	        self.options.onupdateteammember(member);
	        self.onTeamMember(member);
	        break;
	    default:
	        break;
	    }
	};

	IMProtocolFn.onCreateTeam = function(team, owner) {
	    var db = this.db;
	    if (db.enable) {
	        db.putTeam(team);
	        db.putTeamMembers(owner);
	    }
	};

	/*
	 * 处理群, 同步和主动获取都会走这个逻辑
	 */
	IMProtocolFn.onTeams = function(packet) {
	    packet.content = packet.content || {};
	    var self = this,
	        db = self.db,
	        // 有同步和主动获取两种情况
	        isSync = self.packetFromSync(packet),
	        rawTeams = packet.content.teams || [],
	        hasChange = true,
	        timetag,
	        teams = [],
	        invalidTeams = [];

	    if (packet.error) {
	        switch (packet.error.code) {
	        // 没有获取到增量更新
	        case 803:
	            packet.error = null;
	            hasChange = false;
	            break;
	        }
	    }

	    // 用于同步的Promise
	    var promise = new Promise(function(resolve, reject) {
	        if (!packet.error) {
	            // 处理数据
	            parseData();
	            // 如果支持数据库, 那么合并数据, 否则直接 bingo
	            if (db.enable) {
	                mergeData(resolve, reject);
	            } else {
	                bingo();
	                resolve();
	            }
	        } else {
	            // 同步时应该没有error, 所以这里应该走不到
	            reject(packet.error);
	        }
	    });
	    if (isSync) {
	        promise.cmd = 'teams';
	        self.syncPromiseArray.push(promise);
	    }

	    function parseData() {
	        if (hasChange) {
	            rawTeams.forEach(function(team) {
	                team = Team.reverse(team);
	                if (team.validToCurrentUser) {
	                    teams.push(team);
	                } else {
	                    invalidTeams.push(team);
	                }
	            });
	        }
	        logger.warn('parse teams', teams2ids(teams), teams, 'invalid', teams2ids(invalidTeams), invalidTeams);
	        if (!rawTeams.length) {
	            hasChange = false;
	        } else {
	            hasChange = true;
	            timetag = packet.content.timetag;
	        }
	    }

	    function mergeData(resolveSync, rejectSync) {
	        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
	        packet.promise = new Promise(function(resolve, reject) {
	            if (hasChange) {
	                // 增量更新数据库
	                db.mergeTeams(teams, invalidTeams, timetag).then(function() {
	                    afterMergeData();
	                }).then(undefined, function(event) {
	                    event._msg = 'merge teams error';
	                    reject(event);
	                    rejectSync(event);
	                });
	            } else {
	                logger.warn('no merge teams');
	                afterMergeData();
	            }
	            function afterMergeData() {
	                if (!isSync) {
	                    db.getTeams().then(function(records) {
	                        teams = records;
	                        bingo();
	                        resolve();
	                        resolveSync();
	                    }).then(undefined, function(event) {
	                        event._msg = 'get teams error';
	                        reject(event);
	                        rejectSync(event);
	                    });
	                } else {
	                    bingo();
	                    resolve();
	                    resolveSync();
	                }
	            }
	        }).then(undefined, function(event) {
	            event._msg = 'merge teams data error';
	            rejectSync(event);
	            throw event;
	        });
	    }

	    function bingo() {
	        self.timetags.teams = timetag;
	        teams.invalid = invalidTeams;
	        // 返回数据
	        if (isSync) {
	            // 如果是同步, 那么统一在 onSyncDone 里面通知开发者
	            self.syncResult.teams = teams;
	            self.syncResult.invalidTeams = invalidTeams;
	        } else {
	            logger.warn('get teams', teams2ids(teams), teams);
	            packet.obj = teams;
	        }
	    }

	};

	IMProtocolFn.onTeamMembers = function(packet) {
	    packet.content = packet.content || {};
	    var self = this,
	        db = self.db,
	        // 有同步和主动获取两种情况
	        isSync = self.packetFromSync(packet),
	        rawMembers = packet.content.members || [],
	        hasChange = true,
	        timetag,
	        teamId,
	        members = [],
	        invalidMembers = [];
	    
	    // 获取 teamId
	    if (!!packet.obj) {
	        teamId = packet.obj.teamId;
	    }
	    if (!teamId) {
	        teamId = packet.content.teamId;
	    }
	    teamId = '' + teamId;

	    if (packet.error) {
	        switch (packet.error.code) {
	        // 没有获取到增量更新
	        case 406:
	            packet.error = null;
	            hasChange = false;
	            break;
	        }
	    }

	    // 用于同步的Promise
	    var promise = new Promise(function(resolve, reject) {
	        if (!packet.error) {
	            // 处理数据
	            parseData();
	            // 如果支持数据库, 那么合并数据, 否则直接 bingo
	            if (db.enable) {
	                mergeData(resolve, reject);
	            } else {
	                bingo();
	                resolve();
	            }
	        } else {
	            // 同步时应该没有error, 所以这里应该走不到
	            reject(packet.error);
	        }
	    });
	    if (isSync) {
	        promise.cmd = teamId;
	        self.syncTeamMembersPromiseArray.push(promise);
	    }

	    function parseData() {
	        if (hasChange) {
	            rawMembers.forEach(function(member) {
	                member = TeamMember.reverse(member);
	                if (member.valid) {
	                    members.push(member);
	                } else {
	                    invalidMembers.push(member);
	                }
	            });
	        }
	        logger.warn('parse members', teamId, objs2accounts(members), members, 'invalid', objs2accounts(invalidMembers), invalidMembers);
	        if (!rawMembers.length) {
	            hasChange = false;
	        } else {
	            hasChange = true;
	            timetag = packet.content.timetag;
	        }
	    }

	    function mergeData(resolveSync, rejectSync) {
	        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
	        packet.promise = new Promise(function(resolve, reject) {
	            if (hasChange) {
	                // 增量更新数据库
	                db.mergeTeamMembers(teamId, members, invalidMembers, timetag).then(function() {
	                    afterMergeData();
	                }).then(undefined, function(event) {
	                    event._msg = 'merge members error ' + teamId;
	                    reject(event);
	                    rejectSync(event);
	                });
	            } else {
	                logger.warn('no merge members', teamId);
	                afterMergeData();
	            }
	            function afterMergeData() {
	                if (!isSync) {
	                    db.getTeamMembers(teamId).then(function(records) {
	                        members = records;
	                        bingo();
	                        resolve();
	                        resolveSync();
	                    }).then(undefined, function(event) {
	                        event._msg = 'get members error';
	                        reject(event);
	                        rejectSync(event);
	                    });
	                } else {
	                    bingo();
	                    resolve();
	                    resolveSync();
	                }
	            }
	        }).then(undefined, function(event) {
	            event._msg = 'merge members data error';
	            rejectSync(event);
	            throw event;
	        });
	    }

	    function bingo() {
	        members.invalid = invalidMembers;
	        // 返回数据
	        if (isSync) {
	            // 如果是同步, 那么统一在 onSyncTeamMembersDone 里面通知开发者
	            self.syncTeamMembersResult[teamId] = members;
	            self.syncTeamMembersResult[teamId+'-invalid'] = invalidMembers;
	            self.timetags['team-'+teamId] = timetag;
	        } else {
	            logger.warn('get members', teamId, objs2accounts(members), members);
	            packet.obj = {
	                teamId: teamId,
	                members: members
	            };
	        }
	    }

	};

	IMProtocolFn.onTeamMember = function(member) {
	    logger.warn('parse update member', member);
	    var db = this.db;
	    if (db.enable) {
	        db.updateTeamMember(member);
	    }
	};

	/*
	 * 更新群系统通知的状态
	 * - 通过入群申请
	 * - 拒绝入群申请
	 * - 通过入群邀请
	 * - 拒绝入群邀请
	 */
	IMProtocolFn.updateTeamSysMsgState = function(packet, state) {
	    var error = packet.error;
	    var sysMsg;

	    // 处理错误
	    if (error) {
	        state = 'error';
	        error = util.filterObj(error, 'code message');
	    }
	    
	    sysMsg = {
	        idServer: packet.obj.idServer,
	        state: state
	    };
	    if (error) {
	        sysMsg.error = error;
	    }
	    this.updateSysMsg(sysMsg);
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var notundef = util.notundef;

	/**
	 * 群类型
	 * 
	 * - `'normal'` (普通群)
	 * - `'advanced'` (高级群)
	 *
	 * 普通群没有群简介、群公告、加入方式、扩展字段
	 * 
	 * @memberOf Team
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeMap = {
	    normal: 0,
	    advanced: 1
	};
	var typeReverseMap = {
	    0: 'normal',
	    1: 'advanced'
	};

	/**
	 * 加入方式
	 * 
	 * - `'noVerify'` (不需要验证)
	 * - `'needVerify'` (需要验证)
	 * - `'rejectAll'` (禁止任何人加入)
	 * 
	 * @memberOf Team
	 * @name joinMode
	 * @readOnly
	 * @enum {String}
	 */
	var joinModeMap = {
	    noVerify: 0,
	    needVerify: 1,
	    rejectAll: 2
	};
	var joinModeReverseMap = {
	    0: 'noVerify',
	    1: 'needVerify',
	    2: 'rejectAll'
	};

	/**
	 * 群
	 * 
	 * @constructor
	 * @property {String}   teamId                  群Id
	 * @property {String}   type                    {@link Team.type|群类型}
	 * @property {String}   name                    群名字
	 * @property {String}   intro                   群简介
	 * @property {String}   announcement            群公告
	 * @property {String}   joinMode                {@link Team.joinMode|加入方式}
	 * @property {String}   owner                   群主
	 * @property {Number}   level                   群人数上限
	 * @property {Number}   memberNum               群成员数量
	 * @property {Number}   memberUpdateTime        群成员最后更新时间
	 * @property {Number}   createTime              群创建时间
	 * @property {Number}   updateTime              群最后更新时间
	 * @property {String}   custom                  第三方扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
	 * @property {String}   serverCustom            第三方服务器扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
	 * @property {Boolean}  valid                   是否有效, 解散后该群无效
	 * @property {Boolean}  validToCurrentUser      该群是否对当前用户有效, 如果无效, 那么说明被踢了
	 */
	function Team(options) {
	    util.verifyOptions(options, 'action');
	    // 根据不同的action来验证不同的参数
	    switch (options.action) {
	    case 'create':
	        util.verifyOptions(options, 'teamId', false);
	        util.verifyOptions(options, 'type name');
	        util.verifyParamValid('type', options.type, validTypes);
	        // 如果是创建普通群, 那么不能包含群简介、群公告、加入方式、扩展字段
	        if (options.type === 'normal') {
	            util.verifyOptions(options, 'intro announcement joinMode custom', false);
	        }
	        break;
	    case 'update':
	        util.verifyOptions(options, 'teamId');
	        if (notundef(options.name)) {
	            util.verifyOptions(options, 'name');
	        }
	        util.verifyOptions(options, 'type', false);
	        break;
	    default:
	        break;
	    }
	    if (notundef(options.teamId)) { this.teamId = options.teamId; }
	    if (notundef(options.type)) { this.type = typeMap[options.type]; }
	    if (notundef(options.name)) { this.name = '' + options.name; }
	    if (notundef(options.intro)) { this.intro = '' + options.intro; }
	    if (notundef(options.announcement)) { this.announcement = '' + options.announcement; }
	    // 如果有加入方式, 那么需要验证其正确性
	    if (notundef(options.joinMode)) {
	        util.verifyParamValid('joinMode', options.joinMode, validJoinModes);
	        this.joinMode = joinModeMap[options.joinMode];
	    }
	    if (notundef(options.custom)) { this.custom = '' + options.custom; }
	}
	/**
	 * 逆转team, 因为可能是更新team信息, 可能只有部分信息, 所以用filter过滤不存在的信息
	 *
	 * @private
	 * @param  {Team} team 群
	 * @return {Object}
	 */
	Team.reverse = function(team) {
	    var obj = util.filterObj(team, 'teamId name type owner level selfCustom valid memberNum memberUpdateTime createTime updateTime validToCurrentUser');
	    if (notundef(obj.teamId)) { obj.teamId = '' + obj.teamId; }
	    if (notundef(obj.type)) { obj.type = typeReverseMap[obj.type]; }
	    if (notundef(obj.level)) { obj.level = +obj.level; }
	    if (notundef(obj.valid)) { obj.valid = obj.valid === '1'; }
	    if (notundef(obj.memberNum)) { obj.memberNum = +obj.memberNum; }
	    if (notundef(obj.memberUpdateTime)) { obj.memberUpdateTime = +obj.memberUpdateTime; }
	    if (notundef(obj.createTime)) { obj.createTime = +obj.createTime; }
	    if (notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
	    if (notundef(obj.validToCurrentUser)) { obj.validToCurrentUser = obj.validToCurrentUser === '1'; }
	    // 当群类型为高级, 或者不存在群类型（协议返回）时, 才有如下字段
	    if (obj.type === 'advanced' || !team.type) {
	        obj = util.merge(obj, util.filterObj(team, 'intro announcement joinMode bits custom serverCustom'));
	        if (notundef(obj.joinMode)) {
	            obj.joinMode = joinModeReverseMap[obj.joinMode];
	        }
	    }
	    return obj;
	};

	var validTypes = Object.keys(typeMap);

	var validJoinModes = Object.keys(joinModeMap);

	module.exports = Team;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;

	IMProtocolFn.processNotify = function(packet) {
	    var self = this;
	    switch (packet.cmd) {
	    // 离线session+team消息同步通知
	    case 'syncOfflineMsgs':
	        self.onOfflineMsgs(packet);
	        break;
	    // 批量标记协议已读
	    case 'batchMarkRead':
	        break;
	    // 离线sysMsg通知
	    case 'syncOfflineSysMsgs':
	        self.onOfflineSysMsgs(packet);
	        break;
	    // 漫游消息同步通知
	    // 每个会话返回一个包
	    // 不需要标记已读
	    case 'syncRoamingMsgs':
	        self.onRoamingMsgs(packet);
	        break;
	    // 离线过滤的消息通知
	    case 'syncOfflineFilterMsgs':
	        self.onOfflineMsgs(packet, true);
	        break;
	    // 离线过滤的sysMsg通知
	    case 'syncOfflineFilterSysMsgs':
	        self.onOfflineSysMsgs(packet, true);
	        break;
	    default:
	        break;
	    }
	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var ImageOp = __webpack_require__(107);

	IMProtocolFn.processMisc = function(packet) {
	    switch (packet.cmd) {
	    // 获取nos上传凭证
	    case 'getNosToken':
	        if (!packet.error) {
	            packet.obj = packet.content.nosToken;
	        }
	        break;
	    case 'audioToText':
	        if (!packet.error) {
	            packet.obj.text = packet.content.text;
	        }
	        break;
	    case 'processImage':
	        packet.obj.imageOps = ImageOp.reverseImageOps(packet.obj.imageOps);
	        if (!packet.error) {
	            packet.obj = {
	                url: packet.content.url
	            };
	        }
	        break;
	    default:
	        break;
	    }
	};


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);

	/**
	 * 操作类型
	 * @memberOf ImageOp
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeMap = {
	    // 去除图片元数据
	    // stripMeta: 0,
	    // 修改图片类型
	    // type: 1,
	    // 高斯模糊
	    blur: 2,
	    // 修改图片质量
	    quality: 3,
	    // 对图片进行剪裁
	    crop: 4,
	    // 对图片进行旋转
	    rotate: 5,
	    // 基于像素对图片进行缩略
	    // pixel: 6,
	    // 基于长宽的图片缩略
	    thumbnail: 7,
	    // 图片水印
	    // watermark: 8,
	    // 图片interlace
	    interlace: 9
	    // tmp: 10
	};
	var typeReverseMap = {
	    0: 'stripMeta',
	    1: 'type',
	    2: 'blur',
	    3: 'quality',
	    4: 'crop',
	    5: 'rotate',
	    6: 'pixel',
	    7: 'thumbnail',
	    8: 'watermark',
	    9: 'interlace',
	    10: 'tmp'
	};

	function ImageOp(options) {
	    util.verifyOptions(options, 'type');
	    util.verifyParamValid('type', options.type, ImageOp.validTypes);
	    util.merge(this, options);
	    this.type = typeMap[options.type];
	}

	ImageOp.validTypes = Object.keys(typeMap);

	ImageOp.reverse = function(imageOp) {
	    var obj = util.copy(imageOp);
	    obj.type = typeReverseMap[obj.type];
	    return obj;
	};

	ImageOp.reverseImageOps = function(imageOps) {
	    return imageOps.map(function(imageOp) {
	        return ImageOp.reverse(imageOp);
	    });
	};

	module.exports = ImageOp;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var undef = util.undef;
	var device = __webpack_require__(47);
	var logger = __webpack_require__(40);
	var TeamMember = __webpack_require__(87);
	var Session = __webpack_require__(109);
	var configMap = __webpack_require__(92);
	// 使收消息和发消息按照顺序来处理
	var msgPromise = Promise.resolve();

	/**
	 * 处理消息协议
	 */
	IMProtocolFn.processMessage = function(packet) {
	    var self = this;
	    switch (packet.cmd) {
	    // 发送消息
	    case 'sendMsg':
	        self.onSendMsg(packet);
	        break;
	    // 消息通知
	    case 'msg':
	        self.onMsg(packet);
	        break;
	    // 系统通知通知（包括自定义系统通知）
	    case 'sysMsg':
	        self.onSysMsg(packet);
	        break;
	    // 发送自定义系统通知
	    case 'sendCustomSysMsg':
	        self.onSendSysMsg(packet);
	        break;
	    // 获取单人历史消息
	    case 'getHistoryMsgs':
	    case 'searchHistoryMsgs':
	        self.onHistoryMsgs(packet);
	        break;
	    // 发送消息后发送方的多端同步通知
	    case 'syncSendMsg':
	        self.onMsg(packet);
	        break;
	    case 'deleteSessions':
	        self.onDeleteSessions(packet);
	        break;
	    default:
	        break;
	    }
	};

	// 收到漫游消息, 需去重
	IMProtocolFn.onRoamingMsgs = function(packet) {
	    var self = this;
	    var message = self.message;
	    var Message = message.Message;
	    var getMaxTimetag = Message.getMaxTimetag;
	    var msgs = message.reverseMsgs(packet.content.msgs);
	    var timetag = getMaxTimetag(msgs);
	    // 服务器返回的数据是按照时间从晚到早排序的, 但是一般UI上都是按照时间从早到晚排序的
	    msgs = msgs.reverse();
	    msgs = Message.deduplication(msgs);
	    var msg = msgs[0];
	    var sessionId = msg.sessionId;
	    // 存储漫游消息
	    var promise = self.putMsg(msgs, 'roamingMsgs').then(function(records) {
	        // debugger;
	        // 这里返回的是过滤后的消息, 有可能为空数组
	        msgs = records;
	        // 记录同步结果
	        logger.warn('sync roamingMsgs', sessionId, msgs.length, msgs);
	        self.syncResult.roamingMsgs = self.syncResult.roamingMsgs || [];
	        self.syncResult.roamingMsgs.push({
	            sessionId: sessionId,
	            scene: msg.scene,
	            to: msg.target,
	            msgs: msgs,
	            timetag: timetag
	        });
	    });
	    promise.cmd = 'roamingMsgs-' + sessionId;
	    self.syncPromiseArray.push(promise);
	};

	// 收到离线消息, 需去重
	// 不用调用 handleMsg, 因为同步的时候已经同步到这些变更了
	IMProtocolFn.onOfflineMsgs = function(packet, isFilter) {
	    var self = this;
	    var message = self.message;
	    var Message = message.Message;
	    // 处理过滤消息
	    var modifyObj = null;
	    if (isFilter) {
	        modifyObj = {
	            filter: true
	        };
	    }
	    var msgs = message.reverseMsgs(packet.content.msgs, {
	        modifyObj: modifyObj
	    });
	    // 将离线消息按会话分开, 一个会话一个回包
	    var currMsgs = [];
	    var currSessionId = '';
	    var sessionId;
	    var promise;
	    var property = isFilter ? 'offlineFilterMsgs' : 'offlineMsgs';

	    msgs.forEach(function(msg) {
	        sessionId = msg.sessionId;
	        // 如果是新的会话
	        if (sessionId !== currSessionId) {
	            // 存储上一个会话
	            storeLastSession();
	            // 开始新的会话
	            currMsgs = [];
	            currMsgs.push(msg);
	            currSessionId = sessionId;
	        } else {
	            currMsgs.push(msg);
	        }
	    });
	    storeLastSession();

	    function storeLastSession() {
	        // 第一次 currMsgs 为空
	        if (!!currMsgs.length) {
	            var timetag = Message.getMaxTimetag(currMsgs);
	            var scene = currMsgs[0].scene;
	            var to = currMsgs[0].target;
	            // 标记消息已读, 要标记所有的消息
	            self.markMsgRead(currMsgs);
	            // 服务器返回的数据是按照时间从晚到早排序的, 但是一般UI上都是按照时间从早到晚排序的
	            currMsgs = currMsgs.reverse();
	            // 去重
	            currMsgs = Message.deduplication(currMsgs);
	            // 存储离线消息
	            promise = self.putMsg(currMsgs, 'offlineMsgs').then(function(records) {
	                // debugger;
	                // 这里返回的是过滤后的消息, 有可能为空数组
	                currMsgs = records;
	                // 记录同步结果
	                logger.warn('sync', property, currSessionId, currMsgs.length, currMsgs);
	                self.syncResult[property] = self.syncResult[property] || [];
	                self.syncResult[property].push({
	                    sessionId: currSessionId,
	                    scene: scene,
	                    to: to,
	                    msgs: currMsgs,
	                    timetag: timetag
	                });
	            });
	            promise.cmd = 'offlineMsgs-' + currSessionId;
	            self.syncPromiseArray.push(promise);
	        }
	    }

	};

	/*
	 * 补全消息, 加上某些字段
	 */
	IMProtocolFn.completeMsg = function(msg) {
	    var self = this;
	    msg.from = self.account;
	    msg.fromNick = self.myInfo && self.myInfo.nick;
	    msg.fromClientType = 'Web';
	    msg.fromDeviceId = device.deviceId;
	    if (!msg.time) {msg.time = +new Date();}
	    return msg;
	};

	// 发了一条消息
	IMProtocolFn.onSendMsg = function(packet, isFilter) {
	    var self = this,
	        msg = packet.obj.msg;
	    self.completeMsg(msg);
	    // 如果成功, 服务器端会返回额外的字段
	    if (!packet.error) {
	        msg.idServer = packet.content.msg.idServer;
	        msg.time = packet.content.msg.time;
	        msg.status = 'success';
	    } else {
	        msg.status = 'fail';
	    }
	    // 返回给开发者的信息
	    msg = self.message.reverse(msg);
	    if (isFilter) { msg.filter = true; }
	    packet.obj = msg;
	    // 发送消息时会存储消息, 那么需要等这个操作结束后再更新消息状态
	    msgPromise = Promise.all([msgPromise, packet.obj.promise]).then(function(records) {
	        // 这里返回的是过滤后的消息, 有可能为空数组
	        // 为空时表明是重发的消息, 所以依然需要更新到数据库
	        if (!records.length) {msg.resend = true;}
	        return self.updateMsg(msg);
	    });
	};

	/*
	 * 收到多条群消息
	 * - 普通群被拉进群并且有人在群里说话了
	 */
	IMProtocolFn.onMsgs = function(packet) {
	    var self = this;
	    self.message.reverseMsgs(packet.content.msgs, {
	        mapper: function(msg) {
	            self.handleMsg(msg);
	        }
	    });
	};

	/*
	 * 收到消息
	 * - 收到一条点对点消息
	 * - 收到一条在其它端发送的点对点消息
	 * - 收到一条群消息
	 * - 收到一条在其它端发送的群消息
	 * - 收到一条过滤消息
	 */
	IMProtocolFn.onMsg = function(packet, isFilter) {
	    var self = this;
	    var msg = self.message.reverse(packet.content.msg);
	    if (isFilter) { msg.filter = true; }
	    self.handleMsg(msg);
	};

	/*
	 * - 存储并过滤消息
	 * - 更新漫游消息时间戳
	 * - 分类型处理消息
	 * - 通知消息
	 */
	IMProtocolFn.handleMsg = function(msg) {
	    var self = this;
	    var timetag = msg.time;
	    // 标记已读
	    self.markMsgRead(msg);
	    // 处理消息
	    msgPromise = msgPromise.then(function() {
	        // 存储消息
	        return self.putMsg(msg, 'onMsg');
	    }).then(function(records) {
	        // 这里返回的是过滤后的消息, 有可能为空数组
	        msg = records[0];
	        // 就算过滤后的消息数组为空, 时间戳还是要更新, 防止下次再同步下来
	        return self.updateRoamingMsgTimetag(timetag);
	    }).then(function() {
	        // 检查用户信息是否更新了
	        if (!msg) {return;}
	        return self.checkUserUpdate(msg);
	    }).then(function() {
	        // debugger;
	        // 分类型处理消息
	        if (!msg) {return;}
	        var type = msg.type;
	        logger.log('handle' + msg.scene + ' ' + type + ' msg' + (type==='notification' ? ' ' + msg.attach.type : ''), msg);
	        switch (type) {
	        case 'notification':
	            return self.onTeamNotificationMsg(msg);
	        }
	    }).then(function() {
	        // debugger;
	        // 通知消息
	        if (!msg) {return;}
	        logger.info('on msg', msg);
	        setTimeout(function() {
	            self.options.onmsg(util.copy(msg));
	        }, 0);
	    }).then(undefined, function(event) {
	        event._msg = 'handle msg error';
	        self.onDBError(event);
	    });
	};

	/*
	 * 更新消息, 以下情况会更新消息
	 * - 收到漫游消息
	 * - 收到离线消息
	 * - 发消息
	 * - 收到在线消息
	 * 策略
	 * - 更新消息之后要更新对应的会话对象
	 * - 如果是收到离线消息、或者收到不是当前会话的在线消息, 那么需要更新未读数
	 * - 如果是收到在线消息, 通知会话
	 * 多 tab 页
	 * - 当支持多个 tab 同时登录时, 收到消息时, 只会在一个 tab 页里面存储这些消息, 其它 tab 页会存储失败
	 * - 存储成功的 tab 负责存储会话和更新未读数, 其它 tab 页也要计算自己的未读数(但是不能更新到数据库), 同时也要将消息推给开发者
	 * type
	 * - `'roamingMsgs'`
	 * - `'offlineMsgs'`
	 * - `'sendMsg'`
	 * - `'onMsg'`
	 */
	IMProtocolFn.putMsg = function(msgs, type) {
	    // debugger;
	    if (!util.isArray(msgs)) { msgs = [msgs]; }
	    // 如果是过滤（云商服专用）, 直接返回
	    if (msgs[0].filter) { return Promise.resolve(msgs); }
	    var self = this;
	    var db = self.db;
	    var supportDb = db.enable;
	    var promise = Promise.resolve();
	    var Message = self.message.Message;
	    var lastMsg = Message.getLastMsg(msgs);
	    var flow = lastMsg.flow;
	    var session = Session.genSessionByMsg(lastMsg);
	    var notCurrSession = (session.id !== self.currSessionId);
	    // 落后了, 其它 tab 已经存过了
	    var backward = false;
	    // 未计入未读数的消息
	    var uncountMsgs = [];
	    cacheSession(session);
	    // 存储并过滤
	    promise = promise.then(function() {
	        // debugger;
	        if (supportDb) {
	            return db.putMsg(msgs);
	        } else {
	            return msgs;
	        }
	    }).then(function(records) {
	        // debugger;
	        // 过滤出最终回传给用户的消息
	        var arr = [];
	        msgs.forEach(function(msg) {
	            if (self.checkMsgUnique(msg)) {
	                arr.push(msg);
	            }
	        });
	        msgs = arr;
	        if (supportDb) {
	            // records 为存储到数据库的消息数组, 需要根据此数组来更新未读数
	            uncountMsgs = records;
	        } else {
	            uncountMsgs = msgs;
	        }
	    });
	    // 存储会话
	    promise = promise.then(function() {
	        // debugger;
	        // 如果过滤后的消息为空数组, 则不作处理
	        if (!!msgs.length) {
	            // 重新计算 session
	            lastMsg = Message.getLastMsg(msgs);
	            session = Session.genSessionByMsg(lastMsg);
	            cacheSession(session);
	            // 如果未计入未读数的消息不为空数组, 说明此 tab 页负责存储消息, 那么需要存储会话
	            // 如果未计入未读数的消息为空数组, 则说明其它 tab 页已经存储过消息了, 那么不需要存储会话, 但是依然需要重新计算未读数, 只是不能存储这个未读数
	            if (supportDb) {
	                if (!!uncountMsgs.length) {
	                    return db.putSession(session);
	                } else {
	                    backward = true;
	                    uncountMsgs = msgs;
	                }
	            }
	        }
	    });
	    // 更新未读数
	    if ( flow === 'in' &&
	        (type === 'offlineMsgs' || (type === 'onMsg' && notCurrSession)) ) {
	        promise = promise.then(function(record) {
	            // debugger;
	            // 如果未读数没有变化, 直接返回
	            if (!uncountMsgs.length) {return;}
	            // 如果没有从数据库拿到会话记录, 那么从数据源获取会话记录的未读数
	            if (supportDb && !!record) {
	                session = record;
	            } else {
	                record = self.getSessionFromDataSource(session.id);
	                if (record) { session.unread = record.unread || 0; }
	            }
	            cacheSession(session);
	            // 计算未读数
	            session.unread = session.unread || 0;
	            var unread = 0;
	            uncountMsgs.forEach(function(msg) {
	                // 此字段不存在, 或者为 true, 计入未读数
	                if (undef(msg.isUnreadable) || msg.isUnreadable) {
	                    unread++;
	                }
	            });
	            session.unread += unread;
	            cacheSession(session);
	            // 更新未读数, 如果落后, 那么不能存储未读数
	            if (supportDb && !backward) {
	                return db.updateSession({ id: session.id, unread: session.unread });
	            }
	        });
	    }
	    // 通知会话
	    if (type === 'onMsg') {
	        promise = promise.then(function() {
	            // debugger;
	            // 如果过滤后的消息为空数组, 则不作处理
	            if (!!msgs.length) {
	                self.onUpdateSession(session);
	            }
	        });
	    }
	    function cacheSession(session) {
	        if (type === 'roamingMsgs' || type === 'offlineMsgs') {
	            self.syncResult.sessions = self.syncResult.sessions || {};
	            self.syncResult.sessions[session.id] = session;
	        }
	    }
	    return promise.then(function() {
	        // 把过滤后的消息返回出去
	        return msgs;
	    });
	};

	IMProtocolFn.checkMsgUnique = util.genCheckUniqueFunc('idClient');

	// 废弃, 使用 checkMsgUnique 来检查消息是否唯一
	// IMProtocolFn.getMsgFromDataSource = function(msg) {
	//     var dataSource = this.options.dataSource;
	//     if (!!dataSource) {
	//         if (util.isFunction(dataSource.getMsg)) {
	//             return dataSource.getMsg(msg);
	//         }
	//     }
	// };

	/**
	 * 发消息收到回包
	 * - 通知开发者, 会话更新了
	 * - 如果支持数据库, 更新消息状态
	 *     - 更新对应会话, 并通知开发者
	 *     - 如果是成功, 那么更新漫游消息时间戳
	 * - 如果不支持数据库, 那么更新记录漫游消息时间戳
	 * @private
	 * @param  {Object} msg 消息对象
	 * @return {Void}
	 */
	IMProtocolFn.updateMsg = function(msg) {
	    // 如果是过滤（云商服专用）, 直接返回
	    if (msg.filter) { return Promise.resolve(msg); }
	    logger.warn('update msg');
	    var self = this;
	    var db = self.db;
	    var success = msg.status === 'success';
	    var session = {
	        id: msg.sessionId,
	        lastMsg: msg,
	        updateTime: msg.time
	    };
	    // 通知开发者, 会话更新了
	    self.onUpdateSession(session);
	    if (db.enable) {
	        // 更新消息、会话和时间戳
	        return db.updateMsg(msg).then(function(record) {
	            var p1 = db.updateSession(session);
	            var p2 = Promise.resolve();
	            if (success) {
	                p2 = db.updateRoamingMsgTimetag(record.time);
	            }
	            return Promise.all([p1, p2]);
	        });
	    } else {
	        if (success) {
	            self.timetags.roamingMsgs = msg.time;
	        }
	        return Promise.resolve(msg);
	    }
	};

	IMProtocolFn.updateRoamingMsgTimetag = function(timetag) {
	    var self = this;
	    var db = self.db;
	    if (db.enable) {
	        return db.updateRoamingMsgTimetag(timetag);
	    } else {
	        self.timetags.roamingMsgs = timetag;
	        return Promise.resolve(timetag);
	    }
	};

	/**
	 * 检查用户信息是否更新了
	 * - 如果不是自己发的消息, 那么检查发消息的人的信息是否被更新了
	 * @private
	 * @param  {String} account 被检查的用户账号
	 * @return {Void}
	 */
	IMProtocolFn.checkUserUpdate = function(msg) {
	    var self = this;
	    var db = self.db;
	    var account = msg.from;
	    if (account === self.account) { return Promise.resolve(); }
	    return new Promise(function(resolve) {
	        if (db.enable) {
	            db.getUser(account).then(function(user) {
	                if (!!user) {
	                    compareUser(user);
	                } else {
	                    getUserFromDataSource();
	                }
	            }, function() {
	                getUserFromDataSource();
	            });
	        } else {
	            getUserFromDataSource();
	        }

	        function getUserFromDataSource() {
	            // debugger;
	            var dataSource = self.options.dataSource;
	            if (!!dataSource && util.isFunction(dataSource.getUser)) {
	                compareUser(dataSource.getUser(account));
	            } else {
	                // 没有数据源, 算完成
	                resolve();
	            }
	        }

	        // 如果没有此用户信息或者用户信息过时了, 那么更新之
	        function compareUser(user) {
	            // debugger;
	            if (!user) {
	                refreshUser();
	            } else {
	                var updateTime = +user.updateTime;
	                if (util.isNumber(updateTime) && updateTime < msg.userUpdateTime) {
	                    refreshUser();
	                } else {
	                    // 没有更新, 算完成
	                    resolve();
	                }
	            }
	        }

	        function refreshUser() {
	            self.nim.getUser({
	                account: account,
	                sync: true,
	                done: function(error, user) {
	                    // debugger;
	                    if (!error) {
	                        setTimeout(function() {
	                            logger.info('on update user', user.account, user);
	                            self.options.onupdateuser(user);
	                        }, 0);
	                    }
	                    // 不管有没有错, 都算完成
	                    resolve();
	                }
	            });
	        }
	    });
	};

	IMProtocolFn.onTeamNotificationMsg = function(msg) {
	    var self = this,
	        db = self.db,
	        type = msg.attach.type,
	        from = msg.from,
	        teamId = msg.to,
	        timetag = msg.time,
	        team = msg.attach.team,
	        account = msg.attach.account,
	        accounts = msg.attach.accounts;
	    switch (type) {
	    case 'updateTeam':
	        if (!db.enable) { return; }
	        team.updateTime = timetag;
	        return db.updateTeam(team);
	    case 'addTeamMembers':
	        return self.onAddTeamMembers(msg, team, accounts);
	    case 'removeTeamMembers':
	        return self.onRemoveTeamMembers(team, teamId, accounts);
	    case 'acceptTeamInvite':
	        return self.onAddTeamMembers(msg, team, [from]);
	    case 'passTeamApply':
	        return self.onAddTeamMembers(msg, team, [account]);
	    case 'addTeamManagers':
	        return self.updateTeamManagers(msg, teamId, accounts, true, timetag);
	    case 'removeTeamManagers':
	        return self.updateTeamManagers(msg, teamId, accounts, false, timetag);
	    case 'leaveTeam':
	        return self.onRemoveTeamMembers(team, teamId, [from]);
	    case 'dismissTeam':
	        if (!db.enable) { return; }
	        return db.dismissTeam(teamId, timetag);
	    case 'transferTeam':
	        return self.transferTeam(msg, team, from, account);
	    }
	};

	/*
	 * 普通群拉人
	 * 高级群接受入群邀请
	 */
	IMProtocolFn.onAddTeamMembers = function(msg, team, accounts) {
	    var self = this;
	    var db = self.db;
	    var teamId = team.teamId;
	    var members = TeamMember.assembleMembers(team, accounts);
	    var oldTeam = accounts.indexOf(self.account) === -1;
	    if (oldTeam) { msg.attach.members = members; }
	    if (!db.enable) { return; }
	    var p1;
	    var p2 = db.putTeam(team);
	    /*
	     * 如果是别人被拉进来了, 那么拼接群成员列表
	     * 如果是自己被拉进来了, 那么同步一次群成员列表
	     */
	    if (oldTeam) {
	        p1 = db.putTeamMembers(members);
	    } else {
	        logger.warn('join team', teamId);
	        p2 = new Promise(function(resolve) {
	            self.nim.getTeamMembers({
	                teamId: teamId,
	                sync: true,
	                done: function() {
	                    resolve();
	                }
	            });
	        });
	    }
	    return Promise.all([p1, p2]);
	};

	/*
	 * 移出群成员
	 * 主动退群
	 */
	IMProtocolFn.onRemoveTeamMembers = function(team, teamId, accounts) {
	    var self = this;
	    var db = self.db;
	    if (!db.enable) { return; }
	    /*
	     * 如果是别人被踢了, 那么移除群成员
	     * 如果是自己被踢了, 那么离开该群
	     */
	    if (accounts.indexOf(self.account) === -1) {
	        var p1 = db.removeTeamMembersByAccounts(teamId, accounts);
	        var p2 = Promise.resolve();
	        if (team) {
	            p2 = db.putTeam(team);
	        }
	        return Promise.all([p1, p2]);
	    } else {
	        return db.leaveTeam(teamId);
	    }
	};

	IMProtocolFn.updateTeamManagers = function(msg, teamId, accounts, isManager, timetag) {
	    var db = this.db;
	    msg.attach.members = accounts.map(function(account) {
	        return {
	            id: TeamMember.genId(teamId, account),
	            type: isManager ? 'manager' : 'normal',
	            updateTime: timetag
	        };
	    });
	    if (!db.enable) { return; }
	    return db.updateTeamManagers(teamId, accounts, isManager, timetag);
	};

	IMProtocolFn.transferTeam = function(msg, team, from, account) {
	    var db = this.db;
	    var teamId = team.teamId;
	    var memberUpdateTime = team.memberUpdateTime;
	    var oldOwner = {
	        id: TeamMember.genId(teamId, from),
	        type: 'normal',
	        updateTime: memberUpdateTime
	    };
	    var newOwner = {
	        id: TeamMember.genId(teamId, account),
	        type: 'owner',
	        updateTime: memberUpdateTime
	    };
	    msg.attach.members = [oldOwner, newOwner];
	    if (!db.enable) { return; }
	    return db.transferTeam(team, from, account);
	};

	IMProtocolFn.onHistoryMsgs = function(packet) {
	    if (!packet.error) {
	        packet.obj.msgs = this.message.reverseMsgs(packet.content.msgs);
	    }
	};

	IMProtocolFn.isFilterMsgs = function(msgs) {
	    return !!msgs[0].filter;
	};

	// 分割消息, 将消息分为点对点消息、群消息和过滤消息
	IMProtocolFn.splitMsgs = function(msgs, p2pMsgs, teamMsgs, filterMsgs) {
	    msgs.forEach(function(msg) {
	        if (!msg.filter) {
	            switch (msg.scene) {
	            case 'p2p':
	                p2pMsgs.push(msg);
	                break;
	            case 'team':
	                teamMsgs.push(msg);
	                break;
	            }
	        } else {
	            filterMsgs.push(msg);
	        }
	    });
	};

	/*
	 * 标记消息已读
	 * - 当收到离线消息和在线消息时
	 *     - 如果支持数据库, 那么会存储消息和未读数, 所以标记消息已读
	 *     - 如果不支持数据库, 但是自动标记已读(默认配置), 那么会标记消息
	 *     - 如果不支持数据库, 也不自动标记消息已读, 用户可以主动标记消息已读
	 */
	IMProtocolFn.markMsgRead = function(msgs, force) {
	    if (!util.isArray(msgs)) { msgs = [msgs]; }
	    var self = this;
	    var db = self.db;
	    if (db.enable || self.options.autoMarkRead || force) {
	        // 消息分为点对点消息、群消息、过滤消息
	        var p2pMsgs = [];
	        var teamMsgs = [];
	        var filterMsgs = [];
	        self.splitMsgs(msgs, p2pMsgs, teamMsgs, filterMsgs);
	        self.markP2pMsgsRead(p2pMsgs);
	        self.markTeamMsgsRead(teamMsgs);
	        self.markFilterMsgsRead(filterMsgs);
	    }
	};
	IMProtocolFn.markP2pMsgsRead = function(msgs) {
	    if (!!msgs.length) {
	        var sid = configMap.idMap.talk.id;
	        var cid = configMap.idMap.talk.msg;
	        this.doMarkMsgsRead(sid, cid, msgs);
	    }
	};
	IMProtocolFn.markTeamMsgsRead = function(msgs) {
	    if (!!msgs.length) {
	        var sid = configMap.idMap.team.id;
	        var cid = configMap.idMap.team.teamMsg;
	        this.doMarkMsgsRead(sid, cid, msgs);
	    }
	};
	IMProtocolFn.markFilterMsgsRead = function(msgs) {
	    if (!!msgs.length) {
	        var sid = configMap.idMap.filter.id;
	        var cid = configMap.idMap.filter.filterMsg;
	        this.doMarkMsgsRead(sid, cid, msgs);
	    }
	};

	/*
	 * 标记系统通知已收到
	 * - 当收到离线系统通知和在线系统通知时
	 *     - 如果支持数据库, 那么会存储系统通知和未读数, 所以标记系统通知已读
	 *     - 如果不支持数据库, 那么不存储系统通知和未读数, 所以不标记系统通知已读
	 * - 当用户主动标记某条系统通知已读
	 */
	IMProtocolFn.markSysMsgRead = function(sysMsgs, force) {
	    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
	    var self = this;
	    var db = self.db;
	    if (db.enable || self.options.autoMarkRead || force) {
	        var sid, cid;
	        if (self.isFilterMsgs(sysMsgs)) {
	            sid = configMap.idMap.filter.id;
	            cid = configMap.idMap.filter.filterSysMsg;
	        } else {
	            sid = configMap.idMap.talk.id;
	            cid = configMap.idMap.talk.sysMsg;
	        }
	        self.doMarkMsgsRead(sid, cid, sysMsgs);
	    }
	};

	IMProtocolFn.doMarkMsgsRead = function(sid, cid, msgs) {
	    if (!!msgs.length) {
	        this.sendCmd('batchMarkRead', {
	            sid: sid,
	            cid: cid,
	            ids: msgs.map(function(msg) {return msg.idServer;})
	        });
	    }
	};


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * @constructor
	 * @property {String}   id                  会话ID
	 * @property {String}   scene               {@link IMMessage.type|场景}
	 * @property {String}   to                  聊天对象, 账号或群ID
	 * @property {Long}     updateTime          会话更新的时间
	 * @property {Message}  lastMsg             此会话的最后一条消息
	 * @property {Boolean}  hasMoreLocalMsgs    是否还有更多地本地消息
	 * @property {Number}   unread              未读数
	 * @property {String}   localCustom         本地自定义扩展字段
	 * - 在{@link support.db|支持数据库}时可以调用{@Link NIM#updateLocalSession|更新本地会话}来更新此字段, 此字段只会被更新到本地数据库, 不会被更新到服务器上
	 */
	function Session() {}

	// TODO to be removed
	Session.parse = function(session) {
	    var arr = session.split('|');
	    return {
	        scene: arr[0],
	        to: arr[1]
	    };
	};

	Session.genSessionByMsg = function(msg) {
	    var session = {
	        id: msg.sessionId,
	        scene: msg.scene,
	        to: msg.target,
	        updateTime: msg.time,
	        lastMsg: msg,
	        hasMoreLocalMsgs: true
	    };
	    return session;
	};

	module.exports = Session;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var logger = __webpack_require__(40);
	var SystemMessage = __webpack_require__(111);
	var sysMsgPromise = Promise.resolve();

	IMProtocolFn.splitSysMsgs = function(sysMsgs, customSysMsgs) {
	    var sysMsg;
	    for (var i=sysMsgs.length-1; i>=0; i--) {
	        sysMsg = sysMsgs[i];
	        if (SystemMessage.isCustom(sysMsg)) {
	            sysMsgs.splice(i, 1);
	            customSysMsgs.push(sysMsg);
	        }
	    }
	};

	// 收到离线系统通知
	// 不用调用 handleSysMsg, 因为同步的时候已经同步到这些变更了
	IMProtocolFn.onOfflineSysMsgs = function(packet, isFilter) {
	    var self = this;
	    var sysMsgs = packet.content.sysMsgs.map(function(sysMsg) {
	        sysMsg = SystemMessage.reverse(sysMsg);
	        if (isFilter) { sysMsg.filter = true; }
	        return sysMsg;
	    });
	    // 服务器返回的数据是按照时间从晚到早排序的, 但是一般UI上都是按照时间从早到晚排序的
	    sysMsgs = sysMsgs.reverse();
	    // 标记系统通知已读
	    self.markSysMsgRead(sysMsgs);
	    // 剥离出自定义系统通知
	    var customSysMsgs = [];
	    self.splitSysMsgs(sysMsgs, customSysMsgs);
	    var p1 = isFilter ? 'offlineFilterSysMsgs' : 'offlineSysMsgs';
	    var p2 = isFilter ? 'offlineFilterCustomSysMsgs' : 'offlineCustomSysMsgs';
	    // 存储离线系统通知
	    if (sysMsgs.length) {
	        var promise = self.putSysMsg(sysMsgs, 'offlineSysMsgs').then(function(records) {
	            // debugger;
	            // 这里返回的是过滤后的系统通知, 有可能为空数组
	            sysMsgs = records;
	            // 记录同步结果
	            if (!!sysMsgs.length) {
	                logger.warn('sync', p1, sysMsgs.length, sysMsgs);
	                self.syncResult[p1] = sysMsgs;
	            }
	        });
	        promise.cmd = 'sysMsgs';
	        self.syncPromiseArray.push(promise);
	    }
	    // 记录同步结果
	    if (!!customSysMsgs.length) {
	        logger.warn('sync ' + p2, customSysMsgs);
	        self.syncResult[p2] = customSysMsgs;
	    }
	};

	IMProtocolFn.onSendSysMsg = function(packet, isFilter) {
	    var self = this;
	    var sysMsg = packet.obj;
	    self.completeSysMsg(sysMsg);
	    if (!packet.error) {
	        sysMsg.status = 'success';
	    } else {
	        sysMsg.status = 'fail';
	    }
	    sysMsg = SystemMessage.reverse(sysMsg);
	    if (isFilter) { packet.obj.filter = true; }
	    packet.obj = sysMsg;
	};

	IMProtocolFn.completeSysMsg = function(sysMsg) {
	    sysMsg.from = this.account;
	    return sysMsg;
	};

	// 收到系统通知
	IMProtocolFn.onSysMsg = function(packet, isFilter) {
	    var self = this;
	    var sysMsg = SystemMessage.reverse(packet.content.sysMsg);
	    // 标记已读
	    self.markSysMsgRead(sysMsg);
	    // 是否是过滤
	    if (isFilter) { sysMsg.filter = true; }
	    // 处理系统通知
	    if (SystemMessage.isCustom(sysMsg)) {
	        logger.info('on customSysMsg', sysMsg);
	        self.options.oncustomsysmsg(sysMsg);
	    } else {
	        self.handleSysMsg(sysMsg);
	    }
	};

	IMProtocolFn.handleSysMsg = function(sysMsg) {
	    var self = this;
	    var type = sysMsg.type;
	    var from = sysMsg.from;
	    sysMsgPromise = sysMsgPromise.then(function() {
	        // 存储系统通知
	        return self.putSysMsg(sysMsg, 'onSysMsg');
	    }).then(function(records) {
	        // 这里返回的是过滤后的系统通知, 有可能为空数组
	        sysMsg = records[0];
	    }).then(function() {
	        // debugger;
	        if (!sysMsg) {return;}
	        // 分类型处理
	        var obj;
	        var promise = Promise.resolve();
	        switch (type) {
	        case 'addFriend':
	            obj = {
	                type: 'addFriend',
	                account: from
	            };
	            promise = self.onFriendRequest(obj);
	            break;
	        case 'passFriendApply':
	            obj = {
	                type: 'passFriendApply',
	                account: from
	            };
	            promise = self.onFriendRequest(obj);
	            break;
	        case 'deleteFriend':
	            promise = self.onDeleteFriend({
	                account: from
	            });
	            break;
	        }
	        if (obj && obj.friend) {
	            sysMsg.friend = obj.friend;
	        }
	        return promise;
	    }).then(function() {
	        // debugger;
	        if (!sysMsg) {return;}
	        // 通知系统通知
	        logger.info('on sysMsg', type, sysMsg);
	        setTimeout(function() {
	            self.options.onsysmsg(sysMsg);
	        }, 0);
	    });
	};

	/*
	 * 存储系统通知（不存自定义系统通知）
	 * - 收到离线系统通知
	 * - 收到系统通知
	 * 多 tab 页
	 * - 当支持多个 tab 同时登录时, 收到消息时, 只会在一个 tab 页里面存储这些消息, 其它 tab 页会存储失败
	 * - 存储成功的 tab 负责存储会话和更新未读数, 其它 tab 页也要计算自己的未读数(但是不能更新到数据库), 同时也要将消息推给开发者
	 * type
	 * - offlineSysMsgs
	 * - onSysMsg
	 */
	IMProtocolFn.putSysMsg = function(sysMsgs, type) {
	    // debugger;
	    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
	    // 如果是过滤（云商服专用）, 直接返回
	    if (sysMsgs[0].filter) { return Promise.resolve(sysMsgs); }
	    var self = this;
	    var db = self.db;
	    var supportDb = db.enable;
	    var promise = Promise.resolve();
	    // 未计入未读数的消息
	    var uncoundSysMsgs = [];
	    // 存储并过滤
	    promise = promise.then(function() {
	        // debugger;
	        if (supportDb) {
	            return db.putSysMsg(sysMsgs);
	        } else {
	            return sysMsgs;
	        }
	    }).then(function(records) {
	        // debugger;
	        // 过滤出最终回传给用户的消息
	        var arr = [];
	        sysMsgs.forEach(function(sysMsg) {
	            if (self.checkSysMsgUnique(sysMsg)) {
	                arr.push(sysMsg);
	            }
	        });
	        sysMsgs = arr;
	        if (supportDb) {
	            // records 为存储到数据库的消息数组, 需要根据此数组来更新未读数
	            uncoundSysMsgs = records;
	        } else {
	            uncoundSysMsgs = sysMsgs;
	        }
	    });
	    promise = promise.then(function() {
	        // debugger;
	        // 获取未读数
	        return self.getSysMsgUnread().then(function(sysMsgUnread) {
	            // debugger;
	            // 如果未计入未读数的消息不为空数组, 说明此 tab 页负责存储消息
	            // 如果未计入未读数的消息为空数组, 则说明其它 tab 页已经存储过消息了, 但是依然需要重新计算未读数, 只是不能存储这个未读数
	            if (!uncoundSysMsgs.length) {
	                uncoundSysMsgs = sysMsgs;
	                uncoundSysMsgs.backward = true;
	            }
	            // 更新未读数
	            return self.updateSysMsgUnread(uncoundSysMsgs, sysMsgUnread, 1).then(function(sysMsgUnread) {
	                // debugger;
	                // 缓存未读数
	                if (type === 'offlineSysMsgs') {
	                    self.syncResult.sysMsgUnread = sysMsgUnread;
	                }
	                // 通知开发者, 未读数更新了
	                if (type === 'onSysMsg') {
	                    self.onUpdateSysMsgUnread(sysMsgUnread);
	                }
	            });
	        });
	    });
	    return promise.then(function() {
	        // 把过滤后的系统通知返回出去
	        return sysMsgs;
	    });
	};

	IMProtocolFn.checkSysMsgUnique = util.genCheckUniqueFunc('idServer');

	// 废弃, 使用 checkMsgUnique 来检查消息是否唯一
	// IMProtocolFn.getSysMsgFromDataSource = function(sysMsg) {
	//     var dataSource = this.options.dataSource;
	//     if (!!dataSource) {
	//         if (util.isFunction(dataSource.getSysMsg)) {
	//             return dataSource.getSysMsg(sysMsg);
	//         }
	//     }
	// };

	// 如果支持数据库, 那么从数据库拿未读记录
	// 如果不支持数据库, 那么从数据源获取未读记录
	IMProtocolFn.getSysMsgUnread = function() {
	    var self = this;
	    var db = self.db;
	    return new Promise(function(resolve) {
	        if (db.enable) {
	            db.getSysMsgUnread().then(function(records) {
	                resolve(records);
	            }, function() {
	                resolve(self.getSysMsgUnreadFromDataSource());
	            });
	        } else {
	            resolve(self.getSysMsgUnreadFromDataSource());
	        }
	    });
	};

	IMProtocolFn.getSysMsgUnreadFromDataSource = function () {
	    return this.sysMsgUnread || {};
	    // 这个数据就不用数据源了, SDK放内存里好了
	    // var dataSource = this.options.dataSource;
	    // if (!!dataSource) {
	    //     if (util.isFunction(dataSource.getSysMsgUnread)) {
	    //         return dataSource.getSysMsgUnread();
	    //     }
	    // }
	};

	/*
	 * 更新系统通知未读数, 如果支持数据库, 更新数据库
	 * - 收到系统通知 delta 为 1
	 * - 主动标记系统通知 delta 为 0
	 */
	IMProtocolFn.updateSysMsgUnread = function(sysMsgs, sysMsgUnread, delta) {
	    // debugger;
	    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
	    if (!sysMsgs.length) {return Promise.resolve(sysMsgUnread);}
	    sysMsgUnread = sysMsgUnread || {};
	    var self = this;
	    var db = self.db;
	    var type;
	    sysMsgs.forEach(function(sysMsg) {
	        type = sysMsg.type;
	        sysMsgUnread[type] = (sysMsgUnread[type] || 0) + delta;
	    });
	    sysMsgUnread = SystemMessage.completeUnread(sysMsgUnread);
	    // 更新后存起来
	    self.sysMsgUnread = sysMsgUnread;
	    // 如果落后, 那么不能存储未读数
	    if (db.enable && !sysMsgs.backward) {
	        return db.updateSysMsgUnread(sysMsgUnread);
	    } else {
	        return Promise.resolve(sysMsgUnread);
	    }
	};

	IMProtocolFn.onUpdateSysMsgUnread = function(sysMsgUnread) {
	    var self = this;
	    setTimeout(function() {
	        logger.info('on update sysMsg unread', sysMsgUnread);
	        self.options.onupdatesysmsgunread(sysMsgUnread);
	    }, 0);
	};

	/*
	 * 更新系统消息, 如果支持数据库, 那么将变更写入数据库
	 * - 更新好友相关的系统消息的状态
	 * - 更新群相关的系统消息的状态
	 * 更新完后, 通知开发者
	 */
	IMProtocolFn.updateSysMsg = function(sysMsg) {
	    var self = this;
	    var db = self.db;
	    var promise;
	    if (db.enable) {
	        promise = db.updateSysMsg(sysMsg);
	    } else {
	        promise = Promise.resolve(sysMsg);
	    }
	    promise.then(function(sysMsg) {
	        self.onUpdateSysMsg(sysMsg);
	    });
	};

	IMProtocolFn.onUpdateSysMsg = function(sysMsgs) {
	    var self = this;
	    setTimeout(function() {
	        if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
	        sysMsgs.forEach(function(sysMsg) {
	            logger.info('on update sysMsg', sysMsg);
	            self.options.onupdatesysmsg(sysMsg);
	        });
	    }, 0);
	};


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var undef = util.undef;
	var notundef = util.notundef;
	var parser = __webpack_require__(49).getInstance('IM');
	var team = __webpack_require__(104);
	var TeamMember = __webpack_require__(87);

	/**
	 * 系统通知类型
	 * 
	 * - `'addFriend'`
	 *     - {@link NIM#addFriend|直接加某个用户为好友}后, 对方不需要确认, 直接成为当前登录用户的好友。
	 *     - 对方会收到一条类型为`'addFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号。
	 * - `'applyFriend'`
	 *     - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
	 *         - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
	 *         - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
	 * - `'passFriendApply'`
	 *     - 见 `'applyFriend'`
	 * - `'rejectFriendApply'`
	 *     - 见 `'applyFriend'`
	 * - `'deleteFriend'`
	 *     - {@link NIM#deleteFriend|删除好友}后, 被删除的人会收到一条类型为`'deleteFriend'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为删除方的帐号, `to`字段的值为被删除方的账号。
	 * - `'teamInvite'`
	 *     - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
	 *         - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
	 *         - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
	 * - `'rejectTeamInvite'`
	 *     - 见`'teamInvite'`
	 * - `'applyTeam'`
	 *     - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
	 *         - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
	 *         - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
	 * - `'rejectTeamApply'`
	 *     - 见`'applyTeam'`
	 * - `'custom'`
	 *     - 自定义系统通知
	 * 
	 * @memberOf SystemMessage
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeMap = {
	    customP2p: 100,
	    customTeam: 101
	};
	var typeReverseMap = {
	    0: 'applyTeam',
	    1: 'rejectTeamApply',
	    2: 'teamInvite',
	    3: 'rejectTeamInvite',
	    5: 'friendRequest',
	    6: 'deleteFriend',
	    // 自定义系统通知
	    100: 'customP2p',
	    101: 'customTeam',
	    // 云商服自定义系统通知, 直接复用100
	    102: 'customP2p'
	};
	var friendRequestReverseMap = {
	    1: 'addFriend',
	    2: 'applyFriend',
	    3: 'passFriendApply',
	    4: 'rejectFriendApply'
	};

	var categoryTeam = 'team';
	var categoryFriend = 'friend';
	var type2category = {
	    applyTeam: categoryTeam,
	    rejectTeamApply: categoryTeam,
	    teamInvite: categoryTeam,
	    rejectTeamInvite: categoryTeam,
	    addFriend: categoryFriend,
	    applyFriend: categoryFriend,
	    passFriendApply: categoryFriend,
	    rejectFriendApply: categoryFriend,
	    deleteFriend: categoryFriend
	};

	/**
	 * 内建系统通知的种类
	 * - `'team'`
	 * - `'friend'`
	 * 
	 * @memberOf SystemMessage
	 * @name category
	 * @readOnly
	 * @enum {String}
	 */

	/**
	 * 内建系统通知的状态
	 * - `'init'`: 未处理状态
	 * - `'passed'`: 已通过
	 * - `'rejected'`: 已拒绝
	 * - `'error'`: 错误
	 * 
	 * @memberOf SystemMessage
	 * @name state
	 * @readOnly
	 * @enum {String}
	 */

	/**
	 * 系统通知
	 *
	 * 系统通知分为两种
	 * - 内建系统通知
	 *     - 目前所有的内建系统通知都是与高级群相关的通知, 某些群操作后相关的群成员会收到相应的系统通知。
	 *     - 内建系统通知与{@link IMMessage.type|群通知消息}的区别是系统通知是发给单人的通知, 群通知消息是发给所有群成员的消息。
	 * - 自定义系统通知
	 *     - 开发者可以向其他用户或群{@link NIM#sendCustomSysMsg|发送自定义系统通知}
	 *     - 自定义系统通知和自定义消息的区别如下
	 *         - 自定义消息属于{@link IMMessage|消息}, 会存储在云信的消息数据库中, 需要跟其他{@link IMMessage|消息}一同展现给用户。
	 *         - 自定义系统通知属于{@link SystemMessage|系统通知}, 用于第三方通知自己, 不会存储在云信的数据库中, SDK不会解析这些通知, SDK仅仅负责传递这些通知。
	 * - 请参考{@link NIM|初始化SDK}时传入的`onofflinesysmsgs`、`onofflinecustomsysmsgs`、`onsysmsg`、`oncustomsysmsg`等回调。
	 * 
	 * @constructor
	 * @property {Number}           time                    时间戳
	 * @property {String}           [type]                  {@link SystemMessage.type|系统通知类型}
	 * @property {String}           from                    系统通知的来源, 账号或者群ID
	 * @property {String}           to                      系统通知的目标, 账号或者群ID
	 * @property {String}           [idServer]              内建系统通知的 idServer
	 * @property {Boolean}          [read]                  内建系统通知是否已读
	 * @property {String}           [category]              {@link SystemMessage.category|内建系统通知的种类}
	 * @property {String}           [state]                 内建系统通知的{@link SystemMessage|state}
	 * @property {NIMError}         [error]                 内建系统通知的{@link SystemMessage.state|state} 为 `'error'` 时, 此字段包含错误的信息
	 * @property {String}           [localCustom]           内建系统通知的本地自定义扩展字段
	 * - 在{@link support.db|支持数据库}时可以调用{@Link NIM#updateLocalSysMsg|更新本地系统通知}来更新此字段, 此字段只会被更新到本地数据库, 不会被更新到服务器上
	 * @property {String}           [ps]                    内建系统通知的附言
	 * @property {Object}           [attach]                内建系统通知的附加信息, 参考{@link SystemMessage.type|系统通知类型}来查看不同类型的系统通知对应的附加信息
	 * @property {String}           [scene]                 自定义系系统通知的场景, 参考{@link IMMessage.scene|消息场景}
	 * @property {String}           [content]               自定义系统通知的内容
	 * @property {String}           [apnsText]              自定义系统通知的推送文案, 仅对接收方为iOS设备有效
	 * @property {String}           [pushPayload]           自定义系统通知的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @property {Boolean}          [sendToOnlineUsersOnly] 自定义系统通知是否只发送给在线用户。
	 * - `true`时只发送给在线用户, 适合发送即时通知, 比如正在输入。
	 * - `false`时假如目标用户或群不在线, 会在其上线后推送过去。
	 * - 该参数只对点对点自定义系统通知有效, 对群自定义系统通知无效, 群自定义系统通知只会发给在线的群成员, 不会存离线。
	 * @property {Boolean}          cc                      自定义系统通知是否抄送
	 * @property {Boolean}          isPushable              是否需要推送
	 * @property {Boolean}          needPushNick            是否需要推送昵称
	 */
	function SystemMessage(options) {
	    var self = this;
	    util.verifyOptions(options, 'type to');
	    util.verifyParamValid('type', options.type, SystemMessage.validTypes);
	    if (options.type.indexOf('custom') !== -1) {
	        util.verifyOptions(options, 'content');
	        self.attach = options.content;
	        if (notundef(options.apnsText)) { self.apnsText = '' + options.apnsText; }
	        if (notundef(options.pushPayload)) { self.pushPayload = '' + options.pushPayload; }
	        // 开关
	        if (notundef(options.sendToOnlineUsersOnly)) { self.sendToOnlineUsersOnly = !!options.sendToOnlineUsersOnly ? 0 : 1; }
	        if (notundef(options.cc)) { self.cc = !!options.cc ? 1 : 0; }
	        if (notundef(options.isPushable)) { self.isPushable = options.isPushable ? 1 : 0; }
	        if (notundef(options.isUnreadable)) { self.isUnreadable = options.isUnreadable ? 1 : 0; }
	        if (notundef(options.needPushNick)) { self.needPushNick = options.needPushNick ? 1 : 0; }
	    }
	    self.time = +new Date();
	    self.to = options.to;
	    self.type = typeMap[options.type];
	    self.idClient = util.guid();
	}

	SystemMessage.validTypes = Object.keys(typeMap).concat(Object.keys(type2category));
	SystemMessage.validCategories = ['team', 'friend'];

	SystemMessage.isCustom = function(sysMsg) {
	    return sysMsg.type === 'custom';
	};

	SystemMessage.reverse = function(sysMsg) {
	    var obj = {
	        time: +sysMsg.time,
	        to: sysMsg.to,
	        type: typeReverseMap[sysMsg.type]
	    };
	    
	    if (notundef(sysMsg.from)) { obj.from = sysMsg.from; }
	    if (notundef(sysMsg.idServer)) { obj.idServer = '' + sysMsg.idServer; }
	    if (notundef(sysMsg.idClient)) { obj.idClient = sysMsg.idClient; }
	    if (notundef(sysMsg.ps)) { obj.ps = sysMsg.ps; }

	    // 内建系统通知, attach里面是额外数据
	    sysMsg.attach = !!sysMsg.attach ? ''+sysMsg.attach : '';
	    if (obj.type.indexOf('custom') === -1) {
	        if (!!sysMsg.attach) {
	            obj.attach = {};
	            var attach = JSON.parse(sysMsg.attach);
	            if (notundef(attach.vt)) {
	                // 好友系统请求
	                obj.type = friendRequestReverseMap[attach.vt];
	                delete obj.attach;
	            } else {
	                // 群系统通知
	                if (notundef(attach.tinfo)) {
	                    obj.attach.team = team.reverse(parser.unserialize(attach.tinfo, 'team'));
	                }
	                if (notundef(attach.tlist)) {
	                    obj.attach.member = TeamMember.reverse(parser.unserialize(attach.tlist, 'teamMember'));
	                }
	            }
	        }
	        obj.category = type2category[obj.type];
	        obj.read = false;
	        obj.state = 'init';
	    // 自定义的系统通知
	    } else {
	        if (obj.type === 'customTeam') {
	            obj.to = +obj.to;
	        }
	        obj.content = sysMsg.attach;
	        if (notundef(sysMsg.apnsText)) { obj.apnsText = sysMsg.apnsText; }
	        if (notundef(sysMsg.pushPayload)) { obj.pushPayload = sysMsg.pushPayload; }
	        // 开关
	        util.merge(obj, {
	            sendToOnlineUsersOnly: undef(sysMsg.sendToOnlineUsersOnly) || +sysMsg.sendToOnlineUsersOnly === 0,
	            cc: undef(sysMsg.cc) || +sysMsg.cc === 1,
	            isPushable: undef(sysMsg.isPushable) || +sysMsg.isPushable === 1,
	            isUnreadable: undef(sysMsg.isUnreadable) || +sysMsg.isUnreadable === 1,
	            needPushNick: notundef(sysMsg.needPushNick) && +sysMsg.needPushNick === 1
	        });
	        // 设置 scene
	        obj.scene = obj.type.slice(6).toLowerCase();
	        // 最终展示给用户的类型就是`'custome'`
	        obj.type = 'custom';
	    }

	    // 开关
	    if (notundef(sysMsg.cc)) { obj.cc = (+sysMsg.cc === 1); }
	    
	    // SDK 自己加的属性
	    obj.status = sysMsg.status || 'success';
	    if (notundef(sysMsg.filter)) { obj.filter = sysMsg.filter; }

	    return obj;
	};

	SystemMessage.completeUnread = function(sysMsgUnread) {
	    delete sysMsgUnread[categoryTeam];
	    delete sysMsgUnread[categoryFriend];
	    var category;
	    Object.keys(type2category).forEach(function(type) {
	        sysMsgUnread[type] = sysMsgUnread[type] || 0;
	        if (sysMsgUnread[type] < 0) {
	            sysMsgUnread[type] = 0;
	        }
	        category = type2category[type];
	        sysMsgUnread[category] = sysMsgUnread[category] || 0;
	        sysMsgUnread[category] = sysMsgUnread[category] + sysMsgUnread[type];
	    });
	    sysMsgUnread.total = sysMsgUnread[categoryTeam] + sysMsgUnread[categoryFriend];
	    return sysMsgUnread;
	};

	module.exports = SystemMessage;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;
	var util = __webpack_require__(10);
	var logger = __webpack_require__(40);
	var Session = __webpack_require__(109);

	IMProtocolFn.onDeleteSessions = function(packet) {
	    packet.obj = packet.obj.sessions.map(function(session) {
	        return Session.parse(session);
	    });
	};

	IMProtocolFn.onUpdateSession = function(session) {
	    logger.info('on update session', session.id, session);
	    // 此字段有可能被用户更新了, 所以去掉
	    delete session.hasMoreLocalMsgs;
	    var self = this;
	    setTimeout(function() {
	        self.options.onupdatesession(session);
	    }, 0);
	};

	/*
	 * 设置当前会话, 并清空它的未读数
	 */
	IMProtocolFn.setCurrSession = function(sessionId) {
	    var self = this;
	    sessionId = '' + sessionId;
	    self.currSessionId = sessionId;
	    self.resetSessionUnread(sessionId);
	    logger.warn('set curr session', sessionId);
	};

	/*
	 * 清空某个回话未读数,
	 * - 如果没有从数据源找到该会话对象, 那么直接返回
	 * - 如果找到对应的会话对象, 那么清空其未读数
	 */
	IMProtocolFn.resetSessionUnread = function(sessionId) {
	    sessionId = '' + sessionId;
	    var self = this;
	    var db = self.db;
	    var session = self.getSessionFromDataSource(sessionId);
	    if (!session) {
	        logger.warn('reset session unread, no', sessionId);
	        return;
	    }
	    if (db.enable) {
	        db.resetSessionUnread(sessionId).then(function() {
	            updateSession();
	        });
	    } else {
	        updateSession();
	    }
	    function updateSession() {
	        session = {
	            id: sessionId,
	            unread: 0
	        };
	        self.onUpdateSession(session);
	    }
	};

	IMProtocolFn.getSessionFromDataSource = function(sessionId) {
	    var dataSource = this.options.dataSource;
	    if (!!dataSource) {
	        if (util.isFunction(dataSource.getSession)) {
	            return dataSource.getSession(sessionId);
	        }
	    }
	};


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;

	IMProtocolFn.processChatroom = function(packet) {
	    var self = this;
	    switch (packet.cmd) {
	    case 'getChatroomAddress':
	        self.onChatroomAddress(packet);
	        break;
	    }
	};

	IMProtocolFn.onChatroomAddress = function(packet) {
	    if (!packet.error) {
	        packet.obj.address = packet.content.address;
	    }
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var IMProtocolFn = __webpack_require__(80).fn;

	/**
	 * 目前用于云商服的特殊协议, 服务器端会拦截相关的消息, 然后将这些消息转发到第三方服务器上
	 * 第三方服务器进行处理后, 可以选择回传给服务器处理后的消息（也有可能是重新生成的新的消息）, 服务器会下发这些消息
	 */
	IMProtocolFn.processFilter = function(packet) {
	    // filter表示此消息是过滤消息, 目前这个字段只用于云商服, 不用在文档中列出
	    var self = this;
	    switch (packet.cmd) {
	    // 发送过滤消息
	    case 'sendFilterMsg':
	        self.onSendMsg(packet, true);
	        break;
	    // 过滤消息通知
	    case 'filterMsg':
	        self.onMsg(packet, true);
	        break;
	    // 过滤系统通知通知
	    case 'filterSysMsg':
	        self.onSysMsg(packet, true);
	        break;
	    // 发送过滤自定义系统通知
	    case 'sendFilterCustomSysMsg':
	        self.onSendSysMsg(packet, true);
	        break;
	    }
	};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);

	var Index = function(options) {
	    this.account = options.account;
	};

	var pro = Index.prototype;

	var Message = pro.Message = __webpack_require__(116);
	var TextMessage = pro.TextMessage = __webpack_require__(117);
	var FileMessage = pro.FileMessage = __webpack_require__(118);
	var GeoMessage = pro.GeoMessage = __webpack_require__(122);
	var NotificationMessage = pro.NotificationMessage = __webpack_require__(123);
	var TipMessage = pro.TipMessage = __webpack_require__(124);
	var CustomMessage = pro.CustomMessage = __webpack_require__(125);

	pro.validScenes = Message.validScenes;
	pro.validTypes = Message.validTypes;

	pro.reverse = function(msg) {
	    var obj;
	    var type = Message.getType(msg);
	    switch (type) {
	    case 'text':
	        obj = TextMessage.reverse(msg);
	        break;
	    case 'image':
	    case 'audio':
	    case 'video':
	    case 'file':
	        obj = FileMessage.reverse(msg);
	        break;
	    case 'geo':
	        obj = GeoMessage.reverse(msg);
	        break;
	    case 'notification':
	        obj = NotificationMessage.reverse(msg);
	        break;
	    case 'tip':
	        obj = TipMessage.reverse(msg);
	        break;
	    case 'custom':
	        obj = CustomMessage.reverse(msg);
	        break;
	    default:
	        obj = Message.reverse(msg);
	        break;
	    }
	    Message.setExtra(obj, this.account);
	    return obj;
	};

	pro.reverseMsgs = function(msgs, options) {
	    var self = this;
	    var modifyObj,
	        mapper;
	    return msgs.map(function(msg) {
	        msg = self.reverse(msg);
	        if (options) {
	            modifyObj = options.modifyObj;
	            if (modifyObj) {
	                msg = util.merge(msg, modifyObj);
	            }
	            mapper = options.mapper;
	            if (util.isFunction(mapper)) {
	                msg = mapper(msg);
	            }
	        }
	        return msg;
	    });
	};

	module.exports = Index;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var undef = util.undef;
	var notundef = util.notundef;
	var loginPort = __webpack_require__(46);
	var BaseMessage = __webpack_require__(62);

	/**
	 * 场景
	 *
	 * - `'p2p'` (单人聊天)
	 * - `'team'` (群聊)
	 * 
	 * @memberOf IMMessage
	 * @name scene
	 * @readOnly
	 * @enum {String}
	 */
	var sceneMap = {
	    // 单人聊天
	    p2p: 0,
	    // 群聊
	    team: 1
	};
	var sceneReverseMap = {
	    0: 'p2p',
	    1: 'team'
	};
	var validScenes = Object.keys(sceneMap);

	/**
	 * 消息类型
	 * 
	 * - `'text'` (文本)
	 * - `'image'` (图片)
	 * - `'audio'` (音频)
	 * - `'video'` (视频)
	 * - `'file'` (文件)
	 * - `'geo'` (地理位置)
	 * - `'custom'` (自定义消息)
	 * - `'notification'` (群通知消息)
	 *     - 某些群操作后所有群成员会收到一条相应的群通知消息, 详细介绍请参考{@link IMMessage.attach.type|群通知消息的类型}
	 * 
	 * @memberOf IMMessage
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeMap = BaseMessage.typeMap;
	var validTypes = BaseMessage.validTypes;

	/**
	 * IM 消息
	 * 
	 * @constructor
	 * @name IMMessage
	 * @property {String}   scene           {@link IMMessage.scene|场景}
	 * @property {String}   from            消息发送方, 帐号
	 * @property {String}   fromNick        消息发送方的昵称
	 * @property {String}   fromClientType  发送方的{@link LoginPort.type|设备类型}
	 * @property {String}   fromDeviceId    发送端设备id
	 * @property {String}   to              消息接收方, 帐号或群id
	 * @property {Number}   time            时间戳
	 * @property {Number}   userUpdateTime  发送方信息更新时间
	 * @property {String}   type            {@link IMMessage.type|消息类型}
	 * @property {String}   sessionId       消息所属的{@link Session|会话}的ID
	 * @property {String}   target          聊天对象, 账号或者群id
	 * @property {String}   flow            消息的流向
	 * - 'in'表示此消息是收到的消息
	 * - 'out'表示此消息是发出的消息
	 * @property {String}   status          消息发送状态
	 * - `'sending'` 发送中
	 * - `'success'` 发送成功
	 * - `'fail'` 发送失败
	 * @property {String}   [text]          文本消息的文本内容, 请参考{@link NIM#sendText|发送文本消息}
	 * @property {Object}   [file]          文件消息的文件对象, 具体字段请参考{@link Image|图片对象}、{@link Audio|音频对象}、{@link Video|视频对象}和{@link File|文件对象}, 请参考{@link NIM#sendFile|发送文件消息}
	 * @property {Object}   [geo]           地理位置消息的{@link Geo|地理位置对象}, 请参考{@link NIM#sendGeo|发送地理位置消息}
	 * @property {String}   [content]       自定义消息的消息内容, 开发者可以自行扩展, 建议封装成JSON格式字符串, 请参考{@link NIM#sendCustomMsg|发送自定义消息}
	 * @property {Object}   [attach]        {@link IMMessage.type|群通知消息}的附加信息, 
	 *                                      参考{@link IMMessage.attach.type|群通知消息的类型}来查看不同类型的群通知消息对应的附加信息
	 * @property {String}   idClient        SDK生成的消息id, 在发送消息之后会返回给开发者, 开发者可以在发送消息的结果回调里面根据这个ID来判断相应消息的发送状态, 到底是发送成功了还是发送失败了, 然后根据此状态来更新页面的UI。如果发送失败, 那么可以重新发送此消息
	 * @property {String}   [idServer]      服务器用于区分消息用的ID, 用于{@link NIM#getHistoryMsgs|获取历史消息}和{@link NIM#searchHistoryMsgs|获取包含关键词的历史消息}, 此字段可能没有, 所以开发者应该使用`idClient`来唯一标识消息
	 * @property {Boolean}  isMuted         该消息在接收方是否应该被静音
	 * @property {Boolean}  resend          是否是重发的消息
	 * @property {String}   [custom]        扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @property {String}   [pushContent]   自定义推送文案
	 * @property {String}   [pushPayload]   自定义的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @property {String}   [localCustom]   本地自定义扩展字段
	 * - 在{@link support.db|支持数据库}时可以调用{@Link NIM#updateLocalMsg|更新本地消息}来更新此字段, 此字段只会被更新到本地数据库, 不会被更新到服务器上
	 * @property {Boolean}  isHistoryable   是否存储云端历史
	 * @property {Boolean}  isRoamingable   是否支持漫游
	 * @property {Boolean}  isSyncable      是否支持发送者多端同步
	 * @property {Boolean}  cc              是否支持抄送
	 * @property {Boolean}  isPushable      是否需要推送
	 * @property {Boolean}  isOfflinable    是否要存离线
	 * @property {Boolean}  isUnreadable    是否计入消息未读数
	 * @property {Boolean}  needPushNick    是否需要推送昵称
	 */
	function Message(options){
	    util.verifyOptions(options, 'scene to type');
	    util.verifyParamValid('scene', options.scene, validScenes);
	    var self = this;
	    self.scene = sceneMap[options.scene];
	    self.to = '' + options.to;
	    self.type = typeMap[options.type];
	    self.resend = !!options.resend ? 1 : 0;
	    // 如果不是重发, 那么生成idClient；如果是重发, 那么由开发者传入idClient
	    if (!options.resend) {
	        self.idClient = util.guid();
	    } else {
	        util.verifyOptions(options, 'idClient');
	        self.idClient = options.idClient;
	    }
	    if (notundef(options.custom)) { self.custom = '' + options.custom; }
	    if (notundef(options.pushContent)) { self.pushContent = '' + options.pushContent; }
	    if (notundef(options.pushPayload)) { self.pushPayload = '' + options.pushPayload; }
	    // 开关
	    if (notundef(options.isHistoryable)) { self.isHistoryable = options.isHistoryable ? 1 : 0; }
	    if (notundef(options.isRoamingable)) { self.isRoamingable = options.isRoamingable ? 1 : 0; }
	    if (notundef(options.isSyncable)) { self.isSyncable = options.isSyncable ? 1 : 0; }
	    if (notundef(options.cc)) { self.cc = !!options.cc ? 1 : 0; }
	    if (notundef(options.isPushable)) { self.isPushable = options.isPushable ? 1 : 0; }
	    if (notundef(options.isOfflinable)) { self.isOfflinable = options.isOfflinable ? 1 : 0; }
	    if (notundef(options.isUnreadable)) { self.isUnreadable = options.isUnreadable ? 1 : 0; }
	    if (notundef(options.needPushNick)) { self.needPushNick = options.needPushNick ? 1 : 0; }
	}

	Message.prototype.getScene = function() {
	    return sceneReverseMap[this.scene];
	};

	Message.getScene = function(msg) {
	    var scene = msg.scene;
	    return sceneReverseMap[scene] || scene;
	};

	Message.getType = BaseMessage.getType;

	Message.reverse = function(msg) {
	    var scene = sceneReverseMap[msg.scene];
	    var obj = {
	        scene: scene || msg.scene,
	        from: msg.from,
	        fromNick: msg.fromNick,
	        fromClientType: loginPort.reverseType(msg.fromClientType),
	        fromDeviceId: msg.fromDeviceId,
	        // to 为第三方账号或者群ID, 强制转为字符串
	        to: '' + msg.to,
	        time: +msg.time,
	        type: Message.getType(msg),
	        isHistoryable: undef(msg.isHistoryable) || +msg.isHistoryable === 1,
	        isRoamingable: undef(msg.isRoamingable) || +msg.isRoamingable === 1,
	        isSyncable: undef(msg.isSyncable) || +msg.isSyncable === 1,
	        cc: undef(msg.cc) || +msg.cc === 1,
	        isPushable: undef(msg.isPushable) || +msg.isPushable === 1,
	        isOfflinable: undef(msg.isOfflinable) || +msg.isOfflinable === 1,
	        isUnreadable: undef(msg.isUnreadable) || +msg.isUnreadable === 1,
	        needPushNick: undef(msg.needPushNick) || +msg.needPushNick === 1
	    };

	    // 只有消息接收者才用处理字段 isMuted
	    if (notundef(msg.isMuted)) { obj.isMuted = +msg.isMuted === 1; }
	    if (notundef(msg.resend)) { obj.resend = +msg.resend === 1; }
	    if (notundef(msg.idClient)) { obj.idClient = msg.idClient; }
	    // 漫游消息和离线消息没有 idServer
	    if (notundef(msg.idServer)) { obj.idServer = '' + msg.idServer; }
	    if (notundef(msg.userUpdateTime)) { obj.userUpdateTime = +msg.userUpdateTime; }
	    if (notundef(msg.custom)) { obj.custom = msg.custom; }
	    if (notundef(msg.pushContent)) { obj.pushContent = msg.pushContent; }
	    if (notundef(msg.pushPayload)) { obj.pushPayload = msg.pushPayload; }

	    // SDK 自己加的属性
	    obj.status = msg.status || 'success';
	    if (notundef(msg.filter)) { obj.filter = msg.filter; }
	    return obj;
	};

	Message.setExtra = function(obj, account) {
	    obj.target = Message.getMsgTarget(obj, account);
	    obj.sessionId = obj.scene + '-' + obj.target;
	    BaseMessage.setFlow(obj, account);
	};

	// 获取聊天对象
	Message.getMsgTarget = function(msg, account) {
	    if (msg.scene === 'p2p') {
	        return msg.to === account ? msg.from: msg.to;
	    } else if (msg.scene === 'team') {
	        return msg.to;
	    }
	};

	// 根据 idClient 去重
	Message.deduplication = function(msgs) {
	    var set = {},
	        array = [],
	        idClient;
	    msgs.forEach(function(msg) {
	        idClient = msg.idClient;
	        if (!set[idClient]) {
	            set[idClient] = true;
	            array.push(msg);
	        }
	    });
	    return array;
	};

	/**
	 * 获取数组中的最后一条消息（时间戳最大的）
	 * @private
	 * @param  {Object[]} msgs  消息数组
	 * @return {Object}         最后一条消息
	 */
	Message.getLastMsg = function(msgs) {
	    var msg1 = msgs[0] || {},
	        msg2 = msgs[1] || {},
	        timetag1 = msg1.time || 0,
	        timetag2 = msg2.time || 0,
	        msg = msg1;
	    if (timetag1 < timetag2) {
	        msg = msgs[msgs.length-1];
	    }
	    return msg;
	};

	Message.getMaxTimetag = function(msgs) {
	    return Message.getLastMsg(msgs).time;
	};

	Message.validScenes = validScenes;
	Message.validTypes = validTypes;

	module.exports = Message;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(116);
	var util = __webpack_require__(10);

	function TextMessage(options) {
	    util.verifyOptions(options, 'text');
	    options.type = 'text';
	    Message.call(this, options);
	    this.body = options.text;
	}
	TextMessage.prototype = Object.create(Message.prototype);

	TextMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    obj.text = msg.body;
	    return obj;
	};

	module.exports = TextMessage;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(116);
	var util = __webpack_require__(10);

	function FileMessage(options) {
	    if (util.notundef(options.type)) {
	        util.verifyFileType(options.type);
	    } else {
	        options.type = 'file';
	    }
	    util.verifyOptions(options, 'file');
	    util.verifyOptions(options.file, 'url ext size md5', true, 'file.');
	    switch (options.type) {
	    case 'image':
	        ImageMessage.verifyFile(options.file);
	        break;
	    case 'audio':
	        AudioMessage.verifyFile(options.file);
	        break;
	    case 'video':
	        VideoMessage.verifyFile(options.file);
	        break;
	    default:
	        break;
	    }
	    Message.call(this, options);
	    this.attach = JSON.stringify(options.file);
	}
	FileMessage.prototype = Object.create(Message.prototype);

	FileMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    msg.attach = !!msg.attach ? ''+msg.attach : '';
	    obj.file = !!msg.attach ? JSON.parse(msg.attach) : {};
	    // 如果是音频, 转成mp3
	    if (obj.type === 'audio') {
	        obj.file.mp3Url = obj.file.url + '?audioTrans&type=mp3';
	    }
	    return obj;
	};

	/**
	 * 文件对象
	 * 
	 * 当{@link NIM#sendFile|发送文件消息}或收到文件消息时, {@link Message|消息对象}的`file`字段代表文件对象, 包含以下属性: 
	 * 
	 * @constructor
	 * @name File
	 * @property {String} name 名字
	 * @property {Number} size 大小, 单位byte
	 * @property {String} md5  md5
	 * @property {String} url  url
	 * @property {String} ext  扩展名
	 * @see {@link Image|图片对象}
	 * @see {@link Audio|音频对象}
	 * @see {@link Video|视频对象}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link Geo|地理位置对象}
	 */

	module.exports = FileMessage;
	var ImageMessage = __webpack_require__(119);
	var AudioMessage = __webpack_require__(120);
	var VideoMessage = __webpack_require__(121);


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var FileMessage = __webpack_require__(118);

	function ImageMessage() {}
	ImageMessage.prototype = Object.create(FileMessage.prototype);

	ImageMessage.verifyFile = function(file) {
	    util.verifyOptions(file, 'w h', true, 'file.');
	};

	/**
	 * 图片对象
	 * 
	 * 当{@link NIM#sendFile|发送图片消息}或收到图片消息时, {@link Message|消息对象}的`file`字段代表图片对象, 包含以下属性: 
	 *
	 * @constructor
	 * @name Image
	 * @property {String} name 名字
	 * @property {Number} size 大小, 单位byte
	 * @property {String} md5  md5
	 * @property {String} url  url
	 * @property {String} ext  扩展名
	 * @property {String} w    宽, 单位px
	 * @property {String} h    高, 单位px
	 * @see {@link Audio|音频对象}
	 * @see {@link Video|视频对象}
	 * @see {@link File|文件对象}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link Geo|地理位置对象}
	 */

	module.exports = ImageMessage;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var FileMessage = __webpack_require__(118);
	var util = __webpack_require__(10);

	function AudioMessage() {}
	AudioMessage.prototype = Object.create(FileMessage.prototype);

	AudioMessage.verifyFile = function(file) {
	    util.verifyOptions(file, 'dur', true, 'file.');
	};

	/**
	 * 音频对象
	 * 
	 * 当{@link NIM#sendFile|发送音频消息}或收到音频消息时, {@link Message|消息对象}的`file`字段代表音频对象, 包含以下属性: 
	 * 
	 * @constructor
	 * @name Audio
	 * @property {String} name      名字
	 * @property {Number} size      大小, 单位byte
	 * @property {String} md5       md5
	 * @property {String} url       url
	 * @property {String} mp3Url    实时转成 mp3 流的 url, 此 url 支持的格式有: mp3, wav, aac, wma, wmv, amr, mp2, flac, vorbis, ac3
	 * @property {String} ext       扩展名
	 * @property {Number} dur       长度, 单位ms
	 * @see {@link Image|图片对象}
	 * @see {@link Video|视频对象}
	 * @see {@link File|文件对象}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link Geo|地理位置对象}
	 */

	module.exports = AudioMessage;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var FileMessage = __webpack_require__(118);
	var util = __webpack_require__(10);

	function VideoMessage() {}
	VideoMessage.prototype = Object.create(FileMessage.prototype);

	VideoMessage.verifyFile = function(file) {
	    util.verifyOptions(file, 'dur w h', true, 'file.');
	};

	/**
	 * 视频对象
	 * 
	 * 当{@link NIM#sendFile|发送视频消息}或收到视频消息时, {@link Message|消息对象}的`file`字段代表视频对象, 包含以下属性: 
	 *
	 * @constructor
	 * @name Video
	 * @property {String} name 名字
	 * @property {Number} size 大小, 单位byte
	 * @property {String} md5  md5
	 * @property {String} url  url
	 * @property {String} ext  扩展名
	 * @property {Number} dur  长度, 单位ms
	 * @property {Number} w    宽, 分辨率, 单位px
	 * @property {Number} h    高, 分辨率, 单位px
	 * @see {@link Image|图片对象}
	 * @see {@link Audio|音频对象}
	 * @see {@link File|文件对象}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link Geo|地理位置对象}
	 */

	module.exports = VideoMessage;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(116);
	var util = __webpack_require__(10);

	function GeoMessage(options) {
	    util.verifyOptions(options, 'geo');
	    util.verifyOptions(options.geo, 'lng lat title', true, 'geo.');
	    util.verifyParamType('geo.lng', options.geo.lng, 'number');
	    util.verifyParamType('geo.lat', options.geo.lat, 'number');
	    util.verifyParamType('geo.title', options.geo.title, 'string');
	    Message.call(this, options);
	    this.attach = JSON.stringify(options.geo);
	}

	GeoMessage.prototype = Object.create(Message.prototype);

	GeoMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    msg.attach = !!msg.attach ? ''+msg.attach : '';
	    obj.geo = !!msg.attach ? JSON.parse(msg.attach) : {};
	    return obj;
	};

	/**
	 * 地理位置对象
	 * 
	 * 当{@link NIM#sendFile|发送地理位置消息}或收到地理位置消息时, {@link Message|消息对象}的`file`字段代表地理位置对象, 包含以下属性: 
	 * 
	 * @constructor
	 * @name Geo
	 * @property {Number} lng 经度
	 * @property {Number} lat 纬度
	 * @property {String} title 地址描述
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link Image|图片对象}
	 * @see {@link Audio|音频对象}
	 * @see {@link Video|视频对象}
	 * @see {@link File|文件对象}
	 */

	module.exports = GeoMessage;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* exported notificationTypes */

	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var Message = __webpack_require__(116);
	var parser = __webpack_require__(49).getInstance('IM');
	var team = __webpack_require__(104);
	var User = __webpack_require__(100);

	/**
	 * 群通知消息的类型
	 * 
	 * - 群通知消息是{@link IMMessage|消息}的一种, 请参考{@link IMMessage.type|消息类型}, 某些群操作后所有群成员会收到一条相应的群通知消息
	 * - 群通知消息有一个字段`attach`包含了额外的信息, `attach`有一个字段`type`来标识群通知消息的类型
	 *     - `'updateTeam'` (更新群)
	 *         - {@link NIM#updateTeam|更新群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'updateTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为更新群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为被更新的{@link Team|群信息}。
	 *     - `'addTeamMembers'` (拉人入群)
	 *         - 普通群, {@link NIM#addTeamMembers|拉人入群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|``'addTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为拉人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的[群对象](#群对象), `attach`有一个字段`accounts`的值为被拉的人的帐号列表, `attach`有一个字段`members`的值为被拉的群成员列表。
	 *         - 被邀请的群成员在有人说话后才能看到该{@link Team|群}, 而且会先收到一条类型为{@link IMMessage.attach.type|`'addTeamMembers'`}的{@link IMMessage.type|群通知消息}, 然后会收到其它{@link Message|群消息}。
	 *     - `'removeTeamMembers'` (踢人出群)
	 *         - {@link NIM#removeTeamMembers|踢人出群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为踢人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`accounts`的值为被踢的人的帐号列表。
	 *     - `'acceptTeamInvite'` (接受入群邀请)
	 *         - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
	 *             - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
	 *             - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
	 *     - `'passTeamApply'` (通过入群申请)
	 *         - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
	 *             - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
	 *             - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
	 *     - `'addTeamManagers'` (添加群管理员)
	 *         - {@link NIM#addTeamManagers|添加群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'addTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为添加群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被加为管理员的帐号列表, `attach`有一个字段`members`的值为被加为管理员的群成员列表。
	 *     - `'removeTeamManagers'` (移除群管理员)。
	 *         - {@link NIM#removeTeamManagers|移除群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为移除群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被移除的管理员的帐号列表, `attach`有一个字段`members`的值为被移除管理员的群成员列表。
	 *     - `'leaveTeam'` (主动退群)
	 *         - {@link NIM#leaveTeam|主动退群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'leaveTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为退群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}。
	 *     - `'dismissTeam'` (解散群)
	 *         - {@link NIM#dismissTeam|解散群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'dismissTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段为解散群的人的帐号, `to`字段的值为被对应的群ID。
	 *     - `'transferTeam'` (转让群)
	 *         - {@link NIM#transferTeam|转让群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'transferTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为转让群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`的值为为新群主的帐号, `attach`有一个字段`members`的值为包含新旧群主的群成员列表。
	 * - 如果`attach`有`account`或者`accounts`字段, 那么`attach`的字段`users`包含这些账号对应的用户名片
	 * - 更新群昵称不会收到群通知消息, 所有其它在线的{@link TeamMember|群成员}会收到{@link NIM|初始化SDK}时传入的`onupdateteammember`回调, 请参考{@link NIM#updateInfoInTeam|修改自己的群属性}和{@link NIM#updateNickInTeam|修改别人的群昵称}
	 * 
	 * @memberOf IMMessage
	 * @readOnly
	 * @enum {String}
	 * @alias attach.type
	 */
	var notificationTypes = {};

	var notificationTypeReverseMap = {
	    0: 'addTeamMembers',
	    1: 'removeTeamMembers',
	    2: 'leaveTeam',
	    3: 'updateTeam',
	    4: 'dismissTeam',
	    5: 'passTeamApply',
	    6: 'transferTeam',
	    7: 'addTeamManagers',
	    8: 'removeTeamManagers',
	    9: 'acceptTeamInvite'
	};

	// 群通知消息
	function NotificationMessage() {}

	NotificationMessage.prototype = Object.create(Message.prototype);

	NotificationMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    // 如果是通知, 那么可能会有附加信息, 如果有, 解析之
	    msg.attach = !!msg.attach ? ''+msg.attach : '';
	    if (!!msg.attach) {
	        var attach = JSON.parse(msg.attach);
	        obj.attach = {
	            type: notificationTypeReverseMap[attach.id]
	        };
	        if (notundef(attach.data)) {
	            var data = attach.data;
	            if (notundef(data.tinfo)) {
	                obj.attach.team = team.reverse(parser.unserialize(data.tinfo, 'team'));
	            }
	            if (notundef(data.ids)) {
	                obj.attach.accounts = data.ids;
	            }
	            if (notundef(data.id)) {
	                obj.attach.account = data.id;
	            }
	            if (notundef(data.uinfos)) {
	                obj.attach.users = data.uinfos.map(function(uinfo) {
	                    return User.reverse(parser.unserialize(uinfo, 'user'));
	                });
	            }
	        }
	    } else {
	        obj.attach = {};
	    }
	    return obj;
	};

	module.exports = NotificationMessage;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var CustomMessage = __webpack_require__(125);

	function TipMessage(options) {
	    CustomMessage.call(this, options);
	}

	TipMessage.prototype = Object.create(CustomMessage.prototype);

	TipMessage.reverse = function(msg) {
	    var obj = CustomMessage.reverse(msg);
	    return obj;
	};

	module.exports = TipMessage;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(116);
	var util = __webpack_require__(10);

	/**
	 * 自定义消息
	 */
	function CustomMessage(options) {
	    util.verifyOptions(options, 'content');
	    util.verifyParamType('content', options.content, 'string');
	    Message.call(this, options);
	    this.attach = options.content;
	}

	CustomMessage.prototype = Object.create(Message.prototype);

	CustomMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    if (util.notundef(msg.attach)) {
	        obj.content = msg.attach;
	    }
	    return obj;
	};

	module.exports = CustomMessage;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var isArray = util.isArray;
	var TeamMember = __webpack_require__(87);

	// util util.isArray util.mergeObjArray util.cutObjArray 和 [] 只应该出现一次
	NIMFn.mergeObjArray = function(olds, news, options) {
	    if (!olds) {olds = [];}
	    if (!news) {return olds;}
	    if (!isArray(news)) { news = [news]; }
	    if (!news.length) {return olds;}
	    options = options || {};
	    return util.mergeObjArray(olds, news, options);
	};

	NIMFn.cutObjArray = function(olds, invalids, options) {
	    if (!olds) {return olds;}
	    if (!invalids) {return olds;}
	    if (!isArray(invalids)) { invalids = [invalids]; }
	    if (!invalids.length) {return olds;}
	    options = options || {};
	    return util.cutObjArray(olds, invalids, options);
	};

	// TODO
	NIMFn.mergeLoginPorts = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'deviceId'
	    });
	};

	// TODO
	NIMFn.cutLoginPorts = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids, {
	        keyPath: 'deviceId',
	        sortPath: 'type'
	    });
	};

	/**
	 * 合并关系
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的关系列表
	 * - 合并时按照 `account` 的值去重，按照 `account` 的值正序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     keyPath: 'account'
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并关系
	 *
	 * @method mergeRelations
	 * @memberOf NIM#
	 * 
	 * @param  {Relation[]}             olds    原始关系数组
	 * @param  {Relation|Relation[]}    news    待合并的关系或关系数组
	 * @return {Relation[]}                     合并后的关系数组
	 */
	NIMFn.mergeRelations = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'account'
	    });
	};

	/**
	 * 去除关系
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的关系列表
	 * - 去除时按照 `account` 的值去除
	 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {return olds;}
	 * if (!invalids) {return olds;}
	 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
	 * if (!invalids.length) {return olds;}
	 * var options = {
	 *     keyPath: 'account'
	 * };
	 * NIM.util.cutObjArray(olds, invalids, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除关系
	 *
	 * @method cutRelations
	 * @memberOf NIM#
	 * 
	 * @param  {Relation[]}             olds        原始关系数组
	 * @param  {Relation|Relation[]}    invalids    待去除的关系或关系数组
	 * @return {Relation[]}                         去除后的关系数组
	 */
	NIMFn.cutRelations = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids, {
	        keyPath: 'account'
	    });
	};

	/**
	 * 在关系数组里面根据 `account` 找到对应的关系
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(relations, {
	 *     keyPath: 'account',
	 *     value: account
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个关系
	 *
	 * @method findRelation
	 * @memberOf NIM#
	 * @param  {Relation[]}     relations    关系数组
	 * @param  {String}         account     待查找的关系的 `account`
	 * @return {Relation|null}              对应的关系或者 null
	 */
	NIMFn.findRelation = function(relations, account) {
	    return util.findObjInArray(relations, {
	        keyPath: 'account',
	        value: account
	    });
	};

	/**
	 * 合并好友
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的好友列表
	 * - 合并时按照 `account` 的值去重，按照 `account` 的值正序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     keyPath: 'account'
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并好友
	 *
	 * @method mergeFriends
	 * @memberOf NIM#
	 * 
	 * @param  {Friend[]}           olds    原始好友数组
	 * @param  {Friend|Friend[]}    news    待合并的好友或好友数组
	 * @return {Friend[]}                   合并后的好友数组
	 */
	NIMFn.mergeFriends = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'account'
	    });
	};

	/**
	 * 去除好友
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的好友列表
	 * - 去除时按照 `account` 的值去除
	 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {return olds;}
	 * if (!invalids) {return olds;}
	 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
	 * if (!invalids.length) {return olds;}
	 * var options = {
	 *     keyPath: 'account'
	 * };
	 * NIM.util.cutObjArray(olds, invalids, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除好友
	 *
	 * @method cutFriends
	 * @memberOf NIM#
	 * 
	 * @param  {Friend[]}             olds        原始好友数组
	 * @param  {Friend|Friend[]}    invalids    待去除的好友或好友数组
	 * @return {Friend[]}                         去除后的好友数组
	 */
	NIMFn.cutFriends = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids, {
	        keyPath: 'account'
	    });
	};

	/**
	 * 去除`accounts`对应的好友
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的好友列表
	 * - 去除时按照 `account` 的值去除
	 * - 此方法内部调用 {@link NIM#cutFriends|nim.cutFriends} 来完成实际工作
	 * ```
	 * if (!NIM.util.isArray(accounts)) { accounts = [accounts]; }
	 * var invalids = accounts.map(function(account) {
	 *     return {
	 *         account: account
	 *     };
	 * });
	 * return nim.cutFriends(olds, invalids);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除好友
	 *
	 * @method cutFriendsByAccounts
	 * @memberOf NIM#
	 * 
	 * @param  {Friend[]}           olds        原始好友数组
	 * @param  {Friend|Friend[]}    invalids    待去除的好友或好友数组
	 * @return {Friend[]}                       去除后的好友数组
	 */
	NIMFn.cutFriendsByAccounts = function(olds, accounts) {
	    if (!isArray(accounts)) { accounts = [accounts]; }
	    var invalids = accounts.map(function(account) {
	        return {
	            account: account
	        };
	    });
	    return this.cutFriends(olds, invalids);
	};

	/**
	 * 在好友数组里面根据 `account` 找到对应的好友
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(friends, {
	 *     keyPath: 'account',
	 *     value: account
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个好友
	 *
	 * @method findFriend
	 * @memberOf NIM#
	 * @param  {Friend[]}       friends     好友数组
	 * @param  {String}         account     待查找的好友的 `account`
	 * @return {Friend|null}                对应的好友或者 null
	 */
	NIMFn.findFriend = function(friends, account) {
	    return util.findObjInArray(friends, {
	        keyPath: 'account',
	        value: account
	    });
	};

	/**
	 * 合并名片
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的名片列表
	 * - 合并时按照 `account` 的值去重，按照 `account` 的值正序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     keyPath: 'account'
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并名片
	 *
	 * @method mergeUsers
	 * @memberOf NIM#
	 * 
	 * @param  {User[]}         olds    原始名片数组
	 * @param  {User|User[]}    news    待合并的名片或名片数组
	 * @return {User[]}                 合并后的名片数组
	 */
	NIMFn.mergeUsers = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'account'
	    });
	};

	/**
	 * 在名片数组里面根据 `account` 找到对应的名片
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(users, {
	 *     keyPath: 'account',
	 *     value: account
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个名片
	 *
	 * @method findUser
	 * @memberOf NIM#
	 * @param  {User[]}     users    名片数组
	 * @param  {String}     account  待查找的名片的 `account`
	 * @return {User|null}           对应的名片或者 null
	 */
	NIMFn.findUser = function(users, account) {
	    return util.findObjInArray(users, {
	        keyPath: 'account',
	        value: account
	    });
	};

	/**
	 * 合并群
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的群列表
	 * - 合并时按照 `teamId` 的值去重，按照 `teamId` 的值正序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     keyPath: 'teamId'
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并群
	 *
	 * @method mergeTeams
	 * @memberOf NIM#
	 * 
	 * @param  {Team[]}         olds    原始群数组
	 * @param  {Team|Team[]}    news    待合并的群或群数组
	 * @return {Team[]}                 合并后的群数组
	 */
	NIMFn.mergeTeams = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'teamId'
	    });
	};

	/**
	 * 去除群
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的群列表
	 * - 去除时按照 `teamId` 的值去除
	 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {return olds;}
	 * if (!invalids) {return olds;}
	 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
	 * if (!invalids.length) {return olds;}
	 * var options = {
	 *     keyPath: 'teamId'
	 * };
	 * NIM.util.cutObjArray(olds, invalids, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除群
	 *
	 * @method cutTeams
	 * @memberOf NIM#
	 * 
	 * @param  {Team[]}         olds        原始群数组
	 * @param  {Team|Team[]}    invalids    待去除的群或群数组
	 * @return {Team[]}                     去除后的群数组
	 */
	NIMFn.cutTeams = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids, {
	        keyPath: 'teamId'
	    });
	};

	/**
	 * 在群数组里面根据 `teamId` 找到对应的群
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(teams, {
	 *     keyPath: 'teamId',
	 *     value: teamId
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个群
	 *
	 * @method findTeam
	 * @memberOf NIM#
	 * @param  {Team[]}      teams    群数组
	 * @param  {String}      teamId   待查找的群的 `teamId`
	 * @return {Team|null}            对应的群或者 null
	 */
	NIMFn.findTeam = function(teams, teamId) {
	    return util.findObjInArray(teams, {
	        keyPath: 'teamId',
	        value: teamId
	    });
	};

	NIMFn.assembleTeamOwner = TeamMember.assembleOwner;
	NIMFn.assembleTeamMembers = TeamMember.assembleMembers;
	NIMFn.genTeamMemberId = TeamMember.genId;

	/**
	 * 合并群成员
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的群成员列表
	 * - 合并时按照 `id` 的值去重，按照 `id` 的值正序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并群成员
	 *
	 * @method mergeTeamMembers
	 * @memberOf NIM#
	 * 
	 * @param  {TeamMember[]}               olds    原始群成员数组
	 * @param  {TeamMember|TeamMember[]}    news    待合并的群成员或群成员数组
	 * @return {TeamMember[]}                       合并后的群成员数组
	 */
	NIMFn.mergeTeamMembers = function(olds, news) {
	    // keyPath 默认为 id
	    return this.mergeObjArray(olds, news);
	};

	/**
	 * 去除群成员
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的群成员列表
	 * - 去除时按照 `id` 的值去除
	 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {return olds;}
	 * if (!invalids) {return olds;}
	 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
	 * if (!invalids.length) {return olds;}
	 * var options = {
	 * };
	 * NIM.util.cutObjArray(olds, invalids, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除群成员
	 *
	 * @method cutTeamMembers
	 * @memberOf NIM#
	 * 
	 * @param  {TeamMember[]}               olds        原始群成员数组
	 * @param  {TeamMember|TeamMember[]}    invalids    待去除的群成员或群成员数组
	 * @return {TeamMember[]}                           去除后的群成员数组
	 */
	NIMFn.cutTeamMembers = function(olds, invalids) {
	    // keyPath 默认为 id
	    return this.cutObjArray(olds, invalids);
	};

	/**
	 * 去除`accounts`对应的群成员
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的群成员列表
	 * - 去除时按照 `account` 的值去除
	 * - 此方法内部调用 {@link NIM#cutTeamMembers|nim.cutTeamMembers} 来完成实际工作
	 * ```
	 * if (!NIM.util.isArray(accounts)) { accounts = [accounts]; }
	 * var invalids = TeamMember.assembleMembers({
	 *     teamId: teamId
	 * }, accounts);
	 * return nim.cutTeamMembers(olds, invalids);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除群成员
	 *
	 * @method cutTeamMembersByAccounts
	 * @memberOf NIM#
	 * 
	 * @param  {TeamMember[]}               olds        原始群成员数组
	 * @param  {TeamMember|TeamMember[]}    invalids    待去除的群成员或群成员数组
	 * @return {TeamMember[]}                           去除后的群成员数组
	 */
	NIMFn.cutTeamMembersByAccounts = function(olds, teamId, accounts) {
	    if (!isArray(accounts)) {accounts = [accounts];}
	    var invalids = TeamMember.assembleMembers({
	        teamId: teamId
	    }, accounts);
	    return this.cutTeamMembers(olds, invalids);
	};

	/**
	 * 在群成员数组里面根据 `id` 找到对应的群成员
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(members, {
	 *     keyPath: 'id',
	 *     value: id
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个群成员
	 *
	 * @method findTeamMember
	 * @memberOf NIM#
	 * @param  {TeamMember[]}       members     群成员数组
	 * @param  {String}             id          待查找的群成员的 `id`
	 * @return {TeamMember|null}                对应的群成员或者 null
	 */
	NIMFn.findTeamMember = function(members, id) {
	    return util.findObjInArray(members, {
	        keyPath: 'id',
	        value: id
	    });
	};

	/**
	 * 合并会话
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的会话列表
	 * - 合并时按照 `id` 的值去重，按照 `updateTime` 的值倒序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     sortPath: 'updateTime',
	 *     desc: true
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并会话
	 *
	 * @method mergeSessions
	 * @memberOf NIM#
	 * 
	 * @param  {Session[]}          olds    原始会话数组
	 * @param  {Session|Session[]}  news    待合并的会话或会话数组
	 * @return {Session[]}                  合并后的会话数组
	 */
	NIMFn.mergeSessions = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        sortPath: 'updateTime',
	        desc: true
	    });
	};

	NIMFn.cutSessions = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids);
	};

	NIMFn.cutSessionsByIds = function(olds, ids) {
	    if (!isArray(ids)) {ids = [ids];}
	    var invalids = ids.map(function(id) {
	        return { id: id };
	    });
	    return this.cutSessions(olds, invalids);
	};

	/**
	 * 在会话数组里面根据 `id` 找到对应的会话
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(sessions, {
	 *     keyPath: 'id',
	 *     value: sessionId
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个会话
	 *
	 * @method findSession
	 * @memberOf NIM#
	 * @param  {Session[]}      sessions    会话数组
	 * @param  {String}         sessionId   待查找的会话的 `id`
	 * @return {Session|null}               对应的会话或者 null
	 */
	NIMFn.findSession = function(sessions, sessionId) {
	    return util.findObjInArray(sessions, {
	        keyPath: 'id',
	        value: sessionId
	    });
	};

	/**
	 * 合并消息
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的消息列表
	 * - 合并时按照 `idClient` 的值去重, 不会重新排序, 即新消息会放在数组的最后面
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     keyPath: 'idClient',
	 *     notSort: true
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并消息
	 *
	 * @method mergeMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Message[]}          olds    原始消息数组
	 * @param  {Message|Message[]}  news    待合并的消息或消息数组
	 * @return {Message[]}                  合并后的消息数组
	 */
	NIMFn.mergeMsgs = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'idClient',
	        notSort: true
	    });
	};

	NIMFn.cutMsgs = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids, {
	        keyPath: 'idClient'
	    });
	};

	NIMFn.cutMsgsByIdClients = function(olds, idClients) {
	    if (!isArray(idClients)) {idClients=[idClients];}
	    var invalids = idClients.map(function(idClient) {
	        return {idClient: idClient};
	    });
	    return this.cutMsgs(olds, invalids);
	};

	/**
	 * 在消息数组里面根据 `idClient` 找到对应的消息
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(msgs, {
	 *     keyPath: 'idClient',
	 *     value: idClient
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个消息
	 *
	 * @method findMsg
	 * @memberOf NIM#
	 * @param  {Message[]}      msgs        消息数组
	 * @param  {String}         idClient    待查找的消息的 `idClient`
	 * @return {Message|null}               对应的消息或者 null
	 */
	NIMFn.findMsg = function(msgs, idClient) {
	    return util.findObjInArray(msgs, {
	        keyPath: 'idClient',
	        value: idClient
	    });
	};

	/**
	 * 合并系统通知
	 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的系统通知列表
	 * - 合并时按照 `idServer` 的值去重，按照 `idServer` 的值倒序排序
	 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
	 * ```
	 * if (!olds) {olds = [];}
	 * if (!news) {return olds;}
	 * if (!NIM.util.isArray(news)) { news = [news]; }
	 * if (!news.length) {return olds;}
	 * var options = {
	 *     keyPath: 'idServer',
	 *     desc: true
	 * };
	 * NIM.util.mergeObjArray([], olds, news, options);
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并系统通知
	 *
	 * @method mergeSysMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {SystemMessage[]}                olds    原始系统通知数组
	 * @param  {SystemMessage|SystemMessage[]}  news    待合并的系统通知或系统通知数组
	 * @return {SystemMessage[]}                        合并后的系统通知数组
	 */
	NIMFn.mergeSysMsgs = function(olds, news) {
	    return this.mergeObjArray(olds, news, {
	        keyPath: 'idServer',
	        desc: true
	    });
	};

	NIMFn.cutSysMsgs = function(olds, invalids) {
	    return this.cutObjArray(olds, invalids, {
	        keyPath: 'idServer'
	    });
	};

	NIMFn.cutSysMsgsByIdServers = function(olds, idServers) {
	    if (!isArray(idServers)) {idServers=[idServers];}
	    var invalids = idServers.map(function(idServer) {
	        return {idServer:idServer};
	    });
	    return this.cutSysMsgs(olds, invalids);
	};

	/**
	 * 在系统通知数组里面根据 `idServer` 找到对应的系统通知
	 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
	 * ```
	 * NIM.util.findObjInArray(sysMsgs, {
	 *     keyPath: 'idServer',
	 *     value: idServer
	 * });
	 * ```
	 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个系统通知
	 *
	 * @method findSysMsg
	 * @memberOf NIM#
	 * @param  {SystemMessage[]}    sysMsgs     系统通知数组
	 * @param  {String}             idServer    待查找的系统通知的 `idServer`
	 * @return {SystemMessage|null}             对应的系统通知或者 null
	 */
	NIMFn.findSysMsg = function(sysMsgs, idServer) {
	    return util.findObjInArray(sysMsgs, {
	        keyPath: 'idServer',
	        value: idServer
	    });
	};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);

	/**
	 * 是否连接上服务器
	 * @private
	 * @return {Boolean} 连接状态
	 *
	 * @see {@link NIM#connect|connect}
	 * @see {@link NIM#disconnect|disconnect}
	 *
	 * @example
	 * if (!nim.isConnected()) {
	 *     console.log('未连接');
	 * }
	 */

	/**
	 * 登录 SDK
	 * 
	 * @memberOf NIM#
	 * @method connect
	 * 
	 * @return {Void}
	 *
	 * @see {@link NIM#disconnect|disconnect}
	 *
	 * @example
	 * nim.connect();
	 */

	/**
	 * 登出 SDK
	 * 
	 * @memberOf NIM#
	 * @method disconnect
	 *
	 * @return {Void}
	 *
	 * @see {@link NIM#connect|connect}
	 * 
	 * @example
	 * nim.disconnect();
	 */

	/**
	 * 踢当前用户登录的其它端
	 * 
	 * @method kick
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String[]}   options.deviceIds   要踢掉的端的设备号数组
	 * @param  {done}       options.done        结果回调函数, 成功时会收到被踢掉的设备号数组
	 * @return {Void}
	 *
	 * @example
	 * nim.kick({
	 *     deviceIds: ['device1'],
	 *     done: onKick
	 * });
	 * function onKick(error, obj) {
	 *     console.log('踢其它端' + (!error?'成功':'失败'));
	 *     console.log(error);
	 *     console.log(obj);
	 * }
	 */
	NIMFn.kick = function(options) {
	    util.verifyOptions(options, 'deviceIds');
	    this.processCallback(options);
	    this.sendCmd('kick', { deviceIds: options.deviceIds.slice(0) }, options.callback);
	};


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);

	/**
	 * 加入黑名单/从黑名单移除
	 *
	 * - 此接口可以完成以下两个功能, 通过参数`isAdd`来决定实际的功能
	 *     - `isAdd`为`true`时, 会将`account`{@link NIM#addToBlacklist|加入黑名单}
	 *         - 如果一个用户被加入了黑名单, 那么就不再会收到此用户发送的消息
	 *     - `isAdd`为`false`时, 会将`account`{@link NIM#removeFromBlacklist|从黑名单移除}
	 *         - 如果一个用户被从黑名单移除, 那么会重新收到此用户发送的消息
	 * - 每个功能SDK都提供了相应的独立接口
	 *
	 * @method markInBlacklist
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.account 要加入黑名单/从黑名单移除的账号
	 * @param  {Boolean}    options.isAdd   `true`表示加入黑名单, `false`表示从黑名单移除
	 * @param  {done}       options.done    结果回调函数
	 * @return {Void}
	 * 
	 * @see {@link NIM#addToBlacklist|nim.addToBlacklist}
	 * @see {@link NIM#removeFromBlacklist|nim.removeFromBlacklist}
	 * @see {@link NIM#getRelations|nim.getRelations}
	 *
	 * @example
	 * nim.markInBlacklist({
	 *     account: 'account',
	 *     // `true`表示加入黑名单, `false`表示从黑名单移除
	 *     isAdd: true,
	 *     done: markInBlacklistDone
	 * });
	 * function markInBlacklistDone(error, obj) {
	 *     console.log('将' + obj.account + (isAdd ? '加入黑名单' : '从黑名单移除') + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onMarkInBlacklist(obj);
	 *     }
	 * }
	 */
	NIMFn.markInBlacklist = function(options) {
	    util.verifyOptions(options, 'account isAdd');
	    util.verifyParamType('isAdd', options.isAdd, 'boolean');
	    this.processCallback(options);
	    this.sendCmd('markInBlacklist', {account: options.account, isAdd: options.isAdd}, options.callback);
	};
	/**
	 * 加入黑名单
	 *
	 * - 如果一个用户被加入了黑名单, 那么就不再会收到此用户发送的消息
	 * - SDK内部调用{@link NIM#markInBlacklist|nim.markInBlacklist}来完成实际工作
	 *
	 * @method addToBlacklist
	 * @memberOf NIM#
	 *
	 * @param {Object}  options         配置参数
	 * @param {String}  options.account 要加入黑名单的账号
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#markInBlacklist|nim.markInBlacklist}
	 * @see {@link NIM#removeFromBlacklist|nim.removeFromBlacklist}
	 * @see {@link NIM#getRelations|nim.getRelations}
	 *
	 * @example
	 * nim.addToBlacklist({
	 *     account: 'account',
	 *     done: addToBlacklistDone
	 * });
	 * function addToBlacklistDone(error, obj) {
	 *     console.log('加入黑名单' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         addToBlacklist(obj);
	 *     }
	 * }
	 */
	NIMFn.addToBlacklist = function(options) {
	    options.isAdd = true;
	    this.markInBlacklist(options);
	};
	/**
	 * 从黑名单移除
	 *
	 * - 如果一个用户被从黑名单移除, 那么会重新收到此用户发送的消息
	 * - SDK内部调用{@link NIM#markInBlacklist|nim.markInBlacklist}来完成实际工作
	 *
	 * @method removeFromBlacklist
	 * @memberOf NIM#
	 *
	 * @param {Object} options         配置参数
	 * @param {String} options.account 要从黑名单移除的账号
	 * @param {done}   options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#markInBlacklist|nim.markInBlacklist}
	 * @see {@link NIM#addToBlacklist|nim.addToBlacklist}
	 * @see {@link NIM#getRelations|nim.getRelations}
	 *
	 * @example
	 * nim.removeFromBlacklist({
	 *     account: 'account',
	 *     done: removeFromBlacklistDone
	 * });
	 * function removeFromBlacklistDone(error, obj) {
	 *     console.log('从黑名单移除' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         removeFromBlacklist(obj);
	 *     }
	 * }
	 */
	NIMFn.removeFromBlacklist = function(options) {
	    options.isAdd = false;
	    this.markInBlacklist(options);
	};
	/**
	 * 加入静音列表/从静音列表移除
	 * 
	 * - 此接口可以完成以下两个功能, 通过参数`isAdd`来决定实际的功能
	 *     - `isAdd`为`true`时, 会将`account`{@link NIM#addToMutelist|加入静音列表}
	 *     - `isAdd`为`false`时, 会将`account`{@link NIM#removeFromMutelist|从静音列表移除}
	 * - 每个功能SDK都提供了相应的独立接口
	 *
	 * @method markInMutelist
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.account 要加入静音列表/从静音列表移除的账号
	 * @param  {Boolean}    options.isAdd   `true`表示加入静音列表, `false`表示从静音列表移除
	 * @param  {done}       options.done    结果回调函数
	 * @return {Void}
	 * 
	 * @see {@link NIM#addToMutelist|nim.addToMutelist}
	 * @see {@link NIM#removeFromMutelist|nim.removeFromMutelist}
	 * @see {@link NIM#getRelations|nim.getRelations}
	 *
	 * @example
	 * nim.markInMutelist({
	 *     account: 'account',
	 *     // `true`表示加入静音列表, `false`表示从静音列表移除
	 *     isAdd: 'true',
	 *     done: markInMutelistDone
	 * });
	 * function markInMutelistDone(error, obj) {
	 *     console.log('将' + obj.account + (isAdd ? '加入静音列表' : '从静音列表移除') + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onMarkInMutelist(obj);
	 *     }
	 * }
	 */
	NIMFn.markInMutelist = function(options) {
	    util.verifyOptions(options, 'account');
	    util.verifyParamType('isAdd', options.isAdd, 'boolean');
	    this.processCallback(options);
	    this.sendCmd('markInMutelist', {account: options.account, isAdd: options.isAdd}, options.callback);
	};
	/**
	 * 加入静音列表
	 *
	 * - SDK只负责维护静音列表, 具体要根据静音列表进行的操作由开发者决定
	 * - SDK内部调用{@link NIM#markInMutelist|nim.markInMutelist}来完成实际工作
	 *
	 * @method addToMutelist
	 * @memberOf NIM#
	 *
	 * @param {Object}  options         配置参数
	 * @param {String}  options.account 要加入静音列表的账号
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#markInMutelist|nim.markInMutelist}
	 * @see {@link NIM#removeFromMutelist|nim.removeFromMutelist}
	 * @see {@link NIM#getRelations|nim.getRelations}
	 *
	 * @example
	 * nim.addToMutelist({
	 *     account: 'account',
	 *     done: addToMutelistDone
	 * });
	 * function addToMutelistDone(error, obj) {
	 *     console.log('加入静音列表' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         addToMutelist(obj);
	 *     }
	 * }
	 */
	NIMFn.addToMutelist = function(options) {
	    options.isAdd = true;
	    this.markInMutelist(options);
	};
	/**
	 * 从静音列表移除
	 *
	 * - SDK只负责维护静音列表, 具体要根据静音列表进行的操作由开发者决定
	 * - SDK内部调用{@link NIM#markInMutelist|nim.markInMutelist}来完成实际工作
	 *
	 * @method removeFromMutelist
	 * @memberOf NIM#
	 *
	 * @param {Object} options         配置参数
	 * @param {String} options.account 要从静音列表移除的账号
	 * @param {done}   options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#markInMutelist|nim.markInMutelist}
	 * @see {@link NIM#addToMutelist|nim.addToMutelist}
	 * @see {@link NIM#getRelations|nim.getRelations}
	 *
	 * @example
	 * nim.removeFromMutelist({
	 *     account: 'account',
	 *     done: removeFromMutelistDone
	 * });
	 * function removeFromMutelistDone(error, obj) {
	 *     console.log('从静音列表移除' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         removeFromMutelist(obj);
	 *     }
	 * }
	 */
	NIMFn.removeFromMutelist = function(options) {
	    options.isAdd = false;
	    this.markInMutelist(options);
	};
	/**
	 * 获取黑名单和静音列表
	 *
	 * - 如果开发者在{@link NIM|初始化SDK}的时候设置了`syncRelations`为`false`, 那么就收不到`onblacklist`和`onmutelist`回调, 可以调用此接口来获取黑名单和静音列表。
	 *
	 * @method getRelations
	 * @memberOf NIM#
	 *
	 * @param {Object} options         配置参数
	 * @param {done}   options.done    结果回调函数, 成功时会返回黑名单和静音列表
	 * @return {Void}
	 *
	 * @see {@link NIM#addToBlacklist|nim.addToBlacklist}
	 * @see {@link NIM#removeFromBlacklist|nim.removeFromBlacklist}
	 * @see {@link NIM#markInBlacklist|nim.markInBlacklist}
	 * @see {@link NIM#addToMutelist|nim.addToMutelist}
	 * @see {@link NIM#removeFromMutelist|nim.removeFromMutelist}
	 * @see {@link NIM#markInMutelist|nim.markInMutelist}
	 *
	 * @example
	 * nim.getRelations({
	 *     done: getRelationsDone
	 * });
	 * function getRelationsDone(error, obj) {
	 *     console.log('获取静音列表' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onBlacklist(obj.blacklist);
	 *         onMutelist(obj.mutelist);
	 *     }
	 * }
	 */
	NIMFn.getRelations = function(options) {
	    var self = this;
	    var db = self.db;
	    var timetag = 0;
	    util.verifyOptions(options);
	    self.processCallback(options);
	    if (db.enable) {
	        db.getRelationsTimetag().then(function(t) {
	            timetag = t;
	            getRelationsFromServer();
	        }, getRelationsFromServer);
	    } else {
	        getRelationsFromServer();
	    }
	    function getRelationsFromServer() {
	        self.sendCmd('getRelations', {timetag: timetag, NOTSTORE: 'timetag'}, options.callback);
	    }
	};


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var objs2accounts = util.objs2accounts;
	var logger = __webpack_require__(40);
	var User = __webpack_require__(100);

	/**
	 * 更新我的名片
	 *
	 * @method updateMyInfo
	 * @memberOf NIM#
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.nick    昵称
	 * @param  {String} options.avatar  头像
	 * @param  {String} options.sign    签名
	 * @param  {String} options.gender  {@link User.gender|性别}
	 * @param  {String} options.email   邮箱
	 * @param  {String} options.birth   生日
	 * @param  {String} options.tel     手机号
	 * @param  {String} options.custom  扩展字段
	 * @return {Void}
	 * 
	 * @see {@link NIM#getUser|获取用户名片}
	 * @see {@link NIM#getUsers|获取用户名片数组}
	 * @see {@link NIM#updateMyInfo|更新登录用户的名片}
	 *
	 * @example
	 * nim.updateMyInfo({
	 *     nick: 'newNick',
	 *     avatar: 'http://newAvatar',
	 *     sign: 'newSign',
	 *     gender: 'male',
	 *     email: 'new@email.com',
	 *     birth: '1900-01-01',
	 *     tel: '13523578129',
	 *     custom: '{type: "newCustom", value: "new"}',
	 *     done: updateMyInfoDone
	 * });
	 * function updateMyInfoDone(error, user) {
	 *     console.log('更新登录用户的名片' + (!error?'成功':'失败'), error, user);
	 *     if (!error) {
	 *         onUpdateMyInfo(user);
	 *     }
	 * }
	 */
	NIMFn.updateMyInfo = function(options) {
	    util.verifyOptions(options);
	    this.processCallback(options);
	    options.user = new User(options);
	    // 更新自己的名片不用传 account
	    delete options.user.account;
	    this.sendCmd('updateMyInfo', { user: options.user, single: true }, options.callback);
	};

	/**
	 * 获取我的名片
	 * @private
	 * @param  {Object} options 配置参数
	 * @return {Void}
	 */
	NIMFn.getMyInfo = function(options) {
	    var self = this;
	    options = options || {};
	    options.account = self.account;
	    return self.getUser(options);
	};

	/**
	 * 获取用户名片
	 *
	 * @method getUser
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.account 账号
	 * @param  {Function}   options.done    结果回调函数, 成功时会返回用户名片
	 * @return {Void}
	 *
	 * @see {@link NIM#getUser|获取用户名片}
	 * @see {@link NIM#getUsers|获取用户名片数组}
	 * @see {@link NIM#updateMyInfo|更新登录用户的名片}
	 *
	 * @example
	 * nim.getUser({
	 *     account: 'account',
	 *     done: getUserDone
	 * });
	 * function getUserDone(error, user) {
	 *     console.log('获取用户名片' + (!error?'成功':'失败'), error, obj);
	 *     if (!error && user) {
	 *         onUsers(user);
	 *     }
	 * }
	 */
	NIMFn.getUser = function(options) {
	    var self = this,
	        db = self.db,
	        account;
	    util.verifyOptions(options, 'account');
	    self.processCallback(options);

	    options.cbaop = function(error, obj) {
	        if (!error) {
	            obj = obj[0] || null;
	            log(obj);
	            return obj;
	        }
	    };

	    account = options.account;
	    if (options.sync) {
	        getUserFromServer();
	    } else {
	        if (db.enable) {
	            db.getUser(account).then(function(user) {
	                if (!!user) {
	                    log(user);
	                    options.done(null, user);
	                } else {
	                    getUserFromServer();
	                }
	            }, getUserFromServer);
	        } else {
	            getUserFromServer();
	        }
	    }
	    function getUserFromServer() {
	        self.sendCmd('getUsers', { accounts: [account], single: true }, options.callback);
	    }
	    function log(user) {
	        logger.warn('get user', account, user);
	    }
	};

	/**
	 * 获取用户名片数组
	 *
	 * @method getUsers
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options             配置参数
	 * @param  {String[]}   options.accounts    账号数组
	 * @param  {Function}   options.done        结果回调函数, 成功时会返回用户名片列表
	 * @return {Void}
	 * 
	 * @see {@link NIM#getUser|获取用户名片}
	 * @see {@link NIM#getUsers|获取用户名片数组}
	 * @see {@link NIM#updateMyInfo|更新登录用户的名片}
	 *
	 * @example
	 * nim.getUsers({
	 *     accounts: ['account1', 'account2'],
	 *     done: getUsersDone
	 * });
	 * function getUsersDone(error, users) {
	 *     console.log('获取用户名片数组' + (!error?'成功':'失败'), error, users);
	 *     if (!error && users.length) {
	 *         onUsers(users);
	 *     }
	 * }
	 */
	NIMFn.getUsers = function(options) {
	    var self = this,
	        db = self.db,
	        accounts,
	        usersLocal = [];
	    util.verifyOptions(options, 'accounts');
	    util.verifyParamType('accounts', options.accounts, 'array');
	    self.processCallback(options);

	    options.cbaop = function(error, obj) {
	        if (!error) {
	            obj = obj.concat(usersLocal);
	            log(obj);
	            return obj;
	        }
	    };

	    // 拷贝
	    accounts = options.accounts.slice(0);
	    if (options.sync) {
	        getUsersFromServer();
	    } else {
	        if (db.enable) {
	            db.getUsers(accounts).then(function(users) {
	                if (!!users && users.length === accounts.length) {
	                    log(users);
	                    options.done(null, users);
	                } else {
	                    usersLocal = users;
	                    // 如果从数据库只拿到了部分用户名片, 那么从服务器获取剩下的用户名片
	                    var accountsLocal = objs2accounts(users);
	                    var accountsServer = [];
	                    accounts.forEach(function(account) {
	                        if (accountsLocal.indexOf(account) === -1) {
	                            accountsServer.push(account);
	                        }
	                    });
	                    accounts = accountsServer;
	                    getUsersFromServer();
	                }
	            }, getUsersFromServer);
	        } else {
	            getUsersFromServer();
	        }
	    }
	    function getUsersFromServer() {
	        self.sendCmd('getUsers', { accounts: accounts, single: true }, options.callback);
	    }
	    function log(users) {
	        logger.warn('get users', objs2accounts(users), users);
	    }
	};


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var Friend = __webpack_require__(102);

	/**
	 * 好友请求
	 *
	 * - 此接口可以完成以下四个功能, 通过参数`type`来决定实际的功能, `type`可取的值有以下几种
	 *     - `'addFriend'` (直接加为好友)
	 *         - {@link NIM#addFriend|直接加某个用户为好友}后, 对方不需要确认, 直接成为当前登录用户的好友。
	 *         - 对方会收到一条类型为`'addFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号。
	 *     - `'applyFriend'` (申请加为好友)
	 *         - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
	 *     - `'passFriendApply'` (通过好友申请)
	 *         - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
	 *     - `'rejectFriendApply'` (拒绝好友申请)
	 *         - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
	 * - 每个功能SDK也提供了相应的独立接口
	 *
	 * @private
	 * @method friendRequest
	 * @memberOf NIM#
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.type    {@link Friend.requestType|好友请求类型}
	 * @param  {String} options.account 账号
	 * @param  {String} [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param  {done}   options.done    结果回调函数
	 * @return {Void}
	 * 
	 * @see {@link NIM#rejectFriendApply|直接加为好友}
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#updateFriend|更新好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 */
	NIMFn.friendRequest = function(options) {
	    util.verifyOptions(options, 'type account');
	    util.verifyParamValid('type', options.type, Friend.validTypes());
	    this.processPs(options);
	    this.processCallback(options);
	    var content = {
	        account: options.account,
	        type: Friend.getByteFromType(options.type),
	        ps: options.ps
	    };
	    if (notundef(options.idServer)) {
	        content.idServer = options.idServer;
	    }
	    this.sendCmd('friendRequest', content, options.callback);
	};
	/**
	 * 直接加为好友
	 *
	 * - {@link NIM#addFriend|直接加某个用户为好友}后, 对方不需要确认, 直接成为当前登录用户的好友。
	 * - 对方会收到一条类型为`'addFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号。
	 *
	 * @method addFriend
	 * @memberOf NIM#
	 *
	 * @param {Object}  options         配置参数
	 * @param {String}  options.account 要直接加为好友的账号
	 * @param {String}  [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#updateFriend|更新好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 *
	 * @example
	 * nim.addFriend({
	 *     account: 'account',
	 *     done: addFriendDone
	 * });
	 * function addFriendDone(error, obj) {
	 *     console.log('直接加为好友' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onAddFriend(obj.friend);
	 *     }
	 * }
	 */
	NIMFn.addFriend = function(options) {
	    options.type = 'addFriend';
	    this.friendRequest(options);
	};
	/**
	 * 申请加为好友
	 *
	 * - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
	 *     - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
	 *     - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
	 *
	 * @method applyFriend
	 * @memberOf NIM#
	 *
	 * @param {Object}  options         配置参数
	 * @param {String}  options.account 要申请加为好友的账号
	 * @param {String}  [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#applyFriend|直接加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#updateFriend|更新好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 *
	 * @example
	 * nim.applyFriend({
	 *     account: 'account',
	 *     done: applyFriendDone
	 * });
	 * function applyFriendDone(error, obj) {
	 *     console.log('申请加为好友' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.applyFriend = function(options) {
	    options.type = 'applyFriend';
	    this.friendRequest(options);
	};
	/**
	 * 通过好友申请
	 *
	 * - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
	 *     - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
	 *     - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
	 *
	 * @method passFriendApply
	 * @memberOf NIM#
	 *
	 * @param {Object}  options             配置参数
	 * @param {String}  options.idServer    对应的系统通知的 `idServer`
	 * @param {String}  options.account     要通过好友申请的账号
	 * @param {String}  [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#passFriendApply|直接加为好友}
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#updateFriend|更新好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 *
	 * @example
	 * nim.passFriendApply({
	 *     account: 'account',
	 *     done: passFriendApplyDone
	 * });
	 * function passFriendApplyDone(error, obj) {
	 *     console.log('通过好友申请' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onAddFriend(obj.friend);
	 *     }
	 * }
	 */
	NIMFn.passFriendApply = function(options) {
	    util.verifyOptions(options, 'idServer');
	    options.type = 'passFriendApply';
	    this.friendRequest(options);
	};
	/**
	 * 拒绝好友申请
	 *
	 * - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
	 *     - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
	 *     - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
	 *
	 * @method rejectFriendApply
	 * @memberOf NIM#
	 *
	 * @param {Object}  options             配置参数
	 * @param {String}  options.idServer    对应的系统通知的 `idServer`
	 * @param {String}  options.account     要拒绝好友申请的账号
	 * @param {String}  [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#rejectFriendApply|直接加为好友}
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#updateFriend|更新好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 *
	 * @example
	 * nim.rejectFriendApply({
	 *     account: 'account',
	 *     done: rejectFriendApplyDone
	 * });
	 * function rejectFriendApplyDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('拒绝好友申请' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.rejectFriendApply = function(options) {
	    util.verifyOptions(options, 'idServer');
	    options.type = 'rejectFriendApply';
	    this.friendRequest(options);
	};
	/**
	 * 删除好友
	 *
	 * - {@link NIM#deleteFriend|删除好友}后, 被删除的人会收到一条类型为`'deleteFriend'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为删除方的帐号, `to`字段的值为被删除方的账号。
	 *
	 * @method deleteFriend
	 * @memberOf NIM#
	 *
	 * @param {Object}  options         配置参数
	 * @param {String}  options.account 要删除好友的账号
	 * @param {done}    options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#deleteFriend|直接加为好友}
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#updateFriend|更新好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 *
	 * @example
	 * nim.deleteFriend({
	 *     account: 'account',
	 *     done: deleteFriendDone
	 * });
	 * function deleteFriendDone(error, obj) {
	 *     console.log('删除好友' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onDeleteFriend(obj.account);
	 *     }
	 * }
	 */
	NIMFn.deleteFriend = function(options) {
	    util.verifyOptions(options, 'account');
	    this.processCallback(options);
	    this.sendCmd('deleteFriend', {account: options.account}, options.callback);
	};
	/**
	 * 更新好友
	 *
	 * - 开发者可以用此接口来更新好友的备注
	 * - 开发者也可以使用JSON格式的扩展字段来进行扩展
	 *
	 * @method updateFriend
	 * @memberOf NIM#
	 *
	 * @param {Object}  options             配置参数
	 * @param {String}  options.account     要更新的好友的account
	 * @param {String}  [options.alias]     备注
	 * @param {String}  [options.custom]    扩展字段, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param {done}    options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#updateFriend|直接加为好友}
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#getFriends|获取好友列表}
	 *
	 * @example
	 * nim.updateFriend({
	 *     account: 'account',
	 *     alias: 'alias',
	 *     custom: 'custom'
	 *     done: updateFriendDone
	 * });
	 * function updateFriendDone(error, obj) {
	 *     console.log('更新好友' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onUpdateFriend(obj);
	 *     }
	 * }
	 */
	NIMFn.updateFriend = function(options) {
	    this.processCallback(options);
	    var friend = new Friend(options);
	    this.sendCmd('updateFriend', {friend: friend, single: true}, options.callback);
	};
	/**
	 * 获取好友列表
	 *
	 * - 如果开发者在{@link NIM|初始化SDK}的时候设置了`syncFriends`为`false`, 那么就收不到`onfriends`回调, 可以调用此接口来获取好友列表。
	 *
	 * @method getFriends
	 * @memberOf NIM#
	 *
	 * @param {Object}  options         配置参数
	 * @param {done}    options.done    结果回调函数, 成功的时候会收到{@link Friend|好友}列表
	 * @return {Void}
	 *
	 * @see {@link NIM#addFriend|直接加为好友}
	 * @see {@link NIM#applyFriend|申请加为好友}
	 * @see {@link NIM#passFriendApply|通过好友申请}
	 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
	 * @see {@link NIM#deleteFriend|删除好友}
	 * @see {@link NIM#updateFriend|更新好友}
	 *
	 * @example
	 * nim.getFriends({
	 *     done: getFriendsDone
	 * });
	 * function getFriendsDone(error, friends) {
	 *     console.log('获取好友列表' + (!error?'成功':'失败'), error, friends);
	 *     if (!error) {
	 *         onFriends(friends);
	 *     }
	 * }
	 */
	NIMFn.getFriends = function(options) {
	    var self = this;
	    var db = self.db;
	    var timetag = 0;
	    util.verifyOptions(options);
	    self.processCallback(options);
	    if (db.enable) {
	        db.getFriendsTimetag().then(function(t) {
	            timetag = t;
	            getFriendsFromServer();
	        }, getFriendsFromServer);
	    } else {
	        getFriendsFromServer();
	    }
	    function getFriendsFromServer() {
	        self.sendCmd('getFriends', {timetag:timetag, NOTSTORE: 'timetag'}, options.callback);
	    }
	};


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var undef = util.undef;
	var logger = __webpack_require__(40);
	var Team = __webpack_require__(104);
	var TeamMember = __webpack_require__(87);

	/**
	 * 创建群
	 * 
	 * - {@link Team.type|普通群}只能设置群名字
	 * - {@link Team.type|高级群}可以设置群名字、群简介、群公告、{@link Team.joinMode|加入方式}和第三方扩展字段
	 * - {@link Team.type|高级群}的{@link Team.joinMode|加入方式}默认为`'needVerify'`
	 * - {@link Team.type|普通群}被邀请的{@link TeamMember|群成员}在有人说话之后才会看到该{@link Team|群}, 而且会先收到一条类型为{@link IMMessage.attach.type|'addTeamMembers'}的{@link IMMessage.type|群通知消息}, 然后会收到其它{@link IMMessage.scene|群消息}。
	 * - {@link Team.type|高级群}被邀请的{@link TeamMember|群成员}会收到一条类型为{@link SystemMessage.type|'teamInvite'}的{@link SystemMessage|系统通知}。
	 *     - 接受邀请后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|'acceptTeamInvite'}的{@link IMMessage.type|群通知消息}。
	 *     - 拒绝邀请后, `群主`会收到一条类型为{@link IMMessage.attach.type|'rejectTeamInvite'}的{@link SystemMessage|系统通知}。
	 * 
	 * @method createTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options                   配置参数
	 * @param  {String}   options.type              {@link Team.type|群类型}
	 * @param  {String}   options.name              群名字
	 * @param  {String[]} options.accounts          要拉进群的成员的帐号列表
	 * @param  {String}   [options.intro]           群简介
	 * @param  {String}   [options.announcement]    群公告
	 * @param  {String}   [options.joinMode]        {@link Team.joinMode|加入方式}
	 * @param  {String}   [options.custom]          扩展字段
	 * @param  {String}   [options.ps]              附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param  {done}     options.done              结果回调函数, 成功时会收到{@link Team|群资料}
	 * @return {Void}
	 * 
	 * @see {@link NIM#addTeamMembers|拉人入群}
	 * @see {@link NIM#removeTeamMembers|踢人出群}
	 * @see {@link NIM#updateTeam|更新群}
	 * 
	 * @example
	 * // 创建普通群
	 * nim.createTeam({
	 *     type: 'normal',
	 *     name: '普通群',
	 *     accounts: ['a1', 'a2'],
	 *     ps: '我建了一个普通群',
	 *     done: createTeamDone
	 * });
	 * // 创建高级群
	 * nim.createTeam({
	 *     type: 'advanced',
	 *     name: '高级群',
	 *     accounts: ['a1', 'a2'],
	 *     intro: '群简介',
	 *     announcement: '群公告',
	 *     // 高级群的加入方式默认为 'needVerify'
	 *     // joinMode: 'needVerify',
	 *     ps: '我建了一个高级群', 
	 *     done: createTeamDone
	 * });
	 * function createTeamDone(error, obj) {
	 *     console.log('创建' + obj.team.type + '群' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onCreateTeam(obj.team, obj.owner);
	 *     }
	 * }
	 */
	NIMFn.createTeam = function(options) {
	    util.verifyOptions(options, 'type name');
	    if (undef(options.accounts)) {
	        options.accounts = [];
	    } else {
	        util.verifyParamType('accounts', options.accounts, 'array');
	    }
	    options.action = 'create';
	    this.processPs(options);
	    this.processCallback(options);
	    options.team = new Team(options);
	    var content = {
	        team: options.team,
	        accounts: options.accounts.slice(0),
	        ps: options.ps
	    };
	    this.sendCmd('createTeam', content, options.callback);
	};

	/**
	 * 更新群
	 *
	 * - {@link Team.type|普通群}只能更新群名字, 
	 * - {@link Team.type|高级群}可以更新群名字、群简介、群公告、{@link Team.joinMode|加入方式}和第三方扩展字段
	 * - {@link NIM#updateTeam|更新群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'updateTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为更新群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为被更新的{@link Team|群信息}。
	 * 
	 * @method updateTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options                   配置参数
	 * @param  {String}   options.teamId            群id
	 * @param  {String}   [options.name]            群名字
	 * @param  {String}   [options.intro]           群简介
	 * @param  {String}   [options.announcement]    群公告
	 * @param  {String}   [options.joinMode]        {@link Team.joinMode|加入方式}
	 * @param  {String}   [options.custom]          扩展字段
	 * @param  {done}     options.done              结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.updateTeam({
	 *     teamId: '123',
	 *     name: '群名字',
	 *     intro: '群简介',
	 *     announcement: '群公告',
	 *     joinMode: 'needVerify',
	 *     custom: '自定义字段',
	 *     done: updateTeamDone
	 * });
	 * function updateTeamDone(error, team) {
	 *     console.log('更新群' + (!error?'成功':'失败'), error, team);
	 * }
	 */
	NIMFn.updateTeam = function(options) {
	    util.verifyOptions(options, 'teamId');
	    options.action = 'update';
	    this.processCallback(options);
	    options.team = new Team(options);
	    this.sendCmd('updateTeam', { team: options.team, single: true }, options.callback);
	};

	/**
	 * 拉人入群
	 * 
	 * - 普通群, {@link NIM#addTeamMembers|拉人入群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|``'addTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为拉人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的[群对象](#群对象), `attach`有一个字段`accounts`的值为被拉的人的帐号列表, `attach`有一个字段`members`的值为被拉的群成员列表。
	 *     - 被邀请的群成员在有人说话后才能看到该{@link Team|群}, 而且会先收到一条类型为{@link IMMessage.attach.type|`'addTeamMembers'`}的{@link IMMessage.type|群通知消息}, 然后会收到其它{@link Message|群消息}。
	 * - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
	 *     - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
	 *     - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
	 * 
	 * @method addTeamMembers
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options             配置参数
	 * @param  {String}   options.teamId      群id
	 * @param  {String[]} options.accounts    要拉进群的成员的帐号列表
	 * @param  {String}   [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param  {done}     options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#acceptTeamInvite|接受入群邀请}
	 * @see {@link NIM#rejectTeamInvite|拒绝入群邀请}
	 * @see {@link NIM#removeTeamMembers|踢人出群}
	 * 
	 * @example
	 * nim.addTeamMembers({
	 *     teamId: '123',
	 *     accounts: ['a3', 'a4'],
	 *     ps: '加入我们的群吧',
	 *     done: addTeamMembersDone
	 * });
	 * function addTeamMembersDone(error, obj) {
	 *     console.log('入群邀请发送' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.addTeamMembers = function(options) {
	    util.verifyOptions(options, 'teamId accounts');
	    util.verifyParamType('accounts', options.accounts, 'array');
	    this.processPs(options);
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId,
	        accounts: options.accounts.slice(0),
	        ps: options.ps
	    };
	    this.sendCmd('addTeamMembers', content, options.callback);
	};

	/**
	 * 踢人出群
	 * 
	 * - {@link NIM#removeTeamMembers|踢人出群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为踢人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`accounts`的值为被踢的人的帐号列表。
	 * 
	 * @method removeTeamMembers
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String}     options.teamId      群id
	 * @param  {String[]}   options.accounts    要移除的成员帐号列表
	 * @param  {done}       options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#addTeamMembers|拉人入群}
	 *
	 * @example
	 * nim.removeTeamMembers({
	 *     teamId: '123',
	 *     accounts: ['a3', 'a4'],
	 *     done: removeTeamMembersDone
	 * });
	 * function removeTeamMembersDone(error, obj) {
	 *     console.log('踢人出群' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.removeTeamMembers = function(options) {
	    util.verifyOptions(options, 'teamId accounts');
	    util.verifyParamType('accounts', options.accounts, 'array');
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId,
	        accounts: options.accounts.slice(0)
	    };
	    this.sendCmd('removeTeamMembers', content, options.callback);
	};

	/**
	 * 接受入群邀请
	 *
	 * - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
	 *     - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
	 *     - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
	 * 
	 * @method acceptTeamInvite
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options           配置参数
	 * @param  {String}   options.idServer  对应的系统通知的 `idServer`
	 * @param  {String}   options.teamId    群id
	 * @param  {String}   options.from      邀请方的帐号
	 * @param  {done}     options.done      结果回调函数, 成功时会收到{@link Team|群资料}
	 * @return {Void}
	 *
	 * @see {@link NIM#rejectTeamInvite|拒绝入群邀请}
	 * @see {@link NIM#addTeamMembers|拉人入群}
	 * @see {@link NIM#getTeamMembers|获取群成员}
	 *
	 * @example
	 * nim.acceptTeamInvite({
	 *     teamId: '123',
	 *     from: 'zyy1',
	 *     done: acceptTeamInviteDone
	 * });
	 * function acceptTeamInviteDone(error, obj) {
	 *     console.log('接受入群邀请' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.acceptTeamInvite = function(options) {
	    util.verifyOptions(options, 'idServer teamId from');
	    this.processCallback(options);
	    var content = {
	        idServer: options.idServer,
	        teamId: options.teamId,
	        from: options.from
	    };
	    this.sendCmd('acceptTeamInvite', content, options.callback);
	};

	/**
	 * 拒绝入群邀请
	 *
	 * - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
	 *     - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
	 *     - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
	 * 
	 * @method rejectTeamInvite
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options           配置参数
	 * @param  {String}   options.idServer  对应的系统通知的 `idServer`
	 * @param  {String}   options.teamId    群id
	 * @param  {String}   options.from      邀请方的帐号
	 * @param  {String}   [options.ps]      附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param  {done}     options.done      结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#acceptTeamInvite|接受入群邀请}
	 * @see {@link NIM#addTeamMembers|拉人入群}
	 *
	 * @example
	 * nim.rejectTeamInvite({
	 *     teamId: '123',
	 *     from: 'zyy1',
	 *     ps: '就不',
	 *     done: rejectTeamInviteDone
	 * });
	 * function rejectTeamInviteDone(error, obj) {
	 *     console.log('拒绝入群邀请' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.rejectTeamInvite = function(options) {
	    util.verifyOptions(options, 'idServer teamId from');
	    this.processPs(options);
	    this.processCallback(options);
	    var content = {
	        idServer: options.idServer,
	        teamId: options.teamId,
	        from: options.from,
	        ps: options.ps
	    };
	    this.sendCmd('rejectTeamInvite', content, options.callback);
	};

	/**
	 * 申请入群
	 *
	 * - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
	 *     - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
	 *     - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
	 * 
	 * @method applyTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.teamId  群id
	 * @param  {String}     [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param  {done}       options.done    结果回调函数, 成功时会收到{@link Team|群资料}
	 * @return {Void}
	 *
	 * @see {@link NIM#passTeamApply|通过入群申请}
	 * @see {@link NIM#rejectTeamApply|拒绝入群申请}
	 *
	 * @example
	 * nim.applyTeam({
	 *     teamId: '123',
	 *     ps: '请加',
	 *     done: applyTeamDone
	 * });
	 * function applyTeamDone(error, obj) {
	 *     console.log('申请入群' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.applyTeam = function(options) {
	    util.verifyOptions(options, 'teamId');
	    this.processPs(options);
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId,
	        ps: options.ps
	    };
	    this.sendCmd('applyTeam', content, options.callback);
	};

	/**
	 * 通过入群申请
	 *
	 * - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
	 *     - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
	 *     - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
	 * 
	 * @method passTeamApply
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String}     options.idServer    对应的系统通知的 `idServer`
	 * @param  {String}     options.teamId      群ID
	 * @param  {String}     options.from        申请方的帐号
	 * @param  {done}       options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#applyTeam|申请入群}
	 * @see {@link NIM#rejectTeamApply|拒绝入群申请}
	 *
	 * @example
	 * nim.passTeamApply({
	 *     teamId: '123',
	 *     from: 'a2',
	 *     done: passTeamApplyDone
	 * });
	 * function passTeamApplyDone(error, obj) {
	 *     console.log('通过入群申请' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.passTeamApply = function(options) {
	    util.verifyOptions(options, 'idServer teamId from');
	    this.processCallback(options);
	    var content = {
	        idServer: options.idServer,
	        teamId: options.teamId,
	        from: options.from
	    };
	    this.sendCmd('passTeamApply', content, options.callback);
	};

	/**
	 * 拒绝入群申请
	 *
	 * - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
	 *     - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
	 *     - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
	 * 
	 * @method rejectTeamApply
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String}     options.idServer    对应的系统通知的 `idServer`
	 * @param  {String}     options.teamId      群ID
	 * @param  {String}     options.from        申请方的帐号
	 * @param  {String}     [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
	 * @param  {done}       options.done        结果回调函数
	 * @return {Void}
	 * 
	 * @see {@link NIM#applyTeam|申请入群}
	 * @see {@link NIM#passTeamApply|通过入群申请}
	 * 
	 * @example
	 * nim.rejectTeamApply({
	 *     teamId: '123',
	 *     from: 'a2',
	 *     ps: '就不',
	 *     done: rejectTeamApplyDone
	 * });
	 * function rejectTeamApplyDone(error, obj) {
	 *     console.log('拒绝入群申请' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.rejectTeamApply = function(options) {
	    util.verifyOptions(options, 'idServer teamId from');
	    this.processPs(options);
	    this.processCallback(options);
	    var content = {
	        idServer: options.idServer,
	        teamId: options.teamId,
	        from: options.from,
	        ps: options.ps
	    };
	    this.sendCmd('rejectTeamApply', content, options.callback);
	};

	/**
	 * 添加群管理员
	 * 
	 * - {@link NIM#addTeamManagers|添加群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'addTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为添加群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被加为管理员的帐号列表, `attach`有一个字段`members`的值为被加为管理员的群成员列表。
	 * 
	 * @method addTeamManagers
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String}     options.teamId      群id
	 * @param  {String[]}   options.accounts    要添加的管理员帐号列表
	 * @param  {done}       options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#removeTeamManagers|移除群管理员}
	 *
	 * @example
	 * nim.addTeamManagers({
	 *     teamId: '123',
	 *     accounts: ['a2', 'a3'],
	 *     done: addTeamManagersDone
	 * });
	 * function addTeamManagersDone(error, obj) {
	 *     console.log('添加群管理员' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.addTeamManagers = function(options) {
	    util.verifyOptions(options, 'teamId accounts');
	    util.verifyParamType('accounts', options.accounts, 'array');
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId,
	        accounts: options.accounts.slice(0)
	    };
	    this.sendCmd('addTeamManagers', content, options.callback);
	};

	/**
	 * 移除群管理员
	 *
	 * - {@link NIM#removeTeamManagers|移除群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为移除群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被移除的管理员的帐号列表, `attach`有一个字段`members`的值为被移除管理员的群成员列表。
	 * 
	 * @method removeTeamManagers
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options             配置参数
	 * @param  {String}   options.teamId      群id
	 * @param  {String[]} options.accounts    要移除的管理员帐号列表
	 * @param  {done}     options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#addTeamManagers|添加群管理员}
	 *
	 * @example
	 * nim.removeTeamManagers({
	 *     teamId: '123',
	 *     accounts: ['a2', 'a3'],
	 *     done: removeTeamManagersDone
	 * });
	 * function removeTeamManagersDone(error, obj) {
	 *     console.log('移除群管理员' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.removeTeamManagers = function(options) {
	    util.verifyOptions(options, 'teamId accounts');
	    util.verifyParamType('accounts', options.accounts, 'array');
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId,
	        accounts: options.accounts.slice(0)
	    };
	    this.sendCmd('removeTeamManagers', content, options.callback);
	};

	/**
	 * 修改自己的群属性
	 * 
	 * 目前支持修改的属性有这些
	 * - `nickInTeam`: 自己在群里面的群昵称
	 *     - 更新昵称后, 所有其它在线的{@link TeamMember|群成员}会收到{@link NIM|初始化SDK}时传入的`onupdateteammember`回调。
	 * - `muteTeam`: 是否关闭此群的消息提醒, `true`表示关闭提醒, 但是SDK仍然会收到这个群的消息, SDK只是记录这个设置, 具体根据这个设置要执行的操作由第三方APP决定
	 * 
	 * @method updateInfoInTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options               配置参数
	 * @param  {String}   options.teamId        群id
	 * @param  {String}   [options.nickInTeam]  在群里面的昵称
	 * @param  {Boolean}  [options.muteTeam]    是否关闭此群的消息提醒, `true`表示关闭提醒, 但是SDK仍然会收到这个群的消息, SDK只是记录这个设置, 具体根据这个设置要执行的操作由第三方APP决定
	 * @param  {done}     options.done          结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#updateNickInTeam|修改别人的群昵称}
	 *
	 * @example
	 * nim.updateInfoInTeam({
	 *     teamId: '123',
	 *     // 此参数为可选参数
	 *     nickInTeam: '群昵称',
	 *     // 静音群, 此参数为可选参数
	 *     // muteTeam: true,
	 *     done: updateInfoInTeamDone
	 * });
	 * function updateInfoInTeamDone(error, obj) {
	 *     console.log('修改自己的群属性' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.updateInfoInTeam = function(options) {
	    util.verifyOptions(options, 'teamId');
	    this.processCallback(options);
	    this.sendCmd('updateInfoInTeam', { teamMember: new TeamMember(options), single: true }, options.callback);
	};

	/**
	 * 修改别人的群昵称
	 * 
	 * - 所有其它在线的{@link TeamMember|群成员}会收到{@link NIM|初始化SDK}时传入的`onupdateteammember`回调
	 * 
	 * @method updateNickInTeam
	 * @memberOf NIM#
	 * 
	 * @param  {Object}   options             配置参数
	 * @param  {String}   options.teamId      群id
	 * @param  {String}   options.account     要修改昵称的{@link TeamMember|群成员}的帐号
	 * @param  {String}   options.nickInTeam  群昵称
	 * @param  {done}     options.done        结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#updateInfoInTeam|修改自己的群属性}
	 * 
	 * @example
	 * nim.updateNickInTeam({
	 *     teamId: '123',
	 *     account: 'a2',
	 *     nickInTeam: '群昵称',
	 *     done: updateNickInTeam
	 * });
	 * function updateNickInTeam(error, obj) {
	 *     console.log('修改自己的群属性' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.updateNickInTeam = function(options) {
	    util.verifyOptions(options, 'teamId account');
	    this.processCallback(options);
	    this.sendCmd('updateNickInTeam', { teamMember: new TeamMember(options), single: true }, options.callback);
	};

	/**
	 * 主动退群
	 *
	 * - {@link NIM#leaveTeam|主动退群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'leaveTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为退群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}。
	 * 
	 * @method leaveTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}   options           配置参数
	 * @param  {String}   options.teamId    群id
	 * @param  {done}     options.done      结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.leaveTeam({
	 *     teamId: '123',
	 *     done: leaveTeamDone
	 * });
	 * function leaveTeamDone(error, obj) {
	 *     console.log('主动退群' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.leaveTeam = function(options) {
	    util.verifyOptions(options, 'teamId');
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId
	    };
	    this.sendCmd('leaveTeam', content, options.callback);
	};

	/**
	 * 转让群
	 *
	 * - {@link NIM#transferTeam|转让群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'transferTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为转让群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`的值为为新群主的帐号, `attach`有一个字段`members`的值为包含新旧群主的群成员列表。
	 * - 如果转让群的同时离开群, 那么相当于调用{@link NIM#leaveTeam|主动退群}来离开群, 所有{@link TeamMember|群成员}会再收到一条类型为{@link IMMessage.attach.type|`'leaveTeam'`}的{@link IMMessage.type|群通知消息}。
	 * 
	 * @method transferTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.teamId  群id
	 * @param  {String}     options.account 新群主的帐号
	 * @param  {Boolean}    options.leave   转让群的同时是否离开群
	 * @param  {done}       options.done    结果回调函数
	 * @return {Void}
	 *
	 * @see {@link NIM#leaveTeam|离开群}
	 *
	 * @example
	 * nim.transferTeam({
	 *     teamId: '123',
	 *     account: 'zyy2',
	 *     leave: false,
	 *     done: transferOwnerDone
	 * });
	 * function transferOwnerDone(error, obj) {
	 *     console.log('转让群' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.transferTeam = function(options) {
	    util.verifyOptions(options, 'teamId account leave');
	    util.verifyParamType('leave', options.leave, 'boolean');
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId,
	        account: options.account,
	        leave: options.leave
	    };
	    this.sendCmd('transferTeam', content, options.callback);
	};

	/**
	 * 解散群
	 * 
	 * - {@link NIM#dismissTeam|解散群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'dismissTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段为解散群的人的帐号, `to`字段的值为被对应的群ID。
	 * 
	 * @method dismissTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.teamId  群id
	 * @param  {done}       options.done    结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.dismissTeam({
	 *     teamId: '123',
	 *     done: dismissTeamDone
	 * });
	 * function dismissTeamDone(error, obj) {
	 *     console.log('解散群' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.dismissTeam = function(options) {
	    util.verifyOptions(options, 'teamId');
	    this.processCallback(options);
	    var content = {
	        teamId: options.teamId
	    };
	    this.sendCmd('dismissTeam', content, options.callback);
	};

	/**
	 * 获取群
	 *
	 * - 开发者可以调用此接口获取群资料
	 * 
	 * @method getTeam
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.teamId  群id
	 * @param  {done}       options.done    结果回调函数, 成功时会收到{@link Team|群资料}
	 * @return {Void}
	 *
	 * @see {@link NIM#getTeams|获取群列表}
	 * @see {@link NIM#getTeamMembers|获取群成员}
	 *
	 * @example
	 * nim.getTeam({
	 *     teamId: '123',
	 *     done: getTeamDone
	 * });
	 * function getTeamDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('获取群' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.getTeam = function(options) {
	    var self = this,
	        db = self.db,
	        teamId;
	    util.verifyOptions(options, 'teamId');
	    self.processCallback(options);

	    options.cbaop = function(error, obj) {
	        if (!error) {
	            log(obj);
	        }
	    };

	    teamId = options.teamId;
	    if (options.sync) {
	        getTeamFromServer();
	    } else {
	        if (db.enable) {
	            db.getTeam(teamId).then(function(team) {
	                if (!!team) {
	                    log(team);
	                    options.done(null, team);
	                } else {
	                    getTeamFromServer();
	                }
	            }, getTeamFromServer);
	        } else {
	            getTeamFromServer();
	        }
	    }
	    function getTeamFromServer() {
	        self.sendCmd('getTeam', { teamId: options.teamId }, options.callback);
	    }
	    function log(team) {
	        logger.warn('get team', teamId, team);
	    }
	};

	/**
	 * 获取群列表
	 *
	 * - 如果开发者在{@link NIM|初始化SDK}的时候设置了`syncTeams`为`false`, 那么就收不到`onteams`回调, 可以调用此接口来获取{@link Team|群}列表
	 * 
	 * @method getTeams
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options         配置参数
	 * @param  {done}       options.done    结果回调函数, 成功时会收到{@link Team|群}列表
	 * @return {Void}
	 * 
	 * @see {@link NIM#getTeam|获取群资料}
	 * @see {@link NIM#getTeamMembers|获取群成员}
	 *
	 * @example
	 * nim.getTeams({
	 *     done: getTeamsDone
	 * });
	 * function getTeamsDone(error, teams) {
	 *     console.log(error);
	 *     console.log(teams);
	 *     console.log('获取群列表' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.getTeams = function(options) {
	    var self = this;
	    var db = self.db;
	    var timetag = 0;
	    util.verifyOptions(options);
	    self.processCallback(options);
	    if (db.enable) {
	        db.getTeamsTimetag().then(function(t) {
	            timetag = t;
	            getTeamsFromServer();
	        }, getTeamsFromServer);
	    } else {
	        getTeamsFromServer();
	    }
	    function getTeamsFromServer() {
	        self.sendCmd('getTeams', {timetag: timetag, NOTSTORE: 'timetag'}, options.callback);
	    }
	};

	/**
	 * 获取群成员
	 *
	 * - 如果开发者在{@link NIM|初始化SDK}时选择设置了`syncTeamMembers`为`false`, 那么就收不到`onteammembers`回调, 可以调用此方法来获取{@link TeamMember|群成员}列表
	 * - 接受入群邀请之后调用此方法来获取{@link TeamMember|群成员}列表
	 * 
	 * @method getTeamMembers
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.teamId  群id
	 * @param  {done}       options.done    结果回调函数, 成功时会额外附上{@link TeamMember|群成员}列表
	 * @return {Void}
	 * 
	 * @see {@link NIM#getTeam|获取群资料}
	 * @see {@link NIM#getTeams|获取群列表}
	 *
	 * @example
	 * nim.getTeamMembers({
	 *     teamId: '123',
	 *     done: getTeamMembersDone
	 * });
	 * function getTeamMembersDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('获取群成员' + (!error?'成功':'失败'));
	 *     if (!error) {
	 *         onTeamMembers(obj);
	 *     }
	 * }
	 */
	NIMFn.getTeamMembers = function(options) {
	    var self = this;
	    var db = self.db;
	    var timetag = 0;
	    util.verifyOptions(options, 'teamId');
	    self.processCallback(options);
	    if (db.enable) {
	        db.getTeamMembersTimetag(options.teamId).then(function(t) {
	            timetag = t;
	            getTeamMembersFromServer();
	        }, getTeamMembersFromServer);
	    } else {
	        getTeamMembersFromServer();
	    }
	    function getTeamMembersFromServer() {
	        self.sendCmd('getTeamMembers', { teamId: options.teamId, timetag: timetag, NOTSTORE: 'timetag' }, options.callback);
	    }
	};

	/**
	 * 获取`teamIds`对应的本地群
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 *
	 * @method getLocalTeams
	 * @memberOf NIM#
	 * 
	 * @param  {Object}      options         配置参数
	 * @param  {String[]}    options.teamIds teamId 数组
	 * @param  {Function}    options.done    结果回调函数, 成功时会额外附上群列表
	 * @return {Void}
	 *
	 * @example
	 * nim.getLocalTeams({
	 *     teamIds: teamIds
	 *     done: getLocalTeamsDone
	 * });
	 * function getLocalTeamsDone(error, obj) {
	 *     console.log('获取本地群' + (!error?'成功':'失败'));
	 *     console.log(error);
	 *     console.log(obj);
	 * }
	 */
	NIMFn.getLocalTeams = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        teams = [];
	    util.verifyOptions(options, 'teamIds');
	    util.verifyParamType('teamIds', options.teamIds, 'array');
	    self.processCallback(options);
	    if (db.enable) {
	        db.getTeamsByTeamIds(options.teamIds).then(function(records) {
	            teams = records.filter(function(record) {
	                return !!record;
	            });
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.teams = teams;
	        options.done(error, options);
	    }
	};

	NIMFn.getLocalTeamMembers = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    var members = [];
	    util.verifyOptions(options, 'teamId accounts');
	    util.verifyParamType('accounts', options.accounts, 'array');
	    self.processCallback(options);
	    if (db.enable) {
	        db.getInvalidTeamMembers(options.teamId, options.accounts).then(function(records) {
	            members = records.filter(function(record) {
	                return !!record;
	            });
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.members = members;
	        options.done(error, options);
	    }
	};

	/**
	 * 删除 `teamId` 对应的本地群
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果当前用户还在群里面, 那么会失败
	 * - 如果对应的群不存在, 算成功
	 * - 如果传了多个 teamId, 但是当前用户还在某个群里面, 那么会失败, 但是所有用户不在的群都会被删掉
	 *
	 * @method deleteLocalTeam
	 * @memberOf NIM#
	 * 
	 * @param  {Object}             options         配置参数
	 * @param  {String|String[]}    options.teamId  teamId 或者 teamId 数组
	 * @param  {Function}           options.done    结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteLocalTeam({
	 *     teamId: '1234',
	 *     done: deleteLocalTeamDone
	 * });
	 * function deleteLocalTeamDone(error, obj) {
	 *     console.log('删除本地群' + (!error?'成功':'失败'));
	 *     console.log(error);
	 *     console.log(obj);
	 * }
	 */
	NIMFn.deleteLocalTeam = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    util.verifyOptions(options, 'teamId');
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteTeam(options.teamId).then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.done(error, options);
	    }
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var undef = util.undef;
	var notundef = util.notundef;

	/**
	 * 设置当前会话
	 * - 设置后, 当前会话未读数会被置为 `0`, 同时开发者会收到 `onupdatesession` 回调
	 * - 传空字符串的话, 重置当前回话为空
	 * 
	 * @method setCurrSession
	 * @memberOf NIM#
	 *
	 * @param {String} sessionId 会话ID
	 *
	 * @example
	 * nim.setCurrSession('scene-account');
	 */
	NIMFn.setCurrSession = function(sessionId) {
	    this.protocol.setCurrSession(sessionId);
	};

	/**
	 * 清空某个会话的未读数
	 *
	 * @method resetSessionUnread
	 * @memberOf NIM#
	 * 
	 * @param {String} sessionId 会话ID
	 * @return {Void}
	 *
	 * @example
	 * nim.resetSessionUnread('scene-account');
	 */
	NIMFn.resetSessionUnread = function(sessionId) {
	    this.protocol.resetSessionUnread(sessionId);
	};

	/**
	 * 获取本地会话列表
	 * - 如果不{@link support.db|支持数据库}, 返回空数组
	 * - 会话列表按时间逆序排列, 即最近聊过天的放在列表的最前面
	 * 
	 * @method getLocalSessions
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options                 配置参数
	 * @param  {Number}     [options.lastSessionId] 上次查询的最后一条会话的`id`, 第一次不填
	 * @param  {Number}     [options.limit]         本次查询的会话数量限制, 最多 100 条, 默认 100 条
	 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从最近的会话开始往前查找本地会话；
	 *                                              `true`表示从第一条会话开始往后查找本地会话
	 * @param  {done}       options.done            结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.getLocalSessions({
	 *     lastSessionId: lastSessionId,
	 *     limit: 100,
	 *     done: getLocalSessionsDone
	 * });
	 * function getLocalSessionsDone(error, obj) {
	 *     console.log('获取本地会话列表' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         onSessions(obj.sessions);
	 *     }
	 * }
	 */
	NIMFn.getLocalSessions = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        sessions = [];
	    util.verifyOptions(options);
	    if (undef(options.limit)) {
	        options.limit = 100;
	    }
	    util.verifyParamType('limit', options.limit, 'number');
	    util.verifyParamMax('limit', options.limit, 100);
	    if (notundef(options.reverse)) {
	        util.verifyParamType('reverse', options.reverse, 'boolean');
	    } else {
	        options.reverse = false;
	    }
	    self.processCallback(options);

	    if (db.enable) {
	        db.getSessions(options).then(function(records) {
	            sessions = records;
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.sessions = sessions;
	        options.done(error, options);
	    }
	};

	/**
	 * 更新本地会话
	 * - 更新 `id` 对应的本地会话
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果对应的会话不存在, 算成功, 返回 null
	 * - 这些字段只会被更新到本地数据库, 不会被更新到服务器上
	 *
	 * @method updateLocalSession
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options                 配置参数
	 * @param  {String}     options.id              id
	 * @param  {String}     [options.localCustom]   自定义字段
	 * @param  {Function}   options.done            结果回调函数, 成功时会额外附上{@link Session|会话}
	 * @return {Void}
	 *
	 * @example
	 * nim.updateLocalSession({
	 *     id: 'p2p-account',
	 *     localCustom: '{"key","value"}',
	 *     done: updateLocalSessionDone
	 * });
	 * function updateLocalSessionDone(error, obj) {
	 *     console.log('更新本地会话' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.updateLocalSession = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        session = null;
	    util.verifyOptions(options, 'id');
	    self.processCallback(options);
	    if (db.enable) {
	        var obj = util.filterObj(options, 'id localCustom');
	        db.updateSession(obj).then(function(record) {
	            session = record;
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.session = session;
	        options.done(error, options);
	    }
	};

	/**
	 * 删除本地会话
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果对应的会话不存在, 算成功
	 *
	 * @method deleteLocalSession
	 * @memberOf NIM#
	 * 
	 * @param  {Object}             options         配置参数
	 * @param  {String|String[]}    options.id      id 或 id 数组
	 * @param  {Function}           options.done    结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteLocalSession({
	 *     id: 'p2p-account',
	 *     done: deleteLocalSessionDone
	 * });
	 * function deleteLocalSessionDone(error, obj) {
	 *     console.log('删除本地会话' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.deleteLocalSession = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    util.verifyOptions(options, 'id');
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteSession(options.id).then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.done(error, options);
	    }
	};

	/**
	 * 删除服务器上的会话
	 * 
	 * @method deleteSession
	 * @memberOf NIM#
	 *
	 * @param  {Object} options         配置参数
	 * @param  {String} options.scene   {@link IMMessage.scene|场景}
	 * @param  {String} options.to      对方账号或群ID
	 * @param  {done}   options.done    结果回调函数
	 * @return {Void}
	 * 
	 * @example
	 * nim.deleteSession({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     done: deleteSessionDone
	 * });
	 * function deleteSessionDone(error, obj) {
	 *     console.log('删除会话' + (!error?'成功':'失败'), error, obj);
	 * }
	 * @see {@link NIM#deleteSessions|批量删除服务器上的会话}
	 */
	NIMFn.deleteSession = function(options) {
	    util.verifyOptions(options, 'scene to');
	    this.processCallback(options);
	    options.sessions = [{
	        scene: options.scene,
	        to: options.to
	    }];
	    this.deleteSessions(options);
	};

	/**
	 * 批量删除服务器上的会话
	 * 
	 * @method deleteSessions
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {Session[]}  options.sessions    会话列表
	 * @param  {done}       options.done        结果回调函数
	 * @return {Void}
	 * 
	 * @example
	 * nim.deleteSessions({
	 *     sessions: {[
	 *         scene: 'p2p',
	 *         to: 'account'
	 *     ], [
	 *         scene: 'p2p',
	 *         to: 'account1'
	 *     ]},
	 *     done: deleteSessionsDone
	 * });
	 * function deleteSessionsDone(error, obj) {
	 *     console.log('批量删除会话' + (!error?'成功':'失败'), error, obj);
	 * }
	 * @see {@link NIM#deleteSession|删除服务器上的会话}
	 */
	NIMFn.deleteSessions = function(options) {
	    util.verifyOptions(options, 'sessions');
	    util.verifyParamType('sessions', options.sessions, 'array');
	    options.sessions.forEach(function(session, index) {
	        util.verifyOptions(session, 'scene to', true, 'sessions[' + index + '].');
	    });
	    this.processCallback(options);
	    this.sendCmd('deleteSessions', {
	        sessions: options.sessions.map(function(session) {
	            return session.scene + '|' + session.to;
	        })
	    }, options.callback);
	};


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var undef = util.undef;
	var notundef = util.notundef;
	var device = __webpack_require__(47);

	/**
	 * 发送文本消息
	 *
	 * - 文本消息是消息的一种, 请参考{@link IMMessage|消息}
	 * 
	 * @memberOf NIM#
	 * @method sendText
	 * 
	 * @param  {Object}             options                         配置参数
	 * @param  {String}             options.scene                   {@link IMMessage.scene|场景}
	 * @param  {String|Number}      options.to                      接收方, 对方帐号或者群id
	 * @param  {String}             options.text                    文本消息内容
	 * @param  {Boolean}            [options.resend]                是否是重发
	 * @param  {String}             [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}             [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {String}             [options.pushContent]           自定义推送文案
	 * @param  {String}             [options.pushPayload]           自定义的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {Boolean}            [options.isHistoryable=true]    是否存储云端历史
	 * @param  {Boolean}            [options.isRoamingable=true]    是否支持漫游
	 * @param  {Boolean}            [options.isSyncable=true]       是否支持发送者多端同步
	 * @param  {Boolean}            [options.cc]                    是否支持抄送
	 * @param  {Boolean}            [options.isPushable=true]       是否需要推送
	 * @param  {Boolean}            [options.isOfflinable=true]     是否要存离线
	 * @param  {Boolean}            [options.isUnreadable=true]     是否计入消息未读数
	 * @param  {Boolean}            [options.needPushNick=true]     是否需要推送昵称
	 * @param  {done}               options.done                    结果回调函数
	 * @return {Message}                                            {@link IMMessage|消息}
	 *
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 * 
	 * @example
	 * var msg = nim.sendText({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     text: 'hello',
	 *     done: sendMsgDone
	 * });
	 * console.log('正在发送p2p text消息, id=' + msg.idClient);
	 * pushMsg(msg);
	 * function sendMsgDone(error, msg) {
	 *     console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient, error, msg);
	 * }
	 */

	/**
	 * 文件上传进度回调
	 * @callback uploadprogress
	 * @param {Object} obj                  进度信息
	 * @param {Number} obj.total            文件总大小
	 * @param {Number} obj.loaded           已经上传的大小
	 * @param {Number} obj.percentage       上传百分比
	 * @param {String} obj.percentageText   上传百分比的文字表示
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */
	/**
	 * 预览文件
	 *
	 * - 开发者可以预览文件, 支持以下几种场景
	 *     - 通过参数`fileInput`传入文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
	 *     - 通过参数`blob`传入 Blob 对象
	 *     - 通过参数`dataURL`传入包含 MIME type 和 base64 数据的 data URL
	 * - SDK会将文件上传到文件服务器, 然后将拿到的文件对象在`done`回调中传给开发者, 文件对象有以下几种
	 *     - {@link Image|图片对象}
	 *     - {@link Audio|音频对象}
	 *     - {@link Video|视频对象}
	 *     - {@link File|文件对象}
	 * - 开发者在拿到文件对象之后, 可以进行处理, 然后调用{@link NIM#sendFile|发送文件消息}来发送文件消息。
	 * - 文件大小限制为最大 100M
	 *     - 高级浏览器会在上传前就检测文件大小
	 *     - IE8/IE9 会在上传完成后检测文件大小
	 * 
	 * @memberOf NIM#
	 * @method previewFile
	 *
	 * @param  {Object}         options                     配置参数
	 * @param  {String}         [options.type]              文件过滤器
	 * - image会过滤掉非图片的文件, audio过滤掉非音频, video会过滤掉非视频的文件
	 * - IE8/IE9 不支持文件过滤
	 * @param  {String|Node}    [options.fileInput]         文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
	 * @param  {Blob}           [options.blob]              Blob 对象
	 * @param  {String}         [options.dataURL]           包含 MIME type 和 base64 数据的 data URL
	 * @param  {uploadprogress} [options.uploadprogress]    上传进度, ie9以下不支持上传进度
	 * @param  {done}           options.done                结果回调函数, 成功时会收到文件对象, 请参考
	 * - {@link Image|图片对象}
	 * - {@link Audio|音频对象}
	 * - {@link Video|视频对象}
	 * - {@link File|文件对象}
	 * @return {Void}
	 * 
	 * @see {@link NIM#sendFile|发送文件消息}
	 *
	 * @example
	 * nim.previewFile({
	 *     type: 'image',
	 *     fileInput: fileInput,
	 *     uploadprogress: function(obj) {
	 *         console.log('文件总大小: ' + obj.total + 'bytes');
	 *         console.log('已经上传的大小: ' + obj.loaded + 'bytes');
	 *         console.log('上传进度: ' + obj.percentage);
	 *         console.log('上传进度文本: ' + obj.percentageText);
	 *     },
	 *     done: function(error, file) {
	 *         console.log('上传image' + (!error?'成功':'失败'));
	 *         // show file to the user
	 *         if (!error) {
	 *             var msg = nim.sendFile({
	 *                 scene: 'p2p',
	 *                 to: 'account',
	 *                 file: file,
	 *                 done: sendMsgDone
	 *             });
	 *             console.log('正在发送p2p image消息, id=' + msg.idClient);
	 *             pushMsg(msg);
	 *         }
	 *     }
	 * });
	 */

	/**
	 * 上传完成回调
	 * @callback uploaddone
	 * @param {NIMError}    error   是否出错
	 * @param {Object}      file    上传成功时会包含文件对象, 请参考
	 *                              {@link Image|图片对象}
	 *                              {@link Audio|音频对象}
	 *                              {@link Video|视频对象}
	 *                              {@link File|文件对象}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */
	/**
	 * 发送文件消息之前的回调函数
	 * @callback beforesend
	 * @param {String} idClient SDK生成的ID
	 * @see {@link NIM#sendFile|发送文件消息}
	 */
	/**
	 * 发送文件消息
	 *
	 * - 文件消息是{@link IMMessage.type|消息类型}的一种
	 * - 开发者可以直接发送文件消息
	 *     - 支持以下几种场景
	 *         - 通过参数`fileInput`传入文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
	 *         - 通过参数`blob`传入 Blob 对象
	 *         - 通过参数`dataURL`传入包含 MIME type 和 base64 数据的 data URL
	 *     - SDK会先将文件上传到文件服务器, 然后把拿到的文件对象在`uploaddone`回调中传给用户, 然后将其拼装成文件消息发送出去。
	 * - 开发者也可以先{@link NIM#previewFile|预览文件}来获取文件对象, 然后调用此接口发送文件消息。
	 *     - 通过参数`file`传入文件
	 * - 直接发送文件消息的话会在`beforesend`回调里面传入SDK生成的`idClient`, 如果先预览文件再发送, 那么此接口会直接返回`idClient`
	 * - 参数`type`指定了要发送的文件类型, 包括图片、音频、视频和普通文件, 对应的值分别为`'image'`、`'audio'`、`'video'`和`'file'`, 不传默认为`'file'`。
	 * - 图片、音频、视频和普通文件的区别在于具体的文件信息不一样, 具体字段请参考
	 *     - {@link Image|图片对象}
	 *     - {@link Audio|音频对象}
	 *     - {@link Video|视频对象}
	 *     - {@link File|文件对象}
	 * - 文件大小限制为最大100M
	 *     - 高级浏览器会在上传前就检测文件大小
	 *     - IE8和IE9会在上传完成后检测文件大小
	 * 
	 * @memberOf NIM#
	 * @method sendFile
	 *
	 * @param  {Object}         options                         配置参数
	 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
	 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
	 * @param  {String}         [options.type]                  文件过滤器, 
	 *                                                          `'image'`会过滤掉非图片的文件, `'audio'`过滤掉非音频, `'video'`会过滤掉非视频的文件, 
	 *                                                          IE8/IE9 不支持文件过滤
	 * @param  {String|Node}    [options.fileInput]             文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
	 * @param  {Blob}           [options.blob]                  Blob 对象
	 * @param  {String}         [options.dataURL]               MIME type 和 base64 数据的 data URL
	 * @param  {Array}          [options.file]                  文件对象, 开发者可以通过{@link NIM#previewFile|预览文件}拿到文件对象
	 * @param  {Boolean}        [options.resend=false]          是否是重发
	 * @param  {Function}       [options.beginupload]           开始上传图片的回调
	 * - 如果开发者传入 fileInput, 在此回调之前不能修改 fileInput
	 * - 在此回调之后可以取消图片上传, 此回调会接收一个参数 `upload`, 调用 `upload.abort();` 来取消文件上传
	 * @param  {uploadprogress} [options.uploadprogress]        上传进度, IE9以下不支持上传进度
	 * @param  {uploaddone}     [options.uploaddone]            上传完成回调
	 * @param  {beforesend}     [options.beforesend]            发送文件消息之前的回调函数
	 * @param  {Boolean}        [options.resend]                是否是重发
	 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}         [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {String}         [options.pushContent]           自定义推送文案
	 * @param  {String}         [options.pushPayload]           自定义的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
	 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
	 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
	 * @param  {Boolean}        [options.cc]                    是否支持抄送
	 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
	 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
	 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
	 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
	 * @param  {done}           options.done                结果回调函数
	 * @return {Void|Message}
	 * - 如果提供了参数fileInput, 那么先上传文件到服务器再发送, 不会返回{@link IMMessage|消息}, 会在beforesend里面返回{@link IMMessage|消息}. 
	 * - 如果提供了参数file, 那么直接发送文件消息, 返回{@link IMMessage|消息}
	 *
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * nim.sendFile({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     type: 'image',
	 *     fileInput: fileInput,
	 *     uploadprogress: function(obj) {
	 *         console.log('文件总大小: ' + obj.total + 'bytes');
	 *         console.log('已经上传的大小: ' + obj.loaded + 'bytes');
	 *         console.log('上传进度: ' + obj.percentage);
	 *         console.log('上传进度文本: ' + obj.percentageText);
	 *     },
	 *     uploaddone: function(error, file) {
	 *         console.log('上传' + (!error?'成功':'失败'), error, file);
	 *     },
	 *     beforesend: function(msg) {
	 *         console.log('正在发送p2p image消息, id=' + msg.idClient);
	 *         pushMsg(msg);
	 *     },
	 *     done: sendMsgDone
	 * });
	 */

	/**
	 * 发送自定义消息
	 * 
	 * - 自定义消息是{@link IMMessage.type|消息类型}的一种
	 * - 下面的代码用自定义消息实现了`石头剪刀布`游戏
	 * 
	 * @memberOf NIM#
	 * @method sendCustomMsg
	 *
	 * @param  {Object}         options                         配置参数
	 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
	 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
	 * @param  {String}         options.content                 自定义消息的消息内容, 推荐使用JSON格式构建
	 * @param  {Boolean}        [options.resend]                是否是重发
	 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}         [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {String}         [options.pushContent]           自定义推送文案
	 * @param  {String}         [options.pushPayload]           自定义的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
	 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
	 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
	 * @param  {Boolean}        [options.cc]                    是否支持抄送
	 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
	 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
	 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
	 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
	 * @return {Message}                            {@link IMMessage|消息}
	 *
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * var value = Math.ceil(Math.random()*3);
	 * var content = {
	 *     type: 1,
	 *     data: {
	 *         value: value
	 *     }
	 * };
	 * var msg = nim.sendCustomMsg({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     content: JSON.stringify(content),
	 *     done: sendMsgDone
	 * });
	 * console.log('正在发送p2p自定义消息, id=' + msg.idClient);
	 * pushMsg(msg);
	 */

	/**
	 * 发送地理位置消息
	 * 
	 * - 地理位置消息是{@link IMMessage.type|消息类型}的一种, `geo`参数请参考{@link Geo|地理位置对象}
	 * 
	 * @method sendGeo
	 * @memberOf NIM#
	 *
	 * @param  {Object}         options                         配置参数
	 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
	 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
	 * @param  {Object}         options.geo                     地理位置对象
	 * @param  {Number}         options.geo.lng                 经度
	 * @param  {Number}         options.geo.lat                 纬度
	 * @param  {String}         options.geo.title               地址描述
	 * @param  {Boolean}        [options.resend]                是否是重发
	 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}         [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {String}         [options.pushContent]           自定义推送文案
	 * @param  {String}         [options.pushPayload]           自定义的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
	 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
	 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
	 * @param  {Boolean}        [options.cc]                    是否支持抄送
	 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
	 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
	 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
	 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
	 * @return {Message}                            {@link IMMessage|消息}
	 * 
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * var msg = nim.sendGeo({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     geo: {
	 *         lng: '116.3833',
	 *         lat: '39.9167',
	 *         title: 'Beijing'
	 *     },
	 *     done: sendMsgDone
	 * });
	 * console.log('正在发送p2p geo消息, id=' + msg.idClient);
	 * pushMsg(msg);
	 */
	NIMFn.sendGeo = function(options) {
	    var self = this;
	    options.type = 'geo';
	    self.processCallback(options);
	    options.msg = new self.message.GeoMessage(options);
	    return self.sendMsg(options);
	};

	/**
	 * 发送欢迎语消息
	 * 
	 * - 欢迎语消息是{@link IMMessage.type|消息类型}的一种
	 *
	 * @method sendTipMsg
	 * @memberOf NIM#
	 *
	 * @param  {Object}         options                         配置参数
	 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
	 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
	 * @param  {String}         options.content                 欢迎语内容, 推荐使用JSON格式构建
	 * @param  {Boolean}        [options.resend]                是否是重发
	 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}         [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {String}         [options.pushContent]           自定义推送文案
	 * @param  {String}         [options.pushPayload]           自定义的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
	 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
	 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
	 * @param  {Boolean}        [options.cc]                    是否支持抄送
	 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
	 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
	 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
	 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
	 * @return {Message}        {@link IMMessage|消息}
	 *
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * var msg = nim.sendTipMsg({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     content: 'tips',
	 *     done: sendMsgDone
	 * });
	 * console.log('正在发送p2p欢迎语消息, id=' + msg.idClient);
	 * pushMsg(msg);
	 */
	NIMFn.sendTipMsg = function(options) {
	    var self = this;
	    options.type = 'tip';
	    self.processCallback(options);
	    options.msg = new self.message.TipMessage(options);
	    return self.sendMsg(options);
	};

	NIMFn.beforeSendMsg = function(options) {
	    var self = this;
	    var protocol = self.protocol;
	    var msg = options.msg;
	    // 如果是发送给自己, 需要带上设备号
	    if (msg.to === self.account) { msg.fromDeviceId = device.deviceId; }
	    // 在消息中带上当前用户的信息更新时间
	    msg.userUpdateTime = protocol.myInfo && protocol.myInfo.updateTime;
	    // 生成命令
	    var cmd;
	    // 区分点对点消息和群消息
	    switch (msg.getScene()) {
	    case 'p2p':
	        cmd = 'sendMsg';
	        break;
	    case 'team':
	        cmd = 'sendTeamMsg';
	        break;
	    default:
	        break;
	    }
	    // 是否是过滤消息
	    if (!!options.filter) {
	        cmd = 'sendFilterMsg';
	        msg.filter = true;
	    }
	    options.cmd = cmd;
	};

	/**
	 * 标记消息为已收到
	 * 
	 * - 如果没有消息、或者支持数据库、或者设置了自动标记, 那么直接返回
	 * 
	 * @memberOf NIM#
	 * @method markMsgRead
	 *
	 * @param  {Message|Message[]}  msgs    待标记的消息或者消息数组
	 * @return {Void}
	 *
	 * @example
	 * nim.markMsgRead(someMsg);
	 * // or
	 * nim.markMsgRead([someMsg]);
	 */
	NIMFn.markMsgRead = function(msgs) {
	    var self = this;
	    var protocol = self.protocol;
	    if (!msgs || self.db.enable || protocol.options.autoMarkRead) { return; }
	    protocol.markMsgRead(msgs, true);
	};

	/**
	 * 获取云端历史记录
	 *
	 * - 该接口用于获取一段时间内的历史消息, 由参数`beginTime`和`endTime`来控制时间范围。
	 *     - 当`reverse`为`false`时, 后续查询的`endTime`对应上次查询的最后一条消息的`time`字段
	 *     - 当`reverse`为`true`时, 后续查询的`beginTime`对应上次查询的最后一条消息的`time`字段
	 * - 如果要搜索历史消息, 请参考{@link NIM#searchHistoryMsgs|获取包含关键词的历史消息}
	 * 
	 * @method getHistoryMsgs
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options                 配置参数
	 * @param  {String}     options.scene           请参考{@link IMMessage.scene|消息场景}
	 * @param  {String}     options.to              聊天对象, 账号或者群id
	 * @param  {Number}     [options.beginTime]     时间戳, 开始时间, 精确到ms, 默认为0
	 * @param  {Number}     [options.endTime]       时间戳, 结束时间, 精确到ms, 默认为服务器的当前时间
	 * @param  {String}     [options.lastMsgId]     上次查询的最后一条消息的`idServer`, 第一次不填
	 * @param  {Number}     [options.limit]         本次查询的消息数量限制, 最多100条, 默认100条
	 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从`endTime`开始往前查找历史消息;
	 *                                              `true`表示从`beginTime`开始往后查找历史消息
	 * @param  {Boolean}    [options.asc=false]     默认`false`表示返回的消息按时间逆序排序;
	 *                                              `true`表示按时间正序排序
	 * @param  {done}       options.done            结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
	 * @return {Void}
	 *
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * nim.getHistoryMsgs({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     done: getHistoryMsgsDone
	 * });
	 * function getHistoryMsgsDone(error, obj) {
	 *     console.log('获取云端历史记录' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         console.log(obj.msgs);
	 *     }
	 * }
	 */
	NIMFn.getHistoryMsgs = function(options) {
	    var self = this;
	    util.verifyOptions(options, 'scene to');
	    util.verifyParamValid('scene', options.scene, self.message.validScenes);
	    if (typeof options.beginTime === 'undefined') {
	        options.beginTime = 0;
	    }
	    util.verifyParamType('beginTime', options.beginTime, 'number');
	    if (typeof options.endTime === 'undefined') {
	        options.endTime = 0;
	    }
	    util.verifyParamType('endTime', options.endTime, 'number');
	    if (typeof options.lastMsgId === 'undefined') {
	        options.lastMsgId = '0';
	    }
	    if (typeof options.limit === 'undefined') {
	        options.limit = 100;
	    }
	    util.verifyParamType('limit', options.limit, 'number');
	    util.verifyParamMax('limit', options.limit, 100);
	    if (notundef(options.reverse)) {
	        util.verifyParamType('reverse', options.reverse, 'boolean');
	    } else {
	        options.reverse = false;
	    }
	    if (notundef(options.asc)) {
	        util.verifyParamType('asc', options.asc, 'boolean');
	    } else {
	        options.asc = false;
	    }
	    self.processCallback(options);

	    if (options.asc) {
	        options.cbaop = function(error, obj) {
	            if (!error) {
	                obj.msgs = obj.msgs.reverse();
	            }
	        };
	    }

	    var cmd;
	    switch (options.scene) {
	    case 'p2p':
	        cmd = 'getHistoryMsgs';
	        break;
	    case 'team':
	        cmd = 'getTeamHistoryMsgs';
	        break;
	    default:
	        break;
	    }
	    var content = {
	        scene: options.scene,
	        to: options.to,
	        beginTime: options.beginTime,
	        endTime: options.endTime,
	        lastMsgId: options.lastMsgId,
	        limit: options.limit,
	        reverse: options.reverse
	    };
	    self.sendCmd(cmd, content, options.callback);
	};

	/**
	 * 获取云端包含关键词的历史记录
	 *
	 * - 跟{@link NIM#getHistoryMsgs|获取历史消息}接口类似, 只是去掉了参数`lastMsgId`, 增加了参数`keyword(要搜索的关键词)`
	 * 
	 * @method searchHistoryMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options 配置参数
	 * @param  {String}     options.scene           {@link IMMessage.scene|场景}
	 * @param  {String}     options.to              聊天对象, 账号或者群id
	 * @param  {String}     options.keyword         待搜索的关键词
	 * @param  {Number}     [options.beginTime]     时间戳, 开始时间, 精确到ms, 默认为0
	 * @param  {Number}     [options.endTime]       时间戳, 结束时间, 精确到ms, 默认为服务器的当前时间
	 * @param  {Number}     [options.limit]         本次查询的消息数量限制, 最多100条, 默认100条
	 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从`endTime`开始往前查找历史消息;
	 *                                              `true`表示从`beginTime`开始往后查找历史消息
	 * @param  {Boolean}    [options.asc=false]     默认`false`表示返回的消息按时间逆序排序;
	 *                                              `true`表示按时间正序排序
	 * @param  {done}       options.done            结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
	 * @return {Void}
	 * 
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * nim.searchHistoryMsgs({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     keyword: 'keyword',
	 *     done: searchHistoryMsgsDone
	 * });
	 * function searchHistoryMsgsDone(error, obj) {
	 *     console.log('获取云端包含关键词的历史记录' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         console.log(obj.msgs);
	 *     }
	 * }
	 */
	NIMFn.searchHistoryMsgs = function(options) {
	    var self = this;
	    util.verifyOptions(options, 'scene to keyword');
	    util.verifyParamValid('scene', options.scene, self.message.validScenes);
	    if (typeof options.beginTime === 'undefined') {
	        options.beginTime = 0;
	    }
	    util.verifyParamType('beginTime', options.beginTime, 'number');
	    if (typeof options.endTime === 'undefined') {
	        options.endTime = 0;
	    }
	    util.verifyParamType('endTime', options.endTime, 'number');
	    if (typeof options.limit === 'undefined') {
	        options.limit = 100;
	    }
	    util.verifyParamType('limit', options.limit, 'number');
	    util.verifyParamMax('limit', options.limit, 100);
	    if (notundef(options.reverse)) {
	        util.verifyParamType('reverse', options.reverse, 'boolean');
	    } else {
	        options.reverse = false;
	    }
	    if (notundef(options.asc)) {
	        util.verifyParamType('asc', options.asc, 'boolean');
	    } else {
	        options.asc = false;
	    }
	    self.processCallback(options);

	    if (options.asc) {
	        options.cbaop = function(error, obj) {
	            if (!error) {
	                obj.msgs = obj.msgs.reverse();
	            }
	        };
	    }

	    var cmd;
	    switch (options.scene) {
	    case 'p2p':
	        cmd = 'searchHistoryMsgs';
	        break;
	    case 'team':
	        cmd = 'searchTeamHistoryMsgs';
	        break;
	    default:
	        break;
	    }
	    var content = util.filterObj(options, 'scene to beginTime endTime keyword limit reverse');
	    self.sendCmd(cmd, content, options.callback);
	};

	/**
	 * 获取本地历史记录
	 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
	 *
	 * @method getLocalMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options                     配置参数
	 * @param  {String}     options.scene               {@link IMMessage.scene|场景}
	 * @param  {String}     options.to                  聊天对象, 账号或者群id
	 * @param  {String}     [options.type]              {@link IMMessage.type|消息类型}, 默认查找所有类型的消息
	 * @param  {Number}     [options.lastMsgIdClient]   上次查询的最后一条消息的`idClient`, 第一次不填
	 * @param  {Number}     [options.limit]             本次查询的消息数量限制, 最多 100 条, 默认 100 条
	 * @param  {Boolean}    [options.reverse=false]     默认`false`表示从最近的消息开始往前查找本地消息;
	 *                                                  `true`表示从第一条消息开始往后查找本地消息
	 * @param  {Boolean}    [options.asc=false]         默认`false`表示返回的消息按时间逆序排序;
	 *                                                  `true`表示按时间正序排序
	 * @param  {done}       options.done                结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
	 * @return {Void}
	 * 
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 * 
	 * @example
	 * nim.getLocalMsgs({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     lastMsgIdClient: 'lastMsgIdClient',
	 *     limit: 100,
	 *     done: getLocalMsgsDone
	 * });
	 * function getLocalMsgsDone(error, obj) {
	 *     console.log('获取本地消息' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         pushMsg(obj.msgs);
	 *     }
	 * }
	 */
	NIMFn.getLocalMsgs = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        msgs = [];

	    util.verifyOptions(options, 'scene to');
	    util.verifyParamValid('scene', options.scene, self.message.validScenes);
	    options.sessionId = options.scene + '-' + options.to;
	    if (notundef(options.type)) {
	        util.verifyParamValid('type', options.type, self.message.validTypes);
	    }
	    if (undef(options.limit)) {
	        options.limit = 100;
	    }
	    util.verifyParamType('limit', options.limit, 'number');
	    util.verifyParamMax('limit', options.limit, 100);
	    if (notundef(options.reverse)) {
	        util.verifyParamType('reverse', options.reverse, 'boolean');
	    } else {
	        options.reverse = false;
	    }
	    if (notundef(options.asc)) {
	        util.verifyParamType('asc', options.asc, 'boolean');
	    } else {
	        options.asc = false;
	    }
	    self.processCallback(options);

	    if (db.enable) {
	        db.getMsgsBySessionId(options).then(function(records) {
	            msgs = records;
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        if (options.asc) {
	            msgs = msgs.reverse();
	        }
	        options.msgs = msgs;
	        options.done(error, options);
	    }
	};

	/**
	 * 获取包含关键词的本地历史记录
	 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
	 *
	 * @method searchLocalMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options                     配置参数
	 * @param  {String}     options.scene               {@link IMMessage.scene|场景}
	 * @param  {String}     options.to                  聊天对象, 账号或者群id
	 * @param  {String}     options.keyword             待搜索的关键词
	 * @param  {Number}     [options.lastMsgIdClient]   上次查询的最后一条消息的`idClient`, 第一次不填
	 * @param  {Number}     [options.limit]             本次查询的消息数量限制, 最多 100 条, 默认 100 条
	 * @param  {Boolean}    [options.reverse=false]     默认`false`表示从最近的消息开始往前查找本地消息;
	 *                                                  `true`表示从第一条消息开始往后查找本地消息
	 * @param  {Boolean}    [options.asc=false]         默认`false`表示返回的消息按时间逆序排序;
	 *                                                  `true`表示按时间正序排序
	 * @param  {done}       options.done                结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
	 * @return {Void}
	 * 
	 * @see {@link NIM#sendText|发送文本消息}
	 * @see {@link NIM#sendFile|发送文件消息}
	 * @see {@link NIM#sendGeo|发送地理位置消息}
	 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
	 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
	 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
	 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
	 *
	 * @example
	 * nim.searchLocalMsgs({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     keyword: 'keyword',
	 *     done: searchLocalMsgsDone
	 * });
	 * function searchLocalMsgsDone(error, obj) {
	 *     console.log('搜索本地消息' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         console.log(obj.msgs);
	 *     }
	 * }
	 */
	NIMFn.searchLocalMsgs = function(options) {
	    util.verifyOptions(options, 'keyword');
	    options.type = 'text';
	    return this.getLocalMsgs(options);
	};

	/**
	 * 获取 idClient 对应的本地消息
	 * - 如果不{@link support.db|支持数据库}, 算成功, 返回 null
	 * 
	 * @method getLocalMsgByIdClient
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String}     options.idClient    idClient
	 * @param  {Function}   options.done        结果回调函数, 成功时会额外附上{@link IMMessage|消息}
	 * @return {Void}
	 *
	 * @example
	 * nim.getLocalMsgByIdClient({
	 *     idClient: 'd7a1b2c63066e1038e9aa01321652370',
	 *     done: getLocalMsgByIdClientDone
	 * });
	 * function getLocalMsgByIdClientDone(error, obj) {
	 *     console.log('获取本地消息' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         console.log(obj.msg);
	 *     }
	 * }
	 */
	NIMFn.getLocalMsgByIdClient = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        msg = null;
	    util.verifyOptions(options, 'idClient');
	    self.processCallback(options);
	    if (db.enable) {
	        db.getMsgByIdClient(options.idClient).then(function(record) {
	            if (record) { msg = record; }
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.msg = msg;
	        options.done(error, options);
	    }
	};

	/**
	 * 获取 idClients 对应的本地消息
	 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
	 * 
	 * @method getLocalMsgsByIdClients
	 * @memberOf NIM#
	 *
	 * @param  {Object}     options             配置参数
	 * @param  {String[]}   options.idClients   idClients
	 * @param  {Function}   options.done        结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
	 * @return {Void}
	 *
	 * @example
	 * nim.getLocalMsgsByIdClients({
	 *     idClients: [
	 *         'd7a1b2c63066e1038e9aa01321652370',
	 *         '22e604c7811c23586355f63f24658525'
	 *     ],
	 *     done: getLocalMsgsByIdClientsDone
	 * });
	 * function getLocalMsgsByIdClientsDone(error, obj) {
	 *     console.log('获取本地消息' + (!error?'成功':'失败'), error, obj);
	 *     if (!error) {
	 *         console.log(obj.msgs);
	 *     }
	 * }
	 */
	NIMFn.getLocalMsgsByIdClients = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        msgs = [];
	    util.verifyOptions(options, 'idClients');
	    util.verifyParamType('idClients', options.idClients, 'array');
	    self.processCallback(options);
	    if (db.enable) {
	        db.getMsgsByIdClients(options.idClients).then(function(records) {
	            msgs = records.filter(function(record) {
	                return !!record;
	            });
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.msgs = msgs;
	        options.done(error, options);
	    }
	};

	/**
	 * 更新本地消息
	 * - 更新 `idClient` 对应的本地消息
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果对应的消息不存在, 算成功, 返回 null
	 * - 这些字段只会被更新到本地数据库, 不会被更新到服务器上
	 *
	 * @method updateLocalMsg
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options                 配置参数
	 * @param  {String}     options.idClient        idClient
	 * @param {String}      [options.localCustom]   自定义字段
	 * @param  {Function}   options.done            结果回调函数, 成功时会额外附上{@link IMMessage|消息}
	 * @return {Void}
	 * 
	 * @example
	 * nim.updateLocalMsg({
	 *     id: 'p2p-account',
	 *     localCustom: '{"key","value"}',
	 *     done: updateLocalMsgDone
	 * });
	 * function updateLocalMsgDone(error, obj) {
	 *     console.log('更新本地消息' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.updateLocalMsg = function(options) {
	    var self = this;
	    var db = self.db;
	    var error,
	        msg = null;
	    util.verifyOptions(options, 'idClient');
	    self.processCallback(options);
	    if (db.enable) {
	        var obj = util.filterObj(options, 'idClient localCustom');
	        db.updateMsg(obj).then(function(record) {
	            msg = record;
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.msg = msg;
	        options.done(error, options);
	    }
	};

	/**
	 * 删除本地消息
	 * - 删除 `idClient` 对应的本地消息
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果对应的消息不存在, 算成功
	 * 
	 * @method deleteLocalMsg
	 * @memberOf NIM#
	 *
	 * @param  {Object}             options             配置参数
	 * @param  {String|String[]}    options.idClient    idClient 或者 idClient 数组
	 * @param  {Function}           options.done        结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteLocalMsg({
	 *     idClient: 'd7a1b2c63066e1038e9aa01321652370',
	 *     done: deleteLocalMsgDone
	 * });
	 * function deleteLocalMsgDone(error, obj) {
	 *     console.log('删除本地消息' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.deleteLocalMsg = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    util.verifyOptions(options, 'idClient');
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteMsg(options.idClient).then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.done(error, options);
	    }
	};

	/**
	 * 删除某个会话的本地消息
	 * 
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 *
	 * @method deleteLocalMsgsBySession
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options         配置参数
	 * @param  {String}     options.scene   {@link IMMessage.scene|场景}
	 * @param  {String}     options.to      聊天对象, 账号或者群id
	 * @param  {Function}   options.done    结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteLocalMsgsBySession({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     done: deleteLocalMsgsBySessionDone
	 * });
	 * function deleteLocalMsgsBySession(error, obj) {
	 *     console.log('删除会话本地消息' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.deleteLocalMsgsBySession = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    util.verifyOptions(options, 'scene to');
	    util.verifyParamValid('scene', options.scene, self.message.validScenes);
	    options.sessionId = options.scene + '-' + options.to;
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteMsgsBySessionId(options.sessionId).then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.done(error, options);
	    }
	};

	/**
	 * 删除所有本地消息
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 此方法同时会清空所有的会话, 请开发者自己清空内存里面的会话列表
	 *
	 * @method deleteAllLocalMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Object} options 配置参数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteAllLocalMsgs({
	 *     done: deleteAllLocalMsgsDone
	 * });
	 * function deleteAllLocalMsgsDone(error, obj) {
	 *     console.log('删除所有本地消息' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.deleteAllLocalMsgs = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteAllMsgs().then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    }
	    function bingo() {
	        options.done(error, options);
	    }
	};


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var undef = util.undef;
	var notundef = util.notundef;
	var SystemMessage = __webpack_require__(111);

	/**
	 * 标记系统通知为已收到
	 * 
	 * @memberOf NIM#
	 * @method markSysMsgRead
	 *
	 * @param  {Object}     options                             配置参数
	 * @param  {SystemMessage|SystemMessage[]} options.sysMsgs  待标记的系统通知或者系统通知数组
	 * @param  {done}       options.done                        结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.markSysMsgRead({
	 *     sysMsgs: someSysMsg,
	 *     done: markSysMsgReadDone
	 * });
	 * function markSysMsgReadDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('标记系统通知为已收到' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.markSysMsgRead = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    var promise = Promise.resolve();
	    var protocol = self.protocol;
	    util.verifyOptions(options, 'sysMsgs');
	    var sysMsgs = options.sysMsgs;
	    // 标记系统通知为已读, 如果支持数据库那么更新数据库记录；如果不支持数据库, 并且不自动标记已读, 那么标记已读
	    if (db.enable) {
	        promise = db.markSysMsgRead(sysMsgs).then(function(records) {
	            protocol.onUpdateSysMsg(records);
	        });
	    } else if (!protocol.options.autoMarkRead) {
	        protocol.markSysMsgRead(sysMsgs, true);
	    }
	    // 更新系统通知未读数
	    promise.then(function() {
	        return protocol.getSysMsgUnread().then(function(sysMsgUnread) {
	            return protocol.updateSysMsgUnread(sysMsgs, sysMsgUnread, -1).then(function(sysMsgUnread) {
	                protocol.onUpdateSysMsgUnread(sysMsgUnread);
	                bingo();
	            });
	        });
	    }, function(event) {
	        error = event;
	        bingo();
	    });
	    function bingo() {
	        options.done(error, options);
	    }
	};

	/**
	 * 发送自定义系统通知
	 *
	 * - 开发者可以向其他用户或群发送自定义通知。
	 * - 自定义系统通知和自定义消息的区别如下
	 *     - 自定义消息属于{@link IMMessage|消息}, 会存储在云信的消息数据库中, 需要跟其他{@link IMMessage|消息}一同展现给用户。
	 *     - 自定义系统通知属于{@link SystemMessage|系统通知}, 用于第三方通知自己, 不会存储在云信的数据库中, SDK不会解析这些通知, SDK仅仅负责传递这些通知。
	 * 
	 * @method sendCustomSysMsg
	 * @memberOf NIM#
	 *
	 * @param  {Object}         options                                 配置参数
	 * @param  {String}         options.scene                           场景跟{@link IMMessage.scene|消息场景}的一样, 分为`p2p(点对点)`和`team(群)`。
	 * @param  {String|Number}  options.to                              接收方, 帐号或者群id
	 * @param  {String}         options.content                         自定义系统通知的内容, 推荐使用JSON格式构建
	 * @param  {String}         [options.apnsText]                      apns推送文案, 仅对接收方为iOS设备有效
	 * @param  {String}         [options.pushPayload]                   自定义系统通知的推送属性
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {Boolean}        [options.sendToOnlineUsersOnly=true]    是否只发送给在线用户。
	 *                                                                  true时只发送给在线用户, 如果接收方不在线, 这条通知将被丢弃。
	 *                                                                  适合发送即时通知, 比如正在输入。
	 *                                                                  false时假如接收方在线, 那么会立即收到该通知, 
	 *                                                                  假如接收方不在线, 会在其上线后推送过去。
	 * @param  {Boolean}        [options.cc]                            是否抄送
	 * @param  {Boolean}        [options.isPushable=true]               是否需要推送
	 * @param  {Boolean}        [options.needPushNick=false]            是否需要推送昵称
	 * @param  {done}           options.done                            结果回调函数
	 * @return {String}         SDK生成的ID
	 *
	 * @see {@link NIM#sendCustomMsg|发送自定义消息}
	 *
	 * @example
	 * var content = {
	 *     type: 'type',
	 *     value: 'value'
	 * };
	 * content = JSON.stringify(content);
	 * var msgId = nim.sendCustomSysMsg({
	 *     scene: 'p2p',
	 *     to: 'account',
	 *     content: content,
	 *     sendToOnlineUsersOnly: false,
	 *     apnsText: content,
	 *     done: sendCustomSysMsgDone
	 * });
	 * console.log('正在发送p2p自定义系统通知, id=' + msgId);
	 * function sendCustomSysMsgDone(error, msg) {
	 *     console.log(error);
	 *     console.log(msg);
	 *     console.log('发送' + msg.scene + '自定义系统通知' + (!error?'成功':'失败') + ', id=' + msg.idClient);
	 * }
	 */
	NIMFn.sendCustomSysMsg = function(options) {
	    var self = this;
	    util.verifyOptions(options, 'scene to content');
	    util.verifyParamValid('scene', options.scene, self.message.validScenes);
	    self.processCallback(options);
	    if (options.scene === 'p2p') {
	        options.type = 'customP2p';
	    } else {
	        options.type = 'customTeam';
	    }
	    options.sysMsg = new SystemMessage(options);
	    var cmd = 'sendCustomSysMsg';
	    // 是否是过滤消息
	    if (!!options.filter) {
	        cmd = 'sendFilterCustomSysMsg';
	    }
	    self.sendCmd(cmd, { sysMsg: options.sysMsg, single: true }, options.callback);
	    return self.formatReturnSysMsg(options.sysMsg);
	};

	NIMFn.formatReturnSysMsg = function(sysMsg) {
	    var self = this;
	    sysMsg = util.copy(sysMsg);
	    self.protocol.completeSysMsg(sysMsg);
	    sysMsg.status = 'sending';
	    sysMsg = SystemMessage.reverse(sysMsg);
	    return sysMsg;
	};

	/**
	 * 获取本地系统通知
	 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
	 *
	 * @method getLocalSysMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options                 配置参数
	 * @param  {String}     [options.category]      {@link SystemMessage.category|种类}
	 * @param  {String}     [options.type]          {@link SystemMessage.type|类型}
	 * @param  {String}     [options.lastIdServer]  上次查询的最后一条系统通知的`idServer`, 第一次不填
	 * @param  {Number}     [options.limit]         本次查询的消息数量限制, 最多 100 条, 默认 100 条
	 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从最近的系统通知开始往前查找本地系统通知；
	 *                                              `true`表示从第一条系统通知开始往后查找本地系统通知
	 * @param  {done}       options.done            结果回调函数, 成功时会额外附上{@link SystemMessage|系统通知}列表
	 * @return {Void}
	 *
	 * @example
	 * nim.getLocalSysMsgs({
	 *     lastIdServer: 'lastIdServer',
	 *     limit: 100,
	 *     done: getLocalSysMsgsDone
	 * });
	 * function getLocalSysMsgsDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('获取本地系统通知' + (!error?'成功':'失败'));
	 *     if (!error) {
	 *         console.log(obj.sysMsgs);
	 *     }
	 * }
	 */
	NIMFn.getLocalSysMsgs = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    var sysMsgs = [];
	    util.verifyOptions(options);
	    if (!!options.category) {
	        util.verifyParamValid('category', options.category, SystemMessage.validCategories);
	    }
	    if (!!options.type) {
	        util.verifyParamValid('type', options.type, SystemMessage.validTypes);
	    }
	    if (undef(options.limit)) {
	        options.limit = 100;
	    }
	    util.verifyParamType('limit', options.limit, 'number');
	    util.verifyParamMax('limit', options.limit, 100);
	    if (notundef(options.reverse)) {
	        util.verifyParamType('reverse', options.reverse, 'boolean');
	    } else {
	        options.reverse = false;
	    }
	    self.processCallback(options);

	    if (db.enable) {
	        db.getSysMsgs(options).then(function(records) {
	            sysMsgs = records;
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.sysMsgs = sysMsgs;
	        options.done(error, options);
	    }
	};

	/**
	 * 更新本地系统通知
	 * - 更新 `idServer` 对应的本地系统通知
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果对应的系统通知不存在, 算成功, 返回 null
	 * - 这些字段只会被更新到本地数据库, 不会被更新到服务器上
	 *
	 * @method updateLocalSysMsg
	 * @memberOf NIM#
	 * 
	 * @param  {Object}     options                 配置参数
	 * @param  {String}     options.idServer        idServer
	 * @param  {String}     [options.status]        状态
	 * @param  {String}     [options.localCustom]   自定义字段
	 * @param  {Function}   options.done            结果回调函数, 成功时会额外附上{@link SystemMessage|系统通知}
	 * @return {Void}
	 * 
	 * @example
	 * nim.updateLocalSysMsg({
	 *     idServer: '1234',
	 *     status: 'bingo',
	 *     localCustom: '{"key","value"}',
	 *     done: updateLocalSysMsgDone
	 * });
	 * function updateLocalSysMsgDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('更新本地系统通知' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.updateLocalSysMsg = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    var sysMsg = null;
	    util.verifyOptions(options, 'idServer');
	    self.processCallback(options);
	    if (db.enable) {
	        var obj = util.filterObj(options, 'idServer state localCustom');
	        db.updateSysMsg(obj).then(function(reocrd) {
	            sysMsg = reocrd;
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.sysMsg = sysMsg;
	        options.done(error, options);
	    }
	};

	/**
	 * 删除本地系统通知
	 * - 删除 `idServer` 对应的本地系统通知
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 * - 如果对应的系统通知不存在, 算成功
	 *
	 * @method deleteLocalSysMsg
	 * @memberOf NIM#
	 * 
	 * @param  {Object}             options             配置参数
	 * @param  {String|String[]}    options.idServer    idServer 或 idServer 数组
	 * @param  {Function}           options.done        结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteLocalSysMsg({
	 *     idServer: '1234',
	 *     done: deleteLocalSysMsgDone
	 * });
	 * function deleteLocalSysMsgDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('删除本地系统通知' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.deleteLocalSysMsg = function(options) {
	    var self = this;
	    var db = self.db;
	    var error;
	    util.verifyOptions(options, 'idServer');
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteSysMsg(options.idServer).then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    } else {
	        bingo();
	    }
	    function bingo() {
	        options.done(error, options);
	    }
	};

	/**
	 * 删除所有本地系统通知
	 * - 如果不{@link support.db|支持数据库}, 算成功
	 *
	 * @method deleteAllLocalSysMsgs
	 * @memberOf NIM#
	 * 
	 * @param  {Object}             options             配置参数
	 * @param  {Function}           options.done        结果回调函数
	 * @return {Void}
	 *
	 * @example
	 * nim.deleteAllLocalSysMsgs({
	 *     done: deleteAllLocalSysMsgsDone
	 * });
	 * function deleteAllLocalSysMsgsDone(error, obj) {
	 *     console.log(error);
	 *     console.log(obj);
	 *     console.log('删除所有本地系统通知' + (!error?'成功':'失败'));
	 * }
	 */
	NIMFn.deleteAllLocalSysMsgs = function(options) {
	    var error;
	    var self = this;
	    var db = self.db;
	    self.processCallback(options);
	    if (db.enable) {
	        db.deleteAllSysMsgs().then(function() {
	            bingo();
	        }, function(event) {
	            error = event;
	            bingo();
	        });
	    }
	    function bingo() {
	        self.protocol.onUpdateSysMsgUnread({});
	        options.done(error, options);
	    }
	};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);

	/**
	 * 获取聊天室服务器地址
	 *
	 * - 可以在 IM 连接上获取聊天室服务器地址
	 * 
	 * @memberOf NIM#
	 * @method getChatroomAddress
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} [options.chatroomId] 聊天室 id
	 * @return {Void}
	 *
	 * @example
	 * nim.getChatroomAddress({
	 *     chatroomId: 'chatroomId',
	 *     done: getChatroomAddressDone
	 * });
	 * function getChatroomAddressDone(error, obj) {
	 *     console.log('获取聊天室地址' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.getChatroomAddress = function(options) {
	    util.verifyOptions(options, 'chatroomId');
	    var self = this;
	    self.processCallback(options);
	    self.sendCmd('getChatroomAddress', options);
	};


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * 修改图片下载的名字
	 *
	 * @memberOf NIM#
	 * @method packFileDownloadName
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {String} options.name    下载的名字
	 * @return {String}                 修改图片下载名字后的图片 url
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var nameUrl = nim.packFileDownloadName({
	 *     url: url,
	 *     name: '测试.jpg'
	 * });
	 * console.log(nameUrl);
	 */

	/**
	 * 将音频 url 转为 mp3
	 * - 此方法会返回一个新的 url
	 * @memberOf NIM#
	 * @method audioToMp3
	 *
	 * @param {Object} options 配置参数
	 * @param {String} options.url url
	 * @return {String} 转为 mp3 后的 url
	 *
	 * @example
	 * var url = 'http://b12026.nos.netease.com/MTAxMTAxMA==/bmltYV8xMTQwMzFfMTQ1MTg4ODk5MjMxMV9mNmI1Y2QyZC03N2UzLTQxNmUtYWY5NC1iODlhZGY4ZTYzYWQ=';
	 * var mp3Url = nim.audioToMp3({
	 *     url: url
	 * });
	 * console.log(mp3Url);
	 */

	/**
	 * 修改图片质量
	 * 
	 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
	 * - 默认图片质量为100, 开发者可以降低图片质量来省流量
	 *
	 * @memberOf NIM#
	 * @method qualityImage
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {Int}    options.quality 图片质量, 必须为整数, 取值范围为 0-100, 此方法内部使用 Math.round 来格式化 quality
	 * @param  {done}   options.done    结果回调函数, 成功时附上修改质量后的图片 url
	 * @return {Void}
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var qualityUrl = nim.qualityImage({
	 *     url: url,
	 *     quality: 20,
	 *     done: qualityImageDone
	 * });
	 * function qualityImageDone(error, obj) {
	 *     console.log('修改图片质量' + (!error?'成功':'失败'), error, obj);
	 * }
	 * 
	 * @see {@link NIM#qualityImage|修改图片质量}
	 * @see {@link NIM#interlaceImage|interlace 图片}
	 * @see {@link NIM#rotateImage|旋转图片}
	 * @see {@link NIM#blurImage|高斯模糊图片}
	 * @see {@link NIM#cropImage|裁剪图片}
	 * @see {@link NIM#thumbnailImage|生成缩略图}
	 * @see {@link NIM#processImage|处理图片}
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */

	/**
	 * interlace 图片
	 * 
	 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
	 * - 在网络环境较差时, interlace 后的图片会以从模糊到清晰的方式呈现给用户
	 * 
	 * @memberOf NIM#
	 * @method interlaceImage
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {done}   options.done    结果回调函数, 成功时附上 interlace 后的图片 url
	 * @return {Void}
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var interlaceUrl = nim.interlaceImage({
	 *     url: url,
	 *     done: interlaceImageDone
	 * });
	 * function interlaceImageDone(error, obj) {
	 *     console.log('interlace 图片' + (!error?'成功':'失败'), error, obj);
	 * }
	 *
	 * @see {@link NIM#qualityImage|修改图片质量}
	 * @see {@link NIM#interlaceImage|interlace 图片}
	 * @see {@link NIM#rotateImage|旋转图片}
	 * @see {@link NIM#blurImage|高斯模糊图片}
	 * @see {@link NIM#cropImage|裁剪图片}
	 * @see {@link NIM#thumbnailImage|生成缩略图}
	 * @see {@link NIM#processImage|处理图片}
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */

	/**
	 * 旋转图片
	 *
	 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
	 * 
	 * @memberOf NIM#
	 * @method rotateImage
	 *
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {Int}    options.angle   旋转的角度, 正整数表示顺时针, 负整数表示逆时针, 必须为整数, 此方法内部会先将 angle 格式化为 [0, 360] 范围内的数字, 然后使用 Math.round 来格式化 angle
	 * @param  {done}   options.done    结果回调函数, 成功时附上旋转后的图片的 url
	 * @return {Void}
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var rotateUrl = nim.rotateImage({
	 *     url: url,
	 *     angle: 90,
	 *     done: rotateImageDone
	 * });
	 * function rotateImageDone(error, obj) {
	 *     console.log('旋转图片' + (!error?'成功':'失败'), error, obj);
	 * }
	 * 
	 * @see {@link NIM#qualityImage|修改图片质量}
	 * @see {@link NIM#interlaceImage|interlace 图片}
	 * @see {@link NIM#rotateImage|旋转图片}
	 * @see {@link NIM#blurImage|高斯模糊图片}
	 * @see {@link NIM#cropImage|裁剪图片}
	 * @see {@link NIM#thumbnailImage|生成缩略图}
	 * @see {@link NIM#processImage|处理图片}
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */

	/**
	 * 高斯模糊图片
	 * 
	 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
	 * 
	 * @memberOf NIM#
	 * @method blurImage
	 *
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {Number} radius          高斯模糊半径, 不包含中心点的像素, 取值范围 [1,50]
	 * @param  {Number} sigma           高斯模糊标准差, 不能小于 0
	 * @param  {done}   options.done    结果回调函数, 成功时附上高斯模糊后的图片 url
	 * @return {Void}
	 * 
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var blurUrl = nim.blurImage({
	 *     url: url,
	 *     radius: 5,
	 *     sigma: 3,
	 *     done: blurImageDone
	 * });
	 * function blurImageDone(error, obj) {
	 *     console.log('高斯模糊图片' + (!error?'成功':'失败'), error, obj);
	 * }
	 * 
	 * @see {@link NIM#qualityImage|修改图片质量}
	 * @see {@link NIM#interlaceImage|interlace 图片}
	 * @see {@link NIM#rotateImage|旋转图片}
	 * @see {@link NIM#blurImage|高斯模糊图片}
	 * @see {@link NIM#cropImage|裁剪图片}
	 * @see {@link NIM#thumbnailImage|生成缩略图}
	 * @see {@link NIM#processImage|处理图片}
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */

	/**
	 * 裁剪图片
	 *
	 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
	 * - 从坐标 (x, y) 处截取尺寸为 width*height 的图片, (0, 0) 代表左上角
	 * - width/height 不能小于0, 如果 width/height 大于图片的原始宽度/高度, 那么将被替换为图片的原始宽度/高度
	 *
	 * @memberOf NIM#
	 * @method cropImage
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {Int}    options.x       起点坐标 x, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
	 * @param  {Int}    options.y       起点坐标 y, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
	 * @param  {Int}    options.width   宽度, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
	 * @param  {Int}    options.height  高度, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
	 * @param  {done}   options.done    结果回调函数, 成功时附上裁剪后的图片的 url
	 * @return {Void}
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var cropUrl = nim.cropImage({
	 *     url: url,
	 *     x: 100,
	 *     y: 0,
	 *     width: 250,
	 *     height: 250,
	 *     done: function cropImageDone
	 * });
	 * function cropImageDone(error, obj) {
	 *     console.log('裁剪图片' + (!error?'成功':'失败'), error, obj);
	 * }
	 *
	 * @see {@link NIM#qualityImage|修改图片质量}
	 * @see {@link NIM#interlaceImage|interlace 图片}
	 * @see {@link NIM#rotateImage|旋转图片}
	 * @see {@link NIM#blurImage|高斯模糊图片}
	 * @see {@link NIM#cropImage|裁剪图片}
	 * @see {@link NIM#thumbnailImage|生成缩略图}
	 * @see {@link NIM#processImage|处理图片}
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */

	/**
	 * 生成缩略图
	 *
	 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
	 * - width/height 限制了缩略图的尺寸
	 *     - width/height 必须大于等于 0, 不能同时为 0, 必须小于 4096
	 * - 不同模式下生成的缩略图是不一样的, 目前支持以下三种模式
	 *     - `'cover'`: 原图片等比缩略, 缩略图一边等于请求的尺寸, 另一边大于请求的尺寸, 即缩略图刚好能覆盖住尺寸为 width*height 的矩形
	 *     - `'contain'`: 原图片等比缩略, 缩略图一边等于请求的尺寸, 另一边小于请求的尺寸, 即尺寸为 width*height 的矩形刚好能覆盖住缩略图
	 *     - `'crop'`: 先等比缩略原图片, 使得一边等于请求的尺寸, 另一边大于请求的尺寸, 然后对大于请求尺寸的那条边进行裁剪, 使得最终的图片大小刚好等于请求的尺寸
	 * - 如果缩略图尺寸大于图片尺寸, 默认情况下图片不会被放大, 可以传入参数`enlarge=true`来放大图片
	 * - `'crop'` 模式下可以传入参数 axis.x 或 axis.y 来控制最后一步裁剪的位置
	 *     - x/y 必须为整数, 取值范围为 0-10, 此方法内部使用 Math.round 来格式化 x/y
	 *     - x 为 0 时表示裁取最左端, x 为 10 时表示裁取最右端
	 *     - y 为 0 时表示裁取最上端, y 为 10 时表示裁取最下端
	 *     - x/y 默认值均为 5, 即裁取正中间
	 *
	 * @memberOf NIM#
	 * @method thumbnailImage
	 * 
	 * @param  {Object}     options                 配置参数
	 * @param  {String}     options.url             原图 url
	 * @param  {Int}        [options.width]         缩略图的最大宽度, 必须为整数, 此方法内部使用 Math.round 来格式化 width/height
	 * @param  {Int}        [options.height]        缩略图的最大高度, 必须为整数, 此方法内部使用 Math.round 来格式化 width/height
	 * @param  {String}     options.mode            缩略模式, 目前支持以下三种模式, 请参考上面的描述
	 * - `'cover'`
	 * - `'contain'`
	 * - `'crop'`
	 * @param  {Int}        [options.axis.x]        `'crop'` 模式下控制最后一步裁剪的位置, 请参考上面的描述
	 * @param  {Int}        [options.axis.y]        `'crop'` 模式下控制最后一步裁剪的位置, 请参考上面的描述
	 * @param  {Boolean}    [options.enlarge=false] 当图片尺寸小于要缩略的尺寸时, 是否放大图片, 默认`false`不放大
	 * @param  {done}       options.done            结果回调函数, 成功时附上缩略后的图片 url
	 * @return {Void}
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * var thumbnailUrl = nim.thumbnailImage({
	 *     url: url,
	 *     mode: 'cover',
	 *     width: 80,
	 *     height: 100,
	 *     done: thumbnailImageDone
	 * });
	 * function thumbnailImageDone(error, obj) {
	 *     console.log('生成缩略图' + (!error?'成功':'失败'), error, obj);
	 * }
	 * 
	 * @see {@link NIM#qualityImage|修改图片质量}
	 * @see {@link NIM#interlaceImage|interlace 图片}
	 * @see {@link NIM#rotateImage|旋转图片}
	 * @see {@link NIM#blurImage|高斯模糊图片}
	 * @see {@link NIM#cropImage|裁剪图片}
	 * @see {@link NIM#thumbnailImage|生成缩略图}
	 * @see {@link NIM#processImage|处理图片}
	 * @see {@link NIM#previewFile|预览文件}
	 * @see {@link NIM#sendFile|发送文件消息}
	 */

	/**
	 * 处理图片
	 *
	 * 此方法接收一组图片操作, 按操作顺序依次处理图片, 可选的操作包括：
	 * - {@link NIM#qualityImage|修改图片质量}
	 * - {@link NIM#interlaceImage|interlace 图片}
	 * - {@link NIM#rotateImage|旋转图片}
	 * - {@link NIM#blurImage|高斯模糊图片}
	 * - {@link NIM#cropImage|裁剪图片}
	 * - {@link NIM#thumbnailImage|生成缩略图}
	 * - {@link NIM#previewFile|预览文件}
	 * - {@link NIM#sendFile|发送文件消息}
	 * 
	 * 每个操作所需的参数请参考上面的各个方法, 除了上面方法列出来的参数之外, 每个操作需要提供操作类型, 分别是
	 * - `'quality'`
	 * - `'interlace'`
	 * - `'rotate'`
	 * - `'blur'`
	 * - `'crop'`
	 * - `'thumbnail'`
	 * 
	 * 请参考下面的示例代码
	 * 
	 * @memberOf NIM#
	 * @method processImage
	 * 
	 * @param  {Object} options         配置参数
	 * @param  {String} options.url     原图 url
	 * @param  {Array}  options.ops     操作序列
	 * @param  {done}   options.done    结果回调函数, 成功时附上处理后的图片 url
	 * @return {Void}
	 *
	 * @example
	 * // 裁剪后旋转
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
	 * nim.processImage({
	 *     url: url,
	 *     ops: [
	 *         {
	 *             type: 'crop',
	 *             x: 100,
	 *             y: 0,
	 *             width: 250,
	 *             height: 250,
	 *         },
	 *         {
	 *             type: 'thumbnail',
	 *             mode: 'cover',
	 *             width: 80,
	 *             height: 80
	 *         }
	 *     ],
	 *     done: processImageDone
	 * });
	 * function processImageDone(error, obj) {
	 *     console.log('处理图片' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);
	var ImageOp = __webpack_require__(107);

	NIMFn.getNosToken = function(options) {
	    this.sendCmd('getNosToken', {
	        responseBody: options.responseBody
	    }, options.callback);
	};

	NIMFn.packFileDownloadName = function(options) {
	    util.verifyOptions(options, 'url name');
	    var url = options.url;
	    return url + util.genUrlSep(url) + 'download=' + encodeURIComponent(options.name);
	};

	NIMFn.audioToMp3 = function(options) {
	    util.verifyOptions(options, 'url');
	    var url = options.url;
	    return url + util.genUrlSep(url) + 'audioTrans&type=mp3';
	};

	NIMFn.qualityImage = function(options) {
	    return this.beforeProcessImage(options, 'quality');
	};

	NIMFn.interlaceImage = function(options) {
	    return this.beforeProcessImage(options, 'interlace');
	};

	NIMFn.rotateImage = function(options) {
	    return this.beforeProcessImage(options, 'rotate');
	};

	NIMFn.blurImage = function(options) {
	    return this.beforeProcessImage(options, 'blur');
	};

	NIMFn.cropImage = function(options) {
	    return this.beforeProcessImage(options, 'crop');
	};

	NIMFn.thumbnailImage = function(options) {
	    return this.beforeProcessImage(options, 'thumbnail');
	};

	NIMFn.beforeProcessImage = function(options, type) {
	    var op = util.copy(options);
	    op.type = type;
	    options.ops = [op];
	    return this.processImage(options);
	};

	NIMFn.processImage = function(options) {
	    var self = this;
	    util.verifyOptions(options, 'url ops');
	    util.verifyParamType('ops', options.ops, 'array');
	    var imageOps = options.ops.map(function(op) {
	        util.verifyOptions(op, 'type');
	        util.verifyParamValid('type', op.type, ImageOp.validTypes);
	        return self['gen' + op.type.slice(0,1).toUpperCase() + op.type.slice(1) + 'Op'](op);
	    });
	    self.processCallback(options);
	    self.sendCmd('processImage', {
	        url: options.url,
	        imageOps: imageOps
	    }, options.callback);
	};

	NIMFn.genQualityOp = function(options) {
	    util.verifyOptions(options, 'quality');
	    util.verifyParamType('quality', options.quality, 'number');
	    util.verifyParamMin('quality', options.quality, 0);
	    util.verifyParamMax('quality', options.quality, 100);
	    var quality = Math.round(options.quality);
	    return new ImageOp({
	        type: options.type,
	        qualityQuality: quality
	    });
	};

	NIMFn.genInterlaceOp = function(options) {
	    return new ImageOp({
	        type: options.type
	    });
	};

	NIMFn.genRotateOp = function(options) {
	    util.verifyOptions(options, 'angle');
	    util.verifyParamType('angle', options.angle, 'number');
	    while (options.angle < 0) {
	        options.angle = options.angle + 360;
	    }
	    options.angle = options.angle % 360;
	    var angle = Math.round(options.angle);
	    return new ImageOp({
	        type: options.type,
	        rotateAngle: angle
	    });
	};

	NIMFn.genBlurOp = function(options) {
	    util.verifyOptions(options, 'radius sigma');
	    util.verifyParamType('radius', options.radius, 'number');
	    util.verifyParamMin('radius', options.radius, 1);
	    util.verifyParamMax('radius', options.radius, 50);
	    util.verifyParamType('sigma', options.sigma, 'number');
	    util.verifyParamMin('sigma', options.sigma, 0);
	    var radius = Math.round(options.radius);
	    var sigma = Math.round(options.sigma);
	    return new ImageOp({
	        type: options.type,
	        blurRadius: radius,
	        blurSigma: sigma
	    });
	};

	NIMFn.genCropOp = function(options) {
	    util.verifyOptions(options, 'x y width height');
	    util.verifyParamType('x', options.x, 'number');
	    util.verifyParamMin('x', options.x, 0);
	    util.verifyParamType('y', options.y, 'number');
	    util.verifyParamMin('y', options.y, 0);
	    util.verifyParamType('width', options.width, 'number');
	    util.verifyParamMin('width', options.width, 0);
	    util.verifyParamType('height', options.height, 'number');
	    util.verifyParamMin('height', options.height, 0);
	    var x = Math.round(options.x);
	    var y = Math.round(options.y);
	    var width = Math.round(options.width);
	    var height = Math.round(options.height);
	    return new ImageOp({
	        type: options.type,
	        cropX: x,
	        cropY: y,
	        cropWidth: width,
	        cropHeight: height
	    });
	};

	NIMFn.genThumbnailOp = (function() {
	    var modes = {
	        cover: 'z',
	        contain: 'x',
	        crop: 'y'
	    };
	    return function(options) {
	        util.verifyOptions(options, 'mode');
	        util.verifyParamValid('mode', options.mode, Object.keys(modes));
	        if (options.mode === 'contain') {
	            util.verifyParamAtLeastPresentOne(options, 'width height');
	        } else {
	            util.verifyOptions(options, 'width height');
	        }
	        if (util.undef(options.width)) { options.width = 0; }
	        if (util.undef(options.height)) { options.height = 0; }
	        util.verifyParamType('width', options.width, 'number');
	        util.verifyParamMin('width', options.width, 0);
	        util.verifyParamType('height', options.height, 'number');
	        util.verifyParamMin('height', options.height, 0);
	        var width = Math.round(options.width);
	        var height = Math.round(options.height);
	        var imageOp = new ImageOp({
	            type: options.type,
	            thumbnailMode: modes[options.mode],
	            thumbnailWidth: width,
	            thumbnailHeight: height
	        });
	        if (options.mode === 'crop') {
	            if (util.notundef(options.axis)) {
	                if (util.undef(options.axis.x)) { options.axis.x = 5; }
	                if (util.undef(options.axis.y)) { options.axis.y = 5; }
	                util.verifyParamMin('axis.x', options.axis.x, 0);
	                util.verifyParamMax('axis.x', options.axis.x, 10);
	                util.verifyParamMin('axis.y', options.axis.y, 0);
	                util.verifyParamMax('axis.y', options.axis.y, 10);
	                var x = Math.round(options.axis.x);
	                var y = Math.round(options.axis.y);
	                imageOp.thumbnailAxisX = x;
	                imageOp.thumbnailAxisY = y;
	            }
	        }
	        if (util.notundef(options.enlarge)) {
	            util.verifyParamType('enlarge', options.enlarge, 'boolean');
	            if (options.enlarge) {
	                imageOp.thumbnailEnlarge = 1;
	            }
	        }
	        return imageOp;
	    };
	}());


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;
	var util = __webpack_require__(10);

	/**
	 * 音频转文字
	 *
	 * - 仅支持通过{@link NIM#previewFile|previewFile}或者{@link NIM#sendFile|sendFile}拿到的音频 url, 或者收到的音频消息的 url
	 *
	 * @memberOf NIM#
	 * @method audioToText
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} options.url 音频 url
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上文本 text
	 * @return {Void}
	 *
	 * @example
	 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ1MTg5MDI2MjY0MF9lYzk1MWMyZC1hMzRmLTQ1YzctYWI2ZS1kZWE2NTA2M2Q4NjY=';
	 * nim.audioToText({
	 *     url: url,
	 *     done: audioToTextDone
	 * });
	 * function audioToTextDone(error, obj) {
	 *     console.log('语音转文字' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	NIMFn.audioToText = function(options) {
	    util.verifyOptions(options, 'url');
	    options.audioToText = util.filterObj(options, 'url');
	    var self = this;
	    self.processCallback(options);
	    self.sendCmd('audioToText', options);
	};


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var NIMFn = __webpack_require__(79).fn;

	// NIMFn.initDB = function(options) {
	//     var self = this;
	//     self.processCallback(options);
	//     var done = options.done;
	//     if (support.db) {
	//         db.init().then(done, done);
	//     } else {
	//         done();
	//     }
	// };

	NIMFn.clearDB = function(options) {
	    var self = this;
	    var db = self.db;
	    self.processCallback(options);
	    var done = options.done;
	    if (db.enable) {
	        db.clear().then(done, done);
	    } else {
	        done();
	    }
	};

	/**
	 * 删除数据库
	 * @private
	 * @param  {Object} options         配置参数
	 * @param  {done}   options.done    结果回调函数
	 * @return {Void}
	 */
	// NIMFn.deleteDB = function(options) {
	//     this.processCallback(options);
	//     var done = options.done;
	//     if (support.db) {
	//         db.destroy().then(done, done);
	//     } else {
	//         done();
	//     }
	// };


/***/ }
])
});
;