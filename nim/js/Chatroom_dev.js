(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Chatroom"] = factory();
	else
		root["Chatroom"] = factory();
})(this, function() {
return webpackJsonp_NIM_Web_SDK_v2_0_0_dev([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// ployfill
	__webpack_require__(1);
	__webpack_require__(2);
	// polyfill the global environment
	__webpack_require__(3).polyfill();

	var Chatroom = __webpack_require__(8);

	/**
	 * SDK 使用 {@link https://github.com/bestiejs/platform.js/|platform.js} 来检测浏览器平台, 通过 `Chatroom.platform` 来获取此库的引用
	 * @memberOf Chatroom
	 * @type {Object}
	 */
	Chatroom.platform = __webpack_require__(41);
	/**
	 * SDK 使用 {@link https://github.com/Raynos/xhr|xhr} 来发送 Ajax 请求, 通过 `Chatroom.xhr` 来获取此库的引用
	 * @memberOf Chatroom
	 * @type {Function}
	 */
	Chatroom.xhr = __webpack_require__(69);
	/**
	 * SDK 使用 {@link https://github.com/socketio/socket.io-client/tree/0.9|socket.io-client 0.9} 来建立 Socket 连接, 通过 `Chatroom.io` 或 `window.io` 来获取此库的引用
	 * @memberOf Chatroom
	 * @type {Object}
	 */
	Chatroom.io = __webpack_require__(44);
	/**
	 * SDK 使用 {@link https://github.com/Bill4Time/javascript-natural-sort|natural sort} 来对数组进行排序, 通过 `Chatroom.naturalSort` 来获取此库的引用
	 * @memberOf Chatroom
	 * @type {Function}
	 * @name naturalSort
	 */
	Chatroom.naturalSort = __webpack_require__(11);
	/**
	 * SDK 使用 {@link https://github.com/juliangruber/deep-access|deep access} 来获取对象的属性值, 通过 `Chatroom.deepAccess` 来获取此库的引用
	 * @type {Function}
	 */
	Chatroom.deepAccess = __webpack_require__(12);

	Chatroom.db = __webpack_require__(77);

	Chatroom.util = __webpack_require__(10);
	Chatroom.support = __webpack_require__(78);
	Chatroom.blob = __webpack_require__(37);

	module.exports = Chatroom;


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var ApiBase = __webpack_require__(9);
	var Protocol = __webpack_require__(38);
	// var util = require('util');
	var config = __webpack_require__(26);
	var logger = __webpack_require__(40);
	var ChatroomMessage = __webpack_require__(60);

	/**
	 * Chatroom constructor
	 * @constructor
	 * 
	 * @param {Object} options 配置参数
	 * @param {String}              options.appKey                          在云信管理后台查看应用的 appKey
	 * @param {String}              options.account                         帐号, 应用内唯一
	 * @param {String}              options.token                           帐号的 token, 用于建立连接
	 * @param {String} options.chatroomId 聊天室 id
	 * @param {String[]} options.chatroomAddresses 聊天室地址列表
	 * @param {String} [options.chatroomNick] 进入聊天室后展示的昵称, 如果不设置并且托管了用户资料, 那么使用用户资料里面的昵称
	 * @param {String} [options.chatroomAvatar] 进入聊天室后展示的头像, 如果不设置并且托管了用户资料, 那么使用用户资料里面的头像
	 * @param {String} [options.chatroomCustom] 扩展字段, 设置了之后, 通过{@link Chatroom#getChatroomMembers|getChatroomMembers}获取的聊天室成员信息会包含此字段
	 * @param {String} [options.chatroomEnterCustom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
	 * @param {Function}            [options.onconnect]                     连接建立后的回调, 会传入{@link ChatroomInfo|聊天室信息}
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
	 *         - `chatroomDismiss`: 聊天室解散了
	 *         - `managerKick`: 被管理员踢出
	 *         - `samePlatformKick`: 不允许同一个帐号重复登录同一个聊天室
	 *     - `message`: 文字描述的被踢的原因
	 * @param {Function}            [options.onerror]                       发生错误的回调, 会传入{@link NIMError|错误}对象
	 * @param {Function}            [options.onmsg]                         收到消息的回调, 会传入{@link ChatroomMessage|消息}对象
	 *
	 * @example
	 * var chatroom = new Chatroom({
	 *     appKey: 'appKey',
	 *     account: 'account',
	 *     token: 'token',
	 *     chatroomId: 'chatroomId',
	 *     chatroomAddresses: [
	 *         'address1',
	 *         'address2'
	 *     ],
	 *     onconnect: onChatroomConnect,
	 *     onerror: onChatroomError,
	 *     onwillreconnect: onChatroomWillReconnect,
	 *     ondisconnect: onChatroomDisconnect,
	 *     // 消息
	 *     onmsg: onChatroomMsg
	 * });
	 * function onChatroomConnect(chatroom) {
	 *     console.log('进入聊天室', chatroom);
	 * }
	 * function onChatroomWillReconnect(obj) {
	 *     // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
	 *     console.log('即将重连', obj);
	 * }
	 * function onChatroomDisconnect(error) {
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
	 * function onChatroomError(error, obj) {
	 *     console.log('发生错误', error, obj);
	 * }
	 * function onChatroomMsg(msg) {
	 *     console.log('收到聊天室消息', msg);
	 * }
	 */
	function Chatroom(options) {
	    var self = this;
	    self.account = options.account;
	    self.message = new ChatroomMessage({
	        account: self.account
	    });
	    self.protocol = new Protocol(options);
	    self.protocol.api = self;
	    self.protocol.message = self.message;
	}

	Chatroom.setDebug = function(debug) {
	    logger.setDebug(debug);
	};

	var ChatroomFn = Chatroom.fn = Chatroom.prototype = Object.create(ApiBase.prototype);

	Chatroom.info = ChatroomFn.info = config.info;

	/**
	 * 获取当前聊天室的信息
	 * 
	 * @memberOf Chatroom#
	 * @method getChatroom
	 * 
	 * @param  {Object} options 配置参数
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomInfo|聊天室信息}
	 * @return {Void}
	 * 
	 * @example
	 * chatroom.getChatroom({
	 *     done: getChatroomDone
	 * });
	 * function getChatroomDone(error, obj) {
	 *     console.log('获取当前聊天室的信息' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	ChatroomFn.getChatroom = function(options) {
	    var self = this;
	    self.processCallback(options);
	    self.sendCmd('getChatroom', options);
	};

	/**
	 * 解散聊天室
	 *
	 * - 聊天室解散后, 所有人都会被踢出聊天室, 所有人都不能再次进入该聊天室
	 * 
	 * @memberOf Chatroom#
	 * @method dismissChatroom
	 * 
	 * @param  {Object} options 配置参数
	 * @param {Function} options.done 结果回调函数
	 * @return {Void}
	 * 
	 * @example
	 * chatroom.dismissChatroom({
	 *     done: dismissChatroomDone
	 * });
	 * function dismissChatroomDone(error, obj) {
	 *     console.log('解散聊天室' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	ChatroomFn.dismissChatroom = function(options) {
	    var self = this;
	    self.processCustom(options);
	    self.processCallback(options);
	    self.sendCmd('dismissChatroom', options);
	};

	module.exports = Chatroom;

	__webpack_require__(67);
	__webpack_require__(68);


/***/ },
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Protocol = __webpack_require__(39);
	var util = __webpack_require__(10);
	var config = __webpack_require__(26);
	// parser start
	var Parser = __webpack_require__(49);
	var configMap = __webpack_require__(50);
	var serializeMap = __webpack_require__(52);
	var unserializeMap = __webpack_require__(53);
	var parser = Parser.getInstance({
	    type: 'Chatroom',
	    configMap: configMap,
	    serializeMap: serializeMap,
	    unserializeMap: unserializeMap
	});
	// parser end
	var Chatroom = __webpack_require__(54);
	var ChatroomMember = __webpack_require__(55);

	function ChatroomProtocol(options) {
	    var self = this;
	    util.verifyOptions(options, 'appKey account token chatroomId chatroomAddresses');
	    util.verifyParamType('chatroomAddresses', options.chatroomAddresses, 'array');
	    util.verifyCallback(options, 'onconnect onerror onwillreconnect ondisconnect onmsg');
	    // 调用父类初始化
	    Protocol.call(self, options);
	    self.name = 'Chatroom';
	}

	var ChatroomProtocolFn = ChatroomProtocol.fn = ChatroomProtocol.prototype = Object.create(Protocol.prototype);

	ChatroomProtocolFn.init = function() {
	    var self = this;

	    self.socketUrls = self.options.chatroomAddresses.map(config.formatSocketUrl);
	    self.socketUrlsBackup = self.socketUrls.slice(0);

	    self.parser = parser;

	    self.syncResult = {};
	    self.timetags = {};
	};

	ChatroomProtocolFn.processResponse = function(packet) {
	    var self = this;
	    switch (packet.service) {
	    case 'chatroom':
	        self.processChatroom(packet);
	        break;
	    default:
	        // 如果没有找到对应的服务, 那么不作处理直接返回
	        break;
	    }
	};

	ChatroomProtocolFn.processChatroom = function(packet) {
	    var self = this;
	    switch (packet.cmd) {
	    case 'login':
	        if (!packet.error) {
	            packet.obj = {
	                chatroom: Chatroom.reverse(packet.content.chatroom),
	                member: ChatroomMember.reverse(packet.content.chatroomMember)
	            };
	        }
	        break;
	    case 'kicked':
	        self.onKicked(packet);
	        break;
	    case 'logout':
	        break;
	    case 'sendMsg':
	        self.onSendMsg(packet);
	        break;
	    case 'msg':
	        self.onMsg(packet);
	        break;
	    case 'getChatroomMembers':
	        self.onChatroomMembers(packet);
	        break;
	    case 'getHistoryMsgs':
	        self.onHistoryMsgs(packet);
	        break;
	    case 'markChatroomMember':
	        self.onMarkChatroomMember(packet);
	        break;
	    case 'dismissChatroom':
	        // empty
	        break;
	    case 'getChatroom':
	        self.onChatroom(packet);
	        break;
	    case 'getChatroomMembersInfo':
	        self.onChatroomMembersInfo(packet);
	        break;
	    case 'kickChatroomMember':
	        // empty
	        break;
	    default:
	        break;
	    }
	};

	ChatroomProtocolFn.onChatroom = function(packet) {
	    if (!packet.error) {
	        packet.obj.chatroom = Chatroom.reverse(packet.content.chatroom);
	    }
	};

	module.exports = ChatroomProtocol;

	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);


/***/ },
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var configBase = __webpack_require__(51);

	// 外层是 service, 内层是 cmd
	var idMap = util.merge({}, configBase.idMap, {
	    chatroom: {
	        id: 13,
	        // 进入聊天室
	        login: 2,
	        // 被踢
	        kicked: 3,
	        // 退出聊天室
	        logout: 4,
	        // 发消息
	        sendMsg: 6,
	        // 收到消息
	        msg: 7,
	        getChatroomMembers: 8,
	        getHistoryMsgs: 9,
	        markChatroomMember: 11,
	        dismissChatroom: 12,
	        getChatroom: 13,
	        getChatroomMembersInfo: 16,
	        kickChatroomMember: 17
	    }
	});

	/**
	 * 命令配置
	 * params 说明: 如果类型是 Property, 如果没有 entity, entity 值就是 name
	 */
	var cmdConfig = util.merge({}, configBase.cmdConfig, {
	    login: {sid: idMap.chatroom.id, cid: idMap.chatroom.login, params: [
	        {type: 'byte', name: 'type'},
	        {type: 'Property', name: 'login'},
	        {type: 'Property', name: 'imLogin'}
	    ]},
	    logout: {sid: idMap.chatroom.id, cid: idMap.chatroom.logout},
	    sendMsg: {sid: idMap.chatroom.id, cid: idMap.chatroom.sendMsg, params: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    getChatroomMembers: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroomMembers, params: [
	        {type: 'byte', name: 'type'},
	        {type: 'long', name: 'time'},
	        {type: 'int', name: 'limit'}
	    ]},
	    getHistoryMsgs: {sid: idMap.chatroom.id, cid: idMap.chatroom.getHistoryMsgs, params: [
	        {type: 'long', name: 'timetag'},
	        {type: 'int', name: 'limit'}
	    ]},
	    markChatroomMember: {sid: idMap.chatroom.id, cid: idMap.chatroom.markChatroomMember, params: [
	        {type: 'string', name: 'account'},
	        {type: 'int', name: 'type'},
	        {type: 'bool', name: 'isAdd'},
	        {type: 'int', name: 'level'},
	        {type: 'string', name: 'custom'}
	    ]},
	    dismissChatroom: {sid: idMap.chatroom.id, cid: idMap.chatroom.dismissChatroom, params: [
	        {type: 'string', name: 'custom'}
	    ]},
	    getChatroom: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroom},
	    getChatroomMembersInfo: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroomMembersInfo, params: [
	        {type: 'StrArray', name: 'accounts'}
	    ]},
	    kickChatroomMember: {sid: idMap.chatroom.id, cid: idMap.chatroom.kickChatroomMember, params: [
	        {type: 'string', name: 'account'},
	        {type: 'string', name: 'custom'}
	    ]}
	});

	/**
	 * 回包配置
	 * response 说明: 如果没有 entity, entity 值就是 name
	 */
	var serviceChatroom = 'chatroom';
	var packetConfig = util.merge({}, configBase.packetConfig, {
	    // 通知包
	    '4_10': {service: 'notify'},
	    '4_11': {service: 'notify'},
	    '13_2': {service: serviceChatroom, cmd: 'login', response: [
	        {type: 'Property', name: 'chatroom'},
	        {type: 'Property', name: 'chatroomMember'}
	    ]},
	    '13_3': {service: serviceChatroom, cmd: 'kicked', response: [
	        {type: 'Number', name: 'reason'},
	        {type: 'String', name: 'custom'}
	    ]},
	    '13_4': {service: serviceChatroom, cmd: 'logout'},
	    '13_6': {service: serviceChatroom, cmd: 'sendMsg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    '13_7': {service: serviceChatroom, cmd: 'msg', response: [
	        {type: 'Property', name: 'msg'}
	    ]},
	    '13_8': {service: serviceChatroom, cmd: 'getChatroomMembers', response: [
	        {type: 'PropertyArray', name: 'members', entity: 'chatroomMember'}
	    ]},
	    '13_9': {service: serviceChatroom, cmd: 'getHistoryMsgs', response: [
	        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
	    ]},
	    '13_11': {service: serviceChatroom, cmd: 'markChatroomMember', response: [
	        {type: 'Property', name: 'chatroomMember'}
	    ]},
	    '13_12': {service: serviceChatroom, cmd: 'dismissChatroom'},
	    '13_13': {service: serviceChatroom, cmd: 'getChatroom', response: [
	        {type: 'Property', name: 'chatroom'}
	    ]},
	    '13_16': {service: serviceChatroom, cmd: 'getChatroomMembersInfo', response: [
	        {type: 'PropertyArray', name: 'members', entity: 'chatroomMember'}
	    ]},
	    '13_17': {service: serviceChatroom, cmd: 'kickChatroomMember'}
	});

	module.exports = {
	    idMap: idMap,
	    cmdConfig: cmdConfig,
	    packetConfig: packetConfig
	};


/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports) {

	module.exports = {
	    "imLogin": {
	        "os": 4,
	        "sdkVersion": 6,
	        "protocolVersion": 9,
	        "deviceId": 13,
	        "appKey": 18,
	        "account": 19,
	        "browser": 24,
	        "token": 1000
	    },
	    "login": {
	        "appKey": 1,
	        "account": 2,
	        "deviceId": 3,
	        "chatroomId": 5,
	        "chatroomNick": 20,
	        "chatroomAvatar": 21,
	        "chatroomCustom": 22,
	        "chatroomEnterCustom": 23
	    },
	    "chatroom": {
	        "id": 1,
	        "name": 3,
	        "announcement": 4,
	        "broadcastUrl": 5,
	        "custom": 12,
	        "createTime": 14,
	        "updateTime": 15,
	        "creator": 100,
	        "onlineMemberNum": 101
	    },
	    "msg": {
	        "idClient": 1,
	        "type": 2,
	        "attach": 3,
	        "custom": 4,
	        "resend": 5,
	        "userUpdateTime": 6,
	        "fromNick": 7,
	        "fromAvatar": 8,
	        "fromCustom": 9,
	        "time": 20,
	        "from": 21,
	        "chatroomId": 22,
	        "fromClientType": 23
	    },
	    "chatroomMember": {
	        "chatroomId": 1,
	        "account": 2,
	        "type": 3,
	        "level": 4,
	        "nick": 5,
	        "avatar": 6,
	        "custom": 7,
	        "online": 8,
	        "guest": 9,
	        "enterTime": 10,
	        "blacked": 12,
	        "gaged": 13,
	        "valid": 14,
	        "updateTime": 15
	    }
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {
	    "imLogin": {
	        "4": "os",
	        "6": "sdkVersion",
	        "9": "protocolVersion",
	        "13": "deviceId",
	        "18": "appKey",
	        "19": "account",
	        "24": "browser",
	        "1000": "token"
	    },
	    "login": {
	        "1": "appKey",
	        "2": "account",
	        "3": "deviceId",
	        "5": "chatroomId",
	        "20": "chatroomNick",
	        "21": "chatroomAvatar",
	        "22": "chatroomCustom",
	        "23": "chatroomEnterCustom"
	    },
	    "chatroom": {
	        "1": "id",
	        "3": "name",
	        "4": "announcement",
	        "5": "broadcastUrl",
	        "12": "custom",
	        "14": "createTime",
	        "15": "updateTime",
	        "100": "creator",
	        "101": "onlineMemberNum"
	    },
	    "msg": {
	        "1": "idClient",
	        "2": "type",
	        "3": "attach",
	        "4": "custom",
	        "5": "resend",
	        "6": "userUpdateTime",
	        "7": "fromNick",
	        "8": "fromAvatar",
	        "9": "fromCustom",
	        "20": "time",
	        "21": "from",
	        "22": "chatroomId",
	        "23": "fromClientType"
	    },
	    "chatroomMember": {
	        "1": "chatroomId",
	        "2": "account",
	        "3": "type",
	        "4": "level",
	        "5": "nick",
	        "6": "avatar",
	        "7": "custom",
	        "8": "online",
	        "9": "guest",
	        "10": "enterTime",
	        "12": "blacked",
	        "13": "gaged",
	        "14": "valid",
	        "15": "updateTime"
	    }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var notundef = util.notundef;

	/**
	 * @constructor
	 * @name ChatroomInfo
	 * @property {String} id 聊天室 id
	 * @property {String} name 聊天室名字
	 * @property {String} announcement 聊天室公告
	 * @property {String} broadcastUrl 直播地址
	 * @property {String} custom 扩展字段
	 * @property {Number} createTime 创建时间
	 * @property {Number} updateTime 更新时间
	 * @property {String} creator 创建者账号
	 * @property {Number} onlineMemberNum 当前在线人数
	 */
	function Chatroom() {

	}

	Chatroom.reverse = function(chatroom) {
	    var obj = util.copy(chatroom);
	    if (notundef(obj.createTime)) {obj.createTime = +obj.createTime;}
	    if (notundef(obj.updateTime)) {obj.updateTime = +obj.updateTime;}
	    if (notundef(obj.onlineMemberNum)) {obj.onlineMemberNum = +obj.onlineMemberNum;}
	    return obj;
	};

	module.exports = Chatroom;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var notundef = util.notundef;

	/**
	 * 聊天室成员类型
	 * 
	 * - `'owner'` (房主)
	 * - `'manager'` (管理员)
	 * - `'restricted'` (受限制, 被拉黑或者禁言)
	 * - `'normal'` (普通成员)
	 * - `'guest'` (游客)
	 * 
	 * @memberOf ChatroomMember
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeReverseMap = {
	    '-1': 'restricted',
	    0: 'normal',
	    1: 'owner',
	    2: 'manager'
	};

	/**
	 * 聊天室成员
	 *
	 * @constructor
	 * @property {String} chatroomId 聊天室 ID
	 * @property {String} account 账号
	 * @property {String} nick 聊天室内的昵称
	 * @property {String} avatar 聊天室内的头像
	 * @property {String} type {@link ChatroomMember.type|聊天室成员类型}
	 * @property {Number} level 级别
	 * @property {Boolean} online 是否在线, 只有固定成员才能离线, 对游客而言只能是在线
	 * @property {Number} enterTime 进入聊天室的时间, 如果离线, 无该字段
	 * @property {String} custom 扩展字段
	 * @property {Number} updateTime 更新时间
	 */
	function ChatroomMember() {}

	ChatroomMember.reverse = function(chatroomMember) {
	    var obj = util.copy(chatroomMember);
	    if (notundef(obj.chatroomId)) {obj.chatroomId = '' + obj.chatroomId;}
	    if (notundef(obj.type)) {obj.type = typeReverseMap[obj.type];}
	    if (notundef(obj.level)) {obj.level = +obj.level;}
	    if (notundef(obj.online)) {obj.online = +obj.online===1;}
	    if (notundef(obj.enterTime)) {obj.enterTime = +obj.enterTime;}
	    if (notundef(obj.guest)) {obj.guest = +obj.guest===1;}
	    if (notundef(obj.blacked)) {obj.blacked = +obj.blacked===1;}
	    if (notundef(obj.gaged)) {obj.gaged = +obj.gaged===1;}
	    if (notundef(obj.valid)) {obj.valid = +obj.valid===1;}
	    if (notundef(obj.updateTime)) {obj.updateTime = +obj.updateTime;}
	    
	    // 如果不在线, 去掉进入时间
	    if (!obj.online) {delete obj.enterTime;}
	    
	    // 如果是游客, 设置其类型, 去掉无意义的字段
	    if (obj.guest) {
	        obj.type = 'guest';
	        delete obj.valid;
	    }

	    // 如果不是普通成员, 去掉等级
	    if (obj.type !== 'normal') {
	        delete obj.level;
	    }

	    delete obj.guest;

	    return obj;
	};

	ChatroomMember.reverseMembers = function(members) {
	    return members.map(function(member) {
	        return ChatroomMember.reverse(member);
	    });
	};

	ChatroomMember.validTypes = Object.keys(typeReverseMap);

	module.exports = ChatroomMember;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var ChatroomProtocolFn = __webpack_require__(38).fn;

	ChatroomProtocolFn.refreshSocketUrl = function() {
	    var self = this;
	    self.socketUrls = self.socketUrlsBackup.slice(0);
	    self.connectToUrl(self.getNextSocketUrl());
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var ChatroomProtocolFn = __webpack_require__(38).fn;
	var device = __webpack_require__(47);
	var util = __webpack_require__(10);

	ChatroomProtocolFn.assembleLogin = function() {
	    var self = this;
	    var options = self.options;
	    var login = {
	        appKey: options.appKey,
	        account: options.account,
	        deviceId: device.deviceId,
	        chatroomId: options.chatroomId
	    };
	    login = util.merge(login, util.filterObj(options, 'chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom'));
	    return {
	        type: 1,
	        login: login,
	        imLogin: self.assembleIMLogin()
	    };
	};

	ChatroomProtocolFn.afterLogin = function(obj) {
	    var self = this;
	    var chatroom = obj.chatroom;
	    self.chatroom = chatroom;
	    self.api.info = chatroom;
	};

	ChatroomProtocolFn.kickedReasons = [
	    '',
	    'chatroomDismiss',
	    'managerKick',
	    'samePlatformKick',
	    'illegalState',
	    'blacked'
	];

	ChatroomProtocolFn.kickedMessages = [
	    '',
	    '聊天室解散了',
	    '被房主或者管理员踢出',
	    '不允许同一个帐号在多个地方同时登录',
	    '状态异常',
	    '被拉黑了'
	];


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var ChatroomProtocolFn = __webpack_require__(38).fn;
	var util = __webpack_require__(10);

	ChatroomProtocolFn.completeMsg = function(msg) {
	    var self = this;
	    msg.chatroomId = self.chatroom.id;
	    msg.from = self.options.account;
	    msg.fromClientType = 'Web';
	    if (!msg.time) {msg.time = +new Date();}
	};

	ChatroomProtocolFn.onMsg = function(packet) {
	    var self = this;
	    var msg = self.message.reverse(packet.content.msg);
	    if (self.checkMsgUnique(msg)) {
	        self.options.onmsg(msg);
	    }
	};

	ChatroomProtocolFn.checkMsgUnique = util.genCheckUniqueFunc('idClient');

	ChatroomProtocolFn.onSendMsg = function(packet) {
	    var msg = packet.obj.msg;
	    if (!packet.error) {
	        msg = packet.content.msg;
	        msg.status = 'success';
	    } else {
	        msg.status = 'fail';
	    }
	    msg = this.message.reverse(msg);
	    packet.obj = msg;
	};

	ChatroomProtocolFn.onHistoryMsgs = function(packet) {
	    if (!packet.error) {
	        packet.obj.msgs = this.message.reverseMsgs(packet.content.msgs);
	    }
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var ChatroomProtocolFn = __webpack_require__(38).fn;
	var ChatroomMember = __webpack_require__(55);

	ChatroomProtocolFn.onChatroomMembersInfo = 
	ChatroomProtocolFn.onChatroomMembers = function(packet) {
	    if (!packet.error) {
	        packet.obj.members = ChatroomMember.reverseMembers(packet.content.members);
	    }
	};

	ChatroomProtocolFn.onMarkChatroomMember = function(packet) {
	    if (!packet.error) {
	        packet.obj.member = ChatroomMember.reverse(packet.content.chatroomMember);
	    }
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Index = function(options) {
	    this.account = options.account;
	};

	var pro = Index.prototype;

	var Message = pro.Message = __webpack_require__(61);
	var TextMessage = pro.TextMessage = __webpack_require__(63);
	var FileMessage = pro.FileMessage = __webpack_require__(64);
	var NotificationMessage = pro.NotificationMessage = __webpack_require__(65);
	var CustomMessage = pro.CustomMessage = __webpack_require__(66);

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
	    case 'notification':
	        obj = NotificationMessage.reverse(msg);
	        break;
	    case 'custom':
	        obj = CustomMessage.reverse(msg);
	        break;
	    }
	    Message.setExtra(obj, this.account);
	    return obj;
	};

	pro.reverseMsgs = function(msgs) {
	    var self = this;
	    return msgs.map(function(msg) {
	        return self.reverse(msg);
	    });
	};

	module.exports = Index;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var loginPort = __webpack_require__(46);
	var BaseMessage = __webpack_require__(62);

	/**
	 * 消息类型
	 * 
	 * - `'text'` (文本)
	 * - `'custom'` (自定义消息)
	 * - `'notification'` (聊天室通知消息)
	 *     - 某些聊天室操作后所有聊天室成员会收到一条相应的聊天室通知消息, 详细介绍请参考{@link ChatroomMessage.attach.type|聊天室通知消息的类型}
	 * 
	 * @memberOf ChatroomMessage
	 * @name type
	 * @readOnly
	 * @enum {String}
	 */
	var typeMap = BaseMessage.typeMap;
	Message.validTypes = BaseMessage.validTypes;

	/**
	 * 聊天室消息
	 *
	 * @constructor
	 * @name ChatroomMessage
	 * @property {String}   chatroomId      聊天室 ID
	 * @property {String}   idClient        SDK生成的消息id, 在发送消息之后会返回给开发者, 开发者可以在发送消息的结果回调里面根据这个ID来判断相应消息的发送状态, 到底是发送成功了还是发送失败了, 然后根据此状态来更新页面的UI。如果发送失败, 那么可以重新发送此消息
	 * @property {String}   from            消息发送方, 帐号
	 * @property {String}   fromNick        消息发送方的昵称
	 * @property {String} fromAvatar 消息发送方的头像
	 * @property {String} fromCustom 消息发送方的扩展字段
	 * @property {String}   fromClientType  发送方的{@link LoginPort.type|设备类型}
	 * @property {String}   type            {@link ChatroomMessage.type|消息类型}
	 * @property {String}   flow            消息的流向
	 * - 'in'表示此消息是收到的消息
	 * - 'out'表示此消息是发出的消息
	 * @property {String}   [text]          文本消息的文本内容, 请参考{@link Chatroom#sendText|发送文本消息}
	 * @property {String}   [content]       自定义消息的消息内容, 开发者可以自行扩展, 建议封装成JSON格式字符串, 请参考{@link Chatroom#sendCustomMsg|发送自定义消息}
	 * @property {Object}   [attach]        {@link ChatroomMessage.type|聊天室通知消息}的附加信息, 
	 *                                      参考{@link ChatroomMessage.attach.type|聊天室通知消息的类型}来查看详细解释
	 * @property {String}   [custom]        扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @property {Boolean}  resend          是否是重发的消息
	 * @property {Number}   time            时间戳
	 */
	function Message(options) {
	    var self = this;
	    // 如果不是重发, 那么生成idClient；如果是重发, 那么由开发者传入idClient
	    if (!options.resend) {
	        self.idClient = util.guid();
	    } else {
	        util.verifyOptions(options, 'idClient');
	        self.idClient = options.idClient;
	    }
	    self.type = typeMap[options.type];
	    self.resend = !!options.resend ? 1 : 0;
	    if (notundef(options.custom)) { self.custom = '' + options.custom; }
	}

	Message.getType = BaseMessage.getType;

	Message.reverse = function(msg) {
	    var obj = util.filterObj(msg, 'chatroomId idClient from fromNick fromAvatar fromCustom userUpdateTime custom status');
	    obj = util.merge(obj, {
	        fromClientType: loginPort.reverseType(msg.fromClientType),
	        type: Message.getType(msg),
	        time: +msg.time,
	        resend: +msg.resend === 1
	    });
	    if (notundef(obj.userUpdateTime)) {obj.userUpdateTime = +obj.userUpdateTime;}
	    obj.status = obj.status || 'success';
	    return obj;
	};

	Message.setExtra = function(obj, account) {
	    BaseMessage.setFlow(obj, account);
	};

	module.exports = Message;


/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(61);
	var util = __webpack_require__(10);

	function TextMessage(options) {
	    util.verifyOptions(options, 'text');
	    options.type = 'text';
	    Message.call(this, options);
	    // 这里跟 IM 消息不一样
	    this.attach = options.text;
	}
	TextMessage.prototype = Object.create(Message.prototype);

	TextMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    obj.text = msg.attach;
	    return obj;
	};

	module.exports = TextMessage;


/***/ },
/* 64 */
/***/ function(module, exports) {

	

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* exported notificationTypes */

	var util = __webpack_require__(10);
	var notundef = util.notundef;
	var Message = __webpack_require__(61);

	/**
	 * 聊天室通知消息的类型
	 *
	 * - 聊天室通知消息是{@link ChatroomMessage|聊天室消息}的一种, 请参考{@link ChatroomMessage.type|聊天室消息类型}, 某些聊天室操作后所有聊天室成员会收到一条相应的聊天室通知消息
	 * - 聊天室通知消息有一个字段`attach`包含了额外的信息, `attach`有一个字段`type`来标识聊天室通知消息的类型
	 *     - `memberEnter`
	 *         - 当有人进入聊天室时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'memberEnter'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `memberExit`
	 *         - 当有人退出聊天室时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'memberExit'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `addManager`
	 *         - 当有人被{@link Chatroom#markChatroomManager|加为管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addManager'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `removeManager`
	 *         - 当有人被{@link Chatroom#markChatroomManager|移除管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeManager'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `addLevel`
	 *         - 当有人被{@link Chatroom#markChatroomMemberLevel|添加等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `removeLevel`
	 *         - 当有人被{@link Chatroom#markChatroomMemberLevel|移除等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `blackMember`
	 *         - 当有人被{@link Chatroom#markChatroomBlacklist|加入黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `unblackMember`
	 *         - 当有人被{@link Chatroom#markChatroomBlacklist|移除黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `gagMember`
	 *         - 当有人被{@link Chatroom#markChatroomGaglist|加入禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'gagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `ungagMember`
	 *         - 当有人被{@link Chatroom#markChatroomGaglist|移除禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'ungagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 *     - `kickMember`
	 *         - 当有人被{@link Chatroom#kickChatroomMember|踢出聊天室}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.type|`'kickMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * - `attach`的字段`from`为操作方的账号, `fromNick`为操作方的昵称, `to`为被操作方的账号, `toNick`为被操作方的昵称
	 * 
	 * @memberOf ChatroomMessage
	 * @readOnly
	 * @enum {String}
	 * @alias attach.type
	 */

	/*
	 *     - `updateChatroom`
	 *         - 当房主或者管理员{@link Chatroom#updateChatroom|更新聊天室}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.type|`'updateChatroom'`}的{@link ChatroomMessage|聊天室通知消息}。
	*/

	var notificationTypes = {};

	var notificationTypeReverseMap = {
	    301: 'memberEnter',
	    302: 'memberExit',
	    303: 'blackMember',
	    304: 'unblackMember',
	    305: 'gagMember',
	    306: 'ungagMember',
	    307: 'addManager',
	    308: 'removeManager',
	    309: 'addLevel',
	    310: 'removeLevel',
	    311: 'dismissChatroom',
	    312: 'updateChatroom',
	    313: 'kickMember'
	};

	// 聊天室通知消息
	function NotificationMessage() {}

	NotificationMessage.prototype = Object.create(Message.prototype);

	NotificationMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    msg.attach = !!msg.attach ? ''+msg.attach : '';
	    if (msg.attach) {
	        var attach = JSON.parse(msg.attach);
	        obj.attach = {
	            type: notificationTypeReverseMap[attach.id]
	        };
	        if (notundef(attach.data)) {
	            var data = attach.data;
	            if (notundef(data.operator)) {
	                obj.attach.from = data.operator;
	            }
	            if (notundef(data.opeNick)) {
	                obj.attach.fromNick = data.opeNick;
	            }
	            if (notundef(data.target)) {
	                obj.attach.to = data.target;
	            }
	            if (notundef(data.tarNick)) {
	                obj.attach.toNick = data.tarNick;
	            }
	            if (notundef(data.ext)) {
	                obj.attach.custom = data.ext;
	            }
	        }
	    } else {
	        obj.attach = {};
	    }
	    return obj;
	};

	module.exports = NotificationMessage;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Message = __webpack_require__(61);
	var util = __webpack_require__(10);

	function CustomMessage(options) {
	    util.verifyOptions(options, 'content');
	    Message.call(this, options);
	    this.attach = options.content;
	}

	CustomMessage.prototype = Object.create(Message.prototype);

	CustomMessage.reverse = function(msg) {
	    var obj = Message.reverse(msg);
	    obj.content = msg.attach;
	    return obj;
	};

	module.exports = CustomMessage;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var undef = util.undef;
	var ChatroomFn = __webpack_require__(8).fn;

	/**
	 * 发送文本消息
	 *
	 * - 文本消息是消息的一种, 请参考{@link ChatroomMessage|消息}
	 * 
	 * @memberOf Chatroom#
	 * @method sendText
	 * 
	 * @param  {Object}             options                         配置参数
	 * @param  {String}             options.text                    文本消息内容
	 * @param  {Boolean}            [options.resend]                是否是重发
	 * @param  {String}             [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}             [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param  {done}               options.done                    结果回调函数
	 * @return {Message}                                            {@link ChatroomMessage|消息}
	 *
	 * @see {@link Chatroom#sendText|发送文本消息}
	 * @see {@link Chatroom#sendCustomMsg|发送自定义消息}
	 * 
	 * @example
	 * var msg = chatroom.sendText({
	 *     text: 'hello',
	 *     done: sendChatroomMsgDone
	 * });
	 * console.log('正在发送聊天室text消息, id=' + msg.idClient);
	 * function sendChatroomMsgDone(error, msg) {
	 *     console.log('发送聊天室' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient, error, msg);
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
	 * @see {@link Chatroom#previewFile|预览文件}
	 * @see {@link Chatroom#sendFile|发送文件消息}
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
	 * - 开发者在拿到文件对象之后, 可以进行处理, 然后调用{@link Chatroom#sendFile|发送文件消息}来发送文件消息。
	 * - 文件大小限制为最大 100M
	 *     - 高级浏览器会在上传前就检测文件大小
	 *     - IE8/IE9 会在上传完成后检测文件大小
	 * 
	 * @memberOf Chatroom#
	 * @method previewFile
	 * @private
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
	 * @see {@link Chatroom#sendFile|发送文件消息}
	 *
	 * @example
	 * chatroom.previewFile({
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
	 *             var msg = chatroom.sendFile({
	 *                 scene: 'p2p',
	 *                 to: 'account',
	 *                 file: file,
	 *                 done: sendMsgDone
	 *             });
	 *             console.log('正在发送聊天室image消息, id=' + msg.idClient);
	 *             pushMsg(msg);
	 *         }
	 *     }
	 * });
	 */

	/**
	 * 上传完成回调
	 * @callback uploaddone
	 * @param {ChatroomError}    error   是否出错
	 * @param {Object}      file    上传成功时会包含文件对象, 请参考
	 *                              {@link Image|图片对象}
	 *                              {@link Audio|音频对象}
	 *                              {@link Video|视频对象}
	 *                              {@link File|文件对象}
	 * @see {@link Chatroom#sendFile|发送文件消息}
	 */
	/**
	 * 发送文件消息之前的回调函数
	 * @callback beforesend
	 * @param {String} idClient SDK生成的ID
	 * @see {@link Chatroom#sendFile|发送文件消息}
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
	 * - 开发者也可以先{@link Chatroom#previewFile|预览文件}来获取文件对象, 然后调用此接口发送文件消息。
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
	 * @memberOf Chatroom#
	 * @method sendFile
	 * @private
	 *
	 * @param  {Object}         options                         配置参数
	 * @param  {String}         [options.type]                  文件过滤器, 
	 *                                                          `'image'`会过滤掉非图片的文件, `'audio'`过滤掉非音频, `'video'`会过滤掉非视频的文件, 
	 *                                                          IE8/IE9 不支持文件过滤
	 * @param  {String|Node}    [options.fileInput]             文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
	 * @param  {Blob}           [options.blob]                  Blob 对象
	 * @param  {String}         [options.dataURL]               MIME type 和 base64 数据的 data URL
	 * @param  {Array}          [options.file]                  文件对象, 开发者可以通过{@link Chatroom#previewFile|预览文件}拿到文件对象
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
	 * @param {String} [options.fromNick] 发送方的昵称
	 * @param  {done}           options.done                结果回调函数
	 * @return {Void|Message}
	 * - 如果提供了参数fileInput, 那么先上传文件到服务器再发送, 不会返回{@link ChatroomMessage|消息}, 会在beforesend里面返回{@link ChatroomMessage|消息}. 
	 * - 如果提供了参数file, 那么直接发送文件消息, 返回{@link ChatroomMessage|消息}
	 *
	 * @see {@link Chatroom#previewFile|预览文件}
	 * @see {@link Chatroom#sendText|发送文本消息}
	 * @see {@link Chatroom#sendFile|发送文件消息}
	 *
	 * @example
	 * chatroom.sendFile({
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
	 *         console.log('正在发送聊天室image消息, id=' + msg.idClient);
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
	 * @memberOf Chatroom#
	 * @method sendCustomMsg
	 *
	 * @param  {Object}         options                         配置参数
	 * @param  {String}         options.content                 自定义消息的消息内容, 推荐使用JSON格式构建
	 * @param  {Boolean}        [options.resend]                是否是重发
	 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
	 * @param  {String}         [options.custom]                扩展字段
	 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
	 * @param {String} [options.fromNick] 发送方的昵称
	 * @param  {done}               options.done                结果回调函数
	 * @return {Message}                                        {@link ChatroomMessage|消息}
	 *
	 * @see {@link Chatroom#sendText|发送文本消息}
	 * @see {@link Chatroom#sendCustomMsg|发送自定义消息}
	 *
	 * @example
	 * var value = Math.ceil(Math.random()*3);
	 * var content = {
	 *     type: 1,
	 *     data: {
	 *         value: value
	 *     }
	 * };
	 * var msg = chatroom.sendCustomMsg({
	 *     content: JSON.stringify(content),
	 *     done: sendChatroomMsgDone
	 * });
	 * console.log('正在发送聊天室自定义消息, id=' + msg.idClient);
	 */

	ChatroomFn.beforeSendMsg = function(options) {
	    options.cmd = 'sendMsg';
	};

	/**
	 * 获取聊天室历史消息
	 *
	 * - 获取从 timetag 对应的时间点往前的若干条数据
	 * - 不填 timetag 的话默认为服务器当前时间
	 *
	 * @memberOf Chatroom#
	 * @method getHistoryMsgs
	 * 
	 * @param  {Object} options 配置参数
	 * @param {Number} [options.timetag] 时间戳
	 * @param {Number} [options.limit=100] limit, 默认 100
	 * @return {Void}
	 *
	 * @example
	 * chatroom.getHistoryMsgs({
	 *     timetag: 1451393192478,
	 *     limit: 100,
	 *     done: getHistoryMsgsDone
	 * });
	 * function getHistoryMsgsDone(error, obj) {
	 *     console.log('获取聊天室历史' + (!error?'成功':'失败'), error, obj.msgs);
	 * }
	 */
	ChatroomFn.getHistoryMsgs = function(options) {
	    util.verifyOptions(options);
	    if (undef(options.timetag)) {
	        options.timetag = 0;
	    } else {
	        util.verifyParamType('timetag', options.timetag, 'number');
	    }
	    if (undef(options.limit)) {
	        options.limit = 100;
	    } else {
	        util.verifyParamType('limit', options.limit, 'number');
	    }
	    var self = this;
	    self.processCallback(options);
	    self.sendCmd('getHistoryMsgs', options, options.callback);
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(10);
	var undef = util.undef;
	var verifyOptions = util.verifyOptions;
	var verifyParamType = util.verifyParamType;
	var ChatroomFn = __webpack_require__(8).fn;

	/**
	 * 获取聊天室成员列表
	 *
	 * @memberOf Chatroom#
	 * @method getChatroomMembers
	 * 
	 * @param  {Object} options 配置参数
	 * @param {Boolean} options.guest `true`表示获取游客, `false`表示获取非游客成员
	 * - 游客列表按照游客进入聊天室的时间倒序排列
	 * - 非游客（即固定成员）列表按照成为固定成员的时间倒序排列
	 * @param {Boolean} [options.onlyOnline=false] 当设置`guest=false`来获取非游客成员时, 默认会获取所有的固定成员, 包括不在线的, 可以设置`onlyOnline=true`来只获取在线的固定成员
	 * @param {Number} [options.time=0] 分页用, 查找该时间戳之前的成员
	 * - 默认 0 代表当前服务器时间
	 * - 获取游客时, 此字段填上次获取的最后一个游客的`enterTime`
	 * - 获取非游客时, 此字段填上次获取的最后一个非游客的`updateTime`
	 * @param {Number} [options.limit=100] 分页用, 默认 100
	 * @param  {done} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}列表
	 * @return {Void}
	 *
	 * @example
	 * chatroom.getChatroomMembers({
	 *     guest: false,
	 *     limit: 100,
	 *     done: getChatroomMembersDone
	 * });
	 * function getChatroomMembersDone(error, obj) {
	 *     console.log('获取聊天室成员' + (!error?'成功':'失败'), error, obj.members);
	 * }
	 */
	ChatroomFn.getChatroomMembers = function(options) {
	    var self = this;
	    verifyOptions(options, 'guest');
	    verifyParamType('guest', options.guest, 'boolean');
	    if (undef(options.time)) {
	        options.time = 0;
	    } else {
	        verifyParamType('time', options.time, 'number');
	    }
	    if (undef(options.limit)) {
	        options.limit = 100;
	    } else {
	        verifyParamType('limit', options.limit, 'number');
	    }
	    self.processCallback(options);

	    options.type = options.guest ? 1 : 0;
	    if (!options.guest && options.onlyOnline) {
	        options.type = 2;
	    }
	    self.sendCmd('getChatroomMembers', options);
	};

	/**
	 * 获取聊天室成员信息
	 * 
	 * @memberOf Chatroom#
	 * @method getChatroomMembersInfo
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String[]} options.accounts 待查询的账号列表
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}列表
	 * @return {Void}
	 * 
	 * @example
	 * chatroom.getChatroomMembersInfo({
	 *     accounts: ['account1', 'account2'],
	 *     done: getChatroomMembersInfoDone
	 * });
	 * function getChatroomMembersInfo(erorr, obj) {
	 *     console.log('获取聊天室成员信息' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	ChatroomFn.getChatroomMembersInfo = function(options) {
	    var self = this;
	    verifyOptions(options, 'accounts');
	    verifyParamType('accounts', options.accounts, 'array');
	    self.processCallback(options);
	    self.sendCmd('getChatroomMembersInfo', options);
	};

	/**
	 * 设置聊天室管理员
	 *
	 * - 管理员可以{@link Chatroom#markChatroomMemberLevel|设置聊天室成员等级}, {@link Chatroom#markChatroomBlacklist|设置聊天室黑名单}, {@link Chatroom#markChatroomGaglist|设置聊天室禁言名单}, {@link Chatroom#kickChatroomMember|踢聊天室成员}
	 *
	 * @memberOf Chatroom#
	 * @method markChatroomManager
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} options.account 待设置的账号
	 * @param {Boolean} options.isAdd `true`表示添加, `false`表示移除
	 * - 当有人被{@link Chatroom#markChatroomManager|加为管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addManager'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * - 当有人被{@link Chatroom#markChatroomManager|移除管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeManager'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
	 * @return {Void}
	 *
	 * @example
	 * chatroom.markChatroomManager({
	 *     account: 'account',
	 *     isAdd: true,
	 *     done: markChatroomManagerDone
	 * });
	 * function markChatroomManagerDone(error, obj) {
	 *     console.log('添加聊天室管理员' + (!error?'成功':'失败'), error, obj.member);
	 * }
	 */
	ChatroomFn.markChatroomManager = function(options) {
	    options.type = 1;
	    this.markChatroomMember(options);
	};

	/**
	 * 设置聊天室成员等级
	 *
	 * @memberOf Chatroom#
	 * @method markChatroomMemberLevel
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} options.account 待设置的账号
	 * @param {Boolean} options.isAdd 是否添加等级
	 * - 当有人被{@link Chatroom#markChatroomMemberLevel|添加等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * - 当有人被{@link Chatroom#markChatroomMemberLevel|移除等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * @param {Number} options.level 等级
	 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
	 * @return {Void}
	 *
	 * @example
	 * chatroom.markChatroomMemberLevel({
	 *     account: 'account',
	 *     level: 1,
	 *     done: markChatroomMemberLevelDone
	 * });
	 * function markChatroomMemberLevelDone(error, obj) {
	 *     console.log('更改聊天室成员等级' + (!error?'成功':'失败'), error, obj.member);
	 * }
	 */
	ChatroomFn.markChatroomMemberLevel = function(options) {
	    options.type = 2;
	    this.markChatroomMember(options);
	};

	/**
	 * 设置聊天室黑名单
	 *
	 * - 被加入黑名单的人将不能进入此聊天室
	 *
	 * @memberOf Chatroom#
	 * @method markChatroomBlacklist
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} options.account 待设置的账号
	 * @param {Boolean} options.isAdd `true`表示添加, `false`表示移除
	 * - 当有人被{@link Chatroom#markChatroomBlacklist|加入黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * - 当有人被{@link Chatroom#markChatroomBlacklist|移除黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
	 * @return {Void}
	 *
	 * @example
	 * chatroom.markChatroomBlacklist({
	 *     account: 'account',
	 *     isAdd: true,
	 *     done: markChatroomBlacklistDone
	 * });
	 * function markChatroomBlacklistDone(error, obj) {
	 *     console.log('添加聊天室黑名单' + (!error?'成功':'失败'), error, obj.member);
	 * }
	 */
	ChatroomFn.markChatroomBlacklist = function(options) {
	    options.type = -1;
	    this.markChatroomMember(options);
	};

	/**
	 * 设置聊天室禁言名单
	 *
	 * - 被加入禁言名单的人将不能在该聊天室发送消息
	 *
	 * @memberOf Chatroom#
	 * @method markChatroomGaglist
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} options.account 待设置的账号
	 * @param {Boolean} options.isAdd `true`表示添加, `false`表示移除
	 * - 当有人被{@link Chatroom#markChatroomGaglist|加入禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'gagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * - 当有人被{@link Chatroom#markChatroomGaglist|移除禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'ungagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
	 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
	 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
	 * @return {Void}
	 *
	 * @example
	 * chatroom.markChatroomGaglist({
	 *     account: 'account',
	 *     isAdd: true,
	 *     done: markChatroomGaglistDone
	 * });
	 * function markChatroomGaglistDone(error, obj) {
	 *     console.log('添加聊天室禁言名单' + (!error?'成功':'失败'), error, obj.member);
	 * }
	 */
	ChatroomFn.markChatroomGaglist = function(options) {
	    options.type = -2;
	    this.markChatroomMember(options);
	};

	ChatroomFn.markChatroomMember = function(options) {
	    verifyOptions(options, 'account type isAdd');
	    verifyParamType('isAdd', options.isAdd, 'boolean');
	    if (undef(options.level)) {
	        options.level = 0;
	    } else {
	        verifyParamType('level', options.level, 'number');
	    }
	    var self = this;
	    self.processCustom(options);
	    self.processCallback(options);
	    self.sendCmd('markChatroomMember', options);
	};

	/**
	 * 踢聊天室成员
	 * 
	 * - 当有人被{@link Chatroom#kickChatroomMember|踢出聊天室}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.type|'`kickMember`'}的{@link ChatroomMessage|聊天室通知消息}。
	 * 
	 * @memberOf Chatroom#
	 * @method kickChatroomMember
	 * 
	 * @param  {Object} options 配置参数
	 * @param {String} options.account 待踢的账号
	 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段, 被踢的人收到的`kicked`的`custom`的值为次字段
	 * @param {Function} options.done 结果回调函数
	 * @return {Void}
	 * 
	 * @example
	 * chatroom.kickChatroomMember({
	 *     account: 'account',
	 *     done: kickChatroomMemberDone
	 * });
	 * function kickChatroomMember(error, obj) {
	 *     console.log('踢人' + (!error?'成功':'失败'), error, obj);
	 * }
	 */
	ChatroomFn.kickChatroomMember = function(options) {
	    var self = this;
	    verifyOptions(options, 'account');
	    self.processCustom(options);
	    self.processCallback(options);
	    self.sendCmd('kickChatroomMember', options);
	};


/***/ }
])
});
;